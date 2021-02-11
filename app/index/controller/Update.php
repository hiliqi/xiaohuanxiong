<?php


namespace app\index\controller;

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
        $date = input('date');
        $day = input('day');
        if (empty($date)) {
            $time = 0;
        } else {
            $time = strtotime($date);
        }
        $where[] = ['last_time' , '>=', $time];
        $data = $this->bookService->getPagedBooks(35, $this->end_point, 'last_time', $where);
//        foreach ($data['books'] as &$book) {
//            $query = Db::query('SELECT * FROM '.$this->prefix.
//                'chapter WHERE id = (SELECT MAX(id) FROM (SELECT id FROM xwx_chapter WHERE book_id=?) as a)',
//                [$book['id']]);
//            if (count($query) > 0) {
//                $book['last_chapter'] = $query[0];
//            }
//        }
        unset($data['page']['query']['page']);
        $param = '';
        foreach ($data['page']['query'] as $k => $v) {
            $param .= '&' . $k . '=' . $v;
        }

        View::assign([
            'books' => $data['books'],
            'page' => $data['page'],
            'param' => $param,
            'day' => $day == null ? -1 : $day,
            'header_title' => '更新',
        ]);
        return view($this->tpl);
    }


}