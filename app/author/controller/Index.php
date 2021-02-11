<?php


namespace app\author\controller;


use app\model\Author;
use think\db\exception\ModelNotFoundException;
use think\facade\View;

class Index extends Base
{
    public function index() {
        View::assign([
            'username' => $this->username,
        ]);
        return view();
    }

    public function info() {
        $email = session('xwx_author_email');
        View::assign([
            'uid' => $this->uid,
            'author_name' => $this->author_name,
            'email' => $email
        ]);
        return view();
    }

    public function update() {
        $pwd = trim(input('password'));
        $uid = session('xwx_author_id');
        try {
            $author = Author::findOrFail($uid);
            $author->author_name = trim(input('author_name'));
            $author->email = trim(input('email'));
            if (!empty($pwd)) {
                $author->password = md5(trim($pwd).config('site.salt'));
            }
            $author->save();
            session('xwx_author_name', $author->author_name);
            session('xwx_author_email', $author->email);
            return json(['err' => 0, 'msg' => '更新信息成功']);
        } catch (ModelNotFoundException $e) {
            return json(['err' => 1, 'msg' => '用户非法']);
        }
    }
}