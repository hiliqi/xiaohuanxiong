<?php


namespace app\model;


use think\Model;

class Photo extends Model
{
    public function chapter(){
        return $this->belongsTo('chapter');
    }

    public function getPhotos($order, $where, $num)
    {
        $img_domain = config('site.img_domain');
        if ($num == 0) {
            $photos = Photo::where($where)->order($order)->select();
        } else {
            if (strlen($num) >= 3) {
                $arr = explode(',',$num);
                $photos = Photo::where($where)
                    ->limit($arr[0],$arr[1])->order($order)->select();
            } else {
                $photos = Photo::where($where)->limit($num)->order($order)->select();
            }
        }

        foreach ($photos as &$photo)
        {
            if (substr($photo['img_url'], 0, 4) === "http") {

            } else {
                $photo['img_url'] = $img_domain . $photo['img_url'];
            }
        }
        return $photos;
    }

    public function getPagedPhotos($order, $where, $pagesize)
    {
        $img_domain = config('site.img_domain');
        $data = Photo::where($where)->order($order)
            ->paginate([
                'list_rows' => $pagesize,
                'query' => request()->param(),
            ]);
        foreach ($data as &$pic)
        {
            if (substr($pic['img_url'], 0, 4) === "http") {

            } else {
                $pic['img_url'] = $img_domain . $pic['img_url'];
            }
        }
        $arr = $data->toArray();
        $paged = array();
        $paged['photos'] = $arr['data'];
        $paged['page'] = [
            'total' => $arr['total'],
            'per_page' => $arr['per_page'],
            'current_page' => $arr['current_page'],
            'last_page' => $arr['last_page'],
            'query' => request()->param()
        ];
        return $paged;
    }

    public function getLastPhoto($chapter_id)
    {
        return Photo::where('chapter_id', '=', $chapter_id)->order('id', 'desc')->limit(1)->find();
    }
}