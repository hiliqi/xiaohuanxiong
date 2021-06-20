<?php


namespace app\service;

use app\model\Author;
use app\model\Book;

class AuthorService
{
    public function getAuthors($where = '1=1')
    {
        $page = config('page.back_end_page');
        $authors = Author::where($where)->with('books')->order('id','desc')
            ->paginate([
            'list_rows'=> $page,
            'query' => request()->param(),
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
        $books = $data->with('author')->paginate(
            [
                'list_rows'=> $page,
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
}