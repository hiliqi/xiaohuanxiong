<?php


namespace app\service;

use app\model\Tags;
class TagsService
{
    public function getPagedAdmin($where = '1=1'){
        $data = Tags::where($where);
        $page = config('page.back_end_page');
        $tags = $data->order('id','desc')
            ->paginate(
                [
                    'list_rows'=> $page,
                    'query' => request()->param(),
                    'var_page' => 'page',
                ]);
        return [
            'tags' => $tags,
            'count' => $data->count()
        ];
    }
}