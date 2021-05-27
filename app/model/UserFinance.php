<?php


namespace app\model;


use think\facade\Cache;
use think\Model;

class UserFinance extends Model
{
    protected $autoWriteTimestamp = 'datetime';

    public function setSummaryAttr($value){
        return trim($value);
    }

    public function getBalance($uid)
    {
        $charge_sum = $this->getChargeSum($uid);
        $spending_sum = $this->getSpendingSum($uid);
        return $charge_sum - $spending_sum;
    }

    //获得当前用户充值总和
    public function getChargeSum($uid)
    {
        $map = array();
        $map[] = ['user_id', '=', $uid];
        $map[] = ['usage', 'in', [1, 4, 5]];
        $sum = UserFinance::where($map)->sum('money');
        return $sum;
    }

    //获得当前用户消费总和
    public function getSpendingSum($uid)
    {
        $map = array();
        $map[] = ['user_id', '=', $uid];
        $map[] = ['usage', '=', 3];
        $sum = UserFinance::where($map)->sum('money');
        return $sum;
    }

    //获得当前用户提现总和
    public function getCashSum($uid)
    {
        $map = array();
        $map[] = ['user_id', '=', $uid];
        $map[] = ['usage', '=', 6];
        $sum = UserFinance::where($map)->sum('money');
        return $sum;
    }

    public function getRewardsSum($uid)
    {
        $map = array();
        $map[] = ['user_id', '=', $uid];
        $map[] = ['usage', 'in', [4,5]];
        $sum = UserFinance::where($map)->sum('money');
        return $sum;
    }

    public function getFinance($order, $where, $pagesize)
    {
        $data = UserFinance::where($where)->order($order)
            ->paginate([
                'list_rows' => $pagesize,
                'query' => request()->param(),
            ]);
        $arr = $data->toArray();
        $paged = array();
        $paged['finances'] = $arr['data'];
        $paged['sum'] = UserFinance::where($where)->sum('money');
        $paged['page'] = [
            'total' => $arr['total'],
            'per_page' => $arr['per_page'],
            'current_page' => $arr['current_page'],
            'last_page' => $arr['last_page'],
            'query' => request()->param()
        ];
        return $paged;
    }

    public function buyChapter($chapter, $uid) {
        $price = isset($chapter['book']['money']) ? $chapter['book']['money'] : 0; //获得单章价格
        $this->balance = $this->getBalance($uid); //这里不查询缓存，直接查数据库更准确
        if ($price > $this->balance) { //如果价格高于用户余额，则不能购买
            return ['success' => 0, 'msg' => '余额不足'];
        } else {
            $userFinance = new UserFinance();
            $userFinance->user_id = $uid;
            $userFinance->money = $price;
            $userFinance->usage = 3;
            $userFinance->summary = '购买章节';
            $userFinance->save();

            $userBuy = new UserBuy();
            $userBuy->user_id = $uid;
            $userBuy->chapter_id = $chapter->id;
            $userBuy->book_id = $chapter->book_id;
            $userBuy->money = $price;
            $userBuy->summary = '购买章节';
            $userBuy->save();
        }
        Cache::clear('pay'); //删除缓存
        return ['success' => 1, 'msg' => '购买成功，等待跳转'];
    }
}