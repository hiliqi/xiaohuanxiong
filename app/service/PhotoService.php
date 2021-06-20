<?php


namespace app\service;

use app\model\Photo;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;

class PhotoService
{
    public function getAdminPaged($chapter_id, $num)
    {
        $data = Photo::where('chapter_id', '=', $chapter_id);
        $photos = $data->order('pic_order', 'desc')
            ->paginate(
                [
                    'list_rows' => $num,
                    'query' => request()->param(),
                    'var_page' => 'page',
                ]);
        return ['photos' => $photos, 'count' => $data->count()];
    }

    public function getLastPhoto($chapter_id)
    {
        return Photo::where('chapter_id', '=', $chapter_id)->order('id', 'desc')->limit(1)->find();
    }

    public function getPaged($chapter_id, $page, $num){
        $data = cache('pagedPhoto:'.$chapter_id);
        if (!$data) {
            $data = Photo::where('chapter_id', '=', $chapter_id)->order('pic_order','asc')->select()->toArray();
            cache('pagedPhoto:'.$chapter_id, $data, null, 'redis');
        }
        if (count($data) <= 0) { //如果没有图片
            return [
                'photos' => [],
                'page' => [
                    'total' => 0,
                    'last_page' => 0,
                    'current_page' => 1
                ]
            ];
        } else {
            if ($num <= 0) { //如果分页数设置小于等于0，则默认不分页，也就是全部图片分一页
                $num = count($data);
            }
            $start = ($page-1) * $num; #计算每次分页的开始位置
            $total = count($data);
            $last_page = (int)ceil($total / $num); #计算总页面数
            $pagedata = array_slice($data, $start, $num);
            return [
                'photos' => $pagedata,
                'page' => [
                    'total' => $total,
                    'last_page' => $last_page,
                    'current_page' => $page
                ]
            ];
        }


    }
}