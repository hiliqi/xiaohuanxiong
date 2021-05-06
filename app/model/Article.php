<?php


namespace app\model;


use think\Model;

class Article extends Model
{
    public function book() {
        return $this->belongsTo('Book', 'book_id', 'id');
    }

    public function getArticles($order, $where, $num){
        if ($num == 0) {
            $articles = Article::where($where)
                ->order($order)->select();
        } else {
            if (strlen($num) == 3) {
                $arr = explode(',',$num);
                $articles = Article::where($where)
                    ->limit($arr[0],$arr[1])->order($order)->select();
            } else {
                $articles = Article::where($where)->limit($num)->order($order)->select();
            }

        }
        return $articles;
    }

    public function getPagedArticles($order, $where, $pagesize){
        $data = Article::where($where)->order($order)
            ->paginate([
                'list_rows' => $pagesize,
                'query' => request()->param(),
            ]);
        $arr = $data->toArray();
        $paged = array();
        $paged['articles'] = $arr['data'];
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