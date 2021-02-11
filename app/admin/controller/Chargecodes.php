<?php


namespace app\admin\controller;

use app\model\ChargeCode;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\facade\App;
use think\facade\View;

class Chargecodes extends BaseAdmin
{
    public function index()
    {
        return \view();
    }

    public function list()
    {
        $where = array();
        $money = input('money');
        if (!empty($days)) {
            $where[] = ['money', '=', $money];
        }
        $used = input('used');
        if (!empty($used)) {
            $where[] = ['used', '=', $used];
        }
        $page = intval(input('page'));
        $limit = intval(input('limit'));
        $data = Chargecode::where($where);
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

    public function gencodes(){
        if (request()->isPost())
        {
            $num = input('chargecode_num'); //产生多少个
            $money = input('chargecode_money');

            $data = [
                'num' => $num,
                'money' => $money,
            ];
            $str = '';
            $salt = config('site.salt');
            for ($i = 1; $i <= $num; $i++) {
                $code = substr(md5($salt . time()), 8, 16);
                ChargeCode::create([
                    'code' => $code,
                    'money' => $money
                ]);
                $str .=  '<p style="padding-left:15px;font-weight: 400;color:#999;">' . '生成' . $code . '，金额为' . $money . '</p>';
                sleep(1);
            }
            return json(['err' => 0, 'msg' => $str]);
        }
        return view();
    }

    public function export()
    {
        try {
            $data = ChargeCode::where('used', '=', 1)->selectOrFail()->toArray();
            if (empty($data)) {
                return json(['err=>1', 'msg' => '没有可导出的']);
            }
            $arr = array();
            foreach ($data as $code) {
                ChargeCode::update([
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
            $file = $dir . '/chargecode.txt';
            if (file_exists($file)) {
                delete_dir_file($file);
            }
            file_put_contents($file, implode("\r\n", $arr));
            $site_url = config('site.url');

            return json(['err=>0', 'msg' => '成功导出，<a href="' . $site_url.'/downloads/chargecode.txt">点击下载</a>']);
        } catch (ModelNotFoundException $e) {
            return json(['err' => 1, 'msg' => $e->getMessage()]);
        }
    }

    public function delete()
    {
        $id = input('id');
        try {
            $code = ChargeCode::findOrFail($id);
            $code->delete();
            return json(['err' => '0', 'msg' => '删除成功']);
        } catch (ModelNotFoundException $e) {
            return json(['err' => '1', 'msg' => $e->getMessage() ]);
        }
    }

    public function deleteAll($ids)
    {
        ChargeCode::destroy($ids);
    }
}