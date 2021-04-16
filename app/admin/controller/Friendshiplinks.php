<?php


namespace app\admin\controller;

use app\model\FriendshipLink;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\facade\App;
use think\facade\View;

class Friendshiplinks extends BaseAdmin
{
    public function index()
    {
        return view();
    }

    public function list()
    {
        $page = intval(input('page'));
        $limit = intval(input('limit'));
        $data = FriendshipLink::order('id', 'desc');
        $count = $data->count();
        $links = $data->order('id', 'desc')
            ->limit(($page - 1) * $limit, $limit)->select();
        return json([
            'code' => 0,
            'msg' => '',
            'count' => $count,
            'data' => $links
        ]);
    }

    public function create()
    {
        if (request()->isPost()) {
            $data = request()->param();
            $link = new FriendshipLink();
            $result = $link->save($data);
            if ($result) {
                return json(['err' => 0, 'msg' => '添加成功']);
            } else {
                return json(['err' => 1, 'msg' => '添加失败']);
            }
        }
        return view();
    }

    public function edit()
    {
        try {
            $link = FriendshipLink::findOrFail(input('id'));
            if (request()->isPost()) {
                $link->name = input('name');
                $link->url = input('url');
                $result = $link->save();
                if ($result) {
                    return json(['err' => 0, 'msg' => '修改成功']);
                } else {
                    return json(['err' => 1, 'msg' => '修改失败']);
                }
            }
            View::assign([
                'link' => $link,
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
        FriendshipLink::destroy($id);
        return ['err' => '0', 'msg' => '删除成功'];
    }

    public function didi()
    {
        if (request()->isPost()) {
            $site_id = input('siteid');
            $token = input('token');
            $code = <<<INFO
<?php
return [
    'siteid' => '{$site_id}',
    'token' => '{$token}'
 ];
INFO;
            $file = App::getRootPath() . 'config/didi.php';
            if (!file_exists($file)) {
                return json(['err' => 1, 'msg' => '配置文件不存在']);
            }
            file_put_contents($file, $token);
            return json(['err' => 0, 'msg' => '修改成功']);
        }
        $site_id = config('didi.siteid');
        $token = config('didi.token');
        View::assign([
            'siteid' => $site_id,
            'token' => $token
        ]);
        return \view();
    }
}