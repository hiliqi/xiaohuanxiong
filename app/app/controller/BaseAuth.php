<?php


namespace app\app\controller;

use Firebase\JWT\ExpiredException;
use Firebase\JWT\JWT;
class BaseAuth extends Base
{
    protected function initialize()
    {
        parent::initialize();
        $key = config('site.api_key');
        $param = request()->param();
        $utoken = $param['utoken'];
        if (isset($utoken)) {
            try{
                $info = JWT::decode($utoken, $key, array('HS256', 'HS384', 'HS512', 'RS256' ));
                $arr = (array)$info;
                $this->uid = $arr['uid'];
            } catch (ExpiredException $e) {
                return json(['success' => 0, 'msg' => '1'.$e->getMessage()])->send();
            } catch (Exception $e) {
                return json(['success' => 0, 'msg' => '2'.$e->getMessage()])->send();
            }
        } else {
            return json(['success' => 0, 'msg' => '用户未登录'])->send();
        }
    }
}