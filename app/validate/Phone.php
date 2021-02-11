<?php


namespace app\validate;


use think\Validate;

class Phone extends Validate
{
    protected $rule = [
        'mobile' => 'mobile'
    ];


    protected $message = [
        'mobile' => '必须是正确的手机格式'
    ];
}