<?php


namespace app\validate;


use think\Validate;

class User extends Validate
{
    protected $rule = [
        'username' => 'require|max:32|min:6',
        'password' => 'require|max:32|min:6'
    ];


    protected $message = [
        'username' => '名称必须是6-32个字符',
        'password' => '密码必须是6-32个字符'
    ];
}