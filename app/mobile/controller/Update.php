<?php


namespace app\mobile\controller;


use app\model\Book;
use app\model\Chapter;
use app\service\BookService;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\facade\Db;
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
        View::assign([
            'header_title' => '漫画更新周期表',
        ]);
        return view($this->tpl);
    }

    public function getBooks() {
        $date = input('date');
        if (empty($date)) {
            $time = 0;
        } else {
            $time = strtotime($date);
        }
        $where[] = ['last_time' , '>=', $time];
        $page = input('page');
        try {
            $books = Book::where($where)->order('update_time', 'desc')
                ->limit($page, 15)->selectOrFail();
            foreach ($books as &$book) {
                if ($this->end_point == 'id') {
                    $book['param'] = $book['id'];
                } else {
                    $book['param'] = $book['unique_id'];
                }
            }
            return json(['err' => 0, 'books' => $books]);
        } catch (DataNotFoundException $e) {
        } catch (ModelNotFoundException $e) {
            return json(['err' => 1]);
        }
    }
}