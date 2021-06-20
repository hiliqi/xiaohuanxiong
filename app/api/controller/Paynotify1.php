<?php


namespace app\api\controller;

use app\BaseController;
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
        $order_id = str_replace('xwx_order_', '', $data['orderid']);
        try {
            $order = UserOrder::findOrFail($order_id); //通过返回的订单id查询数据库
            // md5签名 再拼接key字段 参数原串
            $remote_sign = $data['sign'];
            unset($data['sign'], $data['attach']);
            ksort($data);
            $data = array_filter($data);
            $merchant_key = config('payment.pay.appkey');
            $sign_string = urldecode(http_build_query($data)) . '&key=' . $merchant_key;
            if (strtoupper(md5($sign_string)) != $remote_sign) {
                return json(['code' => 1001, 'msg' => '数据验证失败']);
            }

// 处理业务逻辑
            $status = 0;
            if ((int)$data['returncode'] == "00") { //如果已支付，则更新用户财务信息
                $status = 1;
                if (intval($order->status) == 0) {
                    $order->money = $data['amount'];
                    $order->update_time = time(); //云端处理订单时间戳
                    $order->status = $status;
                    $order->save(); //更新订单

                    $userFinance = new UserFinance();
                    $userFinance->user_id = $order->user_id;
                    $userFinance->money = $order->money;
                    $userFinance->usage = (int)$order->pay_type == 1 ? 1 : 2;
                    $userFinance->summary = '乐付';
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
            return json(['code' => 1001, 'msg' => '订单不存在']);
        }


    }
}