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
        $params = new \Yurun\PaySDK\AlipayApp\Params\PublicParams;
        $params->appPrivateKey = config('payment.pay.appPrivateKey');
        $params->appPublicKey = config('payment.pay.appPublicKey');


        $pay = new \Yurun\PaySDK\AlipayApp\SDK($params);
        if ($pay->verifyCallback($data)) {
            $number = config('site.domain') . '_';
            $order_id = str_replace($number, '', $data['out_trade_no']);
            try {
                $order = UserOrder::findOrFail($order_id); //通过返回的订单id查询数据库
                $status = 0;
                if ($data['trade_status'] == "TRADE_SUCCESS") { //如果已支付，则更新用户财务信息
                    $status = 1;
                    if (intval($order->status) == 0) {
                        $order->money = $data['total_amount'];
                        $order->update_time = time(); //云端处理订单时间戳
                        $order->status = $status;
                        $order->save(); //更新订单

                        $userFinance = new UserFinance();
                        $userFinance->user_id = $order->user_id;
                        $userFinance->money = $order->money;
                        $userFinance->usage = (int)$order->pay_type == 1 ? 1 : 2;
                        $userFinance->summary = '支付宝官方支付';
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
                file_put_contents('/www/wwwroot/logs/error.txt', '订单不存在' . $e->getMessage());
                return 'fail';
            }
        } else {
            file_put_contents('/www/wwwroot/logs/error.txt', '校验失败');
            return 'fail';
        }


    }
}