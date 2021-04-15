<?php


namespace app\api\controller;


use app\BaseController;

class Didi extends BaseController
{
    public function verify()
    {
        $header = request()->header();
        $didi_token = $header['DIDI-TOKEN'];
        $didi_time =  $header['DIDI-TOKEN-TIME'];
    }
}