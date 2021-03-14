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
    'authorService' => \app\service\AuthorService::class,
    'bookService' => \app\service\BookService::class,
    'chapterService' => \app\service\ChapterService::class,
    'financeService' => \app\service\FinanceService::class,
    'photoService' => \app\service\PhotoService::class,
    'promotionService' => \app\service\PromotionService::class,
    'tagsService' => \app\service\TagsService::class,
    'userService' => \app\service\UserService::class,
    'articleService' => \app\service\ArticleService::class,
    'topicService' => \app\service\TopicService::class,
    'payService' => \app\service\PayService::class,
    'tailService' => \app\service\TailService::class
];
