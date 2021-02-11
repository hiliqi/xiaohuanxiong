<?php


namespace app\app\controller;


use app\service\FinanceService;
use app\service\PromotionService;
use app\validate\Phone;
use app\validate\User as UserValidate;
use app\model\User;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use Firebase\JWT\JWT;

class Account extends Base
{
    public function register()
    {
        $data = request()->param();
        $validate = new UserValidate();
        if ($validate->check($data)) {
            try {
                $user = User::where('username', '=', trim(request()->param('username')))->findOrFail();
                return json(['success' => 0, 'msg' => '用户名已存在']);
            }
            catch (ModelNotFoundException $e)
            {
                $user = new User();
                $user->username = trim(request()->param('username'));
                $user->password = trim(request()->param('password'));
                $user->suid = gen_uid(24);
                $user->level = 2;
                $result = $user->save();
                if ($result) {
                    return json(['success' => 1, 'msg' => '注册成功，请登录']);
                } else {
                    return json(['success' => 0, 'msg' => '注册失败，请尝试重新注册']);
                }
            }
        } else {
            return json(['success' => 0, 'msg' => $validate->getError()]);
        }
    }

    public function phonereg() {
        $data = request()->param();
        if (verifycode($data['code'], $data['mobile']) == 0) {
            return json(['success' => 0, 'msg' => '验证码错误']);
        }
        $validate = new Phone();
        if ($validate->check($data)) {
            try {
                return json(['success' => 0, 'msg' => '手机号已存在，请直接登录']);
            } catch (ModelNotFoundException $e) {
                $user = new User();
                $user->username = gen_uid(12);
                $user->password = 'abc123';
                $user->suid = gen_uid(24);
                $user->level = 2;
                $user->mobile = trim($data['mobile']);
                $result = $user->save();
                if ($result) {
                    return json(['success' => 1, 'msg' => '注册成功，请登录']);
                } else {
                    return json(['success' => 0, 'msg' => '注册失败，请尝试重新注册']);
                }
            }
        }
    }

    public function login()
    {
        $map = array();
        $map[] = ['username', '=', trim(input('username'))];
        $map[] = ['password', '=', md5(strtolower(trim(input('password'))) . config('site.salt'))];
        try {
            $user = User::withTrashed()->where($map)->findOrFail();
            if ($user->delete_time > 0) {
                return json(['success' => 0, 'msg' => '用户被锁定']);
            } else {
                $financeService = new FinanceService();
                $user['balance'] = $financeService->getBalance($user->id); //获取用户余额
                $key = config('site.api_key');
                $token = [
                    "iat" => time(), //签发时间
                    "nbf" => time(), //在什么时候jwt开始生效  （这里表示生成100秒后才生效）
                    "exp" => time() + 60 * 60 * 24, //token 过期时间
                    "uid" => $user->id, //记录的userid的信息，这里是自已添加上去的，如果有其它信息，可以再添加数组的键值对
                    "suid" => $user->suid,
                    "level" => $user->level
                ];
                $this->uid = $user->id;
                session('vip_expire_time', $user->vip_expire_time);
                $utoken = JWT::encode($token, $key, "HS256");
                $user['utoken'] = $utoken;
                return json(['success' => 1, 'userInfo' => $user]);
            }
        } catch (DataNotFoundException $e) {
            return json(['success' => 0, 'msg' => '用户名或密码错误']);
        } catch (ModelNotFoundException $e) {
            return json(['success' => 0, 'msg' => '用户名或密码错误']);
        }
    }

    public function autologin() {
        $data = request()->param();
        $map = array();
        $map[] = ['suid', '=', trim($data['suid'])];
        $key = config('site.api_key');
        try {
            $user = User::withTrashed()->where($map)->findOrFail();
            if ($user->delete_time > 0) {
                return json(['success' => 0, 'msg' => '用户被锁定']);
            } else {
                $this->uid = $user->id;
                $financeService = new FinanceService();
                $user['balance'] = $financeService->getBalance($user->id); //获取用户余额
                $token = [
                    "iat" => time(), //签发时间
                    "nbf" => time(), //在什么时候jwt开始生效  （这里表示生成100秒后才生效）
                    "exp" => time() + 60 * 60 * 24, //token 过期时间
                    "uid" => $user->id, //记录的userid的信息，这里是自已添加上去的，如果有其它信息，可以再添加数组的键值对
                    "suid" => $user->suid,
                    "level" => $user->level
                ];
                session('vip_expire_time', $user->vip_expire_time);
                $utoken = JWT::encode($token, $key, "HS256");
                $user['utoken'] = $utoken;
                return json(['success' => 1, 'userInfo' => $user]);
            }
        }  catch (ModelNotFoundException $e) {
            $user = new User();
            $user->username = gen_uid(12);
            $user->password = 'abc123';
            $user->suid = $data['suid'];
            $user->level = 1; //游客
            $user->mobile = '';
            $result = $user->save();
            if ($result) {
                $token = [
                    "iat" => time(), //签发时间
                    "nbf" => time(), //在什么时候jwt开始生效  （这里表示生成100秒后才生效）
                    "exp" => time() + 60 * 60 * 24, //token 过期时间
                    "uid" => $user->id, //记录的userid的信息，这里是自已添加上去的，如果有其它信息，可以再添加数组的键值对
                    "suid" => $user->suid,
                    "level" => $user->level
                ];
                $utoken = JWT::encode($token, $key, "HS256");
                $user['utoken'] = $utoken;
                $user['balance'] = 0;
                return json(['success' => 1, 'userInfo' => $user]);
            } else {
                return json(['success' => 0, 'msg' => '登录失败，请尝试重新登录']);
            }
        }
    }

    public function phonelogin() {
        $data = request()->param();
        if (verifycode($data['code'], $data['mobile']) == 0) {
            return json(['success' => 0, 'msg' => '验证码错误']);
        }
        $validate = new Phone();
        if ($validate->check($data)) {
            $key = config('site.api_key');
            try{
                $user = User::withTrashed()->where('mobile', '=', trim($data['mobile']))->findOrFail();
                if ($user->delete_time > 0) {
                    return json(['success' => 0, 'msg' => '用户被锁定']);
                } else {
                    $this->uid = $user->id;
                    $financeService = new FinanceService();
                    $user['balance'] = $financeService->getBalance($user->id); //获取用户余额
                    $token = [
                        "iat" => time(), //签发时间
                        "nbf" => time(), //在什么时候jwt开始生效  （这里表示生成100秒后才生效）
                        "exp" => time() + 60 * 60 * 24, //token 过期时间
                        "uid" => $user->id, //记录的userid的信息，这里是自已添加上去的，如果有其它信息，可以再添加数组的键值对
                        "suid" => $user->suid,
                        "level" => $user->level,
                    ];
                    session('vip_expire_time', $user->vip_expire_time);
                    $utoken = JWT::encode($token, $key, "HS256");
                    $user['utoken'] = $utoken;
                    return json(['success' => 1, 'userInfo' => $user]);
                }
            } catch (ModelNotFoundException $e) {
                return json(['success' => 0, 'msg' => '手机号不存在']);
            }
        } else {
            return json(['success' => 0, 'msg' => $validate->getError()]);
        }
    }

    public function checkAuth()
    {
        $utoken = input('utoken');
        if (isset($utoken)) {
            $json = $this->getAuth($utoken);
        } else {
            $json = json(['success' => 0, 'msg' => '传递参数错误']);
        }
        return $json;
    }

    public function logout() {
        $utoken = input('utoken');
        $key = config('site.api_key');
        $info = JWT::decode($utoken, $key, array('HS256', 'HS384', 'HS512', 'RS256' ));
        $arr = (array)$info;
        if ($this->uid == $arr['suid']){
            unset($this->uid);
        }
        return json(['success' => 1, 'msg' => '登出成功']);
    }
}