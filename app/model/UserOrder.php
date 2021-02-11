<?php


namespace app\model;


use think\Model;

class UserOrder extends Model
{
    public function setSummaryAttr($value){
        return trim($value);
    }
}