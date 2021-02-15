<?php


namespace app\admin\controller;

use app\model\Book;
use app\model\Comments;
use app\model\User;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\facade\View;

class Comment extends BaseAdmin
{
    public function index()
    {
        return view();
    }

    public function list()
    {
        $page = intval(input('page'));
        $limit = intval(input('limit'));
        $map = array();
        $uid = input('uid');
        if ($uid) {
            $map[] = ['user_id', '=', $uid];
        }

        $book_id = input('book_id');
        if ($book_id) {
            $map[] = ['book_id', '=', $book_id];
        }
        $data = Comments::where($map);
        $count = $data->count();
        $comments = $data->order('id', 'desc')
            ->limit(($page - 1) * $limit, $limit)->select();
        foreach ($comments as &$comment)
        {
            $comment['user'] = User::where('user_id','=',$comment['user_id'])->column('username');
            $comment['book'] = Book::where('book_id','=',$comment['book_id'])->column('book_name');
        }
        return json([
            'code' => 0,
            'msg' => '',
            'count' => $count,
            'data' => $comments
        ]);
    }

    public function delete()
    {
        $id = input('id');
        try {
            $comment = Comments::findOrFail($id);
            $result = $comment->delete();
            if ($result) {
                return ['err' => '0', 'msg' => '删除成功'];
            } else {
                return ['err' => '1', 'msg' => '删除失败'];
            }
        } catch (ModelNotFoundException $e) {
            return ['err' => '1', 'msg' => $e->getMessage()];
        }
    }

    public function deleteAll($ids)
    {
        Comments::destroy($ids);
    }
}