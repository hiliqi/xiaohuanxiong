<?php


namespace app\model;


use think\Model;

class Chapter extends Model
{
    public function book()
    {
        return $this->belongsTo('book');
    }

    public function photos()
    {
        return $this->hasMany('photo');
    }

    public function setChapterNameAttr($value)
    {
        return trim($value);
    }

    function getChapters($order, $where, $num)
    {
        if ($num == 0) {
            $chapters = Chapter::where($where)
                ->order($order)->select();
        } else {
            if (strlen($num) >= 3) {
                $arr = explode(',',$num);
                $chapters = Chapter::where($where)
                    ->limit($arr[0],$arr[1])->order($order)->select();
            } else {
                $chapters = Chapter::where($where)->limit($num)->order($order)->select();
            }

        }
        return $chapters;
    }

    public function getPagedChapters($order, $where, $pagesize)
    {
        $data = Chapter::where($where)->order($order)
            ->paginate([
                'list_rows' => $pagesize,
                'query' => request()->param(),
            ]);
        $arr = $data->toArray();
        $paged = array();
        $paged['chapters'] = $arr['data'];
        $paged['page'] = [
            'total' => $arr['total'],
            'per_page' => $arr['per_page'],
            'current_page' => $arr['current_page'],
            'last_page' => $arr['last_page'],
            'query' => request()->param()
        ];
        return $paged;
    }

    public function getLastChapter($book_id)
    {
        return Chapter::where('book_id', '=', $book_id)->order('id', 'desc')->limit(1)->find();
    }
}