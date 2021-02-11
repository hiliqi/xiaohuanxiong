<?php


namespace app\admin\controller;

use think\Exception;
use think\facade\App;
use think\facade\View;

class Sms extends BaseAdmin
{
    public function smsbao(){
        if (request()->isPost()){
            $username = input('username');
            $password = input('password');
            $content = <<<INFO
        <?php
        return [
            'username' => '{$username}',
            'password' => '{$password}',        
        ];
INFO;
            try {
                file_put_contents(App::getRootPath() . 'config/sms.php', $content);
                return json(['err' => 0, 'msg' => '修改成功']);
            } catch (Exception $e) {
                return json(['err' => 1, 'msg' => $e->getMessage()]);
            }
        }
        $username = config('sms.username');
        $password = config('sms.password');
        View::assign([
            'username' => $username,
            'password' => $password
        ]);
        return view();
    }
}