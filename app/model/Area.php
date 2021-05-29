<?php


namespace app\model;


use think\Model;

class Area extends Model
{
    public function setTagNameAttr($value)
    {
        return trim($value);
    }

    function getAreas($order, $where, $num)
    {
        if ($num == 0) {
            $areas = Area::where($where)->order($order)->select();
        } else {
            if (strlen($num) >= 3) {
                $arr = explode(',',$num);
                $areas = Area::where($where)
                    ->limit($arr[0],$arr[1])->order($order)->select();
            } else {
                $areas = Area::where($where)->order($order)->limit($num)->select();
            }
        }
        return $areas;
    }
}