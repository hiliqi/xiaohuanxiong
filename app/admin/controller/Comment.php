<?php


namespace app\admin\controller;

use app\model\Comments;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\facade\View;

class Comment extends BaseAdmin
{
    public function index()
    {
        $map = array();
        $uid = input('uid');
        if ($uid){
            $map[] = ['user_id','=',$uid];
        }

        $book_id = input('book_id');
        if ($book_id){
            $map[] = ['book_id','=',$book_id];
        }
        $data = Comments::with(['book','user'])->where($map);
        $comments = $data->order('id', 'desc')->paginate(
            [
                'list_rows'=> 5,
                'query' => request()->param(),
                'var_page' => 'page',
            ]);
//        ->each(function ($item, $key) {
//            $dir = Env::get('root_path') . '/public/static/upload/comments/' . $item->book->id . '/';
//            $item['content'] = file_get_contents($dir . $item->id . '.txt'); //获取用户评论内容
//        });
        View::assign([
            'comments' => $comments,
            'count' => $data->count()
        ]);
        return view();
    }

    public function delete(){
        $id = input('id');
        try {
            $comment = Comments::findOrFail($id);
            $result = $comment->delete();
            if ($result) {
                return ['err' => '0','msg' => '删除成功'];
            } else {
                return ['err' => '1','msg' => '删除失败'];
            }
        } catch (DataNotFoundException $e) {
            abort(404, $e->getMessage());
        } catch (ModelNotFoundException $e) {
            abort(404, $e->getMessage());
        }
    }

    public function deleteAll($ids){
        Comments::destroy($ids);
    }
}