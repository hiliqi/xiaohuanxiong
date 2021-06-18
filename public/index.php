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
require __DIR__ . "/routeconf.php";
//定义分隔符
define('DS', DIRECTORY_SEPARATOR);

// 执行HTTP应用并响应
$http = (new App())->http;

// 检测程序安装
if(!is_file(__DIR__ . '/install.lock')){
    $response = $http->name('install')->run();
}

// 域名绑定应用使用统一入口
//$response = $http->run();

// 应用入口
$response = $http->name('index')->run();

$response->send();

$http->end($response);
