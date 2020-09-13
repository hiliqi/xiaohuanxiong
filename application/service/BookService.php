<?php
/**
 * Created by PhpStorm.
 * User: hiliq
 * Date: 2018/10/3
 * Time: 23:39
 */

namespace app\service;

use app\index\controller\Base;
use app\model\Book;
use app\model\Chapter;
use app\model\UserBuy;
use think\Db;

class BookService extends Base
{
    public function getPagedBooks($order = 'id', $where = '1=1', $pc_page, $mobile_page)
    {
        $num = $pc_page;
        if ($this->request->isMobile()) {
            $num = $mobile_page;
        }
        $data = Book::where($where)->order($order, 'desc')
            ->paginate($num, false);
        foreach ($data as &$book) {
            if (empty($book['cover_url'])) {
                $book['cover_url'] = $this->img_site.'/static/upload/book/'.$book['id'].'/cover.jpg';
            }
            if ($this->end_point == 'id') {
                $book['param'] = $book['id'];
            } else {
                $book['param'] = $book['unique_id'];
            }
        }
        $books = $data->toArray();
        return [
            'books' => $books['data'],
            'page' => [
                'total' => $books['total'],
                'per_page' => $books['per_page'],
                'current_page' => $books['current_page'],
                'last_page' => $books['last_page'],
                'query' => request()->param()
            ]
        ];
    }

    public function getPagedBooksAdmin($status, $where = '1=1')
    {
        if ($status == 1) { //正常用户
            $data = Book::where($where);
        } else {
            $data = Book::onlyTrashed()->where($where);
        }
        $page = config('page.back_end_page');
        $books = $data->with('author')->order('id', 'desc')
            ->paginate($page, false,
                [
                    'query' => request()->param(),
                    'type' => 'util\AdminPage',
                    'var_page' => 'page',
                ]);

        return [
            'books' => $books,
            'count' => $data->count()
        ];
    }

    public function getBooks($order = 'last_time', $where = '1=1', $num = 6)
    {
        $books = Book::where($where)->with('author,chapters')
            ->limit($num)->order($order, 'desc')->select();
        foreach ($books as &$book) {
            $book['taglist'] = explode('|', $book->tags);
            if (empty($book['cover_url'])) {
                $book['cover_url'] = $this->img_site.'/static/upload/book/'.$book['id'].'/cover.jpg';
            }
            if ($this->end_point == 'id') {
                $book['param'] = $book['id'];
            } else {
                $book['param'] = $book['unique_id'];
            }
        }
        return $books;
    }

    public function getMostChargedBook()
    {
        $data = UserBuy::with(['book' => ['author']])->field('book_id,sum(money) as sum')
            ->group('book_id')->select();
        if (count($data) > 0) {
            foreach ($data as &$item) {
                $book = $item['book'];
                $book['taglist'] = explode('|', $item['book']['tags']);
                $item['book'] = $book;
                if (empty($book['cover_url'])) {
                    $book['cover_url'] = $this->img_site.'/static/upload/book/'.$book['id'].'/cover.jpg';
                }
                if ($this->end_point == 'id') {
                    $book['param'] = $book['id'];
                } else {
                    $book['param'] = $book['unique_id'];
                }
            }
            $arr = $data->toArray();
            array_multisort(array_column($arr, 'sum'), SORT_DESC, $arr);
            return $arr;
        } else {
            return [];
        }
    }

    public function getRecommand($tags)
    {
        $arr = explode('|', $tags);
        $map = array();
        foreach ($arr as $value) {
            $map[] = ['tags', 'like', '%' . $value . '%'];
        }
        $books = Book::where($map)->limit(10)->select();
        foreach ($books as &$book) {
            if (empty($book['cover_url'])) {
                $book['cover_url'] = $this->img_site.'/static/upload/book/'.$book['id'].'/cover.jpg';
            }
            if ($this->end_point == 'id') {
                $book['param'] = $book['id'];
            } else {
                $book['param'] = $book['unique_id'];
            }
        }
        return $books;
    }

    public function getByName($name)
    {
        return Book::where('book_name', '=', $name)->find();
    }

    public function getByTag($tag, $limit)
    {
        $books = Book::where('tags', 'like', '%' . $tag . '%')->select();
        foreach ($books as &$book) {
            if (empty($book['cover_url'])) {
                $book['cover_url'] = $this->img_site.'/static/upload/book/'.$book['id'].'/cover.jpg';
            }
            if ($this->end_point == 'id') {
                $book['param'] = $book['id'];
            } else {
                $book['param'] = $book['unique_id'];
            }
        }
        return $books;
    }

    public function getRand($num)
    {
        $books = Db::query('SELECT a.id,a.book_name,a.summary,a.end,b.author_name FROM 
(SELECT ad1.id,book_name,summary,end,author_id,cover_url
FROM ' . $this->prefix . 'book AS ad1 JOIN (SELECT ROUND(RAND() * ((SELECT MAX(id) FROM ' . $this->prefix . 'book)-(SELECT MIN(id) FROM ' . $this->prefix . 'book))+(SELECT MIN(id) FROM ' . $this->prefix . 'book)) AS id)
 AS t2 WHERE ad1.id >= t2.id ORDER BY ad1.id LIMIT ' . $num . ') as a
 INNER JOIN author as b on a.author_id = b.id');
        foreach ($books as &$book) {
            if (empty($book['cover_url'])) {
                $book['cover_url'] = $this->img_site.'/static/upload/book/'.$book['id'].'/cover.jpg';
            }
            if ($this->end_point == 'id') {
                $book['param'] = $book['id'];
            } else {
                $book['param'] = $book['unique_id'];
            }
        }
        return $books;
    }

    public function search($keyword, $num)
    {
//        return Db::query(
//            "select * from " . $this->prefix . "book where delete_time=0 and match(book_name,summary,author_name,nick_name)
//            against ('" . $keyword . "' IN NATURAL LANGUAGE MODE) LIMIT " . $num
//        );

        $map[] = ['delete_time','=',0];
        $map[] = ['book_name','like','%'.$keyword.'%'];
        return Book::where($map)->limit($num)->select();
    }

    public function getHotBooks($date = '1900-01-01', $num = 10)
    {
        $data = Db::query("SELECT book_id,SUM(clicks) as clicks FROM " . $this->prefix . "clicks WHERE cdate>=:cdate
 GROUP BY book_id ORDER BY clicks DESC LIMIT :num", ['cdate' => $date, 'num' => $num]);
        $books = array();
        foreach ($data as $val) {
            $book = Book::find($val['book_id']);
            if ($book) {
                $book['taglist'] = explode('|', $book->tags);
                $book['clicks'] = $val['clicks'];
                if (empty($book['cover_url'])) {
                    $book['cover_url'] = $this->img_site.'/static/upload/book/'.$book['id'].'/cover.jpg';
                }
                if ($this->end_point == 'id') {
                    $book['param'] = $book['id'];
                } else {
                    $book['param'] = $book['unique_id'];
                }
                array_push($books, $book);
            }
        }
        return $books;
    }

    public function getClicks($book_id)
    {
        $clicks = Db::query("SELECT click FROM(SELECT book_id,
 sum(clicks) as click FROM " . $this->prefix . "clicks GROUP BY book_id) as a WHERE book_id=:book_id", ['book_id' => $book_id]);
        if (empty($clicks)) {
            return 0;
        }
        return $clicks[0]['click'];
    }
}