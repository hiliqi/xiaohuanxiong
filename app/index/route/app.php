<?php

use think\facade\Route;

Route::rule('/' . BOOKCTRL . '/:id', 'books/index');
Route::rule('/' . BOOKLISTACT, 'booklist/index');
Route::rule('/getBooks', 'booklist/getBooks');
Route::rule('/getOptions', 'booklist/getOptions');
Route::rule('/' . CHAPTERCTRL . '/:id', 'chapters/index');
Route::rule('/' . SEARCHCTRL . '/[:keyword]', 'index/search');
Route::rule('/' . RANKCTRL, 'rank/index');
Route::rule('/' . UPDATEACT, 'update/index');
Route::rule('/' . AUTHORCTRL . '/:id', 'authors/index');
Route::rule('/tails/:id', 'tails/index');
Route::rule('/tailist', 'tails/list');
Route::rule('/article/:id', 'articles/index');
Route::rule('/articlelist', 'articles/list');
Route::rule('/topic/:id', 'topics/index');
Route::rule('/addfavor', 'books/addfavor');
Route::rule('/commentadd', 'books/commentadd');
Route::rule('/login', 'account/login');
Route::rule('/register', 'account/register');
Route::rule('/logout', 'account/logout');
Route::rule('/captcha', 'account/captcha');

Route::rule('/ucenter', 'users/ucenter');
Route::rule('/bookshelf', 'users/bookshelf');
Route::rule('/getfavors', 'users/getfavors');
Route::rule('/history', 'users/history');
Route::rule('/userinfo', 'users/userinfo');
Route::rule('/delfavors', 'users/delfavors');
Route::rule('/delhistory', 'users/delhistory');
Route::rule('/updateUserinfo', 'users/update');
Route::rule('/bindphone', 'users/bindphone');
Route::rule('/userphone', 'users/userphone');
Route::rule('/sendcms', 'users/sendcms');
Route::rule('/verifyphone', 'users/verifyphone');
Route::rule('/recovery', 'account/recovery');
Route::rule('/resetpwd', 'users/resetpwd');
Route::rule('/leavemsg', 'users/leavemsg');
Route::rule('/message', 'users/message');
Route::rule('/promotion', 'users/promotion');

Route::rule('/wallet', 'finance/wallet');
Route::rule('/chargehistory', 'finance/chargehistory');
Route::rule('/spendinghistory', 'finance/spendinghistory');
Route::rule('/buyhistory', 'finance/buyhistory');
Route::rule('/charge', 'finance/charge');
Route::rule('/feedback', 'finance/feedback');
Route::rule('/buychapter', 'finance/buychapter');
Route::rule('/vip', 'finance/vip');
Route::rule('/kami', 'finance/kami');
Route::rule('/vipexchange', 'finance/vipexchange');

