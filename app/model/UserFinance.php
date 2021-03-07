<?php


namespace app\model;


use think\Model;

class UserFinance extends Model
{
    protected $autoWriteTimestamp = 'datetime';

    public function setSummaryAttr($value){
        return trim($value);
    }
}