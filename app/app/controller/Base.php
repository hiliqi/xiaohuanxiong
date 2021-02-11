<?php


namespace app\app\controller;


use app\BaseController;
use think\facade\Env;
use Firebase\JWT\JWT;

class Base extends BaseController
{
    public $prefix;
    public $redis_prefix;
    public $url;
    public $img_domain;
    public $book_ctrl;
    public $uid;
    public $vip_expire_time;
    protected $end_point;

    protected function initialize()
    {
        parent::initialize();

        isset($_SERVER['HTTP_ORIGIN']) ? header('Access-Control-Allow-Origin:' . $_SERVER['HTTP_ORIGIN'])
            : header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods:GET, POST, OPTIONS, DELETE");
        header("Access-Control-Allow-Headers:DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type, Accept-Language, Origin, Accept-Encoding");
        header("Access-Control-Allow-Credentials:true");

        $token = $this->request->param('token');
        $time = $this->request->param('time');
        if (time() - $time > 180) {
            return json(['success' => 0, 'msg' => '过期请求'])->send();
        }
        $key = config('site.app_key');
        if ($token != md5($key . $time)) {
            return json(['success' => 0, 'msg' => '未授权请求'])->send();
        }

        $this->prefix = Env::get('database.prefix');
        $this->redis_prefix = Env::get('cache.prefix');
        $this->url =  config('site.domain');
        $this->img_domain = config('site.img_domain');
        $this->book_ctrl = BOOKCTRL;
    }

    public function getAuth($utoken)
    {
        $key = config('site.api_key');
        try {
            $info = JWT::decode($utoken, $key, array('HS256', 'HS384', 'HS512', 'RS256'));
            $arr = (array)$info;
            return json(['success' => 1, 'userInfo' => $arr]);
        } catch (\Exception $e) {
            return json(['success' => -1, 'msg' => $e->getMessage()]);
        }
    }
}