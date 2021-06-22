<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2019 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// [ 应用入口文件 ]
namespace think;

require __DIR__ . '/../vendor/autoload.php';

//定义分隔符
define('DS', DIRECTORY_SEPARATOR);

// 执行HTTP应用并响应
$http = (new App())->http;

// 检测程序安装
if(!is_file(__DIR__ . '/install.lock')){
    $response = $http->name('install')->run();
}else{
    exit('你已经成功安装,如需重装请删除install.lock');
}

$response->send();

$http->end($response);
