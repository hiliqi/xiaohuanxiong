<?php


namespace app\admin\controller;

use app\model\Article;
use app\model\Book;
use app\model\Chapter;
use think\facade\App;

class Sitemap extends BaseAdmin
{
    public function index()
    {
        if (request()->isPost()) {
            $pagesize = input('pagesize');
            $part = input('part');
            $end = input('end');
            $this->gen($pagesize, $part, $end);
        }
        return view();
    }

    private function gen($pagesize, $part, $end)
    {
        if ($end == 'pc') {
            $site_name = config('site.domain');
        } elseif ($end == 'm') {
            $site_name = config('site.mobile_domain');
        } elseif ($end == 'mip') {
            $site_name = config('site.mip_domain');
        }
        if ($part == 'book') {
            $this->genbook($pagesize, $site_name, $end);
        } elseif ($part == 'chapter') {
            $this->genchapter($pagesize, $site_name, $end);
        } elseif ($part == 'article') {
            $this->genarticle($pagesize, $site_name, $end);
        }
    }

    private function genbook($pagesize, $site_name, $end)
    {
        $data = Book::where('1=1');
        $total = $data->count();
        $page = intval(ceil($total / $pagesize));
        for ($i = 1; $i <= $page; $i++) {
            $arr = array();
            $content = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n";
            $books = $data->limit($pagesize * ($i - 1), $pagesize)->select();
            foreach ($books as &$book) {
                if ($this->end_point == 'id') {
                    $book['param'] = $book['id'];
                } else {
                    $book['param'] = $book['unique_id'];
                }
                $temp = array(
                    'loc' => $site_name . '/' . $end . '/' . BOOKCTRL . '/' . $book['param'],
                    'priority' => '0.9',
                );
                array_push($arr, $temp);
            }
            foreach ($arr as $item) {
                $content .= $this->create_item($item);
            }
            $content .= '</urlset>';
            $sitemap_name = '/sitemap_book_' . $end . '_' . 'books' . '_' . $i . '.xml';
            file_put_contents(App::getRootPath() . 'public' . $sitemap_name, $content);
            file_put_contents(App::getRootPath() . 'public' . '/sitemap_book_' . $end . '_newest' . '.xml', $content);
            echo '<a href="' . $sitemap_name . '" target="_blank">' . $end . '端网站地图制作成功！点击这里查看</a><br />';
            flush();
            ob_flush();
            unset($arr);
            unset($content);
        }
    }

    private function genchapter($pagesize, $site_name, $end)
    {
        $data = Chapter::where('1=1');
        $total = $data->count();
        $page = intval(ceil($total / $pagesize));
        for ($i = 1; $i <= $page; $i++) {
            $arr = array();
            $content = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n";
            $chapters = $data->limit($pagesize * ($i - 1), $pagesize)->select();
            foreach ($chapters as $chapter) {
                $temp = array(
                    'loc' => $site_name . '/' . $end . '/' . CHAPTERCTRL . '/' . $chapter['id'],
                    'priority' => '0.9',
                );
                array_push($arr, $temp);
            }
            foreach ($arr as $item) {
                $content .= $this->create_item($item);
            }
            $content .= '</urlset>';
            $sitemap_name = '/sitemap_chapter_' . $end . '_' . 'chapters' . '_' . $i . '.xml';
            file_put_contents(App::getRootPath() . 'public' . $sitemap_name, $content);
            file_put_contents(App::getRootPath() . 'public' . '/sitemap_chapter_' . $end . '_newest' . '.xml', $content);
            echo '<a href="' . $sitemap_name . '" target="_blank">' . $end . '端网站地图制作成功！点击这里查看</a><br />';
            flush();
            ob_flush();
            unset($arr);
            unset($content);
        }
    }

    private function genarticle($pagesize, $site_name, $end)
    {
        $data = Article::where('1=1');
        $total = $data->count();
        $page = intval(ceil($total / $pagesize));
        for ($i = 1; $i <= $page; $i++) {
            $arr = array();
            $content = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset>\n";
            $articles = $data->limit($pagesize * ($i - 1), $pagesize)->select();
            foreach ($articles as $article) {
                if ($this->end_point == 'id') {
                    $article['param'] = $article['id'];
                } else {
                    $article['param'] = $article['unique_id'];
                }
                $temp = array(
                    'loc' => $site_name . '/' . $end . '/' . CHAPTERCTRL . '/' . $article['param'],
                    'priority' => '0.9',
                );
                array_push($arr, $temp);
            }
            foreach ($arr as $item) {
                $content .= $this->create_item($item);
            }
            $content .= '</urlset>';
            $sitemap_name = '/sitemap_article_' . $end . '_' . $i . '.xml';
            file_put_contents(App::getRootPath() . 'public' . $sitemap_name, $content);
            file_put_contents(App::getRootPath() . 'public' . '/sitemap_article_' . $end . '_newest' . '.xml', $content);
            echo '<a href="' . $sitemap_name . '" target="_blank">' . $end . '端网站地图制作成功！点击这里查看</a><br />';
            flush();
            ob_flush();
            unset($arr);
            unset($content);
        }
    }

    private function create_item($data)
    {
        $item = "<url>\n";
        $item .= "<loc>" . $data['loc'] . "</loc>\n";
        $item .= "<priority>" . $data['priority'] . "</priority>\n";
        $item .= "</url>\n";
        return $item;
    }
}