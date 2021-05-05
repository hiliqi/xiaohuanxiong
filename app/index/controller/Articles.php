<?php


namespace app\index\controller;

use app\model\Article;
use app\model\Book;
use think\db\exception\ModelNotFoundException;
use think\facade\App;
use think\facade\Db;
use think\facade\View;

class Articles extends Base
{
    public function index()
    {
        $id = input('id');
        $article = cache('article:' . $id);
        if ($article == false) {
            try {
                if ($this->end_point == 'id') {
                    $article = Article::with('book')->findOrFail($id);
                    $article['book']['param'] = $article['book']['id'];
                } else {
                    $article = Article::with('book')->where('unique_id', '=', $id)->findOrFail();
                    $article['book']['param'] = $article['book']['unique_id'];
                }
            } catch (ModelNotFoundException $e) {
                abort(404, $e->getMessage());
            }
        }
        $content = file_get_contents(App::getRootPath() . 'public/' . $article->content_url);

        View::assign([
            'article' => $article,
            'content' => $content,
        ]);
        return view($this->tpl);
    }

    public function list()
    {
        return view($this->tpl);
    }
}