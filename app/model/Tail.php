<?php


namespace app\model;


use think\Model;

class Tail extends Model
{
    public function book()
    {
        return $this->hasOne(Book::class, 'id', 'book_id');
    }
}