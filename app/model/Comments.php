<?php


namespace app\model;


use think\Model;

class Comments extends Model
{
    public function book(){
        return $this->belongsTo('Book');
    }

    public function user(){
        return $this->belongsTo('User');
    }
}