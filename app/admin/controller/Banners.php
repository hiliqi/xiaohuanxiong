<?php


namespace app\admin\controller;

use app\model\Banner;
use app\model\Book;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\exception\ValidateException;
use think\facade\View;

class Banners extends BaseAdmin
{
    public function index()
    {
        return view();
    }

    public function list()
    {
        $page = intval(input('page'));
        $limit = intval(input('limit'));
        $data = Banner::order('id', 'desc');
        $count = $data->count();
        $banners = $data->order('id', 'desc')
            ->limit(($page - 1) * $limit, $limit)->select();
        foreach ($banners as &$banner) {
            $banner['book_name'] = Book::where('id','=',$banner['book_id'])->column('book_name');
        }
        return json([
            'code' => 0,
            'msg' => '',
            'count' => $count,
            'data' => $banners
        ]);
    }

    public function create()
    {
        if (request()->isPost()) {
            $banner = new Banner();
            $banner->title = input('title');
            $banner->book_id = input('book_id');
            $banner->banner_order = input('banner_order');
            $banner->pic_name = input('cover');
            $result = $banner->save();
            if ($result) {
                return json(['err' => 0, 'msg' => '添加成功']);
            } else {
                return json(['err' => 1, 'msg' => '添加失败']);
            }
        }
        return view();
    }

    public function edit()
    {
        $data = request()->param();
        try {
            $banner = Banner::findOrFail($data['id']);
            if (request()->isPost()) {
                $banner->title = input('title');
                $banner->book_id = input('book_id');
                $banner->banner_order = input('banner_order');
                $banner->pic_name = input('cover');
                $result = $banner->save();
                if ($result) {
                    return json(['err' => 0, 'msg' => '修改成功']);
                } else {
                    return json(['err' => 1, 'msg' => '修改失败']);
                }
            }
            View::assign('banner', $banner);
            return view();

        } catch (ModelNotFoundException $e) {
            return json(['err' => 1, 'msg' => '找不到该书']);
        }
    }

    public function upload()
    {
        if (is_null(request()->file())) {
            return json([
                'code' => 1
            ]);
        } else {
            $cover = request()->file('file');
            $dir = sprintf('book/banner');
            $savename = str_replace('\\', '/',
                \think\facade\Filesystem::disk('public')->putFile($dir, $cover));
            return json([
                'code' => 0,
                'msg' => '',
                'img' => '/static/upload/' . $savename
            ]);
        }
    }

    public function delete()
    {
        $id = input('id');
        $result = Banner::destroy($id);
        if ($result) {
            return ['err' => 0, 'msg' => '删除成功'];
        } else {
            return ['err' => 1, 'msg' => '删除失败'];
        }
    }

    public function deleteAll($ids){
        Banner::destroy($ids);
    }
}