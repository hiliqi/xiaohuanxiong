var regLog = function(){
	var time = 60;
	var tindex = null;
	var errhtml = '';
    var loghtml = '<div class="login-container"><div class="common-login-header icon-comm-flower2"><span class="title"tag="acgn-pop-ifr-title">用户登录</span><i class="icon-comm-close close icon-pop-comm-close"></i></div><div style="margin-top: -30px;"class="acgn-login"id="J_loginBox"><div class="acgn-bd acgn-form"><div class="acgn-form-box"id="J_account"><div class="acgn-form-item-line"><input class="acgn-form-item_input" id="logname" type="text" placeholder="请输入手机号/用户名" autocomplete="off"></div><div class="acgn-form-item-line"><div class="password"><input class="acgn-form-item_input" id="logpass" type="password" placeholder="请输入密码" autocomplete="off"></div></div></div><div class="acgn-hide"id="J_mobile"><div class="acgn-form-item-line"><input class="acgn-form-item_input" id="regtel" type="tel" placeholder="请输入手机号码" autocomplete="off">'; 
        if(Mcpath.istel == 0) loghtml += '<img title="点击刷新验证码" style="position: absolute;right: 0;top: 0;width: 105px;height: 48px;cursor: pointer;display: inline-block;" class="code_pic hide" src="">';
        loghtml += '</div><div class="acgn-form-item-line pic-code"><div class="verify-input" id="J_verifyInput"><input id="regpcode" class="acgn-form-item_input" type="text" maxlength="6" placeholder="请输入图形验证码" autocomplete="off">';
        if(Mcpath.istel == 0){
            loghtml += '<div class="user-operate"><div class="acgn-btn acgn-btn-primary acgn-btn-sm is-line btn-sendcode pcode-send" id="J_sendCode">短信验证</div></div>';
        }else{
            loghtml += '<img title="点击刷新验证码" style="position: absolute;right: 0;top: 0;width: 105px;height: 48px;cursor: pointer;display: inline-block;" class="code_pic hide" src="">';
        }
        loghtml += '</div></div><div class="acgn-form-item-line acgn-hide tel-code"><div class="verify-input"><input id="regtcode"class="acgn-form-item_input"type="text" maxlength="6" placeholder="请输入短信验证码" autocomplete="off"><div class="user-operate"><div class="acgn-btn acgn-btn-primary acgn-btn-sm is-line btn-sendcode tcode-send"data-status="false">重新获取</div></div></div></div><div class="acgn-form-item-line"><div class="password"><input class="acgn-form-item_input" id="regpass" type="password" placeholder="请输入密码"></div></div></div><div class="acgn-form-item acgn-tar acgn-mt8 acgn-mb16"><div class="acgn-btn is-txt switch-login"id="J_login_type"><span id="J_login_type_2"class="phone-action">没有账号？注册</span><span id="J_login_type_1"class="acgn-hide">已有账号？登录</span></div><a href="'+Mcpath.web+'index.php/user/login/pass"class="acgn-primary acgn-f14 pwd-forgot"id="J_forgetPassword">忘记密码</a></div><div class="acgn-form-item acgn-mb16 align-center margin-top-28"><div class="acgn-btn-login icon-comm-btn-love"id="J_login">登录</div><div class="acgn-btn-login icon-comm-btn-love acgn-hide"id="J_reg">注册</div></div></div><div class="acgn-ft acgn-tac"id="J_thirdLogin"><p class="acgn-gray">使用第三方账号登录</p><ul class="third-login"><li class="acgn-item sina"data-type="weibo"><i class="ift-sina"></i></li><li class="acgn-item qq"data-type="qq"><i class="ift-qq"></i></li><li class="acgn-item wechat"data-type="weixin"><i class="ift-wechat"></i></li></ul><p class="acgn-f12 login-agreement">登录代表你已阅读并同意<a class="acgn-primary">《用户协议》</a></p></div></div></div>';
    layer.open({
        type: 1,
        title: false,
        content: loghtml,
        shade: 0.8,
        closeBtn: 0,
        skin: 'transparent-bg',
        offset: '20%',
        area: ['400px', '586px'],
        success: function(layero, layerIdx) {
            mccms.index = layerIdx;
            if(mccms.get_cookie('pint') == 1){
                $('.title').hide();
                $('.piccode').show();
                $('.code_pic2').click();
            }
        }
    });
    //切换注册
    $('#J_login_type_2').click(function(){
		//显示图形验证码
		$('.code_pic').attr('src',Mcpath.web+'index.php/api/code').show();
        $('#J_account,#J_login_type_2,#J_login').addClass('acgn-hide');
        $('#J_mobile,#J_login_type_1,#J_reg').removeClass('acgn-hide');
    });
    //切换登陆
    $('#J_login_type_1').click(function(){
        $('#J_account,#J_login_type_2,#J_login').removeClass('acgn-hide');
        $('#J_mobile,#J_login_type_1,#J_reg').addClass('acgn-hide');
    });
    //提交登陆
    $('#J_login').click(function(){
    	var name = $('#logname').val();
    	var pass = $('#logpass').val();
        var pcode = $('#pcode2').val();
    	var is = $('.autobox input').prop("checked") ? 1 : 0;
    	if(name == ''){
            mccms.msg('请输入账号');
            $('#logname').focus();
    		return false;
    	}
        if(!(/^[\S]{6,16}$/.test(pass))){
            mccms.msg('密码必须6到16位，且不能出现空格');
            $('#logpass').focus();
    		return false;
    	}
        if(mccms.get_cookie('pint') == 1 && pcode == ''){
            mccms.msg('请输入验证码');
            $('#pcode2').focus();
            return false;
        }
		var index = mccms.layer.load();
		$.post(Mcpath.web+'index.php/api/user/login', {name:name,pass:pass,islog:is,pcode:pcode}, function(res) {
			mccms.layer.close(index);
            if(res.code == 1){
                mccms.del_cookie('pint');
            	mccms.user = res.user;
            	mccms.msg(res.msg,1);
                window.location.reload();
            }else{
                mccms.msg(res.msg);
                if(res.pcode == 1){
                    mccms.set_cookie('pint',1);
                    $('.piccode').show();
                    $('.code_pic2').click();
                }
        	}
        },'json');
    });
	//刷新验证码
	$('.code_pic,.code_pic2').click(function(){
		$(this).attr('src',Mcpath.web+'index.php/api/code?t='+Math.random());
	});
	//发送验证码
	$('.pcode-send').click(function(){
		var tel = $('#regtel').val();
		var pcode = $('#regpcode').val();
		if(!(/^1[3456789]\d{9}$/.test(tel))){
            mccms.msg('请输入正确的手机号');
            $('#regtel').focus();
    		return false;
		}
		if(pcode == ''){
            mccms.msg('请输入上面的图形验证码');
            $('#regpcode').focus();
    		return false;
		}
		//发送
		$.post(Mcpath.web+'index.php/api/code/tel_send/reg', {tel:tel,code:pcode}, function(res) {
            if(res.code == 1){
				$('.pic-code,.code_pic').addClass('acgn-hide');
				$('.tel-code').removeClass('acgn-hide');
				tindex = setInterval(function(){
					time--;
					if(time == 0){
						time = 60;
						window.clearInterval(tindex);
						$('.tcode-send').removeClass('disabled').attr('data-status','false').html('重新发送');
					}else{
						$('.tcode-send').addClass('disabled').attr('data-status','true').html(time+'S后重发');
					}
				},1000);
            }else{
                mccms.msg(res.msg,3,'#regpcode');
            }
        },'json');
	});
	//再次发送验证码
	$('.tcode-send').click(function(){
		var init = $(this).attr('data-status');
		if(init == 'false'){
			$('#regpcode,#regtcode').val('');
			$('.code_pic').attr('src',Mcpath.web+'index.php/api/code').show();
			$('.pic-code,.code_pic').removeClass('acgn-hide');
			$('.tel-code').addClass('acgn-hide');
		}
	});
	//注册提交
	$('#J_reg').click(function(){
		var tel = $('#regtel').val();
    	var code = $('#regtcode').val();
    	var pcode = $('#regpcode').val();
		var pass = $('#regpass').val();
    	if(!(/^1[3456789]\d{9}$/.test(tel))){
            mccms.msg('请输入正确手机号码');
            $('#regtel').focus();
    		return false;
    	}
    	if(Mcpath.istel == 0 && code == ''){
    		if($(".code_pic").css("display") == 'none'){
                mccms.msg('请输入手机验证码');
                $('#regtcode').focus();
    		}else{
                mccms.msg('请获取短信验证码');
                $('#regpcode').focus();
    		}
    		return false;
    	}
    	if(Mcpath.istel == 1 && pcode == ''){
            mccms.msg('请输入右边的图形验证码');
            $('#regpcode').focus();
            return false;
        }
        if(!(/^[\S]{6,16}$/.test(pass))){
            mccms.msg('密码必须6到16位，且不能出现空格');
            $('#regpass').focus();
    		return false;
    	}
		var index = mccms.layer.load();
		$.post(Mcpath.web+'index.php/api/user/reg', {tel:tel,pass:pass,code:code,pcode:pcode}, function(res) {
			mccms.layer.close(index);
            if(res.code == 1){
            	mccms.user = res.user;
            	mccms.msg(res.msg,1);
                window.location.reload();
            }else{
                mccms.msg(res.msg);
        		$('.code_pic').click();
        	}
        },'json');
    });
    //监听回车提交登陆
	$(document).keyup(function(e){
		if(e.keyCode ==13 && $('.login-container').length > 0){
            if($('#J_login_type_1').hasClass('acgn-hide')) {
				$('#J_login').click();
			}else{
				$('#J_reg').click();
			}
		}
	});
}
//热搜渲染
var rendHotSearch = function() {
	if($('#J_hotSearch').length > 0) {
        mccms.tpl('.hot-search-tpl','#J_hotSearch','api/comic/hot');
	}
    $('#J_searchKeywords').click(function(){
        $('#J_searchContent').show();
    });
    //监听回车提交搜索
    $(document).keyup(function(e){
        if(e.keyCode == 13 && $('#J_searchContent').css('display') == 'block'){
            $('#J_searchBtn').click();
        }
    });
    $('body').on("mouseover",".js_hot_list",function(){
        $('.search-item').removeClass('active');
        $(this).addClass('active');
    });
    $('body').click(function(event) {
        var that = $(event.target);
        if(!that.is('.search *')){
            $('#J_searchContent').hide();
        }
    });
    //搜索
    $('#J_searchBtn').click(function() {
        var k = $('#J_searchKeywords').val();
        if(k == ''){
            mccms.msg('请输入要搜索的关键字',3,'.search-input');
        }else{
            location.href = Mcpath.web+'index.php/search?key=' + k;
        }
    });
};
//观看记录
var rendRead = function() {
    $('#J_historyNone').show();
	$.post(Mcpath.web+'index.php/api/rend/history',{t:Math.random()}, function(res) {
        if(res.code == 1){
			if (res.data.length > 0) {
                var data = [];
                for (var i = 0; i < res.data.length; i++) {
                    if(i < 3) data.push(res.data[i]);
                }
      			mccms.laytpl($('.history-tpl').html()).render(data, function(str) {
        			$('#J_historyList').html(str);
                    $('#J_historyNone').hide();
                    $('#J_historyListBox').show();
      			});
    		}
        }
    },'json');
};
//收藏记录
var rendFav = function() {
    $('#J_bookNone').show();
	$.post(Mcpath.web+'index.php/api/rend/fav',{t:Math.random()}, function(res) {
        if(res.code == 1){
			if (res.data.length > 0) {
                var data = [];
                for (var i = 0; i < res.data.length; i++) {
                    if(i < 3) data.push(res.data[i]);
                }
      			mccms.laytpl($('.fav-tpl').html()).render(data, function(str) {
        			$('#J_bookshelfList').html(str);
                    $('#J_bookNone').hide();
                    $('#J_bookshelfBox').show();
      			});
    		}
        }
    },'json');
};
//章节列表
var get_Chapter = function(chapter_list) {
    get_chapterhtml(1);
	var pagejs = chapter_list.length/20,pagehtml = '',size = chapter_list.length>20 ? 20 : chapter_list.length;
    for (var i = 1; i < pagejs; i++) {
        var ks = i*20+1,js = ks+19;
        pagehtml+='<span class="page j_chapter_page" data-page="'+(i+1)+'">'+ks+'-'+js+'</span>';
    }
    $('.page-more-container').append(pagehtml);
    //列表页数切换
    $('body').on('click','.j_chapter_page',function(){
        $('.page-start,.page-last').removeClass('active');
        $('.btn-more').addClass('active');
        var page = $(this).data('page');
        get_chapterhtml(page);
    });
    //1-20话or最新20话
    $('.page-start,.page-last').click(function(){
        var page = $(this).data('page');
        if(page == 'end'){
            $('.btn-more,.page-start').removeClass('active');
        }else{
            $('.btn-more,.page-last').removeClass('active');
        }
        $(this).addClass('active');
        get_chapterhtml(page); 
    });
    //图文切换
    $('.swith-bar span').click(function(){
        $('.swith-bar span').removeClass('active');
        $(this).addClass('active');
        if($(this).html() == '文字'){
            $('#j_chapter_list').addClass('col-4').addClass('text').removeClass('col-5').removeClass('img-text');
            $('.acgn-model-detail-chapter .chapter-list .item .img').hide();
        }else{
            $('#j_chapter_list').removeClass('col-4').removeClass('text').addClass('col-5').addClass('img-text');
            $('.acgn-model-detail-chapter .chapter-list .item .img').show();
        }
    });
    //章节列表显示
    function get_chapterhtml(page){
        var chapterhtml = '';
        if(page == 'end'){
            var jsid = chapter_list.length,ksid = jsid-20;
        }else{
            var ksid = page == 1 ? 0 : (page-1)*20,jsid = ksid+20;
            if(jsid > chapter_list.length) jsid = chapter_list.length;
        }
        for (var i = ksid; i < jsid; i++) {
            var pay = chapter_list[i].vip > 0 || chapter_list[i].cion > 0 ? '<i class="j_chapter_badge ift-lock"></i>' : '<i class="j_chapter_badge"></i>';
            chapterhtml+='<li class="item"><a title="'+chapter_list[i].name+'" href="'+chapter_list[i].url+'"><div class="img"><img style="height:auto;" src="'+chapter_list[i].pic+'" alt="'+chapter_list[i].name+'"><i class="j_chapter_badge"></i></div><p class="name">'+pay+chapter_list[i].name+'</p></a></li>';
        }
        $('#j_chapter_list').html(chapterhtml);
        if($('.swith-bar .active').html() == '图文'){
            $('.acgn-model-detail-chapter .chapter-list.text .item .img').show();
        }
    }
}
//判断漫画是否收藏
var isCollect = function(mid) {
    mccms.isfav(mid,'','',function(res){
        if(res.code == 1){
            if($('.btn-collect').length > 0){
                $('.btn-collect').html('<span class="txt detail-collected">已收藏</span>');
            }
            if($('#collectionBtn').length > 0){
                $('#collectionBtn').addClass('active');
                $('#collectionStatusText,.fav-txt').html('已收藏');
            }
        }
    });
}
//收藏按钮
var bindCollectEvent = function() {
    $('body').on('click', '.btn-collect,#collectionBtn,.e-ending-collection', function() {
    	if(mccms.user.log == 0){
			regLog();
		}else{
	    	var mid = $(this).attr('data-id');
		    mccms.fav(mid,'','',function(res){
                if(res.code == 1){
                    var shits = parseInt($('.fav-num').data('hits'));
                    if(res.cid == 0){
                        if($('.btn-collect').length > 0){
                            $('.fav-num').html(mccms.get_wan(shits-1));
                            $('.btn-collect').html('<i class="icon-detail-head-collect"></i><span class="txt">收藏</span>');
                        }else{
                            $('#collectionBtn').removeClass('active');
                            $('#collectionStatusText,.fav-txt').html('收藏');
                        }
                    }else{
                        if($('.btn-collect').length > 0){
                            $('.fav-num').html(mccms.get_wan(shits+1));
                            $('.btn-collect').html('<span class="txt detail-collected">已收藏</span>');
                        }else{
                            $('#collectionBtn').addClass('active');
                            $('#collectionStatusText,.fav-txt').html('已收藏');
                        }
                    }
                }
            });
		}
    });
}
//赠送月票
var showTicket = function() {
    $('.uticket').html(mccms.get_wan(mccms.user.ticket));
    var ticketTpl = $('.ticket-box').html();
    layer.open({
        type: 1,
        closeBtn: 0,
        title: false,
        skin: 'transparent-bg',
        content: ticketTpl,
        area: ['400px', '545px'],
        success: function(layero, layerIdx) {
            mccms.index = layerIdx;
        }
    });
    //月票数量切换
    $('.ticket-item').click(function() {
        $('.ticket-input').val($(this).attr('data-num'));
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.ticket-del').click(function(){
    	var num = parseInt($('.ticket-input').val());
    	num--;
    	if(num < 1) num = 1;
    	$('.ticket-input').val(num);
    });
    $('.ticket-add').click(function(){
    	var num = parseInt($('.ticket-input').val());
    	num++;
    	$('.ticket-input').val(num);
    });
    $('.ticket__confirm').click(function(){
    	var mid = $(this).attr('data-mid');
    	mccms.ticket_send(mid,$('.ticket-input').val(),'',function(res){
            if(res.code == 1){
                mccms.layer.close(mccms.index);
                mccms.msg(res.msg,1);
                $('.uticket').html(mccms.get_wan(res.uticket));
                $('.ticket-num').html(mccms.get_wan(res.ticket));
            }else{
                mccms.msg(res.msg);
            }
        });
    });
}
//打赏礼物弹窗
var showGift = function() {
    $('.ucion').html(mccms.get_wan(mccms.user.cion));
    var giftTpl = $('.gift-box').html();
    layer.open({
        type: 1,
        closeBtn: 0,
        title: false,
        skin: 'transparent-bg',
        content: giftTpl,
        area: ['400px', '708px'],
        success: function(layero, layerIdx) {
            mccms.index = layerIdx;
        }
    });
    //礼物切换
    $('.gift__confirm').attr('data-id',$('.gift-item').eq(0).attr('data-id'));
    $('.gift__confirm').attr('data-cion',$('.gift-item').eq(0).attr('data-cion'));
    $('.gift-item').click(function() {
        $('.gift__confirm').attr('data-id',$(this).attr('data-id'));
        $('.gift__confirm').attr('data-cion',$(this).attr('data-cion'));
        $(this).addClass('active').siblings().removeClass('active');
    });
    //打赏礼物
    $('.gift__confirm').click(function() {
        if(mccms.user.log == 0){
            regLog();
        }else{
            var gid = $(this).attr('data-id');
            var mid = $(this).attr('data-mid');
            var cion = $(this).attr('data-cion');
            mccms.sendgift(mid,gid,'',function(res){
                if(res.code == 1){
                    mccms.layer.close(mccms.index);
                    mccms.msg(res.msg,1);
                    $('.ucion').html(mccms.get_wan(res.cion));
                    $('.cion-num').html(mccms.get_wan(res.mcion));
                }else{
                    mccms.msg(res.msg);
                }
            }); 
        }
    });
}
//评分
var get_Score = function(){
    var znum = $('.score-znum').html();
    $('.verygood').css('width',GetPercent($('.verygood-num').html(),znum));
    $('.good').css('width',GetPercent($('.good-num').html(),znum));
    $('.normal').css('width',GetPercent($('.normal-num').html(),znum));
    $('.adjective').css('width',GetPercent($('.adjective-num').html(),znum));
    $('.bad').css('width',GetPercent($('.bad-num').html(),znum));
    var scoreTpl = $('.score-box').html();
    layer.open({
        type: 1,
        closeBtn: 0,
        title: false,
        skin: 'transparent-bg',
        content: scoreTpl,
        area: ['445px', '510px'],
        success: function(layero, layerIdx) {
            mccms.index = layerIdx;
        }
    });
    //选择评分数
    $('.mark-star .star').hover(function(){
        var n = parseFloat($(this).index())+1;
        get_cls(n);
        $('.mark-star').attr('data-score',n*2);
        $('.score-fen').html(n*2);
    },function(){
        get_cls(0);
        $('.mark-star').attr('data-score','0');
        $('.score-fen').html('0');
    });
    //评分
    $('.mark-star .star').click(function() {
        if(mccms.user.log == 0){
            regLog();
        }else{
            var mid = $(this).parents().attr('data-mid');
            var score = $(this).parents().attr('data-score');
            mccms.score_send(mid,(score/2),function(res){
                mccms.layer.close(mccms.index);
                mccms.msg(res.msg,res.code);
            });
        }
    });
    function get_cls(n){
        $('.mark-star .star').each(function(){
            var index = $(this).index();
            if(index < n){
                $(this).addClass('solid');
            }else{
                $(this).removeClass('solid');
            }
        });
    }
    //计算百分比
    function GetPercent(num, total) {
        num = parseFloat(num);
        total = parseFloat(total);
        if (isNaN(num) || isNaN(total)) {
            return "-";
        }
        var bi = total <= 0 ? 0 : (Math.round(num / total * 10000) / 100.00)*0.6;
        return bi+'%';
    }
}
//分享
var get_Share = function(){
    var shareTpl = $('.share-box').html();
    layer.open({
        type: 1,
        closeBtn: 0,
        title: false,
        skin: 'transparent-bg',
        content: shareTpl,
        area: ['445px', '510px'],
        success: function(layero, layerIdx) {
            mccms.index = layerIdx;
        }
    });
    //复制链接
    var clipboard = new Clipboard('.share-copy');
    $('.sharebox li').click(function(){
        var ac = $(this).data('cmd');
        get_fxlink(ac);
    });
    //计算百分比
    function get_fxlink(ac){
        var link = encodeURIComponent(window.location.href);
        var title = encodeURIComponent(document.title);
        var pic = encodeURIComponent($('.acgn-share').data('pic'));
        if(ac == 'qq'){
            var url = 'https://connect.qq.com/widget/shareqq/index.html?url='+link+'&title='+title+'&source='+title+'&desc='+title+'&pics='+pic+'&summary='+title;
            window.open(url, "_blank");
        }else if(ac == 'sina'){
            var url = 'https://service.weibo.com/share/share.php?url='+link+'&title='+title+'&pic='+pic+'&appkey=#_loginLayer_1613907877214';
            window.open(url, "_blank");
        }else if(ac == 'qzone'){
            var url = 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+link+'&title='+title+'&desc='+title+'&summary='+title+'&site='+title+'&pics='+pic;
            window.open(url, "_blank");
        }else if(ac == 'wechat'){
            var html = '<div class="acgn-share-qrcode-wrap js_share_qrcode_wrap" style="width: 200px;margin: -150px 0px 0px -100px;display: block;padding: 10px;border: 1px solid #f5f5f5;position: fixed;left: 50%;top: 50%;z-index: 20000000;color: #999;font-size: 12px;text-align: center;background-color: #fff;border-radius: 4px;box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);transition: all 200ms;"><h4 class="acgn-share-title">微信扫一扫：分享</h4><div class="acgn-share-close js_share_qrcode_close" style="position: absolute;right: 0;top: 0;width: 35px;height: 35px;line-height: 1;padding: 5px 5px 0 0;font-size: 16px;color: #ddd;text-align: right;cursor: pointer;">×</div><div class="acgn-share-qrcode js_share_qrcode" style="width:128px;margin: 0 auto;"><img alt="Scan me!" src="https://api.pwmqr.com/qrcode/create/?url='+link+'" style="display: block;width: 100%;"></div><div class="acgn-share-help"><p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p></div></div>';
            $('body').append(html);
            mccms.layer.close(mccms.index);
            $('body').on("click",".js_share_qrcode_close",function(){
                $('.js_share_qrcode_wrap').remove();
            });
        }else{
            clipboard.on('success',function(e) {
                mccms.layer.close(mccms.index);
                e.clearSelection();
                mccms.msg('复制成功',1);
            });
            clipboard.on('error',function(e) {
                mccms.msg('复制失败');
            });
        }
    }
}
//评论
var get_comment = function(_mid){
    var page = 1;
	//显示列表
	mccms.comment(_mid,page,function(res){
        if(res.code == 1){
            if(res.html == ''){
                $('#js_comment_noinfo p').html('暂时还没有评论哦~');
                $('#js_comment_noinfo').show();
            }else{
                $('#js_comment_noinfo').hide();
                $('#js_comment_hotest').html(res.html);
                if($('.comment-list-item').length == 10){
                    $('#js_comment_more_box').show();
                }
            }
        }
    });
	//监听评论点击
    $('.textarea-pl').click(function(){
    	if(mccms.user.log == 0){
			regLog();
		}
        $('.reply-box').hide();
    });
    //监听输入框文字数量
    $('.textarea-pl').keyup(function(){
        var txtLeng = $(this).val().length;
        if( txtLeng > 500 ){  
            $('.pl-input-num').text('500/500');
            var fontsize = $(this).val().substring(0,500);
            $(this).val(fontsize);
        }else{
            $('.pl-input-num').text(txtLeng+'/500');  
        }
    });
    $('body').on("keyup",".textarea-reply",function(){
        var txtLeng = $(this).val().length;
        if( txtLeng > 500 ){  
            $('.reply-input-num').text('500/500');
            var fontsize = $(this).val().substring(0,500);
            $(this).val(fontsize);
        }else{
            $('.reply-input-num').text(txtLeng+'/500');  
        }
    });
    //回复框
    $('body').on("click",".comment-ift-reply",function(){
    	if(mccms.user.log == 0){
			regLog();
		}else{
            $('.reply-box').hide();
            $('.textarea-reply').val('');
            $('.reply-input-num').text('0/500');
	    	var id = $(this).attr('data-id');
	    	$('#reply-box-'+id).toggle();
	    }
    });
    //提交评论
    $('.js_submit_pl').click(function(){
    	if(mccms.user.log == 0){
			regLog();
		}else{
	    	var text = $('.textarea-pl').val().replace(/<.*?>/g,"");
	    	if(text == '') {
	    		mccms.msg('请输入评论内容');
	    	}else{
	    		mccms.comment_send(_mid,text,0,0,function(res){
                    mccms.msg(res.msg,res.code);
                    if(res.code == 1){
                        var d = new Date();
                        var time = d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate();
                        var html = '<li class="comment-list-item" data-reply="0" data-commentid="'+res.pid+'"><div class="comment-avatar"><div class="comment-figure"><img src="'+Mcpath.tpl+'images/space.gif" alt="'+mccms.user.nichen+'" style="background: url(\''+mccms.user.pic+'\') center center / cover no-repeat; opacity: 1;"></div></div><div class="comment-content"><div class="comment-bars"><div class="comment-reply-support"><i class="comment-ift-support js_comment_support" data-id="'+res.pid+'" data-fid="0"></i><span class="comment-support-num" id="js_support_num_'+res.pid+'"> 0</span><span class="js_comment_replay theme4" data-id="'+res.pid+'"><i class="comment-ift-reply"></i><span> 回复</span></span><span class="comment-replay-num" style="display:none;"> 0</span></div></div><div class="comment-user"><span class="comment-nickname">'+mccms.user.nichen+'</span></div><time class="comment-time"><i class="comment-ift-time"></i> '+time+'</time><div class="comment-issue"><p>'+text+'</p></div><div class="comment-textarea-box reply-box" id="reply-box-'+res.pid+'" style="display:none;"><div class="comment-textarea-box-bd"><textarea class="comment-textarea textarea-reply" maxlength="500" placeholder="有事没事说两句..."></textarea><span class="comment-input-num reply-input-num">0/500</span></div><div class="comment-textarea-box-ft"><button class="comment-submit js_submit_comment js_submit_reply" data-fid="'+mccms.user.id+'" data-cid="'+res.pid+'" type="button">吐槽一下</button></div></div></div></li>';
                        $('#js_comment_hotest').prepend(html);
                        $('.textarea-pl').val('');
                        $('#js_comment_noinfo').hide();
                        $('#js_comment_number').html(parseInt($('#js_comment_number').text())+1);
                    }
                });
	    	}
	    }
    });
    //提交回复
    $('body').on("click",".js_submit_reply",function(){
    	if(mccms.user.log == 0){
			regLog();
		}else{
	    	var cid = $(this).attr('data-cid');
	    	var fid = $(this).attr('data-fid');
	    	var text = $('#reply-box-'+cid+' .textarea-reply').val().replace(/<.*?>/g,"");
	    	if(text == '') {
	    		mccms.msg('请输入回复内容');
	    	}else{
	    		mccms.comment_send(_mid,text,cid,fid,function(res){
                    mccms.msg(res.msg,res.code);
                    if(res.code == 1){
                        var d = new Date();
                        var time = d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate();
                        var html = '<div style="border-bottom: 1px solid #d8d8d861;padding: 10px 0;"><div class="comment-bars"><div class="comment-reply-support"><i class="comment-ift-support js_comment_support" data-id="'+res.pid+'" data-fid="1"></i><span class="comment-support-num" id="js_support_num_'+res.pid+'"> 0</span></div></div><div class="comment-user"><div class="comment-figure" style="width: 25px;height: 25px;display: inline-block;vertical-align: middle;"><img src="'+Mcpath.tpl+'images/space.gif" alt="'+mccms.user.nichen+'" style="background: url(\''+mccms.user.pic+'\') center center / cover no-repeat; opacity: 1;"></div><span class="comment-nickname">'+mccms.user.nichen+'</span><span class="comment-time" style="margin-left:20px;"><i class="comment-ift-time"></i> '+time+'</span></div><div class="comment-issue"><p>'+text+'</p></div></div>';
                        $('#reply-list-'+cid).prepend(html).show();
                        $('#reply-box-'+cid+' .textarea-reply').val('');
                        $('#js_comment_noinfo').hide();
                    }
                });
	    	}
	    }
    });
    //监听赞评论
    $('body').on("click",".js_comment_support",function(){
    	if(mccms.user.log == 0){
			regLog();
		}else{
	    	var id = $(this).attr('data-id');
	    	var fid = $(this).attr('data-fid');
	    	var _this = $(this);
			$.post(Mcpath.web+'index.php/api/comment/zan', {id:id,fid:fid}, function(res) {
				if(res.code == 2){
					regLog();
	            } else if(res.code == 1){
	            	if(res.zt == 0){
                        mccms.msg('取消点赞成功',-1);
	            		$(_this).removeClass('comment-ift-supported').addClass('comment-ift-support');
	            	}else{
                        mccms.msg('点赞成功',-1);
	            		$(_this).addClass('comment-ift-supported').removeClass('comment-ift-support');
	            	}
	            	$('#js_support_num_'+id).html(res.zan);
	            }else{
	            	mccms.msg(res.msg);
	            }
	        },'json');
		}
    });
    //加载更多评论
    $('body').on("click","#js_comment_more",function(){
        page++;
        mccms.comment(_mid,page,function(res){
            if(res.code == 1){
                if(res.html == ''){
                    $('#js_comment_more_box').hide();
                }else{
                    $('#js_comment_hotest').append(res.html);
                }
            }else{
                mccms.msg(res.msg);
            }
        });
    });
}
//阅读页
var readPic = function(mid,cid,vip,cion){
    isCollect(mid);
    var pnow = 1,pid = mccms.get_cookie('pid'),slider = layui.slider,width = 800,bi = 100,qp = 0,gindex = null;
    var slink = $('#js_pagePrevBtn').attr('_href');
    var xlink = $('#js_pageNextBtn').attr('_href');
    if(slink == '') $('#js_pagePrevBtn').addClass('disabled');
    if(xlink == '') $('#js_pageNextBtn').addClass('disabled');
    var znum = parseInt($('.acgn-reader-chapter__swiper-box').length);
    var pheight = $('.pic-index-1 img').height();
    if(pheight > 764){
        $('#js_swichH').addClass('disabled');
        mccms.set_cookie('pmode','2');
    }
    //默认滑块
    var ins1 = slider.render({
        elem: '#js_pageProgress',
        tips: false,
        disabled: true
    });
    //判断VIP
    if(vip > 0 || cion > 0){
        if(mccms.user.log == 0){
            regLog();
        }else{
            if(cion > 0 || vip > 0){
                get_buy();
            } else {
                pic_show();
            }
        }
    }else{
        pic_show();
    }
    //全屏
    $('#scaleFullscreenBtn').click(function(){
        if(qp == 0){
            qp = 1;
            FullScreen();
        }else{
            qp = 0;
            exitFullscreen();
        }
    });
    //监听Esc退出全屏
    document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==27 && qp == 1){
            qp = 0;
            exitFullscreen();
        }
    };
    //图片宽度加减
    $('#scaleReduceBtn').click(function(){
        bi = bi-10;
        if(bi < 50) bi = 50;
        width = ((bi-100)/10*80)+800;
        $('#reader-scroll').css('width',width+'px');
        var txt = bi == 100 ? '默认' : bi+'%';
        $('#scaleStatusText').html(txt);
    });
    $('#scaleAddBtn').click(function(){
        bi = bi+10;
        if(bi > 150) bi = 150;
        width = ((bi-100)/10*80)+800;
        $('#reader-scroll').css('width',width+'px');
        var txt = bi == 100 ? '默认' : bi+'%';
        $('#scaleStatusText').html(txt);
    });
    //上一话
    $('#js_pagePrevBtn').click(function(){
        if(!$(this).hasClass('disabled')) get_prev();
    });
    //下一话
    $('#js_pageNextBtn').click(function(){
        if(!$(this).hasClass('disabled')) get_next();
    });
    //开关灯
    $('#js_dayMode,#js_nightMode').click(function(){
        if(!$('#readerContainer').hasClass('night')) {
            $('#readerContainer').addClass('night');
            $('#js_dayMode').hide();
            $('#js_nightMode').show();
            mccms.set_cookie('night','2');
        }else{
            $('#readerContainer').removeClass('night');
            $('#js_dayMode').show();
            $('#js_nightMode').hide();
            mccms.set_cookie('night','1');
        }
    });
    //自动滚动
    $('#js_ftAutoBtn').click(function(){
        if(!$(this).hasClass('disabled')) {
            if(!$(this).hasClass('active')) {
                $(this).addClass('active');
                var top = $('#readerContainer').scrollTop();
                gindex = setInterval(function(){
                    top++;
                    $('#readerContainer').scrollTop(top);
                },20);
            }else{
                $(this).removeClass('active');
                clearInterval(gindex);
            }
        }
    });
    //左右翻页
    $('#js_swichH').click(function() {
        if(!$(this).hasClass('disabled')) {
            $(this).addClass('hide');
            $('#js_swichV').removeClass('hide');
            mccms.set_cookie('pmode','1');
            page_pic_show();
        }
    });
    //上下滚动
    $('#js_swichV').click(function() {
        $(this).addClass('hide');
        $('#js_swichH').removeClass('hide');
        mccms.set_cookie('pmode','2');
        Look_pic_show();
    });
    //猜你喜欢显隐
    $('#js_guessSidebarBtn').click(function(){
        if(!$('#js_guessSidebar').hasClass('sidebar-show')) {
            $('#js_guessSidebar').addClass('sidebar-show');
        }else{
            $('#js_guessSidebar').removeClass('sidebar-show');
        }
    });
    $('#sidebarList li').hover(function(){
        $('#sidebarMain').css('right','-294px');
    },function(){
        $('#sidebarMain').css('right','0px');
    })
    //离开前获取离开时间和已读图片数量
    window.onbeforeunload = function () {
        mccms.read(mid,cid,pid);
    }
    //鼠标移到置顶30显示头部
    $('body').mousemove(function(e) { 
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var scroll = $(window).scrollTop() + $(window).height();
        var Y = e.pageY-scrollTop;
        var D = scroll - e.pageY;
        if(Y < 100 || D < 100){
            $('#js_footMenu,#js_headMenu').addClass('show');
        }else{
            $('#js_footMenu,#js_headMenu').removeClass('show');
            if(!$('#js_btnCatalog').hasClass('active')) {
                $('#js_chapterCatalog').removeClass('show');
            }
        }
    });
    //章节显示隐藏
    mccms.tpl('.rd-catalog-tpl','#js_catalogList','api/comic/chapter',{mid:mid});
    var list = $('#js_catalogList');
    list.append(list.find('li').get().reverse());
    $('#js_catalogBtn').click(function() {
        if($(this).hasClass('order-reverse')) {
            $(this).removeClass('order-reverse');
            $('#js_catalogText').html('升序');
        } else {
            $(this).addClass('order-reverse');
            $('#js_catalogText').html('倒序');
        }
        var list = $('#js_catalogList');
        list.append(list.find('li').get().reverse());
    })
    $('#js_btnCatalog').hover(function(){
        $('#js_catalogList li').removeClass('active');
        $('.chapterid-'+cid).addClass('active');
        $('#js_btnCatalog').addClass('active');
        $('#js_chapterCatalog').addClass('show');
    },function(){
        $('#js_btnCatalog').removeClass('active');
        $('#js_chapterCatalog').removeClass('show');
    });
    //显示图片方式
    function pic_show(){
        if(!pid || $('#pic_'+pid).length == 0) pid = $('.acgn-reader-chapter__item').eq(0).attr('data-pid');
        pnow = $('#pic_'+pid).attr('data-index')-1;
        if(mccms.get_cookie('night') == '2'){
            $('#readerContainer').addClass('night');
            $('#js_dayMode').hide();
            $('#js_nightMode').show();
            $('.ending-main .msg').css('color','#aaa');
        }
        if(mccms.get_cookie('pmode') == '1'){
            page_pic_show();
        }else{
            Look_pic_show();
        }
    }
    //翻页模式
    function page_pic_show(){
        $('#js_ftAutoBtn').addClass('disabled');
        $('#js_swichH').addClass('hide');
        $('#js_swichV').removeClass('hide');
        var h = document.documentElement.clientHeight || document.body.clientHeight;
        $('#reader-scroll').css('width','1200px');
        $('.pic-box').css('max-width','600px').css('height',h+'px').hide();
        $('.acgn-chapter__interact').css('height',h/1.6+'px');
        $('.acgn-chapter__interact,#pic_'+pid).css('display','inline-block');
        $('.acgn-reader-chapter__swiper-btns').show();
        pnow = $('#pic_'+pid).data('index');
        $('.j-pg-index').html(pnow);
        ins1.setValue(parseInt(pnow/znum*100));
        //上一章
        $('#jsPrev').click(function(){
            if(pnow > 1){
                $('.pic-index-'+pnow).hide();
                pnow--;
                $('.pic-index-'+pnow).css('display','inline-block');
                pid = $('.pic-index-'+pnow).data('pid');
                $('.j-pg-index').html(pnow);
                mccms.set_cookie('pid',pid);
                ins1.setValue(parseInt(pnow/znum*100));
            }else{
                get_prev();
            }
        });
        //下一章
        $('#jsNext').click(function(){
            if(pnow < znum){
                $('.pic-index-'+pnow).hide();
                pnow++;
                $('.pic-index-'+pnow).css('display','inline-block');
                pid = $('.pic-index-'+pnow).data('pid');
                $('.j-pg-index').html(pnow);
                mccms.set_cookie('pid',pid);
                ins1.setValue(parseInt(pnow/znum*100));
            }else{
                get_next();
            }
        });
    }
    //上下滚动模式
    function Look_pic_show(){
        $('#js_ftAutoBtn').removeClass('disabled');
        $('.acgn-reader-chapter__swiper-btns').hide();
        $('#js_swichH').removeClass('hide');
        $('#js_swichV').addClass('hide');
        $('#reader-scroll').css('width','800px');
        $('.pic-box').css('width','100%').css('max-width','100%').css('height','auto').show();
        $('.acgn-chapter__interact').hide();
        if($('#pic_'+pid).length > 0 && pnow > 1){
            setTimeout(function() {
                $("#readerContainer").animate({
                    scrollTop: $('#pic_'+pid).offset().top+"px"
                },500);
                var index = $('#pic_'+pid).data('index');
                ins1.setValue(parseInt(index/znum*100));
            },500);
        }
    }
    //页面滚动
    $('#readerContainer').scroll(function () {
        var scrollTop = $(this).scrollTop();
    　　var scrollHeight = $('#reader-scroll').height();
    　　var windowHeight = $(window).height();
        if(scrollTop < 50){
            $('#js_footMenu,#js_headMenu').addClass('show');
        }else if(!gindex){
            $('#js_footMenu,#js_headMenu').removeClass('show');
            if(!$('#js_btnCatalog').hasClass('active')) {
                $('#js_chapterCatalog').removeClass('show');
            }
        }
        //下拉模式重置图片页数
        if(mccms.get_cookie('pmode') != '1'){
            //到达页面顶部
            if(scrollTop == 0){
                setTimeout(function() {
                    get_prev();
                },1000);
            }
            //到达页面底部
            if(scrollHeight == (scrollTop + windowHeight)){
                setTimeout(function() {
                    get_next();
                },1000);
            }
            $('.acgn-reader-chapter__item').each(function(index){
                var a = $(this).offset().top;
                if(a >= $('#readerContainer').scrollTop() && a < ($('#readerContainer').scrollTop() + $('#readerContainer').height())) {
                    pnow = $(this).attr('data-index');
                    pid = $(this).attr('data-pid');
                    $('.j-pg-index').html(pnow);
                    mccms.set_cookie('pid',pid);
                    ins1.setValue(parseInt(pnow/znum*100));
                }
            });
        }
    });
    //上一话
    function get_prev(){
        mccms.del_cookie('pid');
        if(slink == ''){
            mccms.msg('没有上一话了');
        }else{
            window.location.href = slink;
        }
    }
    //下一话
    function get_next(){
        mccms.del_cookie('pid');
        if(xlink == ''){
            $('.acgn-chapter__interact').css('width','100%');
            $('.acgn-chapter__interact,.ending-main').show();
        }else{
            window.location.href = xlink;
        }
    }
    //收费章节
    function get_buy(){
        $('.ucion').html(mccms.get_wan(mccms.user.cion));
        $.post(Mcpath.web+'index.php/api/comic/isbuy', {id:cid}, function(res) {
            if(res.code == 2){
                regLog();
            } else if(res.code == 1){
                var parr = res.pic,html='';
                for (var i = 0; i < parr.length; i++) {
                    html += '<div id="pic_'+parr[i]['id']+'" style="width:auto" class="acgn-reader-chapter__item left pic-index-'+(i+1)+' pic-box" data-pid="'+parr[i]['id']+'" data-index="'+(i+1)+'"><div class="acgn-reader-chapter__swiper-box">'+(i+1)+'<img src="'+parr[i]['img']+'" style="width:100%;"></div></div>';
                }
                $('#reader-scroll .loading').remove();
                $('.acgn-reader-chapter__item-box').before(html);
                pic_show();
            } else if(res.code == 3){
                if(res.type == 'cion' && mccms.get_cookie('pay') == mid){
                     buy_pay();
                 }else{
                    mccms.layer.open({
                        type: 1,
                        closeBtn: 0,
                        title: false,
                        content: $('.pay-box').html(),
                        shade: 0.6,
                        skin: 'transparent-bg',
                        area: ['400px', '586px'],
                        success: function(layero, layerIdx) {
                            mccms.index = layerIdx;
                        }
                    });
                    //自动购买下一章
                    $('body').on("click","#js_autoBuy",function(){
                        if(!$(this).hasClass('active')) {
                            $(this).addClass('active');
                        }else{
                            $(this).removeClass('active');
                        }
                    });
                    //购买章节
                    $('body').on("click","#js_payChapterBuy",function(){
                        if(res.type == 'cion'){
                            buy_pay();
                        }else{
                            Pay_Show('vip');
                        }
                    });
                }
            }else{
                mccms.msg(res.msg);
            }
        });
    }
    //购买章节
    function buy_pay(){
        var index = mccms.layer.load();
        var auto = ($('#js_autoBuy').hasClass('active') || mccms.get_cookie('pay') == mid) ? 1 : 0;
        $.post(Mcpath.web+'index.php/api/comic/buy', {id:cid,auto:auto}, function(res) {
            mccms.layer.close(index);
            if(res.code == 2){
                regLog();
            } else if(res.code == 3){
                Pay_Show('jb');
            } else if(res.code == 1){
                //判断自动购买下一章
                if(auto == 1) mccms.set_cookie('pay',mid);
                window.location.reload();
            }else{
                mccms.msg(res.msg);
            }
        },'json');
    }
    //进入全屏
    function FullScreen() {
        var ele = document.documentElement;
        if (ele .requestFullscreen) {
            ele .requestFullscreen();
        } else if (ele .mozRequestFullScreen) {
            ele .mozRequestFullScreen();
        } else if (ele .webkitRequestFullScreen) {
            ele .webkitRequestFullScreen();
        }
    }
    //退出全屏
    function exitFullscreen() {
        var de = document;
        if (de.exitFullscreen) {
            de.exitFullscreen();
        } else if (de.mozCancelFullScreen) {
            de.mozCancelFullScreen();
        } else if (de.webkitCancelFullScreen) {
            de.webkitCancelFullScreen();
        }
    }
}
//充值
var Pay_Show = function(type){
    var payhtml = '<div class="acgn-gift-dialog acgn-pay__box"><div class="hd icon-comm-flower2"><i class="icon-comm-bow"></i><i class="icon-comm-close icon-pop-comm-close close" id="js_payClose"></i></div><div class="bd" style="width: 700px;"><div id="dialog-pay"><div class="j-dialog-pay dialog-pay"lay-filter="dialog-pay"><div class="j-pay-header dialog-pay_header"><div class="j-user-name dialog-pay_header--username">{{d.unichen}}</div><div class="dialog-pay_header--foundinfo"><span class="j-user-gold">{{d.ucion}}</span>{{d.cion_name}}<em>|</em><span class="j-user-ticket">{{d.ticket}}</span>月票</div></div><div class="j-pay-close dialog-pay_header--close"><i class="iconfont icon-ic_buy_toast_close"></i></div><!--tab--><div class="dialog-pay_body layui-tab layui-tab-brief layui-tab-mkz"><!--tab-title--><ul class="j-tab-title dialog-pay_body--tab-title layui-tab-title"><li data-type="jb"class="layui-this">充值{{d.cion_name}}</li><li data-type="yp">购买月票</li><li data-type="vip">购买VIP</li></ul><div class="dialog-pay_body--tab-body"><!--全部列表--><div class="j-tab-content"><div class="j-paytype-item"><div class="j-paytype-jb item_row hide"><h3 class="item--title"><i class="item--title-icon"></i>购买项目<span class="item--pay-tip">（充值比例：1元={{d.rmb_cion}}{{d.cion_name}}，充值数量：必须是10的整数倍）</span></h3><ul class="item--content clearfix">{{#layui.each(d.pay.cion,function(index,item){}}<li class="j-item-btn item--btn cion-btn{{ index == 0 ? \' active\' : \'\' }}"data-cion="{{item.cion}}"data-rmb="{{item.rmb}}"><p>{{item.cion}}{{d.cion_name}}</p><p class="item--price">￥{{item.rmb}}</p><i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"{{index>0?\' style="display: none;"\':\'\'}}></i></li>{{#})}}<li class="j-item-btn item--btn item--btn-input cion-btn"data-cion="0"data-rmb="0"><input class="j-item-input item--input cion-input" type="text" value="" placeholder="其他金额" autocomplete="off" oninput="value=value.replace(\/[^\\d]\/g,\'\')"><i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"style="display: none;"></i></li></ul></div><!--月票--><div class="j-paytype-yp item_row hide"><h3 class="item--title"><i class="item--title-icon"></i>购买项目<span class="item--pay-tip">（购买比例：1元={{d.rmb_cion}}{{d.cion_name}}）</span></h3><ul class="item--content clearfix">{{#layui.each(d.pay.ticket,function(index,item){}}<li class="j-item-btn item--btn yp-btn{{ index == 0 ? \' active\' : \'\' }}"data-num="{{item.num}}"data-rmb="{{item.rmb}}"data-cion="{{item.cion}}"><p>{{item.num}}张月票</p><p class="item--price">￥{{item.rmb}}</p><i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"{{index>0?\' style="display: none;"\':\'\'}}></i></li>{{#})}}<li class="j-item-btn item--btn item--btn-input yp-btn"data-num="0"data-rmb="0"data-cion="0"><input class="j-item-input item--input yp-input" type="text" value="" placeholder="其他数量" autocomplete="off" oninput="value=value.replace(\/[^\\d]\/g,\'\')"><i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"style="display: none;"></i></li></ul></div><!--VIP--><div class="j-paytype-vip item_row hide"><h3 class="item--title"><i class="item--title-icon"></i>购买项目<span class="item--pay-tip">（购买比例：1元={{d.rmb_cion}}{{d.cion_name}}）</span></h3><ul class="item--content clearfix"id="vip_product_list">{{#layui.each(d.pay.vip,function(index,item){}}<li class="j-item-btn item--btn vip-btn{{ index == 0 ? \' active\' : \'\' }}"data-day="{{item.day}}"data-rmb="{{item.rmb}}"><p>{{item.name}}</p><p class="item--price">￥{{item.rmb}}</p><p class="item--recome">{{item.txt}}</p><i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"{{index>0?\' style="display: none;"\':\'\'}}></i></li>{{#})}}</ul></div></div><!--支付方式--><div class="item_row"><h3 class="item--title"><i class="item--title-icon"></i>支付方式</h3><ul class="item--content clearfix paytype-box"><li class="j-paytype-btn item--paytype-btn paytype-cionpay hide"data-pay-type="cion"><i class="iconfont item--pay-icon icon-ic_toast_yb"></i>{{d.cion_name}}支付<i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"style="display: none;"></i></li><li class="j-paytype-btn item--paytype-btn paytype-wxpay{{ d.pay.is_wxpay == 1 ? \' hide\' : \'\' }}"data-pay-type="wxpay"><i class="item--pay-icon iconfont icon-ic_buytoast_wx"></i>微信支付<i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"style="display: none;"></i></li><li class="j-paytype-btn item--paytype-btn paytype-alipay{{ d.pay.is_alipay == 1 ? \' hide\' : \'\' }}"data-pay-type="alipay"><i class="item--pay-icon iconfont icon-ic_buytoast_zfb"></i>支付宝支付<i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"style="display: none;"></i></li><li class="j-paytype-btn item--paytype-btn paytype-qqpay{{ d.pay.is_qqpay == 1 ? \' hide\' : \'\' }}"data-pay-type="qqpay"><i class="item--pay-icon iconfont icon-ic_buytoast_qq"></i>QQ钱包支付<i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"style="display: none;"></i></li></ul></div><!--应付金额--><div class="item_row"><span class="item--inline-title">应付金额：</span><span class="item--found"><strong class="j-pay-num item--num">10</strong><em class="pay_ext">元</em></span><!--提醒信息--><span class="j-pay-warning item--warning hide"style="display: none;">{{d.cion_name}}不足，请修改支付方式或<strong class="j-go-gold item--link">充值{{d.cion_name}}</strong></span><!--qrcode--><iframe src=""id="j-alipay-qrcode"class="qrcode-alipay"width="120"height="120"frameborder="0"scrolling="no"></iframe></div><!--按钮--><div class="item_row"><!--disabled--><div class="j-pay-btn item_pay-btn layui-btn layui-btn-danger">确认支付</div></div></div></div></div></div></div></div></div>';
    var rmb_cion = 1,cion_name = '金币',pindex = null;
    var post = {type:'cion',rmb:0,day:0,num:0,pay:''};
    var index = mccms.layer.load();
    $.post(Mcpath.web+'index.php/api/pay', {t:Math.random()}, function(res) {
        mccms.layer.close(index);
        if(res.code == 1){
            rmb_cion = res.data.rmb_cion;
            cion_name = res.data.cion_name;
            res.data.ucion = mccms.get_wan(res.data.ucion);
            res.data.ticket = mccms.get_wan(res.data.ticket);
            mccms.laytpl(payhtml).render(res.data, function(html){
                mccms.layer.close(mccms.index);
                mccms.index = mccms.layer.open({
                    type: 1,
                    closeBtn: 0,
                    title: false,
                    content: html,
                    shade: 0.6,
                    offset: 'auto',
                    skin: 'transparent-bg',
                    area: ['800px', '80%'],
                    success: function(layero, layerIdx) {
                        mccms.index = layerIdx;
                        $('.j-paytype-item .item_row').hide();
                        $('.j-paytype-'+type).show();
                        $(".j-tab-title li").removeClass('layui-this');
                        $(".j-tab-title li[data-type='"+type+"']").addClass('layui-this');
                        if(type == 'jb'){
                            post.rmb = $('.cion-btn').eq(0).attr('data-rmb');
                        }else if(type=='yp'){
                            post.pay = 'cion';
                            post.rmb = $('.yp-btn').eq(0).attr('data-rmb');
                            post.num = $('.yp-btn').eq(0).attr('data-num');
                        }else{
                            post.pay = 'cion';
                            post.day = $('.vip-btn').eq(0).attr('data-day');
                            post.rmb = $('.vip-btn').eq(0).attr('data-rmb');
                        }
                        if(type == 'jb'){
                            $('.paytype-box li').each(function(){
                                $('.paytype-cionpay').hide();
                                if(!$(this).hasClass('hide') && $(this).attr('data-pay-type') != 'cion'){
                                    post.pay = $(this).attr('data-pay-type');
                                    $(this).addClass('active');
                                    $(this).children('.j-item-icon').show();
                                    return false;
                                }
                            });
                        }else{
                            $('.paytype-box li').each(function(){
                                $('.paytype-cionpay').show();
                                if(!$(this).hasClass('hide')){
                                    $(this).addClass('active');
                                    $(this).children('.j-item-icon').show();
                                    return false;
                                }
                            });
                        }
                        get_rmb();
                    }
                });
                $('.j-paytype-btn').eq(0).addClass('active');
            });
        }else{
            mccms.msg(res.msg);
        }
    },'json');
    //关闭窗口
    $('body').on("click",".j-pay-close",function(){
        window.clearInterval(pindex);
        mccms.layer.close(mccms.index);
    });
    //导航切换按钮
    $('body').on("click",".dialog-pay_body--tab-title li",function(){
        var type = $(this).attr('data-type');
        get_tabs(type);
    });
    //选择金币
    $('body').on("click",".cion-btn",function(){
        post.rmb = $(this).attr('data-rmb');
        post.cion = $(this).attr('data-cion');
        if(post.rmb == 0){
            $('.j-pay-btn').addClass('disabled');
        }else{
            $('.j-pay-btn').removeClass('disabled');
        }
        $('.cion-btn').removeClass('active');
        $('.cion-btn').children('.j-item-icon').hide();
        $(this).addClass('active');
        $(this).children('.j-item-icon').show();
        get_rmb();
    });
    //监控输入金币
    $('body').on("input propertychange",".cion-input",function(){
        post.rmb = $(".cion-input").val();
        if(post.rmb == ''){
            post.rmb = 0;
            $('.j-pay-btn').addClass('disabled');
        }else{
            $('.j-pay-btn').removeClass('disabled');
        }
        get_rmb();
    });
    //选择月票
    $('body').on("click",".yp-btn",function(){
        post.rmb = $(this).attr('data-rmb');
        post.num = $(this).attr('data-num');
        if(post.rmb == 0){
            $('.j-pay-btn').addClass('disabled');
        }else{
            $('.j-pay-btn').removeClass('disabled');
        }
        $('.yp-btn').removeClass('active');
        $('.yp-btn').children('.j-item-icon').hide();
        $(this).addClass('active');
        $(this).children('.j-item-icon').show();
        get_rmb();
    });
    //监控输入月票
    $('body').on("input propertychange",".yp-input",function(){
        post.num = $(".yp-input").val();
        if(post.num == ''){
            post.num = 0;
            $('.j-pay-btn').addClass('disabled');
        }else{
            $('.j-pay-btn').removeClass('disabled');
        }
        post.rmb = post.num;
        get_rmb();
    });
    //选择VIP
    $('body').on("click",".vip-btn",function(){
        post.rmb = $(this).attr('data-rmb');
        post.day = $(this).attr('data-day');
        if(post.rmb == 0){
            $('.j-pay-btn').addClass('disabled');
        }else{
            $('.j-pay-btn').removeClass('disabled');
        }
        $('.vip-btn').removeClass('active');
        $('.vip-btn').children('.j-item-icon').hide();
        $(this).addClass('active');
        $(this).children('.j-item-icon').show();
        get_rmb();
    });
    //支付方式
    $('body').on("click",".j-paytype-btn",function(){
        post.pay = $(this).attr('data-pay-type');
        $('.j-paytype-btn').removeClass('active');
        $('.j-paytype-btn').children('.j-item-icon').hide();
        $(this).addClass('active');
        $(this).children('.j-item-icon').show();
        get_rmb();
    });
    //充值金币
    $('body').on("click",".j-go-gold",function(){
        post.type = 'cion';
        post.pay = '';
        get_tabs('jb');
    });
    //提交请求
    $('body').on("click",".j-pay-btn",function(){
        if(!$(this).hasClass('disabled')){
            $(this).addClass('disabled');
            var index = mccms.layer.load();
            $.post(Mcpath.web+'index.php/api/pay/save', post, function(res) {
                mccms.layer.close(index);
                if(res.code == 1){
                    if(res.pay == 1){
                        $('#j-alipay-qrcode').attr('src',res.payurl);
                        pindex = setInterval(function(){
                            get_payinit(res.did);
                        },3000);
                    }else{
                        mccms.msg(res.msg,1);
                        setTimeout(function() {
                            window.location.reload();
                        }, 3000);
                    }
                }else{
                    $('.j-pay-btn').removeClass('disabled');
                    mccms.msg(res.msg);
                }
            },'json');
        }
    });
    //判断订单是否完成
    function get_payinit(did){
        $.post(Mcpath.web+'index.php/api/pay/init', {id:did}, function(res) {
            if(res.code == 1){
                window.clearInterval(pindex);
                mccms.msg(res.msg,1);
                setTimeout(function() {
                    window.location.reload();
                }, 3000);
            }
        },'json');
    }
    //计算金额
    function get_rmb(){
        window.clearInterval(pindex);
        $('.j-alipay-qrcode').attr('src','');
        if(post.pay == 'cion'){
            $('.j-pay-num').html(post.rmb*rmb_cion);
            $('.pay_ext').html(cion_name);
            if(mccms.user.cion < post.rmb*rmb_cion){
                $('.j-pay-warning').show();
                $('.j-pay-btn').addClass('disabled');
            }else{
                $('.j-pay-warning').hide();
                $('.j-pay-btn').removeClass('disabled');
            }
        }else{
            $('.j-pay-num').html(post.rmb);
            $('.pay_ext').html('元');
            $('.j-pay-warning').hide();
            $('.j-pay-btn').removeClass('disabled');
        }
    }
    //切换导航
    function get_tabs(type){
        $('.j-paytype-item .item_row').hide();
        $('.j-paytype-'+type).show();
        //支付方式
        $('.j-paytype-btn').removeClass('active');
        $('.j-paytype-btn .j-item-icon').hide();
        $(".j-tab-title li").removeClass('layui-this');
        $(".j-tab-title li[data-type='"+type+"']").addClass('layui-this');
        if(type == 'jb'){
            post.type = 'cion';
            post.rmb = $('.cion-btn').eq(0).attr('data-rmb');
            get_rmb();
            $('.paytype-box li').each(function(){
                $('.paytype-cionpay').hide();
                if(!$(this).hasClass('hide') && $(this).attr('data-pay-type') != 'cion'){
                    $(this).addClass('active');
                    $(this).children('.j-item-icon').show();
                    post.pay = $(this).attr('data-pay-type');
                    return false;
                }
            });
        }else{
            post.pay = 'cion';
            $('.paytype-cionpay').addClass('active').show();
            $('.paytype-cionpay .j-item-icon').show();
            if(type == 'yp'){
                post.type = 'ticket';
                post.rmb = $('.yp-btn').eq(0).attr('data-rmb');
                post.num = $('.yp-btn').eq(0).attr('data-num');
            }else{
                post.type = 'vip';
                post.rmb = $('.vip-btn').eq(0).attr('data-rmb');
                post.day = $('.vip-btn').eq(0).attr('data-day');
            }
            get_rmb();
        }
    }
}
var isBuyRead = function(mid){
    $.post(Mcpath.web+'index.php/api/comic/buyread', {mid:mid}, function(res) {
        if(res.code == 1){
            var read = res.read,buy = res.buy;
            for (var i = 0; i < read.length; i++) {
                $('.chapter-'+read[i].cid).children('a').children('.j-update-icon').remove();
                $('.chapter-'+read[i].cid).addClass('look').append('<i class="read-at iconfont"></i>');
            }
            for (var i = 0; i < buy.length; i++) {
                $('.chapter-'+buy[i].cid).children('a').children('.lock').html('').css('color','#f60');
            }
        }
    },'json');
}
var banRen = function(){
    var bindex = 0;
    var wh = $('.swiper-wrapper').width();
    var hg = $('.swiper-wrapper').height();
    $('.swiper-wrapper').css('width',$(".swiper-pagination-switch").length*wh+'px');
    $('.swiper-wrapper li').css('width',wh+'px').css('height',hg+'px');
    setInterval(function(){
        bindex = bindex < ($(".swiper-pagination-switch").length-1)? ++bindex : 0;
        get_banren(bindex,wh);
    },3000);
    $('.swiper-menu').click(function(event) {
        var that = $(event.target);
        var link = $('.swiper-wrapper li').eq(bindex).children('a').attr('href');
        if(!that.is('.swiper-menu__list *')){
            window.location.href = link;
        }
    });
    $('.swiper-menu__list div').mouseover(function(){
        bindex = $(this).index();
        get_banren(bindex,wh);
    });
    $('.swiper-pagination-switch').click(function(){
        bindex = $(this).index();
        get_banren(bindex,wh);
    });
    function get_banren(ord,wh){
        $(".swiper-wrapper").stop(true,false).animate({"left":-ord*wh},500);
        $(".swiper-wrapper li").removeClass('swiper-slide-visible').removeClass('swiper-slide-active');
        $(".swiper-wrapper li").eq(ord).addClass('swiper-slide-visible').addClass('swiper-slide-active');
        $('.swiper-menu__list div').removeClass('active');
        $('.swiper-menu__list div').eq(ord).addClass('active');
        $('.swiper-pagination-switch').removeClass('swiper-visible-switch').removeClass('swiper-active-switch');
        $('.swiper-pagination-switch').eq(ord).addClass('swiper-visible-switch').addClass('swiper-active-switch');
    }
}
function winSetHP() {
    var name = document.title;
    if (document.all) {
        document.body.style.behavior = 'url(#default#homepage)';
        document.body.setHomePage(name);
    } else {
        mccms.msg('浏览器不支持此操作, 请手动设为首页');
    }
}
function winAddFav() {
    var domain = window.location.href;
    var name = document.title;
    try {
        window.external.addFavorite(domain, name);
    } catch (e) {
        try {
            window.sidebar.addPanel(name, domain, '');
        } catch (e) {
            mccms.msg('加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置');
        }
    }
}
function search(){
    var key = $('.cy_search_txt').val();
    if(key == ''){
        mccms.msg('请输入要搜搜的关键词');
        return false;
    }
}
//默认数据
$(function(){
    //banner
    if($('.banner-wrapper').length > 0){
        banRen();
    }
    //图片懒加载
    $("img.lazy").lazyload({
        effect : "fadeIn",
    　　threshold : 10
    });
    //登录
    $('#J_layerlogin').click(function(){
        regLog();
    });
    //关闭浮窗
    $('body').on("click",".icon-comm-close",function(){
        layer.close(mccms.index);
    });
    //第三方登录
    $('body').on("click",".third-login li",function(){
        var type = $(this).data('type');
        window.location.href = Mcpath.web+'index.php/user/open/'+type;
    });
    //每日更新切换
    $('.week-nav').click(function(){
        var index = $(this).index();
        $('.week-nav').removeClass('active');
        $('.week-nav i').remove();
        $('.week-nav').eq(index).addClass('active').prepend('<i class="icon-comm-berry"></i>');
        $('.week-list').removeClass('active');
        $('.week-list').eq(index).addClass('active');
        if($('.week-list').eq(index).children('.js_cells').length < 12){
            $('.week-list').eq(index).children('.js_bottom').hide();
        }
        $('.week-list img.lazy').lazyload();
    });
    $('.update-nav').click(function(){
        var index = $(this).index();
        $('.update-nav').removeClass('active');
        $('.update-nav i').remove();
        $('.update-nav').eq(index).addClass('active').prepend('<i class="icon-active-rabbit active-rank"></i>');
        $('.comic-sort-list').addClass('acgn-hide');
        $('.comic-sort-list').eq(index).removeClass('acgn-hide');
    });
    //热门标签切换
    $('.tags-nav').mouseover(function(){
        var index = $(this).index();
        $('.tags-nav').removeClass('active');
        $('.tags-nav').eq(index).addClass('active');
        $('.tags-list').removeClass('active');
        $('.tags-list').eq(index).addClass('active');
        $('.tags-list img.lazy').lazyload();
    });
    $('.hot-list li').hover(function(){
        $(this).find('.floater').show();
    }, function() {
        $(this).find('.floater').hide();
    });
    //排行榜切换
    $('.hot-nav').click(function(){
        var index = $(this).index();
        $('.hot-nav').removeClass('active');
        $('.hot-nav').eq(index).addClass('active');
        $('.hot-list').removeClass('checked');
        $('.hot-list').eq(index).addClass('checked');
    });
    $('.tabs-underline .tab').mouseover(function(){
        var type = $(this).data('type');
        $(".area .block-container,.tabs-underline .tab").removeClass('active');
        $(".area ."+type).addClass('active');
        $(this).addClass('active');
    });
    $('.rank-row').mouseover(function(){
        $(this).parent().children('.rank-row').removeClass('hover');
        $(this).addClass('hover');
    });
	//关闭评论框
	$('body').click(function(e) {
		var target = e.target;
	  	//评论框
	  	if($('.de-comment__textarea-wrap').find(target).length == 0 && $('.comment-kuang').html() == '') {
	    	$('.comment-kuang').html('看点槽点，不吐不快！别憋着，马上大声说出来吧～').addClass('has-placeholder');
	    }
	    //表情框
	    if($('.de-comment__item--btn-group').find(target).length == 0) {
	    	$('.j-comment-face-box').hide();
	    }
	});
    //用户头像
    setTimeout(function() {
        //登录状态
        if(mccms.user.log > 0){
            if(mccms.user.nichen == '') mccms.user.nichen = '用户ID:'+mccms.user.id;
            $('#J_userInfo .avator').attr('src',mccms.user.pic);
            $('#J_coins .num').html('金币 '+mccms.user.cion);
            $('#J_ticket .num').html('月票 '+mccms.user.ticket);
            $('#J_userInfo .name').html('<a href="'+Mcpath.web+'index.php/user">'+mccms.user.nichen+'</a>');
            $('#J_userInfo .face-mask').attr('href',Mcpath.web+'index.php/user');
            $('#J_userInfo .status').html('<div class="status-exit"><div class="exit-btn" id="J_logout"><i class="login-bg"></i><span>退出登录</span></div></div>');
        }
	},1000);
    //退出登陆
    $('body').on("click","#J_logout",function(){
        if(mccms.user.log == 1) mccms.logout();
    });
    //充值虚拟币
    $('body').on("click",".j-pay-gold",function(){
        if(mccms.user.log == 0){
            regLog();
        }else{
            Pay_Show('jb');
        }
    });
    //充值VIP
    $('body').on("click",".buy-vip",function(){
        if(mccms.user.log == 0){
            regLog();
        }else{
            Pay_Show('vip');
        }
    });
    //打赏礼物
    $('.btn--reward').click(function(){
        if(mccms.user.log == 0){
            regLog();
        }else{
            showGift();
        }
    });
    //打赏月票
    $('.btn--ticket').click(function(){
        if(mccms.user.log == 0){
            regLog();
        }else{
            showTicket();
        }
    });
    //评分
    $('.btn--score').click(function(){
        if(mccms.user.log == 0){
            regLog();
        }else{
            get_Score();
        }
    });
    //分享
    $('.btn--share').click(function(){
        get_Share();
    });
    //我的收藏
    if($('.fav-tpl').length > 0) rendFav();
    //阅读记录
    if($('.history-tpl').length > 0) rendRead();
    //热搜
    rendHotSearch();
    //收藏
  	bindCollectEvent();
});