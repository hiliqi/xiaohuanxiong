<?php

use Firebase\JWT\JWT;

function verifycode($stoken, $code, $mobile)
{
    $key = config('site.api_key');
    try {
        $info = (array)JWT::decode($stoken, $key, array('HS256', 'HS384', 'HS512', 'RS256'));
        if ($info['xwx_sms_code'] == $code && $info['xwx_cms_phone'] == $mobile) {
            return 1;
        } else {
            return 0;
        }

    } catch (\Exception $e) {
        return 0;
    }
}