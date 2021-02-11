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
        $codepay_id = config('payment.pay.appid');
        $codepay_key = config('payment.pay.appkey');

        $data = array(
            "id" => $codepay_id,//你的码支付ID
            "pay_id" => $order_id, //唯一标识 可以是用户ID,用户名,session_id(),订单ID,ip 付款后返回
            "type" => $pay_code, //1支付宝支付 3微信支付 2QQ钱包
            "price" => $money,//金额100元
            "param" => "",//自定义参数
            "notify_url" => $notifyUrl,//通知地址
            "return_url" => $backUrl,//跳转地址
        ); //构造需要传递的参数

        ksort($data); //重新排序$data数组
        reset($data); //内部指针指向数组中的第一个元素

        $sign = ''; //初始化需要签名的字符为空
        $urls = ''; //初始化URL参数为空

        foreach ($data as $key => $val) { //遍历需要传递的参数
            if ($val == '' || $key == 'sign') continue; //跳过这些不参数签名
            if ($sign != '') { //后面追加&拼接URL
                $sign .= "&";
                $urls .= "&";
            }
            $sign .= "$key=$val"; //拼接为url参数形式
            $urls .= "$key=" . urlencode($val); //拼接为url参数形式并URL编码参数值

        }
        $query = $urls . '&sign=' . md5($sign . $codepay_key); //创建订单所需的参数
        $gateway = config('payment.pay.getway');
        $url =  $gateway. $query; //支付页面

        return ['type' => 'url', 'content' => $url];
    }
}