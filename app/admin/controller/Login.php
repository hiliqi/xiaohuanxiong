<?php


namespace app\admin\controller;


use app\BaseController;
use think\db\exception\ModelNotFoundException;
use app\model\Admin;

class Login extends BaseController
{
    public function login(){
        if (request()->isPost()){
            $captcha = request()->param('captcha');
            if( !captcha_check($captcha))
            {
                return json(['err' => 1, 'msg' => '验证码错误']);
            }
            $username = request()->param('username');
            $password = trim(request()->param('password'));
            $map = array();
            $map[] = ['username','=',$username];
            $map[] = ['password', '=', $password];
            try {
                $admin = Admin::where($map)->findOrFail();
            }  catch (ModelNotFoundException $e) {
                return json(['err' => 1, 'msg' => '用户名或密码错误']);
            }
            $admin->last_login_time = time();
            $admin->last_login_ip = $this->request->ip();
            $admin->save();
            session('xwx_admin',$admin->username);
            return json(['err' => 0, 'msg' => '登录成功']);
        }else{
            return view();
        }
    }

    public function logout(){
        session('xwx_admin',null);
        return redirect(url('login/login'));
    }

    public function captcha()
    {
        ob_clean();
        return captcha();
    }

}