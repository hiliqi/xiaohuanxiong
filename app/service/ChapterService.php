<?php


namespace app\service;

use app\model\Chapter;
class ChapterService
{
    public function getChapters($where)
    {
        $page = config('page.back_end_page');
        $chapters = Chapter::where($where);
        $pages = $chapters->with(['photos' => function ($query) {
            $query->order('pic_order');
        }])->order('id', 'desc')->paginate([
            'list_rows'=> $page,
            'query' => request()->param(),
            'var_page' => 'page',
        ]);
        foreach ($pages as &$chapter) {
            $chapter['photo_count'] = count($chapter->photos);
        }
        return [
            'chapters' => $pages,
            'count' => $chapters->count(),
        ];
    }

    public function getLastChapter($book_id)
    {
        return Chapter::where('book_id', '=', $book_id)->order('chapter_order', 'desc')->limit(1)->find();
    }
}