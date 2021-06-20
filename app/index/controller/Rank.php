<?php


namespace app\index\controller;

use think\facade\Db;
use think\facade\View;

class Rank extends Base
{
    public function index()
    {
        return view($this->tpl);
    }
}