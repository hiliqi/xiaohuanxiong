<?php


namespace app\common\taglib;


use think\template\TagLib;

class Raccoon extends TagLib
{
    protected $tags = [
        // 标签定义： attr 属性列表 close 是否闭合（0 或者1 默认1） alias 标签别名 level 嵌套层次
        'banners' => ['attr' => 'order,limit,where', 'close' => 1],
        'cates' => ['attr' => 'order,limit,where', 'close' => 1],
        'areas' => ['attr' => 'order,limit,where', 'close' => 1],
        'books' => ['attr' => 'order,limit,where', 'close' => 1],
        'pagedbooks' => ['attr' => 'order,pagesize,where', 'close' => 1],
        'chapters' => ['attr' => 'order,limit,where', 'close' => 1],
        'pagedchapters' => ['attr' => 'order,pagesize,where', 'close' => 1],
        'comments' => ['attr' => 'order,limit,where', 'close' => 1],
        'pagedcomments' => ['attr' => 'order,pagesize,where', 'close' => 1],
        'articles' => ['attr' => 'order,limit,where', 'close' => 1],
        'pagedarticles' => ['attr' => 'order,pagesize,where', 'close' => 1],
        'photos' => ['attr' => 'order,limit,where', 'close' => 1],
        'pagedphotos' => ['attr' => 'order,pagesize,where', 'close' => 1],
        'favors' => ['attr' => 'order,pagesize,where', 'close' => 1],
        'finances' => ['attr' => 'order,pagesize,where', 'close' => 1],
        'buys' => ['attr' => 'order,pagesize,where', 'close' => 1],
    ];

    public function tagBooks($tag, $content)
    {
        $order = isset($tag['order']) ? $tag['order'] : 'id desc';
        $limit = isset($tag['limit']) ? $tag['limit'] : 0;
        $where = isset($tag['where']) ? $tag['where'] : '1=1';
        //$where = str_replace('"', '\'', json_encode($map, JSON_UNESCAPED_UNICODE | JSON_FORCE_OBJECT));
        $parse = '<?php ';
        $parse .= '$books = getBooks("' . $order . '","' . $where . '","' . $limit . '");';
        $parse .= ' ?>';
        $parse .= '{volist name="books" id="vo"';
        if (!empty($tag['id'])) {
            $parse .= ' id="' . $tag['id'] . '"';
        }
        if (!empty($tag['key'])) {
            $parse .= ' key="' . $tag['key'] . '"';
        }
        if (!empty($tag['offset'])) {
            $parse .= ' offset="' . $tag['offset'] . '"';
        }
        if (!empty($tag['length'])) {
            $parse .= ' length="' . $tag['length'] . '"';
        }
        $parse .= '}';
        $parse .= $content;
        $parse .= '{/volist}';
        return $parse;
    }

    public function tagBanners($tag, $content)
    {
        $order = isset($tag['order']) ? $tag['order'] : 'id desc';
        $limit = isset($tag['limit']) ? $tag['limit'] : 0;
        $where = isset($tag['where']) ? $tag['where'] : '1=1';
        $parse = '<?php ';
        $parse .= '$banners = getBanners("' . $order . '","' . $where . '","' . $limit . '");';
        $parse .= ' ?>';
        $parse .= '{volist name="banners" id="vo"';
        if (!empty($tag['id'])) {
            $parse .= ' id="' . $tag['id'] . '"';
        }
        if (!empty($tag['key'])) {
            $parse .= ' key="' . $tag['key'] . '"';
        }
        if (!empty($tag['offset'])) {
            $parse .= ' offset="' . $tag['offset'] . '"';
        }
        if (!empty($tag['length'])) {
            $parse .= ' length="' . $tag['length'] . '"';
        }
        $parse .= '}';
        $parse .= $content;
        $parse .= '{/volist}';
        return $parse;
    }

    public function tagCates($tag, $content)
    {
        $order = isset($tag['order']) ? $tag['order'] : 'id desc';
        $limit = isset($tag['limit']) ? $tag['limit'] : 0;
        $where = isset($tag['where']) ? $tag['where'] : '1=1';
        $parse = '<?php ';
        $parse .= '$cates = getCates("' . $order . '","' . $where . '","' . $limit . '");';
        $parse .= ' ?>';
        $parse .= '{volist name="cates" id="vo"';
        if (!empty($tag['id'])) {
            $parse .= ' id="' . $tag['id'] . '"';
        }
        if (!empty($tag['key'])) {
            $parse .= ' key="' . $tag['key'] . '"';
        }
        if (!empty($tag['offset'])) {
            $parse .= ' offset="' . $tag['offset'] . '"';
        }
        if (!empty($tag['length'])) {
            $parse .= ' length="' . $tag['length'] . '"';
        }
        $parse .= '}';
        $parse .= $content;
        $parse .= '{/volist}';
        return $parse;
    }

    public function tagAreas($tag, $content)
    {
        $order = isset($tag['order']) ? $tag['order'] : 'id desc';
        $limit = isset($tag['limit']) ? $tag['limit'] : 0;
        $where = isset($tag['where']) ? $tag['where'] : '1=1';
        $parse = '<?php ';
        $parse .= '$areas = getAreas("' . $order . '","' . $where . '","' . $limit . '");';
        $parse .= ' ?>';
        $parse .= '{volist name="areas" id="vo"';
        if (!empty($tag['id'])) {
            $parse .= ' id="' . $tag['id'] . '"';
        }
        if (!empty($tag['key'])) {
            $parse .= ' key="' . $tag['key'] . '"';
        }
        if (!empty($tag['offset'])) {
            $parse .= ' offset="' . $tag['offset'] . '"';
        }
        if (!empty($tag['length'])) {
            $parse .= ' length="' . $tag['length'] . '"';
        }
        $parse .= '}';
        $parse .= $content;
        $parse .= '{/volist}';
        return $parse;
    }

    public function tagPagedbooks($tag, $content)
    {
        $order = isset($tag['order']) ? $tag['order'] : 'id desc';
        $pagesize = isset($tag['pagesize']) ? $tag['pagesize'] : 10;
        $where = isset($tag['where']) ? $tag['where'] : '1=1';
        //$where = str_replace('"', '\'', json_encode($map));
        $parse = '<?php ';
        $parse .= '$data = getPagedBooks("' . $order . '","' . $where . '","' . $pagesize . '");';
        $parse .= '$page = $data["page"];';
        $parse .= '$param = $data["param"];';
        $parse .= '$books = $data["books"];';
        $parse .= ' ?>';
        $parse .= '{volist name="books" id="vo"';
        if (!empty($tag['id'])) {
            $parse .= ' id="' . $tag['id'] . '"';
        }
        if (!empty($tag['key'])) {
            $parse .= ' key="' . $tag['key'] . '"';
        }
        if (!empty($tag['offset'])) {
            $parse .= ' offset="' . $tag['offset'] . '"';
        }
        if (!empty($tag['length'])) {
            $parse .= ' length="' . $tag['length'] . '"';
        }
        $parse .= '}';
        $parse .= $content;
        $parse .= '{/volist}';
        return $parse;
    }

    public function tagChapters($tag, $content)
    {
        $order = isset($tag['order']) ? $tag['order'] : 'id desc';
        $limit = isset($tag['limit']) ? $tag['limit'] : 0;
        $where = isset($tag['where']) ? $tag['where'] : '1=1';
        $parse = '<?php ';
        $parse .= '$chapters = getChapters("' . $order . '","' . $where . '","' . $limit . '");';
        $parse .= ' ?>';
        $parse .= '{volist name="chapters" id="vo"';
        if (!empty($tag['id'])) {
            $parse .= ' id="' . $tag['id'] . '"';
        }
        if (!empty($tag['key'])) {
            $parse .= ' key="' . $tag['key'] . '"';
        }
        if (!empty($tag['offset'])) {
            $parse .= ' offset="' . $tag['offset'] . '"';
        }
        if (!empty($tag['length'])) {
            $parse .= ' length="' . $tag['length'] . '"';
        }
        $parse .= '}';
        $parse .= $content;
        $parse .= '{/volist}';
        return $parse;
    }

    public function tagPagedchapters($tag, $content)
    {
        $order = isset($tag['order']) ? $tag['order'] : 'id desc';
        $pagesize = isset($tag['pagesize']) ? $tag['pagesize'] : 10;
        $where = isset($tag['where']) ? $tag['where'] : '1=1';
        //$where = str_replace('"', '\'', json_encode($map));
        $parse = '<?php ';
        $parse .= '$data = getPagedChapters("' . $order . '","' . $where . '","' . $pagesize . '");';
        $parse .= '$page = $data["page"];';
        $parse .= '$param = $data["param"];';
        $parse .= '$chapters = $data["chapters"];';
        $parse .= ' ?>';
        $parse .= '{volist name="chapters" id="vo"';
        if (!empty($tag['id'])) {
            $parse .= ' id="' . $tag['id'] . '"';
        }
        if (!empty($tag['key'])) {
            $parse .= ' key="' . $tag['key'] . '"';
        }
        if (!empty($tag['offset'])) {
            $parse .= ' offset="' . $tag['offset'] . '"';
        }
        if (!empty($tag['length'])) {
            $parse .= ' length="' . $tag['length'] . '"';
        }
        $parse .= '}';
        $parse .= $content;
        $parse .= '{/volist}';
        return $parse;
    }

    public function tagComments($tag, $content)
    {
        $order = isset($tag['order']) ? $tag['order'] : 'id desc';
        $limit = isset($tag['limit']) ? $tag['limit'] : 0;
        $where = isset($tag['where']) ? $tag['where'] : '1=1';
        $parse = '<?php ';
        $parse .= '$comments = getComments("' . $order . '","' . $where . '","' . $limit . '");';
        $parse .= ' ?>';
        $parse .= '{volist name="comments" id="vo"';
        if (!empty($tag['id'])) {
            $parse .= ' id="' . $tag['id'] . '"';
        }
        if (!empty($tag['key'])) {
            $parse .= ' key="' . $tag['key'] . '"';
        }
        if (!empty($tag['offset'])) {
            $parse .= ' offset="' . $tag['offset'] . '"';
        }
        if (!empty($tag['length'])) {
            $parse .= ' length="' . $tag['length'] . '"';
        }
        $parse .= '}';
        $parse .= $content;
        $parse .= '{/volist}';
        return $parse;
    }

    public function tagPagedcomments($tag, $content)
    {
        $order = isset($tag['order']) ? $tag['order'] : 'id desc';
        $pagesize = isset($tag['pagesize']) ? $tag['pagesize'] : 10;
        $where = isset($tag['where']) ? $tag['where'] : '1=1';
        //$where = str_replace('"', '\'', json_encode($map));
        $parse = '<?php ';
        $parse .= '$data = getPagedComments("' . $order . '","' . $where . '","' . $pagesize . '");';
        $parse .= '$page = $data["page"];';
        $parse .= '$param = $data["param"];';
        $parse .= '$comments = $data["comments"];';
        $parse .= ' ?>';
        $parse .= '{volist name="comments" id="vo"';
        if (!empty($tag['id'])) {
            $parse .= ' id="' . $tag['id'] . '"';
        }
        if (!empty($tag['key'])) {
            $parse .= ' key="' . $tag['key'] . '"';
        }
        if (!empty($tag['offset'])) {
            $parse .= ' offset="' . $tag['offset'] . '"';
        }
        if (!empty($tag['length'])) {
            $parse .= ' length="' . $tag['length'] . '"';
        }
        $parse .= '}';
        $parse .= $content;
        $parse .= '{/volist}';
        return $parse;
    }

    public function tagArticles($tag, $content)
    {
        $order = isset($tag['order']) ? $tag['order'] : 'id desc';
        $limit = isset($tag['limit']) ? $tag['limit'] : 0;
        $where = isset($tag['where']) ? $tag['where'] : '1=1';
        $parse = '<?php ';
        $parse .= '$articles = getArticles("' . $order . '","' . $where . '","' . $limit . '");';
        $parse .= ' ?>';
        $parse .= '{volist name="articles" id="vo"';
        if (!empty($tag['id'])) {
            $parse .= ' id="' . $tag['id'] . '"';
        }
        if (!empty($tag['key'])) {
            $parse .= ' key="' . $tag['key'] . '"';
        }
        if (!empty($tag['offset'])) {
            $parse .= ' offset="' . $tag['offset'] . '"';
        }
        if (!empty($tag['length'])) {
            $parse .= ' length="' . $tag['length'] . '"';
        }
        $parse .= '}';
        $parse .= $content;
        $parse .= '{/volist}';
        return $parse;
    }

    public function tagPagedarticles($tag, $content)
    {
        $order = isset($tag['order']) ? $tag['order'] : 'id desc';
        $pagesize = isset($tag['pagesize']) ? $tag['pagesize'] : 10;
        $where = isset($tag['where']) ? $tag['where'] : '1=1';
        $parse = '<?php ';
        $parse .= '$data = getPagedArticles("' . $order . '","' . $where . '","' . $pagesize . '");';
        $parse .= '$page = $data["page"];';
        $parse .= '$param = $data["param"];';
        $parse .= '$articles = $data["articles"];';
        $parse .= ' ?>';
        $parse .= '{volist name="articles" id="vo"';
        if (!empty($tag['id'])) {
            $parse .= ' id="' . $tag['id'] . '"';
        }
        if (!empty($tag['key'])) {
            $parse .= ' key="' . $tag['key'] . '"';
        }
        if (!empty($tag['offset'])) {
            $parse .= ' offset="' . $tag['offset'] . '"';
        }
        if (!empty($tag['length'])) {
            $parse .= ' length="' . $tag['length'] . '"';
        }
        $parse .= '}';
        $parse .= $content;
        $parse .= '{/volist}';
        return $parse;
    }

    public function tagPhotos($tag, $content)
    {
        $order = isset($tag['order']) ? $tag['order'] : 'id desc';
        $limit = isset($tag['limit']) ? $tag['limit'] : 0;
        $where = isset($tag['where']) ? $tag['where'] : '1=1';
        $parse = '<?php ';
        $parse .= '$photos = getPhotos("' . $order . '","' . $where . '","' . $limit . '");';
        $parse .= ' ?>';
        $parse .= '{volist name="photos" id="vo"';
        if (!empty($tag['id'])) {
            $parse .= ' id="' . $tag['id'] . '"';
        }
        if (!empty($tag['key'])) {
            $parse .= ' key="' . $tag['key'] . '"';
        }
        if (!empty($tag['offset'])) {
            $parse .= ' offset="' . $tag['offset'] . '"';
        }
        if (!empty($tag['length'])) {
            $parse .= ' length="' . $tag['length'] . '"';
        }
        $parse .= '}';
        $parse .= $content;
        $parse .= '{/volist}';
        return $parse;
    }

    public function tagPagedphotos($tag, $content)
    {
        $order = isset($tag['order']) ? $tag['order'] : 'id desc';
        $pagesize = isset($tag['pagesize']) ? $tag['pagesize'] : 10;
        $where = isset($tag['where']) ? $tag['where'] : '1=1';
        $parse = '<?php ';
        $parse .= '$data = getPagedPhotos("' . $order . '","' . $where . '","' . $pagesize . '");';
        $parse .= '$page = $data["page"];';
        $parse .= '$param = $data["param"];';
        $parse .= '$photos = $data["photos"];';
        $parse .= ' ?>';
        $parse .= '{volist name="photos" id="vo"';
        if (!empty($tag['id'])) {
            $parse .= ' id="' . $tag['id'] . '"';
        }
        if (!empty($tag['key'])) {
            $parse .= ' key="' . $tag['key'] . '"';
        }
        if (!empty($tag['offset'])) {
            $parse .= ' offset="' . $tag['offset'] . '"';
        }
        if (!empty($tag['length'])) {
            $parse .= ' length="' . $tag['length'] . '"';
        }
        $parse .= '}';
        $parse .= $content;
        $parse .= '{/volist}';
        return $parse;
    }

    public function tagFavors($tag, $content)
    {
        $order = isset($tag['order']) ? $tag['order'] : 'id desc';
        $pagesize = isset($tag['pagesize']) ? $tag['pagesize'] : 10;
        $where = isset($tag['where']) ? $tag['where'] : '1=1';
        $parse = '<?php ';
        $parse .= '$data = getFavors("' . $order . '","' . $where . '","' . $pagesize . '");';
        $parse .= '$page = $data["page"];';
        $parse .= '$param = $data["param"];';
        $parse .= '$favors = $data["favors"];';
        $parse .= ' ?>';
        $parse .= '{volist name="favors" id="vo"';
        if (!empty($tag['id'])) {
            $parse .= ' id="' . $tag['id'] . '"';
        }
        if (!empty($tag['key'])) {
            $parse .= ' key="' . $tag['key'] . '"';
        }
        if (!empty($tag['offset'])) {
            $parse .= ' offset="' . $tag['offset'] . '"';
        }
        if (!empty($tag['length'])) {
            $parse .= ' length="' . $tag['length'] . '"';
        }
        $parse .= '}';
        $parse .= $content;
        $parse .= '{/volist}';
        return $parse;
    }

    public function tagFinances($tag, $content)
    {
        $order = isset($tag['order']) ? $tag['order'] : 'id desc';
        $pagesize = isset($tag['pagesize']) ? $tag['pagesize'] : 10;
        $where = isset($tag['where']) ? $tag['where'] : '1=1';
        $parse = '<?php ';
        $parse .= '$data = getFinance("' . $order . '","' . $where . '","' . $pagesize . '");';
        $parse .= '$page = $data["page"];';
        $parse .= '$param = $data["param"];';
        $parse .= '$finances = $data["finances"];';
        $parse .= '$sum = $data["sum"];';
        $parse .= ' ?>';
        $parse .= '{volist name="finances" id="vo"';
        if (!empty($tag['id'])) {
            $parse .= ' id="' . $tag['id'] . '"';
        }
        if (!empty($tag['key'])) {
            $parse .= ' key="' . $tag['key'] . '"';
        }
        if (!empty($tag['offset'])) {
            $parse .= ' offset="' . $tag['offset'] . '"';
        }
        if (!empty($tag['length'])) {
            $parse .= ' length="' . $tag['length'] . '"';
        }
        $parse .= '}';
        $parse .= $content;
        $parse .= '{/volist}';
        return $parse;
    }

    public function tagBuys($tag, $content)
    {
        $order = isset($tag['order']) ? $tag['order'] : 'id desc';
        $pagesize = isset($tag['pagesize']) ? $tag['pagesize'] : 10;
        $where = isset($tag['where']) ? $tag['where'] : '1=1';
        $parse = '<?php ';
        $parse .= '$data = getBuys("' . $order . '","' . $where . '","' . $pagesize . '");';
        $parse .= '$page = $data["page"];';
        $parse .= '$param = $data["param"];';
        $parse .= '$buys = $data["buys"];';
        $parse .= ' ?>';
        $parse .= '{volist name="buys" id="vo"';
        if (!empty($tag['id'])) {
            $parse .= ' id="' . $tag['id'] . '"';
        }
        if (!empty($tag['key'])) {
            $parse .= ' key="' . $tag['key'] . '"';
        }
        if (!empty($tag['offset'])) {
            $parse .= ' offset="' . $tag['offset'] . '"';
        }
        if (!empty($tag['length'])) {
            $parse .= ' length="' . $tag['length'] . '"';
        }
        $parse .= '}';
        $parse .= $content;
        $parse .= '{/volist}';
        return $parse;
    }
}