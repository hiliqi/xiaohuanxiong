<?php

namespace app\api\controller;

use app\model\Author;
use app\model\Book;
use app\model\Photo;
use Overtrue\Pinyin\Pinyin;
use think\Controller;
use think\Request;
use app\model\Chapter;

class Postbot
{
    protected $chapterService;
    protected $photoService;

    public function initialize()
    {
        $this->chapterService = new \app\service\ChapterService();
        $this->photoService = new \app\service\PhotoService();
    }

    public function save(Request $request)
    {
        if ($request->isPost()) {
            $data = $request->param();
        if (!isset($data['api_key']) || $data['api_key'] != config('site.api_key'))
                return json(['code' => 1, 'message' => 'Api密钥为空/密钥错误']);
            $book = Book::where(array('book_name'=>$data['book_name'],'unique_id'=>$data['unique_id']))->find();
            if (!$book) { //如果漫画不存在
                $author = Author::where('author_name', '=', trim($data['author']))->find();
                if (is_null($author)) {//如果作者不存在
                    $author = new Author();
                    $author->username = $data['author'] ?: '侠名';
                    $author->password = 'author123456';
                    $author->email = 'author123456@163.com';
                    $author->status = '1';
                    $author->author_name = $data['author'] ?: '侠名';
                    $author->save();
                }
                $book = new Book();
                $book->unique_id = $this->convert($data['book_name']).md5(time() . mt_rand(1,1000000));
                //$book->unique_id = $data['unique_id'];
                $book->author_id = $author->id;
                $book->author_name = $data['author'] ?: '侠名';
                $book->area_id = trim($data['area_id']);
                $book->book_name = trim($data['book_name']);
                if (!empty($data['nick_name']) || !is_null($data['nick_name'])) {
                    $book->nick_name = trim($data['nick_name']);
                }
                $book->tags = trim($data['tags']);
                $book->end = trim($data['end']);
                $book->start_pay = trim($data['start_pay']);
                $book->money = trim($data['money']);
                $book->cover_url = trim($data['cover_url']);
                $book->summary = trim($data['summary']);
                $book->last_time = time();
                //      $book->update_week = rand(1, 7);
                //      $book->click = rand(1000, 9999);
                $book->save();
            }
              $chapter = Chapter::where(['chapter_name'=>$data['chapter_name'],'book_id'=>$book->id])->find();

            if ($chapter) {
                return json(['code' => 0, 'message' => '章节已存在', 'info' => ['book' => $book, 'chapter' => $chapter]]);
            } else {
                $chapter = new Chapter();
                $chapter->chapter_name = trim($data['chapter_name']);
                $chapter->book_id = $book->id;
                $chapter->chapter_order = $data['chapter_order'];
                $chapter->update_time = time();
                $chapter->save();
                $book->last_time = time();
                $book->last_chapter_id = $chapter->id;
                $book->last_chapter = $chapter->chapter_name;
                $book->save();
                // $preg = '/\bsrc\b\s*=\s*[\'\"]?([^\'\"]*)[\'\"]?/i';
                // preg_match_all($preg, $data['images'], $img_urls);
                // $lastOrder = 0;
                // $lastPhoto = $this->getLastPhoto($chapter->id);
                // if ($lastPhoto) {
                //     $lastOrder = $lastPhoto->pic_order + 1;
                // }
                foreach (explode(',', $data['images']) as $key => $img_url) {
                    $photo = new Photo();
                    $photo->chapter_id = $chapter->id;
                    $photo->pic_order = $key;
                    $photo->img_url = $img_url;
                    $photo->save();
                }
                return json(['code' => 0, 'message' => '发布成功', 'info' => ['book' => $book, 'chapter' => $chapter]]);
            }
        }
    }

    public function getLastChapter($book_id)
    {
        return Chapter::where('book_id', '=', $book_id)->order('chapter_order', 'desc')->limit(1)->find();
    }

    public function getLastPhoto($chapter_id)
    {
        return Photo::where('chapter_id', '=', $chapter_id)->order('id', 'desc')->limit(1)->find();
    }

    protected function convert($str)
    {
        $pinyin = new Pinyin();
        $str = $pinyin->abbr($str);
        return $str;
    }
}
