<?php


namespace app\service;

use app\model\User;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\facade\Cache;
use app\model\UserFinance;
class PromotionService
{
    public function rewards($uid, $money)
    {
        try {
            $user = User::findOrFail($uid);
            if ($user->pid > 0) {
                $rate = config('payment.promotional_rewards_rate');
                $userFinance = new UserFinance();
                $userFinance->user_id = $user->pid; //用户上线id
                $userFinance->usage = 4; //推广提成
                $userFinance->money = round($money * $rate, 2); //根据提成比率来计算出本次奖励金额
                $userFinance->summary = '下线用户' . $uid . '充值提成';
                $userFinance->save(); //存储用户充值数据
            }
            cache('rewards:' . $uid, null); //删除奖励缓存
            cache('rewards:sum:' . $uid, null); //删除奖励总和缓存
            Cache::clear('pay'); //清除支付缓存
            return json([ 'success' => 1 ]);
        } catch (DataNotFoundException $e) {
            return json([ 'success' => 0, 'msg' => $e->getMessage() ]);
        } catch (ModelNotFoundException $e) {
            return json([ 'success' => 0, 'msg' => $e->getMessage() ]);
        }
    }

    public function setReward($uid, $money, $usage, $summary) {
        $userFinance = new UserFinance();
        $userFinance->user_id = $uid;
        $userFinance->usage = $usage; //每日签到奖励
        $userFinance->money = $money;
        $userFinance->summary = $summary;
        $userFinance->save(); //存储用户充值数据
        cache('rewards:' . $uid, null); //删除奖励缓存
        cache('rewards:sum:' . $uid, null); //删除奖励总和缓存
        Cache::clear('pay'); //清除支付缓存
    }

    public function getRewardsHistory($uid)
    {
        $map = array();
        $map[] = ['user_id', '=', $uid];
        $map[] = ['usage', 'in', [4,5]]; //4为奖励记录
        $rewards = UserFinance::where($map)->paginate(
            [
                'list_rows'=> 10,
                'query' => request()->param(),
                'var_page' => 'page',
            ]);
        return $rewards;
    }

    public function getRewardsSum($uid)
    {
        $map = array();
        $map[] = ['user_id', '=', $uid];
        $map[] = ['usage', 'in', [4,5]];
        $sum = UserFinance::where($map)->sum('money');
        return $sum;
    }
}