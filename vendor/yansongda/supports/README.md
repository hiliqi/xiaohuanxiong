<h1 align="center">Supports</h1>

[![Linter Status](https://github.com/yansongda/supports/workflows/Linter/badge.svg)](https://github.com/yansongda/supports/actions) 
[![Tester Status](https://github.com/yansongda/supports/workflows/Tester/badge.svg)](https://github.com/yansongda/supports/actions) 
[![Latest Stable Version](https://poser.pugx.org/yansongda/supports/v/stable)](https://packagist.org/packages/yansongda/supports)
[![Total Downloads](https://poser.pugx.org/yansongda/supports/downloads)](https://packagist.org/packages/yansongda/supports)
[![Latest Unstable Version](https://poser.pugx.org/yansongda/supports/v/unstable)](https://packagist.org/packages/yansongda/supports)
[![License](https://poser.pugx.org/yansongda/supports/license)](https://packagist.org/packages/yansongda/supports)


handle with array/config/log/guzzle etc.

## About log

### Register

#### Method 1

A application logger can extends `Yansongda\Supports\Log` and modify `createLogger` method, the method must return instance of `Monolog\Logger`.

```PHP
use Yansongda\Supports\Log;
use Monolog\Logger;

class APPLICATIONLOG extends Log
{
    /**
     * Make a default log instance.
     *
     * @author yansongda <me@yansongda.cn>
     *
     * @return Logger
     */
    public static function createLogger()
    {
        $handler = new StreamHandler('./log.log');
        $handler->setFormatter(new LineFormatter("%datetime% > %level_name% > %message% %context% %extra%\n\n"));

        $logger = new Logger('yansongda.private_number');
        $logger->pushHandler($handler);

        return $logger;
    }
}
```

#### Method 2

Or, just init the log service with:

```PHP
use Yansongda\Supports\Log;

protected function registerLog()
{
    $logger = Log::createLogger($file, $identify, $level);

    Log::setLogger($logger);
}
```

### Usage

After registerLog, you can use Log service:

```PHP
use Yansongda\Supports\Log;

Log::debug('test', ['test log']);
```
