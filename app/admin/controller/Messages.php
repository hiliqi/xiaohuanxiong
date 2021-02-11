<?php


namespace app\admin\controller;

use app\model\Message;
use app\model\User;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\facade\View;

class Messages extends BaseAdmin
{
    public function index()
    {
        $data = Message::where('pid', '=', -1);
        $msgs = $data->order('id','desc')->paginate(5, false,
            [
                'query' => request()->param(),
                'var_page' => 'page',
            ])->each(function ($item, $key) {
            //$dir = Env::get('root_path') . '/public/static/upload/message/' . $item['id'] . '/';
            //$item['content'] = file_get_contents($dir . 'msg.txt'); //获取用户留言内容
            try {
                $user = User::findOrFail($item['uid']);//根据留言用户ID查出用户
                $item['user'] = $user;
            } catch (DataNotFoundException $e) {
                abort(404, $e->getMessage());
            } catch (ModelNotFoundException $e) {
                abort(404, $e->getMessage());
            }

        });
        View::assign([
            'msgs' => $msgs,
            'count' => $data->count()
        ]);
        return view();
    }

    public function reply()
    {
        $id = input('id');
        if (request()->isPost()) {
            $msg = new Message();
            $msg->pid = $id; //受回复消息的id
            $msg->uid = -1;//管理员
            $msg->content = input('content');
            $result = $msg->save();
            if ($result) {
                return json(['err' => 0, 'msg' => '回复成功']);
            } else {
                return json(['err' => 0, 'msg' => '回复失败']);
            }
        }
        try {
            $msg = Message::findOrFail($id);
            $replys = Message::where('pid', '=', $id)->select();
            View::assign([
                'msg' => $msg,
                'replys' => $replys
            ]);
        } catch (DataNotFoundException $e) {
            abort(404, $e->getMessage());
        } catch (ModelNotFoundException $e) {
            abort(404, $e->getMessage());
        }
        return view();
    }


}