<?php


namespace app\admin\controller;

use app\model\FriendshipLink;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\facade\View;

class Friendshiplinks extends BaseAdmin
{
    public function index(){
        $data = FriendshipLink::order('id','desc');
        $links =  $data->paginate(5,false,
            [
                'var_page' => 'page',
            ]);
        View::assign([
            'links' => $links,
            'count' => $data->count()
        ]);
        return view();
    }

    public function create(){
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

    public function edit(){
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

    public function delete(){
        $id = input('id');
        FriendshipLink::destroy($id);
        return ['err' => '0','msg' => '删除成功'];
    }
}