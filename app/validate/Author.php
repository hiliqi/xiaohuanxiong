<?php


namespace app\validate;


use think\Validate;

class Author extends Validate
{
    protected $rule = [
        'username' => 'require|alphaNum|max:32|min:6',
        'password' => 'require|max:32|min:6',
        'email' => 'email',
    ];


    protected $message = [
        'username' => '名称必须是6-32个字母或数字',
        'password' => '密码必须是6-32个字符',
        'email' => '邮箱格式错误'
    ];
}