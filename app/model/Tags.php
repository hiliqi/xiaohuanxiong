<?php


namespace app\model;


use think\Model;

class Tags extends Model
{
    public function setTagNameAttr($value){
        return trim($value);
    }
}