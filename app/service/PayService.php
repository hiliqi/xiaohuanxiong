<?php


namespace app\service;


//支付宝官方支付
use think\exception\ValidateException;
use Yansongda\Pay\Pay;

class PayService
{
    public function submit($order_id, $money, $pay_type, $pay_code)
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

        $order = [
            'out_trade_no' => $order_id,
            'total_amount' => $money,
            'subject' => '漫画充值',
        ];

        $alipay = Pay::alipay($config)->web($order);
        return ['type' => 'url', 'content' => $alipay->send()];
    }
}