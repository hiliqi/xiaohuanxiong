<?php


namespace app\admin\common;


use think\Paginator;

class AdminPage extends Paginator
{
    public function __construct($items, $listRows, $currentPage = null, $total = null, $simple = false, array $options = [])
    {
        parent::__construct($items, $listRows, $currentPage, $total, $simple, $options);
    }

    //首页
    protected function home()
    {
        if ($this->currentPage() > 1) {
            return "<a href='" . $this->url(1) . "' title='首页'>首页</a>";
        } else {
            return "<a href='#'>首页</a>";
        }
    }

    //上一页
    protected function prev()
    {
        if ($this->currentPage() > 1) {
            return "<a id='prevPage' href='" . $this->url($this->currentPage - 1) . "' title='上一页'>«</a>";
        } else {
            return "<a href='#'>«</a>";
        }
    }

    //下一页
    protected function next()
    {
        if ($this->hasMore) {
            return "<a id='nextPage' href='" . $this->url($this->currentPage + 1) . "' title='下一页'>»</a>";
        } else {
            return "<a href='#'>»</a>";
        }
    }

    //尾页
    protected function last()
    {
        if ($this->hasMore) {
            return "<a href='" . $this->url($this->lastPage) . "' title='尾页'>尾页</a>";
        } else {
            return "<a href='#'>尾页</a>";
        }
    }

    //统计信息
    protected function info()
    {
        return "<a class='pageRemark' href='#'>共<b>" . $this->lastPage . "</b>页</a>";
    }

    /**
     * 页码按钮
     * @return string
     */
    protected function getLinks()
    {
        $block = [
            'first' => null,
            'slider' => null,
            'last' => null
        ];
        $side = 3;
        $window = $side * 2;
        if ($this->lastPage < $window + 6) {
            $block['first'] = $this->getUrlRange(1, $this->lastPage);
        } elseif ($this->currentPage <= $window) {
            $block['first'] = $this->getUrlRange(1, $window + 2);
            $block['last'] = $this->getUrlRange($this->lastPage - 1, $this->lastPage);
        } elseif ($this->currentPage > ($this->lastPage - $window)) {
            $block['first'] = $this->getUrlRange(1, 2);
            $block['last'] = $this->getUrlRange($this->lastPage - ($window + 2), $this->lastPage);
        } else {
            $block['first'] = $this->getUrlRange(1, 2);
            $block['slider'] = $this->getUrlRange($this->currentPage - $side, $this->currentPage + $side);
            $block['last'] = $this->getUrlRange($this->lastPage - 1, $this->lastPage);
        }
        $html = '';
        if (is_array($block['first'])) {
            $html .= $this->getUrlLinks($block['first']);
        }
        if (is_array($block['slider'])) {
            $html .= $this->getDots();
            $html .= $this->getUrlLinks($block['slider']);
        }
        if (is_array($block['last'])) {
            $html .= $this->getDots();
            $html .= $this->getUrlLinks($block['last']);
        }
        return $html;
    }

    /**
     * 渲染分页html
     * @return mixed
     */
    public function render()
    {
        if ($this->hasPages()) {
            if ($this->simple) {
                return sprintf(
                    '%s<div class="pagination">%s %s %s</div>',
                    $this->css(),
                    $this->prev(),
                    $this->getLinks(),
                    $this->next()
                );
            } else {
                return sprintf(
                    '%s<div class="pagination">%s %s %s %s %s %s</div>',
                    $this->css(),
                    $this->home(),
                    $this->prev(),
                    $this->getLinks(),
                    $this->next(),
                    $this->last(),
                    $this->info()
                );
            }
        }
    }

    /**
     * 生成一个可点击的按钮
     *
     * @param  string $url
     * @param  int $page
     * @return string
     */
    protected function getAvailablePageWrapper($url, $page)
    {
        return '<a href="' . htmlentities($url) . '" title="第"' . $page . '"页" >' . $page . '</a>';
    }

    /**
     * 生成一个禁用的按钮
     *
     * @param  string $text
     * @return string
     */
    protected function getDisabledTextWrapper($text)
    {
        return '<a href="#" class="pageEllipsis">' . $text . '</a>';
    }

    /**
     * 生成一个激活的按钮
     *
     * @param  string $text
     * @return string
     */
    protected function getActivePageWrapper($text)
    {
        return '<a href="" class="cur">' . $text . '</a>';
    }

    /**
     * 生成省略号按钮
     *
     * @return string
     */
    protected function getDots()
    {
        return $this->getDisabledTextWrapper('...');
    }

    /**
     * 批量生成页码按钮.
     *
     * @param  array $urls
     * @return string
     */
    protected function getUrlLinks(array $urls)
    {
        $html = '';
        foreach ($urls as $page => $url) {
            $html .= $this->getPageLinkWrapper($url, $page);
        }
        return $html;
    }

    /**
     * 生成普通页码按钮
     *
     * @param  string $url
     * @param  int $page
     * @return string
     */
    protected function getPageLinkWrapper($url, $page)
    {
        if ($page == $this->currentPage()) {
            return $this->getActivePageWrapper($page);
        }
        return $this->getAvailablePageWrapper($url, $page);
    }

    /**
     * 分页样式
     */
    protected function css()
    {
        return '<style type="text/css">
            .pagination{
                height:40px;
                padding:5px 0;
                margin-left:27%;
            }
            .pagination a{
                float:left;
                color: black;
              padding: 6px 12px;

              border: none;
            }
            .pagination a:hover{
            float:left;
                color:#077ee3;
                background: white;
                border:1px #077ee3 solid;
            }
            .pagination a.cur{
            float:left;
                background: #167fa1;
              color: #fff;
              border: 1px solid #167fa1;
              padding: 6px 12px;
            }
            .pagination a.pageRemark b{
                color:red;
            }
            .dates li {font-size: 14px;margin:20px 0}
            .dates li span{float:right}
        </style>';
    }
}