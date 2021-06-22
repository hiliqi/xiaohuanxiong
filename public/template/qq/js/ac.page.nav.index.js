function Scroll(options) {
    var cssCore = function(testCss) {
            switch (true) {
                case testCss.webkitTransition === "":
                    return "webkit";
                    break;
                case testCss.MozTransition === "":
                    return "Moz";
                    break;
                case testCss.msTransition === "":
                    return "ms";
                    break;
                case testCss.OTransition === "":
                    return "O";
                    break;
                default:
                    return ""
            }
        }(document.createElement("ComicView")
            .style),
        translate = function() {
            if (cssCore !== "") return function(o, x, y) {
                o[cssCore + "Transform"] = "translate(" + x + "px," + y + "px) translateZ(0)"
            };
            else return function(o, x, y) {
                o.left = x + "px";
                o.top =
                    y + "px"
            }
        }(),
        addClass = function(o, cls) {
            var oN = o.className;
            if (oN.indexOf(cls) === -1) o.className = oN + " " + cls
        },
        removeClass = function(o, cls) {
            var oN = o.className,
                arrName, arrNow;
            if (oN.indexOf(cls) === -1) return;
            arrName = oN.split(" ");
            arrNow = arrName.length;
            while (arrNow--)
                if (arrName[arrNow] === cls) arrName.splice(arrNow, 1);
            o.className = arrName.join(" ")
        },
        $$ = function(s) {
            return document.getElementById(s)
        };
    var c = $$(options.contain),
        w = $$(options.wrap),
        sb = $$(options.scrollBg),
        sk = $$(options.scrollBlock),
        fd = options.factHeightDiff ||
            0,
        fh = options.scrollBarHeightDiff || 0,
        fx = options.heightFix || 0,
        H = c.offsetHeight,
        cs = c.style,
        bs = sk.style,
        ws = w.style,
        gs = sb.style,
        isValidDrag = false,
        start = {},
        delta = {},
        nowTop = 0,
        o = w,
        max, h, S, s, _top, _thisScroll;
    cs.position = "absolute";
    while (o.tagName.toUpperCase() !== "BODY") {
        _thisScroll = o.getAttribute("data-scroll");
        if (_thisScroll) {
            scrollArr.push(_thisScroll);
            break
        } else o = o.parentNode
    }

    function pull() {
        if (_top < 0) _top = 0;
        else if (_top > max) _top = max;
        try {
            bs.top = _top + "px";
            translate(cs, 0, _top / max * (h - H) >> 0)
        } catch (e) {}
    }
    sk.onmousedown =
        function(e) {
            isValidDrag = true;
            body.onmousemove = goScroll;
            addClass(sb, "scroll-scrolling");
            removeClass(c, "moved");
            e = e || window.event;
            start = {
                X: e.clientX,
                Y: e.clientY,
                time: +new Date
            };
            delta = {}
        };
    sb.onmousedown = function(e) {
        e = e || window.event;
        if ((e.target || e.srcElement) === sk) return;
        _top = e.offsetY < nowTop ? nowTop - s * .7 >> 0 : nowTop + s * .7 >> 0;
        pull();
        nowTop = _top
    };
    return {
        init: function(width, height) {
            H = c.offsetHeight || H;
            h = fx ? fx : height - fd;
            h = H - 1 < h ? H : h;
            S = h - fh;
            s = h / H * S;
            s = s > S ? S + 1 : s;
            ws.width = c.offsetWidth + "px";
            ws.height = h + "px";
            try {
                gs.height =
                    S + "px";
                bs.height = s + "px"
            } catch (e) {}
            if (H === h) gs.display = "none";
            else gs.display = "block";
            max = ~~(S - s + 1);
            setTimeout(function() {
                pull()
            }, 0)
        },
        set: function(p) {
            _top = (S - s) * p;
            pull();
            nowTop = _top
        },
        reStart: function() {
            isValidDrag = false;
            removeClass(sb, "scroll-scrolling");
            addClass(c, "moved");
            if (!delta.Y) return;
            nowTop = _top
        },
        isValid: function() {
            return isValidDrag
        },
        nowTop: function() {
            return nowTop
        },
        runScroll: function(e) {
            _t = this;
            delta = {
                X: e.clientX - start.X,
                Y: e.clientY - start.Y
            };
            _top = nowTop + delta.Y;
            pull()
        },
        wheelMove: function(dir) {
            _top =
                nowTop + ~~(s * .1) * dir;
            pull();
            nowTop = _top
        }
    }
}
var protocol = "https:" === document.location.protocol ? "https:" : "http:",
    body = document.body,
    scrollArr = [],
    goScroll = function(e) {
        var len = scrollArr.length,
            o;
        e = e || window.event;
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        while (len--) {
            o = (new Function("return " + scrollArr[len]))();
            if (o.isValid()) o.runScroll(e)
        }
    },
    wheelScroll = function(e) {
        var isFromScroll = false,
            direct, thisScroll, o;
        e = e || window.event;
        o = e.target || e.srcElement;
        while (o.tagName.toUpperCase() !== "BODY") {
            thisScroll = o.getAttribute("data-scroll");
            if (thisScroll) {
                isFromScroll = true;
                break
            } else o = o.parentNode
        }
        if (!isFromScroll) return;
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        direct = -e.wheelDelta || e.detail;
        direct = direct < 0 ? -1 : 1;
        (new Function("return " + thisScroll))()
            .wheelMove(direct)
    },
    _t;
body.onmouseup = function() {
    body.onmousemove = null;
    if (_t) _t.reStart()
};
if (window.addEventListener) document.addEventListener("DOMMouseScroll", wheelScroll, false);
window.onmousewheel = document.onmousewheel = wheelScroll;
AC.namespace("AC.NavRight");
AC.NavRight = {
    isHomeLeftNav: document.getElementById("mod-fixed-left-wr") ? 1 : 0,
    cookie: function(name, value, options) {
        if (typeof value != "undefined") {
            options = options || {};
            if (value === null) {
                value = "";
                options.expires = -1
            }
            var expires = "";
            if (options.expires && (typeof options.expires == "number" || options.expires.toUTCString)) {
                var date;
                if (typeof options.expires == "number") {
                    date = new Date;
                    date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1E3)
                } else date = options.expires;
                expires = "; expires=" + date.toUTCString()
            }
            var path = options.path ?
                "; path=" + options.path : "";
            var domain = options.domain ? "; domain=" + options.domain : "";
            var secure = options.secure ? "; secure" : "";
            document.cookie = [name, "=", encodeURIComponent(value), expires, path, domain, secure].join("")
        } else {
            var cookieValue = null;
            if (document.cookie && document.cookie != "") {
                var cookies = document.cookie.split(";");
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = jQuery.trim(cookies[i]);
                    if (cookie.substring(0, name.length + 1) == name + "=") {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break
                    }
                }
            }
            return cookieValue
        }
    },
    checkAccessToken: function() {
        var c = AC.NavRight.cookie("access_token");
        if (c != null && c != "") return true;
        return false
    },
    getUserCookie: function() {
        var c = AC.Page.cookie("nav_userinfo_cookie");
        if (c != null && c != "") {
            var object = JSON.parse(c);
            if (typeof object != "object") return false;
            AC.Page.Core.openid = object.openid;
            AC.Page.Core.access_token = object.access_token;
            AC.Page.Core.nick = object.nick;
            AC.Page.Core.avatar = object.avatar;
            AC.Page.Core.hasLogin = object.hasLogin;
            AC.Page.Core.token = object.token
        }
        return AC.Page.Core.openid
    },
    setUserCookie: function() {
        var object = {
            "openid": AC.Page.cookie("open_id"),
            "access_token": AC.Page.cookie("access_token"),
            "nick": AC.Page.Core.nick,
            "avatar": AC.Page.Core.avatar,
            "hasLogin": AC.Page.Core.hasLogin,
            "token": AC.Page.Core.token
        };
        var date = new Date;
        date.setTime(date.getTime() + 36E5);
        AC.Page.cookie("nav_userinfo_cookie", JSON.stringify(object), {
            path: "/",
            expires: date
        })
    },
    processUrl: function(url) {
        if (url === protocol + "//ac.qq.com" || url === protocol + "//ac.qq.com/") url = protocol + "//ac.qq.com/index?auth=1";
        else if (url.indexOf("?") !=
            -1) url = url + (url.indexOf("auth=1") != -1 ? "" : "&auth=1");
        else url = url + (url.indexOf("auth=1") != -1 ? "" : "?auth=1");
        return url
    },
    showLogin: function(url, target) {
        pgvSendClick({
            hottag: "AC.NAVRIGHT.LOGIN"
        });
        if (undefined == url || url == "") url = location.href;
        else {
            var httpPos = url.indexOf("http");
            if (httpPos < 0) url = AC.Page.protocol + "//ac.qq.com" + url
        }
        url = AC.NavRight.processUrl(url);
        if (undefined == target || target == "") target = "top";
        else target = "self";
        $.blockUI({
            message: $("#loginframe"),
            css: {
                top: "30%",
                left: "55%",
                border: "none"
            }
        });
        document.domain = "qq.com";
        var link = "https://graph.qq.com/oauth2.0/authorize",
            params = "?";
        params += "response_type=code&";
        params += "client_id=101483258&";
        params += "redirect_uri=" + AC.Page.protocol + "//ac.qq.com/loginSuccess.html?url=" + encodeURIComponent(url);
        $("#login_ifr")
            .attr("src", link + params);
        $(".blockPage")
            .css({
                "height": "496px",
                "left": "50%",
                "top": "50%",
                "width": "500px",
                "margin": "-191px 0 0 -200px"
            })
    },
    showUserImage: function() {
        $("#sidebarComTabMe")
            .find("img")
            .attr("src", AC.Page.Core.avatar)
    },
    isUrlValid: function(url) {
        var res =
            url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        if (res == null) return "https://ac.qq.com/";
        else return url
    },
};
AC.namespace("AC.NavRight.Core");
AC.NavRight.Core = {
    nick: "",
    avatar: "",
    historyList: {}
};
! function() {
    window.navComScrollHistory = null;
    window.navComScrollCollect = null;
    ajax = {
        _createXMLHttpRequest: function(oldVersion, newVersion) {
            return function() {
                if (oldVersion) return new ActiveXObject("Microsoft.XMLHTTP");
                else if (newVersion) return new XMLHttpRequest
            }
        }(window.ActiveXObject, window.XMLHttpRequest),
        get: function(settings) {
            var xhr = this._createXMLHttpRequest(),
                data = settings.data || "",
                async = settings.async || true;
            xhr.open("GET", settings.url, async);
            xhr.onreadystatechange =
                function() {
                    if (xhr.readyState === 4 && xhr.status === 200) settings.callback(xhr.responseText)
                };
            xhr.send(data)
        },
        post: function(settings) {
            var xhr = this._createXMLHttpRequest(),
                data = settings.data || "";
            if (data) data = data.replace(/\+/g, "%2B");
            xhr.open("POST", settings.url);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200)
                    if (typeof settings.callback === "function")
                        if (settings.argu) settings.callback(xhr.responseText, settings.argu);
                        else settings.callback(xhr.responseText)
            };
            xhr.setRequestHeader("Content-Type",
                "application/x-www-form-urlencoded");
            xhr.send(data)
        }
    };
    var lastTime = 0;
    var requestAnimationFrame = function(callback, element) {
            var currTime = +new Date,
                timeToCall = Math.max(0, 16.7 - currTime + lastTime),
                id = window.setTimeout(function() {
                    callback(currTime + timeToCall)
                }, timeToCall);
            lastTime = currTime + timeToCall;
            return id
        },
        addClass = function(o, cls) {
            if (!o) return;
            var oN = o.className;
            if (oN.indexOf(cls) === -1) o.className = oN + " " + cls
        };
    var winHeight = document.documentElement.clientHeight || window.innerHeight,
        $$ = function(i) {
            return document.getElementById(i)
        },
        isIE = function(ua) {
            return ua.indexOf("MSIE") !== -1
        }(navigator.userAgent),
        removeClass = function(o, cls) {
            if (!o) return;
            var oN = o.className,
                arrName, arrNow;
            if (oN.indexOf(cls) === -1) return;
            arrName = oN.split(" ");
            arrNow = arrName.length;
            while (arrNow--)
                if (arrName[arrNow] === cls) arrName.splice(arrNow, 1);
            o.className = arrName.join(" ")
        },
        navBindEvent = function(o, e, f) {
            if (window.addEventListener) return function(o, e, f) {
                if (!o) return;
                o.addEventListener(e, f, false)
            };
            else if (window.attachEvent) return function(o, e, f) {
                if (!o) return;
                o.attachEvent("on" + e, f)
            };
            else {
                if (!o) return;
                o["on" + e] = f
            }
        }(),
        changeLeft = function() {
            if (isIE) return function(o, y, t) {
                if (o.currentStyle.left === "auto") o.style.left = "-190px";
                var cs = o.currentStyle || window.getComputedStyle(o, null),
                    s = o.style,
                    cy = parseInt(s.left || cs.left || 0, 10),
                    dy = y - cy,
                    ft = +new Date,
                    end = ft + t,
                    pos = 0,
                    diff, _trans = function() {
                        if (+new Date > end) {
                            s.left = y + "px";
                            return 0
                        } else {
                            diff = end - new Date;
                            pos = diff / t;
                            s.left = cy + dy * (1 - pos) + "px"
                        }
                        return 1
                    },
                    _requestTrans = function() {
                        requestAnimationFrame(function() {
                            if (_trans()) _requestTrans()
                        })
                    };
                _requestTrans()
            };
            else return function(o, to) {
                o.style.left = to + "px"
            }
        }();
    var hasShowCode = 0,
        leftActiveIndex = -1,
        leftActiveIndexUpdate = -1;
    if (AC.NavRight.isHomeLeftNav) {
        var positionMap = {
            0: $("#in-strong-wr")
                .offset()
                .top - 200,
            1: $("#in-anishe-wrap")
                .offset()
                .top - 200,
            2: $("#in-sign-wr")
                .offset()
                .top - 200,
            3: $("#in-video-wr")
                .offset()
                .top - 200,
            4: $("#in-vip-wr")
                .offset()
                .top - 200,
            5: $("#in-teen-list-wr")
                .offset()
                .top - 200,
            6: $("body")
                .height() - $(window)
                .height() - 200
        };
        setTimeout(function() {
            positionMap = {
                0: $("#in-strong-wr")
                        .offset()
                        .top -
                    200,
                1: $("#in-anishe-wrap")
                    .offset()
                    .top - 200,
                2: $("#in-sign-wr")
                    .offset()
                    .top - 200,
                3: $("#in-video-wr")
                    .offset()
                    .top - 200,
                4: $("#in-vip-wr")
                    .offset()
                    .top - 200,
                5: $("#in-teen-list-wr")
                    .offset()
                    .top - 200,
                6: $("body")
                    .height() - $(window)
                    .height() - 200
            }
        }, 2E3)
    }

    function topHandler() {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (scrollTop > winHeight) {
            $$("sidebarComTabTop")
                .style.display = "block";
            if (!hasShowCode) {
                $(codeImg)
                    .fadeIn("normal");
                showCode = 1;
                $(body)
                    .bind("click",
                        codeHide);
                hasShowCode = 1
            }
        } else $$("sidebarComTabTop")
            .style.display = "none";
        if (AC.NavRight.isHomeLeftNav) {
            if (scrollTop > positionMap["7"] + 70) $("#mod-fixed-left-wr")
                .addClass("mod-fixed-left-stop");
            else $("#mod-fixed-left-wr")
                .removeClass("mod-fixed-left-stop");
            if (scrollTop > positionMap["0"]) leftActiveIndexUpdate = 0;
            else leftActiveIndexUpdate = -1;
            if (scrollTop > positionMap["1"]) leftActiveIndexUpdate = 1;
            if (scrollTop > positionMap["2"]) leftActiveIndexUpdate = 2;
            if (scrollTop > positionMap["3"]) leftActiveIndexUpdate =
                3;
            if (scrollTop > positionMap["4"]) leftActiveIndexUpdate = 4;
            if (scrollTop > positionMap["5"]) leftActiveIndexUpdate = 5;
            if (scrollTop > positionMap["6"]) leftActiveIndexUpdate = 6;
            if (scrollTop > positionMap["7"]) leftActiveIndexUpdate = 7;
            if (leftActiveIndexUpdate !== leftActiveIndex && leftActiveIndexUpdate !== -1) $("#mod-fixed-left-tags")
                .find("li")
                .eq(leftActiveIndexUpdate)
                .addClass("active")
                .siblings()
                .removeClass("active");
            else if (leftActiveIndexUpdate === -1) $("#mod-fixed-left-tags")
                .find("li")
                .removeClass("active");
            leftActiveIndex =
                leftActiveIndexUpdate
        }
    }

    function resizeHandler() {
        winHeight = document.documentElement.clientHeight || window.innerHeight;
        winWidth = document.documentElement.clientWidth || window.innerWidth;
        if (window.navComScrollHistory) window.navComScrollHistory.init(winWidth, winHeight - 80);
        if (window.navComScrollCollect) window.navComScrollCollect.init(winWidth, winHeight - 120);
        if (winHeight < 706) $("#sidebarComTab .tab-avatar")
            .css({
                "margin-top": 25
            });
        else $("#sidebarComTab .tab-avatar")
            .css({
                "margin-top": 225
            })
    }
    navBindEvent(window,
        "scroll", topHandler);
    navBindEvent(window, "resize", resizeHandler);
    resizeHandler();
    var sidebarComTab = $$("sidebarComTab");
    var panelList = $("#sidebar-common .side-panel");
    navBindEvent($$("sidebarComPanelMeClose"), "click", function(e) {
        e = e || window.event;
        target = e.target || e.srcElement;
        if (target.getAttribute("data-type") == "panel-close") {
            removeClass(sidebarComTab, "active");
            changeLeft(target.parentNode, 0, 200);
            $(tabMeParent)
                .removeClass("active");
            activePanel = 0
        }
    });
    navBindEvent($$("sidebarComPanelCollectClose"),
        "click",
        function(e) {
            e = e || window.event;
            target = e.target || e.srcElement;
            if (target.getAttribute("data-type") == "panel-close") {
                removeClass(sidebarComTab, "active");
                changeLeft(target.parentNode, 0, 200);
                $(tabCollectParent)
                    .removeClass("active");
                activePanel = 0
            }
        });
    navBindEvent($$("sidebarComPanelHistoryClose"), "click", function(e) {
        e = e || window.event;
        target = e.target || e.srcElement;
        if (target.getAttribute("data-type") == "panel-close") {
            removeClass(sidebarComTab, "active");
            changeLeft(target.parentNode, 0, 200);
            $(tabHistoryParent)
                .removeClass("active");
            activePanel = 0
        }
    });
    navBindEvent($$("sidebarComPanelVipClose"), "click", function(e) {
        e = e || window.event;
        target = e.target || e.srcElement;
        if (target.getAttribute("data-type") == "panel-close") {
            removeClass(sidebarComTab, "active");
            changeLeft(target.parentNode, 0, 200);
            $(tabVipParent)
                .removeClass("active");
            activePanel = 0
        }
    });
    window.goTop = function(acceleration, time) {
        acceleration = acceleration || .1;
        time = time || 0;
        var x1 = 0;
        var y1 = 0;
        var x2 = 0;
        var y2 = 0;
        var x3 = 0;
        var y3 = 0;
        if (document.documentElement) {
            x1 = document.documentElement.scrollLeft ||
                0;
            y1 = document.documentElement.scrollTop || 0
        }
        if (document.body) {
            x2 = document.body.scrollLeft || 0;
            y2 = document.body.scrollTop || 0
        }
        var x3 = window.scrollX || 0;
        var y3 = window.scrollY || 0;
        var x = Math.max(x1, Math.max(x2, x3));
        var y = Math.max(y1, Math.max(y2, y3));
        var speed = 1 + acceleration;
        window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));
        if (x > 0 || y > 0) {
            var invokeFunction = "goTop(" + acceleration + ", " + time + ")";
            window.setTimeout(invokeFunction, time)
        }
    };
    var activePanel = 0;
    var sidebarComPanelMe = $("#sidebarComPanelMe"),
        sidebarComPanelVIP =
            $("#sidebarComPanelVIP"),
        sidebarComPanelCollect = $("#sidebarComPanelCollect"),
        sidebarComPanelHistory = $("#sidebarComPanelHistory"),
        tabHistory = $("#sidebarComTabHistory"),
        tabCollect = $("#sidebarComTabCollect"),
        tabVip = $("#sidebarComTabVIP"),
        tabMeParent = $("#sidebarComTabMe"),
        tabHistoryParent = $("#sidebarComTabHistory")
            .parent(),
        tabCollectParent = $("#sidebarComTabCollect")
            .parent(),
        tabVipParent = $("#sidebarComTabVIP")
            .parent(),
        codeWrap = $("#sideComCodeWrap"),
        codeImg = $("#sideComCodeImg"),
        showCode = 0;

    function blankPanelShrink(e) {
        var _con =
            $("#sidebar-common");
        if (!_con.is(e.target) && _con.has(e.target)
            .length === 0) {
            removeClass(sidebarComTab, "active");
            switch (activePanel) {
                case 1:
                    changeLeft($$("sidebarComPanelMe"), 0, 200);
                    $(tabMeParent)
                        .removeClass("active");
                    break;
                case 2:
                    changeLeft($$("sidebarComPanelCollect"), 0, 200);
                    $(tabCollectParent)
                        .removeClass("active");
                    break;
                case 3:
                    changeLeft($$("sidebarComPanelHistory"), 0, 200);
                    $(tabHistoryParent)
                        .removeClass("active");
                    break;
                case 4:
                    changeLeft($$("sidebarComPanelVIP"), 0, 200);
                    $(tabVipParent)
                        .removeClass("active");
                    break
            }
            activePanel = 0;
            $(body)
                .unbind("click", blankPanelShrink)
        }
    }

    function codeHide(e) {
        var _con1 = $(codeImg);
        var _con2 = $(codeWrap);
        if (!_con1.is(e.target) && _con1.has(e.target)
            .length === 0 && !_con2.is(e.target) && _con2.has(e.target)
            .length === 0) {
            $(codeImg)
                .fadeOut("normal");
            $(body)
                .unbind("click", codeHide);
            showCode = 0
        }
    }
    navBindEvent($$("sidebarComTabMe"), "click", function(e) {
        if (!AC.NavRight.cookie("nav_userinfo_cookie")) AC.Page.showLogin();
        else {
            pgvSendClick({
                hottag: "AC.NAVRIGHT.PANEL.USER"
            });
            $(tabMeParent)
                .addClass("active");
            addClass(sidebarComTab, "active");
            addClass($$("sidebarComPanelMe"), "active");
            switch (activePanel) {
                case 0:
                    $(sidebarComPanelMe)
                        .show(0, function() {
                            changeLeft($$("sidebarComPanelMe"), -207, 200)
                        });
                    break;
                case 2:
                    $(sidebarComPanelMe)
                        .removeClass("nav-anm")
                        .css("left", -207)
                        .show(0, function() {
                            $(this)
                                .addClass("nav-anm")
                        });
                    $(sidebarComPanelCollect)
                        .hide()
                        .css("left", 0);
                    $(tabCollectParent)
                        .removeClass("active");
                    break;
                case 3:
                    $(sidebarComPanelMe)
                        .removeClass("nav-anm")
                        .css("left", -207)
                        .show(0, function() {
                            $(this)
                                .addClass("nav-anm")
                        });
                    $(sidebarComPanelHistory)
                        .hide()
                        .css("left", 0);
                    $(tabHistoryParent)
                        .removeClass("active");
                    break;
                case 4:
                    $(sidebarComPanelMe)
                        .removeClass("nav-anm")
                        .css("left", -207)
                        .show(0, function() {
                            $(this)
                                .addClass("nav-anm")
                        });
                    $(sidebarComPanelVIP)
                        .hide()
                        .css("left", 0);
                    $(tabVipParent)
                        .removeClass("active");
                    break
            }
            activePanel = 1;
            ajax.get({
                url: protocol + "//ac.qq.com/MyPersonalCenter/getUserDetailInfo",
                callback: function(data) {
                    if (JSON.parse(data)
                        .status == 2) {
                        var userList = JSON.parse(data)
                            .data;
                        var d = JSON.parse(data);
                        AC.NavRight.Core.userList =
                            userList;
                        AC.NavRight.Core.hasLoadUser = 1;
                        ajax.get({
                            url: protocol + "//ac.qq.com/Ajax/getMessageNotify",
                            callback: function(data) {
                                var d = JSON.parse(data);
                                if (d.state == 1) {
                                    AC.NavRight.Core.userList.news = d.msgList.length;
                                    AC.NavRight.loadMePanel()
                                }
                            }
                        })
                    } else if (JSON.parse(data)
                        .status == -99 || JSON.parse(data)
                        .status == -97) AC.Page.showLogin()
                }
            })
        }
        $(body)
            .bind("click", blankPanelShrink)
    });
    navBindEvent($$("sidebarComTabVIP"), "click", function(e) {
        if (!AC.NavRight.cookie("nav_userinfo_cookie")) AC.Page.showLogin();
        else {
            pgvSendClick({
                hottag: "AC.NAVRIGHT.PANEL.VIP"
            });
            $(tabVipParent)
                .addClass("active");
            addClass(sidebarComTab, "active");
            addClass($$("sidebarComPanelVIP"), "active");
            switch (activePanel) {
                case 0:
                    $(sidebarComPanelVIP)
                        .show(0, function() {
                            changeLeft($$("sidebarComPanelVIP"), -207, 200)
                        });
                    break;
                case 1:
                    $(sidebarComPanelVIP)
                        .removeClass("nav-anm")
                        .css("left", -207)
                        .show(0, function() {
                            $(this)
                                .addClass("nav-anm")
                        });
                    $(sidebarComPanelMe)
                        .hide()
                        .css("left", 0);
                    $(tabMeParent)
                        .removeClass("active");
                    break;
                case 2:
                    $(sidebarComPanelVIP)
                        .removeClass("nav-anm")
                        .css("left", -207)
                        .show(0,
                            function() {
                                $(this)
                                    .addClass("nav-anm")
                            });
                    $(sidebarComPanelCollect)
                        .hide()
                        .css("left", 0);
                    $(tabCollectParent)
                        .removeClass("active");
                    break;
                case 3:
                    $(sidebarComPanelVIP)
                        .removeClass("nav-anm")
                        .css("left", -207)
                        .show(0, function() {
                            $(this)
                                .addClass("nav-anm")
                        });
                    $(sidebarComPanelHistory)
                        .hide()
                        .css("left", 0);
                    $(tabHistoryParent)
                        .removeClass("active");
                    break
            }
            activePanel = 4;
            ajax.get({
                url: protocol + "//ac.qq.com/MyPersonalCenter/getUserDetailInfo",
                callback: function(data) {
                    if (JSON.parse(data)
                        .status == 2) {
                        var userList =
                            JSON.parse(data)
                                .data;
                        AC.NavRight.Core.userList = userList;
                        ajax.get({
                            url: protocol + "//ac.qq.com/MyPersonalCenter/getVipFreeComicCount",
                            callback: function(data) {
                                if (JSON.parse(data)
                                    .status == 2) {
                                    var d = JSON.parse(data)
                                        .data;
                                    AC.NavRight.Core.vipFree = d;
                                    AC.NavRight.Core.hasLoadUser = 1;
                                    AC.NavRight.loadVipPanel()
                                } else if (JSON.parse(data)
                                    .status == -99 || JSON.parse(data)
                                    .status == -97) AC.Page.showLogin()
                            }
                        })
                    } else if (JSON.parse(data)
                        .status == -99 || JSON.parse(data)
                        .status == -97) AC.Page.showLogin()
                }
            })
        }
        $(body)
            .bind("click",
                blankPanelShrink)
    });
    navBindEvent($$("sidebarComTabCollect"), "click", function(e) {
        if (!AC.NavRight.cookie("nav_userinfo_cookie")) AC.Page.showLogin();
        else {
            pgvSendClick({
                hottag: "AC.NAVRIGHT.PANEL.COLLECT"
            });
            $(tabCollectParent)
                .addClass("active");
            addClass(sidebarComTab, "active");
            addClass($$("sidebarComPanelCollect"), "active");
            switch (activePanel) {
                case 0:
                    $(sidebarComPanelCollect)
                        .show(0, function() {
                            changeLeft($$("sidebarComPanelCollect"), -207, 200)
                        });
                    break;
                case 1:
                    $(sidebarComPanelCollect)
                        .removeClass("nav-anm")
                        .css("left",
                            -207)
                        .show(0, function() {
                            $(this)
                                .addClass("nav-anm")
                        });
                    $(sidebarComPanelMe)
                        .hide()
                        .css("left", 0);
                    $(tabMeParent)
                        .removeClass("active");
                    break;
                case 3:
                    $(sidebarComPanelCollect)
                        .removeClass("nav-anm")
                        .css("left", -207)
                        .show(0, function() {
                            $(this)
                                .addClass("nav-anm")
                        });
                    $(sidebarComPanelHistory)
                        .hide()
                        .css("left", 0);
                    $(tabHistoryParent)
                        .removeClass("active");
                    break;
                case 4:
                    $(sidebarComPanelCollect)
                        .removeClass("nav-anm")
                        .css("left", -207)
                        .show(0, function() {
                            $(this)
                                .addClass("nav-anm")
                        });
                    $(sidebarComPanelVIP)
                        .hide()
                        .css("left",
                            0);
                    $(tabVipParent)
                        .removeClass("active");
                    break
            }
            activePanel = 2;
            var updateLen = 0;
            ajax.get({
                url: protocol + "//ac.qq.com/MyPersonalCenter/getUserCollection",
                callback: function(data) {
                    if (JSON.parse(data)
                        .status == 2) {
                        var collectList = JSON.parse(data)
                            .data;
                        for (var i = 0, len = collectList.length; i < len; i++)
                            if (collectList[i].updateFlag == 1) updateLen++;
                        AC.NavRight.Core.updateLen = updateLen;
                        if (updateLen > 0) $("#sidebarComColDotLen")
                            .show();
                        else $("#sidebarComColDotLen")
                            .hide();
                        var d = JSON.parse(data);
                        d["updateLen"] = updateLen;
                        AC.NavRight.Core.collectList = d;
                        AC.NavRight.Core.hasLoadCollect = 1;
                        AC.NavRight.loadCollectPanel()
                    } else if (JSON.parse(data)
                        .status == -99 || JSON.parse(data)
                        .status == -97) AC.Page.showLogin()
                }
            })
        }
        $(body)
            .bind("click", blankPanelShrink)
    });
    navBindEvent($$("sidebarComTabHistory"), "click", function(e) {
        pgvSendClick({
            hottag: "AC.NAVRIGHT.PANEL.HISTORY"
        });
        $(tabHistoryParent)
            .addClass("active");
        addClass(sidebarComTab, "active");
        addClass($$("sidebarComPanelHistory"), "active");
        switch (activePanel) {
            case 0:
                $(sidebarComPanelHistory)
                    .show(0,
                        function() {
                            changeLeft($$("sidebarComPanelHistory"), -207, 200)
                        });
                break;
            case 1:
                $(sidebarComPanelHistory)
                    .removeClass("nav-anm")
                    .css("left", -207)
                    .show(0, function() {
                        $(this)
                            .addClass("nav-anm")
                    });
                $(sidebarComPanelMe)
                    .hide()
                    .css("left", 0);
                $(tabMeParent)
                    .removeClass("active");
                break;
            case 2:
                $(sidebarComPanelHistory)
                    .removeClass("nav-anm")
                    .css("left", -207)
                    .show(0, function() {
                        $(this)
                            .addClass("nav-anm")
                    });
                $(sidebarComPanelCollect)
                    .hide()
                    .css("left", 0);
                $(tabCollectParent)
                    .removeClass("active");
                break;
            case 4:
                $(sidebarComPanelHistory)
                    .removeClass("nav-anm")
                    .css("left",
                        -207)
                    .show(0, function() {
                        $(this)
                            .addClass("nav-anm")
                    });
                $(sidebarComPanelVIP)
                    .hide()
                    .css("left", 0);
                $(tabVipParent)
                    .removeClass("active");
                break
        }
        activePanel = 3;
        if (!AC.NavRight.cookie("nav_userinfo_cookie")) AC.NavRight.requestLocalHistory();
        else ajax.get({
            url: protocol + "//ac.qq.com/MyPersonalCenter/getUserHistory?_=" + Math.random(),
            callback: function(data) {
                if (JSON.parse(data)
                    .status == 2) {
                    var d = JSON.parse(data);
                    AC.NavRight.Core.historyList = d.data;
                    if (d.data.list.length == 0) AC.NavRight.loadRankList();
                    else {
                        AC.NavRight.loadHistoryPanel();
                        $("#sidebarComRankData")
                            .hide();
                        $("#sidebarComHistoryData")
                            .show()
                    }
                } else if (JSON.parse(data)
                    .status == -99 || JSON.parse(data)
                    .status == -97) AC.NavRight.requestLocalHistory()
            }
        });
        $(body)
            .bind("click", blankPanelShrink)
    });
    var updateLen = 0;
    if (AC.Page.cookie("access_token")) ajax.get({
        url: protocol + "//ac.qq.com/MyPersonalCenter/getUserCollection",
        callback: function(data) {
            if (JSON.parse(data)
                .status == 2) {
                var collectList = JSON.parse(data)
                    .data;
                for (var i = 0, len = collectList.length; i < len; i++)
                    if (collectList[i].updateFlag ==
                        1) updateLen++;
                AC.NavRight.Core.updateLen = updateLen;
                if (updateLen > 0) $("#sidebarComColDotLen")
                    .show();
                var d = JSON.parse(data);
                d["updateLen"] = updateLen;
                AC.NavRight.Core.collectList = d;
                AC.NavRight.Core.hasLoadCollect = 1
            }
        }
    });
    navBindEvent($$("sidebarComTabTop"), "click", function(e) {
        $("html, body")
            .animate({
                scrollTop: 0
            }, 100)
    });
    $("#sidebarComCode")
        .mouseenter(function() {
            if (showCode === 0) {
                $(codeImg)
                    .fadeIn("normal");
                showCode = 1;
                $(body)
                    .bind("click", codeHide)
            }
        });
    $("#sidebarComCode")
        .mouseout(function() {
            showCode = 0
        });
    $("#sidebarComCode")
        .click(function() {
            if (showCode === 1) {
                $(codeImg)
                    .fadeOut("normal");
                showCode = 2;
                $(body)
                    .unbind("click", codeHide)
            } else {
                $(codeImg)
                    .fadeIn("normal");
                showCode = 1;
                $(body)
                    .bind("click", codeHide)
            }
        });
    $(".tab-feedback")
        .on("click", function() {
            if (!AC.NavRight.cookie("nav_userinfo_cookie")) AC.Page.showLogin();
            else {
                var url = getAiseeUrl(1);
                $(".aiseeFrame")
                    .attr("src", url);
                $(".aiseeNavItem")
                    .removeClass("active");
                $(".aiseeNavSubmit")
                    .addClass("active");
                $("#navAiseeBox")
                    .css("display", "block")
            }
        });
    $(".aiseeNavItem")
        .on("click",
            function() {
                $(".aiseeNavItem")
                    .removeClass("active");
                $(this)
                    .addClass("active");
                var tmpId = $(this)
                    .attr("class");
                var type = tmpId.indexOf("aiseeNavHistory") !== -1 ? 2 : 1;
                var url = getAiseeUrl(type);
                $(this)
                    .parents(".aiseeBox")
                    .find(".aiseeFrame")
                    .attr("src", url)
            });

    function getAiseeUrl(type) {
        if (type < 0) return false;
        var url = "";
        $.ajax({
            url: protocol + "//ac.qq.com/Ajax/getAiseeUrl",
            data: {
                type: type
            },
            success: function(data) {
                var d = JSON.parse(data);
                if (d.status == -99) AC.Page.showLogin();
                else if (d.status == 2) url = d.data.url;
                else AC.UI.PopUp.showMsg("\u53c2\u6570\u9519\u8bef")
            },
            async: false
        });
        return url
    }
    $(".aiseeClose")
        .on("click", function() {
            $(this)
                .parents(".aiseeBox")
                .css("display", "none")
        })
}();