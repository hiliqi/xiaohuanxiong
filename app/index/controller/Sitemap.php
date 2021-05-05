<?php


namespace app\index\controller;


use app\model\Book;
use app\model\Chapter;
use app\model\Tail;
use think\facade\App;

class Sitemap extends Base
{
    public function book()
    {
        $num = config('seo.sitemap_gen_num');
        $books = Book::order('id','desc')->limit($num)->select();
        $data = array();
        $content = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
        $content .= '<urlset>';
        foreach ($books  as &$book){ //这里构建所有的内容页数组
            if ($this->end_point == 'id') {
                $book['param'] = $book['id'];
            } else {
                $book['param'] = $book['unique_id'];
            }
            $temp = array(
                'loc' => $this->url  . '/' . BOOKCTRL . '/' . $book['param'],
                'priority' => '0.9',
            );
            array_push($data, $temp);
        }
        foreach ($data as $item) {
            $content .= $this->create_item($item);
        }
        $content .= '</urlset>';

        ob_clean();
        return xml($content,200,[],['root_node'=>'xml']);
    }

    public function chapter() {
        $num = config('seo.sitemap_gen_num');
        $chapters = Chapter::order('id','desc')->limit($num)->select();
        $arr = array();
        $content = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
        $content .= '<urlset>';
        foreach ($chapters as $chapter) {
            $temp = array(
                'loc' => $this->url  . '/' . CHAPTERCTRL . '/' . $chapter['id'],
                'priority' => '0.9',
            );
            array_push($arr, $temp);
        }
        foreach ($arr as $item) {
            $content .= $this->create_item($item);
        }
        $content .= '</urlset>';
        ob_clean();
        return xml($content,200,[],['root_node'=>'xml']);
    }

    public function tail() {
        $num = config('seo.sitemap_gen_num');
        $tails = Tail::order('id','desc')->limit($num)->select();
        $arr = array();
        $content = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
        $content .= '<urlset>';
        foreach ($tails as $tail) {
            $temp = array(
                'loc' => $this->url  . '/tail/' . $tail['tailcode'],
                'priority' => '0.9',
            );
            array_push($arr, $temp);
        }
        foreach ($arr as $item) {
            $content .= $this->create_item($item);
        }
        $content .= '</urlset>';
        ob_clean();
        return xml($content,200,[],['root_node'=>'xml']);
    }

    private function create_item($data)
    {
        $item = "<url>";
        $item .= "<loc>" . $data['loc'] . "</loc>";
        $item .= "<priority>" . $data['priority'] . "</priority>";
        $item .= "</url>";
        return $item;
    }
}