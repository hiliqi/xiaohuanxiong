<?php


namespace app\model;


use think\Model;

class FriendshipLink extends Model
{
    public function setNameAttr($value){
        return trim($value);
    }

    public function setUrlAttr($value){
        return trim($value);
    }
}