<?php


namespace app\author\controller;


use app\BaseController;
use app\model\Author;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\facade\View;

class Account extends BaseController
{
    public function register() {
        if (request()->isPost()) {
            $captcha = input('captcha');
            if( !captcha_check($captcha ))
            {
                return ['err' => 1, 'msg' => '验证码错误'];
            }
            $data = request()->param();
            $validate = new \app\validate\Author();
            if ($validate->check($data)) {
                $author = Author::where('username', '=', trim(request()->param('username')))->find();
                if (is_null($author)) {
                    $author = new Author();
                    $author->username = trim($data['username']);
                    $author->password = trim($data['password']);
                    $author->email = trim($data['email']);
                    $author->author_name = '佚名';
                    $author->status = 0;
                    $result = $author->save();
                    if ($result) {
                        return json(['err' => 0, 'msg' => '注册成功，请登录']);
                    } else {
                        return json(['err' => 1, 'msg' => '注册失败，请尝试重新注册']);
                    }
                } else {
                    return ['err' => 1, 'msg' => '用户名已经存在'];
                }
            } else {
                return json(['err' => 1, 'msg' => $validate->getError()]);
            }
        } else {
            View::assign([
                'site_name' => config('site.site_name')
            ]);
            return view();
        }
    }

    public function login() {
        if (request()->isPost()) {
            $captcha = input('captcha');
            if( !captcha_check($captcha ))
            {
                return ['code' => 0, 'err' => 1, 'msg' => '验证码错误'];
            }
            $map = array();
            $map[] = ['username', '=', trim(input('username'))];
            $map[] = ['password', '=', md5(strtolower(trim(input('password'))) . config('site.salt'))];
            try {
                $author = Author::where($map)->findOrFail();
                if ($author->status == 0) {
                    return ['code' => 0, 'err' => 1, 'msg' => '用户被锁定'];
                } else {
                    $author->last_login_time = time();
                    $author->save();
                    session('xwx_author_id', $author->id);
                    session('xwx_author', $author->username);
                    session('xwx_author_name', $author->author_name);
                    session('xwx_author_email', $author->email);
                    return json(['code' => 0, 'err' => 0, 'msg' => '登录成功']);
                }
            } catch (ModelNotFoundException $e) {
                return json(['code' => 0, 'err' => 1, 'msg' => '用户名或密码错误']);
            }
        } else {

            View::assign([
                'site_name' => config('site.site_name'),
            ]);
            return view();
        }
    }

    public function logout()
    {
        session('xwx_author_id', null);
        session('xwx_author', null);
        session('xwx_author_name', null);
        session('xwx_author_email', null);
        $this->redirect('/login');
    }


    public function captcha()
    {
        ob_clean();
        return captcha();
    }
}