<?php


namespace app\mobile\controller;

use app\model\Book;
use app\model\Chapter;
use app\model\Tags;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\facade\Db;
use think\facade\View;

class Booklist extends Base
{
    public function index() {
        View::assign('header_title', '漫画分类');
        return view($this->tpl);
    }

    public function getBooks()
    {
        $map = array();
        $area = input('area');
        if (is_null($area) || $area == '-1') {

        } else {
            $map[] = ['area_id', '=', $area];
        }
        $tag = input('tag');
        if (is_null($tag) || $tag == '全部') {

        } else {
            $map[] = ['tags', 'like', '%' . $tag . '%'];
        }
        $end = input('end');
        if (is_null($end) || $end == -1) {

        } else {
            $map[] = ['end', '=', $end];
        }
        $page = input('page');
        try {
            $books = Book::where($map)->with('chapters')->order('update_time', 'desc')
                ->limit($page, 15)->selectOrFail();
            foreach ($books as &$book) {
                if ($this->end_point == 'id') {
                    $book['param'] = $book['id'];
                } else {
                    $book['param'] = $book['unique_id'];
                }
            }
            return json(['err' => 0, 'books' => $books]);
        } catch (DataNotFoundException $e) {
            return json(['err' => 1]);
        } catch (ModelNotFoundException $e) {
            return json(['err' => 1]);
        }

    }

    public function getOptions() {
        $tags = cache('tags');
        if (!$tags) {
            $tags = Tags::select();
            cache('tags', $tags, null, 'redis');
        }
        return json([
            'tags' => $tags,
        ]);
    }
}