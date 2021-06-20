<?php


namespace app\model;


use think\Model;

class Topic extends Model
{
    public function setTopicNameAttr($value){
        return trim($value);
    }
}