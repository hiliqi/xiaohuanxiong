<?php


namespace app\index\controller;

use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\facade\Db;
use app\model\Chapter;
use app\model\UserBuy;
use think\facade\View;

class Chapters extends Base
{
    public function index($id)
    {
        try {
            $chapter = Chapter::with('book')->cache('chapter:' . $id, 600, 'redis')->findOrFail($id);
        } catch (DataNotFoundException $e) {
            abort(404, $e->getMessage());
        } catch (ModelNotFoundException $e) {
            abort(404, $e->getMessage());
        }
        if ($this->end_point == 'id') {
            $chapter['book']['param'] = $chapter['book']['id'];
        } else {
            $chapter['book']['param'] = $chapter['book']['unique_id'];
        }
        $flag = true;
        if ($chapter->book->start_pay >= 0) {
            if ($chapter->chapter_order >= $chapter->book->start_pay) { //如果本章序大于起始付费章节，则是付费章节
                $flag = false;
            }
        } else { //如果是倒序付费设置
            $abs = abs($chapter->book->start_pay) - 1; //取得倒序的绝对值，比如-2，则是倒数第2章开始付费
            $max_chapter_order = cache('maxChapterOrder:' . $chapter->book_id);
            if (!$max_chapter_order) {
                $max_chapter_order = Db::query("SELECT MAX(chapter_order) as max FROM " . $this->prefix . "chapter WHERE book_id=:id",
                    ['id' => $chapter->book_id])[0]['max'];
                cache('maxChapterOrder:' . $chapter->book_id, $max_chapter_order);
            }
            $start_pay = (float)$max_chapter_order - $abs; //计算出起始付费章节
            if ($chapter->chapter_order >= $start_pay) { //如果本章序大于起始付费章节，则是付费章节
                $flag = false;
            }
        }

        if(!$flag) {
            $uid = session('xwx_user_id');
            if (!is_null($uid)) { //如果用户已经登录
                $vip_expire_time = session('vip_expire_time'); //用户等级
                $time = $vip_expire_time - time(); //计算vip用户时长
                if ($time > 0) { //如果是vip会员且没过期，则可以不受限制
                    $flag = true;
                } else { //如果不是会员，则判断用户是否购买本章节
                    $map[] = ['user_id', '=', $uid];
                    $map[] = ['chapter_id', '=', $id];
                    $userBuy = UserBuy::where($map)->find();
                    if (!is_null($userBuy)) { //如果购买了
                        $flag = true;
                    }
                }
            }
        }


        if ($flag) {
            $book_id = $chapter->book_id;

            $prev = cache('chapterPrev:' . $id);
            if (!$prev) {
                $prev = Db::query(
                    'select * from ' . $this->prefix . 'chapter where book_id=' . $book_id . ' and chapter_order<' . $chapter->chapter_order . ' order by chapter_order desc limit 1');
                cache('chapterPrev:' . $id, $prev, null, 'redis');
            }
            if (count($prev) > 0) {
                View::assign('prev', $prev[0]);
            } else {
                View::assign('prev', 'null');
            }

            $next = cache('chapterNext:' . $id);
            if (!$next) {
                $next = Db::query(
                    'select * from ' . $this->prefix . 'chapter where book_id=' . $book_id . ' and chapter_order>' . $chapter->chapter_order . ' order by chapter_order limit 1');
                cache('chapterNext:' . $id, $next, null, 'redis');
            }
            if (count($next) > 0) {
                View::assign('next', $next[0]);
            } else {
                View::assign('next', 'null');
            }

            View::assign([
                'chapter' => $chapter,
            ]);
            return view($this->tpl);
        } else {
            return redirect('/buychapter?chapter_id='.$id);
        }
    }
}