<?php


namespace app\model;


use think\Model;

class Clicks extends Model
{
    protected $autoWriteTimestamp = false;

    public function book()
    {
        return $this->belongsTo('Book');
    }
}