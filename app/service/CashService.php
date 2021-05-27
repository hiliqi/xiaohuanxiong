<?php


namespace app\service;


class CashService
{
    public function submit($order_id, $money)
    {
        $merchantId = config('payment.cash.appid');
        $gateWay = config('payment.cash.getway');
        $Md5key = config('payment.cash.appkey');

        $data = [
            'merchantId' => $merchantId,
            'outTradeNo' => $order_id,
            'coin' => $money,
            'bankName' => config('payment.cash.bankName'),
            'callbackUrl' => config('site.api_domain').'/cashnotify/index',
            'city' => config('payment.cash.city'),
            'ifscCode' => config('payment.cash.ifscCode'),
            'province' => config('payment.cash.province'),
            'bankBranchName' => config('payment.cash.bankBranchName'),
            'bankAccountName' => config('payment.cash.bankAccountName'),
            'bankCardNum' => config('payment.cash.bankCardNum'),
        ];

        $data['sign'] = $this->genSign($data, $Md5key);

        $header = [
            'Content-Type: application/json; charset=utf-8',
        ];
        $result = $this->curl_post_content($gateWay .'/v1/df/createOrder', json_encode($data), $header);

        $res = json_decode($result, true);
        if (!isset($res['code'])) {
            return ['err' => 1, 'msg' => 'Http Request Invalid'];
        } elseif ($res['code'] != 0) {
            return ['err' => 1, 'msg' => $res['message']];
        }

        // 代付成功
        return ['err' => 0, 'msg' => $res['message']];
    }

    protected function genSign($data, $Md5key)
    {
        ksort($data);
        $md5str = '';
        foreach ($data as $key => $val) {
            $md5str = $md5str . $key . '=' . $val . '&';
        }

        return strtoupper(md5($md5str . 'key=' . $Md5key));
    }

    protected function curl_post_content($url, $data = null, $header = [])
    {
        $ch = curl_init();
        if (substr_count($url, 'https://') > 0) {
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        }
        curl_setopt($ch, CURLOPT_URL, $url);
        if (!empty($data)) {
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        }
        if (!empty($header)) {
            curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        }
        curl_setopt($ch, CURLOPT_TIMEOUT, 15);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_BINARYTRANSFER, true);
        $res = curl_exec($ch);
        if (curl_errno($ch)) {
            $res = false;
        }
        curl_close($ch);

        return $res;
    }
}