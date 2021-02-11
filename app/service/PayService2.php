<?php


namespace app\service;


use app\common\epay\AlipaySubmit;
use app\model\UserOrder;
use think\db\exception\ModelNotFoundException;

class PayService
{
    public function submit($order_id, $money, $pay_type, $pay_code)
    {
        $notifyUrl =  config('site.api_domain') . '/paynotify'; //异步回调地址，外网能访问
        $backUrl =  config('site.domain') . '/feedback'; //同步回调地址，外网能访问
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

        $parameter = [
            'pid' => $alipay_config['partner'],
            'out_trade_no' => $order_id,
            'money' => $money,
            'sitename' => config('site.site_name'),
            'type' => $pay_code,
            'notify_url' => $notifyUrl,
            'return_url' => $backUrl,
        ];

        $alipaySubmit = new AlipaySubmit($alipay_config);
        $html_text = $alipaySubmit->buildRequestForm($parameter);
        return ['type' => 'html', 'content' => $html_text];
    }
}