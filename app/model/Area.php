<?php


namespace app\model;


use think\Model;

class Area extends Model
{
    public function setTagNameAttr($value){
        return trim($value);
    }
}