<?php


namespace app\api\controller;

use app\BaseController;
use app\model\User;
use app\model\UserFinance;
use app\model\UserOrder;
use app\service\PromotionService;
use think\db\exception\ModelNotFoundException;
use Yansongda\Pay\Pay;

class Paynotify extends BaseController
{
    public function index()
    {
        $config = [
            'alipay' => [
                'default' => [
                    'app_id' => config('payment.pay.appid'),
                    // 加密方式： **RSA2**; 公钥证书模式
                    'app_secret_cert' => config('payment.pay.appPublicKey'),
                    'notify_url' => config('site.api_domain') . '/paynotify', // 支付后通知地址（作为支付成功回调，这个可靠）
                    'return_url' => config('payment.returnUrl'),
                    'mode' => 'dev', // optional,设置此参数，将进入沙箱模式
                ],
            ],
            'log' => [ // optional
                'file' => './logs/alipay.log',
                'level' => 'info', // 建议生产环境等级调整为 info，开发环境为 debug
                'type' => 'single', // optional, 可选 daily.
                'max_file' => 30, // optional, 当 type 为 daily 时有效，默认 30 天
            ],
            'http' => [ // optional
                'timeout' => 5.0,
                'connect_timeout' => 5.0,
                // 更多配置项请参考 [Guzzle](https://guzzle-cn.readthedocs.io/zh_CN/latest/request-options.html)
            ],
        ];

        $alipay = Pay::alipay($config);
        try{
            $alipay->verify(); // 是的，验签就这么简单！
            $data = request()->param();
            // 请自行对 trade_status 进行判断及其它逻辑进行判断，在支付宝的业务通知中，只有交易通知状态为 TRADE_SUCCESS 或 TRADE_FINISHED 时，支付宝才会认定为买家付款成功。
            // 1、商户需要验证该通知数据中的out_trade_no是否为商户系统中创建的订单号；
            // 2、判断total_amount是否确实为该订单的实际金额（即商户订单创建时的金额）；
            // 3、校验通知中的seller_id（或者seller_email) 是否为out_trade_no这笔单据的对应的操作方（有的时候，一个商户可能有多个seller_id/seller_email）；
            // 4、验证app_id是否为该商户本身。
            // 5、其它业务逻辑情况
            $order_id =  $data['out_trade_no'];
            try {
                $order = UserOrder::where('order_id','=',$order_id)->findOrFail(); //通过返回的订单id查询数据库
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
                        $userFinance->usage = (int)$order->pay_type == 1;
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
                return $alipay->success()->send();
            } catch (ModelNotFoundException $e) {

            }
        } catch (\Exception $e) {

        }


    }
}