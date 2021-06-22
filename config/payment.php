<?php
return [
    'default' => [ //默认无支付模式
        'channel' => [
        ]
    ],
   'pay' => [ //彩虹易支付配置
       'appid' => '', //商户id
       'appkey' => '', //商户key
       'getway' => 'https://gateway.fun-pays.com/Pay/Index',
       'channel' => [
           ['code' => 'alipay', 'img' => 'alipay', 'title' => '支付宝'],
           ['code' => 'wxpay', 'img' => 'weixin', 'title' => '微信支付'],
           ['code' => 'qq', 'img' => 'qq', 'title' => 'QQ钱包']
       ]
   ],
    // 'pay' => [ //码支付配置
    //     'appid' => '', //商户id
    //     'appkey' => '', //商户key
    //     'getway' => '', //付款网关
    //     'channel' => [
    //         ['code' => 'alipay', 'img' => 'alipay', 'title' => '支付宝'],
    //         ['code' => 'wxpay', 'img' => 'weixin', 'title' => '微信支付'],
    //         ['code' => 'qq', 'img' => 'qq', 'title' => 'QQ钱包']
    //     ]
    // ],
//    'pay' => [ //支付宝官方支付配置
//        'appid' => '',
//        'getway' => 'https://openapi.alipay.com/gateway.do',
//        'appPublicKey' => '',
//        'appPrivateKey' => '',
//        'channel' => [
//            ['code' => '903', 'img' => 'alipay', 'title' => '支付宝'],
//        ]
//    ],
    'cash' => [ //代付配置
        'appid' => '', //商户id
        'appkey' => '', //商户key
        'getway' => '', //网关地址
        'bankName' => '', //银行名称
        'city' => '', //开户行城市
        'ifscCode' => '',
        'province' => '', //开户行省份
        'bankBranchName' => '', //支行名称
        'bankAccountName' => '', //开户人姓名
        'bankCardNum' => '', //银行卡号
    ],
    'returnUrl' => '',
    'kami' => [
        'url' => '' //卡密地址
    ],
    'vip' => [  //设置vip天数及相应的价格
        ['day' => 1, 'price' => 5, 'desc' => '日卡'],
        ['day' => 30, 'price' => 58, 'desc' => '月卡'],
        ['day' => 120, 'price' => 200, 'desc' => '季卡'],
        ['day' => 365, 'price' => 400, 'desc' => '年卡']
    ],
    'money' => [1, 5, 10, 30, 50], //设置支付金额
    'promotional_rewards_rate' => 0.1, //设置充值提成比例，必须是小数
    'sign_rewards' => 1, //签到奖励金额，单位是元
    'login_rewards' => 0, //登录奖励
    'reg_reward' => 0, //注册奖励
    'bind_phone_rewards' => 1, //绑定手机奖励
    'min_cash' => 99999999, //最小提现金额
    'max_cash' => 1000, //单次最大提现金额
];