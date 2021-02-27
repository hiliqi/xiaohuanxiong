!
    function(t) {
        function e(e) {
            for (var o, r, s = e[0], c = e[1], u = e[2], l = 0, f = []; l < s.length; l++) r = s[l],
            Object.prototype.hasOwnProperty.call(n, r) && n[r] && f.push(n[r][0]),
                n[r] = 0;
            for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (t[o] = c[o]);
            for (d && d(e); f.length;) f.shift()();
            return i.push.apply(i, u || []),
                a()
        }
        function a() {
            for (var t, e = 0; e < i.length; e++) {
                for (var a = i[e], o = !0, s = 1; s < a.length; s++) {
                    var c = a[s];
                    0 !== n[c] && (o = !1)
                }
                o && (i.splice(e--, 1), t = r(r.s = a[0]))
            }
            return t
        }
        var o = {},
            n = {
                11 : 0
            },
            i = [];
        function r(e) {
            if (o[e]) return o[e].exports;
            var a = o[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return t[e].call(a.exports, a, a.exports, r),
                a.l = !0,
                a.exports
        }
        r.m = t,
            r.c = o,
            r.d = function(t, e, a) {
                r.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: a
                })
            },
            r.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
            },
            r.t = function(t, e) {
                if (1 & e && (t = r(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var a = Object.create(null);
                if (r.r(a), Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t) for (var o in t) r.d(a, o,
                    function(e) {
                        return t[e]
                    }.bind(null, o));
                return a
            },
            r.n = function(t) {
                var e = t && t.__esModule ?
                    function() {
                        return t["default"]
                    }: function() {
                        return t
                    };
                return r.d(e, "a", e),
                    e
            },
            r.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            },
            r.p = "/";
        var s = window.webpackJsonp = window.webpackJsonp || [],
            c = s.push.bind(s);
        s.push = e,
            s = s.slice();
        for (var u = 0; u < s.length; u++) e(s[u]);
        var d = c;
        i.push([10, 0]),
            a()
    } ({
        10 : function(t, e, a) {
            t.exports = a("E8B5")
        },
        E8B5: function(t, e, a) {
            "use strict"; (function(t) {
                var e = s(a("gDS+"));
                a("0OJv"),
                    a("5oY/");
                var o = s(a("7Qib")),
                    n = s(a("EWt3")),
                    i = a("OKuY"),
                    r = s(a("Qyje"));
                function s(t) {
                    return t && t.__esModule ? t: {
                        "default": t
                    }
                }
                var c = t("h1[data-comic_id]"),
                    u = parseInt(c.data("comic_id")),
                    d = c.text(); (0, i.randomTagsColor)(t("#randomColor .tags")),
                    function h(e) {
                        var a = t(".score-star");
                        var o = t(".rated strong");
                        var r = t(".score-num strong");
                        var s = Number(r.text());
                        var c = Number(o.text());
                        var u = a.children(".star-hover");
                        a.on("mousemove",
                            function(e) {
                                e = e || window.event;
                                var a = t(this),
                                    o = a.offset().left,
                                    n = e.pageX || 0,
                                    i = Math.round(n - o) / a.width();
                                i = (i = i >= 1 ? 1 : i) <= 0 ? 0 : i,
                                    r.text((10 * i).toFixed(1)),
                                    u.css({
                                        width: 100 * i + "%"
                                    })
                            }).on("mouseleave",
                            function() {
                                r.text(s),
                                    u.css({
                                        width: 10 * s + "%"
                                    })
                            }).on("click",
                            function(a) {
                                a.stopPropagation();
                                var u = n["default"].getLoginInfo();
                                if (u) {
                                    var d = t(this),
                                        l = Number(r.text());
                                    u.comic_id = e,
                                        u.score = 10 * l,
                                        s = l,
                                        r.text(s),
                                        o.text(c + 1),
                                        d.off("mousemove mouseleave click"),
                                        t.ajax({
                                            url: n["default"].config.api + "addscore/",
                                            type: "post",
                                            dataType: "jsonp",
                                            data: u,
                                            success: function(t) { (0, i.resStatusTips)(t.status, "感谢您的参与评价!", 1)
                                            },
                                            error: function(t) {
                                                h(e),
                                                    (0, i.resStatusTips)(t.status)
                                            }
                                        })
                                }
                            })
                    } (u),
                    t("#collect").click(function() {
                        //(0, i.addRecord)(n["default"].config.recordType.ubook, [u, d, "", "", (new Date).getTime(), ""])
                    }),
                    //n["default"].readCount(u),
                    t.each(["addmonthticket", "addrecommend"],
                        function(a, s) {
                            t("#" + s.replace("add", "")).click(function() {
                                var a = n["default"].getLoginInfo(),
                                    c = t(this);
                                if (a) {
                                    a.comic_id = u,
                                        a.time = Date.now();
                                    var d = JSON.parse(n["default"].cookie("user"));
                                    t.ajax(n["default"].config.api + s + "/", {
                                        dataType: "json",
                                        method: "post",
                                        data: r["default"].stringify(a),
                                        success: function(t) {
                                            var a = c.find("strong");
                                            0 === t.status ? ("addmonthticket" === s ? (a.text(o["default"].numberToUnitStr(t.data.comic_ticket)), d.Cticket = t.data.user_ticket) : (a.text(o["default"].numberToUnitStr(t.data.count)), d.recommend = t.data.user_count), (0, i.resStatusTips)(t.status, "感谢您对本漫画的支持！", 1), n["default"].cookie("user", (0, e["default"])(d), {
                                                expires: 8760,
                                                domain: ".zymk.cn"
                                            })) : (0, i.resStatusTips)(t.status, t.msg, 1)
                                        }
                                    }).fail(function(t) { (0, i.resStatusTips)(t.status, null)
                                    })
                                }
                            })
                        }),
                    t("#reward").click(function() {
                        var a = n["default"].getLoginInfo();
                        if (a) {
                            a.comic_id = u;
                            var r = t(this),
                                s = JSON.parse(n["default"].cookie("user"));
                            layer.prompt({
                                    title: "您还有" + s.Cgold + "个元宝",
                                    formType: 0,
                                    btn: ["确认打赏", "取消"]
                                },
                                function(c, u) {
                                    if (!/[0-9]+$/.test(c)) return layer.msg("请输入正确的打赏金额!", {
                                        time: 0,
                                        btn: ["知道了"]
                                    }),
                                        !1;
                                    if (!c || c <= 0) layer.msg("您最少要打赏1个元宝!", {
                                        time: 0,
                                        btn: ["知道了"]
                                    });
                                    else {
                                        if (s.Cgold < c) return layer.msg("你没有足够的元宝!", {
                                            time: 0,
                                            btn: ["知道了"]
                                        }),
                                            !1;
                                        layer.close(u),
                                            a.gold = c,
                                            t.ajax({
                                                url: n["default"].config.api + "addgold/",
                                                type: "post",
                                                dataType: "jsonp",
                                                data: a,
                                                success: function(a) {
                                                    0 === a.status && (s.Cgold = a.data.user_gold, n["default"].cookie("user", (0, e["default"])(s), {
                                                        expires: 8760,
                                                        domain: ".zymk.cn"
                                                    }), r.find("strong").text(o["default"].numberToUnitStr(a.data.comic_gold)), (0, i.resStatusTips)(a.status, "作者:" + t(".author-info .name").text() + "非常感谢您打赏的" + c + "元宝!", 1))
                                                },
                                                error: function(t) { (0, i.resStatusTips)(t.status, null, 2)
                                                }
                                            })
                                    }
                                })
                        }
                    });
                var l = n["default"].limitStore(n["default"].config.recordType.urecord),
                    f = t("#chapterList li:last-child").find("a").attr("href");
                function p() {
                    t(window).width() < 1300 ? t(".comic-operate .share").hide() : t(".comic-operate .share").show()
                }
                l && t.each(l,
                    function(e, a) {
                        t("#chapterList li").each(function() {
                            var e = t(this);
                            String(e.data("id")) === String(a[2]) && (e.addClass("readed").append('<i class="ift-read"></i>').siblings(".ift-new").remove(), f = e.find("a").attr("href"))
                        })
                    }),
                    t("#J_read").click(function() {
                        f ? location.href = f: layer.msg("抱歉还没有最新的章节信息！", {
                            time: 0,
                            btn: ["知道了"]
                        })
                    }),
                    t("#comic_desc").click(function() {
                        var e = t(this).find(".desc-con"),
                            a = t(this).find(".ift-down").attr("class", "ift-up");
                        layer.open({
                            title: d + "详情描述",
                            btn: "",
                            area: [e.width() + "px", "320px"],
                            content: t("#layerOpenCon").html(),
                            shade: .8,
                            shadeClose: !0,
                            anim: 1,
                            cancel: function() {
                                a.attr("class", "ift-down")
                            }
                        })
                    }),
                    t("#relatedComic").slide({
                        mainCell: ".warp-slider",
                        prevCell: ".ift-prev",
                        nextCell: ".ift-next",
                        mouseOverStop: !0,
                        trigger: "click",
                        titCell: ".hd ul li",
                        titOnClassName: "active",
                        effect: "left",
                        vis: "auto",
                        scroll: 1
                    }),
                    t("#chapterRank").click(function() {
                        var e = t("#chapterList"),
                            a = t(this).find("i");
                        a.hasClass("ift-sort") ? a.attr("class", "ift-sort_up") : a.attr("class", "ift-sort"),
                            e.find(".item").each(function(e, a) {
                                var o = t(this);
                                o.prependTo(o.parent())
                            })
                    }),
                    t.ajax({
                        type: "get",
                        url: "//community.321mh.com/comment/count",
                        data: {
                            ssid: u,
                            ssidType: 0,
                            opreateTime: Date.now(),
                            AppId: 11,
                            userIdentifier: 0,
                            commentType: 2
                        },
                        success: function(e) {
                            t("#comment_num").text(e.data)
                        }
                    }),
                    n["default"].thirdPartyComment(),
                    t('a[href^="#"]').on("click",
                        function() {
                            return t(this.hash).length ? t("html,body").animate({
                                    scrollTop: t(this.hash).offset().top - t(this).offset().top + t(window).scrollTop()
                                },
                                {
                                    queue: !1,
                                    duration: 1e3
                                }) : t("html,body").animate({
                                    scrollTop: 0
                                },
                                {
                                    queue: !1,
                                    duration: 1e3
                                }),
                                !1
                        }),
                    p(),
                    t(window).resize(function() {
                        p()
                    });
                var m = JSON.parse(n["default"].cookie("user"));
                m && t.ajax({
                    url: n["default"].config.api + "get_purchased_chapters/",
                    dataType: "jsonp",
                    data: {
                        type: m.type,
                        openid: m.openid,
                        client: "pc",
                        comic_id: t("[data-comic_id]").data("comic_id"),
                        time: Date.now()
                    },
                    success: function(e) {
                        0 === e.status && t.each(e.data,
                            function(e, a) {
                                t("[data-id=" + a + "]").find(".ift-lock").attr("class", "ift-unlock")
                            })
                    }
                })
            }).call(this, a("+2Rf"))
        }
    });