<?php


namespace app\service;


//支付宝官方支付
use think\exception\ValidateException;

class PayService
{
    public function submit($order_id, $money, $pay_type, $pay_code)
    {
        $params = new \Yurun\PaySDK\AlipayApp\Params\PublicParams;
        $params->appID = config('payment.pay.appid');
        $params->format = 'JSON';
        $params->charset = 'utf-8';
        $params->version = '1.0';
        $params->appPrivateKey = config('payment.pay.appPrivateKey');
        $params->appPublicKey = config('payment.pay.appPublicKey');
        $params->apiDomain = config('payment.pay.getway');

        // SDK实例化，传入公共配置
        $pay = new \Yurun\PaySDK\AlipayApp\SDK($params);
        // 支付接口
        $request = new \Yurun\PaySDK\AlipayApp\Wap\Params\Pay\Request;
        $request->notify_url = config('site.api_domain') . '/paynotify'; // 支付后通知地址（作为支付成功回调，这个可靠）
        $request->return_url = config('payment.returnUrl'); // 支付后跳转返回地址
        $request->businessParams->out_trade_no = $order_id; // 商户订单号
        $request->businessParams->total_amount = $money; // 价格
        $request->businessParams->subject = '漫画充值'; // 商品标题

        // 获取跳转url
        $pay->prepareExecute($request, $url);
        return ['type' => 'url', 'content' => $url];
    }
}