<?php


namespace app\model;


use think\Model;

class UserFinance extends Model
{
    public function setSummaryAttr($value){
        return trim($value);
    }

    public function setSignDay($value){
        return date('Y-m-d');
    }
}