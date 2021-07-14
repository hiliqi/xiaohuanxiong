<?php


namespace app\api\controller;


use app\BaseController;
use app\model\Book;
use think\facade\Cache;
use think\facade\App;
use app\model\VipCode;
use app\model\ChargeCode;
use app\model\Admin;
use think\facade\Db;
use think\facade\Env;

class Common extends BaseController
{
    public function clearcache()
    {
        $key = input('api_key');
        if (empty($key) || is_null($key)) {
            return 'api密钥不能为空！';
        }
        if ($key != config('site.api_key')) {
            return 'api密钥错误！';
        }
        Cache::clear('redis');
        $rootPath = App::getRootPath();
        delete_dir_file($rootPath . '/runtime/cache/') && delete_dir_file($rootPath . '/runtime/temp/');
        return '清理成功';
    }

     //清空月人气
     public function clearmhits()
     {
         $prefix = Env::get('database.prefix');
         Db::query("update ".$prefix."book set mhits=0");
     }
 
     //清空周人气
     public function clearwhits()
     {
         $prefix = Env::get('database.prefix');
         Db::query("update ".$prefix."book set whits=0");
     }
 
     //清空日人气
     public function cleardhits()
     {
         $prefix = Env::get('database.prefix');
         Db::query("update ".$prefix."book set dhits=0");
     }

    public function genvipcode()
    {
        $api_key = input('api_key');
        if (empty($api_key) || is_null($api_key)) {
            $this->error('api密钥错误');
        }
        if ($api_key != config('site.api_key')) {
            $this->error('api密钥错误');
        }
        $num = (int)config('kami.vipcode.num'); //产生多少个
        $day = config('kami.vipcode.day');

        $result = $this->validate(
            [
                'num' => $num,
                'day' => $day,
            ],
            'app\admin\validate\Vipcode');
        if (true !== $result) {
            $this->error('后台配置错误');
        }

        $salt = config('site.' . config('kami.salt'));//根据配置，获取盐的方式
        for ($i = 1; $i <= $num; $i++) {
            $code = substr(md5($salt . time()), 8, 16);
            VipCode::create([
                'code' => $code,
                'add_day' => $day
            ]);
            sleep(1);
        }
        $this->success('成功生成vip码');
    }

    public function genchargecode()
    {
        $api_key = input('api_key');
        if (empty($api_key) || is_null($api_key)) {
            $this->error('api密钥错误');
        }
        if ($api_key != config('site.api_key')) {
            $this->error('api密钥错误');
        }
        $num = (int)config('kami.chargecode.num'); //产生多少个
        $money = config('kami.chargecode.money');

        $result = $this->validate(
            [
                'num' => $num,
                'money' => $money,
            ],
            'app\admin\validate\Chargecode');
        if (true !== $result) {
            $this->error('后台配置错误');
        }

        $salt = config('site.' . config('kami.salt'));//根据配置，获取盐的方式
        for ($i = 1; $i <= $num; $i++) {
            $code = substr(md5($salt . time()), 8, 16);
            ChargeCode::create([
                'code' => $code,
                'money' => $money
            ]);
            sleep(1);
        }
        return json(['msg' => '成功生成充值码']);
    }
}