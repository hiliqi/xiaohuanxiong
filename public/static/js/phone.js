$(function () {
    $(".btnphonecodeget").click(function () {
        if ($('.btnphonecodeget').attr('isok') == 1) {
            var phone = $(".txt_phone").val();
            if (phone == '') {
                ShowDialog("手机不填可是不行的哦~");
                return false;
            }
            var areacode = $(".txt_areacode").val();
            $.ajax({
                url: '/sendcms',
                data: {areacode: areacode, phone: phone},
                async: false,
                error: function (msg) {
                },
                success: function (res) {
                    ShowDialog(res.msg)
                    $('.btnphonecodeget').attr('isok', 0);
                    startTime();
                }
            });
        }

    });
});

$('#sub').click(function () {
    $.post({
        url: '/bindphone',
        data: {
            txt_phonecode: $('#txt_phonecode').val(),
            txt_phone: $('#txt_phone').val()
        },
        success(res) {
            if (res.err == 0) {
                ShowDialog(res.msg);
                setTimeout(function () {
                    location.href = '/ucenter';
                }, 2000);
            } else {
                ShowDialog(res.msg);
                setTimeout(function () {
                    location.reload();
                }, 1000);
            }
        }
    })

})

$('#sub1').click(function () {
    $.post({
        url: '/verifyphone',
        data: {
            txt_phonecode: $('#txt_phonecode').val(),
            txt_phone: $('#txt_phone').val()
        },
        success(res) {
            if (res.err == '1') {
                ShowDialog(res.msg);
                setTimeout(function () {
                    location.reload();
                }, 1000);
            } else {
                location.href = '/bindphone';
            }
        }
    })
})

$('#resetpwd_sub').click(function () {
    if (resetpwd() == 4) {
        $.post({
            url: '/resetpwd',
            data: {password: $("#txt_password").val()},
            success(res) {
                if (res.err == '1') {
                    ShowDialog(res.msg);
                    setTimeout(function () {
                        location.reload();
                    }, 1000);
                } else {
                    ShowDialog(res.msg);
                    setTimeout(function () {
                        location.href = '/ucenter';
                    }, 2000);
                }
            }
        })
    } else {
        ShowDialog('密码不符合要求');
        setTimeout(function () {
            location.reload();
        }, 1000);
    }
})

function resetpwd() {
    var regpwd = new RegExp("^[0-9A-Za-z\\-=\\[\\];,./~!@#$%^*()_+}{:?]{6,21}$");
    var $pwd = $("#txt_password").val();
    var $pwd2 = $("#txt_password2").val();
    if ($pwd == '') {
        return 0;
    } else if ($pwd2 == '') {
        return 1;
    } else if ($pwd != $pwd2) {
        return 2;
    } else if (!regpwd.test($pwd)) {
        return 3;
    } else {
        return 4;
    }
}

function startTime() {
    var index = 60;
    var timer = setInterval(function () {
        index--;
        if (index == 0) {
            clearInterval(timer);
            $('.btnphonecodeget').attr('isok', 1);
            $('.btnphonecodeget').text('获取验证码');
        } else {
            $('.btnphonecodeget').text('重新获取(' + index + ')');
        }
    }, 1000);
}

function resetpwdbyphone() {
    var phone = $("#txt_phone").val();
    if (phone == '') {
        ShowDialog("必须填写手机号");
        return false;
    }
    var code = $("#txt_phonecode").val();
    if (code == '') {
        ShowDialog("必须填写验证码");
        return false;
    }
    if (resetpwd() == 0) {
        ShowDialog("密码不填可是不行的哦~");
        return false;
    } else if (resetpwd() == 1) {
        ShowDialog("新密码不填可是不行的哦~");
        return false;
    } else if (resetpwd() == 2) {
        ShowDialog("两次密码输入不一致~");
        return false;
    } else if (resetpwd() == 3) {
        ShowDialog('请输入6位及以上密码');
        $("#txt_password").val('');
        $("#txt_password2").val('');
        return false;
    }
    ShowDialog('忘记密码');
}