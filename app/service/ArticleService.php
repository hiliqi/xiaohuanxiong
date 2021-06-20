<?php


namespace app\service;


use app\model\Article;
use think\facade\Db;

class ArticleService
{
    public function getPaged($num, $end_point, $order = 'id', $where = '1=1'){
        $data = Article::order('id', 'desc')
            ->paginate([
                'list_rows' => $num,
                'query' => request()->param(),
            ]);
        foreach ($data as &$article) {
            if ($end_point == 'id') {
                $article['param'] = $article['id'];
            } else {
                $article['param'] = $article['unique_id'];
            }
        }
        $articles = $data->toArray();
        return  [
            'articles' => $articles['data'],
            'page' => [
                'total' => $articles['total'],
                'per_page' => $articles['per_page'],
                'current_page' => $articles['current_page'],
                'last_page' => $articles['last_page'],
                'query' => request()->param()
            ]
        ];
    }

    public function getPagedAdmin($where = '1=1') {
        $data = Article::where($where);
        $page = config('page.back_end_page');
        $articles = $data->order('id','desc')
            ->paginate(
                [
                    'list_rows'=> $page,
                    'query' => request()->param(),
                    'var_page' => 'page',
                ]);
        return [
            'articles' => $articles,
            'count' => $data->count()
        ];
    }

    public function search($keyword, $num)
    {
//        return Db::query(
//            "select * from " . $prefix . "article where match(title)
//            against ('" . $keyword . "' IN NATURAL LANGUAGE MODE) LIMIT " . $num
//        );
        $map[] = ['title','like','%'.$keyword.'%'];
        return Article::where($map)->limit($num)->select();
    }
}