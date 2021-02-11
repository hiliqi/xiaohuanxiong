<?php


namespace app\index\controller;

use think\facade\Db;
use think\facade\View;

class Rank extends Base
{
    protected $bookService;

    protected function initialize()
    {
        parent::initialize();
        $this->bookService = app('bookService');
    }

    public function index()
    {
        $day = strtotime("now");
        $day2 = date('Y-m-d', $day);
        $month = strtotime('-1 month');
        $month2 = date('Y-m-d', $month);

        $hot_books = $this->bookService->getHotBooks($this->prefix, $this->end_point);
        $hot_books_day = $this->bookService->getHotBooks($this->prefix, $this->end_point, $day2);
        $hot_books_month = $this->bookService->getHotBooks($this->prefix, $this->end_point, $month2);

        $newest = $this->bookService->getBooks($this->end_point, 'last_time', '1=1', 100);
        foreach ($newest as &$book) {
            $book['clicks'] = Db::query('SELECT SUM(clicks) as clicks FROM xwx_clicks WHERE book_id='.$book['id'])[0]['clicks'];
        }

//        $newest_day = $this->bookService->getBooks($this->end_point, 'last_time', [['last_time','>=', $day]], 100);
//        foreach ($newest_day as &$book) {
//            $book['clicks'] = Db::query('SELECT SUM(clicks) as clicks FROM xwx_clicks WHERE book_id='.$book['id'])[0]['clicks'];
//        }

//        $newest_month = $this->bookService->getBooks($this->end_point, 'last_time',  [['last_time','>=', $month]], 100);
//        foreach ($newest_month as &$book) {
//            $book['clicks'] = Db::query('SELECT SUM(clicks) as clicks FROM xwx_clicks WHERE book_id='.$book['id'])[0]['clicks'];
//        }

        $ends = $this->bookService->getBooks($this->end_point, 'last_time', [['end', '=', '1']], 100);
        foreach ($ends as &$book) {
            $book['clicks'] = Db::query('SELECT SUM(clicks) as clicks FROM xwx_clicks WHERE book_id='.$book['id'])[0]['clicks'];
        }

//        $where1[] = ['last_time' , '>=', $day];
//        $where1[] = ['end', '=', '1'];
//        $ends_day = $this->bookService->getBooks($this->end_point, 'last_time', $where1, 100);
//        foreach ($ends_day as &$book) {
//            $book['clicks'] = Db::query('SELECT SUM(clicks) as clicks FROM xwx_clicks WHERE book_id='.$book['id'])[0]['clicks'];
//        }

//        $where2[] = ['last_time' , '>=', $month];
//        $where2[] = ['end', '=', '1'];
//        $ends_month = $this->bookService->getBooks($this->end_point, 'last_time', $where2, 100);
//        foreach ($ends_month as &$book) {
//            $book['clicks'] = Db::query('SELECT SUM(clicks) as clicks FROM xwx_clicks WHERE book_id='.$book['id'])[0]['clicks'];
//        }

//        $most_charged =
// cache('most_charged');
//        if (!$most_charged) {
//            $arr = $this->bookService->getMostChargedBook($this->end_point);
//            if (count($arr) > 0) {
//                foreach ($arr as &$item) {
//                    $item['book']['clicks'] = Db::query('SELECT SUM(clicks) as clicks FROM xwx_clicks WHERE book_id='.$book['id'])[0]['clicks'];
//                    $most_charged[] = $item['book'];
//                }
//            } else {
//                $arr = [];
//            }
//            cache('most_charged', $most_charged, null, 'redis');
//        }

        View::assign([
            'list' => [
                ['keyword' => $newest, 'title' => '新书总榜', 'id' => 'newest'],
//                ['keyword' => $newest_day, 'title' => '新书日榜', 'id' => 'newest_day'],
//                ['keyword' => $newest_month, 'title' => '新书月榜', 'id' => 'newest_month'],
                ['keyword' => $hot_books, 'title' => '人气总榜', 'id' => 'hot_books'],
//                ['keyword' => $hot_books_day, 'title' => '人气日榜', 'id' => 'hot_books_day'],
//                ['keyword' => $hot_books_month, 'title' => '人气月榜', 'id' => 'hot_books_month'],
                ['keyword' => $ends, 'title' => '完结总榜', 'id' => 'ends'],
//                ['keyword' => $ends_day, 'title' => '完结日榜', 'id' => 'ends_day'],
//                ['keyword' => $ends_month, 'title' => '完结月榜', 'id' => 'ends_month']
            ]
        ]);

        return view($this->tpl);
    }
}