<?php


namespace app\model;


use think\Model;

class UserFavor extends Model
{
    public function getFavors($order, $where, $pagesize)
    {
        $img_domain = config('site.img_domain');
        $end_point = config('seo.book_end_point');
        $data = UserFavor::where($where)->order($order)->paginate($pagesize, false);
        foreach ($data as &$favor) {
            $book = Book::findOrFail($favor['book_id']);
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
            $favor['book'] = $book;
        }
        $arr = $data->toArray();
        $paged = array();
        $paged['favors'] = $arr['data'];
        $paged['page'] = [
            'total' => $arr['total'],
            'per_page' => $arr['per_page'],
            'current_page' => $arr['current_page'],
            'last_page' => $arr['last_page'],
            'query' => request()->param()
        ];
        return $paged;
    }

    public function delFavors($uid, $ids)
    {
        $where[] = ['user_id', '=', $uid];
        $where[] = ['book_id', 'in', $ids];
        $favors = UserFavor::where($where)->selectOrFail();
        foreach ($favors as $favor) {
            $favor->delete();
        }
    }
}