<?php

use think\facade\Route;

Route::rule('/'.SEARCHCTRL.'/[:keyword]', 'mip/index/search');
Route::rule('/'.BOOKCTRL.'/:id', 'mip/books/index');
Route::rule('/'.UPDATEACT, 'mip/update/index');