<?php


namespace app\app\controller;


use app\common\RedisHelper;
use app\model\Area;
use app\model\Author;
use app\model\Book;
use app\model\Comments;
use app\model\UserBuy;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;
use think\facade\Db;

class Books extends Base
{
    public function getNewest()
    {
        $num = input('num');
        $books = cache('newestHomepageApp');
        if (!$books) {
            $books = Book::limit(0, $num)->order('last_time', 'desc')->select();
            foreach ($books as &$book) {
                if (substr($book['cover_url'], 0, 4) === "http") {

                } else {
                    $book['cover_url'] = $this->img_domain . $book['cover_url'];
                }
                if (substr($book['banner_url'], 0, 4) === "http") {

                } else {
                    $book['banner_url'] = $this->img_domain . $book['banner_url'];
                }
            }
            cache('newestHomepageApp', $books, null, 'redis');
        }
        $result = [
            'success' => 1,
            'newest' => $books
        ];
        return json($result);
    }

    public function getHot()
    {
        $num = input('num');
        $books = cache('hotBooksApp');
        if (!$books) {
            $books = Book::limit(0, $num)->order('hits', 'desc')->select();
            foreach ($books as &$book) {
                if (substr($book['cover_url'], 0, 4) === "http") {

                } else {
                    $book['cover_url'] = $this->img_domain . $book['cover_url'];
                }
                if (substr($book['banner_url'], 0, 4) === "http") {

                } else {
                    $book['banner_url'] = $this->img_domain . $book['banner_url'];
                }
            }
            cache('newestHomepageApp', $books, null, 'redis');
        }
        $result = [
            'success' => 1,
            'hots' => $books
        ];
        return json($result);
    }

    public function getTops()
    {
        $num = input('num');
        $books = cache('topsHomepageApp');
        if (!$books) {
            $books = Book::where('is_top', '=', '1')->limit(0, $num)->order('last_time', 'desc')->select();
            foreach ($books as &$book) {
                if (substr($book['cover_url'], 0, 4) === "http") {

                } else {
                    $book['cover_url'] = $this->img_domain . $book['cover_url'];
                }
                if (substr($book['banner_url'], 0, 4) === "http") {

                } else {
                    $book['banner_url'] = $this->img_domain . $book['banner_url'];
                }
            }
            cache('topsHomepageApp', $books, null, 'redis');
            $result = [
                'success' => 1,
                'tops' => $books
            ];
            return json($result);
        }
    }

    public function getEnds()
    {
        $num = input('num');
        $books = cache('endsHomepageApp');
        if (!$books) {
            $books = Book::where('end', '=', '1')->limit(0, $num)->order('last_time', 'desc')->select();
            foreach ($books as &$book) {
                if (substr($book['cover_url'], 0, 4) === "http") {

                } else {
                    $book['cover_url'] = $this->img_domain . $book['cover_url'];
                }
                if (substr($book['banner_url'], 0, 4) === "http") {

                } else {
                    $book['banner_url'] = $this->img_domain . $book['banner_url'];
                }
            }
            cache('endsHomepageApp', $books, null, 'redis');
        }
        $result = [
            'success' => 1,
            'ends' => $books
        ];
        return json($result);
    }

    public function getmostcharged()
    {
        $num = input('num');
        $data = UserBuy::with('book.author')->field('book_id,sum(money) as sum')
            ->limit($num)->group('book_id')->select()->toArray();
        array_multisort(array_column($data, 'sum'), SORT_DESC, $data);
        $books = array();
        foreach ($data as &$item) {
            if (!empty($item['book'])) {
                $book = $item['book'];
                if (substr($book['cover_url'], 0, 4) === "http") {

                } else {
                    $book['cover_url'] = $this->img_domain . $book['cover_url'];
                }
                if (substr($book['banner_url'], 0, 4) === "http") {

                } else {
                    $book['banner_url'] = $this->img_domain . $book['banner_url'];
                }
                array_push($books, $book);
            }
        }
        $result = [
            'success' => 1,
            'books' => $books
        ];
        return json($result);
    }
    
    public function getupdate() {
        $startItem = input('startItem');
        $pageSize = input('pageSize');
        $data = Book::order('last_time', 'desc');
        $count = $data->count();
        $books = $data->limit($startItem, $pageSize)->select();
        foreach ($books as &$book) {
            if (substr($book['cover_url'], 0, 4) === "http") {

            } else {
                $book['cover_url'] = $this->img_domain . $book['cover_url'];
            }
            if (substr($book['banner_url'], 0, 4) === "http") {

            } else {
                $book['banner_url'] = $this->img_domain . $book['banner_url'];
            }
        }
        $result = [
            'success' => 1,
            'books' => $books,
            'count' => $count
        ];
        return json($result);
    }

    public function search()
    {
        $keyword = input('keyword');
        $num = input('num');
//        $redis = RedisHelper::GetInstance();
//        $redis->zIncrBy($this->redis_prefix . 'hot_search:', 1, $keyword);
//        $hot_search_json = $redis->zRevRange($this->redis_prefix . 'hot_search', 1, 4, true);
//        $hot_search = array();
//        foreach ($hot_search_json as $k => $v) {
//            $hot_search[] = $k;
//        }
        $books = cache('appsearchresult:' . $keyword);
        if (!$books) {
            $map[] = ['delete_time','=',0];
            $map[] = ['book_name','like','%'.$keyword.'%'];
            $books = Book::where($map)->limit($num)->select();
            foreach ($books as &$book) {
                if (substr($book['cover_url'], 0, 4) === "http") {

                } else {
                    $book['cover_url'] = $this->img_domain . $book['cover_url'];
                }
                if (substr($book['banner_url'], 0, 4) === "http") {

                } else {
                    $book['banner_url'] = $this->img_domain . $book['banner_url'];
                }
            }
            cache('appsearchresult:' . $keyword, $books, null, 'redis');
        }

        $result = [
            'success' => 1,
            'books' => $books,
            'count' => count($books),
            //'hot_search' => $hot_search
        ];
        return json($result);
    }

    public function detail()
    {
        $id = input('id');
        $book = cache('appBook:' . $id);
        if ($book == false) {
            try {
                $book = Book::with('area')->findOrFail($id);
                if (substr($book['cover_url'], 0, 4) === "http") {

                } else {
                    $book['cover_url'] = $this->img_domain . $book['cover_url'];
                }
                if (substr($book['banner_url'], 0, 4) === "http") {

                } else {
                    $book['banner_url'] = $this->img_domain . $book['banner_url'];
                }
                $redis = RedisHelper::GetInstance();
                $day = date("Y-m-d", time());
                //以当前日期为键，增加点击数
                $redis->zIncrBy('click:' . $day, 1, $id);
            } catch (DataNotFoundException $e) {
                return json(['success' => 0, 'msg' => '该漫画不存在']);
            } catch (ModelNotFoundException $e) {
            } catch (DbException $e) {
            }
            cache('appBook:' . $id, $book, null, 'redis');
        }

        $redis = RedisHelper::GetInstance();
        $day = date("Y-m-d", time());
        //以当前日期为键，增加点击数
        $redis->zIncrBy('click:' . $day, 1, $book->id);

        $start = cache('book_start:' . $id);
        if ($start == false) {
            $db = Db::query('SELECT id FROM ' . $this->prefix . 'chapter WHERE book_id = ' . $id . ' ORDER BY id LIMIT 1');
            $start = $db ? $db[0]['id'] : -1;
            cache('book_start:' . $id, $start, null, 'redis');
        }

        $book['start'] = $start;
        $result = [
            'success' => 1,
            'book' => $book
        ];
        return json($result);
    }

    public function getComments()
    {
        $book_id = input('book_id');
        $comments = cache('comments:' . $book_id);
        if (!$comments) {
            $comments = Comments::with('user')->where('book_id', '=', $book_id)
                ->order('create_time', 'desc')->limit(0, 10)->select();
            cache('comments:' . $book_id, $comments);
        }
        $result = [
            'success' => 1,
            'comments' => $comments
        ];
        return json($result);
    }
}