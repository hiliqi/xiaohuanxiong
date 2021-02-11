<?php


namespace app\admin\controller;

use app\model\VipCode;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\facade\App;
use think\facade\View;

class Vipcodes extends BaseAdmin
{
    public function index()
    {
        return view();
    }

    public function list()
    {
        $where = array();
        $days = input('days');
        if (!empty($days)) {
            $where[] = ['add_day', '=', $days];
        }
        $used = input('used');
        if (!empty($used)) {
            $where[] = ['used', '=', $used];
        }
        $page = intval(input('page'));
        $limit = intval(input('limit'));
        $data = VipCode::where($where);
        $count = $data->count();
        $codes = $data->order('id', 'desc')
            ->limit(($page - 1) * $limit, $limit)->select();
        return json([
            'code' => 0,
            'msg' => '',
            'count' => $count,
            'data' => $codes
        ]);
    }

    public function gencodes()
    {
        if (request()->isPost()) {
            $num = input('vipcode_num'); //产生多少个
            $day = input('vipcode_day');

            $data = [
                'num' => $num,
                'day' => $day,
            ];

            $str = '';
            $salt = config('site.salt');
            for ($i = 1; $i <= $num; $i++) {
                $code = substr(md5($salt . time()), 8, 16);
                VipCode::create([
                    'code' => $code,
                    'add_day' => $day
                ]);
                $str .= '<p style="padding-left:15px;font-weight: 400;color:#999;">' . '生成' . $code . '，天数为' . $day . '</p>';
                sleep(1);
            }
            return json(['err' => 0, 'msg' => $str]);
        }
        return view();

    }

    public function export()
    {
        try {
            $data = VipCode::where('used', '=', 1)->selectOrFail()->toArray();
            if (empty($data)) {
                return json(['err=>1', 'msg' => '没有可导出的']);
            }
            $arr = array();
            foreach ($data as $code) {
                VipCode::update([
                    'id' => $code['id'],
                    'used' => 2,
                    'update_time' => time()
                ]);
                $arr[] = $code['code'];
            }
            $dir = App::getRootPath() . 'public/downloads';
            if (!file_exists($dir)) {
                mkdir($dir, 0777, true);
            }
            $file = $dir . '/vipcode.txt';
            if (file_exists($file)) {
                delete_dir_file($file);
            }
            file_put_contents($file, implode("\r\n", $arr));
            $site_url = config('site.url');

            return json(['err' => 0, 'msg' => '成功导出，<a href="' . $site_url . '/downloads/chargecode.txt">点击下载</a>']);
        } catch (ModelNotFoundException $e) {
            return json(['err' => 1, 'msg' => $e->getMessage()]);
        }
    }

    public function delete()
    {
        $id = input('id');
        try {
            $code = VipCode::findOrFail($id);
            $result = $code->delete();
            if ($result) {
                return json(['err' => '0', 'msg' => '删除成功']);
            } else {
                return json(['err' => '1', 'msg' => '删除失败']);
            }
        } catch (ModelNotFoundException $e) {
            return json(['err' => '1', 'msg' => $e->getMessage() ]);
        }

    }

    public function deleteAll()
    {
        $ids = input('ids');
        VipCode::destroy($ids);
    }
}