<?php


namespace app\admin\controller;

use app\model\UserOrder;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\exception\ErrorException;
use think\facade\App;
use think\facade\View;
use app\model\User;
use app\model\UserFinance;

class Payment extends BaseAdmin
{
    //支付配置文件
    public function index()
    {
        if (request()->isPost()) {
            $content = input('json');
            try {
                file_put_contents(App::getRootPath() . 'config/payment.php', $content);
                return json(['err' => 0, 'msg' => '保存成功']);
            } catch (ErrorException $exception) {
                return json(['err' => 1, 'msg' => '保存失败，' . $exception]);
            }
        }
        try {
            $content = file_get_contents(App::getRootPath() . 'config/payment.php');
            View::assign('json', $content);
            return view();
        } catch (ErrorException $e) {
            abort(404, $e->getMessage());
        }

    }

    //订单查询
    public function orders()
    {
        return view();
    }

    public function orderlist()
    {
        $id = input('id');
        $uid = input('user_id');
        $status = (int)input('status');
        $map = array();
        if ($id) {
            $map[] = ['id', '=', $id];
        }
        if ($uid) {
            $map[] = ['user_id', '=', $uid];
        }

        if ($status) {
            $map[] = ['status', '=', $status == 2 ? 0 : 1];
        }
        $page = intval(input('page'));
        $limit = intval(input('limit'));
        $data = UserOrder::where($map);
        $count = $data->count();
        $orders = $data->order('id', 'desc')->limit(($page - 1) * $limit, $limit)->select();
        return json([
            'code' => 0,
            'msg' => '',
            'count' => $count,
            'data' => $orders
        ]);
    }

    //用户消费记录
    public function finance()
    {
        return view();
    }

    public function flist()
    {
        $uid = input('user_id');
        $usage = input('usage');
        $map = array();
        if ($uid) {
            $map[] = ['user_id', '=', $uid];
        }
        if ($usage) {
            $map[] = ['usage', '=', $usage];
        }
        $page = intval(input('page'));
        $limit = intval(input('limit'));
        $data = UserFinance::where($map);
        $count = $data->count();
        $finances = $data->order('id', 'desc')->limit(($page - 1) * $limit, $limit)->select();
        return json([
            'code' => 0,
            'msg' => '',
            'count' => $count,
            'data' => $finances
        ]);
    }

    public function charge()
    {
        if (request()->isPost()) {
            $uid = input('uid');
            try {
                $user = User::findOrFail($uid);
                $money = input('money');
                $userFinance = new UserFinance();
                $userFinance->user_id = $uid;
                $userFinance->money = $money;
                $userFinance->usage = 1;
                $userFinance->summary = '代充值';
                $result = $userFinance->save();
                if ($result) {
                    return json(['err' => 0, 'msg' => '充值成功']);
                } else {
                    return json(['err' => 1, 'msg' => '充值失败']);
                }
            } catch (ModelNotFoundException $e) {
                return json(['err' => 1, 'msg' => $e->getMessage()]);
            }

        }
        return view();
    }

    public function delete()
    {
        $id = input('id');
        $result = UserOrder::destroy($id);
        if ($result) {
            return ['err' => '0', 'msg' => '删除成功'];
        } else {
            return ['err' => '1', 'msg' => '删除失败'];
        }

    }
}