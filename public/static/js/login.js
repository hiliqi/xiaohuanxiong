var regpwd = new RegExp("^[0-9A-Za-z\\-=\\[\\];,./~!@#$%^*()_+}{:?]{6,21}$");

/**
 * 验证form表单数据
 * @param {any} action
 */
function verifyform() {
    var $username = $("#txt_username");
    var $phone = $("txt_phone");
    var $phonecode = $("txt_phonecode");
    var $pwd = $("#txt_password");
    var $pwd1 = $("#txt_password2");
    var $tip = $(parent + " .account-login-form .tip");
    if ($phone.length>0) {
        if ($.trim($phone.val()) === "")
        {
            $phone.focus().css({ outlineWidth: 1, outlineColor: "#fd113a" });
            ShowDialog("手机号码不填可是不行的哦~");
            return false;
        }
        if (!$phonecode || $.trim($phonecode.val()) === "") {
            $phonecode.focus().css({ outlineWidth: 1, outlineColor: "#fd113a" });
            ShowDialog("短信验证码不填可是不行的哦~");
            return false;
        }
    }
    else {
        if (!$username || $.trim($username.val()) === "") {
            ShowDialog("账号信息不填可是不行的哦~");
            $username.focus().css({ outlineWidth: 1, outlineColor: "#fd113a" });
            return false;
        }
    }
    if (!$pwd || $.trim($pwd.val()) === "") {
        ShowDialog("密码不填可是不行的哦~");
        $pwd.focus().css({ outlineWidth: 1, outlineColor: "#fd113a" });
        return false;
    }
    if ($pwd1.length > 0 && $.trim($pwd1.val()) === "") {
        ShowDialog("请再次输入密码");
        $pwd1.focus().css({ outlineWidth: 1, outlineColor: "#fd113a" });
        return false;
    }
    if ($pwd1.length > 0 && $.trim($pwd.val()) !== $.trim($pwd1.val())) {
        $tip.text("两次输入的密码不一致，请重新输入");
        $pwd.focus().css({ outlineWidth: 1, outlineColor: "#fd113a" }).val("");
        $pwd1.val("");
        return false;
    }
    if (!regpwd.test($pwd.val())) {
        ShowDialog("密码由6-20位字母、数字和字符组成");
        $pwd.focus().css({ outlineWidth: 1, outlineColor: "#fd113a" }).val("");
        if ($pwd1.length > 0) {
            $pwd1.val("");
        }
        return false;
    }
    return true;
}

function login(){
    var $username = $("#txt_username");
    var $pwd = $("#txt_password");
    var r = Math.random()
    if (!$username || $.trim($username.val()) === "") {
        ShowDialog("必须填写用户名");
        $username.focus().css({ outlineWidth: 1, outlineColor: "#fd113a" });
        $('#captcha').attr('src','account/captcha?rnd=' + r)
        return;
    }
    if (!$pwd || $.trim($pwd.val()) === "") {
        ShowDialog("必须填写密码");
        $pwd.focus().css({ outlineWidth: 1, outlineColor: "#fd113a" });
        $('#captcha').attr('src','account/captcha?rnd=' + r)
        return;
    }
    $.ajax({
        type: 'POST',
        url: "/login",
        data: $('#form-login').serialize(),
        dataType: 'json',
        success: function (data) {
            var result = data;
            if (result.err == 0){ //登录成功
                ShowDialog(result.msg);
                setTimeout(function () {
                    location.href = '/ucenter';
                }, 1000);
            } else {
                $('#captcha').attr('src','account/captcha?rnd=' + r)
                ShowDialog(result.msg);
            }
        },
        error: function (data) {
            $('#captcha').attr('src','account/captcha?rnd=' + r)
            ShowDialog(data.msg);
        },
    });
}

function register() {
    var regpwd = new RegExp("^[0-9A-Za-z\\-=\\[\\];,./~!@#$%^*()_+}{:?]{6,21}$");
    var $username = $("#txt_username");
    var $pwd = $("#txt_password");
    var $pwd1 = $("#txt_password2");
    var r = Math.random()
    if (!$username || $.trim($username.val()) === "") {
        ShowDialog("必须填写用户名");
        $username.focus().css({ outlineWidth: 1, outlineColor: "#fd113a" });
        $('#captcha').attr('src','account/captcha?rnd=' + r)
        return;
    }
    if (!$pwd || $.trim($pwd.val()) === "") {
        ShowDialog("必须填写密码");
        $pwd.focus().css({ outlineWidth: 1, outlineColor: "#fd113a" });
        $('#captcha').attr('src','account/captcha?rnd=' + r)
        return;
    }
    if ($pwd1.length > 0 && $.trim($pwd1.val()) === "") {
        ShowDialog("请再次输入密码");
        $pwd1.focus().css({ outlineWidth: 1, outlineColor: "#fd113a" });
        $('#captcha').attr('src','account/captcha?rnd=' + r)
        return;
    }
    if ($pwd1.length > 0 && $.trim($pwd.val()) !== $.trim($pwd1.val())) {
        ShowDialog("两次输入的密码不一致");
        $pwd.focus().css({ outlineWidth: 1, outlineColor: "#fd113a" }).val("");
        $pwd1.val("");
        $('#captcha').attr('src','account/captcha?rnd=' + r)
        return;
    }
    if (!regpwd.test($username.val())) {
        ShowDialog("用户名由6-20位字母、数字和字符组成");
        $username.focus().css({ outlineWidth: 1, outlineColor: "#fd113a" }).val("");
        if ($pwd1.length > 0) {
            $pwd1.val("");
        }
        $('#captcha').attr('src','account/captcha?rnd=' + r)
        return;
    }
    if (!regpwd.test($pwd.val())) {
        ShowDialog("密码由6-20位字母、数字和字符组成");
        $pwd.focus().css({ outlineWidth: 1, outlineColor: "#fd113a" }).val("");
        if ($pwd1.length > 0) {
            $pwd1.val("");
        }
        $('#captcha').attr('src','account/captcha?rnd=' + r)
        return;
    }

    $.ajax({
        type: 'POST',
        url: "/register",
        data: $('#form-reg').serialize(),
        dataType: 'json',
        success: function (data) {
            var result = data;
            if (result.err == 0){ //注册成功
                ShowDialog(result.msg);
                setTimeout(function () {
                    location.href = '/login';
                }, 1000);
            } else {
                $('#captcha').attr('src','account/captcha?rnd=' + r)
                ShowDialog(result.msg);
            }
        },
        error: function (data) {
            $('#captcha').attr('src','account/captcha?rnd=' + r)
            ShowDialog(data.msg);
        },
    });
}