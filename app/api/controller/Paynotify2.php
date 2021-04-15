<?php


namespace app\api\controller;

use app\BaseController;
use app\common\epay\AlipayNotify;
use app\model\User;
use app\model\UserFinance;
use app\model\UserOrder;
use app\service\PromotionService;
use think\db\exception\ModelNotFoundException;

class Paynotify extends BaseController
{
    public function index()
    {
        $data = request()->param();
        ksort($_POST); //排序post参数
        reset($_POST); //内部指针指向数组中的第一个元素
        $codepay_key=config('payment.pay.appkey'); //这是您的密钥
        $sign = '';//初始化
        foreach ($_POST AS $key => $val) { //遍历POST参数
            if ($val == '' || $key == 'sign') continue; //跳过这些不签名
            if ($sign) $sign .= '&'; //第一个字符串签名不加& 其他加&连接起来参数
            $sign .= "$key=$val"; //拼接为url参数形式
        }
        if (!$data['pay_no'] || md5($sign . $codepay_key) != $data['sign']) { //不合法的数据
            return 'fail';  //返回失败 继续补单
        } else { //合法的数据
            //业务处理
            $money = (float)$data['money']; //实际付款金额
            $price = (float)$data['price']; //订单的原价
            $order_id = $data['pay_id'];
            try {
                $order = UserOrder::where('order_id','=',$order_id)->findOrFail(); //通过返回的订单id查询数据库
                $status = 0;
                if ($money == $price) { //如果已支付，则更新用户财务信息
                    $status = 1;
                    if (intval($order->status) == 0) {
                        $order->money = $money;
                        $order->update_time = time(); //云端处理订单时间戳
                        $order->status = $status;
                        $order->save(); //更新订单

                        $userFinance = new UserFinance();
                        $userFinance->user_id = $order->user_id;
                        $userFinance->money = $order->money;
                        $userFinance->usage = (int)$order->pay_type == 1 ? 1 : 2;
                        $userFinance->summary = '码支付';
                        $userFinance->save(); //存储用户财务数据

                        if (intval($order->pay_type) == 2) { //再处理一遍购买vip的逻辑
                            $userFinance = new UserFinance();
                            $userFinance->user_id = $order->user_id;
                            $userFinance->money = $order->money;
                            $userFinance->usage = 2; //购买vip
                            $userFinance->summary = '购买vip';
                            $userFinance->save(); //存储用户财务数据

                            $user = User::findOrFail($order->user_id);
                            $arr = config('payment.vip'); //拿到vip配置数组
                            foreach ($arr as $key => $value) {
                                if ((int)$value['price'] == $order->money) {
                                    $day = $value['day'];
                                    if ($user->vip_expire_time < time()) { //说明vip已经过期
                                        $user->vip_expire_time = time() + $day * 24 * 60 * 60;
                                    } else { //vip没过期，则在现有vip时间上增加
                                        $user->vip_expire_time = $user->vip_expire_time + $day * 24 * 60 * 60;
                                    }
                                    $user->save();
                                    session('vip_expire_time', $user->vip_expire_time);
                                }
                            }
                        }

                        $promotionService = new PromotionService();
                        $promotionService->rewards($order->user_id, $order->money); //调用推广处理函数
                    }
                }
                return 'success';

            } catch (ModelNotFoundException $e) {
                return 'fail';
            }
        }
    }
}