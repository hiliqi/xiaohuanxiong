<?php


namespace app\model;


use think\Model;

class UserBuy extends Model
{
    public function setSummaryAttr($value){
        return trim($value);
    }

    public function book(){
        return $this->belongsTo('book');
    }

    public function getBuys($order, $where, $pagesize)
    {
        $img_domain = config('site.img_domain');
        $end_point = config('seo.book_end_point');
        $data = UserBuy::where($where)->order($order)->paginate($pagesize, false);
        foreach ($data as &$buy) {
            $book = Book::findOrFail($buy['book_id']);
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
            $buy['book'] = $book;
            $chapter = Chapter::findOrFail($buy['chapter_id']);
            $buy['chapter'] = $chapter;
        }
        $arr = $data->toArray();
        $paged = array();
        $paged['buys'] = $arr['data'];
        $paged['page'] = [
            'total' => $arr['total'],
            'per_page' => $arr['per_page'],
            'current_page' => $arr['current_page'],
            'last_page' => $arr['last_page'],
            'query' => request()->param()
        ];
        return $paged;
    }
}