<?php


namespace app\mip\controller;


use app\model\Chapter;
use app\model\Tags;
use app\service\BookService;
use think\facade\View;

class Update extends Base
{
    protected $bookService;

    public function initialize()
    {
        parent::initialize();
        $this->bookService = app('bookService');
    }

    public function index()
    {
        $tag = input('tag');
        $where = array();
        if (!is_null($tag)) {
            $where[] = ['tags','like','%'.$tag.'%'];
        }
        $data = $this->bookService->getPagedBooks(35, $this->end_point, 'last_time', $where);
        unset($data['page']['query']['page']);
        $param = '';
        foreach ($data['page']['query'] as $k => $v) {
            $param .= '&' . $k . '=' . $v;
        }
        $tags = cache('tags');
        if (!$tags) {
            $tags = Tags::select();
            cache('tags', $tags, null, 'redis');
        }
        View::assign([
            'books' => $data['books'],
            'page' => $data['page'],
            'param' => $param,
            'c_url' => config('site.mobile_domain').'/update',
            'tags' => $tags,
        ]);
        return view($this->tpl);
    }
}