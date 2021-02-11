<?php


namespace app\model;


use think\Model;
use think\model\concern\SoftDelete;
class User extends Model
{
    use SoftDelete;
    protected $deleteTime = 'delete_time';
    protected $defaultSoftDelete = 0;

    public function setUsernameAttr($value){
        return trim($value);
    }

    public function setPasswordAttr($value){
        return md5(strtolower(trim($value)).config('site.salt'));
    }

    public function books(){
        return $this->belongsToMany('Book','\\app\\model\\UserBook');
    }
}