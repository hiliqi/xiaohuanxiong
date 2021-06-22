<?php
declare (strict_types = 1);

namespace app\install\controller;

use think\App;
use think\exception\ValidateException;
use think\Validate;
use think\facade\View;
use think\exception\HttpResponseException;
use think\Response;

/**
 * 控制器基础类
 */
abstract class Base
{
    /**
     * Request实例
     * @var \think\Request
     */
    protected $request;

    /**
     * 应用实例
     * @var \think\App
     */
    protected $app;

    /**
     * 是否批量验证
     * @var bool
     */
    protected $batchValidate = false;

    /**
     * 控制器中间件
     * @var array
     */
    protected $middleware = [];

    /**
     * 构造方法
     * @access public
     * @param  App  $app  应用对象
     */
    public function __construct(App $app)
    {
        $this->app     = $app;
        $this->request = $this->app->request;
        // 控制器初始化
        $this->initialize();
    }

    // 初始化
    protected function initialize()
    {
    }

     //页面分配变量
     protected function assign($key,$value)
     {
         return View::assign($key,$value);
     }
 
     //页面渲染 
     protected function fetch($template = '',$data = [])
     {
         return View::fetch($template,$data);
     }
    
    /**
     * 返回API
     * @access protected
     * @param  string  $msg    提示信息
     * @param  integer $code   状态码
     * @param  array   $data   对应数据
     * @param  array   $extend 扩展字段
     * @param  array   $header HTTP头信息
     * @return void
     * @throws HttpResponseException
     */
    protected  function jsonApi($msg = '', $code = 200, $data = [], $extend = [], $header = [])
    {
        $return = [
            'msg'  => $msg,
            'code' => $code,
        ];
        if (!empty($data)) {
            $return['data'] = $data;
        }
        if (!empty($extend)) {
            foreach ($extend as $k => $v) {
                $return[$k] = $v;
            }
        }
        $response = Response::create($return, 'json')->header($header);
        throw new HttpResponseException($response);
    }

    /**
     * 验证数据
     * @access protected
     * @param  array        $data     数据
     * @param  string|array $validate 验证器名或者验证规则数组
     * @param  array        $message  提示信息
     * @param  bool         $batch    是否批量验证
     * @return array|string|true
     * @throws ValidateException
     */
    protected function validate(array $data, $validate, array $message = [], bool $batch = false)
    {
        if (is_array($validate)) {
            $v = new Validate();
            $v->rule($validate);
        } else {
            if (strpos($validate, '.')) {
                // 支持场景
                [$validate, $scene] = explode('.', $validate);
            }
            $class = false !== strpos($validate, '\\') ? $validate : $this->app->parseClass('validate', $validate);
            $v     = new $class();
            if (!empty($scene)) {
                $v->scene($scene);
            }
        }
        $v->message($message);

        // 是否批量验证
        if ($batch || $this->batchValidate) {
            $v->batch(true);
        }
        try {
           $v->failException(true)->check($data);
        } catch (ValidateException $e) {
            // 验证失败 输出错误信息
           return $e->getError();
        }
        return false;
    }

}
