<?php


namespace app\service;


use app\model\UserOrder;
use http\Exception;
use think\db\exception\ModelNotFoundException;
use think\facade\Log;

//乐付
class PayService
{
    public function submit($order_id, $money, $pay_type, $pay_code)
    {
        $notifyUrl =  config('site.api_domain') . '/paynotify'; //异步回调地址，外网能访问
        $backUrl =  config('site.domain') . '/feedback'; //同步回调地址，外网能访问
        $merchant_id = config('payment.pay.appid');
        $merchant_key = config('payment.pay.appkey');
        $gatewayUrl = config('payment.pay.getway'); //网关

        $base_data = [
            'pay_memberid' => $merchant_id,
            'pay_orderid' => $order_id,
            'pay_amount' => $money,
            'pay_applydate' => date('Y-m-d H:i:s'),
            'pay_bankcode' => $pay_code,
            'pay_notifyurl' => $notifyUrl,
            'pay_callbackurl' => $backUrl,
        ];
        $post_data = $base_data + [
                'pay_md5sign' => '',
                'pay_attach' => '',
                'pay_productname' => '漫画充值',
                'pay_productnum' => 1,
                'pay_productdesc' => '',
                'pay_producturl' => '',
            ];
        ksort($base_data); //重新排序$data数组
        $base_data = array_filter($base_data);
        $sign_string = urldecode(http_build_query($base_data)) . '&key=' . $merchant_key;
        $post_data['pay_md5sign'] = strtoupper(md5($sign_string));

//        Log::record(json($base_data));
//        Log::record($sign_string);

        // 构造表单返回
        $response = '
        <html>
        <head></head>
        <body>
        <form id="Form1" name="Form1" method="post" action="' . $gatewayUrl . '">
        ';
        foreach ($post_data as $key => $value) {
            $response .= ('<input type="hidden" name="' . $key . '" value="' . $value . '" />');
        }
        $response .= '
        </form>
        <script>document.Form1.submit();</script>
        </body>
        </html>
        ';
        //@header('Content-type: text/html; charset=utf-8');
        return ['type' => 'html', 'content' => $response];
    }

    public function query($order_id)
    {
        $id = str_replace('xwx_order_', '', $order_id);
        try {
            $order = UserOrder::findOrFail($id);
            return json_encode(['success' => 1, 'order' => $order]);
        } catch (ModelNotFoundException $e) {
            return json_encode(['success' => 0, 'msg' => '未查询到该订单']);
        }

    }

    private function getHttpContent($url, $method = 'GET', $postData = array())
    {
        $data = '';
        $user_agent = $_SERVER ['HTTP_USER_AGENT'];
        $header = array(
            "User-Agent: $user_agent"
        );
        if (!empty($url)) {
            try {
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, $url);
                curl_setopt($ch, CURLOPT_HEADER, false);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($ch, CURLOPT_TIMEOUT, 30); //30秒超时
                curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
                curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
                //curl_setopt($ch, CURLOPT_COOKIEFILE, $cookie_jar);
                if (strstr($url, 'https://')) {
                    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); // https请求 不验证证书和hosts
                    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
                }

                if (strtoupper($method) == 'POST') {
                    $curlPost = is_array($postData) ? http_build_query($postData) : $postData;
                    curl_setopt($ch, CURLOPT_POST, 1);
                    curl_setopt($ch, CURLOPT_POSTFIELDS, $curlPost);
                }
                $data = curl_exec($ch);
                curl_close($ch);
            } catch (Exception $e) {
                $data = '';
            }
        }
        return $data;
    }
}