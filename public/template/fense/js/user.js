//充值
var Pay_Show = function(type){
    var payhtml = '<div id="dialog-pay"><div class="j-dialog-pay dialog-pay"lay-filter="dialog-pay"><div class="j-pay-header dialog-pay_header"><div class="j-user-name dialog-pay_header--username">{{d.unichen}}</div><div class="dialog-pay_header--foundinfo"><span class="j-user-gold">{{d.ucion}}</span>{{d.cion_name}}<em>|</em><span class="j-user-ticket">{{d.ticket}}</span>月票</div></div><div class="j-pay-close dialog-pay_header--close"><i class="iconfont icon-ic_buy_toast_close"></i></div><!--tab--><div class="dialog-pay_body layui-tab layui-tab-brief layui-tab-mkz"><!--tab-title--><ul class="j-tab-title dialog-pay_body--tab-title layui-tab-title"><li data-type="jb"class="layui-this">充值{{d.cion_name}}</li><li data-type="yp">购买月票</li><li data-type="vip">购买VIP</li><li data-type="card">卡密充值</li></ul><div class="dialog-pay_body--tab-body"><!--全部列表--><div class="j-tab-content"><div class="j-paytype-item"><div class="j-paytype-jb item_row hide"><h3 class="item--title"><i class="item--title-icon"></i>购买项目<span class="item--pay-tip">（充值比例：1元={{d.rmb_cion}}{{d.cion_name}}，充值数量：必须是10的整数倍）</span></h3><ul class="item--content clearfix">{{#layui.each(d.pay.cion,function(index,item){}}<li class="j-item-btn item--btn cion-btn{{ index == 0 ? \' active\' : \'\' }}"data-cion="{{item.cion}}"data-rmb="{{item.rmb}}"><p>{{item.cion}}{{d.cion_name}}</p><p class="item--price">￥{{item.rmb}}</p><i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"{{index>0?\' style="display: none;"\':\'\'}}></i></li>{{#})}}<li class="j-item-btn item--btn item--btn-input cion-btn"data-cion="0"data-rmb="0"><input class="j-item-input item--input cion-input" type="text" value="" placeholder="其他金额" autocomplete="off" oninput="value=value.replace(\/[^\\d]\/g,\'\')"><i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"style="display: none;"></i></li></ul></div><!--月票--><div class="j-paytype-yp item_row hide"><h3 class="item--title"><i class="item--title-icon"></i>购买项目<span class="item--pay-tip">（购买比例：1元={{d.rmb_cion}}{{d.cion_name}}）</span></h3><ul class="item--content clearfix">{{#layui.each(d.pay.ticket,function(index,item){}}<li class="j-item-btn item--btn yp-btn{{ index == 0 ? \' active\' : \'\' }}"data-num="{{item.num}}"data-rmb="{{item.rmb}}"data-cion="{{item.cion}}"><p>{{item.num}}张月票</p><p class="item--price">￥{{item.rmb}}</p><i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"{{index>0?\' style="display: none;"\':\'\'}}></i></li>{{#})}}<li class="j-item-btn item--btn item--btn-input yp-btn"data-num="0"data-rmb="0"data-cion="0"><input class="j-item-input item--input yp-input" type="text" value="" placeholder="其他数量" autocomplete="off" oninput="value=value.replace(\/[^\\d]\/g,\'\')"><i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"style="display: none;"></i></li></ul></div><!--VIP--><div class="j-paytype-vip item_row hide"><h3 class="item--title"><i class="item--title-icon"></i>购买项目<span class="item--pay-tip">（购买比例：1元={{d.rmb_cion}}{{d.cion_name}}）</span></h3><ul class="item--content clearfix"id="vip_product_list">{{#layui.each(d.pay.vip,function(index,item){}}<li class="j-item-btn item--btn vip-btn{{ index == 0 ? \' active\' : \'\' }}"data-day="{{item.day}}"data-rmb="{{item.rmb}}"><p>{{item.name}}</p><p class="item--price">￥{{item.rmb}}</p><p class="item--recome">{{item.txt}}</p><i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"{{index>0?\' style="display: none;"\':\'\'}}></i></li>{{#})}}</ul></div><div class="j-paytype-card item_row hide" style="display: none;"><h3 class="item--title" style="color:red;"><i class="item--title-icon"></i>卡密购买地址：<a class="item--pay-tip" target="_blank" href="{{d.cardurl}}">{{d.cardurl}}</a></h3><input style="width: 80%;height: 30px;padding-left: 10px;" type="text" id="card" name="card" value="" placeholder="请输入卡密" autocomplete="off"></div></div><!--支付方式--><div class="item_row pay_hide"><h3 class="item--title"><i class="item--title-icon"></i>支付方式</h3><ul class="item--content clearfix paytype-box"><li class="j-paytype-btn item--paytype-btn paytype-cionpay hide"data-pay-type="cion"><i class="iconfont item--pay-icon icon-ic_toast_yb"></i>{{d.cion_name}}支付<i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"style="display: none;"></i></li><li class="j-paytype-btn item--paytype-btn paytype-wxpay{{ d.pay.is_wxpay == 1 ? \' hide\' : \'\' }}"data-pay-type="wxpay"><i class="item--pay-icon iconfont icon-ic_buytoast_wx"></i>微信支付<i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"style="display: none;"></i></li><li class="j-paytype-btn item--paytype-btn paytype-alipay{{ d.pay.is_alipay == 1 ? \' hide\' : \'\' }}"data-pay-type="alipay"><i class="item--pay-icon iconfont icon-ic_buytoast_zfb"></i>支付宝支付<i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"style="display: none;"></i></li><li class="j-paytype-btn item--paytype-btn paytype-qqpay{{ d.pay.is_qqpay == 1 ? \' hide\' : \'\' }}"data-pay-type="qqpay"><i class="item--pay-icon iconfont icon-ic_buytoast_qq"></i>QQ钱包支付<i class="j-item-icon item--icon iconfont icon-ic_buylist_choose"style="display: none;"></i></li></ul></div><!--应付金额--><div class="item_row pay_hide"><span class="item--inline-title">应付金额：</span><span class="item--found"><strong class="j-pay-num item--num">10</strong><em class="pay_ext">元</em></span><!--提醒信息--><span class="j-pay-warning item--warning hide"style="display: none;">{{d.cion_name}}不足，请修改支付方式或<strong class="j-go-gold item--link">充值{{d.cion_name}}</strong></span><!--qrcode--><iframe src=""id="j-alipay-qrcode"class="qrcode-alipay"width="120"height="120"frameborder="0"scrolling="no"></iframe></div><!--按钮--><div class="item_row"><!--disabled--><div class="j-pay-btn item_pay-btn layui-btn layui-btn-danger">确认支付</div></div></div></div></div></div></div>';
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
			if(post.type == 'card'){
				post.card = $('#card').val();
			}
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
		if(type == 'card'){
			post.type = 'card';
			$('.pay_hide').hide();
        }else if(type == 'jb'){
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
var read_fav = function(_op){
    mccms.form.render();
    //整理收藏
    $('.clear-btn').click(function(){
        $('.toolbox-btn,.j-item-select').show();
        $(this).hide();
    });
    //整理收藏
    $('.cancel-btn').click(function(){
        $('.toolbox-btn,.j-item-select').hide();
        $('.clear-btn').show();
    });
    mccms.form.on('checkbox(select-all)', function(data){
        if (data.elem.checked) {
            $(data.elem).attr('checked', true);
            $('.j-collection-list').find('.j-item-select').addClass('user-comic-item--selected').show();
        } else {
            $(data.elem).attr('checked', false);
            $('.j-collection-list').find('.j-item-select').removeClass('user-comic-item--selected');
        }
        delzt();
    });
    //单选
    $('.j-item-select').click(function(){
        if($(this).hasClass('user-comic-item--selected')) {
            $(this).removeClass('user-comic-item--selected');
        }else{
            $(this).addClass('user-comic-item--selected').show();
        }
        delzt();
    });
    //删除事件
    $('.j-collection-delete').click(function(){
        // 如果禁用状态则不处理
        if($(this).hasClass('delete-btn--disable')) return;
        mccms.layer.open({
            content: '亲，确定要删除吗？',
            btn: ['确定', '取消'],
            yes: function(index) {
                mccms.layer.close(index);
                $.post(Mcpath.web+'index.php/user/'+_op+'/del', {ids:getSelectIds()}, function(res) {
                    if (res.code == 1) {
                        mccms.layer.msg(res.msg, {
                            end: function() {
                                window.location.reload();
                            }
                        });
                    }else{
                        mccms.msg(res.msg);
                    }
                });
            }
        });
    });
    function delzt(){
        if ($('.user-comic-item--selected').length > 0) {
            $('.j-collection-delete').removeClass('delete-btn--disable');
        } else {
            $('.j-collection-delete').addClass('delete-btn--disable');
        }
    }
    //获取选中的id
    function getSelectIds() {
        var _comicids = [];
        $('.user-comic-item--selected').each(function(idx, ele) {
            _comicids.push($(ele).data('id'));
        });
        return _comicids;
    }
}
var comic_buy = function(){
    $(".j-auto-btn").click(function(){
        var _this = $(this);
        var mid = _this.data('id');
        var auto = _this.data('status');
        $.post(Mcpath.web+'index.php/user/buy/comic_auto', {mid:mid,auto:auto}, function(res) {
            if (res.code == 1) {
                mccms.layer.msg(res.msg);
                if(auto == '1'){
                    _this.parent().find('.auto-off').hide();
                    _this.parent().find('.auto-on').show();
                }else{
                    _this.parent().find('.auto-off').show();
                    _this.parent().find('.auto-on').hide();
                }
            }else{
                mccms.msg(res.msg);
            }
        });
    });
}
var info = function(){
    var map_data = window.city_data,province_code = 110000,city_code = 110100,$avatarBtn = $('.j-change-avatar');
    var dialog_content = "<div class=\"dialog__upload-avatar\">\n  <div class=\"upload-header\">\n    <label class=\"j-upload-btn layui-btn cover-upload-btn\" for=\"avatarInput\">\n      <input type=\"file\" name=\"image\" id=\"avatarInput\" class=\"hide\">\n      <i class=\"layui-icon\">&#xe67c;</i>选择您要上传的图片\n    </label>\n    <div class=\"upload--tips\">仅支持JPG,PNG格式,文件小于2M,图片尺寸</div>\n  </div>\n  <div class=\"upload-body clearfix\">\n    <div class=\"preview--large\">\n      <img src=\"\" alt=\"\" id=\"maxAvatar\">\n    </div>\n    <div class=\"preiew-box\">\n      <h3>效果预览</h3>\n      <p class=\"upload--tips\">您上传的图片会自动生成一下尺寸,请注意小尺寸头像是否清晰</p>\n      <div class=\"j-preview preview--w100\"></div>\n      <p class=\"upload--tips\">100*100像素</p>\n      <div class=\"j-preview preview--w45\"></div>\n      <p class=\"upload--tips\">40*40像素</p>\n    </div>\n  </div>\n  <div class=\"j-submit-btn upload-submit layui-btn\">保存</div>\n</div>";
    //重置省ID
    $.each(map_data, function(key, val) {
        if ($('select[name=province]').data('code') == val['title'])  province_code = val['id'];
    });
    //重置城市ID
    $.each(map_data[province_code]['list'], function(key, val) {
        if ($('select[name=city]').data('code') == val['title'])  city_code = val['id'];
    });
    // 城市数据渲染函数
    function renderData(data, type) {
        var _list_snippet = '',
            _city_code = $('select[name=' + type + ']').attr('data-code');
        $.each(data, function(key, val) {
            if (_city_code == val['title']) {
                _list_snippet +='<option code="'+val['id']+'" value="'+val['title']+'" selected>'+val['title']+'</option>';
            } else {
                _list_snippet +='<option code="'+val['id']+'" value="'+val['title']+'">'+val['title']+'</option>';
            }
        });
        $('select[name=' + type + ']').empty();
        $('select[name=' + type + ']').append(_list_snippet);
    }
    // 渲染城市数据
    function renderCityData() {
        renderData(map_data, 'province');
        // 没有市的数据则隐藏
        if (map_data[province_code]['list']) {
            renderData(map_data[province_code]['list'], 'city');
        } else {
            $('select[name=city]').empty().parent('div').hide();
            $('select[name=area]').empty().parent('div').hide();
        }
        // 没有区的数据则隐藏
        if (city_code) {
            renderData(map_data[province_code]['list'][city_code]['list'],'area');
        } else {
            $('select[name=area]').empty().parent('div').hide();
        }
        mccms.form.render('select');
    }
    // 选择省的事件
    function selectProvinceHandle(data) {
        var code = $(data.elem).find("option:selected").attr("code");
        var _city_data = map_data[code]['list'];
        // 如果有城市数据才渲染 市、区 信息
        if (_city_data) {
            renderData(_city_data, 'city');
            // 渲染data-code
            var _city_code = $('select[name=city] option').first().attr('code');
            $(data.elem).attr('data-code', data.value);
            $('select[name=city]').attr('data-code', _city_code);
            renderData(_city_data[_city_code]['list'], 'area');
            var _area_code = $('select[name=area] option').first().val();
            $('select[name=area]').attr('data-code', _area_code);
            // 重新显示select
            $('select[name=city]').parent('div').show();
            $('select[name=area]').parent('div').show();
        } else {
            // 没有城市数据则隐藏市、区
            $('select[name=city]').empty().parent('div').hide();
            $('select[name=area]').empty().parent('div').hide();
        }
        mccms.form.render('select');
    }
    // 选择市的事件
    function selectCityHandle(data) {
        var _province_code = $('select[name=province]').find("option:selected").attr("code");
            _city_code = $(data.elem).find("option:selected").attr("code");
        renderData(map_data[_province_code]['list'][_city_code]['list'],'area');
        var _area_code = $('select[name=area] option').first().val();
        $(data.elem).attr('data-code', data.value);
        $('select[name=area]').attr('data-code', _area_code);
        mccms.form.render('select');
    }
    // 选择区的事件
    function selectAreaHandle(data) {
        $(data.elem).attr('data-code', data.value);
        mccms.form.render('select');
    }
    // 修改头像事件
    function changeAvatarHandle() {
        mccms.layer.open({
            type: 1,
            title: '上传头像',
            skin: 'layui-layer-rim', //加上边框
            area: ['800px', '540px'], //宽高
            content: dialog_content,
            success: function() {
                // 弹框打开后回调绑定事件
                uploadPicHandle();
            }
        });
    }
    // 上传头像事件
    function uploadPicHandle() {
        var image = document.getElementById('maxAvatar'),
            reader = new FileReader();
        var loadImage = function() {
            var obj = document.getElementById('avatarInput');
            var oFile = obj.files[0];
            reader.readAsDataURL(oFile);
        };
        var cropper = new Cropper(image, {
            viewMode: 2,
            aspectRatio: 1,
            preview: '.j-preview',
            rotatable: false,
            scalable: false,
            zoomable: false,
            crop: function(e) {
                mccms.upload.render({
                    elem: '#avatarInput',
                    url: Mcpath.web+'index.php/user/info/pic',
                    data: {
                        x: e.detail.x,
                        y: e.detail.y,
                        w: e.detail.width,
                        h: e.detail.height
                    },
                    field: 'image',
                    auto: false,
                    bindAction: '.upload-submit',
                    before: function() {
                        mccms.layer.load(2);
                    },
                    done: function(res) {
                        if(res.code == 1){
                            $('input[name="pic"]').val(res.url);
                            $('.j-user-avatar').attr('src',res.img);
                            mccms.user.pic = res.img;
                            mccms.layer.closeAll();
                            mccms.layer.msg('上传成功',1);
                        }else{
                            mccms.layer.closeAll();
                            mccms.layer.msg('头像上传失败');
                        }
                    },
                    error: function() {
                        mccms.layer.msg('服务器异常，上传失败。');
                    }
                });
            }
        });
        // 图片加载完毕
        reader.onload = function() {
            cropper.replace(this.result);
        };
        // 监听change事件
        $('#avatarInput').on('change', loadImage);
    }
    // 同步用户信息
    function syncUserInfoHandle(params) {
        mccms.layer.load(2); //换了种风格
        $.post(Mcpath.web+'index.php/user/info/save',params, function(res) {
            if (res.code == 1) {
                setTimeout(function() {
                    window.location.reload();
                }, 500);
            }
            mccms.layer.closeAll('loading');
            mccms.layer.msg(res.msg);
        });
    }
    // 绑定事件
    function bindEvent() {
        // 监听select事件
        mccms.form.on('select(province)', selectProvinceHandle);
        mccms.form.on('select(city)', selectCityHandle);
        mccms.form.on('select(area)', selectAreaHandle);
        // 修改头像
        $avatarBtn.on('click', changeAvatarHandle);
    }
    mccms.form.on('submit', function(data) {
        syncUserInfoHandle(data.field);
        return false;
    });
    mccms.form.render();
    // 初始化执行函数
    renderCityData();
    bindEvent();
}
var infopass = function(){
    mccms.form.render();
    // 自定义验证
    mccms.form.verify({
        password: [/^[\S]{6,16}$/, '密码必须6到16位，且不能出现空格'],
        newspass: function(value) {
            var passwordValue = $('input[name=pass1]').val();
            if (value != passwordValue) {
                return '两次输入的密码不一致!';
            }
        }
    });
    mccms.form.on('submit', function(data) {
        $.post(Mcpath.web+'index.php/user/info/pass_save',data.field, function(res) {
            if(res.code == 1) {
                setTimeout(function() {
                    window.location.reload();
                }, 500);
            }
            mccms.layer.msg(res.msg);
        });
        return false;
    });
}
var infobind = function(){
    var sign = null,time = 60,tindex = null,_op = 'edit';
    $('.add_tel').on('click', bind_tel);
    $('.edit_tel').on('click', edit_tel);
    //解除绑定
    $('.unbind_btn').click(function(){
        var type = $(this).data('type');
        var edit = $('#dialog-setting-userinfo').data('edit');
        if(edit == 1){
            edit_info();
        }else{
            $.post(Mcpath.web+'index.php/user/bind/unbind',{type:type}, function(res) {
                if(res.code == 1) {
                    setTimeout(function() {
                        window.location.reload();
                    }, 500);
                }
                mccms.layer.msg(res.msg);
            }); 
        }
    });
    //刷新验证码
    $('.code_pic').click(function(){
        $(this).attr('src',Mcpath.web+'index.php/api/code?t='+Math.random());
    });
    //发送短信验证码
    $('#pcode-send').click(function(){
        var tel = $('#tel').val();
        var pcode = $('#pcode').val();
        if(!(/^1[3456789]\d{9}$/.test(tel))){
            layer.tips('请输入正确的手机号','#dialog-setting-tel input[name=tel]',{tips: 1});
            $('#tel').focus();
            return false;
        }
        if(pcode == ''){
            layer.tips('请输入上面的图形验证码','#dialog-setting-tel input[name=pcode]',{tips: 1});
            $('#pcode').focus();
            return false;
        }
        //发送
        $.post(Mcpath.web+'index.php/api/code/tel_send/'+_op, {tel:tel,code:pcode}, function(res) {
            if(res.code == 1){
                $('.pic-code,.code_pic').hide();
                $('.tel-code').show();
                tindex = setInterval(function(){
                    time--;
                    if(time == 0){
                        time = 60;
                        window.clearInterval(tindex);
                        $('#tcode-send').css('background','#f30').attr('data-status','false').html('重新发送');
                    }else{
                        $('#tcode-send').css('background','#ccc').attr('data-status','true').html(time+'S后重发');
                    }
                },1000);
            }else{
                mccms.msg(res.msg);
                $('.code_pic').click();
                $('#pcode').val('');
            }
        },'json');
    });
    //再次发送验证码
    $('#tcode-send').click(function(){
        var init = $(this).attr('data-status');
        if(init == 'false'){
            $('#pcode').val('');
            $('.pic-code').show();
            $('.tel-code').hide();
            $('.code_pic').attr('src',Mcpath.web+'index.php/api/code').show();
        }
    });
    //修改用户信息
    function edit_info() {
        mccms.layer.open({
            type: 1,
            title: '修改用户名和密码',
            content: $('#dialog-setting-userinfo'),
            area: '500px',
            btn: ['确定', '取消'],
            yes: function(idx) {
                var name = $('#dialog-setting-userinfo input[name=name]').val();
                var pass = $('#dialog-setting-userinfo input[name=pass]').val();
                var pass2 = $('#dialog-setting-userinfo input[name=pass2]').val();
                if (name == '') {
                    layer.tips('请输入用户名','#dialog-setting-userinfo input[name=name]',{tips: 1});
                    return;
                }
                if(!(/^[\S]{6,16}$/.test(pass))){
                    layer.tips('密码必须6到16位，且不能出现空格','#dialog-setting-userinfo input[name=pass]',{tips: 1});
                    return;
                }
                if (pass != pass2) {
                    layer.tips('两次密码不一致','#dialog-setting-userinfo input[name=pass2]',{tips: 1});
                    return;
                }
                $.post(Mcpath.web+'index.php/user/bind/save',{name:name,pass:pass,pass2:pass2}, function(res) {
                    if(res.code == 1) {
                        setTimeout(function() {
                            window.location.reload();
                        }, 500);
                    }
                    mccms.layer.msg(res.msg);
                });
            },
            btn2: function(index, layero){
                mccms.layer.closeAll();
            }
        });
    }
    //绑定手机号
    function bind_tel() {
        _op = 'reg';
        mccms.layer.open({
            type: 1,
            title: '绑定手机号码',
            closeBtn: 0,
            content: $('#dialog-setting-tel'),
            area: '500px',
            btn: ['确定', '取消'],
            yes: function(idx) {
                var tel = $('#dialog-setting-tel input[name=tel]').val();
                var tcode = $('#dialog-setting-tel input[name=tcode]').val();
                if(!(/^1[3456789]\d{9}$/.test(tel))){
                    layer.tips('请输入正确的手机号码','#dialog-setting-tel input[name=tel]',{tips: 1});
                    return;
                }
                if (tcode == '') {
                    if($(".code_pic").css("display") == 'none'){
                        layer.tips('请输入手机验证码','#dialog-setting-tel input[name=tcode]',{tips: 1});
                    }else{
                        layer.tips('主人，请获取短信验证码','#dialog-setting-tel input[name=pcode]',{tips: 1});  
                    }
                    return;
                }
                $.post(Mcpath.web+'index.php/user/bind/tel_save',{tel:tel,code:tcode}, function(res) {
                    if(res.code == 1) {
                        setTimeout(function() {
                            window.location.reload();
                        }, 500);
                    }
                    mccms.layer.msg(res.msg);
                });
            },
            btn2: function(index, layero){
                mccms.layer.closeAll();
              	$('#dialog-setting-tel').hide();
            }
        });
    }
    //修改手机号
    function edit_tel() {
        $('#dialog-setting-tel input[name=tel]').attr('placeholder','请输入绑定的手机号码');
        mccms.layer.open({
            type: 1,
            title: '更换手机号码',
            content: $('#dialog-setting-tel'),
            closeBtn: 0,
            area: '500px',
            btn: ['确定', '取消'],
            yes: function(idx) {
                var tel = $('#dialog-setting-tel input[name=tel]').val();
                var tcode = $('#dialog-setting-tel input[name=tcode]').val();
                if(!(/^1[3456789]\d{9}$/.test(tel))){
                    layer.tips('请输入正确的手机号码','#dialog-setting-tel input[name=tel]',{tips: 1});
                    return;
                }
                if (tcode == '') {
                    if($(".code_pic").css("display") == 'none'){
                        layer.tips('请输入手机验证码','#dialog-setting-tel input[name=tcode]',{tips: 1});
                    }else{
                        layer.tips('主人，请获取短信验证码','#dialog-setting-tel input[name=pcode]',{tips: 1});  
                    }
                    return;
                }
                $.post(Mcpath.web+'index.php/user/bind/tel_edit',{tel:tel,code:tcode,sign:sign}, function(res) {
                    if(res.code == 1) {
                        if(sign == null){
                            _op = 'reg';
                            sign = res.sign;
                            $('#dialog-setting-tel input[name=tel]').attr('placeholder','请输入新手机号码').val('');
                            $('#pcode,#tcode').val('');
                            $('.pic-code,.code_pic').show();
                            $('.tel-code').hide();
                        }else{
                            setTimeout(function() {
                                window.location.reload();
                            }, 500);
                        }
                    }
                    mccms.layer.msg(res.msg);
                });
            },
            btn2: function(index, layero){
                mccms.layer.closeAll();
              	$('#dialog-setting-tel').hide();
            }
        });
    }
}
var message = function(){
    mccms.form.render();
    mccms.form.on('checkbox(select-all)', function(data){
        if (data.elem.checked) {
            $(data.elem).attr('checked', true);
            $('.xuan').prop("checked", true);
        } else {
            $(data.elem).attr('checked', false);
            $('.xuan').prop("checked", false);
        }
        mccms.form.render();
        if($(".xuan:checked").length > 0){
            $('.del-btn').removeClass('layui-btn-disabled').addClass('layui-btn-danger');
        }else{
            $('.del-btn').removeClass('layui-btn-danger').addClass('layui-btn-disabled');
        }
    });
    mccms.form.on('checkbox(checkbox-row)', function(data){
        if($(".xuan:checked").length > 0){
            $('.del-btn').removeClass('layui-btn-disabled').addClass('layui-btn-danger');
        }else{
            $('.del-btn').removeClass('layui-btn-danger').addClass('layui-btn-disabled');
        }
    });
    $('.message-text').click(function(){
        var id = $(this).data('id');
        var _this = $(this);
        $.post(Mcpath.web+'index.php/user/message/init',{id:id}, function(res) {
            if(res.code == 1) {
                _this.children('i').removeClass('active');
                layer.open({
                    title:'消息详情',
                    content: res.text,
                    closeBtn: 2
                });
            }else{
                mccms.msg(res.msg);
            }
        },'json');
    });
    //删除
    $('.del-btn').click(function(){
        var ids = [];
        $(".xuan:checked").each(function(){
            ids.push($(this).val());
        });
        if(ids.length == 0){
            mccms.msg('请选择要删除的数据');
        }else{
            $.post(Mcpath.web+'index.php/user/message/del',{ids:ids}, function(res) {
                if(res.code == 1) {
                    mccms.msg(res.msg,1);
                    setTimeout(function() {
                        window.location.reload();
                    }, 500);
                }else{
                    mccms.msg(res.msg);
                }
            },'json');
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