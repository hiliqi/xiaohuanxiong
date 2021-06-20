<?php


namespace app\app\controller;

use app\model\Banner;
use app\model\Book;
use app\model\Chapter;
use app\model\Tags;

class Tag extends Base
{
    public function getList()
    {
        $tags = cache('tags');
        if (!$tags) {
            $tags = Tags::select();
            cache('tags', $tags, null, 'redis');
        }

        $result = [
            'success' => 1,
            'tags' => $tags
        ];
        return json($result);
    }

    public function getAreaList()
    {
        $areas = cache('areas');
        if (!$areas) {
            $areas = \app\model\Area::select();
            cache('areas', $areas, null, 'redis');
        }
        return json(['success' => 1, 'areas' => $areas]);
    }

    public function getBookList()
    {
        $startItem = input('startItem');
        $pageSize = input('pageSize');

        $map = array();
        $area = request()->param('area');
        if (is_null($area) || $area == '-1') {

        } else {
            $map[] = ['area_id', '=', $area];
        }

        $tag = request()->param('tag');
        if (is_null($tag) || $tag == '全部') {

        } else {
            $map[] = ['tags', 'like', '%' . $tag . '%'];
        }

        $end = request()->param('end');
        if (is_null($end) || $end == -1) {

        } else {
            $map[] = ['end', '=', $end];
        }

        $data = Book::where($map)->order('update_time', 'desc');
        $count = $data->count();
        $books = $data->limit($startItem, $pageSize)->select();
        foreach ($books as &$book) {
            if (substr($book->cover_url, 0, 4) === "http") {

            } else {
                $book->cover_url = $this->img_domain . $book->cover_url;
            }
        }

        return json([
            'success' => 1,
            'books' => $books,
            'count' => $count
        ]);
    }

    public function getTops()
    {
        $tops = cache('topsHomepage');
        if (!$tops) {
            $where[] = ['is_top', '=', '1'];
            $tops = Book::with(['chapters', 'author'])->where($where)
                ->limit(30)->order('id', 'desc')->select();
            cache('topsHomepage', $tops, null, 'redis');
        }
        return json([
            'success' => 1,
            'tops' => $tops
        ]);
    }

    public function getBanners()
    {
        $num = input('num');
        $banners = cache('bannersHomepage');
        if (!$banners) {
            $banners = Banner::with('book')->where('banner_order', '>', 0)->order('banner_order', 'desc')->select();
            foreach ($banners as &$banner) {
                if (substr($banner['pic_name'], 0, 4) === 'http') {

                } else {
                    $banner['pic_name'] = $this->img_domain  . $banner['pic_name'];
                }
            }
            cache('bannersHomepage', $banners, null, 'redis');
        }
        return json(['success' => 1, 'banners' => $banners]);
    }

    public function getBooksByTag()
    {
        $str = input('str');
        $tags = explode(',', $str);
        $catelist = array(); //分类漫画数组
        $cateItem = array();
        foreach ($tags as $tag) {
            $books = cache('booksFilterByTag:' . $tag);
            if (!$books) {
                $books = Book::where('tags', 'like', '%' . $tag . '%')
                    ->order('id', 'desc')->limit(10)->select();
                foreach ($books as &$book) {
                    //$book['chapter_count'] = Chapter::where('book_id','=',$book['id'])->count();
                    if (substr($book->cover_url, 0, 4) === "http") {

                    } else {
                        $book->cover_url = $this->img_domain . $book->cover_url;
                    }
                }
                cache('booksFilterByTag:' . $tag, $books, null, 'redis');
            }
            $cateItem['books'] = $books->toArray();
            $cateItem['tag'] = $tag;
            $catelist[] = $cateItem;
        }
        return json(['success' => 1, 'cates' => $catelist]);
    }
}