<?php


namespace app\admin\controller;


use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\facade\View;
use app\service\UserService;
use app\model\User;

class Users extends BaseAdmin
{
    public function index()
    {
        return view();
    }

    public function list()
    {
        $status = intval(input('status'));
        $page = intval(input('page'));
        $limit = intval(input('limit'));
        if ($status == 1) {
            $data = User::order('id', 'desc');
        } else {
            $data = User::onlyTrashed()->order('id', 'desc');
        }
        $count = $data->count();
        $users = $data->limit(($page - 1) * $limit, $limit)->select();
        foreach ($users as &$user)
        {
            $user['balance'] = $this->financeService->getBalance($user['id']);
        }
        return json([
            'code' => 0,
            'msg' => '',
            'count' => $count,
            'data' => $users
        ]);
    }

    public function search()
    {
        $username = input('username');
        $where[] = ['username','like','%'.$username.'%'];
        $page = intval(input('page'));
        $limit = intval(input('limit'));
        $data = User::where($where);
        $count = $data->count();
        $users = $data->order('id', 'desc')
            ->limit(($page - 1) * $limit, $limit)->select();
        foreach ($users as &$user)
        {
            $user['balance'] = $this->financeService->getBalance($user['id']);
        }
        return json([
            'code' => 0,
            'msg' => '',
            'count' => $count,
            'data' => $users
        ]);
    }


    public function disabled()
    {
        return \view();
    }

    public function disable()
    {
        $id = input('id');
        if (empty($id) || is_null($id)) {
            return json(['err' => 1, 'msg' => '找不到用户']);
        }
        try {
            $user = User::findOrFail($id);
            $result = $user->delete();
            if ($result) {
                return json(['err' => 0, 'msg' => '锁定成功']);
            } else {
                return json(['err' => 1, 'msg' => '锁定失败']);
            }
        } catch (ModelNotFoundException $e) {
            return json(['err' => 1, 'msg' => $e->getMessage()]);
        }
    }

    public function enable()
    {
        $id = input('id');
        if (empty($id) || is_null($id)) {
            return json(['err' => 1, 'msg' => '找不到用户']);
        }
        try {
            $user = User::onlyTrashed()->findOrFail($id);
            $result = $user->restore();
            if ($result) {
                return json(['err' => 0, 'msg' => '解锁成功']);
            } else {
                return json(['err' => 1, 'msg' => '解锁失败']);
            }
        } catch (ModelNotFoundException $e) {
            return json(['err' => 1, 'msg' => $e->getMessage()]);
        }
    }

    public function edit()
    {
        $id = input('id');
        try {
            $user = User::findOrFail($id);
            if (request()->isPost()) {
                if (!empty(input('password')))
                {
                    $user->password = input('password');
                }
                if (!empty(input('expire_time')))
                {
                    $user->vip_expire_time = strtotime(input('expire_time'));
                }

                $result = $user->save();
                if ($result) {
                    return json(['err' =>0,'msg'=>'修改成功']);
                }else{
                    return json(['err' =>1,'msg'=>'修改失败']);
                }
            }
            $expire_time = (date('Y-m-d', $user->vip_expire_time));
            View::assign([
                'user' => $user,
                'expire_time' => $expire_time
            ]);
            return view();
        } catch (DataNotFoundException $e) {
            abort(404, $e->getMessage());
        } catch (ModelNotFoundException $e) {
            abort(404, $e->getMessage());
        }
    }

    public function delete()
    {
        $id = input('id');
        try {
            $user = User::findOrFail($id);
            $result = $user->force()->delete();
            if ($result) {
                return ['err' => 0, 'msg' => '删除成功'];
            } else {
                return ['err' => 1, 'msg' => '删除失败'];
            }
        } catch (DataNotFoundException $e) {
            abort(404, $e->getMessage());
        } catch (ModelNotFoundException $e) {
            abort(404, $e->getMessage());
        }
    }

    public function deleteAll()
    {
        $ids = input('ids');
        User::destroy($ids);
    }
}