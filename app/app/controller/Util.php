<?php


namespace app\app\controller;

use app\validate\Phone;
use Firebase\JWT\JWT;
use think\facade\Session;

class Util extends Base
{
    public function sendcms()
    {
        $code = generateRandomString();
        $mobile = trim(input('mobile'));
        $data = [
            'mobile' => $mobile
        ];
        $validate = new Phone();
        if (!$validate->check($data)) {
            return json(['success' => 0, 'msg' => '手机格式不正确']);
        }
        $result = sendcode($mobile, $code);
        if ($result['status'] == 0) { //如果发送成功
            $key = config('site.api_key');
            $token = [
                "iat" => time(), //签发时间
                "nbf" => time(), //在什么时候jwt开始生效  （这里表示生成100秒后才生效）
                "exp" => time() + 60 * 2, //token 过期时间
                "xwx_sms_code" => $code, //记录的userid的信息，这里是自已添加上去的，如果有其它信息，可以再添加数组的键值对
                "xwx_cms_phone" => $mobile,
            ];
            $stoken = JWT::encode($token, $key, "HS256");
            return json(['success' => 1, 'stoken' => $stoken, 'msg' => '成功发送验证码']);
        } else {
            return json(['success' => 0, 'msg' => $result['msg']]);
        }
    }

    public function appupdate()
    {
        $appupdate = config('site.appupdate');
        return json(['success' => 1, 'appupdate' => $appupdate]);
    }
}