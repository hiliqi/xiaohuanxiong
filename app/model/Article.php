<?php


namespace app\model;


use think\Model;

class Article extends Model
{
    public function book() {
        return $this->belongsTo('Book', 'book_id', 'id');
    }
}