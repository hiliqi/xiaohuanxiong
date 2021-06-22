layui.define(['jquery',], function(exports){
    var $ = layui.jquery;
    if ($('button.upload-image').length) {
        $('button.upload-image').each(function() {
            var _this = $(this);
            _upload(_this, {
                success: function(res) {
                    if (res.code==0) {
                        layer.msg(res.msg, {
                            icon: 1
                        });
                        _this.next().val(res.data.src).next().find('img.upload-image').attr('src', res.data.thumb);
                    } else {
                        layer.msg(res.msg, {
                            icon: 2
                        });
                    }
                }
            });
        });
        $('div.upload-image span').click(function() {
            $(this).next().attr('src', '').parent().prev().val('');
        });
    }

function _upload(elem, options) {
    console.log(window.location.pathname.split("/")[1].indexOf(".php"));
    var leftUrl = window.location.pathname.split("/")[1];
    if(leftUrl.indexOf(".php")>0){
        var leftUrl = '/'+ leftUrl;
    }else{
        var leftUrl = '';
    }
    var form, name = 'file',
        accept = 'image/*',
        path = 'images',
        url = leftUrl + '/index/upload';
        form = Math.random().toString(36).substr(2);
        var input = '<input accept="' + accept + '" name="' + name + '" type="file"/>';
        $('body').append('<form enctype="multipart/form-data" id="' + form + '" style="display: none;">' + input + '</form>');
        $('body').on('change', '#' + form + ' input', function() {
            var _this = $(this);
            var data = new FormData();
            data.append(name, _this[0].files[0]);
            data.append('name', name);
            data.append('path', path);
            settings = {
                contentType: false,
                data: data,
                processData: false,
                url: url,
                async: true,
                cache: false,
                complete: function(xhr) {
                    xhr = null;
                },
                dataType: 'json',
                type: 'post',
            };
        $.extend(settings, options);
        $.ajax(settings);
            _this.remove();
            $('#' + form).append(input);
    });
    $(elem).click(function() {
        $('#' + form + ' input').click();
    });
}
exports('uploads', {}); 
});