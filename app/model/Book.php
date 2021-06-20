<?php


namespace app\model;

use think\model\concern\SoftDelete;
use think\Model;

class Book extends Model
{
    use SoftDelete;

    protected $deleteTime = 'delete_time';
    protected $defaultSoftDelete = 0;

    public static function onBeforeUpdate($book)
    {
        cache('book:' . $book->id, null);
        cache('tags:book:' . $book->id, null);
    }

    public static function onAfterInsert($user)
    {
        cache('newestHomepage', null);
        cache('endsHomepage', null);
    }

    public function author()
    {
        return $this->belongsTo('Author');
    }

    public function area()
    {
        return $this->belongsTo('Area');
    }

    public function chapters()
    {
        return $this->hasMany('chapter');
    }

    public function users()
    {
        return $this->belongsToMany('User');
    }

    public function setBookNameAttr($value)
    {
        return trim($value);
    }

    public function setTagsAttr($value)
    {
        return trim($value);
    }

    public function setSummaryAttr($value)
    {
        return trim($value);
    }

    public function setSrcAttr($value)
    {
        return trim($value);
    }

    public function getBooks($order, $where, $num)
    {
        $img_domain = config('site.img_domain');
        $end_point = config('seo.book_end_point');
        if ($num == 0) {
            $books = Book::where($where)
                ->order($order)->select();

        } else {
            if (strlen($num) >= 3) {
               $arr = explode(',',$num);
                $books = Book::where($where)
                    ->limit($arr[0],$arr[1])->order($order)->select();
            } else {
                $books = Book::where($where)
                    ->limit($num)->order($order)->select();
            }
        }

        foreach ($books as &$book) {
            $book['taglist'] = explode('|', $book->tags);
            if ($end_point == 'id') {
                $book['param'] = $book['id'];
            } else {
                $book['param'] = $book['unique_id'];
            }
            if (substr($book['cover_url'], 0, 4) === "http") {

            } else {
                $book['cover_url'] = $img_domain . $book['cover_url'];
            }
            if (substr($book['banner_url'], 0, 4) === "http") {

            } else {
                $book['banner_url'] = $img_domain . $book['banner_url'];
            }
        }
        return $books;
    }

    public function getPagedBooks($order, $where, $pagesize)
    {
        $img_domain = config('site.img_domain');
        $end_point = config('seo.book_end_point');
        $where = str_replace("tags like '%全部%'", 'true', $where);
        $where = str_replace("area_id='-1'", 'true', $where);
        $where = str_replace("end='-1'", 'true', $where);
        $data = Book::where($where)->order($order)
            ->paginate([
                'list_rows' => $pagesize,
                'query' => request()->param(),
            ]);
        foreach ($data as &$book) {
            if ($end_point == 'id') {
                $book['param'] = $book['id'];
            } else {
                $book['param'] = $book['unique_id'];
            }
            if (substr($book['cover_url'], 0, 4) === "http") {

            } else {
                $book['cover_url'] = $img_domain . $book['cover_url'];
            }
            if (substr($book['banner_url'], 0, 4) === "http") {

            } else {
                $book['banner_url'] = $img_domain . $book['banner_url'];
            }
        }
        $arr = $data->toArray();
        $pagedBooks = array();
        $pagedBooks['books'] = $arr['data'];
        $pagedBooks['page'] = [
            'total' => $arr['total'],
            'per_page' => $arr['per_page'],
            'current_page' => $arr['current_page'],
            'last_page' => $arr['last_page'],
            'query' => request()->param()
        ];
        return $pagedBooks;
    }

    public function getMostChargedBook($order, $where, $num)
    {
        $img_domain = config('site.img_domain');
        $end_point = config('seo.book_end_point');
        $data = UserBuy::with('book.author')->field('book_id,sum(money) as sum')
            ->limit($num)->group('book_id')->select()->toArray();
        array_multisort(array_column($data, 'sum'), SORT_DESC, $data);
        $books = array();
        foreach ($data as &$item) {
            if (!empty($item['book'])) {
                $book = $item['book'];
                $book['taglist'] = explode('|', $item['book']['tags']);
                array_push($books, $book);
            }
        }
        return $books;
    }
}