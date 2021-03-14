<?php


namespace app\service;

use app\model\Book;
use app\model\Chapter;
use app\model\UserBuy;
use think\facade\Db;

class BookService
{
    public function getPagedBooks($num, $end_point, $order = 'id', $where = '1=1')
    {
        $data = Book::where($where)->with('chapters')->order($order, 'desc')
            ->paginate([
                'list_rows'=> $num,
                'query' => request()->param(),
            ]);
        foreach ($data as &$book) {
            if ($end_point == 'id') {
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

    public function getBooks($end_point, $order = 'last_time', $where = '1=1', $num = 6 )
    {
        $books = Book::with(['chapters','author'])->where($where)
            ->limit($num)->order($order, 'desc')->select();
        foreach ($books as &$book) {
            $book['taglist'] = explode('|', $book->tags);
            if ($end_point == 'id') {
                $book['param'] = $book['id'];
            } else {
                $book['param'] = $book['unique_id'];
            }
        }
        return $books;
    }

    public function getMostChargedBook($end_point)
    {
        $data = UserBuy::with(['book' => ['author']])->field('book_id,sum(money) as sum')
            ->group('book_id')->select();
        foreach ($data as &$item) {
            if (!is_null($item['book'])) {
                $book = $item['book'];
                $book['taglist'] = explode('|', $item['book']['tags']);
                $item['book'] = $book;
                if ($end_point == 'id') {
                    $book['param'] = $book['id'];
                } else {
                    $book['param'] = $book['unique_id'];
                }
            }
        }
        $arr = $data->toArray();
        array_multisort(array_column($arr, 'sum'), SORT_DESC, $arr);
        return $arr;
    }

    public function getRecommand($tags, $end_point)
    {
        $arr = explode('|', $tags);
        $map = array();
        foreach ($arr as $value) {
            $map[] = ['tags', 'like', '%' . $value . '%'];
        }
        $books = Book::where($map)->limit(10)->select();
        foreach ($books as &$book) {
            if ($end_point == 'id') {
                $book['param'] = $book['id'];
            } else {
                $book['param'] = $book['unique_id'];
            }
        }
        return $books;
    }

    public function getByTag($tag, $end_point, $limit)
    {
        $books = Book::where('tags', 'like', '%' . $tag . '%')
            ->order('id','desc')->limit($limit)->select();
        foreach ($books as &$book) {
            //$book['chapter_count'] = Chapter::where('book_id', '=', $book['id'])->count();
            if ($end_point == 'id') {
                $book['param'] = $book['id'];
            } else {
                $book['param'] = $book['unique_id'];
            }
        }
        return $books;
    }

    public function getRand($num, $prefix, $end_point)
    {
        $books = Db::query('SELECT a.id,a.book_name,a.summary,a.end,a.author_name,a.cover_url FROM 
                    (SELECT ad1.id,book_name,summary,`end`,author_id,cover_url,author_name
FROM ' . $this->prefix . 'book AS ad1 JOIN (SELECT ROUND(RAND() * ((SELECT MAX(id) FROM ' . $this->prefix . 'book)-(SELECT MIN(id) FROM '
            . $this->prefix . 'book))+(SELECT MIN(id) FROM ' . $this->prefix . 'book)) AS id)
             AS t2 WHERE ad1.id >= t2.id ORDER BY ad1.id LIMIT 20) as a');
        foreach ($books as &$book) {
            //$book['chapter_count'] = Chapter::where('book_id', '=', $book['id'])->count();
            if ($end_point == 'id') {
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
//            "select * from " . $prefix . "book where delete_time=0 and match(book_name)
//            against ('" . $keyword . "' IN NATURAL LANGUAGE MODE) LIMIT " . $num
//        );
        $map[] = ['delete_time','=',0];
        $map[] = ['book_name','like','%'.$keyword.'%'];
        return Book::where($map)->limit($num)->select();
    }

    public function getHotBooks($prefix, $end_point, $date = '1900-01-01', $num = 10)
    {
        $data = Db::query("SELECT book_id,SUM(clicks) as clicks FROM " . $prefix . "clicks WHERE cdate>=:cdate
 GROUP BY book_id ORDER BY clicks DESC LIMIT :num", ['cdate' => $date, 'num' => $num]);
        $books = array();
        foreach ($data as $val) {
            $book = Book::with('chapters')->find($val['book_id']);
            if ($book) {
                //$book['chapter_count'] = Chapter::where('book_id', '=', $book['id'])->count();
                $book['taglist'] = explode('|', $book->tags);
                $book['clicks'] = $val['clicks'];
                if ($end_point == 'id') {
                    $book['param'] = $book['id'];
                } else {
                    $book['param'] = $book['unique_id'];
                }
                array_push($books, $book);
            }
        }
        return $books;
    }

    public function getClicks($book_id, $prefix)
    {
        $clicks = Db::query("SELECT click FROM(SELECT book_id,
 sum(clicks) as click FROM " . $prefix . "clicks GROUP BY book_id) as a WHERE book_id=:book_id", ['book_id' => $book_id]);
        if (empty($clicks)) {
            return 0;
        }
        return $clicks[0]['click'];
    }
}