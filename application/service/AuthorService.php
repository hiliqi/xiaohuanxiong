<?php
/**
 * Created by PhpStorm.
 * User: hiliq
 * Date: 2018/10/4
 * Time: 0:02
 */

namespace app\service;


use app\model\Author;
use app\model\Book;

class AuthorService
{
    public function add($name)
    {
        $author = $this->getByName($name);
        if (!$author) { //不存在该作者则新增;
            $author = new Author();
            $author->name = $name;
            $author->save();
        }
    }

    public function getByName($name)
    {
        return Author::where('author_name', '=', $name)->find();
    }
 
    public function getAuthors($where = '1=1')
    {
        $page = config('page.back_end_page');
        $authors = Author::where($where)->with('books')->order('id','desc')
            ->paginate($page, false, [
            'query' => request()->param(),
            'type' => 'util\AdminPage',
            'var_page' => 'page',
        ]);
        foreach ($authors as &$author) {
            $author['count'] = count($author->books);
        }
        return [
            'authors' => $authors,
            'count' => $authors->count()
        ];
    }

    public function getBooksByAuthor($author_name)
    {
        $page = config('page.back_end_page');
        $author_id = Author::where('author_name', '=', $author_name)->find()->id;
        $data = Book::where('author_id', '=', $author_id);
        $books = $data->with('author')->paginate($page, false,
            [
                'type' => 'util\AdminPage',
                'var_page' => 'page',
            ]);
        foreach ($books as &$book) {
            $book['chapter_count'] = count($book->chapters);
        }
        return [
            'books' => $books,
            'count' => $data->count()
        ];
    }

    public function delete($array)
    {
        Author::destroy($array);
    }
}