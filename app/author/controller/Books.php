<?php


namespace app\author\controller;

use app\model\Area;
use app\model\Book;
use app\model\Chapter;
use app\model\Photo;
use Overtrue\Pinyin\Pinyin;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\exception\HttpException;
use think\facade\View;

class Books extends Base
{
    public function list()
    {
        return view();
    }

    public function getlist() {
        $page = intval(input('page'));
        $limit = intval(input('limit'));
        $author_id = session('xwx_author_id');
        $map[] = ['author_id', '=', $author_id];
        $map[] = ['delete_time', '=', 0];
        $data = Book::where($map)->order('id', 'desc');
        $count = $data->count();
        $books = $data->limit(($page - 1) * $limit, $limit)->select();
        return json([
            'code' => 0,
            'msg' => '',
            'count' => $count,
            'data' => $books
        ]);
    }

    public function create() {
        if (request()->isPost()) {
            $book = new Book();
            $data = $this->request->param();
            $book->author_id = $this->uid;
            $book->author_name = $this->author_name;
            $book->cover_url = input('cover');
            $book->last_time = time();
            $str = $this->convert($data['book_name']); //生成标识
            $c = (int)Book::where('unique_id','=',$str)->count();
            if ($c > 0) {
                $data['unique_id'] = md5(time() . mt_rand(1,1000000)); //如果已经存在相同标识，则生成一个新的随机标识
            } else {
                $data['unique_id'] = $str;
            }
            $result = $book->save($data);
            if ($result) {
                return json(['err' =>0,'msg'=>'添加成功']);
            } else {
                return json(['err' =>1,'msg'=>'添加失败']);
            }
        }
        $areas = Area::select();
        View::assign('areas', $areas);
        return view();
    }

    public function edit() {
        $data = request()->param();
        try {
            $book = Book::findOrFail($data['id']);
            if (request()->isPost()) {
                $book->author_id = $this->uid;
                $book->author_name = $this->author_name;
                $book->cover_url = input('cover');
                $book->last_time = time();
                $result = $book->save($data);
                if ($result) {
                    return json(['err' =>0,'msg'=>'添加成功']);
                } else {
                    return json(['err' =>1,'msg'=>'添加失败']);
                }
            } else {
                $areas = Area::select();
                View::assign([
                    'areas' => $areas,
                    'book' => $book
                ]);
                return view();
            }
        } catch (ModelNotFoundException $e) {
            abort(404);
        }
    }

    public function upload() {
        if (is_null(request()->file())) {
            return json([
                'code' => 1
            ]);
        } else {
            $cover = request()->file('file');
            $dir = 'book/cover';
            $savename =str_replace ( '\\', '/',
                \think\facade\Filesystem::disk('public')->putFile($dir, $cover));
            return json([
                'code' => 0,
                'msg' => '',
                'img' => '/static/upload/'.$savename
            ]);
        }
    }

    public function delete()
    {
        $id = input('id');
        try {
            $book = Book::withTrashed()->findOrFail($id);
            $chapters = Chapter::where('book_id', '=', $id)->select(); //按漫画id查找所有章节
            foreach ($chapters as $chapter) {
                $pics = Photo::where('chapter_id', '=', $chapter->id)->select(); //按章节id查找所有图片
                foreach ($pics as $pic) {
                    $pic->delete(); //删除图片
                }
                $chapter->delete(); //删除章节
            }
            $result = $book->force()->delete();
            if ($result) {
                return json(['err' => 0, 'msg' => '删除成功']);
            } else {
                return json(['err' => 1, 'msg' => '删除失败']);
            }

        } catch (DataNotFoundException $e) {
            abort(404, $e->getMessage());
        } catch (ModelNotFoundException $e) {
            abort(404, $e->getMessage());
        }
    }

    protected function convert($str){
        $pinyin = new Pinyin();
        $name_format = config('seo.name_format');
        switch ($name_format) {
            case 'pure':
                $arr = $pinyin->convert($str);
                $str = implode($arr,'');
                break;
            case 'abbr':
                $str = $pinyin->abbr($str);break;
            default:
                $str = $pinyin->convert($str);break;
        }
        return $str;
    }
}