<?php

use think\facade\Route;

Route::rule('/'.SEARCHCTRL.'/[:keyword]', 'index/search');
Route::rule('/'.BOOKCTRL.'/:id', 'books/index');
Route::rule('/'.UPDATEACT, 'update/index');