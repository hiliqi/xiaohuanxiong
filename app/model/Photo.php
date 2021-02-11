<?php


namespace app\model;


use think\Model;

class Photo extends Model
{
    public function chapter(){
        return $this->belongsTo('chapter');
    }
}