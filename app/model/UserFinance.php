<?php


namespace app\model;


use think\Model;

class UserFinance extends Model
{
    public function setSummaryAttr($value){
        return trim($value);
    }
}