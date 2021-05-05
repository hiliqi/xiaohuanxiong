<?php
use app\ExceptionHandle;
use app\Request;
use think\cache\driver\Redis;

// 容器Provider定义文件
return [
    'think\Request'          => Request::class,
    'think\exception\Handle' => ExceptionHandle::class,
    'think\Paginator' => 'app\admin\common\AdminPage',
    'redis' => Redis::class,
    'promotionService' => \app\service\PromotionService::class,
    'payService' => \app\service\PayService::class,
    'bookModel' => \app\model\Book::class,
    'bannerModel' => \app\model\Banner::class,
    'tagModel' => \app\model\Tags::class,
    'areaModel' => \app\model\Area::class,
    'chapterModel' => \app\model\Chapter::class,
    'commentModel' => \app\model\Comments::class,
    'articleModel' => \app\model\Article::class,
    'photoModel' => \app\model\Photo::class,
    'userModel' => \app\model\User::class,
    'financeModel' => \app\model\UserFinance::class
];
