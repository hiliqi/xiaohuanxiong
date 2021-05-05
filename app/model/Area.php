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
            $areas = Area::order($order)->where($where)->select();
        } else {
            $areas = Area::order($order)->where($where)->limit($num)->select();
        }
        return $areas;
    }
}