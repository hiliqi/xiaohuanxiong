<?php


namespace app\api\controller;


use app\BaseController;
use app\model\FriendshipLink;
use think\db\exception\ModelNotFoundException;
use think\facade\Cache;

class Didi extends BaseController
{
    protected function verify($header)
    {
        $didi_token = $header['didi-token'];
        $didi_time = $header['didi-token-time'];
        $site_id = config('didi.siteid');
        $token = config('didi.token');

        if (strtolower($didi_token) == strtolower(md5($site_id . $token . $didi_time))) {
            return true;
        } else {
            return false;
        }
    }

    public function link()
    {
        $header = request()->header();
        $data = request()->param();
        $type = $data['type'];
        if ($type == 'insert_link') { //上链
            if ($this->verify($header)) {
                $srcUrl = rtrim($data['url'], '/') ;
                $url = $this->parse($srcUrl);
                try {
                    $link = FriendshipLink::where('url', 'in', [
                        'http://'.$url,'https://'.$url,'http://'.$url.'/','https://'.$url.'/'
                    ])->findOrFail();
                    return json(['code' => 0, 'msg' => '友链已存在']);
                } catch (ModelNotFoundException $exception) {
                    $title = $data['title'];
                    $link = new FriendshipLink();
                    $link->name = $title;
                    $link->url = $srcUrl;
                    $result = $link->save();
                    Cache::delete('friendshipLink');
                    if ($result) {
                        return json(['code' => 0, 'msg' => '上链成功']);
                    } else {
                        return json(['code' => 1, 'msg' => '上链失败']);
                    }
                }

            } else {
                return json(['code' => 1, 'msg' => '校验失败']);
            }

        } else if ($type == 'delete_link') { //下链
            if ($this->verify($header)) {
                $url = rtrim($data['url'], '/') ;
                $url = $this->parse($url);
                try {
                    $link = FriendshipLink::where('url', 'in', [
                        'http://'.$url,'https://'.$url,'http://'.$url.'/','https://'.$url.'/'
                    ])->findOrFail();
                    $link->delete();
                    Cache::delete('friendshipLink');
                    return json(['code' => 0, 'msg' => '删除成功']);
                } catch (ModelNotFoundException $exception){
                    return json(['code' => 0, 'msg' => '删除失败']);
                }

            } else {
                return json(['code' => 1, 'msg' => '校验失败']);
            }
        } else if ($type == 'auth') {
            $header = request()->header();
            $didi_token = $header['didi-token'];
            $didi_time = $header['didi-token-time'];
            $site_id = config('didi.siteid');
            $token = config('didi.token');

            if (strtolower($didi_token) == strtolower(md5($site_id . $token . $didi_time))) {
                return json(['code' => 0, 'msg' => '校验通过']);
            } else {
                return json(['code' => 1, 'msg' => '校验失败']);
            }
        } else if ($type == 'list') {
            if ($this->verify($header)) {
                $url = $data['url'];
                $url = $this->parse($url);
                $links = FriendshipLink::where('url', 'in', [
                    'http://'.$url,'https://'.$url,'http://'.$url.'/','https://'.$url.'/'
                ])->findOrFail();
                return json(['code' => 0, 'msg' => '获取友链列表成功', 'list' => $links]);
            } else {
                return json(['code' => 1, 'msg' => '校验失败']);
            }
        } else {
            return json(['code' => 1, 'msg' => '参数错误']);
        }
    }

    protected function parse($url){
        $query       = parse_url($url, PHP_URL_QUERY);
        $scheme      = parse_url($url, PHP_URL_SCHEME);
        $host        = parse_url($url, PHP_URL_HOST);
        $url         = parse_url($url, PHP_URL_HOST) . parse_url($url, PHP_URL_PATH);
        if ($query) $url .= '?' . $query;
        return $url;
    }
}