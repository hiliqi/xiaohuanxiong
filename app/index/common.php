<?php

function getBooks($order, $where, $num)
{
    $books = cache('books:' . $order . $where . $num);
    if ($books == false) {
        $bookModel = app('bookModel');
        $books = $bookModel->getBooks($order, $where, $num);
        cache('book:' . $order . $where . $num, $books, null, 'redis');
    }
    return $books;
}

function getBanners($order, $where, $num)
{
    $banners = cache('banners:' . $order . $where . $num);
    if ($banners == false) {
        $bannerModel = app('bannerModel');
        $banners = $bannerModel->getBanners($order, $where, $num);
        cache('banners:' . $order . $where . $num, $banners, null, 'redis');
    }
    return $banners;
}

function getCates($order, $where, $num)
{
    $cates = cache('tags:' . $order . $where . $num);
    if ($cates == false) {
        $tagModel = app('tagModel');
        $cates = $tagModel->getCates($order, $where, $num);
        cache('tags:' . $order . $where . $num, $cates, null, 'redis');
    }
    return $cates;
}

function getAreas($order, $where, $num)
{
    $areas = cache('areas:' . $order . $where . $num);
    if ($areas == false) {
        $areaModel = app('areaModel');
        $areas = $areaModel->getAreas($order, $where, $num);
        cache('areas:' . $order . $where . $num, $areas, null, 'redis');
    }
    return $areas;
}

function getPagedBooks($order, $where, $pagesize)
{
    $bookModel = app('bookModel');

    $data = $bookModel->getPagedBooks($order, $where, $pagesize);
    unset($data['page']['query']['page']);
    $param = '';
    foreach ($data['page']['query'] as $k => $v) {
        $param .= '&' . $k . '=' . $v;
    }
    $pagedBooks = array();
    $pagedBooks['books'] = $data['books'];
    $pagedBooks['page'] = $data['page'];
    $pagedBooks['param'] = $param;
    return $pagedBooks;
}

function getChapters($order, $where, $num)
{
    $chapters = cache('chapters:' . $order . $where . $num);
    if ($chapters == false) {
        $chapterModel = app('chapterModel');
        $chapters = $chapterModel->getChapters($order, $where, $num);
        cache('chapters:' . $order . $where . $num, $chapters, null, 'redis');
    }
    return $chapters;
}

function getPagedChapters($order, $where, $pagesize)
{
    $chapterModel = app('chapterModel');
    $data = $chapterModel->getPagedChapters($order, $where, $pagesize);
    unset($data['page']['query']['page']);
    $param = '';
    foreach ($data['page']['query'] as $k => $v) {
        $param .= '&' . $k . '=' . $v;
    }
    $paged = array();
    $paged['books'] = $data['books'];
    $paged['page'] = $data['page'];
    $paged['param'] = $param;
    return $paged;
}

function getComments($order, $where, $num)
{
    $comments = cache('comments:' . $order . $where . $num);
    if ($comments == false) {
        $commentModel = app('commentModel');
        $comments = $commentModel->getComments($order, $where, $num);
        cache('comments:' . $order . $where . $num, $comments, null, 'redis');
    }
    return $comments;
}

function getPagedComments($order, $where, $pagesize)
{
    $commentModel = app('commentModel');
    $data = $commentModel->getPagedComments($order, $where, $pagesize);
    unset($data['page']['query']['page']);
    $param = '';
    foreach ($data['page']['query'] as $k => $v) {
        $param .= '&' . $k . '=' . $v;
    }
    $paged = array();
    $paged['comments'] = $data['comments'];
    $paged['page'] = $data['page'];
    $paged['param'] = $param;
    return $paged;
}

function getArticles($order, $where, $num)
{
    $articles = cache('articles:' . $order . $where . $num);
    if ($articles == false) {
        $articleModel = app('articleModel');
        $articles = $articleModel->getArticles($order, $where, $num);
        cache('articles:' . $order . $where . $num, $articles, null, 'redis');
    }
    return $articles;
}

function getPagedArticles($order, $where, $pagesize)
{
    $articleModel = app('articleModel');
    $data = $articleModel->getPagedArticles($order, $where, $pagesize);
    unset($data['page']['query']['page']);
    $param = '';
    foreach ($data['page']['query'] as $k => $v) {
        $param .= '&' . $k . '=' . $v;
    }
    $paged = array();
    $paged['articles'] = $data['articles'];
    $paged['page'] = $data['page'];
    $paged['param'] = $param;
    return $paged;
}

function getPhotos($order, $where, $num)
{
    $photos = cache('photos:' . $order . $where . $num);
    if ($photos == false) {
        $photoModel = app('photoModel');
        $photos = $photoModel->getPhotos($order, $where, $num);
        cache('photos:' . $order . $where . $num, $photos, null, 'redis');
    }
    return $photos;
}

function getPagedPhotos($order, $where, $pagesize)
{
    $photoModel = app('photoModel');
    $data = $photoModel->getPagedPhotos($order, $where, $pagesize);
    unset($data['page']['query']['page']);
    $param = '';
    foreach ($data['page']['query'] as $k => $v) {
        $param .= '&' . $k . '=' . $v;
    }
    $paged = array();
    $paged['photos'] = $data['photos'];
    $paged['page'] = $data['page'];
    $paged['param'] = $param;
    return $paged;
}

function getFavors($order, $where, $pagesize)
{
    $userModel = app('userModel');
    $data = $userModel->getFavors($order, $where, $pagesize);
    unset($data['page']['query']['page']);
    $param = '';
    foreach ($data['page']['query'] as $k => $v) {
        $param .= '&' . $k . '=' . $v;
    }
    $paged = array();
    $paged['favors'] = $data['favors'];
    $paged['page'] = $data['page'];
    $paged['param'] = $param;
    return $paged;
}

function getBuys($order, $where, $pagesize)
{
    $userModel = app('userModel');
    $data = $userModel->getBuys($order, $where, $pagesize);
    unset($data['page']['query']['page']);
    $param = '';
    foreach ($data['page']['query'] as $k => $v) {
        $param .= '&' . $k . '=' . $v;
    }
    $paged = array();
    $paged['buys'] = $data['buys'];
    $paged['page'] = $data['page'];
    $paged['param'] = $param;
    return $paged;
}

function getFinance($order, $where, $pagesize)
{
    $financeModel = app('financeModel');
    $data = $financeModel->getFinance($order, $where, $pagesize);
    unset($data['page']['query']['page']);
    $param = '';
    foreach ($data['page']['query'] as $k => $v) {
        $param .= '&' . $k . '=' . $v;
    }
    $paged = array();
    $paged['finances'] = $data['finances'];
    $paged['page'] = $data['page'];
    $paged['sum'] = $data['sum'];
    $paged['param'] = $param;
    return $paged;
}