<?php


namespace app\model;


use think\Model;

class Banner extends Model
{
    public function book()
    {
        return $this->hasOne('book', 'id', 'book_id');
    }

    public function setTitleAttr($value)
    {
        return trim($value);
    }
}