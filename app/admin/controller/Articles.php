<?php


namespace app\admin\controller;


use app\model\Article;
use Overtrue\Pinyin\Pinyin;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\exception\ValidateException;
use think\facade\App;
use think\facade\View;

class Articles extends BaseAdmin
{
    public function index()
    {
        return view();
    }

    public function list()
    {
        $page = intval(input('page'));
        $limit = intval(input('limit'));
        $data = Article::order('id', 'desc');
        $count = $data->count();
        $articles = $data->order('id', 'desc')
            ->limit(($page - 1) * $limit, $limit)->select();
        return json([
            'code' => 0,
            'msg' => '',
            'count' => $count,
            'data' => $articles
        ]);
    }

    public function create()
    {
        if (request()->isPost()) {
            $title = trim(input('title'));
            $article = new Article();
            $article['title'] = $title;
            $article['unique_id'] = $this->convert($title);
            $article['desc'] = input('desc');
            $article['book_id'] = input('book_id');
            $content = input('content');
            $dir = App::getRootPath() . 'public/static/upload/article/';
            $savename = md5($title) . '.txt';
            file_put_contents($dir . $savename, $content);
            $article['content_url'] = '/static/upload/article/' . $savename;

            $cover = request()->file('cover');
            try {
                validate(['image'=>'filesize:10240|fileExt:jpg,png,gif'])
                    ->check((array)$cover);
                $cover_name =str_replace ( '\\', '/',
                    \think\facade\Filesystem::disk('public')->putFile($dir, $cover));
                if (!is_null($cover_name)) {
                    $article['cover_url'] = '/static/upload/'.$cover_name;
                }
            } catch (ValidateException $e) {
                abort(404, $e->getMessage());
            }
            $article->save();
            $this->success('添加成功', 'index', 1);
        }
        return view();
    }

    public function edit()
    {
        try {
            $article = Article::findOrFail(input('id'));
            if (request()->isPost()) {
                $title = trim(input('title'));
                $article = new Article();
                $article['title'] = $title;
                $article['unique_id'] = $this->convert($title);
                $article['desc'] = input('desc');
                $article['book_id'] = input('book_id');
                $content = input('content');
                $dir = App::getRootPath() . 'public/static/upload/article/';
                $savename = md5($title) . '.txt';
                file_put_contents($dir . $savename, $content);
                $article['content_url'] = '/static/upload/article/' . $savename;

                if (request()->file() != null) {
                    $cover = request()->file('cover');
                    try {
                        validate(['image'=>'filesize:10240|fileExt:jpg,png,gif'])
                            ->check((array)$cover);
                        $cover_name =str_replace ( '\\', '/',
                            \think\facade\Filesystem::disk('public')->putFile($dir, $cover));
                        if (!is_null($cover_name)) {
                            $article['cover_url'] = '/static/upload/'.$cover_name;
                        }
                    } catch (ValidateException $e) {
                        abort(404, $e->getMessage());
                    }
                }

                $article->save();
                $this->success('编辑成功', 'index', 1);
            }

            $content = file_get_contents(App::getRootPath() . 'public/' . $article->content_url);
            View::assign([
                'content' => $content,
                'article' => $article
            ]);
        } catch (DataNotFoundException $e) {
            abort(404, $e->getMessage());
        } catch (ModelNotFoundException $e) {
            abort(404, $e->getMessage());
        }


        return view();
    }


    public function search()
    {
        $title = input('title');
        $where = [
            ['title', 'like', '%' . $title . '%']
        ];
        $page = intval(input('page'));
        $limit = intval(input('limit'));
        $data = Article::where($where);
        $count = $data->count();
        $articles = $data->limit(($page - 1) * $limit, $limit)->order('id', 'desc')->select();

        return json([
            'code' => 0,
            'msg' => '',
            'count' => $count,
            'data' => $articles
        ]);
    }

    public function delete()
    {
        $id = input('id');
        $result = Article::destroy($id);
        if ($result) {
            return json(['err' => '0', 'msg' => '删除成功']);
        } else {
            return json(['err' => '1', 'msg' => '删除失败']);
        }
    }

    public function deleteAll($ids)
    {
        $ids = input('ids');
        $result = Article::destroy($ids);
        if ($result) {
            return json(['err' => '0', 'msg' => '删除成功']);
        } else {
            return json(['err' => '1', 'msg' => '删除失败']);
        }
    }

    protected function convert($str)
    {
        $pinyin = new Pinyin();
        $str = $pinyin->abbr($str);
        return $str;
    }
}