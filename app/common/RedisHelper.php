<?php


namespace app\common;

use think\cache\driver\Redis;
use think\facade\Config;

class RedisHelper extends Redis
{
    protected static $instance;
    
    public function __construct()
    {
        $options = Config::get('cache.stores.redis');
        parent::__construct($options);
    }

    private function __clone()
    {
    }


    public static function GetInstance()
    {
        if (!isset(self::$instance)) {
            self::$instance = new self();
        }
        return self::$instance;
    }

}