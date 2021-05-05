<?php


namespace app\model;


use think\Model;

class Tags extends Model
{
    public function setTagNameAttr($value)
    {
        return trim($value);
    }

    function getCates($order, $where, $num)
    {
        if ($num == 0) {
            $cates = Tags::order($order)->where($where)->select();
        } else {
            $cates = Tags::order($order)->where($where)->limit($num)->select();
        }
        return $cates;
    }
}