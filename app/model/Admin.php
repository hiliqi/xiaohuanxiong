<?php


namespace app\model;


use think\Model;

class Admin extends Model
{
    public function setUsernameAttr($value){
        return trim($value);
    }

    public function setPasswordAttr($value){
        return trim($value);
    }
}