//充值
var Pay_Show = function(type){
    var payhtml = '<div id="dialog-pay"><div class="j-dialog-pay dialog-pay"lay-filter="dialog-pay"><div class="j-pay-header dialog-pay_header"><div class="j-user-name dialog-pay_header--username">{{d.unichen}}</div><div class="dialog-pay_header--foundinfo"><span class="j-user-gold">{{d.ucion}}</span>{{d.cion_name}}<em>|</em><span class="j-user-ticket">{{d.ticket}}</span>月票</div></div><div class="j-pay-close dialog-pay_header--close"><i class="iconfont icon-ic_buy_toast_close"></i></div><!--tab--><div class="dialog-pay_body layui-tab layui-tab-brief layui-tab-mkz"><!--tab-title--><ul class="j-tab-title dialog-pay_body--tab-title layui-tab-title"><li data-type="jb"class="layui-this">充值{{d.cion_name}}</li><li data-type="yp">购买月票</li><li data-type="vip">购买VIP</li></ul><div class="dialog-pay_body--tab-body"><!--全部列表--><div class="j-tab-content"><div class="j-paytype-item"><div class="j-paytype-jb item_row hide"><h3 class="item--title"><i class="item--title-icon"></i>购买项目<span class="item--pay-tip">（充值比例：1元={{d.rmb_cion}}{{d.cion_name}}，充值数量：必须是10的整数倍）</span></h3><ul class="item--content clearfix">{{#layui.each(d.pay.cion,function(index,item){}}<li class="j-item-btn item--btn cion-btn{{ index == 0 ? \' active\' : \'\' }}"data-cion="{{item.cion}}"data-rmb="{{item.rmb}}"><p>{{item.cion}}{{d.cion_name}}</p><p class="item--price">￥{{item.rmb}}</p><i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"{{index>0?\' style="display: none;"\':\'\'}}></i></li>{{#})}}<li class="j-item-btn item--btn item--btn-input cion-btn"data-cion="0"data-rmb="0"><input class="j-item-input item--input cion-input" type="text" value="" placeholder="其他金额" autocomplete="off" oninput="value=value.replace(\/[^\\d]\/g,\'\')"><i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"style="display: none;"></i></li></ul></div><!--月票--><div class="j-paytype-yp item_row hide"><h3 class="item--title"><i class="item--title-icon"></i>购买项目<span class="item--pay-tip">（购买比例：1元={{d.rmb_cion}}{{d.cion_name}}）</span></h3><ul class="item--content clearfix">{{#layui.each(d.pay.ticket,function(index,item){}}<li class="j-item-btn item--btn yp-btn{{ index == 0 ? \' active\' : \'\' }}"data-num="{{item.num}}"data-rmb="{{item.rmb}}"data-cion="{{item.cion}}"><p>{{item.num}}张月票</p><p class="item--price">￥{{item.rmb}}</p><i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"{{index>0?\' style="display: none;"\':\'\'}}></i></li>{{#})}}<li class="j-item-btn item--btn item--btn-input yp-btn"data-num="0"data-rmb="0"data-cion="0"><input class="j-item-input item--input yp-input" type="text" value="" placeholder="其他数量" autocomplete="off" oninput="value=value.replace(\/[^\\d]\/g,\'\')"><i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"style="display: none;"></i></li></ul></div><!--VIP--><div class="j-paytype-vip item_row hide"><h3 class="item--title"><i class="item--title-icon"></i>购买项目<span class="item--pay-tip">（购买比例：1元={{d.rmb_cion}}{{d.cion_name}}）</span></h3><ul class="item--content clearfix"id="vip_product_list">{{#layui.each(d.pay.vip,function(index,item){}}<li class="j-item-btn item--btn vip-btn{{ index == 0 ? \' active\' : \'\' }}"data-day="{{item.day}}"data-rmb="{{item.rmb}}"><p>{{item.name}}</p><p class="item--price">￥{{item.rmb}}</p><p class="item--recome">{{item.txt}}</p><i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"{{index>0?\' style="display: none;"\':\'\'}}></i></li>{{#})}}</ul></div></div><!--支付方式--><div class="item_row"><h3 class="item--title"><i class="item--title-icon"></i>支付方式</h3><ul class="item--content clearfix paytype-box"><li class="j-paytype-btn item--paytype-btn paytype-cionpay hide"data-pay-type="cion"><i class="iconfont item--pay-icon icon-ic_toast_yb"></i>{{d.cion_name}}支付<i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"style="display: none;"></i></li><li class="j-paytype-btn item--paytype-btn paytype-wxpay{{ d.pay.is_wxpay == 1 ? \' hide\' : \'\' }}"data-pay-type="wxpay"><i class="item--pay-icon iconfont icon-ic_buytoast_wx"></i>微信支付<i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"style="display: none;"></i></li><li class="j-paytype-btn item--paytype-btn paytype-alipay{{ d.pay.is_alipay == 1 ? \' hide\' : \'\' }}"data-pay-type="alipay"><i class="item--pay-icon iconfont icon-ic_buytoast_zfb"></i>支付宝支付<i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"style="display: none;"></i></li><li class="j-paytype-btn item--paytype-btn paytype-qqpay{{ d.pay.is_qqpay == 1 ? \' hide\' : \'\' }}"data-pay-type="qqpay"><i class="item--pay-icon iconfont icon-ic_buytoast_qq"></i>QQ钱包支付<i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"style="display: none;"></i></li></ul></div><!--应付金额--><div class="item_row"><span class="item--inline-title">应付金额：</span><span class="item--found"><strong class="j-pay-num item--num">10</strong><em class="pay_ext">元</em></span><!--提醒信息--><span class="j-pay-warning item--warning hide"style="display: none;">{{d.cion_name}}不足，请修改支付方式或<strong class="j-go-gold item--link">充值{{d.cion_name}}</strong></span><!--qrcode--><iframe src=""id="j-alipay-qrcode"class="qrcode-alipay"width="120"height="120"frameborder="0"scrolling="no"></iframe></div><!--按钮--><div class="item_row"><!--disabled--><div class="j-pay-btn item_pay-btn layui-btn layui-btn-danger">确认支付</div></div></div></div></div></div></div>';
    var rmb_cion = 1,cion_name = '金币',pindex = null;
    var post = {type:'cion',rmb:0,day:0,num:0,pay:''};
    var index = mccms.layer.load();
    $.post(Mcpath.web+'index.php/api/pay', {t:Math.random()}, function(res) {
        mccms.layer.close(index);
        if(res.code == 1){
            rmb_cion = res.data.rmb_cion;
            cion_name = res.data.cion_name;
            mccms.laytpl(payhtml).render(res.data, function(html){
                mccms.layer.open({
                    type: 1,
                    closeBtn: 0,
                    title: false,
                    content: html,
                    shade: 0.6,
                    offset: 'auto',
                    area: ['700px', '480px'],
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
                                $('.paytype-cionpay').hide();
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
var comic_edit = function(mid){
    mccms.form.render();
    if(mid == 0){
        var url_x = mccms.get_cookie('urlx');
        var url_y = mccms.get_cookie('urly');
        if(url_x) $('.cover-x').attr('data-url', url_x).find('img').attr('src', url_x);
        if(url_y) $('.cover-y').attr('data-url', url_y).find('img').attr('src', url_y);
    }
    var uploadY = mccms.upload;
    var uploadX = mccms.upload;
    var imageY = document.getElementById('Cover-y');
    var imageX = document.getElementById('Cover-x');
    readerY.onload = function () {
        cropperY.replace(this.result)
    }
    readerX.onload = function () {
        cropperX.replace(this.result)
    }
    var uploadLoading;
    var cropperY = new Cropper(imageY, {
        viewMode: 2,
        aspectRatio: 3 / 4,
        preview: '.preview-y',
        rotatable: false,
        scalable: false,
        zoomable: false,
        crop: function (e) {
          uploadY.render({
            elem: '#yInput',
            url: Mcpath.web+'index.php/author/comic/uppic',
            auto: false,
            bindAction: '.J_confirm_y',
            before: function () {
              uploadLoading = layer.load(1);
            },
            done: function(res){
                if(res.code == 1){
                    mccms.layer.msg('封面添加成功');
                    if(mid == 0){
                        mccms.set_cookie('urly',res.url);
                        $('.cover-y').attr('data-url', res.url).find('img').attr('src', res.img);
                    }else{
                        $('.y-cover').attr('data-url', res.url).find('img').attr('src', res.img).removeClass('error');
                    }
                    mccms.layer.closeAll();
                }else{
                    mccms.layer.closeAll();
                    mccms.layer.msg('封面上传失败');
                }
            },
            error: function(){
              mccms.layer.msg('服务器异常，上传失败，请刷新页面重试。')
            },
            data: {
              x: e.detail.x,
              y: e.detail.y,
              w: e.detail.width,
              h: e.detail.height,
              mid: mid,
              type: 'y',
            }
          });
        }
    })
    var cropperX = new Cropper(imageX, {
        viewMode: 2,
        aspectRatio: 16 / 9,
        preview: '.preview-x',
        rotatable: false,
        scalable: false,
        zoomable: false,
        crop: function (e) {
          uploadX.render({
            elem: '#xInput',
            url: Mcpath.web+'index.php/author/comic/uppic',
            auto: false,
            bindAction: '.J_confirm_x',
            before: function () {
                uploadLoading = layer.load(1);
            },
            done: function(res){
                if(res.code == 1){
                    mccms.layer.msg('封面添加成功');
                    if(mid == 0){
                        mccms.set_cookie('urlx',res.url);
                        $('.cover-x').attr('data-url', res.url).find('img').attr('src', res.img);
                    }else{
                        $('.x-cover').attr('data-url', res.url).find('img').attr('src', res.img).removeClass('error');
                    }
                    mccms.layer.closeAll();
                }else{
                    mccms.layer.closeAll();
                    mccms.layer.msg('封面上传失败');
                }
            },
            error: function(){
                mccms.layer.msg('服务器异常，上传失败，请刷新页面重试。')
            },
            data: {
              x: e.detail.x,
              y: e.detail.y,
              w: e.detail.width,
              h: e.detail.height,
              mid: mid,
              type: 'x',
            }
          });
        }
    })
    $('.J_cover_y').click(function () {
        var content = $('.cover-dialog-y');
        mccms.layer.open({
            type: 1,
            title: '上传封面',
            skin: 'm-cover-upload', //加上边框
            area: ['900px', '600px'], //宽高
            content: content,
            success: function (layero, index) {
                $('.cancel').click(function (){
                    mccms.layer.close(index);
                });
            },
            end: function () {
                content.hide();
            }
        });
    });
    $('.J_cover_x').click(function () {
        var content = $('.cover-dialog-x');
        mccms.layer.open({
            type: 1,
            title: '上传封面',
            skin: 'm-cover-upload', //加上边框
            area: ['800px', '380px'], //宽高
            content: content,
            success: function (layero, index) {
                $('.cancel').click(function (){
                    mccms.layer.close(index);
                });
            },
            end: function () {
                content.hide();
            }
        });
    });
    mccms.form.on('checkbox(theme)', function(data){
        var len = $(".type-tags:checked").length;
        if(len > 5){
            mccms.layer.msg('最多选择5个题材');
            $(data.elem).next().removeClass('layui-form-checked');
        }
    });
    //修改
    mccms.form.on('submit(stepOne)', function(data){
        var data = data.field;
        data.id = mid;
        $.post(Mcpath.web+'index.php/author/comic/save', data).done(function (res) {
            if (res.code == 1) {
                mccms.layer.msg('作者大大提交成功，请耐心等待审核', function() {
                    window.location.href = res.url;
                });
            } else {
                mccms.layer.msg(res.msg);
            }
        });
        return false;
    });
    //新增
    mccms.form.on('submit(stepadd)', function(data){
        var data = data.field;
        data.pic = $('.cover-y').data('url');
        data.picx = $('.cover-x').data('url');
        if(data.protocol != 'on') {
            mccms.layer.msg('未接受上传协议!', {icon: 5});
            return false;
        }
        if($(".type-tags:checked").length == 0){
            mccms.layer.msg('至少选择一个标签!', {icon: 5});
            return false;
        }
        if(data.pic == ''){
            mccms.layer.msg('请上传竖版封面!',function(){
                $('.J_cover_y').click();
            });
            return false;
        }
        if(data.picx == ''){
            mccms.layer.msg('请上传横版封面!',function(){
                $('.J_cover_x').click();
            });
            return false;
        }
        $.post(Mcpath.web+'index.php/author/comic/save', data).done(function (res) {
            if (res.code == 1) {
                mccms.del_cookie('urlx');
                mccms.del_cookie('urly');
                mccms.layer.msg('提交成功');
                window.location.href = res.url;
            } else {
                mccms.layer.msg(res.msg);
            }
        });
        return false;
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
//默认数据
$(function(){
	//关闭open窗口
	$('body').on("click",".dialog__close",function(){
		mccms.layer.close(mccms.index);
	});
	//搜索
	$('.search-btn').click(function() {
		var k = $('.j-header-search-input').val();
		if(k == ''){
			mccms.msg('请输入要搜索的关键字',3,'.j-header-search-input');
		}else{
			location.href = Mcpath.web+'index.php/search?key=' + k;
		}
	});
	$('.j-header-avatar').hover(function() {
		if(mccms.user.log == 1){
			$('.j-user-avatar').attr('src',mccms.user.pic);
			if(mccms.user.vip == '0') mccms.user.viptime = '体验已到期';
			mccms.laytpl($('.userinfo').html()).render(mccms.user, function(str) {
				$('.in-dialog--avatar').html(str);
			});
		}
		$('.dialog__header-avatar').show();
	},function(){
		$('.dialog__header-avatar').hide();
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
        Pay_Show('jb');
    });
    //充值VIP
    $('body').on("click",".vip-recharge,.buy-vip",function(){
        Pay_Show('vip');  
    });
    //购买月票
    $('.buy_ticket').click(function(){
        Pay_Show('yp');  
    });
    //我的收藏
    if($('.fav-tpl').length > 0) rendFav();
    //阅读记录
    if($('.history-tpl').length > 0) rendRead();
    //热搜
    rendHotSearch();
});
