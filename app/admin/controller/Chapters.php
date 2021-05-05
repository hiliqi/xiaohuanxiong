<?php


namespace app\admin\controller;

use app\service\ChapterService;
use app\model\Book;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\facade\View;
use app\model\Chapter;

class Chapters extends BaseAdmin
{
       public function index()
    {
        $book_id = input('book_id');
        View::assign('book_id', $book_id);
        return view();
    }

    public function list()
    {
        $book_id = input('book_id');
        $page = intval(input('page'));
        $limit = intval(input('limit'));
        $data = Chapter::where('book_id', '=', $book_id);
        $count = $data->count();
        $chapters = $data->limit(($page - 1) * $limit, $limit)
            ->order('chapter_order', 'desc')->select();
        return json([
            'code' => 0,
            'msg' => '',
            'count' => $count,
            'data' => $chapters
        ]);
    }

    public function create()
    {
        $data = request()->param();
        if (request()->isPost()) {
            $chapter = new Chapter();
            $result = $chapter->save($data);
            if ($result) {
                $param = [
                    "id" => $data["book_id"],
                    "last_time" => time(),
                    "last_chapter_id" => $chapter->id,
                    "last_chapter" => $chapter->chapter_name
                ];
                Book::update($param);
                return json(['err' => 0, 'msg' => '添加成功']);
            } else {
                return json(['err' => 1, 'msg' => '添加失败']);
            }
        }
        $book = Book::findOrFail($data['book_id']);
        $lastChapterOrder = $book->last_chapter_id;
        View::assign([
            'book_id' => $data['book_id'],
            'order' => $lastChapterOrder + 1,
        ]);
        return view();
    }

    public function edit()
    {
        $data = request()->param();
        try {
            $chapter = Chapter::findOrFail($data['id']);
            if (request()->isPost()) {
                $result = $chapter->save($data);
                if ($result) {
                    return json(['err' => 0, 'msg' => '修改成功']);
                } else {
                    return json(['err' => 1, 'msg' => '修改失败']);
                }
            } else {
                $chapter = Chapter::findOrFail($data['id']);
                View::assign([
                    'chapter' => $chapter,
                ]);
                return view();
            }
        } catch (ModelNotFoundException $e) {
            return json(['err' => 1, 'msg' => $e->getMessage()]);
        }
    }

    public function delete()
    {
        $id = input('id');
        try {
            $chapter = Chapter::findOrFail($id);
            $photos = $chapter->photos;
            if (count($photos) > 0) {
                return ['err' => 1, 'msg' => '章节下还存在图片，请先删除'];
            }
            $chapter->delete();
            return ['err' => 0, 'msg' => '删除成功'];
        } catch (DataNotFoundException $e) {
            abort(404, $e->getMessage());
        } catch (ModelNotFoundException $e) {
            abort(404, $e->getMessage());
        }
    }

    public function deleteAll()
    {
        $ids = input('ids');
        Chapter::destroy($ids);
    }

}