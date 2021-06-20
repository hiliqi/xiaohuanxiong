<?php
// 应用公共文件

function delete_dir_file($dir_name)
{
    $result = false;
    if (is_dir($dir_name)) {
        if ($handle = opendir($dir_name)) {
            while (false !== ($item = readdir($handle))) {
                if ($item != '.' && $item != '..') {
                    if (is_dir($dir_name . DIRECTORY_SEPARATOR . $item)) {
                        delete_dir_file($dir_name . DIRECTORY_SEPARATOR . $item);
                    } else {
                        unlink($dir_name . DIRECTORY_SEPARATOR . $item);
                    }
                }
            }
            closedir($handle);
            if (rmdir($dir_name)) { //删除空白目录
                $result = true;
            }
        }
    }
    return $result;
}

function subtext($text, $length)
{
    $text2 = strip_tags($text);
    if (mb_strlen($text2, 'utf8') > $length)
        return mb_substr($text2, 0, $length, 'utf8');
    return $text2;
}

function generateRandomString($length = 4)
{
    $characters = '0123456789';
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randomString;
}

//验证session中的验证码和手机号码是否正确
function verifycode($code, $phone)
{
    if (is_null(session('xwx_sms_code')) || $code != session('xwx_sms_code')) {
        return 0;
    }
    if (is_null(session('xwx_cms_phone')) || $phone != session('xwx_cms_phone')) {
        return 0;
    }
    return 1;
}

function random_color()
{
    mt_srand((double)microtime() * 1000000);
    $c = '';
    while (strlen($c) < 6) {
        $c .= sprintf("%02X", mt_rand(0, 255));
    }
    return $c;
}

function gen_uid($num)
{
    $key_str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    return substr(str_shuffle($key_str), mt_rand(0, strlen($key_str) - 11), $num);
}

function sendcode($_phone, $code)
{
    $statusStr = array(
        "0" => "短信验证码已经发送至" . $_phone,
        "-1" => "参数不全",
        "-2" => "服务器空间不支持,请确认支持curl或者fsocket，联系您的空间商解决或者更换空间！",
        "30" => "密码错误",
        "40" => "账号不存在",
        "41" => "余额不足",
        "42" => "帐户已过期",
        "43" => "IP地址限制",
        "50" => "内容含有敏感词"
    );
    $smsapi = "http://api.smsbao.com/";
    $user = config('sms.username'); //短信平台帐号
    $pass = md5(config('sms.password')); //短信平台密码
    $content = '您正在验证/修改手机，验证码为' . $code;//要发送的短信内容
    $phone = $_phone;//要发送短信的手机号码
    $sendUrl = $smsapi . "sms?u=" . $user . "&p=" . $pass . "&m=" . $phone . "&c=" . urlencode($content);
    $result = file_get_contents($sendUrl);
    return ['status' => $result, 'msg' => $statusStr[$result]];
}