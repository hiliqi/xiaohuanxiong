<?php


namespace app\api\controller;


use app\BaseController;
use app\common\RedisHelper;
use app\model\Book;
use think\facade\Cache;
use think\facade\App;
use app\model\Clicks;
use app\model\VipCode;
use app\model\ChargeCode;
use app\model\Admin;
use think\facade\Db;

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

    public function sycnclicks()
    {
        $key = input('api_key');
        if (empty($key) || is_null($key)) {
            return 'api密钥不能为空！';
        }
        if ($key != config('site.api_key')) {
            return 'api密钥错误！';
        }

        Db::query("update xwx_book set dhits=0"); //清空日人气
        if ((int)date("w",time()) == 6) { //如果是星期六
            Db::query("update xwx_book set whits=0"); //清空周人气
        }
        if ((int)date('d') == 28) { //清空月人气
            Db::query("update xwx_book set mhits=0"); //清空周人气
        }

        $day = input('date');
        if (empty($day)) {
            $day = date("Y-m-d", strtotime("-1 day"));
        }
        $redis = RedisHelper::GetInstance();
        $hits = $redis->zRevRange('hits:' . $day, 0, 10, true); //总点击
        foreach ($hits as $k => $v) {
            $book = Book::findOrFail($k);
            $book->hits = $book->hits + $v;
            $book->mhits = $book->mhits + $v;
            $book->dhits = $book->dhits + $v;
            $result = $book->save();
            if ($result) {
                $redis->zRem('hit:'.$day, $k); //同步到数据库之后，删除redis中的这个日期的这本漫画的点击数
            }
        }
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