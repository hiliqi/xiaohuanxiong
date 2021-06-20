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
        $alipay_config['partner'] = config('payment.pay.appid');
        $alipay_config['key'] = config('payment.pay.appkey');
        //签名方式 不需修改
        $alipay_config['sign_type'] = strtoupper('MD5');
        //字符编码格式 目前支持 gbk 或 utf-8
        $alipay_config['input_charset'] = strtolower('utf-8');
        //访问模式,根据自己的服务器是否支持ssl访问，若支持请选择https；若不支持请选择http
        $alipay_config['transport'] = str_replace('://', '', 'http://');
        $alipay_config['transport'] = str_replace('://', '', 'https://');
        //支付API地址
        $alipay_config['apiurl'] = config('payment.pay.getway');
        $alipayNotify = new AlipayNotify($alipay_config);
        $verify_result = $alipayNotify->verifyNotify();
        if($verify_result){
            $number = config('site.domain').'_';
            $order_id = str_replace($number, '', $data['out_trade_no']);
            try {
                $order = UserOrder::findOrFail($order_id); //通过返回的订单id查询数据库
                $status = 0;
                if ((int)$data['trade_status'] == "TRADE_SUCCESS") { //如果已支付，则更新用户财务信息
                    $status = 1;
                    if (intval($order->status) == 0) {
                        $order->money = $data['money'];
                        $order->update_time = time(); //云端处理订单时间戳
                        $order->status = $status;
                        $order->save(); //更新订单

                        $userFinance = new UserFinance();
                        $userFinance->user_id = $order->user_id;
                        $userFinance->money = $order->money;
                        $userFinance->usage = (int)$order->pay_type == 1 ? 1 : 2;
                        $userFinance->summary = '易支付';
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
        } else {
            return 'fail';
        }
    }
}