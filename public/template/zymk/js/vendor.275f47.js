!
    function(e) {
        function t(n) {
            if (r[n]) return r[n].exports;
            var i = r[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(i.exports, i, i.exports, t),
                i.l = !0,
                i.exports
        }
        var n = window.webpackJsonp;
        window.webpackJsonp = function(r, a, o) {
            for (var s, l, u, c = 0,
                     d = []; c < r.length; c++) l = r[c],
            i[l] && d.push(i[l][0]),
                i[l] = 0;
            for (s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s]);
            for (n && n(r, a, o); d.length;) d.shift()();
            if (o) for (c = 0; c < o.length; c++) u = t(t.s = o[c]);
            return u
        };
        var r = {},
            i = {
                33 : 0
            };
        t.e = function(e) {
            function n() {
                s.onerror = s.onload = null,
                    clearTimeout(l);
                var t = i[e];
                //0 !== t && (t && t[1](new Error("Loading chunk " + e + " failed.")), i[e] = void 0)
            }
            var r = i[e];
            if (0 === r) return new Promise(function(e) {
                e()
            });
            if (r) return r[2];
            var a = new Promise(function(t, n) {
                r = i[e] = [t, n]
            });
            r[2] = a;
            var o = document.getElementsByTagName("head")[0],
                s = document.createElement("script");
            s.type = "text/javascript",
                s.charset = "utf-8",
                s.async = !0,
                s.timeout = 12e4,
            t.nc && s.setAttribute("nonce", t.nc),
                s.src = t.p + "js/" + e + "." + {
                    /*
            0 : "f92d9f7877",
            1 : "75b6d46f80",
            2 : "6c33ac96c2",
            3 : "f03c4c4288",
            4 : "d26718859a",
            5 : "3b4ad325aa",
            6 : "33060a6703",
            7 : "1fb82c4a41",
            8 : "e3acb9d4b1",
            9 : "ef08ad436f",
            10 : "9131ab64e6",
            11 : "8322cdac16",
            12 : "b44f9d6fb4",
            13 : "6e5efdc04d",
            14 : "84cf9dc422",
            15 : "c5a0f57436",
            16 : "8105accccb",
            17 : "dd90477318",
            18 : "519819aa07",
            19 : "0a156386ee",
            20 : "97f0497f14",
            21 : "f3ca8649c5",
            22 : "4c5d0ece09",
            23 : "b383c69c57",
            24 : "a7304c352d",
            25 : "4268aca6b7",
            26 : "87a3a3aaea",
            27 : "ecec4e360a",
            28 : "a986075f4b",
            29 : "bc055632ce",
            30 : "598b967abc",
            31 : "f7ff6d577a",
            32 : "f5ca762273"
			*/
                } [e] + ".js";
            var l = setTimeout(n, 12e4);
            return s.onerror = s.onload = n,
                //o.appendChild(s),
                a
        },
            t.m = e,
            t.c = r,
            t.i = function(e) {
                return e
            },
            t.d = function(e, n, r) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            },
            t.n = function(e) {
                var n = e && e.__esModule ?
                    function() {
                        return e.
                            default
                    }:
                    function() {
                        return e
                    };
                return t.d(n, "a", n),
                    n
            },
            t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            t.p = "/",
            t.oe = function(e) {
                throw console.error(e),
                    e
            },
            t(t.s = 181)
    } ([function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e: {
                default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.slideinLayer = t.slideoutLayer = t.showpager = t.t_cint = t.comitItemDom = t.strLen = t.tabTaggle = t.gologin = t.goback = t.compare = t.getCharcode = t.homeImg = t.initAcDetail = t.score = t.bd_share = t.dataURLtoBlob = t.UrlEncode = t.classImg = t.rankListInit = t.swipeImgInit = t.tabInit = t.uniqeByKeys = t.objToString = t.deepClone = t.getTimeSpan = t.formatDate = t.installData = t.pathInit = t.getStringByLongNumber = t.getPathById = void 0;
        var i = n(13),
            a = r(i),
            o = n(17),
            s = r(o);
        n(127),
            n(126);
        var l = n(6),
            u = (function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                t.
                    default = e
            } (l),
                function(e) {
                    for (var e = (e || 0).toString().padLeft("0", 9), t = ""; e.length > 3;) t = "/" + e.slice( - 3) + t,
                        e = e.slice(0, e.length - 3);
                    return e && (t = e + t),
                        t
                }),
            c = function(e) {
                var t = e.toString().length;
                return t > 10 ? parseInt(e / 1e8) + "亿": t > 8 ? (e / 1e8).toFixed(1) + "亿": t > 6 ? parseInt(e / 1e4) + "万": t > 5 ? (e / 1e4).toFixed(1) + "万": e
            },
            d = function(e, t) {
                if (e) {
                    return t.toString().format(u(e))
                }
            },
            p = function e(t, n) {
                if ("undefind" === n || "function" != typeof n) return t;
                var r = Array.isArray(t) ? [] : {};
                for (var i in t) if (Array.isArray(t[i])) {
                    var a = [];
                    for (var o in t[i]) a.push(e(t[i][o], n));
                    r[i] = a
                } else "object" === (0, s.
                    default)(t[i]) ? r[i] = e(t[i], n) : (r[i] = t[i], r = n(i, t[i], r));
                return r
            },
            f = function(e, t) {
                e = new Date(e),
                t || (t = "yyyy-MM-dd hh:mm:ss");
                var n = {
                    y: e.getFullYear(),
                    M: e.getMonth() + 1,
                    d: e.getDate(),
                    h: e.getHours(),
                    m: e.getMinutes(),
                    s: e.getSeconds()
                };
                return t.replace(/(y+|M+|d+|h+|m+|s+)/g,
                    function(e) {
                        var t = e.length;
                        return ((t > 1 ? "0": "") + n[e.slice( - 1)]).slice( - (t > 2 ? t: 2))
                    })
            },
            h = function(e) {
                e = parseInt(e, 10);
                var t = parseInt(((new Date).getTime() - e) / 1e3),
                    n = Math.floor(t / 86400),
                    r = Math.floor((t - 86400 * n) / 3600),
                    i = Math.floor((t - 86400 * n - 3600 * r) / 60);
                Math.floor(t - 86400 * n - 3600 * r - 60 * i);
                return n > 9 ? f(e, "yyyy-MM-dd") : n > 0 ? n + "天前": r > 0 ? r + "小时前": i > 0 ? i + "分钟前": "1分钟内"
            },
            m = function e(t) {
                var n;
                switch (void 0 === t ? "undefined": (0, s.
                    default)(t)) {
                    case "number":
                    case "string":
                    case "boolean":
                        n = t;
                        break;
                    case "object":
                        if (null == t) n = null;
                        else if ("[object Array]" === toString.apply(t)) {
                            n = [];
                            for (var r in t) n = n.concat(e(t[r]))
                        } else {
                            n = {};
                            for (var i in t) n[i] = e(t[i])
                        }
                }
                return n
            },
            g = function(e, t) {
                for (var n = t.length,
                         r = []; n--;) r.push(e[t[n]]);
                return r.join("|")
            },
            v = function(e, t) {
                for (var n = [], r = {},
                         i = 0, a = e.length; i < a; i++) {
                    var o = g(e[i], t);
                    o in r || (r[o] = !0, n.push(e[i]))
                }
                return n
            },
            y = function(e) {
                var t = [];
                return e.forEach(function(e, n) {
                    t.push(e.sort_group)
                }),
                    t
            },
            w = function(e, t) {
                var n = [];
                return e.forEach(function(e, r) {
                    var i = {};
                    i.src = d(e.id, t),
                        /^(https?\:)/.test(e.comic_id) ? i.isFlag = !1 : i.isFlag = !0,
                        i.url = e.comic_id,
                        i.desc = e.slide_desc,
                        n.push(i)
                }),
                    n
            },
            b = function(e, t) {
                return e.forEach(function(e) {
                    e.src = d(e.comic_id, t)
                }),
                    e
            },
            x = function(e, t) {
                return e.forEach(function(e) {
                    e.data.forEach(function(e) {
                        e.src = d(e.id, t)
                    })
                }),
                    e
            },
            T = function(e) {
                return e = (e + "").toString(),
                    encodeURIComponent(e).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+")
            },
            S = function(e) {
                for (var t = e.split(","), n = t[0].match(/:(.*?);/)[1], r = atob(t[1]), i = r.length, a = new Uint8Array(i); i--;) a[i] = r.charCodeAt(i);
                return new Blob([a], {
                    type: n
                })
            },
            C = function() {
                /*
        if (window._bd_share_config) window._bd_share_main.init();
        else {
            window._bd_share_config = {
                common: {},
                share: {}
            }; (document.getElementsByTagName("head")[0] || body).appendChild(document.createElement("script")).src = "http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=" + ~ ( - new Date / 36e5)
        }
		*/
            },
            E = function(e) {
                return e.forEach(function(e) {
                    e.score = (e.score / 10).toFixed(1)
                }),
                    e
            },
            k = function(e) {
                var t = {};
                return e.list.length ? e.list.forEach(function(e) {
                    var n = new Date(e.updatetime),
                        r = n.getHours().toString().padLeft("0", 2),
                        i = n.getMinutes().toString().padLeft("0", 2);
                    e.date = f(e.updatetime, "yyyy-MM-dd"),
                        e.time = r + ":" + i;
                    var a = e.date.split("-"),
                        o = a[0],
                        s = a[1],
                        l = a[2];
                    e.day = l,
                    t[o] || (t[o] = {}),
                        t[o][s] ? t[o][s].push(e) : (t[o][s] = [], t[o][s].push(e))
                }) : t = null,
                    t
            },
            M = function(e, t) {
                return e.forEach(function(e) {
                    e.data.forEach(function(e) {
                        e.src = d(e.comic_id, t),
                            e.score = (e.score / 10).toFixed(1)
                    })
                }),
                    e
            },
            z = function(e, t) {
                return encodeURIComponent(e.toUpperCase()).replace(/./g,
                    function(e) {
                        return String.fromCharCode(e.charCodeAt(0) + t % 10)
                    }).replace(/([\\"'])/g, "\\$1")
            },
            L = function(e, t) {
                return new a.
                default(function(n, r) {
                    t.forEach(function(t, n) {
                        e.forEach(function(n, r) {
                            t.comic_id == n.comic_id && (t.readtime >= n.readtime || t.addtime >= n.addtime) && e.splice(r, 1)
                        })
                    }),
                        n(e)
                })
            },
            P = function(e) {
                return "string" == typeof e ? window.location.replace(e) : history.length > 1 ? history.go( - 1) : location.href = "/",
                    !1
            },
            _ = function(e) {
                e || window.location.replace("/uc/login.html")
            },
            N = function(e) {
                var t = e.children(".hd").find(".tab-taggle>.item"),
                    n = e.children(".bd").children(".tab-item");
                t.click(function() {
                    var e = $(this),
                        t = e.index();
                    e.addClass("active").siblings(".item").removeClass("active"),
                        n.eq(t).show().siblings(".tab-item").hide()
                })
            },
            I = function(e, t) {
                var n = 0;
                if (t) var r, i;
                for (var a = 0; a < e.length; a++) !
                    function() {
                        null != e.charAt(a).match(/[^\x00-\xff]/gi) ? n += 2 : n += 1,
                        !t || n != t && n != t - 1 || (r = a, i = n)
                    } ();
                if (t) {
                    var o = e.slice(0, r + 1);
                    return {
                        len: i,
                        newStr: o
                    }
                }
                return n
            },
            A = function(e, t) {
                t = t || {};
                var n = '<li class="item"><a class="comic-item" href="/manhua/' + e.comic_id + '/" title="' + e.comic_name + '"><div class="thumbnail">';
                return t.showCheck && (n += '<div class="check" data-id="' + e.comic_id + '"></div>'),
                t.showChapter && (n += '<span class="chapter">' + e.last_chapter.name + "</span>"),
                    n += '<img src="/Public/wap/zymk/images/default/space.gif" data-src="' + e.src + '" alt="' + e.comic_name + '" data-id="' + e.comic_id + '"><span class="ift-xing score">' + e.score + '</span></div><span class="title">' + e.comic_name + "</span></a></li>"
            },
            D = function(e) {
                return isNaN(parseInt(e, 10)) ? 0 : parseInt(e, 10)
            },
            O = function(e, t, n, r, i) {
                i = i || 5,
                    e = D(e),
                    t = D(t);
                var a, o = n.replace(/_p(\d+|all)\.html/gi, ".html").replace("index.html", "");
                o || (o = "./"),
                    a = /_p(\d+|all)\.html/gi.test(n) ? n.replace(/_p(\d+|all)\.html/gi, "_p{0}.html") : -1 != n.indexOf(".html") ? n.replace(".html", "_p{0}.html") : "index_p{0}.html";
                var s = function(e) {
                        return 1 == e ? o: a.format(e)
                    },
                    l = r || "",
                    u = 1;
                if (l += e > 1 ? '<a class="prev" href="' + s(e - 1) + '"><i class="ift-prev"></i></a>': '<span class="prev"><i class="ift-prev"></i></span>', t < 2 * i) for (u = 1; u <= t; u++) l += e != u ? '<a href="' + s(u) + '">' + u + "</a>": '<span class="active">' + u + "</span>";
                else {
                    if (l += 1 != e ? '<a href="' + s(1) + '">1</a>': '<span class="active">1</span>', e <= i) {
                        for (u = 2; u <= i + 2; u++) l += e != u ? '<a href="' + s(u) + '">' + u + "</a>": '<span class="active">' + u + "</span>";
                        l += "…"
                    } else if (l += "…", e <= t - i) for (u = e - 2; u <= e + 2; u++) l += e != u ? '<a href="' + s(u) + '">' + u + "</a>": '<span class="active">' + u + "</span>";
                    else for (u = t - (i + 1); u <= t - 1; u++) l += e != u ? '<a href="' + s(u) + '">' + u + "</a>": '<span class="active">' + u + "</span>";
                    l += e != t ? '<a href="' + s(t) + '">' + t + "</a>": '<span class="active">' + t + "</span>"
                }
                return l += e < t ? '<a class="next" href="' + s(e + 1) + '"><i class="ift-next"></i></a>': '<span class="next"><i class="ift-next"></i></span>'
            },
            j = function(e, t) {
                $("html, body").removeClass("overflow"),
                    e.addClass("slideout reverse"),
                    setTimeout(function() {
                            e.removeClass("slideout reverse").hide(),
                            "function" == typeof t && t()
                        },
                        350)
            },
            H = function(e, t) {
                $("html, body").addClass("overflow"),
                    e.addClass("slidein").show(),
                    setTimeout(function() {
                            e.removeClass("slidein"),
                            "function" == typeof t && t()
                        },
                        350)
            };
        t.getPathById = u,
            t.getStringByLongNumber = c,
            t.pathInit = d,
            t.installData = p,
            t.formatDate = f,
            t.getTimeSpan = h,
            t.deepClone = m,
            t.objToString = g,
            t.uniqeByKeys = v,
            t.tabInit = y,
            t.swipeImgInit = w,
            t.rankListInit = b,
            t.classImg = x,
            t.UrlEncode = T,
            t.dataURLtoBlob = S,
            t.bd_share = C,
            t.score = E,
            t.initAcDetail = k,
            t.homeImg = M,
            t.getCharcode = z,
            t.compare = L,
            t.goback = P,
            t.gologin = _,
            t.tabTaggle = N,
            t.strLen = I,
            t.comitItemDom = A,
            t.t_cint = D,
            t.showpager = O,
            t.slideoutLayer = j,
            t.slideinLayer = H
    },
        function(e, t) {
            var n = e.exports = "undefined" != typeof window && window.Math == Math ? window: "undefined" != typeof self && self.Math == Math ? self: Function("return this")();
            "number" == typeof __g && (__g = n)
        },
        function(e, t, n) {
            var r = n(38)("wks"),
                i = n(27),
                a = n(1).Symbol,
                o = "function" == typeof a; (e.exports = function(e) {
                return r[e] || (r[e] = o && a[e] || (o ? a: i)("Symbol." + e))
            }).store = r
        },
        function(e, t) {
            var n = e.exports = {
                version: "2.5.7"
            };
            "number" == typeof __e && (__e = n)
        },
        ,
        function(e, t, n) {
            e.exports = {
                default:
                    n(132),
                __esModule: !0
            }
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.
                    default = {
                    password: function(e) {
                        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,32}$/.test(e)
                    },
                    email: function(e) {
                        return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(e)
                    },
                    mobile: function(e) {
                        return new RegExp("^1(3|4|5|7|8)[0-9]{9}$").test(e)
                    }
                }
        },
        function(e, t, n) {
            var r = n(11);
            e.exports = function(e) {
                if (!r(e)) throw TypeError(e + " is not an object!");
                return e
            }
        },
        function(e, t, n) {
            e.exports = !n(16)(function() {
                return 7 != Object.defineProperty({},
                    "a", {
                        get: function() {
                            return 7
                        }
                    }).a
            })
        },
        function(e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function(e, t) {
                return n.call(e, t)
            }
        },
        function(e, t, n) {
            var r = n(12),
                i = n(25);
            e.exports = n(8) ?
                function(e, t, n) {
                    return r.f(e, t, i(1, n))
                }: function(e, t, n) {
                    return e[t] = n,
                        e
                }
        },
        function(e, t) {
            e.exports = function(e) {
                return "object" == typeof e ? null !== e: "function" == typeof e
            }
        },
        function(e, t, n) {
            var r = n(7),
                i = n(46),
                a = n(40),
                o = Object.defineProperty;
            t.f = n(8) ? Object.defineProperty: function(e, t, n) {
                if (r(e), t = a(t, !0), r(n), i) try {
                    return o(e, t, n)
                } catch(e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value),
                    e
            }
        },
        function(e, t, n) {
            e.exports = {
                default:
                    n(134),
                __esModule: !0
            }
        },
        function(e, t, n) {
            var r = n(1),
                i = n(3),
                a = n(22),
                o = n(10),
                s = n(9),
                l = function(e, t, n) {
                    var u, c, d, p = e & l.F,
                        f = e & l.G,
                        h = e & l.S,
                        m = e & l.P,
                        g = e & l.B,
                        v = e & l.W,
                        y = f ? i: i[t] || (i[t] = {}),
                        w = y.prototype,
                        b = f ? r: h ? r[t] : (r[t] || {}).prototype;
                    f && (n = t);
                    for (u in n)(c = !p && b && void 0 !== b[u]) && s(y, u) || (d = c ? b[u] : n[u], y[u] = f && "function" != typeof b[u] ? n[u] : g && c ? a(d, r) : v && b[u] == d ?
                        function(e) {
                            var t = function(t, n, r) {
                                if (this instanceof e) {
                                    switch (arguments.length) {
                                        case 0:
                                            return new e;
                                        case 1:
                                            return new e(t);
                                        case 2:
                                            return new e(t, n)
                                    }
                                    return new e(t, n, r)
                                }
                                return e.apply(this, arguments)
                            };
                            return t.prototype = e.prototype,
                                t
                        } (d) : m && "function" == typeof d ? a(Function.call, d) : d, m && ((y.virtual || (y.virtual = {}))[u] = d, e & l.R && w && !w[u] && o(w, u, d)))
                };
            l.F = 1,
                l.G = 2,
                l.S = 4,
                l.P = 8,
                l.B = 16,
                l.W = 32,
                l.U = 64,
                l.R = 128,
                e.exports = l
        },
        function(e, t, n) {
            var r = n(47),
                i = n(32);
            e.exports = function(e) {
                return r(i(e))
            }
        },
        function(e, t) {
            e.exports = function(e) {
                try {
                    return !! e()
                } catch(e) {
                    return ! 0
                }
            }
        },
        function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e: {
                    default:
                    e
                }
            }
            t.__esModule = !0;
            var i = n(129),
                a = r(i),
                o = n(128),
                s = r(o),
                l = "function" == typeof s.
                    default && "symbol" == typeof a.
                    default ?
                    function(e) {
                        return typeof e
                    }: function(e) {
                        return e && "function" == typeof s.
                            default && e.constructor === s.
                            default && e !== s.
                            default.prototype ? "symbol": typeof e
                    };
            t.
                default = "function" == typeof s.
                default && "symbol" === l(a.
                default) ?
                function(e) {
                    return void 0 === e ? "undefined": l(e)
                }: function(e) {
                    return e && "function" == typeof s.
                        default && e.constructor === s.
                        default && e !== s.
                        default.prototype ? "symbol": void 0 === e ? "undefined": l(e)
                }
        },
        function(e, t) {
            var n = {}.toString;
            e.exports = function(e) {
                return n.call(e).slice(8, -1)
            }
        },
        function(e, t) {
            e.exports = {}
        },
        function(e, t) {
            e.exports = !0
        },
        function(e, t) {
            e.exports = function(e) {
                if ("function" != typeof e) throw TypeError(e + " is not a function!");
                return e
            }
        },
        function(e, t, n) {
            var r = n(21);
            e.exports = function(e, t, n) {
                if (r(e), void 0 === t) return e;
                switch (n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function(n, r) {
                            return e.call(t, n, r)
                        };
                    case 3:
                        return function(n, r, i) {
                            return e.call(t, n, r, i)
                        }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            }
        },
        function(e, t, n) {
            var r = n(51),
                i = n(34);
            e.exports = Object.keys ||
                function(e) {
                    return r(e, i)
                }
        },
        function(e, t) {
            t.f = {}.propertyIsEnumerable
        },
        function(e, t) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        },
        function(e, t, n) {
            var r = n(12).f,
                i = n(9),
                a = n(2)("toStringTag");
            e.exports = function(e, t, n) {
                e && !i(e = n ? e: e.prototype, a) && r(e, a, {
                    configurable: !0,
                    value: t
                })
            }
        },
        function(e, t) {
            var n = 0,
                r = Math.random();
            e.exports = function(e) {
                return "Symbol(".concat(void 0 === e ? "": e, ")_", (++n + r).toString(36))
            }
        },
        function(e, t, n) {
            e.exports = {
                default:
                    n(133),
                __esModule: !0
            }
        },
        function(e, t, n) {
            var r, i; !
                function(t, n) {
                    "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                        if (!e.document) throw new Error("jQuery requires a window with a document");
                        return n(e)
                    }: n(t)
                } ("undefined" != typeof window ? window: this,
                    function(n, a) {
                        function o(e) {
                            var t = !!e && "length" in e && e.length,
                                n = ge.type(e);
                            return "function" !== n && !ge.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                        }
                        function s(e, t, n) {
                            if (ge.isFunction(t)) return ge.grep(e,
                                function(e, r) {
                                    return !! t.call(e, r, e) !== n
                                });
                            if (t.nodeType) return ge.grep(e,
                                function(e) {
                                    return e === t !== n
                                });
                            if ("string" == typeof t) {
                                if (ke.test(t)) return ge.filter(t, e, n);
                                t = ge.filter(t, e)
                            }
                            return ge.grep(e,
                                function(e) {
                                    return ge.inArray(e, t) > -1 !== n
                                })
                        }
                        function l(e, t) {
                            do {
                                e = e[t]
                            } while ( e && 1 !== e . nodeType );
                            return e
                        }
                        function u(e) {
                            var t = {};
                            return ge.each(e.match(_e) || [],
                                function(e, n) {
                                    t[n] = !0
                                }),
                                t
                        }
                        function c() {
                            se.addEventListener ? (se.removeEventListener("DOMContentLoaded", d), n.removeEventListener("load", d)) : (se.detachEvent("onreadystatechange", d), n.detachEvent("onload", d))
                        }
                        function d() { (se.addEventListener || "load" === n.event.type || "complete" === se.readyState) && (c(), ge.ready())
                        }
                        function p(e, t, n) {
                            if (void 0 === n && 1 === e.nodeType) {
                                var r = "data-" + t.replace(Oe, "-$1").toLowerCase();
                                if ("string" == typeof(n = e.getAttribute(r))) {
                                    try {
                                        n = "true" === n || "false" !== n && ("null" === n ? null: +n + "" === n ? +n: De.test(n) ? ge.parseJSON(n) : n)
                                    } catch(e) {}
                                    ge.data(e, t, n)
                                } else n = void 0
                            }
                            return n
                        }
                        function f(e) {
                            var t;
                            for (t in e) if (("data" !== t || !ge.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
                            return ! 0
                        }
                        function h(e, t, n, r) {
                            if (Ae(e)) {
                                var i, a, o = ge.expando,
                                    s = e.nodeType,
                                    l = s ? ge.cache: e,
                                    u = s ? e[o] : e[o] && o;
                                if (u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[o] = oe.pop() || ge.guid++:o),
                                l[u] || (l[u] = s ? {}: {
                                    toJSON: ge.noop
                                }),
                                "object" != typeof t && "function" != typeof t || (r ? l[u] = ge.extend(l[u], t) : l[u].data = ge.extend(l[u].data, t)),
                                    a = l[u],
                                r || (a.data || (a.data = {}), a = a.data),
                                void 0 !== n && (a[ge.camelCase(t)] = n),
                                    "string" == typeof t ? null == (i = a[t]) && (i = a[ge.camelCase(t)]) : i = a,
                                    i
                            }
                        }
                        function m(e, t, n) {
                            if (Ae(e)) {
                                var r, i, a = e.nodeType,
                                    o = a ? ge.cache: e,
                                    s = a ? e[ge.expando] : ge.expando;
                                if (o[s]) {
                                    if (t && (r = n ? o[s] : o[s].data)) {
                                        ge.isArray(t) ? t = t.concat(ge.map(t, ge.camelCase)) : t in r ? t = [t] : (t = ge.camelCase(t), t = t in r ? [t] : t.split(" ")),
                                            i = t.length;
                                        for (; i--;) delete r[t[i]];
                                        if (n ? !f(r) : !ge.isEmptyObject(r)) return
                                    } (n || (delete o[s].data, f(o[s]))) && (a ? ge.cleanData([e], !0) : me.deleteExpando || o != o.window ? delete o[s] : o[s] = void 0)
                                }
                            }
                        }
                        function g(e, t, n, r) {
                            var i, a = 1,
                                o = 20,
                                s = r ?
                                    function() {
                                        return r.cur()
                                    }: function() {
                                        return ge.css(e, t, "")
                                    },
                                l = s(),
                                u = n && n[3] || (ge.cssNumber[t] ? "": "px"),
                                c = (ge.cssNumber[t] || "px" !== u && +l) && He.exec(ge.css(e, t));
                            if (c && c[3] !== u) {
                                u = u || c[3],
                                    n = n || [],
                                    c = +l || 1;
                                do {
                                    a = a || ".5", c /= a, ge.style(e, t, c + u)
                                } while ( a !== ( a = s () / l) && 1 !== a && --o)
                            }
                            return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)),
                                i
                        }
                        function v(e) {
                            var t = Ye.split("|"),
                                n = e.createDocumentFragment();
                            if (n.createElement) for (; t.length;) n.createElement(t.pop());
                            return n
                        }
                        function y(e, t) {
                            var n, r, i = 0,
                                a = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
                            if (!a) for (a = [], n = e.childNodes || e; null != (r = n[i]); i++) ! t || ge.nodeName(r, t) ? a.push(r) : ge.merge(a, y(r, t));
                            return void 0 === t || t && ge.nodeName(e, t) ? ge.merge([e], a) : a
                        }
                        function w(e, t) {
                            for (var n, r = 0; null != (n = e[r]); r++) ge._data(n, "globalEval", !t || ge._data(t[r], "globalEval"))
                        }
                        function b(e) {
                            qe.test(e.type) && (e.defaultChecked = e.checked)
                        }
                        function x(e, t, n, r, i) {
                            for (var a, o, s, l, u, c, d, p = e.length,
                                     f = v(t), h = [], m = 0; m < p; m++) if ((o = e[m]) || 0 === o) if ("object" === ge.type(o)) ge.merge(h, o.nodeType ? [o] : o);
                            else if ($e.test(o)) {
                                for (l = l || f.appendChild(t.createElement("div")), u = (We.exec(o) || ["", ""])[1].toLowerCase(), d = Ve[u] || Ve._default, l.innerHTML = d[1] + ge.htmlPrefilter(o) + d[2], a = d[0]; a--;) l = l.lastChild;
                                if (!me.leadingWhitespace && Ge.test(o) && h.push(t.createTextNode(Ge.exec(o)[0])), !me.tbody) for (o = "table" !== u || Ue.test(o) ? "<table>" !== d[1] || Ue.test(o) ? 0 : l: l.firstChild, a = o && o.childNodes.length; a--;) ge.nodeName(c = o.childNodes[a], "tbody") && !c.childNodes.length && o.removeChild(c);
                                for (ge.merge(h, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                                l = f.lastChild
                            } else h.push(t.createTextNode(o));
                            for (l && f.removeChild(l), me.appendChecked || ge.grep(y(h, "input"), b), m = 0; o = h[m++];) if (r && ge.inArray(o, r) > -1) i && i.push(o);
                            else if (s = ge.contains(o.ownerDocument, o), l = y(f.appendChild(o), "script"), s && w(l), n) for (a = 0; o = l[a++];) Xe.test(o.type || "") && n.push(o);
                            return l = null,
                                f
                        }
                        function T() {
                            return ! 0
                        }
                        function S() {
                            return ! 1
                        }
                        function C() {
                            try {
                                return se.activeElement
                            } catch(e) {}
                        }
                        function E(e, t, n, r, i, a) {
                            var o, s;
                            if ("object" == typeof t) {
                                "string" != typeof n && (r = r || n, n = void 0);
                                for (s in t) E(e, s, n, r, t[s], a);
                                return e
                            }
                            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = S;
                            else if (!i) return e;
                            return 1 === a && (o = i, i = function(e) {
                                return ge().off(e),
                                    o.apply(this, arguments)
                            },
                                i.guid = o.guid || (o.guid = ge.guid++)),
                                e.each(function() {
                                    ge.event.add(this, t, i, r, n)
                                })
                        }
                        function k(e, t) {
                            return ge.nodeName(e, "table") && ge.nodeName(11 !== t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
                        }
                        function M(e) {
                            return e.type = (null !== ge.find.attr(e, "type")) + "/" + e.type,
                                e
                        }
                        function z(e) {
                            var t = ot.exec(e.type);
                            return t ? e.type = t[1] : e.removeAttribute("type"),
                                e
                        }
                        function L(e, t) {
                            if (1 === t.nodeType && ge.hasData(e)) {
                                var n, r, i, a = ge._data(e),
                                    o = ge._data(t, a),
                                    s = a.events;
                                if (s) {
                                    delete o.handle,
                                        o.events = {};
                                    for (n in s) for (r = 0, i = s[n].length; r < i; r++) ge.event.add(t, n, s[n][r])
                                }
                                o.data && (o.data = ge.extend({},
                                    o.data))
                            }
                        }
                        function P(e, t) {
                            var n, r, i;
                            if (1 === t.nodeType) {
                                if (n = t.nodeName.toLowerCase(), !me.noCloneEvent && t[ge.expando]) {
                                    i = ge._data(t);
                                    for (r in i.events) ge.removeEvent(t, r, i.handle);
                                    t.removeAttribute(ge.expando)
                                }
                                "script" === n && t.text !== e.text ? (M(t).text = e.text, z(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), me.html5Clone && e.innerHTML && !ge.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && qe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                            }
                        }
                        function _(e, t, n, r) {
                            t = ue.apply([], t);
                            var i, a, o, s, l, u, c = 0,
                                d = e.length,
                                p = d - 1,
                                f = t[0],
                                h = ge.isFunction(f);
                            if (h || d > 1 && "string" == typeof f && !me.checkClone && at.test(f)) return e.each(function(i) {
                                var a = e.eq(i);
                                h && (t[0] = f.call(this, i, a.html())),
                                    _(a, t, n, r)
                            });
                            if (d && (u = x(t, e[0].ownerDocument, !1, e, r), i = u.firstChild, 1 === u.childNodes.length && (u = i), i || r)) {
                                for (s = ge.map(y(u, "script"), M), o = s.length; c < d; c++) a = u,
                                c !== p && (a = ge.clone(a, !0, !0), o && ge.merge(s, y(a, "script"))),
                                    n.call(e[c], a, c);
                                if (o) for (l = s[s.length - 1].ownerDocument, ge.map(s, z), c = 0; c < o; c++) a = s[c],
                                Xe.test(a.type || "") && !ge._data(a, "globalEval") && ge.contains(l, a) && (a.src ? ge._evalUrl && ge._evalUrl(a.src) : ge.globalEval((a.text || a.textContent || a.innerHTML || "").replace(st, "")));
                                u = i = null
                            }
                            return e
                        }
                        function N(e, t, n) {
                            for (var r, i = t ? ge.filter(t, e) : e, a = 0; null != (r = i[a]); a++) n || 1 !== r.nodeType || ge.cleanData(y(r)),
                            r.parentNode && (n && ge.contains(r.ownerDocument, r) && w(y(r, "script")), r.parentNode.removeChild(r));
                            return e
                        }
                        function I(e, t) {
                            var n = ge(t.createElement(e)).appendTo(t.body),
                                r = ge.css(n[0], "display");
                            return n.detach(),
                                r
                        }
                        function A(e) {
                            var t = se,
                                n = dt[e];
                            return n || (n = I(e, t), "none" !== n && n || (ct = (ct || ge("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (ct[0].contentWindow || ct[0].contentDocument).document, t.write(), t.close(), n = I(e, t), ct.detach()), dt[e] = n),
                                n
                        }
                        function D(e, t) {
                            return {
                                get: function() {
                                    return e() ? void delete this.get: (this.get = t).apply(this, arguments)
                                }
                            }
                        }
                        function O(e) {
                            if (e in kt) return e;
                            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Et.length; n--;) if ((e = Et[n] + t) in kt) return e
                        }
                        function j(e, t) {
                            for (var n, r, i, a = [], o = 0, s = e.length; o < s; o++) r = e[o],
                            r.style && (a[o] = ge._data(r, "olddisplay"), n = r.style.display, t ? (a[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && Re(r) && (a[o] = ge._data(r, "olddisplay", A(r.nodeName)))) : (i = Re(r), (n && "none" !== n || !i) && ge._data(r, "olddisplay", i ? n: ge.css(r, "display"))));
                            for (o = 0; o < s; o++) r = e[o],
                            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? a[o] || "": "none"));
                            return e
                        }
                        function H(e, t, n) {
                            var r = Tt.exec(t);
                            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
                        }
                        function B(e, t, n, r, i) {
                            for (var a = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0, o = 0; a < 4; a += 2)"margin" === n && (o += ge.css(e, n + Be[a], !0, i)),
                                r ? ("content" === n && (o -= ge.css(e, "padding" + Be[a], !0, i)), "margin" !== n && (o -= ge.css(e, "border" + Be[a] + "Width", !0, i))) : (o += ge.css(e, "padding" + Be[a], !0, i), "padding" !== n && (o += ge.css(e, "border" + Be[a] + "Width", !0, i)));
                            return o
                        }
                        function R(e, t, n) {
                            var r = !0,
                                i = "width" === t ? e.offsetWidth: e.offsetHeight,
                                a = gt(e),
                                o = me.boxSizing && "border-box" === ge.css(e, "boxSizing", !1, a);
                            if (i <= 0 || null == i) {
                                if (i = vt(e, t, a), (i < 0 || null == i) && (i = e.style[t]), ft.test(i)) return i;
                                r = o && (me.boxSizingReliable() || i === e.style[t]),
                                    i = parseFloat(i) || 0
                            }
                            return i + B(e, t, n || (o ? "border": "content"), r, a) + "px"
                        }
                        function F(e, t, n, r, i) {
                            return new F.prototype.init(e, t, n, r, i)
                        }
                        function q() {
                            return n.setTimeout(function() {
                                Mt = void 0
                            }),
                                Mt = ge.now()
                        }
                        function W(e, t) {
                            var n, r = {
                                    height: e
                                },
                                i = 0;
                            for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Be[i],
                                r["margin" + n] = r["padding" + n] = e;
                            return t && (r.opacity = r.width = e),
                                r
                        }
                        function X(e, t, n) {
                            for (var r, i = (V.tweeners[t] || []).concat(V.tweeners["*"]), a = 0, o = i.length; a < o; a++) if (r = i[a].call(n, t, e)) return r
                        }
                        function G(e, t, n) {
                            var r, i, a, o, s, l, u, c = this,
                                d = {},
                                p = e.style,
                                f = e.nodeType && Re(e),
                                h = ge._data(e, "fxshow");
                            n.queue || (s = ge._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                                s.unqueued || l()
                            }), s.unqueued++, c.always(function() {
                                c.always(function() {
                                    s.unqueued--,
                                    ge.queue(e, "fx").length || s.empty.fire()
                                })
                            })),
                            1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = ge.css(e, "display"), "inline" === ("none" === u ? ge._data(e, "olddisplay") || A(e.nodeName) : u) && "none" === ge.css(e, "float") && (me.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
                            n.overflow && (p.overflow = "hidden", me.shrinkWrapBlocks() || c.always(function() {
                                p.overflow = n.overflow[0],
                                    p.overflowX = n.overflow[1],
                                    p.overflowY = n.overflow[2]
                            }));
                            for (r in t) if (i = t[r], Lt.exec(i)) {
                                if (delete t[r], a = a || "toggle" === i, i === (f ? "hide": "show")) {
                                    if ("show" !== i || !h || void 0 === h[r]) continue;
                                    f = !0
                                }
                                d[r] = h && h[r] || ge.style(e, r)
                            } else u = void 0;
                            if (ge.isEmptyObject(d))"inline" === ("none" === u ? A(e.nodeName) : u) && (p.display = u);
                            else {
                                h ? "hidden" in h && (f = h.hidden) : h = ge._data(e, "fxshow", {}),
                                a && (h.hidden = !f),
                                    f ? ge(e).show() : c.done(function() {
                                        ge(e).hide()
                                    }),
                                    c.done(function() {
                                        var t;
                                        ge._removeData(e, "fxshow");
                                        for (t in d) ge.style(e, t, d[t])
                                    });
                                for (r in d) o = X(f ? h[r] : 0, r, c),
                                r in h || (h[r] = o.start, f && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
                            }
                        }
                        function Y(e, t) {
                            var n, r, i, a, o;
                            for (n in e) if (r = ge.camelCase(n), i = t[r], a = e[n], ge.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), (o = ge.cssHooks[r]) && "expand" in o) {
                                a = o.expand(a),
                                    delete e[r];
                                for (n in a) n in e || (e[n] = a[n], t[n] = i)
                            } else t[r] = i
                        }
                        function V(e, t, n) {
                            var r, i, a = 0,
                                o = V.prefilters.length,
                                s = ge.Deferred().always(function() {
                                    delete l.elem
                                }),
                                l = function() {
                                    if (i) return ! 1;
                                    for (var t = Mt || q(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, a = 1 - r, o = 0, l = u.tweens.length; o < l; o++) u.tweens[o].run(a);
                                    return s.notifyWith(e, [u, a, n]),
                                        a < 1 && l ? n: (s.resolveWith(e, [u]), !1)
                                },
                                u = s.promise({
                                    elem: e,
                                    props: ge.extend({},
                                        t),
                                    opts: ge.extend(!0, {
                                            specialEasing: {},
                                            easing: ge.easing._default
                                        },
                                        n),
                                    originalProperties: t,
                                    originalOptions: n,
                                    startTime: Mt || q(),
                                    duration: n.duration,
                                    tweens: [],
                                    createTween: function(t, n) {
                                        var r = ge.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                                        return u.tweens.push(r),
                                            r
                                    },
                                    stop: function(t) {
                                        var n = 0,
                                            r = t ? u.tweens.length: 0;
                                        if (i) return this;
                                        for (i = !0; n < r; n++) u.tweens[n].run(1);
                                        return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]),
                                            this
                                    }
                                }),
                                c = u.props;
                            for (Y(c, u.opts.specialEasing); a < o; a++) if (r = V.prefilters[a].call(u, e, c, u.opts)) return ge.isFunction(r.stop) && (ge._queueHooks(u.elem, u.opts.queue).stop = ge.proxy(r.stop, r)),
                                r;
                            return ge.map(c, X, u),
                            ge.isFunction(u.opts.start) && u.opts.start.call(e, u),
                                ge.fx.timer(ge.extend(l, {
                                    elem: e,
                                    anim: u,
                                    queue: u.opts.queue
                                })),
                                u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
                        }
                        function $(e) {
                            return ge.attr(e, "class") || ""
                        }
                        function U(e) {
                            return function(t, n) {
                                "string" != typeof t && (n = t, t = "*");
                                var r, i = 0,
                                    a = t.toLowerCase().match(_e) || [];
                                if (ge.isFunction(n)) for (; r = a[i++];)"+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                            }
                        }
                        function K(e, t, n, r) {
                            function i(s) {
                                var l;
                                return a[s] = !0,
                                    ge.each(e[s] || [],
                                        function(e, s) {
                                            var u = s(t, n, r);
                                            return "string" != typeof u || o || a[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
                                        }),
                                    l
                            }
                            var a = {},
                                o = e === en;
                            return i(t.dataTypes[0]) || !a["*"] && i("*")
                        }
                        function J(e, t) {
                            var n, r, i = ge.ajaxSettings.flatOptions || {};
                            for (r in t) void 0 !== t[r] && ((i[r] ? e: n || (n = {}))[r] = t[r]);
                            return n && ge.extend(!0, e, n),
                                e
                        }
                        function Q(e, t, n) {
                            for (var r, i, a, o, s = e.contents,
                                     l = e.dataTypes;
                                 "*" === l[0];) l.shift(),
                            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (i) for (o in s) if (s[o] && s[o].test(i)) {
                                l.unshift(o);
                                break
                            }
                            if (l[0] in n) a = l[0];
                            else {
                                for (o in n) {
                                    if (!l[0] || e.converters[o + " " + l[0]]) {
                                        a = o;
                                        break
                                    }
                                    r || (r = o)
                                }
                                a = a || r
                            }
                            if (a) return a !== l[0] && l.unshift(a),
                                n[a]
                        }
                        function Z(e, t, n, r) {
                            var i, a, o, s, l, u = {},
                                c = e.dataTypes.slice();
                            if (c[1]) for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
                            for (a = c.shift(); a;) if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = c.shift()) if ("*" === a) a = l;
                            else if ("*" !== l && l !== a) {
                                if (! (o = u[l + " " + a] || u["* " + a])) for (i in u) if (s = i.split(" "), s[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) { ! 0 === o ? o = u[i] : !0 !== u[i] && (a = s[0], c.unshift(s[1]));
                                    break
                                }
                                if (!0 !== o) if (o && e.throws) t = o(t);
                                else try {
                                        t = o(t)
                                    } catch(e) {
                                        return {
                                            state: "parsererror",
                                            error: o ? e: "No conversion from " + l + " to " + a
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }
                        function ee(e) {
                            return e.style && e.style.display || ge.css(e, "display")
                        }
                        function te(e) {
                            if (!ge.contains(e.ownerDocument || se, e)) return ! 0;
                            for (; e && 1 === e.nodeType;) {
                                if ("none" === ee(e) || "hidden" === e.type) return ! 0;
                                e = e.parentNode
                            }
                            return ! 1
                        }
                        function ne(e, t, n, r) {
                            var i;
                            if (ge.isArray(t)) ge.each(t,
                                function(t, i) {
                                    n || on.test(e) ? r(e, i) : ne(e + "[" + ("object" == typeof i && null != i ? t: "") + "]", i, n, r)
                                });
                            else if (n || "object" !== ge.type(t)) r(e, t);
                            else for (i in t) ne(e + "[" + i + "]", t[i], n, r)
                        }
                        function re() {
                            try {
                                return new n.XMLHttpRequest
                            } catch(e) {}
                        }
                        function ie() {
                            try {
                                return new n.ActiveXObject("Microsoft.XMLHTTP")
                            } catch(e) {}
                        }
                        function ae(e) {
                            return ge.isWindow(e) ? e: 9 === e.nodeType && (e.defaultView || e.parentWindow)
                        }
                        var oe = [],
                            se = n.document,
                            le = oe.slice,
                            ue = oe.concat,
                            ce = oe.push,
                            de = oe.indexOf,
                            pe = {},
                            fe = pe.toString,
                            he = pe.hasOwnProperty,
                            me = {},
                            ge = function(e, t) {
                                return new ge.fn.init(e, t)
                            },
                            ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                            ye = /^-ms-/,
                            we = /-([\da-z])/gi,
                            be = function(e, t) {
                                return t.toUpperCase()
                            };
                        ge.fn = ge.prototype = {
                            jquery: "1.12.4",
                            constructor: ge,
                            selector: "",
                            length: 0,
                            toArray: function() {
                                return le.call(this)
                            },
                            get: function(e) {
                                return null != e ? e < 0 ? this[e + this.length] : this[e] : le.call(this)
                            },
                            pushStack: function(e) {
                                var t = ge.merge(this.constructor(), e);
                                return t.prevObject = this,
                                    t.context = this.context,
                                    t
                            },
                            each: function(e) {
                                return ge.each(this, e)
                            },
                            map: function(e) {
                                return this.pushStack(ge.map(this,
                                    function(t, n) {
                                        return e.call(t, n, t)
                                    }))
                            },
                            slice: function() {
                                return this.pushStack(le.apply(this, arguments))
                            },
                            first: function() {
                                return this.eq(0)
                            },
                            last: function() {
                                return this.eq( - 1)
                            },
                            eq: function(e) {
                                var t = this.length,
                                    n = +e + (e < 0 ? t: 0);
                                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                            },
                            end: function() {
                                return this.prevObject || this.constructor()
                            },
                            push: ce,
                            sort: oe.sort,
                            splice: oe.splice
                        },
                            ge.extend = ge.fn.extend = function() {
                                var e, t, n, r, i, a, o = arguments[0] || {},
                                    s = 1,
                                    l = arguments.length,
                                    u = !1;
                                for ("boolean" == typeof o && (u = o, o = arguments[s] || {},
                                    s++), "object" == typeof o || ge.isFunction(o) || (o = {}), s === l && (o = this, s--); s < l; s++) if (null != (i = arguments[s])) for (r in i) e = o[r],
                                    n = i[r],
                                o !== n && (u && n && (ge.isPlainObject(n) || (t = ge.isArray(n))) ? (t ? (t = !1, a = e && ge.isArray(e) ? e: []) : a = e && ge.isPlainObject(e) ? e: {},
                                    o[r] = ge.extend(u, a, n)) : void 0 !== n && (o[r] = n));
                                return o
                            },
                            ge.extend({
                                expando: "jQuery" + ("1.12.4" + Math.random()).replace(/\D/g, ""),
                                isReady: !0,
                                error: function(e) {
                                    throw new Error(e)
                                },
                                noop: function() {},
                                isFunction: function(e) {
                                    return "function" === ge.type(e)
                                },
                                isArray: Array.isArray ||
                                    function(e) {
                                        return "array" === ge.type(e)
                                    },
                                isWindow: function(e) {
                                    return null != e && e == e.window
                                },
                                isNumeric: function(e) {
                                    var t = e && e.toString();
                                    return ! ge.isArray(e) && t - parseFloat(t) + 1 >= 0
                                },
                                isEmptyObject: function(e) {
                                    var t;
                                    for (t in e) return ! 1;
                                    return ! 0
                                },
                                isPlainObject: function(e) {
                                    var t;
                                    if (!e || "object" !== ge.type(e) || e.nodeType || ge.isWindow(e)) return ! 1;
                                    try {
                                        if (e.constructor && !he.call(e, "constructor") && !he.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
                                    } catch(e) {
                                        return ! 1
                                    }
                                    if (!me.ownFirst) for (t in e) return he.call(e, t);
                                    for (t in e);
                                    return void 0 === t || he.call(e, t)
                                },
                                type: function(e) {
                                    return null == e ? e + "": "object" == typeof e || "function" == typeof e ? pe[fe.call(e)] || "object": typeof e
                                },
                                globalEval: function(e) {
                                    e && ge.trim(e) && (n.execScript ||
                                        function(e) {
                                            n.eval.call(n, e)
                                        })(e)
                                },
                                camelCase: function(e) {
                                    return e.replace(ye, "ms-").replace(we, be)
                                },
                                nodeName: function(e, t) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                                },
                                each: function(e, t) {
                                    var n, r = 0;
                                    if (o(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                                    else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                                    return e
                                },
                                trim: function(e) {
                                    return null == e ? "": (e + "").replace(ve, "")
                                },
                                makeArray: function(e, t) {
                                    var n = t || [];
                                    return null != e && (o(Object(e)) ? ge.merge(n, "string" == typeof e ? [e] : e) : ce.call(n, e)),
                                        n
                                },
                                inArray: function(e, t, n) {
                                    var r;
                                    if (t) {
                                        if (de) return de.call(t, e, n);
                                        for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n: 0; n < r; n++) if (n in t && t[n] === e) return n
                                    }
                                    return - 1
                                },
                                merge: function(e, t) {
                                    for (var n = +t.length,
                                             r = 0,
                                             i = e.length; r < n;) e[i++] = t[r++];
                                    if (n !== n) for (; void 0 !== t[r];) e[i++] = t[r++];
                                    return e.length = i,
                                        e
                                },
                                grep: function(e, t, n) {
                                    for (var r = [], i = 0, a = e.length, o = !n; i < a; i++) ! t(e[i], i) !== o && r.push(e[i]);
                                    return r
                                },
                                map: function(e, t, n) {
                                    var r, i, a = 0,
                                        s = [];
                                    if (o(e)) for (r = e.length; a < r; a++) null != (i = t(e[a], a, n)) && s.push(i);
                                    else for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
                                    return ue.apply([], s)
                                },
                                guid: 1,
                                proxy: function(e, t) {
                                    var n, r, i;
                                    if ("string" == typeof t && (i = e[t], t = e, e = i), ge.isFunction(e)) return n = le.call(arguments, 2),
                                        r = function() {
                                            return e.apply(t || this, n.concat(le.call(arguments)))
                                        },
                                        r.guid = e.guid = e.guid || ge.guid++,
                                        r
                                },
                                now: function() {
                                    return + new Date
                                },
                                support: me
                            }),
                        "function" == typeof Symbol && (ge.fn[Symbol.iterator] = oe[Symbol.iterator]),
                            ge.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
                                function(e, t) {
                                    pe["[object " + t + "]"] = t.toLowerCase()
                                });
                        var xe = function(e) {
                            function t(e, t, n, r) {
                                var i, a, o, s, u, d, p, f, h = t && t.ownerDocument,
                                    m = t ? t.nodeType: 9;
                                if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
                                if (!r && ((t ? t.ownerDocument || t: H) !== P && L(t), t = t || P, N)) {
                                    if (11 !== m && (d = me.exec(e))) if (i = d[1]) {
                                        if (9 === m) {
                                            if (! (o = t.getElementById(i))) return n;
                                            if (o.id === i) return n.push(o),
                                                n
                                        } else if (h && (o = h.getElementById(i)) && O(t, o) && o.id === i) return n.push(o),
                                            n
                                    } else {
                                        if (d[2]) return K.apply(n, t.getElementsByTagName(e)),
                                            n;
                                        if ((i = d[3]) && w.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(i)),
                                            n
                                    }
                                    if (w.qsa && !W[e + " "] && (!I || !I.test(e))) {
                                        if (1 !== m) h = t,
                                            f = e;
                                        else if ("object" !== t.nodeName.toLowerCase()) {
                                            for ((s = t.getAttribute("id")) ? s = s.replace(ve, "\\$&") : t.setAttribute("id", s = j), p = S(e), a = p.length, u = ce.test(s) ? "#" + s: "[id='" + s + "']"; a--;) p[a] = u + " " + c(p[a]);
                                            f = p.join(","),
                                                h = ge.test(e) && l(t.parentNode) || t
                                        }
                                        if (f) try {
                                            return K.apply(n, h.querySelectorAll(f)),
                                                n
                                        } catch(e) {} finally {
                                            s === j && t.removeAttribute("id")
                                        }
                                    }
                                }
                                return E(e.replace(ae, "$1"), t, n, r)
                            }
                            function n() {
                                function e(n, r) {
                                    return t.push(n + " ") > b.cacheLength && delete e[t.shift()],
                                        e[n + " "] = r
                                }
                                var t = [];
                                return e
                            }
                            function r(e) {
                                return e[j] = !0,
                                    e
                            }
                            function i(e) {
                                var t = P.createElement("div");
                                try {
                                    return !! e(t)
                                } catch(e) {
                                    return ! 1
                                } finally {
                                    t.parentNode && t.parentNode.removeChild(t),
                                        t = null
                                }
                            }
                            function a(e, t) {
                                for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
                            }
                            function o(e, t) {
                                var n = t && e,
                                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
                                if (r) return r;
                                if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
                                return e ? 1 : -1
                            }
                            function s(e) {
                                return r(function(t) {
                                    return t = +t,
                                        r(function(n, r) {
                                            for (var i, a = e([], n.length, t), o = a.length; o--;) n[i = a[o]] && (n[i] = !(r[i] = n[i]))
                                        })
                                })
                            }
                            function l(e) {
                                return e && void 0 !== e.getElementsByTagName && e
                            }
                            function u() {}
                            function c(e) {
                                for (var t = 0,
                                         n = e.length,
                                         r = ""; t < n; t++) r += e[t].value;
                                return r
                            }
                            function d(e, t, n) {
                                var r = t.dir,
                                    i = n && "parentNode" === r,
                                    a = R++;
                                return t.first ?
                                    function(t, n, a) {
                                        for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, a)
                                    }: function(t, n, o) {
                                        var s, l, u, c = [B, a];
                                        if (o) {
                                            for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, o)) return ! 0
                                        } else for (; t = t[r];) if (1 === t.nodeType || i) {
                                            if (u = t[j] || (t[j] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (s = l[r]) && s[0] === B && s[1] === a) return c[2] = s[2];
                                            if (l[r] = c, c[2] = e(t, n, o)) return ! 0
                                        }
                                    }
                            }
                            function p(e) {
                                return e.length > 1 ?
                                    function(t, n, r) {
                                        for (var i = e.length; i--;) if (!e[i](t, n, r)) return ! 1;
                                        return ! 0
                                    }: e[0]
                            }
                            function f(e, n, r) {
                                for (var i = 0,
                                         a = n.length; i < a; i++) t(e, n[i], r);
                                return r
                            }
                            function h(e, t, n, r, i) {
                                for (var a, o = [], s = 0, l = e.length, u = null != t; s < l; s++)(a = e[s]) && (n && !n(a, r, i) || (o.push(a), u && t.push(s)));
                                return o
                            }
                            function m(e, t, n, i, a, o) {
                                return i && !i[j] && (i = m(i)),
                                a && !a[j] && (a = m(a, o)),
                                    r(function(r, o, s, l) {
                                        var u, c, d, p = [],
                                            m = [],
                                            g = o.length,
                                            v = r || f(t || "*", s.nodeType ? [s] : s, []),
                                            y = !e || !r && t ? v: h(v, p, e, s, l),
                                            w = n ? a || (r ? e: g || i) ? [] : o: y;
                                        if (n && n(y, w, s, l), i) for (u = h(w, m), i(u, [], s, l), c = u.length; c--;)(d = u[c]) && (w[m[c]] = !(y[m[c]] = d));
                                        if (r) {
                                            if (a || e) {
                                                if (a) {
                                                    for (u = [], c = w.length; c--;)(d = w[c]) && u.push(y[c] = d);
                                                    a(null, w = [], u, l)
                                                }
                                                for (c = w.length; c--;)(d = w[c]) && (u = a ? Q(r, d) : p[c]) > -1 && (r[u] = !(o[u] = d))
                                            }
                                        } else w = h(w === o ? w.splice(g, w.length) : w),
                                            a ? a(null, o, w, l) : K.apply(o, w)
                                    })
                            }
                            function g(e) {
                                for (var t, n, r, i = e.length,
                                         a = b.relative[e[0].type], o = a || b.relative[" "], s = a ? 1 : 0, l = d(function(e) {
                                            return e === t
                                        },
                                        o, !0), u = d(function(e) {
                                            return Q(t, e) > -1
                                        },
                                        o, !0), f = [function(e, n, r) {
                                        var i = !a && (r || n !== k) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                                        return t = null,
                                            i
                                    }]; s < i; s++) if (n = b.relative[e[s].type]) f = [d(p(f), n)];
                                else {
                                    if (n = b.filter[e[s].type].apply(null, e[s].matches), n[j]) {
                                        for (r = ++s; r < i && !b.relative[e[r].type]; r++);
                                        return m(s > 1 && p(f), s > 1 && c(e.slice(0, s - 1).concat({
                                            value: " " === e[s - 2].type ? "*": ""
                                        })).replace(ae, "$1"), n, s < r && g(e.slice(s, r)), r < i && g(e = e.slice(r)), r < i && c(e))
                                    }
                                    f.push(n)
                                }
                                return p(f)
                            }
                            function v(e, n) {
                                var i = n.length > 0,
                                    a = e.length > 0,
                                    o = function(r, o, s, l, u) {
                                        var c, d, p, f = 0,
                                            m = "0",
                                            g = r && [],
                                            v = [],
                                            y = k,
                                            w = r || a && b.find.TAG("*", u),
                                            x = B += null == y ? 1 : Math.random() || .1,
                                            T = w.length;
                                        for (u && (k = o === P || o || u); m !== T && null != (c = w[m]); m++) {
                                            if (a && c) {
                                                for (d = 0, o || c.ownerDocument === P || (L(c), s = !N); p = e[d++];) if (p(c, o || P, s)) {
                                                    l.push(c);
                                                    break
                                                }
                                                u && (B = x)
                                            }
                                            i && ((c = !p && c) && f--, r && g.push(c))
                                        }
                                        if (f += m, i && m !== f) {
                                            for (d = 0; p = n[d++];) p(g, v, o, s);
                                            if (r) {
                                                if (f > 0) for (; m--;) g[m] || v[m] || (v[m] = $.call(l));
                                                v = h(v)
                                            }
                                            K.apply(l, v),
                                            u && !r && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                                        }
                                        return u && (B = x, k = y),
                                            g
                                    };
                                return i ? r(o) : o
                            }
                            var y, w, b, x, T, S, C, E, k, M, z, L, P, _, N, I, A, D, O, j = "sizzle" + 1 * new Date,
                                H = e.document,
                                B = 0,
                                R = 0,
                                F = n(),
                                q = n(),
                                W = n(),
                                X = function(e, t) {
                                    return e === t && (z = !0),
                                        0
                                },
                                G = 1 << 31,
                                Y = {}.hasOwnProperty,
                                V = [],
                                $ = V.pop,
                                U = V.push,
                                K = V.push,
                                J = V.slice,
                                Q = function(e, t) {
                                    for (var n = 0,
                                             r = e.length; n < r; n++) if (e[n] === t) return n;
                                    return - 1
                                },
                                Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                                ee = "[\\x20\\t\\r\\n\\f]",
                                te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                                ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
                                re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
                                ie = new RegExp(ee + "+", "g"),
                                ae = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                                oe = new RegExp("^" + ee + "*," + ee + "*"),
                                se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
                                le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
                                ue = new RegExp(re),
                                ce = new RegExp("^" + te + "$"),
                                de = {
                                    ID: new RegExp("^#(" + te + ")"),
                                    CLASS: new RegExp("^\\.(" + te + ")"),
                                    TAG: new RegExp("^(" + te + "|[*])"),
                                    ATTR: new RegExp("^" + ne),
                                    PSEUDO: new RegExp("^" + re),
                                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                                    bool: new RegExp("^(?:" + Z + ")$", "i"),
                                    needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
                                },
                                pe = /^(?:input|select|textarea|button)$/i,
                                fe = /^h\d$/i,
                                he = /^[^{]+\{\s*\[native \w/,
                                me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                                ge = /[+~]/,
                                ve = /'|\\/g,
                                ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
                                we = function(e, t, n) {
                                    var r = "0x" + t - 65536;
                                    return r !== r || n ? t: r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                                },
                                be = function() {
                                    L()
                                };
                            try {
                                K.apply(V = J.call(H.childNodes), H.childNodes),
                                    V[H.childNodes.length].nodeType
                            } catch(e) {
                                K = {
                                    apply: V.length ?
                                        function(e, t) {
                                            U.apply(e, J.call(t))
                                        }: function(e, t) {
                                            for (var n = e.length,
                                                     r = 0; e[n++] = t[r++];);
                                            e.length = n - 1
                                        }
                                }
                            }
                            w = t.support = {},
                                T = t.isXML = function(e) {
                                    var t = e && (e.ownerDocument || e).documentElement;
                                    return !! t && "HTML" !== t.nodeName
                                },
                                L = t.setDocument = function(e) {
                                    var t, n, r = e ? e.ownerDocument || e: H;
                                    return r !== P && 9 === r.nodeType && r.documentElement ? (P = r, _ = P.documentElement, N = !T(P), (n = P.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", be, !1) : n.attachEvent && n.attachEvent("onunload", be)), w.attributes = i(function(e) {
                                        return e.className = "i",
                                            !e.getAttribute("className")
                                    }), w.getElementsByTagName = i(function(e) {
                                        return e.appendChild(P.createComment("")),
                                            !e.getElementsByTagName("*").length
                                    }), w.getElementsByClassName = he.test(P.getElementsByClassName), w.getById = i(function(e) {
                                        return _.appendChild(e).id = j,
                                        !P.getElementsByName || !P.getElementsByName(j).length
                                    }), w.getById ? (b.find.ID = function(e, t) {
                                        if (void 0 !== t.getElementById && N) {
                                            var n = t.getElementById(e);
                                            return n ? [n] : []
                                        }
                                    },
                                        b.filter.ID = function(e) {
                                            var t = e.replace(ye, we);
                                            return function(e) {
                                                return e.getAttribute("id") === t
                                            }
                                        }) : (delete b.find.ID, b.filter.ID = function(e) {
                                        var t = e.replace(ye, we);
                                        return function(e) {
                                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                            return n && n.value === t
                                        }
                                    }), b.find.TAG = w.getElementsByTagName ?
                                        function(e, t) {
                                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                                        }: function(e, t) {
                                            var n, r = [],
                                                i = 0,
                                                a = t.getElementsByTagName(e);
                                            if ("*" === e) {
                                                for (; n = a[i++];) 1 === n.nodeType && r.push(n);
                                                return r
                                            }
                                            return a
                                        },
                                        b.find.CLASS = w.getElementsByClassName &&
                                            function(e, t) {
                                                if (void 0 !== t.getElementsByClassName && N) return t.getElementsByClassName(e)
                                            },
                                        A = [], I = [], (w.qsa = he.test(P.querySelectorAll)) && (i(function(e) {
                                        _.appendChild(e).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                                        e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ee + "*(?:''|\"\")"),
                                        e.querySelectorAll("[selected]").length || I.push("\\[" + ee + "*(?:value|" + Z + ")"),
                                        e.querySelectorAll("[id~=" + j + "-]").length || I.push("~="),
                                        e.querySelectorAll(":checked").length || I.push(":checked"),
                                        e.querySelectorAll("a#" + j + "+*").length || I.push(".#.+[+~]")
                                    }), i(function(e) {
                                        var t = P.createElement("input");
                                        t.setAttribute("type", "hidden"),
                                            e.appendChild(t).setAttribute("name", "D"),
                                        e.querySelectorAll("[name=d]").length && I.push("name" + ee + "*[*^$|!~]?="),
                                        e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"),
                                            e.querySelectorAll("*,:x"),
                                            I.push(",.*:")
                                    })), (w.matchesSelector = he.test(D = _.matches || _.webkitMatchesSelector || _.mozMatchesSelector || _.oMatchesSelector || _.msMatchesSelector)) && i(function(e) {
                                        w.disconnectedMatch = D.call(e, "div"),
                                            D.call(e, "[s!='']:x"),
                                            A.push("!=", re)
                                    }), I = I.length && new RegExp(I.join("|")), A = A.length && new RegExp(A.join("|")), t = he.test(_.compareDocumentPosition), O = t || he.test(_.contains) ?
                                        function(e, t) {
                                            var n = 9 === e.nodeType ? e.documentElement: e,
                                                r = t && t.parentNode;
                                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                                        }: function(e, t) {
                                            if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                                            return ! 1
                                        },
                                        X = t ?
                                            function(e, t) {
                                                if (e === t) return z = !0,
                                                    0;
                                                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === P || e.ownerDocument === H && O(H, e) ? -1 : t === P || t.ownerDocument === H && O(H, t) ? 1 : M ? Q(M, e) - Q(M, t) : 0 : 4 & n ? -1 : 1)
                                            }: function(e, t) {
                                                if (e === t) return z = !0,
                                                    0;
                                                var n, r = 0,
                                                    i = e.parentNode,
                                                    a = t.parentNode,
                                                    s = [e],
                                                    l = [t];
                                                if (!i || !a) return e === P ? -1 : t === P ? 1 : i ? -1 : a ? 1 : M ? Q(M, e) - Q(M, t) : 0;
                                                if (i === a) return o(e, t);
                                                for (n = e; n = n.parentNode;) s.unshift(n);
                                                for (n = t; n = n.parentNode;) l.unshift(n);
                                                for (; s[r] === l[r];) r++;
                                                return r ? o(s[r], l[r]) : s[r] === H ? -1 : l[r] === H ? 1 : 0
                                            },
                                        P) : P
                                },
                                t.matches = function(e, n) {
                                    return t(e, null, null, n)
                                },
                                t.matchesSelector = function(e, n) {
                                    if ((e.ownerDocument || e) !== P && L(e), n = n.replace(le, "='$1']"), w.matchesSelector && N && !W[n + " "] && (!A || !A.test(n)) && (!I || !I.test(n))) try {
                                        var r = D.call(e, n);
                                        if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                                    } catch(e) {}
                                    return t(n, P, null, [e]).length > 0
                                },
                                t.contains = function(e, t) {
                                    return (e.ownerDocument || e) !== P && L(e),
                                        O(e, t)
                                },
                                t.attr = function(e, t) { (e.ownerDocument || e) !== P && L(e);
                                    var n = b.attrHandle[t.toLowerCase()],
                                        r = n && Y.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !N) : void 0;
                                    return void 0 !== r ? r: w.attributes || !N ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
                                },
                                t.error = function(e) {
                                    throw new Error("Syntax error, unrecognized expression: " + e)
                                },
                                t.uniqueSort = function(e) {
                                    var t, n = [],
                                        r = 0,
                                        i = 0;
                                    if (z = !w.detectDuplicates, M = !w.sortStable && e.slice(0), e.sort(X), z) {
                                        for (; t = e[i++];) t === e[i] && (r = n.push(i));
                                        for (; r--;) e.splice(n[r], 1)
                                    }
                                    return M = null,
                                        e
                                },
                                x = t.getText = function(e) {
                                    var t, n = "",
                                        r = 0,
                                        i = e.nodeType;
                                    if (i) {
                                        if (1 === i || 9 === i || 11 === i) {
                                            if ("string" == typeof e.textContent) return e.textContent;
                                            for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                                        } else if (3 === i || 4 === i) return e.nodeValue
                                    } else for (; t = e[r++];) n += x(t);
                                    return n
                                },
                                b = t.selectors = {
                                    cacheLength: 50,
                                    createPseudo: r,
                                    match: de,
                                    attrHandle: {},
                                    find: {},
                                    relative: {
                                        ">": {
                                            dir: "parentNode",
                                            first: !0
                                        },
                                        " ": {
                                            dir: "parentNode"
                                        },
                                        "+": {
                                            dir: "previousSibling",
                                            first: !0
                                        },
                                        "~": {
                                            dir: "previousSibling"
                                        }
                                    },
                                    preFilter: {
                                        ATTR: function(e) {
                                            return e[1] = e[1].replace(ye, we),
                                                e[3] = (e[3] || e[4] || e[5] || "").replace(ye, we),
                                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                                e.slice(0, 4)
                                        },
                                        CHILD: function(e) {
                                            return e[1] = e[1].toLowerCase(),
                                                "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                                                e
                                        },
                                        PSEUDO: function(e) {
                                            var t, n = !e[6] && e[2];
                                            return de.CHILD.test(e[0]) ? null: (e[3] ? e[2] = e[4] || e[5] || "": n && ue.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                        }
                                    },
                                    filter: {
                                        TAG: function(e) {
                                            var t = e.replace(ye, we).toLowerCase();
                                            return "*" === e ?
                                                function() {
                                                    return ! 0
                                                }: function(e) {
                                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                                }
                                        },
                                        CLASS: function(e) {
                                            var t = F[e + " "];
                                            return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && F(e,
                                                function(e) {
                                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                                })
                                        },
                                        ATTR: function(e, n, r) {
                                            return function(i) {
                                                var a = t.attr(i, e);
                                                return null == a ? "!=" === n: !n || (a += "", "=" === n ? a === r: "!=" === n ? a !== r: "^=" === n ? r && 0 === a.indexOf(r) : "*=" === n ? r && a.indexOf(r) > -1 : "$=" === n ? r && a.slice( - r.length) === r: "~=" === n ? (" " + a.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (a === r || a.slice(0, r.length + 1) === r + "-"))
                                            }
                                        },
                                        CHILD: function(e, t, n, r, i) {
                                            var a = "nth" !== e.slice(0, 3),
                                                o = "last" !== e.slice( - 4),
                                                s = "of-type" === t;
                                            return 1 === r && 0 === i ?
                                                function(e) {
                                                    return !! e.parentNode
                                                }: function(t, n, l) {
                                                    var u, c, d, p, f, h, m = a !== o ? "nextSibling": "previousSibling",
                                                        g = t.parentNode,
                                                        v = s && t.nodeName.toLowerCase(),
                                                        y = !l && !s,
                                                        w = !1;
                                                    if (g) {
                                                        if (a) {
                                                            for (; m;) {
                                                                for (p = t; p = p[m];) if (s ? p.nodeName.toLowerCase() === v: 1 === p.nodeType) return ! 1;
                                                                h = m = "only" === e && !h && "nextSibling"
                                                            }
                                                            return ! 0
                                                        }
                                                        if (h = [o ? g.firstChild: g.lastChild], o && y) {
                                                            for (p = g, d = p[j] || (p[j] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), u = c[e] || [], f = u[0] === B && u[1], w = f && u[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (w = f = 0) || h.pop();) if (1 === p.nodeType && ++w && p === t) {
                                                                c[e] = [B, f, w];
                                                                break
                                                            }
                                                        } else if (y && (p = t, d = p[j] || (p[j] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), u = c[e] || [], f = u[0] === B && u[1], w = f), !1 === w) for (; (p = ++f && p && p[m] || (w = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v: 1 !== p.nodeType) || !++w || (y && (d = p[j] || (p[j] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), c[e] = [B, w]), p !== t)););
                                                        return (w -= i) === r || w % r == 0 && w / r >= 0
                                                    }
                                                }
                                        },
                                        PSEUDO: function(e, n) {
                                            var i, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                            return a[j] ? a(n) : a.length > 1 ? (i = [e, e, "", n], b.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                                for (var r, i = a(e, n), o = i.length; o--;) r = Q(e, i[o]),
                                                    e[r] = !(t[r] = i[o])
                                            }) : function(e) {
                                                return a(e, 0, i)
                                            }) : a
                                        }
                                    },
                                    pseudos: {
                                        not: r(function(e) {
                                            var t = [],
                                                n = [],
                                                i = C(e.replace(ae, "$1"));
                                            return i[j] ? r(function(e, t, n, r) {
                                                for (var a, o = i(e, null, r, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                                            }) : function(e, r, a) {
                                                return t[0] = e,
                                                    i(t, null, a, n),
                                                    t[0] = null,
                                                    !n.pop()
                                            }
                                        }),
                                        has: r(function(e) {
                                            return function(n) {
                                                return t(e, n).length > 0
                                            }
                                        }),
                                        contains: r(function(e) {
                                            return e = e.replace(ye, we),
                                                function(t) {
                                                    return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                                                }
                                        }),
                                        lang: r(function(e) {
                                            return ce.test(e || "") || t.error("unsupported lang: " + e),
                                                e = e.replace(ye, we).toLowerCase(),
                                                function(t) {
                                                    var n;
                                                    do {
                                                        if (n = N ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                                    } while (( t = t . parentNode ) && 1 === t.nodeType);
                                                    return ! 1
                                                }
                                        }),
                                        target: function(t) {
                                            var n = e.location && e.location.hash;
                                            return n && n.slice(1) === t.id
                                        },
                                        root: function(e) {
                                            return e === _
                                        },
                                        focus: function(e) {
                                            return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                        },
                                        enabled: function(e) {
                                            return ! 1 === e.disabled
                                        },
                                        disabled: function(e) {
                                            return ! 0 === e.disabled
                                        },
                                        checked: function(e) {
                                            var t = e.nodeName.toLowerCase();
                                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                                        },
                                        selected: function(e) {
                                            return e.parentNode && e.parentNode.selectedIndex,
                                            !0 === e.selected
                                        },
                                        empty: function(e) {
                                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return ! 1;
                                            return ! 0
                                        },
                                        parent: function(e) {
                                            return ! b.pseudos.empty(e)
                                        },
                                        header: function(e) {
                                            return fe.test(e.nodeName)
                                        },
                                        input: function(e) {
                                            return pe.test(e.nodeName)
                                        },
                                        button: function(e) {
                                            var t = e.nodeName.toLowerCase();
                                            return "input" === t && "button" === e.type || "button" === t
                                        },
                                        text: function(e) {
                                            var t;
                                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                        },
                                        first: s(function() {
                                            return [0]
                                        }),
                                        last: s(function(e, t) {
                                            return [t - 1]
                                        }),
                                        eq: s(function(e, t, n) {
                                            return [n < 0 ? n + t: n]
                                        }),
                                        even: s(function(e, t) {
                                            for (var n = 0; n < t; n += 2) e.push(n);
                                            return e
                                        }),
                                        odd: s(function(e, t) {
                                            for (var n = 1; n < t; n += 2) e.push(n);
                                            return e
                                        }),
                                        lt: s(function(e, t, n) {
                                            for (var r = n < 0 ? n + t: n; --r >= 0;) e.push(r);
                                            return e
                                        }),
                                        gt: s(function(e, t, n) {
                                            for (var r = n < 0 ? n + t: n; ++r < t;) e.push(r);
                                            return e
                                        })
                                    }
                                },
                                b.pseudos.nth = b.pseudos.eq;
                            for (y in {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0
                            }) b.pseudos[y] = function(e) {
                                return function(t) {
                                    return "input" === t.nodeName.toLowerCase() && t.type === e
                                }
                            } (y);
                            for (y in {
                                submit: !0,
                                reset: !0
                            }) b.pseudos[y] = function(e) {
                                return function(t) {
                                    var n = t.nodeName.toLowerCase();
                                    return ("input" === n || "button" === n) && t.type === e
                                }
                            } (y);
                            return u.prototype = b.filters = b.pseudos,
                                b.setFilters = new u,
                                S = t.tokenize = function(e, n) {
                                    var r, i, a, o, s, l, u, c = q[e + " "];
                                    if (c) return n ? 0 : c.slice(0);
                                    for (s = e, l = [], u = b.preFilter; s;) {
                                        r && !(i = oe.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(a = [])),
                                            r = !1,
                                        (i = se.exec(s)) && (r = i.shift(), a.push({
                                            value: r,
                                            type: i[0].replace(ae, " ")
                                        }), s = s.slice(r.length));
                                        for (o in b.filter) ! (i = de[o].exec(s)) || u[o] && !(i = u[o](i)) || (r = i.shift(), a.push({
                                            value: r,
                                            type: o,
                                            matches: i
                                        }), s = s.slice(r.length));
                                        if (!r) break
                                    }
                                    return n ? s.length: s ? t.error(e) : q(e, l).slice(0)
                                },
                                C = t.compile = function(e, t) {
                                    var n, r = [],
                                        i = [],
                                        a = W[e + " "];
                                    if (!a) {
                                        for (t || (t = S(e)), n = t.length; n--;) a = g(t[n]),
                                            a[j] ? r.push(a) : i.push(a);
                                        a = W(e, v(i, r)),
                                            a.selector = e
                                    }
                                    return a
                                },
                                E = t.select = function(e, t, n, r) {
                                    var i, a, o, s, u, d = "function" == typeof e && e,
                                        p = !r && S(e = d.selector || e);
                                    if (n = n || [], 1 === p.length) {
                                        if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && w.getById && 9 === t.nodeType && N && b.relative[a[1].type]) {
                                            if (! (t = (b.find.ID(o.matches[0].replace(ye, we), t) || [])[0])) return n;
                                            d && (t = t.parentNode),
                                                e = e.slice(a.shift().value.length)
                                        }
                                        for (i = de.needsContext.test(e) ? 0 : a.length; i--&&(o = a[i], !b.relative[s = o.type]);) if ((u = b.find[s]) && (r = u(o.matches[0].replace(ye, we), ge.test(a[0].type) && l(t.parentNode) || t))) {
                                            if (a.splice(i, 1), !(e = r.length && c(a))) return K.apply(n, r),
                                                n;
                                            break
                                        }
                                    }
                                    return (d || C(e, p))(r, t, !N, n, !t || ge.test(e) && l(t.parentNode) || t),
                                        n
                                },
                                w.sortStable = j.split("").sort(X).join("") === j,
                                w.detectDuplicates = !!z,
                                L(),
                                w.sortDetached = i(function(e) {
                                    return 1 & e.compareDocumentPosition(P.createElement("div"))
                                }),
                            i(function(e) {
                                return e.innerHTML = "<a href='#'></a>",
                                "#" === e.firstChild.getAttribute("href")
                            }) || a("type|href|height|width",
                                function(e, t, n) {
                                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                                }),
                            w.attributes && i(function(e) {
                                return e.innerHTML = "<input/>",
                                    e.firstChild.setAttribute("value", ""),
                                "" === e.firstChild.getAttribute("value")
                            }) || a("value",
                                function(e, t, n) {
                                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                                }),
                            i(function(e) {
                                return null == e.getAttribute("disabled")
                            }) || a(Z,
                                function(e, t, n) {
                                    var r;
                                    if (!n) return ! 0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
                                }),
                                t
                        } (n);
                        ge.find = xe,
                            ge.expr = xe.selectors,
                            ge.expr[":"] = ge.expr.pseudos,
                            ge.uniqueSort = ge.unique = xe.uniqueSort,
                            ge.text = xe.getText,
                            ge.isXMLDoc = xe.isXML,
                            ge.contains = xe.contains;
                        var Te = function(e, t, n) {
                                for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                                    if (i && ge(e).is(n)) break;
                                    r.push(e)
                                }
                                return r
                            },
                            Se = function(e, t) {
                                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                                return n
                            },
                            Ce = ge.expr.match.needsContext,
                            Ee = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
                            ke = /^.[^:#\[\.,]*$/;
                        ge.filter = function(e, t, n) {
                            var r = t[0];
                            return n && (e = ":not(" + e + ")"),
                                1 === t.length && 1 === r.nodeType ? ge.find.matchesSelector(r, e) ? [r] : [] : ge.find.matches(e, ge.grep(t,
                                    function(e) {
                                        return 1 === e.nodeType
                                    }))
                        },
                            ge.fn.extend({
                                find: function(e) {
                                    var t, n = [],
                                        r = this,
                                        i = r.length;
                                    if ("string" != typeof e) return this.pushStack(ge(e).filter(function() {
                                        for (t = 0; t < i; t++) if (ge.contains(r[t], this)) return ! 0
                                    }));
                                    for (t = 0; t < i; t++) ge.find(e, r[t], n);
                                    return n = this.pushStack(i > 1 ? ge.unique(n) : n),
                                        n.selector = this.selector ? this.selector + " " + e: e,
                                        n
                                },
                                filter: function(e) {
                                    return this.pushStack(s(this, e || [], !1))
                                },
                                not: function(e) {
                                    return this.pushStack(s(this, e || [], !0))
                                },
                                is: function(e) {
                                    return !! s(this, "string" == typeof e && Ce.test(e) ? ge(e) : e || [], !1).length
                                }
                            });
                        var Me, ze = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/; (ge.fn.init = function(e, t, n) {
                            var r, i;
                            if (!e) return this;
                            if (n = n || Me, "string" == typeof e) {
                                if (! (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ze.exec(e)) || !r[1] && t) return ! t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                                if (r[1]) {
                                    if (t = t instanceof ge ? t[0] : t, ge.merge(this, ge.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t: se, !0)), Ee.test(r[1]) && ge.isPlainObject(t)) for (r in t) ge.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                                    return this
                                }
                                if ((i = se.getElementById(r[2])) && i.parentNode) {
                                    if (i.id !== r[2]) return Me.find(e);
                                    this.length = 1,
                                        this[0] = i
                                }
                                return this.context = se,
                                    this.selector = e,
                                    this
                            }
                            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ge.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ge) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ge.makeArray(e, this))
                        }).prototype = ge.fn,
                            Me = ge(se);
                        var Le = /^(?:parents|prev(?:Until|All))/,
                            Pe = {
                                children: !0,
                                contents: !0,
                                next: !0,
                                prev: !0
                            };
                        ge.fn.extend({
                            has: function(e) {
                                var t, n = ge(e, this),
                                    r = n.length;
                                return this.filter(function() {
                                    for (t = 0; t < r; t++) if (ge.contains(this, n[t])) return ! 0
                                })
                            },
                            closest: function(e, t) {
                                for (var n, r = 0,
                                         i = this.length,
                                         a = [], o = Ce.test(e) || "string" != typeof e ? ge(e, t || this.context) : 0; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && ge.find.matchesSelector(n, e))) {
                                    a.push(n);
                                    break
                                }
                                return this.pushStack(a.length > 1 ? ge.uniqueSort(a) : a)
                            },
                            index: function(e) {
                                return e ? "string" == typeof e ? ge.inArray(this[0], ge(e)) : ge.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
                            },
                            add: function(e, t) {
                                return this.pushStack(ge.uniqueSort(ge.merge(this.get(), ge(e, t))))
                            },
                            addBack: function(e) {
                                return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
                            }
                        }),
                            ge.each({
                                    parent: function(e) {
                                        var t = e.parentNode;
                                        return t && 11 !== t.nodeType ? t: null
                                    },
                                    parents: function(e) {
                                        return Te(e, "parentNode")
                                    },
                                    parentsUntil: function(e, t, n) {
                                        return Te(e, "parentNode", n)
                                    },
                                    next: function(e) {
                                        return l(e, "nextSibling")
                                    },
                                    prev: function(e) {
                                        return l(e, "previousSibling")
                                    },
                                    nextAll: function(e) {
                                        return Te(e, "nextSibling")
                                    },
                                    prevAll: function(e) {
                                        return Te(e, "previousSibling")
                                    },
                                    nextUntil: function(e, t, n) {
                                        return Te(e, "nextSibling", n)
                                    },
                                    prevUntil: function(e, t, n) {
                                        return Te(e, "previousSibling", n)
                                    },
                                    siblings: function(e) {
                                        return Se((e.parentNode || {}).firstChild, e)
                                    },
                                    children: function(e) {
                                        return Se(e.firstChild)
                                    },
                                    contents: function(e) {
                                        return ge.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: ge.merge([], e.childNodes)
                                    }
                                },
                                function(e, t) {
                                    ge.fn[e] = function(n, r) {
                                        var i = ge.map(this, t, n);
                                        return "Until" !== e.slice( - 5) && (r = n),
                                        r && "string" == typeof r && (i = ge.filter(r, i)),
                                        this.length > 1 && (Pe[e] || (i = ge.uniqueSort(i)), Le.test(e) && (i = i.reverse())),
                                            this.pushStack(i)
                                    }
                                });
                        var _e = /\S+/g;
                        ge.Callbacks = function(e) {
                            e = "string" == typeof e ? u(e) : ge.extend({},
                                e);
                            var t, n, r, i, a = [],
                                o = [],
                                s = -1,
                                l = function() {
                                    for (i = e.once, r = t = !0; o.length; s = -1) for (n = o.shift(); ++s < a.length;) ! 1 === a[s].apply(n[0], n[1]) && e.stopOnFalse && (s = a.length, n = !1);
                                    e.memory || (n = !1),
                                        t = !1,
                                    i && (a = n ? [] : "")
                                },
                                c = {
                                    add: function() {
                                        return a && (n && !t && (s = a.length - 1, o.push(n)),
                                            function t(n) {
                                                ge.each(n,
                                                    function(n, r) {
                                                        ge.isFunction(r) ? e.unique && c.has(r) || a.push(r) : r && r.length && "string" !== ge.type(r) && t(r)
                                                    })
                                            } (arguments), n && !t && l()),
                                            this
                                    },
                                    remove: function() {
                                        return ge.each(arguments,
                                            function(e, t) {
                                                for (var n; (n = ge.inArray(t, a, n)) > -1;) a.splice(n, 1),
                                                n <= s && s--
                                            }),
                                            this
                                    },
                                    has: function(e) {
                                        return e ? ge.inArray(e, a) > -1 : a.length > 0
                                    },
                                    empty: function() {
                                        return a && (a = []),
                                            this
                                    },
                                    disable: function() {
                                        return i = o = [],
                                            a = n = "",
                                            this
                                    },
                                    disabled: function() {
                                        return ! a
                                    },
                                    lock: function() {
                                        return i = !0,
                                        n || c.disable(),
                                            this
                                    },
                                    locked: function() {
                                        return !! i
                                    },
                                    fireWith: function(e, n) {
                                        return i || (n = n || [], n = [e, n.slice ? n.slice() : n], o.push(n), t || l()),
                                            this
                                    },
                                    fire: function() {
                                        return c.fireWith(this, arguments),
                                            this
                                    },
                                    fired: function() {
                                        return !! r
                                    }
                                };
                            return c
                        },
                            ge.extend({
                                Deferred: function(e) {
                                    var t = [["resolve", "done", ge.Callbacks("once memory"), "resolved"], ["reject", "fail", ge.Callbacks("once memory"), "rejected"], ["notify", "progress", ge.Callbacks("memory")]],
                                        n = "pending",
                                        r = {
                                            state: function() {
                                                return n
                                            },
                                            always: function() {
                                                return i.done(arguments).fail(arguments),
                                                    this
                                            },
                                            then: function() {
                                                var e = arguments;
                                                return ge.Deferred(function(n) {
                                                    ge.each(t,
                                                        function(t, a) {
                                                            var o = ge.isFunction(e[t]) && e[t];
                                                            i[a[1]](function() {
                                                                var e = o && o.apply(this, arguments);
                                                                e && ge.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                                                            })
                                                        }),
                                                        e = null
                                                }).promise()
                                            },
                                            promise: function(e) {
                                                return null != e ? ge.extend(e, r) : r
                                            }
                                        },
                                        i = {};
                                    return r.pipe = r.then,
                                        ge.each(t,
                                            function(e, a) {
                                                var o = a[2],
                                                    s = a[3];
                                                r[a[1]] = o.add,
                                                s && o.add(function() {
                                                        n = s
                                                    },
                                                    t[1 ^ e][2].disable, t[2][2].lock),
                                                    i[a[0]] = function() {
                                                        return i[a[0] + "With"](this === i ? r: this, arguments),
                                                            this
                                                    },
                                                    i[a[0] + "With"] = o.fireWith
                                            }),
                                        r.promise(i),
                                    e && e.call(i, i),
                                        i
                                },
                                when: function(e) {
                                    var t, n, r, i = 0,
                                        a = le.call(arguments),
                                        o = a.length,
                                        s = 1 !== o || e && ge.isFunction(e.promise) ? o: 0,
                                        l = 1 === s ? e: ge.Deferred(),
                                        u = function(e, n, r) {
                                            return function(i) {
                                                n[e] = this,
                                                    r[e] = arguments.length > 1 ? le.call(arguments) : i,
                                                    r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                                            }
                                        };
                                    if (o > 1) for (t = new Array(o), n = new Array(o), r = new Array(o); i < o; i++) a[i] && ge.isFunction(a[i].promise) ? a[i].promise().progress(u(i, n, t)).done(u(i, r, a)).fail(l.reject) : --s;
                                    return s || l.resolveWith(r, a),
                                        l.promise()
                                }
                            });
                        var Ne;
                        ge.fn.ready = function(e) {
                            return ge.ready.promise().done(e),
                                this
                        },
                            ge.extend({
                                isReady: !1,
                                readyWait: 1,
                                holdReady: function(e) {
                                    e ? ge.readyWait++:ge.ready(!0)
                                },
                                ready: function(e) { (!0 === e ? --ge.readyWait: ge.isReady) || (ge.isReady = !0, !0 !== e && --ge.readyWait > 0 || (Ne.resolveWith(se, [ge]), ge.fn.triggerHandler && (ge(se).triggerHandler("ready"), ge(se).off("ready"))))
                                }
                            }),
                            ge.ready.promise = function(e) {
                                if (!Ne) if (Ne = ge.Deferred(), "complete" === se.readyState || "loading" !== se.readyState && !se.documentElement.doScroll) n.setTimeout(ge.ready);
                                else if (se.addEventListener) se.addEventListener("DOMContentLoaded", d),
                                    n.addEventListener("load", d);
                                else {
                                    se.attachEvent("onreadystatechange", d),
                                        n.attachEvent("onload", d);
                                    var t = !1;
                                    try {
                                        t = null == n.frameElement && se.documentElement
                                    } catch(e) {}
                                    t && t.doScroll &&
                                    function e() {
                                        if (!ge.isReady) {
                                            try {
                                                t.doScroll("left")
                                            } catch(t) {
                                                return n.setTimeout(e, 50)
                                            }
                                            c(),
                                                ge.ready()
                                        }
                                    } ()
                                }
                                return Ne.promise(e)
                            },
                            ge.ready.promise();
                        var Ie;
                        for (Ie in ge(me)) break;
                        me.ownFirst = "0" === Ie,
                            me.inlineBlockNeedsLayout = !1,
                            ge(function() {
                                var e, t, n, r; (n = se.getElementsByTagName("body")[0]) && n.style && (t = se.createElement("div"), r = se.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", me.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
                            }),
                            function() {
                                var e = se.createElement("div");
                                me.deleteExpando = !0;
                                try {
                                    delete e.test
                                } catch(e) {
                                    me.deleteExpando = !1
                                }
                                e = null
                            } ();
                        var Ae = function(e) {
                                var t = ge.noData[(e.nodeName + " ").toLowerCase()],
                                    n = +e.nodeType || 1;
                                return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
                            },
                            De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                            Oe = /([A-Z])/g;
                        ge.extend({
                            cache: {},
                            noData: {
                                "applet ": !0,
                                "embed ": !0,
                                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                            },
                            hasData: function(e) {
                                return !! (e = e.nodeType ? ge.cache[e[ge.expando]] : e[ge.expando]) && !f(e)
                            },
                            data: function(e, t, n) {
                                return h(e, t, n)
                            },
                            removeData: function(e, t) {
                                return m(e, t)
                            },
                            _data: function(e, t, n) {
                                return h(e, t, n, !0)
                            },
                            _removeData: function(e, t) {
                                return m(e, t, !0)
                            }
                        }),
                            ge.fn.extend({
                                data: function(e, t) {
                                    var n, r, i, a = this[0],
                                        o = a && a.attributes;
                                    if (void 0 === e) {
                                        if (this.length && (i = ge.data(a), 1 === a.nodeType && !ge._data(a, "parsedAttrs"))) {
                                            for (n = o.length; n--;) o[n] && (r = o[n].name, 0 === r.indexOf("data-") && (r = ge.camelCase(r.slice(5)), p(a, r, i[r])));
                                            ge._data(a, "parsedAttrs", !0)
                                        }
                                        return i
                                    }
                                    return "object" == typeof e ? this.each(function() {
                                        ge.data(this, e)
                                    }) : arguments.length > 1 ? this.each(function() {
                                        ge.data(this, e, t)
                                    }) : a ? p(a, e, ge.data(a, e)) : void 0
                                },
                                removeData: function(e) {
                                    return this.each(function() {
                                        ge.removeData(this, e)
                                    })
                                }
                            }),
                            ge.extend({
                                queue: function(e, t, n) {
                                    var r;
                                    if (e) return t = (t || "fx") + "queue",
                                        r = ge._data(e, t),
                                    n && (!r || ge.isArray(n) ? r = ge._data(e, t, ge.makeArray(n)) : r.push(n)),
                                    r || []
                                },
                                dequeue: function(e, t) {
                                    t = t || "fx";
                                    var n = ge.queue(e, t),
                                        r = n.length,
                                        i = n.shift(),
                                        a = ge._queueHooks(e, t),
                                        o = function() {
                                            ge.dequeue(e, t)
                                        };
                                    "inprogress" === i && (i = n.shift(), r--),
                                    i && ("fx" === t && n.unshift("inprogress"), delete a.stop, i.call(e, o, a)),
                                    !r && a && a.empty.fire()
                                },
                                _queueHooks: function(e, t) {
                                    var n = t + "queueHooks";
                                    return ge._data(e, n) || ge._data(e, n, {
                                        empty: ge.Callbacks("once memory").add(function() {
                                            ge._removeData(e, t + "queue"),
                                                ge._removeData(e, n)
                                        })
                                    })
                                }
                            }),
                            ge.fn.extend({
                                queue: function(e, t) {
                                    var n = 2;
                                    return "string" != typeof e && (t = e, e = "fx", n--),
                                        arguments.length < n ? ge.queue(this[0], e) : void 0 === t ? this: this.each(function() {
                                            var n = ge.queue(this, e, t);
                                            ge._queueHooks(this, e),
                                            "fx" === e && "inprogress" !== n[0] && ge.dequeue(this, e)
                                        })
                                },
                                dequeue: function(e) {
                                    return this.each(function() {
                                        ge.dequeue(this, e)
                                    })
                                },
                                clearQueue: function(e) {
                                    return this.queue(e || "fx", [])
                                },
                                promise: function(e, t) {
                                    var n, r = 1,
                                        i = ge.Deferred(),
                                        a = this,
                                        o = this.length,
                                        s = function() {--r || i.resolveWith(a, [a])
                                        };
                                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = ge._data(a[o], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                                    return s(),
                                        i.promise(t)
                                }
                            }),
                            function() {
                                var e;
                                me.shrinkWrapBlocks = function() {
                                    if (null != e) return e;
                                    e = !1;
                                    var t, n, r;
                                    return (n = se.getElementsByTagName("body")[0]) && n.style ? (t = se.createElement("div"), r = se.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(se.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
                                }
                            } ();
                        var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                            He = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i"),
                            Be = ["Top", "Right", "Bottom", "Left"],
                            Re = function(e, t) {
                                return e = t || e,
                                "none" === ge.css(e, "display") || !ge.contains(e.ownerDocument, e)
                            },
                            Fe = function(e, t, n, r, i, a, o) {
                                var s = 0,
                                    l = e.length,
                                    u = null == n;
                                if ("object" === ge.type(n)) {
                                    i = !0;
                                    for (s in n) Fe(e, t, s, n[s], !0, a, o)
                                } else if (void 0 !== r && (i = !0, ge.isFunction(r) || (o = !0), u && (o ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                                    return u.call(ge(e), n)
                                })), t)) for (; s < l; s++) t(e[s], n, o ? r: r.call(e[s], s, t(e[s], n)));
                                return i ? e: u ? t.call(e) : l ? t(e[0], n) : a
                            },
                            qe = /^(?:checkbox|radio)$/i,
                            We = /<([\w:-]+)/,
                            Xe = /^$|\/(?:java|ecma)script/i,
                            Ge = /^\s+/,
                            Ye = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video"; !
                            function() {
                                var e = se.createElement("div"),
                                    t = se.createDocumentFragment(),
                                    n = se.createElement("input");
                                e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                                    me.leadingWhitespace = 3 === e.firstChild.nodeType,
                                    me.tbody = !e.getElementsByTagName("tbody").length,
                                    me.htmlSerialize = !!e.getElementsByTagName("link").length,
                                    me.html5Clone = "<:nav></:nav>" !== se.createElement("nav").cloneNode(!0).outerHTML,
                                    n.type = "checkbox",
                                    n.checked = !0,
                                    t.appendChild(n),
                                    me.appendChecked = n.checked,
                                    e.innerHTML = "<textarea>x</textarea>",
                                    me.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue,
                                    t.appendChild(e),
                                    n = se.createElement("input"),
                                    n.setAttribute("type", "radio"),
                                    n.setAttribute("checked", "checked"),
                                    n.setAttribute("name", "t"),
                                    e.appendChild(n),
                                    me.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
                                    me.noCloneEvent = !!e.addEventListener,
                                    e[ge.expando] = 1,
                                    me.attributes = !e.getAttribute(ge.expando)
                            } ();
                        var Ve = {
                            option: [1, "<select multiple='multiple'>", "</select>"],
                            legend: [1, "<fieldset>", "</fieldset>"],
                            area: [1, "<map>", "</map>"],
                            param: [1, "<object>", "</object>"],
                            thead: [1, "<table>", "</table>"],
                            tr: [2, "<table><tbody>", "</tbody></table>"],
                            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                            _default: me.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
                        };
                        Ve.optgroup = Ve.option,
                            Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead,
                            Ve.th = Ve.td;
                        var $e = /<|&#?\w+;/,
                            Ue = /<tbody/i; !
                            function() {
                                var e, t, r = se.createElement("div");
                                for (e in {
                                    submit: !0,
                                    change: !0,
                                    focusin: !0
                                }) t = "on" + e,
                                (me[e] = t in n) || (r.setAttribute(t, "t"), me[e] = !1 === r.attributes[t].expando);
                                r = null
                            } ();
                        var Ke = /^(?:input|select|textarea)$/i,
                            Je = /^key/,
                            Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                            Ze = /^(?:focusinfocus|focusoutblur)$/,
                            et = /^([^.]*)(?:\.(.+)|)/;
                        ge.event = {
                            global: {},
                            add: function(e, t, n, r, i) {
                                var a, o, s, l, u, c, d, p, f, h, m, g = ge._data(e);
                                if (g) {
                                    for (n.handler && (l = n, n = l.handler, i = l.selector), n.guid || (n.guid = ge.guid++), (o = g.events) || (o = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                                        return void 0 === ge || e && ge.event.triggered === e.type ? void 0 : ge.event.dispatch.apply(c.elem, arguments)
                                    },
                                        c.elem = e), t = (t || "").match(_e) || [""], s = t.length; s--;) a = et.exec(t[s]) || [],
                                        f = m = a[1],
                                        h = (a[2] || "").split(".").sort(),
                                    f && (u = ge.event.special[f] || {},
                                        f = (i ? u.delegateType: u.bindType) || f, u = ge.event.special[f] || {},
                                        d = ge.extend({
                                                type: f,
                                                origType: m,
                                                data: r,
                                                handler: n,
                                                guid: n.guid,
                                                selector: i,
                                                needsContext: i && ge.expr.match.needsContext.test(i),
                                                namespace: h.join(".")
                                            },
                                            l), (p = o[f]) || (p = o[f] = [], p.delegateCount = 0, u.setup && !1 !== u.setup.call(e, r, h, c) || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, d) : p.push(d), ge.event.global[f] = !0);
                                    e = null
                                }
                            },
                            remove: function(e, t, n, r, i) {
                                var a, o, s, l, u, c, d, p, f, h, m, g = ge.hasData(e) && ge._data(e);
                                if (g && (c = g.events)) {
                                    for (t = (t || "").match(_e) || [""], u = t.length; u--;) if (s = et.exec(t[u]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                                        for (d = ge.event.special[f] || {},
                                                 f = (r ? d.delegateType: d.bindType) || f, p = c[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = p.length; a--;) o = p[a],
                                        !i && m !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (p.splice(a, 1), o.selector && p.delegateCount--, d.remove && d.remove.call(e, o));
                                        l && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || ge.removeEvent(e, f, g.handle), delete c[f])
                                    } else for (f in c) ge.event.remove(e, f + t[u], n, r, !0);
                                    ge.isEmptyObject(c) && (delete g.handle, ge._removeData(e, "events"))
                                }
                            },
                            trigger: function(e, t, r, i) {
                                var a, o, s, l, u, c, d, p = [r || se],
                                    f = he.call(e, "type") ? e.type: e,
                                    h = he.call(e, "namespace") ? e.namespace.split(".") : [];
                                if (s = c = r = r || se, 3 !== r.nodeType && 8 !== r.nodeType && !Ze.test(f + ge.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), o = f.indexOf(":") < 0 && "on" + f, e = e[ge.expando] ? e: new ge.Event(f, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : ge.makeArray(t, [e]), u = ge.event.special[f] || {},
                                i || !u.trigger || !1 !== u.trigger.apply(r, t))) {
                                    if (!i && !u.noBubble && !ge.isWindow(r)) {
                                        for (l = u.delegateType || f, Ze.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s),
                                            c = s;
                                        c === (r.ownerDocument || se) && p.push(c.defaultView || c.parentWindow || n)
                                    }
                                    for (d = 0; (s = p[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? l: u.bindType || f,
                                        a = (ge._data(s, "events") || {})[e.type] && ge._data(s, "handle"),
                                    a && a.apply(s, t),
                                    (a = o && s[o]) && a.apply && Ae(s) && (e.result = a.apply(s, t), !1 === e.result && e.preventDefault());
                                    if (e.type = f, !i && !e.isDefaultPrevented() && (!u._default || !1 === u._default.apply(p.pop(), t)) && Ae(r) && o && r[f] && !ge.isWindow(r)) {
                                        c = r[o],
                                        c && (r[o] = null),
                                            ge.event.triggered = f;
                                        try {
                                            r[f]()
                                        } catch(e) {}
                                        ge.event.triggered = void 0,
                                        c && (r[o] = c)
                                    }
                                    return e.result
                                }
                            },
                            dispatch: function(e) {
                                e = ge.event.fix(e);
                                var t, n, r, i, a, o = [],
                                    s = le.call(arguments),
                                    l = (ge._data(this, "events") || {})[e.type] || [],
                                    u = ge.event.special[e.type] || {};
                                if (s[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                                    for (o = ge.event.handlers.call(this, e, l), t = 0; (i = o[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, n = 0; (a = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(a.namespace) || (e.handleObj = a, e.data = a.data, void 0 !== (r = ((ge.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, s)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                                    return u.postDispatch && u.postDispatch.call(this, e),
                                        e.result
                                }
                            },
                            handlers: function(e, t) {
                                var n, r, i, a, o = [],
                                    s = t.delegateCount,
                                    l = e.target;
                                if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                                    for (r = [], n = 0; n < s; n++) a = t[n],
                                        i = a.selector + " ",
                                    void 0 === r[i] && (r[i] = a.needsContext ? ge(i, this).index(l) > -1 : ge.find(i, this, null, [l]).length),
                                    r[i] && r.push(a);
                                    r.length && o.push({
                                        elem: l,
                                        handlers: r
                                    })
                                }
                                return s < t.length && o.push({
                                    elem: this,
                                    handlers: t.slice(s)
                                }),
                                    o
                            },
                            fix: function(e) {
                                if (e[ge.expando]) return e;
                                var t, n, r, i = e.type,
                                    a = e,
                                    o = this.fixHooks[i];
                                for (o || (this.fixHooks[i] = o = Qe.test(i) ? this.mouseHooks: Je.test(i) ? this.keyHooks: {}), r = o.props ? this.props.concat(o.props) : this.props, e = new ge.Event(a), t = r.length; t--;) n = r[t],
                                    e[n] = a[n];
                                return e.target || (e.target = a.srcElement || se),
                                3 === e.target.nodeType && (e.target = e.target.parentNode),
                                    e.metaKey = !!e.metaKey,
                                    o.filter ? o.filter(e, a) : e
                            },
                            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                            fixHooks: {},
                            keyHooks: {
                                props: "char charCode key keyCode".split(" "),
                                filter: function(e, t) {
                                    return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                                        e
                                }
                            },
                            mouseHooks: {
                                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                                filter: function(e, t) {
                                    var n, r, i, a = t.button,
                                        o = t.fromElement;
                                    return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || se, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                                    !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement: o),
                                    e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                                        e
                                }
                            },
                            special: {
                                load: {
                                    noBubble: !0
                                },
                                focus: {
                                    trigger: function() {
                                        if (this !== C() && this.focus) try {
                                            return this.focus(),
                                                !1
                                        } catch(e) {}
                                    },
                                    delegateType: "focusin"
                                },
                                blur: {
                                    trigger: function() {
                                        if (this === C() && this.blur) return this.blur(),
                                            !1
                                    },
                                    delegateType: "focusout"
                                },
                                click: {
                                    trigger: function() {
                                        if (ge.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(),
                                            !1
                                    },
                                    _default: function(e) {
                                        return ge.nodeName(e.target, "a")
                                    }
                                },
                                beforeunload: {
                                    postDispatch: function(e) {
                                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                                    }
                                }
                            },
                            simulate: function(e, t, n) {
                                var r = ge.extend(new ge.Event, n, {
                                    type: e,
                                    isSimulated: !0
                                });
                                ge.event.trigger(r, null, t),
                                r.isDefaultPrevented() && n.preventDefault()
                            }
                        },
                            ge.removeEvent = se.removeEventListener ?
                                function(e, t, n) {
                                    e.removeEventListener && e.removeEventListener(t, n)
                                }: function(e, t, n) {
                                    var r = "on" + t;
                                    e.detachEvent && (void 0 === e[r] && (e[r] = null), e.detachEvent(r, n))
                                },
                            ge.Event = function(e, t) {
                                if (! (this instanceof ge.Event)) return new ge.Event(e, t);
                                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? T: S) : this.type = e,
                                t && ge.extend(this, t),
                                    this.timeStamp = e && e.timeStamp || ge.now(),
                                    this[ge.expando] = !0
                            },
                            ge.Event.prototype = {
                                constructor: ge.Event,
                                isDefaultPrevented: S,
                                isPropagationStopped: S,
                                isImmediatePropagationStopped: S,
                                preventDefault: function() {
                                    var e = this.originalEvent;
                                    this.isDefaultPrevented = T,
                                    e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                                },
                                stopPropagation: function() {
                                    var e = this.originalEvent;
                                    this.isPropagationStopped = T,
                                    e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                                },
                                stopImmediatePropagation: function() {
                                    var e = this.originalEvent;
                                    this.isImmediatePropagationStopped = T,
                                    e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
                                        this.stopPropagation()
                                }
                            },
                            ge.each({
                                    mouseenter: "mouseover",
                                    mouseleave: "mouseout",
                                    pointerenter: "pointerover",
                                    pointerleave: "pointerout"
                                },
                                function(e, t) {
                                    ge.event.special[e] = {
                                        delegateType: t,
                                        bindType: t,
                                        handle: function(e) {
                                            var n, r = this,
                                                i = e.relatedTarget,
                                                a = e.handleObj;
                                            return i && (i === r || ge.contains(r, i)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t),
                                                n
                                        }
                                    }
                                }),
                        me.submit || (ge.event.special.submit = {
                            setup: function() {
                                if (ge.nodeName(this, "form")) return ! 1;
                                ge.event.add(this, "click._submit keypress._submit",
                                    function(e) {
                                        var t = e.target,
                                            n = ge.nodeName(t, "input") || ge.nodeName(t, "button") ? ge.prop(t, "form") : void 0;
                                        n && !ge._data(n, "submit") && (ge.event.add(n, "submit._submit",
                                            function(e) {
                                                e._submitBubble = !0
                                            }), ge._data(n, "submit", !0))
                                    })
                            },
                            postDispatch: function(e) {
                                e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && ge.event.simulate("submit", this.parentNode, e))
                            },
                            teardown: function() {
                                if (ge.nodeName(this, "form")) return ! 1;
                                ge.event.remove(this, "._submit")
                            }
                        }),
                        me.change || (ge.event.special.change = {
                            setup: function() {
                                if (Ke.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (ge.event.add(this, "propertychange._change",
                                    function(e) {
                                        "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                                    }), ge.event.add(this, "click._change",
                                    function(e) {
                                        this._justChanged && !e.isTrigger && (this._justChanged = !1),
                                            ge.event.simulate("change", this, e)
                                    })),
                                    !1;
                                ge.event.add(this, "beforeactivate._change",
                                    function(e) {
                                        var t = e.target;
                                        Ke.test(t.nodeName) && !ge._data(t, "change") && (ge.event.add(t, "change._change",
                                            function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || ge.event.simulate("change", this.parentNode, e)
                                            }), ge._data(t, "change", !0))
                                    })
                            },
                            handle: function(e) {
                                var t = e.target;
                                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
                            },
                            teardown: function() {
                                return ge.event.remove(this, "._change"),
                                    !Ke.test(this.nodeName)
                            }
                        }),
                        me.focusin || ge.each({
                                focus: "focusin",
                                blur: "focusout"
                            },
                            function(e, t) {
                                var n = function(e) {
                                    ge.event.simulate(t, e.target, ge.event.fix(e))
                                };
                                ge.event.special[t] = {
                                    setup: function() {
                                        var r = this.ownerDocument || this,
                                            i = ge._data(r, t);
                                        i || r.addEventListener(e, n, !0),
                                            ge._data(r, t, (i || 0) + 1)
                                    },
                                    teardown: function() {
                                        var r = this.ownerDocument || this,
                                            i = ge._data(r, t) - 1;
                                        i ? ge._data(r, t, i) : (r.removeEventListener(e, n, !0), ge._removeData(r, t))
                                    }
                                }
                            }),
                            ge.fn.extend({
                                on: function(e, t, n, r) {
                                    return E(this, e, t, n, r)
                                },
                                one: function(e, t, n, r) {
                                    return E(this, e, t, n, r, 1)
                                },
                                off: function(e, t, n) {
                                    var r, i;
                                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
                                        ge(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace: r.origType, r.selector, r.handler),
                                        this;
                                    if ("object" == typeof e) {
                                        for (i in e) this.off(i, t, e[i]);
                                        return this
                                    }
                                    return ! 1 !== t && "function" != typeof t || (n = t, t = void 0),
                                    !1 === n && (n = S),
                                        this.each(function() {
                                            ge.event.remove(this, e, n, t)
                                        })
                                },
                                trigger: function(e, t) {
                                    return this.each(function() {
                                        ge.event.trigger(e, t, this)
                                    })
                                },
                                triggerHandler: function(e, t) {
                                    var n = this[0];
                                    if (n) return ge.event.trigger(e, t, n, !0)
                                }
                            });
                        var tt = / jQuery\d+="(?:null|\d+)"/g,
                            nt = new RegExp("<(?:" + Ye + ")[\\s/>]", "i"),
                            rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
                            it = /<script|<style|<link/i,
                            at = /checked\s*(?:[^=]|=\s*.checked.)/i,
                            ot = /^true\/(.*)/,
                            st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                            lt = v(se),
                            ut = lt.appendChild(se.createElement("div"));
                        ge.extend({
                            htmlPrefilter: function(e) {
                                return e.replace(rt, "<$1></$2>")
                            },
                            clone: function(e, t, n) {
                                var r, i, a, o, s, l = ge.contains(e.ownerDocument, e);
                                if (me.html5Clone || ge.isXMLDoc(e) || !nt.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (ut.innerHTML = e.outerHTML, ut.removeChild(a = ut.firstChild)), !(me.noCloneEvent && me.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ge.isXMLDoc(e))) for (r = y(a), s = y(e), o = 0; null != (i = s[o]); ++o) r[o] && P(i, r[o]);
                                if (t) if (n) for (s = s || y(e), r = r || y(a), o = 0; null != (i = s[o]); o++) L(i, r[o]);
                                else L(e, a);
                                return r = y(a, "script"),
                                r.length > 0 && w(r, !l && y(e, "script")),
                                    r = s = i = null,
                                    a
                            },
                            cleanData: function(e, t) {
                                for (var n, r, i, a, o = 0,
                                         s = ge.expando,
                                         l = ge.cache,
                                         u = me.attributes,
                                         c = ge.event.special; null != (n = e[o]); o++) if ((t || Ae(n)) && (i = n[s], a = i && l[i])) {
                                    if (a.events) for (r in a.events) c[r] ? ge.event.remove(n, r) : ge.removeEvent(n, r, a.handle);
                                    l[i] && (delete l[i], u || void 0 === n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), oe.push(i))
                                }
                            }
                        }),
                            ge.fn.extend({
                                domManip: _,
                                detach: function(e) {
                                    return N(this, e, !0)
                                },
                                remove: function(e) {
                                    return N(this, e)
                                },
                                text: function(e) {
                                    return Fe(this,
                                        function(e) {
                                            return void 0 === e ? ge.text(this) : this.empty().append((this[0] && this[0].ownerDocument || se).createTextNode(e))
                                        },
                                        null, e, arguments.length)
                                },
                                append: function() {
                                    return _(this, arguments,
                                        function(e) {
                                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                                k(this, e).appendChild(e)
                                            }
                                        })
                                },
                                prepend: function() {
                                    return _(this, arguments,
                                        function(e) {
                                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                                var t = k(this, e);
                                                t.insertBefore(e, t.firstChild)
                                            }
                                        })
                                },
                                before: function() {
                                    return _(this, arguments,
                                        function(e) {
                                            this.parentNode && this.parentNode.insertBefore(e, this)
                                        })
                                },
                                after: function() {
                                    return _(this, arguments,
                                        function(e) {
                                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                                        })
                                },
                                empty: function() {
                                    for (var e, t = 0; null != (e = this[t]); t++) {
                                        for (1 === e.nodeType && ge.cleanData(y(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                                        e.options && ge.nodeName(e, "select") && (e.options.length = 0)
                                    }
                                    return this
                                },
                                clone: function(e, t) {
                                    return e = null != e && e,
                                        t = null == t ? e: t,
                                        this.map(function() {
                                            return ge.clone(this, e, t)
                                        })
                                },
                                html: function(e) {
                                    return Fe(this,
                                        function(e) {
                                            var t = this[0] || {},
                                                n = 0,
                                                r = this.length;
                                            if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(tt, "") : void 0;
                                            if ("string" == typeof e && !it.test(e) && (me.htmlSerialize || !nt.test(e)) && (me.leadingWhitespace || !Ge.test(e)) && !Ve[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
                                                e = ge.htmlPrefilter(e);
                                                try {
                                                    for (; n < r; n++) t = this[n] || {},
                                                    1 === t.nodeType && (ge.cleanData(y(t, !1)), t.innerHTML = e);
                                                    t = 0
                                                } catch(e) {}
                                            }
                                            t && this.empty().append(e)
                                        },
                                        null, e, arguments.length)
                                },
                                replaceWith: function() {
                                    var e = [];
                                    return _(this, arguments,
                                        function(t) {
                                            var n = this.parentNode;
                                            ge.inArray(this, e) < 0 && (ge.cleanData(y(this)), n && n.replaceChild(t, this))
                                        },
                                        e)
                                }
                            }),
                            ge.each({
                                    appendTo: "append",
                                    prependTo: "prepend",
                                    insertBefore: "before",
                                    insertAfter: "after",
                                    replaceAll: "replaceWith"
                                },
                                function(e, t) {
                                    ge.fn[e] = function(e) {
                                        for (var n, r = 0,
                                                 i = [], a = ge(e), o = a.length - 1; r <= o; r++) n = r === o ? this: this.clone(!0),
                                            ge(a[r])[t](n),
                                            ce.apply(i, n.get());
                                        return this.pushStack(i)
                                    }
                                });
                        var ct, dt = {
                                HTML: "block",
                                BODY: "block"
                            },
                            pt = /^margin/,
                            ft = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"),
                            ht = function(e, t, n, r) {
                                var i, a, o = {};
                                for (a in t) o[a] = e.style[a],
                                    e.style[a] = t[a];
                                i = n.apply(e, r || []);
                                for (a in t) e.style[a] = o[a];
                                return i
                            },
                            mt = se.documentElement; !
                            function() {
                                function e() {
                                    var e, c, d = se.documentElement;
                                    d.appendChild(l),
                                        u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                                        t = i = s = !1,
                                        r = o = !0,
                                    n.getComputedStyle && (c = n.getComputedStyle(u), t = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, i = "4px" === (c || {
                                        width: "4px"
                                    }).width, u.style.marginRight = "50%", r = "4px" === (c || {
                                        marginRight: "4px"
                                    }).marginRight, e = u.appendChild(se.createElement("div")), e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", o = !parseFloat((n.getComputedStyle(e) || {}).marginRight), u.removeChild(e)),
                                        u.style.display = "none",
                                        a = 0 === u.getClientRects().length,
                                    a && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", e = u.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", a = 0 === e[0].offsetHeight)),
                                        d.removeChild(l)
                                }
                                var t, r, i, a, o, s, l = se.createElement("div"),
                                    u = se.createElement("div");
                                u.style && (u.style.cssText = "float:left;opacity:.5", me.opacity = "0.5" === u.style.opacity, me.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", me.clearCloneStyle = "content-box" === u.style.backgroundClip, l = se.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), me.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, ge.extend(me, {
                                    reliableHiddenOffsets: function() {
                                        return null == t && e(),
                                            a
                                    },
                                    boxSizingReliable: function() {
                                        return null == t && e(),
                                            i
                                    },
                                    pixelMarginRight: function() {
                                        return null == t && e(),
                                            r
                                    },
                                    pixelPosition: function() {
                                        return null == t && e(),
                                            t
                                    },
                                    reliableMarginRight: function() {
                                        return null == t && e(),
                                            o
                                    },
                                    reliableMarginLeft: function() {
                                        return null == t && e(),
                                            s
                                    }
                                }))
                            } ();
                        var gt, vt, yt = /^(top|right|bottom|left)$/;
                        n.getComputedStyle ? (gt = function(e) {
                            var t = e.ownerDocument.defaultView;
                            return t && t.opener || (t = n),
                                t.getComputedStyle(e)
                        },
                            vt = function(e, t, n) {
                                var r, i, a, o, s = e.style;
                                return n = n || gt(e),
                                    o = n ? n.getPropertyValue(t) || n[t] : void 0,
                                "" !== o && void 0 !== o || ge.contains(e.ownerDocument, e) || (o = ge.style(e, t)),
                                n && !me.pixelMarginRight() && ft.test(o) && pt.test(t) && (r = s.width, i = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = r, s.minWidth = i, s.maxWidth = a),
                                    void 0 === o ? o: o + ""
                            }) : mt.currentStyle && (gt = function(e) {
                            return e.currentStyle
                        },
                            vt = function(e, t, n) {
                                var r, i, a, o, s = e.style;
                                return n = n || gt(e),
                                    o = n ? n[t] : void 0,
                                null == o && s && s[t] && (o = s[t]),
                                ft.test(o) && !yt.test(t) && (r = s.left, i = e.runtimeStyle, a = i && i.left, a && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em": o, o = s.pixelLeft + "px", s.left = r, a && (i.left = a)),
                                    void 0 === o ? o: o + "" || "auto"
                            });
                        var wt = /alpha\([^)]*\)/i,
                            bt = /opacity\s*=\s*([^)]*)/i,
                            xt = /^(none|table(?!-c[ea]).+)/,
                            Tt = new RegExp("^(" + je + ")(.*)$", "i"),
                            St = {
                                position: "absolute",
                                visibility: "hidden",
                                display: "block"
                            },
                            Ct = {
                                letterSpacing: "0",
                                fontWeight: "400"
                            },
                            Et = ["Webkit", "O", "Moz", "ms"],
                            kt = se.createElement("div").style;
                        ge.extend({
                            cssHooks: {
                                opacity: {
                                    get: function(e, t) {
                                        if (t) {
                                            var n = vt(e, "opacity");
                                            return "" === n ? "1": n
                                        }
                                    }
                                }
                            },
                            cssNumber: {
                                animationIterationCount: !0,
                                columnCount: !0,
                                fillOpacity: !0,
                                flexGrow: !0,
                                flexShrink: !0,
                                fontWeight: !0,
                                lineHeight: !0,
                                opacity: !0,
                                order: !0,
                                orphans: !0,
                                widows: !0,
                                zIndex: !0,
                                zoom: !0
                            },
                            cssProps: {
                                float: me.cssFloat ? "cssFloat": "styleFloat"
                            },
                            style: function(e, t, n, r) {
                                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                                    var i, a, o, s = ge.camelCase(t),
                                        l = e.style;
                                    if (t = ge.cssProps[s] || (ge.cssProps[s] = O(s) || s), o = ge.cssHooks[t] || ge.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i: l[t];
                                    if (a = typeof n, "string" === a && (i = He.exec(n)) && i[1] && (n = g(e, t, i), a = "number"), null != n && n === n && ("number" === a && (n += i && i[3] || (ge.cssNumber[s] ? "": "px")), me.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(e, n, r))))) try {
                                        l[t] = n
                                    } catch(e) {}
                                }
                            },
                            css: function(e, t, n, r) {
                                var i, a, o, s = ge.camelCase(t);
                                return t = ge.cssProps[s] || (ge.cssProps[s] = O(s) || s),
                                    o = ge.cssHooks[t] || ge.cssHooks[s],
                                o && "get" in o && (a = o.get(e, !0, n)),
                                void 0 === a && (a = vt(e, t, r)),
                                "normal" === a && t in Ct && (a = Ct[t]),
                                    "" === n || n ? (i = parseFloat(a), !0 === n || isFinite(i) ? i || 0 : a) : a
                            }
                        }),
                            ge.each(["height", "width"],
                                function(e, t) {
                                    ge.cssHooks[t] = {
                                        get: function(e, n, r) {
                                            if (n) return xt.test(ge.css(e, "display")) && 0 === e.offsetWidth ? ht(e, St,
                                                function() {
                                                    return R(e, t, r)
                                                }) : R(e, t, r)
                                        },
                                        set: function(e, n, r) {
                                            var i = r && gt(e);
                                            return H(e, n, r ? B(e, t, r, me.boxSizing && "border-box" === ge.css(e, "boxSizing", !1, i), i) : 0)
                                        }
                                    }
                                }),
                        me.opacity || (ge.cssHooks.opacity = {
                            get: function(e, t) {
                                return bt.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
                            },
                            set: function(e, t) {
                                var n = e.style,
                                    r = e.currentStyle,
                                    i = ge.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
                                    a = r && r.filter || n.filter || "";
                                n.zoom = 1,
                                (t >= 1 || "" === t) && "" === ge.trim(a.replace(wt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = wt.test(a) ? a.replace(wt, i) : a + " " + i)
                            }
                        }),
                            ge.cssHooks.marginRight = D(me.reliableMarginRight,
                                function(e, t) {
                                    if (t) return ht(e, {
                                            display: "inline-block"
                                        },
                                        vt, [e, "marginRight"])
                                }),
                            ge.cssHooks.marginLeft = D(me.reliableMarginLeft,
                                function(e, t) {
                                    if (t) return (parseFloat(vt(e, "marginLeft")) || (ge.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ht(e, {
                                            marginLeft: 0
                                        },
                                        function() {
                                            return e.getBoundingClientRect().left
                                        }) : 0)) + "px"
                                }),
                            ge.each({
                                    margin: "",
                                    padding: "",
                                    border: "Width"
                                },
                                function(e, t) {
                                    ge.cssHooks[e + t] = {
                                        expand: function(n) {
                                            for (var r = 0,
                                                     i = {},
                                                     a = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Be[r] + t] = a[r] || a[r - 2] || a[0];
                                            return i
                                        }
                                    },
                                    pt.test(e) || (ge.cssHooks[e + t].set = H)
                                }),
                            ge.fn.extend({
                                css: function(e, t) {
                                    return Fe(this,
                                        function(e, t, n) {
                                            var r, i, a = {},
                                                o = 0;
                                            if (ge.isArray(t)) {
                                                for (r = gt(e), i = t.length; o < i; o++) a[t[o]] = ge.css(e, t[o], !1, r);
                                                return a
                                            }
                                            return void 0 !== n ? ge.style(e, t, n) : ge.css(e, t)
                                        },
                                        e, t, arguments.length > 1)
                                },
                                show: function() {
                                    return j(this, !0)
                                },
                                hide: function() {
                                    return j(this)
                                },
                                toggle: function(e) {
                                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                                        Re(this) ? ge(this).show() : ge(this).hide()
                                    })
                                }
                            }),
                            ge.Tween = F,
                            F.prototype = {
                                constructor: F,
                                init: function(e, t, n, r, i, a) {
                                    this.elem = e,
                                        this.prop = n,
                                        this.easing = i || ge.easing._default,
                                        this.options = t,
                                        this.start = this.now = this.cur(),
                                        this.end = r,
                                        this.unit = a || (ge.cssNumber[n] ? "": "px")
                                },
                                cur: function() {
                                    var e = F.propHooks[this.prop];
                                    return e && e.get ? e.get(this) : F.propHooks._default.get(this)
                                },
                                run: function(e) {
                                    var t, n = F.propHooks[this.prop];
                                    return this.options.duration ? this.pos = t = ge.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                                        this.now = (this.end - this.start) * t + this.start,
                                    this.options.step && this.options.step.call(this.elem, this.now, this),
                                        n && n.set ? n.set(this) : F.propHooks._default.set(this),
                                        this
                                }
                            },
                            F.prototype.init.prototype = F.prototype,
                            F.propHooks = {
                                _default: {
                                    get: function(e) {
                                        var t;
                                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ge.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0)
                                    },
                                    set: function(e) {
                                        ge.fx.step[e.prop] ? ge.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ge.cssProps[e.prop]] && !ge.cssHooks[e.prop] ? e.elem[e.prop] = e.now: ge.style(e.elem, e.prop, e.now + e.unit)
                                    }
                                }
                            },
                            F.propHooks.scrollTop = F.propHooks.scrollLeft = {
                                set: function(e) {
                                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                                }
                            },
                            ge.easing = {
                                linear: function(e) {
                                    return e
                                },
                                swing: function(e) {
                                    return.5 - Math.cos(e * Math.PI) / 2
                                },
                                _default: "swing"
                            },
                            ge.fx = F.prototype.init,
                            ge.fx.step = {};
                        var Mt, zt, Lt = /^(?:toggle|show|hide)$/,
                            Pt = /queueHooks$/;
                        ge.Animation = ge.extend(V, {
                            tweeners: {
                                "*": [function(e, t) {
                                    var n = this.createTween(e, t);
                                    return g(n.elem, e, He.exec(t), n),
                                        n
                                }]
                            },
                            tweener: function(e, t) {
                                ge.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(_e);
                                for (var n, r = 0,
                                         i = e.length; r < i; r++) n = e[r],
                                    V.tweeners[n] = V.tweeners[n] || [],
                                    V.tweeners[n].unshift(t)
                            },
                            prefilters: [G],
                            prefilter: function(e, t) {
                                t ? V.prefilters.unshift(e) : V.prefilters.push(e)
                            }
                        }),
                            ge.speed = function(e, t, n) {
                                var r = e && "object" == typeof e ? ge.extend({},
                                    e) : {
                                    complete: n || !n && t || ge.isFunction(e) && e,
                                    duration: e,
                                    easing: n && t || t && !ge.isFunction(t) && t
                                };
                                return r.duration = ge.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in ge.fx.speeds ? ge.fx.speeds[r.duration] : ge.fx.speeds._default,
                                null != r.queue && !0 !== r.queue || (r.queue = "fx"),
                                    r.old = r.complete,
                                    r.complete = function() {
                                        ge.isFunction(r.old) && r.old.call(this),
                                        r.queue && ge.dequeue(this, r.queue)
                                    },
                                    r
                            },
                            ge.fn.extend({
                                fadeTo: function(e, t, n, r) {
                                    return this.filter(Re).css("opacity", 0).show().end().animate({
                                            opacity: t
                                        },
                                        e, n, r)
                                },
                                animate: function(e, t, n, r) {
                                    var i = ge.isEmptyObject(e),
                                        a = ge.speed(t, n, r),
                                        o = function() {
                                            var t = V(this, ge.extend({},
                                                e), a); (i || ge._data(this, "finish")) && t.stop(!0)
                                        };
                                    return o.finish = o,
                                        i || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
                                },
                                stop: function(e, t, n) {
                                    var r = function(e) {
                                        var t = e.stop;
                                        delete e.stop,
                                            t(n)
                                    };
                                    return "string" != typeof e && (n = t, t = e, e = void 0),
                                    t && !1 !== e && this.queue(e || "fx", []),
                                        this.each(function() {
                                            var t = !0,
                                                i = null != e && e + "queueHooks",
                                                a = ge.timers,
                                                o = ge._data(this);
                                            if (i) o[i] && o[i].stop && r(o[i]);
                                            else for (i in o) o[i] && o[i].stop && Pt.test(i) && r(o[i]);
                                            for (i = a.length; i--;) a[i].elem !== this || null != e && a[i].queue !== e || (a[i].anim.stop(n), t = !1, a.splice(i, 1)); ! t && n || ge.dequeue(this, e)
                                        })
                                },
                                finish: function(e) {
                                    return ! 1 !== e && (e = e || "fx"),
                                        this.each(function() {
                                            var t, n = ge._data(this),
                                                r = n[e + "queue"],
                                                i = n[e + "queueHooks"],
                                                a = ge.timers,
                                                o = r ? r.length: 0;
                                            for (n.finish = !0, ge.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                                            for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                            delete n.finish
                                        })
                                }
                            }),
                            ge.each(["toggle", "show", "hide"],
                                function(e, t) {
                                    var n = ge.fn[t];
                                    ge.fn[t] = function(e, r, i) {
                                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i)
                                    }
                                }),
                            ge.each({
                                    slideDown: W("show"),
                                    slideUp: W("hide"),
                                    slideToggle: W("toggle"),
                                    fadeIn: {
                                        opacity: "show"
                                    },
                                    fadeOut: {
                                        opacity: "hide"
                                    },
                                    fadeToggle: {
                                        opacity: "toggle"
                                    }
                                },
                                function(e, t) {
                                    ge.fn[e] = function(e, n, r) {
                                        return this.animate(t, e, n, r)
                                    }
                                }),
                            ge.timers = [],
                            ge.fx.tick = function() {
                                var e, t = ge.timers,
                                    n = 0;
                                for (Mt = ge.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
                                t.length || ge.fx.stop(),
                                    Mt = void 0
                            },
                            ge.fx.timer = function(e) {
                                ge.timers.push(e),
                                    e() ? ge.fx.start() : ge.timers.pop()
                            },
                            ge.fx.interval = 13,
                            ge.fx.start = function() {
                                zt || (zt = n.setInterval(ge.fx.tick, ge.fx.interval))
                            },
                            ge.fx.stop = function() {
                                n.clearInterval(zt),
                                    zt = null
                            },
                            ge.fx.speeds = {
                                slow: 600,
                                fast: 200,
                                _default: 400
                            },
                            ge.fn.delay = function(e, t) {
                                return e = ge.fx ? ge.fx.speeds[e] || e: e,
                                    t = t || "fx",
                                    this.queue(t,
                                        function(t, r) {
                                            var i = n.setTimeout(t, e);
                                            r.stop = function() {
                                                n.clearTimeout(i)
                                            }
                                        })
                            },
                            function() {
                                var e, t = se.createElement("input"),
                                    n = se.createElement("div"),
                                    r = se.createElement("select"),
                                    i = r.appendChild(se.createElement("option"));
                                n = se.createElement("div"),
                                    n.setAttribute("className", "t"),
                                    n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                                    e = n.getElementsByTagName("a")[0],
                                    t.setAttribute("type", "checkbox"),
                                    n.appendChild(t),
                                    e = n.getElementsByTagName("a")[0],
                                    e.style.cssText = "top:1px",
                                    me.getSetAttribute = "t" !== n.className,
                                    me.style = /top/.test(e.getAttribute("style")),
                                    me.hrefNormalized = "/a" === e.getAttribute("href"),
                                    me.checkOn = !!t.value,
                                    me.optSelected = i.selected,
                                    me.enctype = !!se.createElement("form").enctype,
                                    r.disabled = !0,
                                    me.optDisabled = !i.disabled,
                                    t = se.createElement("input"),
                                    t.setAttribute("value", ""),
                                    me.input = "" === t.getAttribute("value"),
                                    t.value = "t",
                                    t.setAttribute("type", "radio"),
                                    me.radioValue = "t" === t.value
                            } ();
                        var _t = /\r/g,
                            Nt = /[\x20\t\r\n\f]+/g;
                        ge.fn.extend({
                            val: function(e) {
                                var t, n, r, i = this[0]; {
                                    if (arguments.length) return r = ge.isFunction(e),
                                        this.each(function(n) {
                                            var i;
                                            1 === this.nodeType && (i = r ? e.call(this, n, ge(this).val()) : e, null == i ? i = "": "number" == typeof i ? i += "": ge.isArray(i) && (i = ge.map(i,
                                                function(e) {
                                                    return null == e ? "": e + ""
                                                })), (t = ge.valHooks[this.type] || ge.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                                        });
                                    if (i) return (t = ge.valHooks[i.type] || ge.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n: (n = i.value, "string" == typeof n ? n.replace(_t, "") : null == n ? "": n)
                                }
                            }
                        }),
                            ge.extend({
                                valHooks: {
                                    option: {
                                        get: function(e) {
                                            var t = ge.find.attr(e, "value");
                                            return null != t ? t: ge.trim(ge.text(e)).replace(Nt, " ")
                                        }
                                    },
                                    select: {
                                        get: function(e) {
                                            for (var t, n, r = e.options,
                                                     i = e.selectedIndex,
                                                     a = "select-one" === e.type || i < 0,
                                                     o = a ? null: [], s = a ? i + 1 : r.length, l = i < 0 ? s: a ? i: 0; l < s; l++) if (n = r[l], (n.selected || l === i) && (me.optDisabled ? !n.disabled: null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ge.nodeName(n.parentNode, "optgroup"))) {
                                                if (t = ge(n).val(), a) return t;
                                                o.push(t)
                                            }
                                            return o
                                        },
                                        set: function(e, t) {
                                            for (var n, r, i = e.options,
                                                     a = ge.makeArray(t), o = i.length; o--;) if (r = i[o], ge.inArray(ge.valHooks.option.get(r), a) > -1) try {
                                                r.selected = n = !0
                                            } catch(e) {
                                                r.scrollHeight
                                            } else r.selected = !1;
                                            return n || (e.selectedIndex = -1),
                                                i
                                        }
                                    }
                                }
                            }),
                            ge.each(["radio", "checkbox"],
                                function() {
                                    ge.valHooks[this] = {
                                        set: function(e, t) {
                                            if (ge.isArray(t)) return e.checked = ge.inArray(ge(e).val(), t) > -1
                                        }
                                    },
                                    me.checkOn || (ge.valHooks[this].get = function(e) {
                                        return null === e.getAttribute("value") ? "on": e.value
                                    })
                                });
                        var It, At, Dt = ge.expr.attrHandle,
                            Ot = /^(?:checked|selected)$/i,
                            jt = me.getSetAttribute,
                            Ht = me.input;
                        ge.fn.extend({
                            attr: function(e, t) {
                                return Fe(this, ge.attr, e, t, arguments.length > 1)
                            },
                            removeAttr: function(e) {
                                return this.each(function() {
                                    ge.removeAttr(this, e)
                                })
                            }
                        }),
                            ge.extend({
                                attr: function(e, t, n) {
                                    var r, i, a = e.nodeType;
                                    if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? ge.prop(e, t, n) : (1 === a && ge.isXMLDoc(e) || (t = t.toLowerCase(), i = ge.attrHooks[t] || (ge.expr.match.bool.test(t) ? At: It)), void 0 !== n ? null === n ? void ge.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r: (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r: (r = ge.find.attr(e, t), null == r ? void 0 : r))
                                },
                                attrHooks: {
                                    type: {
                                        set: function(e, t) {
                                            if (!me.radioValue && "radio" === t && ge.nodeName(e, "input")) {
                                                var n = e.value;
                                                return e.setAttribute("type", t),
                                                n && (e.value = n),
                                                    t
                                            }
                                        }
                                    }
                                },
                                removeAttr: function(e, t) {
                                    var n, r, i = 0,
                                        a = t && t.match(_e);
                                    if (a && 1 === e.nodeType) for (; n = a[i++];) r = ge.propFix[n] || n,
                                        ge.expr.match.bool.test(n) ? Ht && jt || !Ot.test(n) ? e[r] = !1 : e[ge.camelCase("default-" + n)] = e[r] = !1 : ge.attr(e, n, ""),
                                        e.removeAttribute(jt ? n: r)
                                }
                            }),
                            At = {
                                set: function(e, t, n) {
                                    return ! 1 === t ? ge.removeAttr(e, n) : Ht && jt || !Ot.test(n) ? e.setAttribute(!jt && ge.propFix[n] || n, n) : e[ge.camelCase("default-" + n)] = e[n] = !0,
                                        n
                                }
                            },
                            ge.each(ge.expr.match.bool.source.match(/\w+/g),
                                function(e, t) {
                                    var n = Dt[t] || ge.find.attr;
                                    Ht && jt || !Ot.test(t) ? Dt[t] = function(e, t, r) {
                                        var i, a;
                                        return r || (a = Dt[t], Dt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Dt[t] = a),
                                            i
                                    }: Dt[t] = function(e, t, n) {
                                        if (!n) return e[ge.camelCase("default-" + t)] ? t.toLowerCase() : null
                                    }
                                }),
                        Ht && jt || (ge.attrHooks.value = {
                            set: function(e, t, n) {
                                if (!ge.nodeName(e, "input")) return It && It.set(e, t, n);
                                e.defaultValue = t
                            }
                        }),
                        jt || (It = {
                            set: function(e, t, n) {
                                var r = e.getAttributeNode(n);
                                if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n)) return t
                            }
                        },
                            Dt.id = Dt.name = Dt.coords = function(e, t, n) {
                                var r;
                                if (!n) return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value: null
                            },
                            ge.valHooks.button = {
                                get: function(e, t) {
                                    var n = e.getAttributeNode(t);
                                    if (n && n.specified) return n.value
                                },
                                set: It.set
                            },
                            ge.attrHooks.contenteditable = {
                                set: function(e, t, n) {
                                    It.set(e, "" !== t && t, n)
                                }
                            },
                            ge.each(["width", "height"],
                                function(e, t) {
                                    ge.attrHooks[t] = {
                                        set: function(e, n) {
                                            if ("" === n) return e.setAttribute(t, "auto"),
                                                n
                                        }
                                    }
                                })),
                        me.style || (ge.attrHooks.style = {
                            get: function(e) {
                                return e.style.cssText || void 0
                            },
                            set: function(e, t) {
                                return e.style.cssText = t + ""
                            }
                        });
                        var Bt = /^(?:input|select|textarea|button|object)$/i,
                            Rt = /^(?:a|area)$/i;
                        ge.fn.extend({
                            prop: function(e, t) {
                                return Fe(this, ge.prop, e, t, arguments.length > 1)
                            },
                            removeProp: function(e) {
                                return e = ge.propFix[e] || e,
                                    this.each(function() {
                                        try {
                                            this[e] = void 0,
                                                delete this[e]
                                        } catch(e) {}
                                    })
                            }
                        }),
                            ge.extend({
                                prop: function(e, t, n) {
                                    var r, i, a = e.nodeType;
                                    if (3 !== a && 8 !== a && 2 !== a) return 1 === a && ge.isXMLDoc(e) || (t = ge.propFix[t] || t, i = ge.propHooks[t]),
                                        void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r: e[t] = n: i && "get" in i && null !== (r = i.get(e, t)) ? r: e[t]
                                },
                                propHooks: {
                                    tabIndex: {
                                        get: function(e) {
                                            var t = ge.find.attr(e, "tabindex");
                                            return t ? parseInt(t, 10) : Bt.test(e.nodeName) || Rt.test(e.nodeName) && e.href ? 0 : -1
                                        }
                                    }
                                },
                                propFix: {
                                    for: "htmlFor",
                                    class: "className"
                                }
                            }),
                        me.hrefNormalized || ge.each(["href", "src"],
                            function(e, t) {
                                ge.propHooks[t] = {
                                    get: function(e) {
                                        return e.getAttribute(t, 4)
                                    }
                                }
                            }),
                        me.optSelected || (ge.propHooks.selected = {
                            get: function(e) {
                                var t = e.parentNode;
                                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
                                    null
                            },
                            set: function(e) {
                                var t = e.parentNode;
                                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                            }
                        }),
                            ge.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
                                function() {
                                    ge.propFix[this.toLowerCase()] = this
                                }),
                        me.enctype || (ge.propFix.enctype = "encoding");
                        var Ft = /[\t\r\n\f]/g;
                        ge.fn.extend({
                            addClass: function(e) {
                                var t, n, r, i, a, o, s, l = 0;
                                if (ge.isFunction(e)) return this.each(function(t) {
                                    ge(this).addClass(e.call(this, t, $(this)))
                                });
                                if ("string" == typeof e && e) for (t = e.match(_e) || []; n = this[l++];) if (i = $(n), r = 1 === n.nodeType && (" " + i + " ").replace(Ft, " ")) {
                                    for (o = 0; a = t[o++];) r.indexOf(" " + a + " ") < 0 && (r += a + " ");
                                    s = ge.trim(r),
                                    i !== s && ge.attr(n, "class", s)
                                }
                                return this
                            },
                            removeClass: function(e) {
                                var t, n, r, i, a, o, s, l = 0;
                                if (ge.isFunction(e)) return this.each(function(t) {
                                    ge(this).removeClass(e.call(this, t, $(this)))
                                });
                                if (!arguments.length) return this.attr("class", "");
                                if ("string" == typeof e && e) for (t = e.match(_e) || []; n = this[l++];) if (i = $(n), r = 1 === n.nodeType && (" " + i + " ").replace(Ft, " ")) {
                                    for (o = 0; a = t[o++];) for (; r.indexOf(" " + a + " ") > -1;) r = r.replace(" " + a + " ", " ");
                                    s = ge.trim(r),
                                    i !== s && ge.attr(n, "class", s)
                                }
                                return this
                            },
                            toggleClass: function(e, t) {
                                var n = typeof e;
                                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ge.isFunction(e) ? this.each(function(n) {
                                    ge(this).toggleClass(e.call(this, n, $(this), t), t)
                                }) : this.each(function() {
                                    var t, r, i, a;
                                    if ("string" === n) for (r = 0, i = ge(this), a = e.match(_e) || []; t = a[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                                    else void 0 !== e && "boolean" !== n || (t = $(this), t && ge._data(this, "__className__", t), ge.attr(this, "class", t || !1 === e ? "": ge._data(this, "__className__") || ""))
                                })
                            },
                            hasClass: function(e) {
                                var t, n, r = 0;
                                for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + $(n) + " ").replace(Ft, " ").indexOf(t) > -1) return ! 0;
                                return ! 1
                            }
                        }),
                            ge.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
                                function(e, t) {
                                    ge.fn[t] = function(e, n) {
                                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                                    }
                                }),
                            ge.fn.extend({
                                hover: function(e, t) {
                                    return this.mouseenter(e).mouseleave(t || e)
                                }
                            });
                        var qt = n.location,
                            Wt = ge.now(),
                            Xt = /\?/,
                            Gt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
                        ge.parseJSON = function(e) {
                            if (n.JSON && n.JSON.parse) return n.JSON.parse(e + "");
                            var t, r = null,
                                i = ge.trim(e + "");
                            return i && !ge.trim(i.replace(Gt,
                                function(e, n, i, a) {
                                    return t && n && (r = 0),
                                        0 === r ? e: (t = i || n, r += !a - !i, "")
                                })) ? Function("return " + i)() : ge.error("Invalid JSON: " + e)
                        },
                            ge.parseXML = function(e) {
                                var t, r;
                                if (!e || "string" != typeof e) return null;
                                try {
                                    n.DOMParser ? (r = new n.DOMParser, t = r.parseFromString(e, "text/xml")) : (t = new n.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
                                } catch(e) {
                                    t = void 0
                                }
                                return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ge.error("Invalid XML: " + e),
                                    t
                            };
                        var Yt = /#.*$/,
                            Vt = /([?&])_=[^&]*/,
                            $t = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                            Ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                            Kt = /^(?:GET|HEAD)$/,
                            Jt = /^\/\//,
                            Qt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                            Zt = {},
                            en = {},
                            tn = "*/".concat("*"),
                            nn = qt.href,
                            rn = Qt.exec(nn.toLowerCase()) || [];
                        ge.extend({
                            active: 0,
                            lastModified: {},
                            etag: {},
                            ajaxSettings: {
                                url: nn,
                                type: "GET",
                                isLocal: Ut.test(rn[1]),
                                global: !0,
                                processData: !0,
                                async: !0,
                                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                                accepts: {
                                    "*": tn,
                                    text: "text/plain",
                                    html: "text/html",
                                    xml: "application/xml, text/xml",
                                    json: "application/json, text/javascript"
                                },
                                contents: {
                                    xml: /\bxml\b/,
                                    html: /\bhtml/,
                                    json: /\bjson\b/
                                },
                                responseFields: {
                                    xml: "responseXML",
                                    text: "responseText",
                                    json: "responseJSON"
                                },
                                converters: {
                                    "* text": String,
                                    "text html": !0,
                                    "text json": ge.parseJSON,
                                    "text xml": ge.parseXML
                                },
                                flatOptions: {
                                    url: !0,
                                    context: !0
                                }
                            },
                            ajaxSetup: function(e, t) {
                                return t ? J(J(e, ge.ajaxSettings), t) : J(ge.ajaxSettings, e)
                            },
                            ajaxPrefilter: U(Zt),
                            ajaxTransport: U(en),
                            ajax: function(e, t) {
                                function r(e, t, r, i) {
                                    var a, d, y, w, x, S = t;
                                    2 !== b && (b = 2, l && n.clearTimeout(l), c = void 0, s = i || "", T.readyState = e > 0 ? 4 : 0, a = e >= 200 && e < 300 || 304 === e, r && (w = Q(p, T, r)), w = Z(p, w, T, a), a ? (p.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (ge.lastModified[o] = x), (x = T.getResponseHeader("etag")) && (ge.etag[o] = x)), 204 === e || "HEAD" === p.type ? S = "nocontent": 304 === e ? S = "notmodified": (S = w.state, d = w.data, y = w.error, a = !y)) : (y = S, !e && S || (S = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || S) + "", a ? m.resolveWith(f, [d, S, T]) : m.rejectWith(f, [T, S, y]), T.statusCode(v), v = void 0, u && h.trigger(a ? "ajaxSuccess": "ajaxError", [T, p, a ? d: y]), g.fireWith(f, [T, S]), u && (h.trigger("ajaxComplete", [T, p]), --ge.active || ge.event.trigger("ajaxStop")))
                                }
                                "object" == typeof e && (t = e, e = void 0),
                                    t = t || {};
                                var i, a, o, s, l, u, c, d, p = ge.ajaxSetup({},
                                    t),
                                    f = p.context || p,
                                    h = p.context && (f.nodeType || f.jquery) ? ge(f) : ge.event,
                                    m = ge.Deferred(),
                                    g = ge.Callbacks("once memory"),
                                    v = p.statusCode || {},
                                    y = {},
                                    w = {},
                                    b = 0,
                                    x = "canceled",
                                    T = {
                                        readyState: 0,
                                        getResponseHeader: function(e) {
                                            var t;
                                            if (2 === b) {
                                                if (!d) for (d = {}; t = $t.exec(s);) d[t[1].toLowerCase()] = t[2];
                                                t = d[e.toLowerCase()]
                                            }
                                            return null == t ? null: t
                                        },
                                        getAllResponseHeaders: function() {
                                            return 2 === b ? s: null
                                        },
                                        setRequestHeader: function(e, t) {
                                            var n = e.toLowerCase();
                                            return b || (e = w[n] = w[n] || e, y[e] = t),
                                                this
                                        },
                                        overrideMimeType: function(e) {
                                            return b || (p.mimeType = e),
                                                this
                                        },
                                        statusCode: function(e) {
                                            var t;
                                            if (e) if (b < 2) for (t in e) v[t] = [v[t], e[t]];
                                            else T.always(e[T.status]);
                                            return this
                                        },
                                        abort: function(e) {
                                            var t = e || x;
                                            return c && c.abort(t),
                                                r(0, t),
                                                this
                                        }
                                    };
                                if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || nn) + "").replace(Yt, "").replace(Jt, rn[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = ge.trim(p.dataType || "*").toLowerCase().match(_e) || [""], null == p.crossDomain && (i = Qt.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === rn[1] && i[2] === rn[2] && (i[3] || ("http:" === i[1] ? "80": "443")) === (rn[3] || ("http:" === rn[1] ? "80": "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ge.param(p.data, p.traditional)), K(Zt, p, t, T), 2 === b) return T;
                                u = ge.event && p.global,
                                u && 0 == ge.active++&&ge.event.trigger("ajaxStart"),
                                    p.type = p.type.toUpperCase(),
                                    p.hasContent = !Kt.test(p.type),
                                    o = p.url,
                                p.hasContent || (p.data && (o = p.url += (Xt.test(o) ? "&": "?") + p.data, delete p.data), !1 === p.cache && (p.url = Vt.test(o) ? o.replace(Vt, "$1_=" + Wt++) : o + (Xt.test(o) ? "&": "?") + "_=" + Wt++)),
                                p.ifModified && (ge.lastModified[o] && T.setRequestHeader("If-Modified-Since", ge.lastModified[o]), ge.etag[o] && T.setRequestHeader("If-None-Match", ge.etag[o])),
                                (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && T.setRequestHeader("Content-Type", p.contentType),
                                    T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + tn + "; q=0.01": "") : p.accepts["*"]);
                                for (a in p.headers) T.setRequestHeader(a, p.headers[a]);
                                if (p.beforeSend && (!1 === p.beforeSend.call(f, T, p) || 2 === b)) return T.abort();
                                x = "abort";
                                for (a in {
                                    success: 1,
                                    error: 1,
                                    complete: 1
                                }) T[a](p[a]);
                                if (c = K(en, p, t, T)) {
                                    if (T.readyState = 1, u && h.trigger("ajaxSend", [T, p]), 2 === b) return T;
                                    p.async && p.timeout > 0 && (l = n.setTimeout(function() {
                                            T.abort("timeout")
                                        },
                                        p.timeout));
                                    try {
                                        b = 1,
                                            c.send(y, r)
                                    } catch(e) {
                                        if (! (b < 2)) throw e;
                                        r( - 1, e)
                                    }
                                } else r( - 1, "No Transport");
                                return T
                            },
                            getJSON: function(e, t, n) {
                                return ge.get(e, t, n, "json")
                            },
                            getScript: function(e, t) {
                                return ge.get(e, void 0, t, "script")
                            }
                        }),
                            ge.each(["get", "post"],
                                function(e, t) {
                                    ge[t] = function(e, n, r, i) {
                                        return ge.isFunction(n) && (i = i || r, r = n, n = void 0),
                                            ge.ajax(ge.extend({
                                                    url: e,
                                                    type: t,
                                                    dataType: i,
                                                    data: n,
                                                    success: r
                                                },
                                                ge.isPlainObject(e) && e))
                                    }
                                }),
                            ge._evalUrl = function(e) {
                                return ge.ajax({
                                    url: e,
                                    type: "GET",
                                    dataType: "script",
                                    cache: !0,
                                    async: !1,
                                    global: !1,
                                    throws: !0
                                })
                            },
                            ge.fn.extend({
                                wrapAll: function(e) {
                                    if (ge.isFunction(e)) return this.each(function(t) {
                                        ge(this).wrapAll(e.call(this, t))
                                    });
                                    if (this[0]) {
                                        var t = ge(e, this[0].ownerDocument).eq(0).clone(!0);
                                        this[0].parentNode && t.insertBefore(this[0]),
                                            t.map(function() {
                                                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                                                return e
                                            }).append(this)
                                    }
                                    return this
                                },
                                wrapInner: function(e) {
                                    return ge.isFunction(e) ? this.each(function(t) {
                                        ge(this).wrapInner(e.call(this, t))
                                    }) : this.each(function() {
                                        var t = ge(this),
                                            n = t.contents();
                                        n.length ? n.wrapAll(e) : t.append(e)
                                    })
                                },
                                wrap: function(e) {
                                    var t = ge.isFunction(e);
                                    return this.each(function(n) {
                                        ge(this).wrapAll(t ? e.call(this, n) : e)
                                    })
                                },
                                unwrap: function() {
                                    return this.parent().each(function() {
                                        ge.nodeName(this, "body") || ge(this).replaceWith(this.childNodes)
                                    }).end()
                                }
                            }),
                            ge.expr.filters.hidden = function(e) {
                                return me.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length: te(e)
                            },
                            ge.expr.filters.visible = function(e) {
                                return ! ge.expr.filters.hidden(e)
                            };
                        var an = /%20/g,
                            on = /\[\]$/,
                            sn = /\r?\n/g,
                            ln = /^(?:submit|button|image|reset|file)$/i,
                            un = /^(?:input|select|textarea|keygen)/i;
                        ge.param = function(e, t) {
                            var n, r = [],
                                i = function(e, t) {
                                    t = ge.isFunction(t) ? t() : null == t ? "": t,
                                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                                };
                            if (void 0 === t && (t = ge.ajaxSettings && ge.ajaxSettings.traditional), ge.isArray(e) || e.jquery && !ge.isPlainObject(e)) ge.each(e,
                                function() {
                                    i(this.name, this.value)
                                });
                            else for (n in e) ne(n, e[n], t, i);
                            return r.join("&").replace(an, "+")
                        },
                            ge.fn.extend({
                                serialize: function() {
                                    return ge.param(this.serializeArray())
                                },
                                serializeArray: function() {
                                    return this.map(function() {
                                        var e = ge.prop(this, "elements");
                                        return e ? ge.makeArray(e) : this
                                    }).filter(function() {
                                        var e = this.type;
                                        return this.name && !ge(this).is(":disabled") && un.test(this.nodeName) && !ln.test(e) && (this.checked || !qe.test(e))
                                    }).map(function(e, t) {
                                        var n = ge(this).val();
                                        return null == n ? null: ge.isArray(n) ? ge.map(n,
                                            function(e) {
                                                return {
                                                    name: t.name,
                                                    value: e.replace(sn, "\r\n")
                                                }
                                            }) : {
                                            name: t.name,
                                            value: n.replace(sn, "\r\n")
                                        }
                                    }).get()
                                }
                            }),
                            ge.ajaxSettings.xhr = void 0 !== n.ActiveXObject ?
                                function() {
                                    return this.isLocal ? ie() : se.documentMode > 8 ? re() : /^(get|post|head|put|delete|options)$/i.test(this.type) && re() || ie()
                                }: re;
                        var cn = 0,
                            dn = {},
                            pn = ge.ajaxSettings.xhr();
                        n.attachEvent && n.attachEvent("onunload",
                            function() {
                                for (var e in dn) dn[e](void 0, !0)
                            }),
                            me.cors = !!pn && "withCredentials" in pn,
                            pn = me.ajax = !!pn,
                        pn && ge.ajaxTransport(function(e) {
                            if (!e.crossDomain || me.cors) {
                                var t;
                                return {
                                    send: function(r, i) {
                                        var a, o = e.xhr(),
                                            s = ++cn;
                                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) o[a] = e.xhrFields[a];
                                        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                                        e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                                        for (a in r) void 0 !== r[a] && o.setRequestHeader(a, r[a] + "");
                                        o.send(e.hasContent && e.data || null),
                                            t = function(n, r) {
                                                var a, l, u;
                                                if (t && (r || 4 === o.readyState)) if (delete dn[s], t = void 0, o.onreadystatechange = ge.noop, r) 4 !== o.readyState && o.abort();
                                                else {
                                                    u = {},
                                                        a = o.status,
                                                    "string" == typeof o.responseText && (u.text = o.responseText);
                                                    try {
                                                        l = o.statusText
                                                    } catch(e) {
                                                        l = ""
                                                    }
                                                    a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                                                }
                                                u && i(a, l, u, o.getAllResponseHeaders())
                                            },
                                            e.async ? 4 === o.readyState ? n.setTimeout(t) : o.onreadystatechange = dn[s] = t: t()
                                    },
                                    abort: function() {
                                        t && t(void 0, !0)
                                    }
                                }
                            }
                        }),
                            ge.ajaxSetup({
                                accepts: {
                                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                                },
                                contents: {
                                    script: /\b(?:java|ecma)script\b/
                                },
                                converters: {
                                    "text script": function(e) {
                                        return ge.globalEval(e),
                                            e
                                    }
                                }
                            }),
                            ge.ajaxPrefilter("script",
                                function(e) {
                                    void 0 === e.cache && (e.cache = !1),
                                    e.crossDomain && (e.type = "GET", e.global = !1)
                                }),
                            ge.ajaxTransport("script",
                                function(e) {
                                    if (e.crossDomain) {
                                        var t, n = se.head || ge("head")[0] || se.documentElement;
                                        return {
                                            send: function(r, i) {
                                                t = se.createElement("script"),
                                                    t.async = !0,
                                                e.scriptCharset && (t.charset = e.scriptCharset),
                                                    t.src = e.url,
                                                    t.onload = t.onreadystatechange = function(e, n) { (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                                                    },
                                                    n.insertBefore(t, n.firstChild)
                                            },
                                            abort: function() {
                                                t && t.onload(void 0, !0)
                                            }
                                        }
                                    }
                                });
                        var fn = [],
                            hn = /(=)\?(?=&|$)|\?\?/;
                        ge.ajaxSetup({
                            jsonp: "callback",
                            jsonpCallback: function() {
                                var e = fn.pop() || ge.expando + "_" + Wt++;
                                return this[e] = !0,
                                    e
                            }
                        }),
                            ge.ajaxPrefilter("json jsonp",
                                function(e, t, r) {
                                    var i, a, o, s = !1 !== e.jsonp && (hn.test(e.url) ? "url": "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && hn.test(e.data) && "data");
                                    if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = ge.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                                        s ? e[s] = e[s].replace(hn, "$1" + i) : !1 !== e.jsonp && (e.url += (Xt.test(e.url) ? "&": "?") + e.jsonp + "=" + i),
                                        e.converters["script json"] = function() {
                                            return o || ge.error(i + " was not called"),
                                                o[0]
                                        },
                                        e.dataTypes[0] = "json",
                                        a = n[i],
                                        n[i] = function() {
                                            o = arguments
                                        },
                                        r.always(function() {
                                            void 0 === a ? ge(n).removeProp(i) : n[i] = a,
                                            e[i] && (e.jsonpCallback = t.jsonpCallback, fn.push(i)),
                                            o && ge.isFunction(a) && a(o[0]),
                                                o = a = void 0
                                        }),
                                        "script"
                                }),
                            ge.parseHTML = function(e, t, n) {
                                if (!e || "string" != typeof e) return null;
                                "boolean" == typeof t && (n = t, t = !1),
                                    t = t || se;
                                var r = Ee.exec(e),
                                    i = !n && [];
                                return r ? [t.createElement(r[1])] : (r = x([e], t, i), i && i.length && ge(i).remove(), ge.merge([], r.childNodes))
                            };
                        var mn = ge.fn.load;
                        ge.fn.load = function(e, t, n) {
                            if ("string" != typeof e && mn) return mn.apply(this, arguments);
                            var r, i, a, o = this,
                                s = e.indexOf(" ");
                            return s > -1 && (r = ge.trim(e.slice(s, e.length)), e = e.slice(0, s)),
                                ge.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"),
                            o.length > 0 && ge.ajax({
                                url: e,
                                type: i || "GET",
                                dataType: "html",
                                data: t
                            }).done(function(e) {
                                a = arguments,
                                    o.html(r ? ge("<div>").append(ge.parseHTML(e)).find(r) : e)
                            }).always(n &&
                                function(e, t) {
                                    o.each(function() {
                                        n.apply(this, a || [e.responseText, t, e])
                                    })
                                }),
                                this
                        },
                            ge.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
                                function(e, t) {
                                    ge.fn[t] = function(e) {
                                        return this.on(t, e)
                                    }
                                }),
                            ge.expr.filters.animated = function(e) {
                                return ge.grep(ge.timers,
                                    function(t) {
                                        return e === t.elem
                                    }).length
                            },
                            ge.offset = {
                                setOffset: function(e, t, n) {
                                    var r, i, a, o, s, l, u, c = ge.css(e, "position"),
                                        d = ge(e),
                                        p = {};
                                    "static" === c && (e.style.position = "relative"),
                                        s = d.offset(),
                                        a = ge.css(e, "top"),
                                        l = ge.css(e, "left"),
                                        u = ("absolute" === c || "fixed" === c) && ge.inArray("auto", [a, l]) > -1,
                                        u ? (r = d.position(), o = r.top, i = r.left) : (o = parseFloat(a) || 0, i = parseFloat(l) || 0),
                                    ge.isFunction(t) && (t = t.call(e, n, ge.extend({},
                                        s))),
                                    null != t.top && (p.top = t.top - s.top + o),
                                    null != t.left && (p.left = t.left - s.left + i),
                                        "using" in t ? t.using.call(e, p) : d.css(p)
                                }
                            },
                            ge.fn.extend({
                                offset: function(e) {
                                    if (arguments.length) return void 0 === e ? this: this.each(function(t) {
                                        ge.offset.setOffset(this, e, t)
                                    });
                                    var t, n, r = {
                                            top: 0,
                                            left: 0
                                        },
                                        i = this[0],
                                        a = i && i.ownerDocument;
                                    if (a) return t = a.documentElement,
                                        ge.contains(t, i) ? (void 0 !== i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = ae(a), {
                                            top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                                            left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                                        }) : r
                                },
                                position: function() {
                                    if (this[0]) {
                                        var e, t, n = {
                                                top: 0,
                                                left: 0
                                            },
                                            r = this[0];
                                        return "fixed" === ge.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ge.nodeName(e[0], "html") || (n = e.offset()), n.top += ge.css(e[0], "borderTopWidth", !0), n.left += ge.css(e[0], "borderLeftWidth", !0)),
                                            {
                                                top: t.top - n.top - ge.css(r, "marginTop", !0),
                                                left: t.left - n.left - ge.css(r, "marginLeft", !0)
                                            }
                                    }
                                },
                                offsetParent: function() {
                                    return this.map(function() {
                                        for (var e = this.offsetParent; e && !ge.nodeName(e, "html") && "static" === ge.css(e, "position");) e = e.offsetParent;
                                        return e || mt
                                    })
                                }
                            }),
                            ge.each({
                                    scrollLeft: "pageXOffset",
                                    scrollTop: "pageYOffset"
                                },
                                function(e, t) {
                                    var n = /Y/.test(t);
                                    ge.fn[e] = function(r) {
                                        return Fe(this,
                                            function(e, r, i) {
                                                var a = ae(e);
                                                if (void 0 === i) return a ? t in a ? a[t] : a.document.documentElement[r] : e[r];
                                                a ? a.scrollTo(n ? ge(a).scrollLeft() : i, n ? i: ge(a).scrollTop()) : e[r] = i
                                            },
                                            e, r, arguments.length, null)
                                    }
                                }),
                            ge.each(["top", "left"],
                                function(e, t) {
                                    ge.cssHooks[t] = D(me.pixelPosition,
                                        function(e, n) {
                                            if (n) return n = vt(e, t),
                                                ft.test(n) ? ge(e).position()[t] + "px": n
                                        })
                                }),
                            ge.each({
                                    Height: "height",
                                    Width: "width"
                                },
                                function(e, t) {
                                    ge.each({
                                            padding: "inner" + e,
                                            content: t,
                                            "": "outer" + e
                                        },
                                        function(n, r) {
                                            ge.fn[r] = function(r, i) {
                                                var a = arguments.length && (n || "boolean" != typeof r),
                                                    o = n || (!0 === r || !0 === i ? "margin": "border");
                                                return Fe(this,
                                                    function(t, n, r) {
                                                        var i;
                                                        return ge.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ge.css(t, n, o) : ge.style(t, n, r, o)
                                                    },
                                                    t, a ? r: void 0, a, null)
                                            }
                                        })
                                }),
                            ge.fn.extend({
                                bind: function(e, t, n) {
                                    return this.on(e, null, t, n)
                                },
                                unbind: function(e, t) {
                                    return this.off(e, null, t)
                                },
                                delegate: function(e, t, n, r) {
                                    return this.on(t, e, n, r)
                                },
                                undelegate: function(e, t, n) {
                                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                                }
                            }),
                            ge.fn.size = function() {
                                return this.length
                            },
                            ge.fn.andSelf = ge.fn.addBack,
                            r = [],
                        void 0 !== (i = function() {
                            return ge
                        }.apply(t, r)) && (e.exports = i);
                        var gn = n.jQuery,
                            vn = n.$;
                        return ge.noConflict = function(e) {
                            return n.$ === ge && (n.$ = vn),
                            e && n.jQuery === ge && (n.jQuery = gn),
                                ge
                        },
                        a || (n.jQuery = n.$ = ge),
                            ge
                    })
        },
        function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e: {
                    default:
                    e
                }
            }
            var i = n(28),
                a = r(i),
                o = n(17),
                s = r(o),
                l = n(5),
                u = r(l),
                c = n(29),
                d = r(c),
                p = n(125),
                f = r(p),
                h = n(0),
                m = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.
                        default = e,
                        t
                } (h),
                g = n(173),
                v = r(g);
            window.Promise || (window.Promise = v.
                default),
                window.$ = window.jQuery = d.
                    default,
                function(t, r, i) {
                    function o() {
                        this.cnzzId = (this.isMobile(), "1261064193"),
                            this.cnzz = [["_setAccount", this.cnzzId]],
                            this.now = new Date,
                            this.tomorrow = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate() + 1),
                            this.week = (this.now.getDay() + 6) % 7 + 1,
                            this.worktime = this.now.getHours() > 7 && this.now.getHours() < 20 && this.week < 6,
                            this.timestamp = this.now.getTime(),
                            window.isMobile = this.isMobile = this.isMobile(),
                            window.isWebp = this.isWebp = this.isSupportWebp()
                    }
                    o.prototype = {
                        config: {
                            api: "/api",
                            userApi: "/user",
                            webp: {
                                noresize: "",
                                rules: ""
                            }
                        },
                        isSupportWebp: function() {
                            try {
                                return 0 === document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")
                            } catch(e) {
                                return ! 1
                            }
                        },
                        switchWebp: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                n = /^(https?:)?(\/\/)/,
                                r = /-(\d+)x(\d+)/gi;
                            return this.isSupportWebp() && n.test(e) ? r.test(e) ? e + ".webp": e + t: e
                        },
                        getWeek: function(e) {
                            var t = (new Date).getDay();
                            switch (e) {
                                case "en":
                                    return ["Sundays", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][t];
                                case "zh-cn":
                                    return "星期" + "天一二三四五六".charAt(t);
                                default:
                                    return (t + 6) % 7 + 1
                            }
                        },
                        parseInt: function(e) {
                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t.toString = function() {
                                return e.toString()
                            },
                                t
                        } (function(e) {
                            return isNaN(parseInt(e, 10)) ? 0 : parseInt(e, 10)
                        }),
                        supportCss3: function(e) {
                            var t, n = ["webkit", "Moz", "ms", "o"],
                                r = [],
                                i = document.documentElement.style,
                                a = function(e) {
                                    return e.replace(/-(\w)/g,
                                        function(e, t) {
                                            return t.toUpperCase()
                                        })
                                };
                            for (t in n) r.push(a(n[t] + "-" + e));
                            r.push(a(e));
                            for (t in r) if (r[t] in i) return ! 0;
                            return ! 1
                        },
                        lazyload: function(e) {
                            e = e || {};
                            var n = e.time || 500,
                                r = this.supportCss3("background-size"),
                                i = this;
                            setInterval(function() { (0, d.
                                    default)("img[data-src]:visible,.lazyload[data-src]").each(function() {
                                    var n = (0, d.
                                            default)(this),
                                        a = (0, d.
                                            default)(t).scrollTop(),
                                        o = (0, d.
                                            default)(t).height(),
                                        s = n.offset().top,
                                        l = parseInt(n.height(), 10),
                                        u = e.loading || !1,
                                        c = e.space || "images/space.gif",
                                        p = e.error || "images/loading.gif";
                                    if (u && n.css("background", "url(" + u + ") center center / 32px 32px no-repeat"), s < a + o && s + l > a) {
                                        var f = i.switchWebp(n.data("src"));
                                        if (r) {
                                            var h = new Image;
                                            h.src = f,
                                                (0, d.
                                                    default)(h).on("load",
                                                    function() {
                                                        n.css({
                                                            opacity: 0,
                                                            background: "url(" + this.src + ") no-repeat center center",
                                                            backgroundSize: "cover"
                                                        }).removeAttr("data-src").animate({
                                                                opacity: 1
                                                            },
                                                            300)
                                                    }),
                                                (0, d.
                                                    default)(h).error(function() {
                                                    	
                                                    	/**/
                                                    
                                                    
                                                    if (new RegExp(p).test(n.attr("style"))) return ! 1;
                                                   /* n.attr("src", c).css({
                                                        opacity: 0,
                                                        background: "#eee url(" + p + ") no-repeat center center"
                                                    }).removeAttr("data-src").animate({
                                                            opacity: 1
                                                        },
                                                        300)*/
                                                        	 n.css({
                                                            opacity: 0,
                                                            background: "url(" + this.src.replace('.webp','') + ") no-repeat center center",
                                                            backgroundSize: "cover"
                                                        }).removeAttr("data-src").animate({
                                                                opacity: 1
                                                            },
                                                            300)
                                                })
                                        } else n.attr("src", f).removeAttr("data-src");
                                        n.error(function() {
                                            if (new RegExp(p).test(n.attr("style"))) return ! 1;
                                            n.attr("src", c).css({
                                                opacity: 0,
                                                background: "#fff url(" + p + ") no-repeat center center"
                                            }).removeAttr("data-src").animate({
                                                    opacity: 1
                                                },
                                                300)
                                        })
                                    }
                                })
                                },
                                n)
                        },
                        cookie: function(e, t, n) {
                            if (n = n || {},
                            void 0 === t) return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + e + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
                            null === t && (n.expires = -1);
                            var r = new Date;
                            n.expires && r.setTime(r.getTime() + 36e5 * n.expires),
                                document.cookie = e + "=" + encodeURIComponent(t) + ";" + (n.expires ? "expires=" + r.toGMTString() + ";": "") + "path=/;" + (n.domain ? "domain=" + n.domain + ";": "")
                        },
                        cookieParse: function(e, t, n) {
                            if (void 0 === t) {
                                var r = __global.cookie(e),
                                    i = null;
                                try {
                                    i = JSON.parse(unescape(r))
                                } catch(e) {
                                    i = unescape(r)
                                }
                                return i
                            }
                            __global.cookie(e, "string" == typeof t || null === t ? t: (0, u.
                                default)(t), n)
                        },
                        store: function(e, t, n) {
                            var r = "object" === ("undefined" == typeof localStorage ? "undefined": (0, s.
                                default)(localStorage));
                            if (r) try {
                                localStorage.setItem("hasTrace", !0),
                                localStorage.getItem("hasTrace") || (r = !1)
                            } catch(e) {
                                r = !1
                            }
                            var i = void 0 !== t;
                            if (!i && null !== i) return r ? JSON.parse(localStorage.getItem(e),
                                function(e, t) {
                                    return null === t ? "": t
                                }) : JSON.parse(this.cookie(e),
                                function(e, t) {
                                    return null === t ? "": t
                                });
                            var a = (0, u.
                                default)(t);
                            r ? null === t ? localStorage.removeItem(e) : localStorage.setItem(e, a) : this.cookie(e, a, n)
                        },
                        addFavorite: function(e, n) {
                            try {
                                t.external.addFavorite(e, n)
                            } catch(r) {
                                try {
                                    t.sidebar.addPanel(n, e, "")
                                } catch(e) {
                                    alert("加入收藏失败，请使用Ctrl+D进行添加")
                                }
                            }
                        },
                        saveDesktop: function(e, t) {
                            try {
                                var n = new ActiveXObject("WScript.Shell"),
                                    r = n.CreateShortcut(n.SpecialFolders("Desktop") + "\\" + t + ".url");
                                r.TargetPath = e,
                                    r.Save()
                            } catch(e) {
                                alert("当前IE安全级别不允许操作！")
                            }
                        },
                        setHome: function(e, n) {
                            try {
                                e.style.behavior = "url(#default#homepage)",
                                    e.setHomePage(n)
                            } catch(e) {
                                if (t.netscape) try {
                                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
                                } catch(e) {
                                    alert('抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入"about:config"并回车然后将[signed.applets.codebase_principal_support]设置为"true"')
                                } else alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【" + n + "】设置为首页。")
                            }
                        },
                        loadjs: function(e, t) {
                            if (t = t || {},
                                t.async) {
                                var n = r.createElement("script");
                                n.src = e,
                                    n.async = !0,
                                    n.type = "text/javascript",
                                t.charset && (n.charset = t.charset),
                                t.data && (n.data = t.data),
                                t.id && (n.id = t.id),
                                    (r.head || r.getElementsByTagName("head")[0] || r.docElement).appendChild(n)
                            } else r.write('<script src="' + e + '"' + (t.charset ? ' charset="' + t.charset + '"': "") + (t.data ? ' data="' + t.data + '"': "") + (t.id ? ' id="' + t.id + '"': "") + "><\/script>")
                        },
                        ie: function() {
                            for (var e = 3,
                                     t = document.createElement("div"); t.innerHTML = "\x3c!--[if gt IE " + ++e + "]><i></i>< ![endif]--\x3e", t.getElementsByTagName("i")[0];) return e > 4 ? e: void 0
                        },
                        isMobile: function() {
                            var e = navigator.userAgent;
                            return "m." == location.host.substr(0, 2) || "t" == this.cookie("isMobile") || "f" != this.cookie("isMobile") && (screen.width / screen.height < 1 || /AppleWebKit.*Mobile/i.test(e) || /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(e)) && !/ipad/gi.test(e)
                        },
                        stringToBoolean: function(e) {
                            switch (e.toLowerCase()) {
                                case "true":
                                case "yes":
                                case "1":
                                    return ! 0;
                                case "false":
                                case "no":
                                case "0":
                                case null:
                                    return ! 1;
                                default:
                                    return Boolean(e)
                            }
                        },
                        creatIframe: function(e, t) {
                            if (t = t || {},
                                t.async) {
                                var n = r.createElement("iframe");
                                n.src = e,
                                    n.width = t.width || 0,
                                    n.height = t.height || 0,
                                    n.frameBorder = 0,
                                    n.scrolling = 0,
                                    (r.body || r.getElementsByTagName("body")[0] || r.docElement).appendChild(n)
                            } else r.writeln('<iframe scrolling="no" frameborder="0" src="' + e + '" width="' + (t.width || 0) + '" height="' + (t.height || 0) + '"></iframe>')
                        },
                        readCount: function(e) {
                            var t = __global.config.api + "/updateview/?comic_id=" + e;
                            d.
                            default.ajax({
                                type:
                                    "get",
                                url: t,
                                dataType: "jsonp"
                            })
                        },
                        getLoginInfo: function(e) {
                            var t = JSON.parse(__global.cookie("user"));
                            return t ? {
                                openid: t.openid,
                                type: t.type
                            }: (e || this.showLoginBox(), !1)
                        },
                        showLoginBox: function() {
                            f.
                            default.open({
                                type:
                                    2,
                                title: "用户登录",
                                shadeClose: !0,
                                shade: .8,
                                area: ["375px", "480px"],
                                content: ["/app/login.htm", "no"]
                            })
                        },
                        getPathById: function(e) {
                            for (var e = (e || 0).toString().padLeft("0", 9), t = ""; e.length > 3;) t = "/" + e.slice( - 3) + t,
                                e = e.slice(0, e.length - 3);
                            return e && (t = e + t),
                                t
                        },
                        wrapAjax: function(e) {
                            if ("jsonp" === e.dataType && void 0 === e.jsonpCallback) throw "必须定义一个不同方法的callback名称";
                            if (void 0 === e.cache && (e.cache = !0), e.checkToken && "function" == typeof e.success) {
                                var t = e.success;
                                e.success = function(e) {
                                    6 == e.status && (setTimeout(function() {
                                            var e = location.href;
                                            __global.cookie("login_from", e),
                                                location.href = "/uc/login.html"
                                        },
                                        2e3), layerSurprise(e.msg)),
                                        t.apply(this, arguments)
                                },
                                    delete e.checkToken
                            }
                            return d.
                            default.ajax(e)
                        },
                        zySentCount: function(e) {

                            /*
                if (!e.router) return ! 1;
                var t = e.router.toLowerCase().replace(/\/(.)/g,
                function(e, t) {
                    return t.toUpperCase()
                }) + "Cb",
                n = {
                    url: "//logs.mkdata.top/api/" + e.router,
                    type: e.type || "get",
                    dataType: "jsonp",
                    jsonpCallback: t,
                    data: e.data
                };
                void 0 === e.cache && (n.cache = !0),
                d.
            default.ajax(n).done(function(e) {
                    var t = e.code,
                    n = e.message;
                    window.localStorage.setItem("countLog", t + "&" + n)
                }).fail(function() {
                    window.localStorage.setItem("countLog", "request error.")
                })*/
                        },
                        layerMsg: function(e) {
                            f.
                            default.open({
                                content:
                                    '<div class="imgCon"><div class="thumbnail"><img src="https://ae01.alicdn.com/kf/He3cda13f34d44e8fb85dcdf6c7768398F.gif" data-src="https://ae01.alicdn.com/kf/H89c333dff2b94e62ad86ab96e804a1ba6.png"></div></div><span class="msg">' + e + "</span>",
                                className: "layerCustom layerMsg",
                                style: "padding: 0; width: 6.66667rem",
                                shade: "background-color: transparent",
                                time: 1.5
                            })
                        },
                        // layerSurprise: function(e) {
                        //     f.
                        //     default.open({
                        //         content:
                        //             '<img src="/Public/wap/zymk/images/default/space.gif" data-src="/Public/wap/zymk/images/default/change.png"><span class="msg">' + e + "</span>",
                        //         className: "layerCustom layerMsg",
                        //         style: "padding: 0; width: 6.66667rem",
                        //         shade: "background-color: transparent",
                        //         time: 2
                        //     })
                        // },
                        // layerInput: function(e, t) {
                        //     f.
                        //     default.open({
                        //         content:
                        //             '<div class="imgCon"><div class="thumbnail"><img src="/Public/wap/zymk/images/default/space.gif" data-src="/Public/wap/zymk/images/default/change.png"></div></div><span class="msg">' + e + '</span><input class="goldInput" type="number" placeholder="输入元宝数量" autofocus>',
                        //         className: "layerCustom layerInput",
                        //         style: "padding: 0; width: 6.66667rem",
                        //         shade: "background-color: rgba(0,0,0,0.4)",
                        //         shadeClose: !1,
                        //         btn: ["确定", "取消"],
                        //         success: function() { (0, d.
                        //             default)(".goldInput").keydown(function(e) {
                        //             return 69 !== e.which && (187 !== e.which && (189 !== e.which && (190 !== e.which && void 0)))
                        //         })
                        //         },
                        //         yes: t
                        //     })
                        // },
                        // layerScore: function(e, t, n) {
                        //     for (var r = "",
                        //              i = 0; i < 5; i++) r += '<li class="star ift-xing"></li>';
                        //     f.
                        //     default.open({
                        //         content:
                        //             '<div class="imgCon"><div class="thumbnail"><img src="/Public/wap/zymk/images/default/space.gif" data-src="/Public/wap/zymk/images/default/change.png"></div></div><span class="msg">' + e + '</span><ul class="starBox">' + r + "</ul>",
                        //         className: "layerCustom layerScore",
                        //         style: "padding: 0; width: 6.66667rem",
                        //         shade: "background-color: rgba(0,0,0,0.4)",
                        //         shadeClose: !1,
                        //         success: t,
                        //         btn: ["确定", "取消"],
                        //         yes: n
                        //     })
                        // },
                        // layerShare: function(e) {
                        //     f.
                        //     default.open({
                        //         title:
                        //             "分享",
                        //         content: '<div class="bdsharebuttonbox"><a href="javascript:void(0);" rel="nofollow" class="bds_qq" title="分享到QQ"><img src="/Public/wap/zymk/images/default/icons/qq.png" data-cmd="sqq"></a><a href="javascript:void(0);" rel="nofollow" class="bds_sina" title="分享到新浪微博"><img src="/Public/wap/zymk/images/default/icons/sina.png" data-cmd="tsina"></a><a href="javascript:void(0);" rel="nofollow" class="bds_qzone" title="分享到QQ空间"><img src="/Public/wap/zymk/images/default/icons/qq_zone.png" data-cmd="qzone"></a></div>',
                        //         className: "layerCustom layerShare",
                        //         style: "padding: 0; width: 6.66667rem",
                        //         shade: "background-color: rgba(0,0,0,0.4)",
                        //         success: e
                        //     })
                        // },
                        // layerOpen: function(e) {
                        //     e.content = '<div class="imgCon"><div class="thumbnail"><img src="/Public/wap/zymk/images/default/space.gif" data-src="/Public/wap/zymk/images/default/change.png"></div></div><span class="msg">' + e.content + "</span>",
                        //         f.
                        //         default.open((0, a.
                        //             default)({
                        //                 className:
                        //                     "layerCustom layerBind",
                        //                 style: "padding: 0; width: 6.66667rem",
                        //                 shade: "background-color: rgba(0,0,0,0.4)"
                        //             },
                        //             e))
                        // },
                        // layerPay: function(e, t) {
                        //     f.
                        //     default.open({
                        //         content:
                        //             '<div class="pay"><div class="xCon"><div class="thumbnail"><img src="/Public/wap/zymk/images/default/space.gif" data-src="/Public/wap/zymk/images/default/icons/x.png"></div></div><div class="imgCon"><div class="thumbnail"><img src="/Public/wap/zymk/images/default/space.gif" data-src="/Public/wap/zymk/images/default/change.png"></div></div><div class="login-info">' + (e.userInfo ? '<p class="login-tips"><span class="goldNum">我的元宝: <strong>' + e.userInfo.Cgold + '</strong>元宝</span><i class="pay_i">充值</i></p>': '<p class="login-tips">大人，登录才可以操作哦~<i class="login_i">登录</i></p>') + '</div><div class="pay-info"><p class="payName">' + e.cr.comic_name + " " + e.cr.chapter_name + '</p><span class="payment">支付<strong>' + e.cr.data.price + '</strong>元宝</span></div><div class="pay-btns"><div class="payBtn"><div class="pay-btn ' + (e.userInfo ? e.userInfo.Cgold >= e.cr.data.price ? "gopay pay-btn-primary": "pay_i_prBtn pay-btn-primary": "pay-btn-gray") + '">' + (e.userInfo ? e.userInfo.Cgold >= e.cr.data.price ? "购买此章节": "元宝不足，充值元宝": "购买此章节") + '</div><div class="delayPurchase pay-btn pay-btn-primary">暂不购买</div></div><div class="pay-auto" style="display: none"><div class="checkArea"><input type="checkbox" name="autobuy" id="autobuy"><label for="autobuy" class="thumbnail"></label><label for="autobuy" class="checkText">自动购买付费章节</label><img class="tinyHelp" src="/Public/wap/zymk/images/default/space.gif" data-src="/Public/wap/zymk/images/default/icons/tinyHelp.png"></div><div class="autoPurchaseTip" style="display: none"><p>选择自动购买付费章节，后续漫画章节将直接扣除元宝，不再询问购买</p><p>可在个人中心设置——设置取消自动购买</p><img class="toggle" src="/Public/wap/zymk/images/default/icons/toggle.png"></div></div></div></div>',
                        //         className: "layerCustom layerPay",
                        //         style: "padding: 0; width: 6.66667rem",
                        //         shade: "background-color: rgba(0,0,0,0.4)",
                        //         shadeClose: !1,
                        //         success: t
                        //     })
                        // },
                        tagColors: ["#c78590", "#f3bd7e", "#6ec4e9", "#66c9bb", "#9b9bd5"],
                        hrefStamp: function(e) {
                            e.href += ( - 1 !== e.href.indexOf("?") ? "&": "?") + "t=" + Date.now()
                        },
                        classify: function() {
                            function e(e, t, n, r) {
                                n.find('[class*="ift-"]').attr("class", r),
                                    e.find('[class*="ift-"]').attr("class", t),
                                    e.addClass("active").siblings().removeClass("active")
                            }
                            var t = (0, d.
                                    default)(".mk-footernav li:eq(1)"),
                                n = (0, d.
                                    default)(".mk-classify"),
                                r = (0, d.
                                    default)(".mk-footernav li.active"),
                                i = r.find('[class*="ift-"]').attr("class"),
                                a = null;
                            t.click(function() {
                                var o = (0, d.
                                    default)(this);
                                n.is(":hidden") && m.slideinLayer(n,
                                    function() {
                                        if (e(o, "ift-class", r, i + "-outline"), !a) {
                                            var s = (0, d.
                                                    default)("#classTabs"),
                                                l = s.find(".tab-toggle li");
                                            s.find(".swiper-slide");
                                            a = new Swiper(".class-swiper", {
                                                onSlideChangeEnd: function(e) {
                                                    l.eq(e.activeIndex).addClass("active").siblings().removeClass("active")
                                                },
                                                onSlidePrevEnd: function(e) {
                                                    "horizontal" === e.params.direction ? window.maidian && window.maidian.curstomMsg("scroll_derection_classification", {
                                                        scroll_derection: "左"
                                                    }) : window.maidian && window.maidian.curstomMsg("scroll_derection_classification", {
                                                        scroll_derection: "上"
                                                    })
                                                },
                                                onSlideNextEnd: function(e) {
                                                    "horizontal" === e.params.direction ? window.maidian && window.maidian.curstomMsg("scroll_derection_classification", {
                                                        scroll_derection: "右"
                                                    }) : window.maidian && window.maidian.curstomMsg("scroll_derection_classification", {
                                                        scroll_derection: "下"
                                                    })
                                                }
                                            }),
                                                l.click(function() {
                                                    a.slideTo((0, d.
                                                        default)(this).index())
                                                }),
                                                (0, d.
                                                    default)("#classTabs .back").on("click",
                                                    function() {
                                                        m.slideoutLayer(n,
                                                            function() {
                                                                e(r, i, t, "ift-class-outline")
                                                            })
                                                    })
                                        }
                                    })
                            }),
                                this.search((0, d.
                                    default)("#classifySearch"))
                        },
                        search: function(e) {
                            e.click(function() {
                                n.e(1).then(function(e) {
                                    n(43)
                                }.bind(null, n)).
                                catch(n.oe)
                            })
                        },
                        anonymousLogin: !1,
                        whenAnonymousLogin: function(e) {
                            var t = "function" == typeof e ? e: function() {};
                            this.anonymousLogin ? t() : this.whenAnonymousLogin.callback = t
                        }
                    },
                        t.__global = new o,
                        e.exports = o
                } (window, document),
                (0, d.
                    default)(function() {
                    __global.lazyload({
                        space: "https://ae01.alicdn.com/kf/He3cda13f34d44e8fb85dcdf6c7768398F.gif",
                        error: "",
                        loading: "https://ae01.alicdn.com/kf/He3cda13f34d44e8fb85dcdf6c7768398F.gif",
                        backgroundSize: "48px auto"
                    }),
                        setTimeout(function() { !
                                function() {

                                } ()
                            },
                            1e3)
                }),
                n.e(2).then(function() {
                    if (!__global.cookie("user")) {
                        new(n(182))({
                            canvas: !0
                        }).get(function(e, t) {
                            d.
                            default.ajax({
                                url:
                                    __global.config.api + "/getuserinfo/",
                                type: "get",
                                dataType: "jsonp",
                                data: {
                                    type: "device",
                                    token: e
                                },
                                success: function(e) {
                                    0 == e.status && "object" === (0, s.
                                        default)(e.data) && (__global.cookieParse("user", e.data, {
                                        domain: ".zymk.cn",
                                        expires: 8760
                                    }), __global.anonymousLogin = !0, __global.whenAnonymousLogin.callback && (__global.whenAnonymousLogin.callback(), __global.whenAnonymousLogin.callback = null))
                                },
                                error: function(e) {}
                            })
                        })
                    }
                    __global.loadjs("//static.321mh.com/js/maidian/m.zymk.js", {
                        async: !0
                    })
                }.bind(null, n)).
                catch(n.oe)
        },
        ,
        function(e, t) {
            e.exports = function(e) {
                if (void 0 == e) throw TypeError("Can't call method on  " + e);
                return e
            }
        },
        function(e, t, n) {
            var r = n(11),
                i = n(1).document,
                a = r(i) && r(i.createElement);
            e.exports = function(e) {
                return a ? i.createElement(e) : {}
            }
        },
        function(e, t) {
            e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        },
        function(e, t, n) {
            "use strict";
            function r(e) {
                var t, n;
                this.promise = new e(function(e, r) {
                    if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                    t = e,
                        n = r
                }),
                    this.resolve = i(t),
                    this.reject = i(n)
            }
            var i = n(21);
            e.exports.f = function(e) {
                return new r(e)
            }
        },
        function(e, t) {
            t.f = Object.getOwnPropertySymbols
        },
        function(e, t, n) {
            var r = n(38)("keys"),
                i = n(27);
            e.exports = function(e) {
                return r[e] || (r[e] = i(e))
            }
        },
        function(e, t, n) {
            var r = n(3),
                i = n(1),
                a = i["__core-js_shared__"] || (i["__core-js_shared__"] = {}); (e.exports = function(e, t) {
                return a[e] || (a[e] = void 0 !== t ? t: {})
            })("versions", []).push({
                version: r.version,
                mode: n(20) ? "pure": "global",
                copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
            })
        },
        function(e, t) {
            var n = Math.ceil,
                r = Math.floor;
            e.exports = function(e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? r: n)(e)
            }
        },
        function(e, t, n) {
            var r = n(11);
            e.exports = function(e, t) {
                if (!r(e)) return e;
                var n, i;
                if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
                if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
                if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
                throw TypeError("Can't convert object to primitive value")
            }
        },
        function(e, t, n) {
            var r = n(1),
                i = n(3),
                a = n(20),
                o = n(42),
                s = n(12).f;
            e.exports = function(e) {
                var t = i.Symbol || (i.Symbol = a ? {}: r.Symbol || {});
                "_" == e.charAt(0) || e in t || s(t, e, {
                    value: o.f(e)
                })
            }
        },
        function(e, t, n) {
            t.f = n(2)
        },
        ,
        function(e, t, n) {
            var r = n(18),
                i = n(2)("toStringTag"),
                a = "Arguments" == r(function() {
                    return arguments
                } ()),
                o = function(e, t) {
                    try {
                        return e[t]
                    } catch(e) {}
                };
            e.exports = function(e) {
                var t, n, s;
                return void 0 === e ? "Undefined": null === e ? "Null": "string" == typeof(n = o(t = Object(e), i)) ? n: a ? r(t) : "Object" == (s = r(t)) && "function" == typeof t.callee ? "Arguments": s
            }
        },
        function(e, t, n) {
            var r = n(1).document;
            e.exports = r && r.documentElement
        },
        function(e, t, n) {
            e.exports = !n(8) && !n(16)(function() {
                return 7 != Object.defineProperty(n(33)("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        },
        function(e, t, n) {
            var r = n(18);
            e.exports = Object("z").propertyIsEnumerable(0) ? Object: function(e) {
                return "String" == r(e) ? e.split("") : Object(e)
            }
        },
        function(e, t, n) {
            "use strict";
            var r = n(20),
                i = n(14),
                a = n(54),
                o = n(10),
                s = n(19),
                l = n(146),
                u = n(26),
                c = n(154),
                d = n(2)("iterator"),
                p = !([].keys && "next" in [].keys()),
                f = function() {
                    return this
                };
            e.exports = function(e, t, n, h, m, g, v) {
                l(n, t, h);
                var y, w, b, x = function(e) {
                        if (!p && e in E) return E[e];
                        switch (e) {
                            case "keys":
                            case "values":
                                return function() {
                                    return new n(this, e)
                                }
                        }
                        return function() {
                            return new n(this, e)
                        }
                    },
                    T = t + " Iterator",
                    S = "values" == m,
                    C = !1,
                    E = e.prototype,
                    k = E[d] || E["@@iterator"] || m && E[m],
                    M = k || x(m),
                    z = m ? S ? x("entries") : M: void 0,
                    L = "Array" == t ? E.entries || k: k;
                if (L && (b = c(L.call(new e))) !== Object.prototype && b.next && (u(b, T, !0), r || "function" == typeof b[d] || o(b, d, f)), S && k && "values" !== k.name && (C = !0, M = function() {
                    return k.call(this)
                }), r && !v || !p && !C && E[d] || o(E, d, M), s[t] = M, s[T] = f, m) if (y = {
                    values: S ? M: x("values"),
                    keys: g ? M: x("keys"),
                    entries: z
                },
                    v) for (w in y) w in E || a(E, w, y[w]);
                else i(i.P + i.F * (p || C), t, y);
                return y
            }
        },
        function(e, t, n) {
            var r = n(7),
                i = n(152),
                a = n(34),
                o = n(37)("IE_PROTO"),
                s = function() {},
                l = function() {
                    var e, t = n(33)("iframe"),
                        r = a.length;
                    for (t.style.display = "none", n(45).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; r--;) delete l.prototype[a[r]];
                    return l()
                };
            e.exports = Object.create ||
                function(e, t) {
                    var n;
                    return null !== e ? (s.prototype = r(e), n = new s, s.prototype = null, n[o] = e) : n = l(),
                        void 0 === t ? n: i(n, t)
                }
        },
        function(e, t, n) {
            var r = n(51),
                i = n(34).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames ||
                function(e) {
                    return r(e, i)
                }
        },
        function(e, t, n) {
            var r = n(9),
                i = n(15),
                a = n(139)(!1),
                o = n(37)("IE_PROTO");
            e.exports = function(e, t) {
                var n, s = i(e),
                    l = 0,
                    u = [];
                for (n in s) n != o && r(s, n) && u.push(n);
                for (; t.length > l;) r(s, n = t[l++]) && (~a(u, n) || u.push(n));
                return u
            }
        },
        function(e, t) {
            e.exports = function(e) {
                try {
                    return {
                        e: !1,
                        v: e()
                    }
                } catch(e) {
                    return {
                        e: !0,
                        v: e
                    }
                }
            }
        },
        function(e, t, n) {
            var r = n(7),
                i = n(11),
                a = n(35);
            e.exports = function(e, t) {
                if (r(e), i(t) && t.constructor === e) return t;
                var n = a.f(e);
                return (0, n.resolve)(t),
                    n.promise
            }
        },
        function(e, t, n) {
            e.exports = n(10)
        },
        function(e, t, n) {
            var r = n(7),
                i = n(21),
                a = n(2)("species");
            e.exports = function(e, t) {
                var n, o = r(e).constructor;
                return void 0 === o || void 0 == (n = r(o)[a]) ? t: i(n)
            }
        },
        function(e, t, n) {
            var r, i, a, o = n(22),
                s = n(142),
                l = n(45),
                u = n(33),
                c = n(1),
                d = c.process,
                p = c.setImmediate,
                f = c.clearImmediate,
                h = c.MessageChannel,
                m = c.Dispatch,
                g = 0,
                v = {},
                y = function() {
                    var e = +this;
                    if (v.hasOwnProperty(e)) {
                        var t = v[e];
                        delete v[e],
                            t()
                    }
                },
                w = function(e) {
                    y.call(e.data)
                };
            p && f || (p = function(e) {
                for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
                return v[++g] = function() {
                    s("function" == typeof e ? e: Function(e), t)
                },
                    r(g),
                    g
            },
                f = function(e) {
                    delete v[e]
                },
                "process" == n(18)(d) ? r = function(e) {
                    d.nextTick(o(y, e, 1))
                }: m && m.now ? r = function(e) {
                    m.now(o(y, e, 1))
                }: h ? (i = new h, a = i.port2, i.port1.onmessage = w, r = o(a.postMessage, a, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (r = function(e) {
                    c.postMessage(e + "", "*")
                },
                    c.addEventListener("message", w, !1)) : r = "onreadystatechange" in u("script") ?
                    function(e) {
                        l.appendChild(u("script")).onreadystatechange = function() {
                            l.removeChild(this),
                                y.call(e)
                        }
                    }: function(e) {
                        setTimeout(o(y, e, 1), 0)
                    }),
                e.exports = {
                    set: p,
                    clear: f
                }
        },
        function(e, t, n) {
            var r = n(39),
                i = Math.min;
            e.exports = function(e) {
                return e > 0 ? i(r(e), 9007199254740991) : 0
            }
        },
        function(e, t, n) {
            var r = n(32);
            e.exports = function(e) {
                return Object(r(e))
            }
        },
        function(e, t) {},
        function(e, t, n) {
            "use strict";
            var r = n(157)(!0);
            n(48)(String, "String",
                function(e) {
                    this._t = String(e),
                        this._i = 0
                },
                function() {
                    var e, t = this._t,
                        n = this._i;
                    return n >= t.length ? {
                        value: void 0,
                        done: !0
                    }: (e = r(t, n), this._i += e.length, {
                        value: e,
                        done: !1
                    })
                })
        },
        function(e, t, n) {
            n(161);
            for (var r = n(1), i = n(10), a = n(19), o = n(2)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < s.length; l++) {
                var u = s[l],
                    c = r[u],
                    d = c && c.prototype;
                d && !d[o] && i(d, o, u),
                    a[u] = a.Array
            }
        },
        function(e, t) {
            function n() {
                throw new Error("setTimeout has not been defined")
            }
            function r() {
                throw new Error("clearTimeout has not been defined")
            }
            function i(e) {
                if (c === setTimeout) return setTimeout(e, 0);
                if ((c === n || !c) && setTimeout) return c = setTimeout,
                    setTimeout(e, 0);
                try {
                    return c(e, 0)
                } catch(t) {
                    try {
                        return c.call(null, e, 0)
                    } catch(t) {
                        return c.call(this, e, 0)
                    }
                }
            }
            function a(e) {
                if (d === clearTimeout) return clearTimeout(e);
                if ((d === r || !d) && clearTimeout) return d = clearTimeout,
                    clearTimeout(e);
                try {
                    return d(e)
                } catch(t) {
                    try {
                        return d.call(null, e)
                    } catch(t) {
                        return d.call(this, e)
                    }
                }
            }
            function o() {
                m && f && (m = !1, f.length ? h = f.concat(h) : g = -1, h.length && s())
            }
            function s() {
                if (!m) {
                    var e = i(o);
                    m = !0;
                    for (var t = h.length; t;) {
                        for (f = h, h = []; ++g < t;) f && f[g].run();
                        g = -1,
                            t = h.length
                    }
                    f = null,
                        m = !1,
                        a(e)
                }
            }
            function l(e, t) {
                this.fun = e,
                    this.array = t
            }
            function u() {}
            var c, d, p = e.exports = {}; !
                function() {
                    try {
                        c = "function" == typeof setTimeout ? setTimeout: n
                    } catch(e) {
                        c = n
                    }
                    try {
                        d = "function" == typeof clearTimeout ? clearTimeout: r
                    } catch(e) {
                        d = r
                    }
                } ();
            var f, h = [],
                m = !1,
                g = -1;
            p.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                h.push(new l(e, t)),
                1 !== h.length || m || i(s)
            },
                l.prototype.run = function() {
                    this.fun.apply(null, this.array)
                },
                p.title = "browser",
                p.browser = !0,
                p.env = {},
                p.argv = [],
                p.version = "",
                p.versions = {},
                p.on = u,
                p.addListener = u,
                p.once = u,
                p.off = u,
                p.removeListener = u,
                p.removeAllListeners = u,
                p.emit = u,
                p.prependListener = u,
                p.prependOnceListener = u,
                p.listeners = function(e) {
                    return []
                },
                p.binding = function(e) {
                    throw new Error("process.binding is not supported")
                },
                p.cwd = function() {
                    return "/"
                },
                p.chdir = function(e) {
                    throw new Error("process.chdir is not supported")
                },
                p.umask = function() {
                    return 0
                }
        },
        function(e, t) {
            var n;
            n = function() {
                return this
            } ();
            try {
                n = n || Function("return this")() || (0, eval)("this")
            } catch(e) {
                "object" == typeof window && (n = window)
            }
            e.exports = n
        },
        , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
        function(e, t, n) { !
            function() {
                "use strict";
                var e, t = function(r, i) {
                    function a(e) {
                        return Math.floor(e)
                    }
                    function o() {
                        var e = x.params.autoplay,
                            t = x.slides.eq(x.activeIndex);
                        t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || x.params.autoplay),
                            x.autoplayTimeoutId = setTimeout(function() {
                                    x.params.loop ? (x.fixLoop(), x._slideNext(), x.emit("onAutoplay", x)) : x.isEnd ? i.autoplayStopOnLast ? x.stopAutoplay() : (x._slideTo(0), x.emit("onAutoplay", x)) : (x._slideNext(), x.emit("onAutoplay", x))
                                },
                                e)
                    }
                    function s(t, n) {
                        var r = e(t.target);
                        if (!r.is(n)) if ("string" == typeof n) r = r.parents(n);
                        else if (n.nodeType) {
                            var i;
                            return r.parents().each(function(e, t) {
                                t === n && (i = n)
                            }),
                                i ? n: void 0
                        }
                        if (0 !== r.length) return r[0]
                    }
                    function l(e, t) {
                        t = t || {};
                        var n = window.MutationObserver || window.WebkitMutationObserver,
                            r = new n(function(e) {
                                e.forEach(function(e) {
                                    x.onResize(!0),
                                        x.emit("onObserverUpdate", x, e)
                                })
                            });
                        r.observe(e, {
                            attributes: void 0 === t.attributes || t.attributes,
                            childList: void 0 === t.childList || t.childList,
                            characterData: void 0 === t.characterData || t.characterData
                        }),
                            x.observers.push(r)
                    }
                    function u(e) {
                        e.originalEvent && (e = e.originalEvent);
                        var t = e.keyCode || e.charCode;
                        if (!x.params.allowSwipeToNext && (x.isHorizontal() && 39 === t || !x.isHorizontal() && 40 === t)) return ! 1;
                        if (!x.params.allowSwipeToPrev && (x.isHorizontal() && 37 === t || !x.isHorizontal() && 38 === t)) return ! 1;
                        if (! (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                            if (37 === t || 39 === t || 38 === t || 40 === t) {
                                var n = !1;
                                if (x.container.parents("." + x.params.slideClass).length > 0 && 0 === x.container.parents("." + x.params.slideActiveClass).length) return;
                                var r = {
                                        left: window.pageXOffset,
                                        top: window.pageYOffset
                                    },
                                    i = window.innerWidth,
                                    a = window.innerHeight,
                                    o = x.container.offset();
                                x.rtl && (o.left = o.left - x.container[0].scrollLeft);
                                for (var s = [[o.left, o.top], [o.left + x.width, o.top], [o.left, o.top + x.height], [o.left + x.width, o.top + x.height]], l = 0; l < s.length; l++) {
                                    var u = s[l];
                                    u[0] >= r.left && u[0] <= r.left + i && u[1] >= r.top && u[1] <= r.top + a && (n = !0)
                                }
                                if (!n) return
                            }
                            x.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !x.rtl || 37 === t && x.rtl) && x.slideNext(), (37 === t && !x.rtl || 39 === t && x.rtl) && x.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && x.slideNext(), 38 === t && x.slidePrev()),
                                x.emit("onKeyPress", x, t)
                        }
                    }
                    function c(e) {
                        var t = 0,
                            n = 0,
                            r = 0,
                            i = 0;
                        return "detail" in e && (n = e.detail),
                        "wheelDelta" in e && (n = -e.wheelDelta / 120),
                        "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120),
                        "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                        "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0),
                            r = 10 * t,
                            i = 10 * n,
                        "deltaY" in e && (i = e.deltaY),
                        "deltaX" in e && (r = e.deltaX),
                        (r || i) && e.deltaMode && (1 === e.deltaMode ? (r *= 40, i *= 40) : (r *= 800, i *= 800)),
                        r && !t && (t = r < 1 ? -1 : 1),
                        i && !n && (n = i < 1 ? -1 : 1),
                            {
                                spinX: t,
                                spinY: n,
                                pixelX: r,
                                pixelY: i
                            }
                    }
                    function d(e) {
                        e.originalEvent && (e = e.originalEvent);
                        var t = 0,
                            n = x.rtl ? -1 : 1,
                            r = c(e);
                        if (x.params.mousewheelForceToAxis) if (x.isHorizontal()) {
                            if (! (Math.abs(r.pixelX) > Math.abs(r.pixelY))) return;
                            t = r.pixelX * n
                        } else {
                            if (! (Math.abs(r.pixelY) > Math.abs(r.pixelX))) return;
                            t = r.pixelY
                        } else t = Math.abs(r.pixelX) > Math.abs(r.pixelY) ? -r.pixelX * n: -r.pixelY;
                        if (0 !== t) {
                            if (x.params.mousewheelInvert && (t = -t), x.params.freeMode) {
                                var i = x.getWrapperTranslate() + t * x.params.mousewheelSensitivity,
                                    a = x.isBeginning,
                                    o = x.isEnd;
                                if (i >= x.minTranslate() && (i = x.minTranslate()), i <= x.maxTranslate() && (i = x.maxTranslate()), x.setWrapperTransition(0), x.setWrapperTranslate(i), x.updateProgress(), x.updateActiveIndex(), (!a && x.isBeginning || !o && x.isEnd) && x.updateClasses(), x.params.freeModeSticky ? (clearTimeout(x.mousewheel.timeout), x.mousewheel.timeout = setTimeout(function() {
                                        x.slideReset()
                                    },
                                    300)) : x.params.lazyLoading && x.lazy && x.lazy.load(), x.emit("onScroll", x, e), x.params.autoplay && x.params.autoplayDisableOnInteraction && x.stopAutoplay(), 0 === i || i === x.maxTranslate()) return
                            } else {
                                if ((new window.Date).getTime() - x.mousewheel.lastScrollTime > 60) if (t < 0) if (x.isEnd && !x.params.loop || x.animating) {
                                    if (x.params.mousewheelReleaseOnEdges) return ! 0
                                } else x.slideNext(),
                                    x.emit("onScroll", x, e);
                                else if (x.isBeginning && !x.params.loop || x.animating) {
                                    if (x.params.mousewheelReleaseOnEdges) return ! 0
                                } else x.slidePrev(),
                                    x.emit("onScroll", x, e);
                                x.mousewheel.lastScrollTime = (new window.Date).getTime()
                            }
                            return e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                                !1
                        }
                    }
                    function p(t, n) {
                        t = e(t);
                        var r, i, a, o = x.rtl ? -1 : 1;
                        r = t.attr("data-swiper-parallax") || "0",
                            i = t.attr("data-swiper-parallax-x"),
                            a = t.attr("data-swiper-parallax-y"),
                            i || a ? (i = i || "0", a = a || "0") : x.isHorizontal() ? (i = r, a = "0") : (a = r, i = "0"),
                            i = i.indexOf("%") >= 0 ? parseInt(i, 10) * n * o + "%": i * n * o + "px",
                            a = a.indexOf("%") >= 0 ? parseInt(a, 10) * n + "%": a * n + "px",
                            t.transform("translate3d(" + i + ", " + a + ",0px)")
                    }
                    function f(e) {
                        return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e),
                            e
                    }
                    if (! (this instanceof t)) return new t(r, i);
                    var h = {
                            direction: "horizontal",
                            touchEventsTarget: "container",
                            initialSlide: 0,
                            speed: 300,
                            autoplay: !1,
                            autoplayDisableOnInteraction: !0,
                            autoplayStopOnLast: !1,
                            iOSEdgeSwipeDetection: !1,
                            iOSEdgeSwipeThreshold: 20,
                            freeMode: !1,
                            freeModeMomentum: !0,
                            freeModeMomentumRatio: 1,
                            freeModeMomentumBounce: !0,
                            freeModeMomentumBounceRatio: 1,
                            freeModeMomentumVelocityRatio: 1,
                            freeModeSticky: !1,
                            freeModeMinimumVelocity: .02,
                            autoHeight: !1,
                            setWrapperSize: !1,
                            virtualTranslate: !1,
                            effect: "slide",
                            coverflow: {
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: !0
                            },
                            flip: {
                                slideShadows: !0,
                                limitRotation: !0
                            },
                            cube: {
                                slideShadows: !0,
                                shadow: !0,
                                shadowOffset: 20,
                                shadowScale: .94
                            },
                            fade: {
                                crossFade: !1
                            },
                            parallax: !1,
                            zoom: !1,
                            zoomMax: 3,
                            zoomMin: 1,
                            zoomToggle: !0,
                            scrollbar: null,
                            scrollbarHide: !0,
                            scrollbarDraggable: !1,
                            scrollbarSnapOnRelease: !1,
                            keyboardControl: !1,
                            mousewheelControl: !1,
                            mousewheelReleaseOnEdges: !1,
                            mousewheelInvert: !1,
                            mousewheelForceToAxis: !1,
                            mousewheelSensitivity: 1,
                            mousewheelEventsTarged: "container",
                            hashnav: !1,
                            hashnavWatchState: !1,
                            history: !1,
                            replaceState: !1,
                            breakpoints: void 0,
                            spaceBetween: 0,
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerColumnFill: "column",
                            slidesPerGroup: 1,
                            centeredSlides: !1,
                            slidesOffsetBefore: 0,
                            slidesOffsetAfter: 0,
                            roundLengths: !1,
                            touchRatio: 1,
                            touchAngle: 45,
                            simulateTouch: !0,
                            shortSwipes: !0,
                            longSwipes: !0,
                            longSwipesRatio: .5,
                            longSwipesMs: 300,
                            followFinger: !0,
                            onlyExternal: !1,
                            threshold: 0,
                            touchMoveStopPropagation: !0,
                            touchReleaseOnEdges: !1,
                            uniqueNavElements: !0,
                            pagination: null,
                            paginationElement: "span",
                            paginationClickable: !1,
                            paginationHide: !1,
                            paginationBulletRender: null,
                            paginationProgressRender: null,
                            paginationFractionRender: null,
                            paginationCustomRender: null,
                            paginationType: "bullets",
                            resistance: !0,
                            resistanceRatio: .85,
                            nextButton: null,
                            prevButton: null,
                            watchSlidesProgress: !1,
                            watchSlidesVisibility: !1,
                            grabCursor: !1,
                            preventClicks: !0,
                            preventClicksPropagation: !0,
                            slideToClickedSlide: !1,
                            lazyLoading: !1,
                            lazyLoadingInPrevNext: !1,
                            lazyLoadingInPrevNextAmount: 1,
                            lazyLoadingOnTransitionStart: !1,
                            preloadImages: !0,
                            updateOnImagesReady: !0,
                            loop: !1,
                            loopAdditionalSlides: 0,
                            loopedSlides: null,
                            control: void 0,
                            controlInverse: !1,
                            controlBy: "slide",
                            normalizeSlideIndex: !0,
                            allowSwipeToPrev: !0,
                            allowSwipeToNext: !0,
                            swipeHandler: null,
                            noSwiping: !0,
                            noSwipingClass: "swiper-no-swiping",
                            passiveListeners: !0,
                            containerModifierClass: "swiper-container-",
                            slideClass: "swiper-slide",
                            slideActiveClass: "swiper-slide-active",
                            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                            slideVisibleClass: "swiper-slide-visible",
                            slideDuplicateClass: "swiper-slide-duplicate",
                            slideNextClass: "swiper-slide-next",
                            slideDuplicateNextClass: "swiper-slide-duplicate-next",
                            slidePrevClass: "swiper-slide-prev",
                            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                            wrapperClass: "swiper-wrapper",
                            bulletClass: "swiper-pagination-bullet",
                            bulletActiveClass: "swiper-pagination-bullet-active",
                            buttonDisabledClass: "swiper-button-disabled",
                            paginationCurrentClass: "swiper-pagination-current",
                            paginationTotalClass: "swiper-pagination-total",
                            paginationHiddenClass: "swiper-pagination-hidden",
                            paginationProgressbarClass: "swiper-pagination-progressbar",
                            paginationClickableClass: "swiper-pagination-clickable",
                            paginationModifierClass: "swiper-pagination-",
                            lazyLoadingClass: "swiper-lazy",
                            lazyStatusLoadingClass: "swiper-lazy-loading",
                            lazyStatusLoadedClass: "swiper-lazy-loaded",
                            lazyPreloaderClass: "swiper-lazy-preloader",
                            notificationClass: "swiper-notification",
                            preloaderClass: "preloader",
                            zoomContainerClass: "swiper-zoom-container",
                            observer: !1,
                            observeParents: !1,
                            a11y: !1,
                            prevSlideMessage: "Previous slide",
                            nextSlideMessage: "Next slide",
                            firstSlideMessage: "This is the first slide",
                            lastSlideMessage: "This is the last slide",
                            paginationBulletMessage: "Go to slide {{index}}",
                            runCallbacksOnInit: !0
                        },
                        m = i && i.virtualTranslate;
                    i = i || {};
                    var g = {};
                    for (var v in i) if ("object" != typeof i[v] || null === i[v] || (i[v].nodeType || i[v] === window || i[v] === document || void 0 !== n && i[v] instanceof n || "undefined" != typeof jQuery && i[v] instanceof jQuery)) g[v] = i[v];
                    else {
                        g[v] = {};
                        for (var y in i[v]) g[v][y] = i[v][y]
                    }
                    for (var w in h) if (void 0 === i[w]) i[w] = h[w];
                    else if ("object" == typeof i[w]) for (var b in h[w]) void 0 === i[w][b] && (i[w][b] = h[w][b]);
                    var x = this;
                    if (x.params = i, x.originalParams = g, x.classNames = [], void 0 !== e && void 0 !== n && (e = n), (void 0 !== e || (e = void 0 === n ? window.Dom7 || window.Zepto || window.jQuery: n)) && (x.$ = e, x.currentBreakpoint = void 0, x.getActiveBreakpoint = function() {
                        if (!x.params.breakpoints) return ! 1;
                        var e, t = !1,
                            n = [];
                        for (e in x.params.breakpoints) x.params.breakpoints.hasOwnProperty(e) && n.push(e);
                        n.sort(function(e, t) {
                            return parseInt(e, 10) > parseInt(t, 10)
                        });
                        for (var r = 0; r < n.length; r++)(e = n[r]) >= window.innerWidth && !t && (t = e);
                        return t || "max"
                    },
                        x.setBreakpoint = function() {
                            var e = x.getActiveBreakpoint();
                            if (e && x.currentBreakpoint !== e) {
                                var t = e in x.params.breakpoints ? x.params.breakpoints[e] : x.originalParams,
                                    n = x.params.loop && t.slidesPerView !== x.params.slidesPerView;
                                for (var r in t) x.params[r] = t[r];
                                x.currentBreakpoint = e,
                                n && x.destroyLoop && x.reLoop(!0)
                            }
                        },
                    x.params.breakpoints && x.setBreakpoint(), x.container = e(r), 0 !== x.container.length)) {
                        if (x.container.length > 1) {
                            var T = [];
                            return x.container.each(function() {
                                T.push(new t(this, i))
                            }),
                                T
                        }
                        x.container[0].swiper = x,
                            x.container.data("swiper", x),
                            x.classNames.push(x.params.containerModifierClass + x.params.direction),
                        x.params.freeMode && x.classNames.push(x.params.containerModifierClass + "free-mode"),
                        x.support.flexbox || (x.classNames.push(x.params.containerModifierClass + "no-flexbox"), x.params.slidesPerColumn = 1),
                        x.params.autoHeight && x.classNames.push(x.params.containerModifierClass + "autoheight"),
                        (x.params.parallax || x.params.watchSlidesVisibility) && (x.params.watchSlidesProgress = !0),
                        x.params.touchReleaseOnEdges && (x.params.resistanceRatio = 0),
                        ["cube", "coverflow", "flip"].indexOf(x.params.effect) >= 0 && (x.support.transforms3d ? (x.params.watchSlidesProgress = !0, x.classNames.push(x.params.containerModifierClass + "3d")) : x.params.effect = "slide"),
                        "slide" !== x.params.effect && x.classNames.push(x.params.containerModifierClass + x.params.effect),
                        "cube" === x.params.effect && (x.params.resistanceRatio = 0, x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.centeredSlides = !1, x.params.spaceBetween = 0, x.params.virtualTranslate = !0),
                        "fade" !== x.params.effect && "flip" !== x.params.effect || (x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.watchSlidesProgress = !0, x.params.spaceBetween = 0, void 0 === m && (x.params.virtualTranslate = !0)),
                        x.params.grabCursor && x.support.touch && (x.params.grabCursor = !1),
                            x.wrapper = x.container.children("." + x.params.wrapperClass),
                        x.params.pagination && (x.paginationContainer = e(x.params.pagination), x.params.uniqueNavElements && "string" == typeof x.params.pagination && x.paginationContainer.length > 1 && 1 === x.container.find(x.params.pagination).length && (x.paginationContainer = x.container.find(x.params.pagination)), "bullets" === x.params.paginationType && x.params.paginationClickable ? x.paginationContainer.addClass(x.params.paginationModifierClass + "clickable") : x.params.paginationClickable = !1, x.paginationContainer.addClass(x.params.paginationModifierClass + x.params.paginationType)),
                        (x.params.nextButton || x.params.prevButton) && (x.params.nextButton && (x.nextButton = e(x.params.nextButton), x.params.uniqueNavElements && "string" == typeof x.params.nextButton && x.nextButton.length > 1 && 1 === x.container.find(x.params.nextButton).length && (x.nextButton = x.container.find(x.params.nextButton))), x.params.prevButton && (x.prevButton = e(x.params.prevButton), x.params.uniqueNavElements && "string" == typeof x.params.prevButton && x.prevButton.length > 1 && 1 === x.container.find(x.params.prevButton).length && (x.prevButton = x.container.find(x.params.prevButton)))),
                            x.isHorizontal = function() {
                                return "horizontal" === x.params.direction
                            },
                            x.rtl = x.isHorizontal() && ("rtl" === x.container[0].dir.toLowerCase() || "rtl" === x.container.css("direction")),
                        x.rtl && x.classNames.push(x.params.containerModifierClass + "rtl"),
                        x.rtl && (x.wrongRTL = "-webkit-box" === x.wrapper.css("display")),
                        x.params.slidesPerColumn > 1 && x.classNames.push(x.params.containerModifierClass + "multirow"),
                        x.device.android && x.classNames.push(x.params.containerModifierClass + "android"),
                            x.container.addClass(x.classNames.join(" ")),
                            x.translate = 0,
                            x.progress = 0,
                            x.velocity = 0,
                            x.lockSwipeToNext = function() {
                                x.params.allowSwipeToNext = !1,
                                !1 === x.params.allowSwipeToPrev && x.params.grabCursor && x.unsetGrabCursor()
                            },
                            x.lockSwipeToPrev = function() {
                                x.params.allowSwipeToPrev = !1,
                                !1 === x.params.allowSwipeToNext && x.params.grabCursor && x.unsetGrabCursor()
                            },
                            x.lockSwipes = function() {
                                x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !1,
                                x.params.grabCursor && x.unsetGrabCursor()
                            },
                            x.unlockSwipeToNext = function() {
                                x.params.allowSwipeToNext = !0,
                                !0 === x.params.allowSwipeToPrev && x.params.grabCursor && x.setGrabCursor()
                            },
                            x.unlockSwipeToPrev = function() {
                                x.params.allowSwipeToPrev = !0,
                                !0 === x.params.allowSwipeToNext && x.params.grabCursor && x.setGrabCursor()
                            },
                            x.unlockSwipes = function() {
                                x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !0,
                                x.params.grabCursor && x.setGrabCursor()
                            },
                            x.setGrabCursor = function(e) {
                                x.container[0].style.cursor = "move",
                                    x.container[0].style.cursor = e ? "-webkit-grabbing": "-webkit-grab",
                                    x.container[0].style.cursor = e ? "-moz-grabbin": "-moz-grab",
                                    x.container[0].style.cursor = e ? "grabbing": "grab"
                            },
                            x.unsetGrabCursor = function() {
                                x.container[0].style.cursor = ""
                            },
                        x.params.grabCursor && x.setGrabCursor(),
                            x.imagesToLoad = [],
                            x.imagesLoaded = 0,
                            x.loadImage = function(e, t, n, r, i, a) {
                                function o() {
                                    a && a()
                                }
                                var s;
                                e.complete && i ? o() : t ? (s = new window.Image, s.onload = o, s.onerror = o, r && (s.sizes = r), n && (s.srcset = n), t && (s.src = t)) : o()
                            },
                            x.preloadImages = function() {
                                function e() {
                                    void 0 !== x && null !== x && x && (void 0 !== x.imagesLoaded && x.imagesLoaded++, x.imagesLoaded === x.imagesToLoad.length && (x.params.updateOnImagesReady && x.update(), x.emit("onImagesReady", x)))
                                }
                                x.imagesToLoad = x.container.find("img");
                                for (var t = 0; t < x.imagesToLoad.length; t++) x.loadImage(x.imagesToLoad[t], x.imagesToLoad[t].currentSrc || x.imagesToLoad[t].getAttribute("src"), x.imagesToLoad[t].srcset || x.imagesToLoad[t].getAttribute("srcset"), x.imagesToLoad[t].sizes || x.imagesToLoad[t].getAttribute("sizes"), !0, e)
                            },
                            x.autoplayTimeoutId = void 0,
                            x.autoplaying = !1,
                            x.autoplayPaused = !1,
                            x.startAutoplay = function() {
                                return void 0 === x.autoplayTimeoutId && ( !! x.params.autoplay && (!x.autoplaying && (x.autoplaying = !0, x.emit("onAutoplayStart", x), void o())))
                            },
                            x.stopAutoplay = function(e) {
                                x.autoplayTimeoutId && (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplaying = !1, x.autoplayTimeoutId = void 0, x.emit("onAutoplayStop", x))
                            },
                            x.pauseAutoplay = function(e) {
                                x.autoplayPaused || (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplayPaused = !0, 0 === e ? (x.autoplayPaused = !1, o()) : x.wrapper.transitionEnd(function() {
                                    x && (x.autoplayPaused = !1, x.autoplaying ? o() : x.stopAutoplay())
                                }))
                            },
                            x.minTranslate = function() {
                                return - x.snapGrid[0]
                            },
                            x.maxTranslate = function() {
                                return - x.snapGrid[x.snapGrid.length - 1]
                            },
                            x.updateAutoHeight = function() {
                                var e, t = [],
                                    n = 0;
                                if ("auto" !== x.params.slidesPerView && x.params.slidesPerView > 1) for (e = 0; e < Math.ceil(x.params.slidesPerView); e++) {
                                    var r = x.activeIndex + e;
                                    if (r > x.slides.length) break;
                                    t.push(x.slides.eq(r)[0])
                                } else t.push(x.slides.eq(x.activeIndex)[0]);
                                for (e = 0; e < t.length; e++) if (void 0 !== t[e]) {
                                    var i = t[e].offsetHeight;
                                    n = i > n ? i: n
                                }
                                n && x.wrapper.css("height", n + "px")
                            },
                            x.updateContainerSize = function() {
                                var e, t;
                                e = void 0 !== x.params.width ? x.params.width: x.container[0].clientWidth,
                                    t = void 0 !== x.params.height ? x.params.height: x.container[0].clientHeight,
                                0 === e && x.isHorizontal() || 0 === t && !x.isHorizontal() || (e = e - parseInt(x.container.css("padding-left"), 10) - parseInt(x.container.css("padding-right"), 10), t = t - parseInt(x.container.css("padding-top"), 10) - parseInt(x.container.css("padding-bottom"), 10), x.width = e, x.height = t, x.size = x.isHorizontal() ? x.width: x.height)
                            },
                            x.updateSlidesSize = function() {
                                x.slides = x.wrapper.children("." + x.params.slideClass),
                                    x.snapGrid = [],
                                    x.slidesGrid = [],
                                    x.slidesSizesGrid = [];
                                var e, t = x.params.spaceBetween,
                                    n = -x.params.slidesOffsetBefore,
                                    r = 0,
                                    i = 0;
                                if (void 0 !== x.size) {
                                    "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * x.size),
                                        x.virtualSize = -t,
                                        x.rtl ? x.slides.css({
                                            marginLeft: "",
                                            marginTop: ""
                                        }) : x.slides.css({
                                            marginRight: "",
                                            marginBottom: ""
                                        });
                                    var o;
                                    x.params.slidesPerColumn > 1 && (o = Math.floor(x.slides.length / x.params.slidesPerColumn) === x.slides.length / x.params.slidesPerColumn ? x.slides.length: Math.ceil(x.slides.length / x.params.slidesPerColumn) * x.params.slidesPerColumn, "auto" !== x.params.slidesPerView && "row" === x.params.slidesPerColumnFill && (o = Math.max(o, x.params.slidesPerView * x.params.slidesPerColumn)));
                                    var s, l = x.params.slidesPerColumn,
                                        u = o / l,
                                        c = u - (x.params.slidesPerColumn * u - x.slides.length);
                                    for (e = 0; e < x.slides.length; e++) {
                                        s = 0;
                                        var d = x.slides.eq(e);
                                        if (x.params.slidesPerColumn > 1) {
                                            var p, f, h;
                                            "column" === x.params.slidesPerColumnFill ? (f = Math.floor(e / l), h = e - f * l, (f > c || f === c && h === l - 1) && ++h >= l && (h = 0, f++), p = f + h * o / l, d.css({
                                                "-webkit-box-ordinal-group": p,
                                                "-moz-box-ordinal-group": p,
                                                "-ms-flex-order": p,
                                                "-webkit-order": p,
                                                order: p
                                            })) : (h = Math.floor(e / u), f = e - h * u),
                                                d.css("margin-" + (x.isHorizontal() ? "top": "left"), 0 !== h && x.params.spaceBetween && x.params.spaceBetween + "px").attr("data-swiper-column", f).attr("data-swiper-row", h)
                                        }
                                        "none" !== d.css("display") && ("auto" === x.params.slidesPerView ? (s = x.isHorizontal() ? d.outerWidth(!0) : d.outerHeight(!0), x.params.roundLengths && (s = a(s))) : (s = (x.size - (x.params.slidesPerView - 1) * t) / x.params.slidesPerView, x.params.roundLengths && (s = a(s)), x.isHorizontal() ? x.slides[e].style.width = s + "px": x.slides[e].style.height = s + "px"), x.slides[e].swiperSlideSize = s, x.slidesSizesGrid.push(s), x.params.centeredSlides ? (n = n + s / 2 + r / 2 + t, 0 === r && 0 !== e && (n = n - x.size / 2 - t), 0 === e && (n = n - x.size / 2 - t), Math.abs(n) < .001 && (n = 0), i % x.params.slidesPerGroup == 0 && x.snapGrid.push(n), x.slidesGrid.push(n)) : (i % x.params.slidesPerGroup == 0 && x.snapGrid.push(n), x.slidesGrid.push(n), n = n + s + t), x.virtualSize += s + t, r = s, i++)
                                    }
                                    x.virtualSize = Math.max(x.virtualSize, x.size) + x.params.slidesOffsetAfter;
                                    var m;
                                    if (x.rtl && x.wrongRTL && ("slide" === x.params.effect || "coverflow" === x.params.effect) && x.wrapper.css({
                                        width: x.virtualSize + x.params.spaceBetween + "px"
                                    }), x.support.flexbox && !x.params.setWrapperSize || (x.isHorizontal() ? x.wrapper.css({
                                        width: x.virtualSize + x.params.spaceBetween + "px"
                                    }) : x.wrapper.css({
                                        height: x.virtualSize + x.params.spaceBetween + "px"
                                    })), x.params.slidesPerColumn > 1 && (x.virtualSize = (s + x.params.spaceBetween) * o, x.virtualSize = Math.ceil(x.virtualSize / x.params.slidesPerColumn) - x.params.spaceBetween, x.isHorizontal() ? x.wrapper.css({
                                        width: x.virtualSize + x.params.spaceBetween + "px"
                                    }) : x.wrapper.css({
                                        height: x.virtualSize + x.params.spaceBetween + "px"
                                    }), x.params.centeredSlides)) {
                                        for (m = [], e = 0; e < x.snapGrid.length; e++) x.snapGrid[e] < x.virtualSize + x.snapGrid[0] && m.push(x.snapGrid[e]);
                                        x.snapGrid = m
                                    }
                                    if (!x.params.centeredSlides) {
                                        for (m = [], e = 0; e < x.snapGrid.length; e++) x.snapGrid[e] <= x.virtualSize - x.size && m.push(x.snapGrid[e]);
                                        x.snapGrid = m,
                                        Math.floor(x.virtualSize - x.size) - Math.floor(x.snapGrid[x.snapGrid.length - 1]) > 1 && x.snapGrid.push(x.virtualSize - x.size)
                                    }
                                    0 === x.snapGrid.length && (x.snapGrid = [0]),
                                    0 !== x.params.spaceBetween && (x.isHorizontal() ? x.rtl ? x.slides.css({
                                        marginLeft: t + "px"
                                    }) : x.slides.css({
                                        marginRight: t + "px"
                                    }) : x.slides.css({
                                        marginBottom: t + "px"
                                    })),
                                    x.params.watchSlidesProgress && x.updateSlidesOffset()
                                }
                            },
                            x.updateSlidesOffset = function() {
                                for (var e = 0; e < x.slides.length; e++) x.slides[e].swiperSlideOffset = x.isHorizontal() ? x.slides[e].offsetLeft: x.slides[e].offsetTop
                            },
                            x.currentSlidesPerView = function() {
                                var e, t, n = 1;
                                if (x.params.centeredSlides) {
                                    var r, i = x.slides[x.activeIndex].swiperSlideSize;
                                    for (e = x.activeIndex + 1; e < x.slides.length; e++) x.slides[e] && !r && (i += x.slides[e].swiperSlideSize, n++, i > x.size && (r = !0));
                                    for (t = x.activeIndex - 1; t >= 0; t--) x.slides[t] && !r && (i += x.slides[t].swiperSlideSize, n++, i > x.size && (r = !0))
                                } else for (e = x.activeIndex + 1; e < x.slides.length; e++) x.slidesGrid[e] - x.slidesGrid[x.activeIndex] < x.size && n++;
                                return n
                            },
                            x.updateSlidesProgress = function(e) {
                                if (void 0 === e && (e = x.translate || 0), 0 !== x.slides.length) {
                                    void 0 === x.slides[0].swiperSlideOffset && x.updateSlidesOffset();
                                    var t = -e;
                                    x.rtl && (t = e),
                                        x.slides.removeClass(x.params.slideVisibleClass);
                                    for (var n = 0; n < x.slides.length; n++) {
                                        var r = x.slides[n],
                                            i = (t + (x.params.centeredSlides ? x.minTranslate() : 0) - r.swiperSlideOffset) / (r.swiperSlideSize + x.params.spaceBetween);
                                        if (x.params.watchSlidesVisibility) {
                                            var a = -(t - r.swiperSlideOffset),
                                                o = a + x.slidesSizesGrid[n]; (a >= 0 && a < x.size || o > 0 && o <= x.size || a <= 0 && o >= x.size) && x.slides.eq(n).addClass(x.params.slideVisibleClass)
                                        }
                                        r.progress = x.rtl ? -i: i
                                    }
                                }
                            },
                            x.updateProgress = function(e) {
                                void 0 === e && (e = x.translate || 0);
                                var t = x.maxTranslate() - x.minTranslate(),
                                    n = x.isBeginning,
                                    r = x.isEnd;
                                0 === t ? (x.progress = 0, x.isBeginning = x.isEnd = !0) : (x.progress = (e - x.minTranslate()) / t, x.isBeginning = x.progress <= 0, x.isEnd = x.progress >= 1),
                                x.isBeginning && !n && x.emit("onReachBeginning", x),
                                x.isEnd && !r && x.emit("onReachEnd", x),
                                x.params.watchSlidesProgress && x.updateSlidesProgress(e),
                                    x.emit("onProgress", x, x.progress)
                            },
                            x.updateActiveIndex = function() {
                                var e, t, n, r = x.rtl ? x.translate: -x.translate;
                                for (t = 0; t < x.slidesGrid.length; t++) void 0 !== x.slidesGrid[t + 1] ? r >= x.slidesGrid[t] && r < x.slidesGrid[t + 1] - (x.slidesGrid[t + 1] - x.slidesGrid[t]) / 2 ? e = t: r >= x.slidesGrid[t] && r < x.slidesGrid[t + 1] && (e = t + 1) : r >= x.slidesGrid[t] && (e = t);
                                x.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0),
                                    n = Math.floor(e / x.params.slidesPerGroup),
                                n >= x.snapGrid.length && (n = x.snapGrid.length - 1),
                                e !== x.activeIndex && (x.snapIndex = n, x.previousIndex = x.activeIndex, x.activeIndex = e, x.updateClasses(), x.updateRealIndex())
                            },
                            x.updateRealIndex = function() {
                                x.realIndex = parseInt(x.slides.eq(x.activeIndex).attr("data-swiper-slide-index") || x.activeIndex, 10)
                            },
                            x.updateClasses = function() {
                                x.slides.removeClass(x.params.slideActiveClass + " " + x.params.slideNextClass + " " + x.params.slidePrevClass + " " + x.params.slideDuplicateActiveClass + " " + x.params.slideDuplicateNextClass + " " + x.params.slideDuplicatePrevClass);
                                var t = x.slides.eq(x.activeIndex);
                                t.addClass(x.params.slideActiveClass),
                                i.loop && (t.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass));
                                var n = t.next("." + x.params.slideClass).addClass(x.params.slideNextClass);
                                x.params.loop && 0 === n.length && (n = x.slides.eq(0), n.addClass(x.params.slideNextClass));
                                var r = t.prev("." + x.params.slideClass).addClass(x.params.slidePrevClass);
                                if (x.params.loop && 0 === r.length && (r = x.slides.eq( - 1), r.addClass(x.params.slidePrevClass)), i.loop && (n.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass), r.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass)), x.paginationContainer && x.paginationContainer.length > 0) {
                                    var a, o = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length;
                                    if (x.params.loop ? (a = Math.ceil((x.activeIndex - x.loopedSlides) / x.params.slidesPerGroup), a > x.slides.length - 1 - 2 * x.loopedSlides && (a -= x.slides.length - 2 * x.loopedSlides), a > o - 1 && (a -= o), a < 0 && "bullets" !== x.params.paginationType && (a = o + a)) : a = void 0 !== x.snapIndex ? x.snapIndex: x.activeIndex || 0, "bullets" === x.params.paginationType && x.bullets && x.bullets.length > 0 && (x.bullets.removeClass(x.params.bulletActiveClass), x.paginationContainer.length > 1 ? x.bullets.each(function() {
                                        e(this).index() === a && e(this).addClass(x.params.bulletActiveClass)
                                    }) : x.bullets.eq(a).addClass(x.params.bulletActiveClass)), "fraction" === x.params.paginationType && (x.paginationContainer.find("." + x.params.paginationCurrentClass).text(a + 1), x.paginationContainer.find("." + x.params.paginationTotalClass).text(o)), "progress" === x.params.paginationType) {
                                        var s = (a + 1) / o,
                                            l = s,
                                            u = 1;
                                        x.isHorizontal() || (u = s, l = 1),
                                            x.paginationContainer.find("." + x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + u + ")").transition(x.params.speed)
                                    }
                                    "custom" === x.params.paginationType && x.params.paginationCustomRender && (x.paginationContainer.html(x.params.paginationCustomRender(x, a + 1, o)), x.emit("onPaginationRendered", x, x.paginationContainer[0]))
                                }
                                x.params.loop || (x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.isBeginning ? (x.prevButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.prevButton)) : (x.prevButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.prevButton))), x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.isEnd ? (x.nextButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.nextButton)) : (x.nextButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.nextButton))))
                            },
                            x.updatePagination = function() {
                                if (x.params.pagination && x.paginationContainer && x.paginationContainer.length > 0) {
                                    var e = "";
                                    if ("bullets" === x.params.paginationType) {
                                        for (var t = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length, n = 0; n < t; n++) x.params.paginationBulletRender ? e += x.params.paginationBulletRender(x, n, x.params.bulletClass) : e += "<" + x.params.paginationElement + ' class="' + x.params.bulletClass + '"></' + x.params.paginationElement + ">";
                                        x.paginationContainer.html(e),
                                            x.bullets = x.paginationContainer.find("." + x.params.bulletClass),
                                        x.params.paginationClickable && x.params.a11y && x.a11y && x.a11y.initPagination()
                                    }
                                    "fraction" === x.params.paginationType && (e = x.params.paginationFractionRender ? x.params.paginationFractionRender(x, x.params.paginationCurrentClass, x.params.paginationTotalClass) : '<span class="' + x.params.paginationCurrentClass + '"></span> / <span class="' + x.params.paginationTotalClass + '"></span>', x.paginationContainer.html(e)),
                                    "progress" === x.params.paginationType && (e = x.params.paginationProgressRender ? x.params.paginationProgressRender(x, x.params.paginationProgressbarClass) : '<span class="' + x.params.paginationProgressbarClass + '"></span>', x.paginationContainer.html(e)),
                                    "custom" !== x.params.paginationType && x.emit("onPaginationRendered", x, x.paginationContainer[0])
                                }
                            },
                            x.update = function(e) {
                                function t() {
                                    x.rtl,
                                        x.translate;
                                    n = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate()),
                                        x.setWrapperTranslate(n),
                                        x.updateActiveIndex(),
                                        x.updateClasses()
                                }
                                if (x) {
                                    x.updateContainerSize(),
                                        x.updateSlidesSize(),
                                        x.updateProgress(),
                                        x.updatePagination(),
                                        x.updateClasses(),
                                    x.params.scrollbar && x.scrollbar && x.scrollbar.set();
                                    var n;
                                    if (e) {
                                        x.controller && x.controller.spline && (x.controller.spline = void 0),
                                            x.params.freeMode ? (t(), x.params.autoHeight && x.updateAutoHeight()) : (("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0)) || t()
                                    } else x.params.autoHeight && x.updateAutoHeight()
                                }
                            },
                            x.onResize = function(e) {
                                x.params.onBeforeResize && x.params.onBeforeResize(x),
                                x.params.breakpoints && x.setBreakpoint();
                                var t = x.params.allowSwipeToPrev,
                                    n = x.params.allowSwipeToNext;
                                x.params.allowSwipeToPrev = x.params.allowSwipeToNext = !0,
                                    x.updateContainerSize(),
                                    x.updateSlidesSize(),
                                ("auto" === x.params.slidesPerView || x.params.freeMode || e) && x.updatePagination(),
                                x.params.scrollbar && x.scrollbar && x.scrollbar.set(),
                                x.controller && x.controller.spline && (x.controller.spline = void 0);
                                var r = !1;
                                if (x.params.freeMode) {
                                    var i = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate());
                                    x.setWrapperTranslate(i),
                                        x.updateActiveIndex(),
                                        x.updateClasses(),
                                    x.params.autoHeight && x.updateAutoHeight()
                                } else x.updateClasses(),
                                    r = ("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0);
                                x.params.lazyLoading && !r && x.lazy && x.lazy.load(),
                                    x.params.allowSwipeToPrev = t,
                                    x.params.allowSwipeToNext = n,
                                x.params.onAfterResize && x.params.onAfterResize(x)
                            },
                            x.touchEventsDesktop = {
                                start: "mousedown",
                                move: "mousemove",
                                end: "mouseup"
                            },
                            window.navigator.pointerEnabled ? x.touchEventsDesktop = {
                                start: "pointerdown",
                                move: "pointermove",
                                end: "pointerup"
                            }: window.navigator.msPointerEnabled && (x.touchEventsDesktop = {
                                start: "MSPointerDown",
                                move: "MSPointerMove",
                                end: "MSPointerUp"
                            }),
                            x.touchEvents = {
                                start: x.support.touch || !x.params.simulateTouch ? "touchstart": x.touchEventsDesktop.start,
                                move: x.support.touch || !x.params.simulateTouch ? "touchmove": x.touchEventsDesktop.move,
                                end: x.support.touch || !x.params.simulateTouch ? "touchend": x.touchEventsDesktop.end
                            },
                        (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === x.params.touchEventsTarget ? x.container: x.wrapper).addClass("swiper-wp8-" + x.params.direction),
                            x.initEvents = function(e) {
                                var t = e ? "off": "on",
                                    n = e ? "removeEventListener": "addEventListener",
                                    r = "container" === x.params.touchEventsTarget ? x.container[0] : x.wrapper[0],
                                    a = x.support.touch ? r: document,
                                    o = !!x.params.nested;
                                if (x.browser.ie) r[n](x.touchEvents.start, x.onTouchStart, !1),
                                    a[n](x.touchEvents.move, x.onTouchMove, o),
                                    a[n](x.touchEvents.end, x.onTouchEnd, !1);
                                else {
                                    if (x.support.touch) {
                                        var s = !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                                            passive: !0,
                                            capture: !1
                                        };
                                        r[n](x.touchEvents.start, x.onTouchStart, s),
                                            r[n](x.touchEvents.move, x.onTouchMove, o),
                                            r[n](x.touchEvents.end, x.onTouchEnd, s)
                                    } (i.simulateTouch && !x.device.ios && !x.device.android || i.simulateTouch && !x.support.touch && x.device.ios) && (r[n]("mousedown", x.onTouchStart, !1), document[n]("mousemove", x.onTouchMove, o), document[n]("mouseup", x.onTouchEnd, !1))
                                }
                                window[n]("resize", x.onResize),
                                x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.nextButton[t]("click", x.onClickNext), x.params.a11y && x.a11y && x.nextButton[t]("keydown", x.a11y.onEnterKey)),
                                x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.prevButton[t]("click", x.onClickPrev), x.params.a11y && x.a11y && x.prevButton[t]("keydown", x.a11y.onEnterKey)),
                                x.params.pagination && x.params.paginationClickable && (x.paginationContainer[t]("click", "." + x.params.bulletClass, x.onClickIndex), x.params.a11y && x.a11y && x.paginationContainer[t]("keydown", "." + x.params.bulletClass, x.a11y.onEnterKey)),
                                (x.params.preventClicks || x.params.preventClicksPropagation) && r[n]("click", x.preventClicks, !0)
                            },
                            x.attachEvents = function() {
                                x.initEvents()
                            },
                            x.detachEvents = function() {
                                x.initEvents(!0)
                            },
                            x.allowClick = !0,
                            x.preventClicks = function(e) {
                                x.allowClick || (x.params.preventClicks && e.preventDefault(), x.params.preventClicksPropagation && x.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                            },
                            x.onClickNext = function(e) {
                                e.preventDefault(),
                                x.isEnd && !x.params.loop || x.slideNext()
                            },
                            x.onClickPrev = function(e) {
                                e.preventDefault(),
                                x.isBeginning && !x.params.loop || x.slidePrev()
                            },
                            x.onClickIndex = function(t) {
                                t.preventDefault();
                                var n = e(this).index() * x.params.slidesPerGroup;
                                x.params.loop && (n += x.loopedSlides),
                                    x.slideTo(n)
                            },
                            x.updateClickedSlide = function(t) {
                                var n = s(t, "." + x.params.slideClass),
                                    r = !1;
                                if (n) for (var i = 0; i < x.slides.length; i++) x.slides[i] === n && (r = !0);
                                if (!n || !r) return x.clickedSlide = void 0,
                                    void(x.clickedIndex = void 0);
                                if (x.clickedSlide = n, x.clickedIndex = e(n).index(), x.params.slideToClickedSlide && void 0 !== x.clickedIndex && x.clickedIndex !== x.activeIndex) {
                                    var a, o = x.clickedIndex,
                                        l = "auto" === x.params.slidesPerView ? x.currentSlidesPerView() : x.params.slidesPerView;
                                    if (x.params.loop) {
                                        if (x.animating) return;
                                        a = parseInt(e(x.clickedSlide).attr("data-swiper-slide-index"), 10),
                                            x.params.centeredSlides ? o < x.loopedSlides - l / 2 || o > x.slides.length - x.loopedSlides + l / 2 ? (x.fixLoop(), o = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                                                    x.slideTo(o)
                                                },
                                                0)) : x.slideTo(o) : o > x.slides.length - l ? (x.fixLoop(), o = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                                                    x.slideTo(o)
                                                },
                                                0)) : x.slideTo(o)
                                    } else x.slideTo(o)
                                }
                            };
                        var S, C, E, k, M, z, L, P, _, N, I = "input, select, textarea, button, video",
                            A = Date.now(),
                            D = [];
                        x.animating = !1,
                            x.touches = {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            };
                        var O, j;
                        x.onTouchStart = function(t) {
                            if (t.originalEvent && (t = t.originalEvent), (O = "touchstart" === t.type) || !("which" in t) || 3 !== t.which) {
                                if (x.params.noSwiping && s(t, "." + x.params.noSwipingClass)) return void(x.allowClick = !0);
                                if (!x.params.swipeHandler || s(t, x.params.swipeHandler)) {
                                    var n = x.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX: t.pageX,
                                        r = x.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY: t.pageY;
                                    if (! (x.device.ios && x.params.iOSEdgeSwipeDetection && n <= x.params.iOSEdgeSwipeThreshold)) {
                                        if (S = !0, C = !1, E = !0, M = void 0, j = void 0, x.touches.startX = n, x.touches.startY = r, k = Date.now(), x.allowClick = !0, x.updateContainerSize(), x.swipeDirection = void 0, x.params.threshold > 0 && (P = !1), "touchstart" !== t.type) {
                                            var i = !0;
                                            e(t.target).is(I) && (i = !1),
                                            document.activeElement && e(document.activeElement).is(I) && document.activeElement.blur(),
                                            i && t.preventDefault()
                                        }
                                        x.emit("onTouchStart", x, t)
                                    }
                                }
                            }
                        },
                            x.onTouchMove = function(t) {
                                if (t.originalEvent && (t = t.originalEvent), !O || "mousemove" !== t.type) {
                                    if (t.preventedByNestedSwiper) return x.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX: t.pageX,
                                        void(x.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY: t.pageY);
                                    if (x.params.onlyExternal) return x.allowClick = !1,
                                        void(S && (x.touches.startX = x.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX: t.pageX, x.touches.startY = x.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY: t.pageY, k = Date.now()));
                                    if (O && x.params.touchReleaseOnEdges && !x.params.loop) if (x.isHorizontal()) {
                                        if (x.touches.currentX < x.touches.startX && x.translate <= x.maxTranslate() || x.touches.currentX > x.touches.startX && x.translate >= x.minTranslate()) return
                                    } else if (x.touches.currentY < x.touches.startY && x.translate <= x.maxTranslate() || x.touches.currentY > x.touches.startY && x.translate >= x.minTranslate()) return;
                                    if (O && document.activeElement && t.target === document.activeElement && e(t.target).is(I)) return C = !0,
                                        void(x.allowClick = !1);
                                    if (E && x.emit("onTouchMove", x, t), !(t.targetTouches && t.targetTouches.length > 1)) {
                                        if (x.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX: t.pageX, x.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY: t.pageY, void 0 === M) {
                                            var n;
                                            x.isHorizontal() && x.touches.currentY === x.touches.startY || !x.isHorizontal() && x.touches.currentX === x.touches.startX ? M = !1 : (n = 180 * Math.atan2(Math.abs(x.touches.currentY - x.touches.startY), Math.abs(x.touches.currentX - x.touches.startX)) / Math.PI, M = x.isHorizontal() ? n > x.params.touchAngle: 90 - n > x.params.touchAngle)
                                        }
                                        if (M && x.emit("onTouchMoveOpposite", x, t), void 0 === j && (x.touches.currentX === x.touches.startX && x.touches.currentY === x.touches.startY || (j = !0)), S) {
                                            if (M) return void(S = !1);
                                            if (j) {
                                                x.allowClick = !1,
                                                    x.emit("onSliderMove", x, t),
                                                    t.preventDefault(),
                                                x.params.touchMoveStopPropagation && !x.params.nested && t.stopPropagation(),
                                                C || (i.loop && x.fixLoop(), L = x.getWrapperTranslate(), x.setWrapperTransition(0), x.animating && x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), x.params.autoplay && x.autoplaying && (x.params.autoplayDisableOnInteraction ? x.stopAutoplay() : x.pauseAutoplay()), N = !1, !x.params.grabCursor || !0 !== x.params.allowSwipeToNext && !0 !== x.params.allowSwipeToPrev || x.setGrabCursor(!0)),
                                                    C = !0;
                                                var r = x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX: x.touches.currentY - x.touches.startY;
                                                r *= x.params.touchRatio,
                                                x.rtl && (r = -r),
                                                    x.swipeDirection = r > 0 ? "prev": "next",
                                                    z = r + L;
                                                var a = !0;
                                                if (r > 0 && z > x.minTranslate() ? (a = !1, x.params.resistance && (z = x.minTranslate() - 1 + Math.pow( - x.minTranslate() + L + r, x.params.resistanceRatio))) : r < 0 && z < x.maxTranslate() && (a = !1, x.params.resistance && (z = x.maxTranslate() + 1 - Math.pow(x.maxTranslate() - L - r, x.params.resistanceRatio))), a && (t.preventedByNestedSwiper = !0), !x.params.allowSwipeToNext && "next" === x.swipeDirection && z < L && (z = L), !x.params.allowSwipeToPrev && "prev" === x.swipeDirection && z > L && (z = L), x.params.threshold > 0) {
                                                    if (! (Math.abs(r) > x.params.threshold || P)) return void(z = L);
                                                    if (!P) return P = !0,
                                                        x.touches.startX = x.touches.currentX,
                                                        x.touches.startY = x.touches.currentY,
                                                        z = L,
                                                        void(x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX: x.touches.currentY - x.touches.startY)
                                                }
                                                x.params.followFinger && ((x.params.freeMode || x.params.watchSlidesProgress) && x.updateActiveIndex(), x.params.freeMode && (0 === D.length && D.push({
                                                    position: x.touches[x.isHorizontal() ? "startX": "startY"],
                                                    time: k
                                                }), D.push({
                                                    position: x.touches[x.isHorizontal() ? "currentX": "currentY"],
                                                    time: (new window.Date).getTime()
                                                })), x.updateProgress(z), x.setWrapperTranslate(z))
                                            }
                                        }
                                    }
                                }
                            },
                            x.onTouchEnd = function(t) {
                                if (t.originalEvent && (t = t.originalEvent), E && x.emit("onTouchEnd", x, t), E = !1, S) {
                                    x.params.grabCursor && C && S && (!0 === x.params.allowSwipeToNext || !0 === x.params.allowSwipeToPrev) && x.setGrabCursor(!1);
                                    var n = Date.now(),
                                        r = n - k;
                                    if (x.allowClick && (x.updateClickedSlide(t), x.emit("onTap", x, t), r < 300 && n - A > 300 && (_ && clearTimeout(_), _ = setTimeout(function() {
                                            x && (x.params.paginationHide && x.paginationContainer.length > 0 && !e(t.target).hasClass(x.params.bulletClass) && x.paginationContainer.toggleClass(x.params.paginationHiddenClass), x.emit("onClick", x, t))
                                        },
                                        300)), r < 300 && n - A < 300 && (_ && clearTimeout(_), x.emit("onDoubleTap", x, t))), A = Date.now(), setTimeout(function() {
                                            x && (x.allowClick = !0)
                                        },
                                        0), !S || !C || !x.swipeDirection || 0 === x.touches.diff || z === L) return void(S = C = !1);
                                    S = C = !1;
                                    var i;
                                    if (i = x.params.followFinger ? x.rtl ? x.translate: -x.translate: -z, x.params.freeMode) {
                                        if (i < -x.minTranslate()) return void x.slideTo(x.activeIndex);
                                        if (i > -x.maxTranslate()) return void(x.slides.length < x.snapGrid.length ? x.slideTo(x.snapGrid.length - 1) : x.slideTo(x.slides.length - 1));
                                        if (x.params.freeModeMomentum) {
                                            if (D.length > 1) {
                                                var a = D.pop(),
                                                    o = D.pop(),
                                                    s = a.position - o.position,
                                                    l = a.time - o.time;
                                                x.velocity = s / l,
                                                    x.velocity = x.velocity / 2,
                                                Math.abs(x.velocity) < x.params.freeModeMinimumVelocity && (x.velocity = 0),
                                                (l > 150 || (new window.Date).getTime() - a.time > 300) && (x.velocity = 0)
                                            } else x.velocity = 0;
                                            x.velocity = x.velocity * x.params.freeModeMomentumVelocityRatio,
                                                D.length = 0;
                                            var u = 1e3 * x.params.freeModeMomentumRatio,
                                                c = x.velocity * u,
                                                d = x.translate + c;
                                            x.rtl && (d = -d);
                                            var p, f = !1,
                                                h = 20 * Math.abs(x.velocity) * x.params.freeModeMomentumBounceRatio;
                                            if (d < x.maxTranslate()) x.params.freeModeMomentumBounce ? (d + x.maxTranslate() < -h && (d = x.maxTranslate() - h), p = x.maxTranslate(), f = !0, N = !0) : d = x.maxTranslate();
                                            else if (d > x.minTranslate()) x.params.freeModeMomentumBounce ? (d - x.minTranslate() > h && (d = x.minTranslate() + h), p = x.minTranslate(), f = !0, N = !0) : d = x.minTranslate();
                                            else if (x.params.freeModeSticky) {
                                                var m, g = 0;
                                                for (g = 0; g < x.snapGrid.length; g += 1) if (x.snapGrid[g] > -d) {
                                                    m = g;
                                                    break
                                                }
                                                d = Math.abs(x.snapGrid[m] - d) < Math.abs(x.snapGrid[m - 1] - d) || "next" === x.swipeDirection ? x.snapGrid[m] : x.snapGrid[m - 1],
                                                x.rtl || (d = -d)
                                            }
                                            if (0 !== x.velocity) u = x.rtl ? Math.abs(( - d - x.translate) / x.velocity) : Math.abs((d - x.translate) / x.velocity);
                                            else if (x.params.freeModeSticky) return void x.slideReset();
                                            x.params.freeModeMomentumBounce && f ? (x.updateProgress(p), x.setWrapperTransition(u), x.setWrapperTranslate(d), x.onTransitionStart(), x.animating = !0, x.wrapper.transitionEnd(function() {
                                                x && N && (x.emit("onMomentumBounce", x), x.setWrapperTransition(x.params.speed), x.setWrapperTranslate(p), x.wrapper.transitionEnd(function() {
                                                    x && x.onTransitionEnd()
                                                }))
                                            })) : x.velocity ? (x.updateProgress(d), x.setWrapperTransition(u), x.setWrapperTranslate(d), x.onTransitionStart(), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function() {
                                                x && x.onTransitionEnd()
                                            }))) : x.updateProgress(d),
                                                x.updateActiveIndex()
                                        }
                                        return void((!x.params.freeModeMomentum || r >= x.params.longSwipesMs) && (x.updateProgress(), x.updateActiveIndex()))
                                    }
                                    var v, y = 0,
                                        w = x.slidesSizesGrid[0];
                                    for (v = 0; v < x.slidesGrid.length; v += x.params.slidesPerGroup) void 0 !== x.slidesGrid[v + x.params.slidesPerGroup] ? i >= x.slidesGrid[v] && i < x.slidesGrid[v + x.params.slidesPerGroup] && (y = v, w = x.slidesGrid[v + x.params.slidesPerGroup] - x.slidesGrid[v]) : i >= x.slidesGrid[v] && (y = v, w = x.slidesGrid[x.slidesGrid.length - 1] - x.slidesGrid[x.slidesGrid.length - 2]);
                                    var b = (i - x.slidesGrid[y]) / w;
                                    if (r > x.params.longSwipesMs) {
                                        if (!x.params.longSwipes) return void x.slideTo(x.activeIndex);
                                        "next" === x.swipeDirection && (b >= x.params.longSwipesRatio ? x.slideTo(y + x.params.slidesPerGroup) : x.slideTo(y)),
                                        "prev" === x.swipeDirection && (b > 1 - x.params.longSwipesRatio ? x.slideTo(y + x.params.slidesPerGroup) : x.slideTo(y))
                                    } else {
                                        if (!x.params.shortSwipes) return void x.slideTo(x.activeIndex);
                                        "next" === x.swipeDirection && x.slideTo(y + x.params.slidesPerGroup),
                                        "prev" === x.swipeDirection && x.slideTo(y)
                                    }
                                }
                            },
                            x._slideTo = function(e, t) {
                                return x.slideTo(e, t, !0, !0)
                            },
                            x.slideTo = function(e, t, n, r) {
                                void 0 === n && (n = !0),
                                void 0 === e && (e = 0),
                                e < 0 && (e = 0),
                                    x.snapIndex = Math.floor(e / x.params.slidesPerGroup),
                                x.snapIndex >= x.snapGrid.length && (x.snapIndex = x.snapGrid.length - 1);
                                var i = -x.snapGrid[x.snapIndex];
                                if (x.params.autoplay && x.autoplaying && (r || !x.params.autoplayDisableOnInteraction ? x.pauseAutoplay(t) : x.stopAutoplay()), x.updateProgress(i), x.params.normalizeSlideIndex) for (var a = 0; a < x.slidesGrid.length; a++) - Math.floor(100 * i) >= Math.floor(100 * x.slidesGrid[a]) && (e = a);
                                return ! (!x.params.allowSwipeToNext && i < x.translate && i < x.minTranslate()) && (!(!x.params.allowSwipeToPrev && i > x.translate && i > x.maxTranslate() && (x.activeIndex || 0) !== e) && (void 0 === t && (t = x.params.speed), x.previousIndex = x.activeIndex || 0, x.activeIndex = e, x.updateRealIndex(), x.rtl && -i === x.translate || !x.rtl && i === x.translate ? (x.params.autoHeight && x.updateAutoHeight(), x.updateClasses(), "slide" !== x.params.effect && x.setWrapperTranslate(i), !1) : (x.updateClasses(), x.onTransitionStart(n), 0 === t || x.browser.lteIE9 ? (x.setWrapperTranslate(i), x.setWrapperTransition(0), x.onTransitionEnd(n)) : (x.setWrapperTranslate(i), x.setWrapperTransition(t), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function() {
                                    x && x.onTransitionEnd(n)
                                }))), !0)))
                            },
                            x.onTransitionStart = function(e) {
                                void 0 === e && (e = !0),
                                x.params.autoHeight && x.updateAutoHeight(),
                                x.lazy && x.lazy.onTransitionStart(),
                                e && (x.emit("onTransitionStart", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeStart", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextStart", x) : x.emit("onSlidePrevStart", x)))
                            },
                            x.onTransitionEnd = function(e) {
                                x.animating = !1,
                                    x.setWrapperTransition(0),
                                void 0 === e && (e = !0),
                                x.lazy && x.lazy.onTransitionEnd(),
                                e && (x.emit("onTransitionEnd", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeEnd", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextEnd", x) : x.emit("onSlidePrevEnd", x))),
                                x.params.history && x.history && x.history.setHistory(x.params.history, x.activeIndex),
                                x.params.hashnav && x.hashnav && x.hashnav.setHash()
                            },
                            x.slideNext = function(e, t, n) {
                                if (x.params.loop) {
                                    if (x.animating) return ! 1;
                                    x.fixLoop();
                                    x.container[0].clientLeft;
                                    return x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, n)
                                }
                                return x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, n)
                            },
                            x._slideNext = function(e) {
                                return x.slideNext(!0, e, !0)
                            },
                            x.slidePrev = function(e, t, n) {
                                if (x.params.loop) {
                                    if (x.animating) return ! 1;
                                    x.fixLoop();
                                    x.container[0].clientLeft;
                                    return x.slideTo(x.activeIndex - 1, t, e, n)
                                }
                                return x.slideTo(x.activeIndex - 1, t, e, n)
                            },
                            x._slidePrev = function(e) {
                                return x.slidePrev(!0, e, !0)
                            },
                            x.slideReset = function(e, t, n) {
                                return x.slideTo(x.activeIndex, t, e)
                            },
                            x.disableTouchControl = function() {
                                return x.params.onlyExternal = !0,
                                    !0
                            },
                            x.enableTouchControl = function() {
                                return x.params.onlyExternal = !1,
                                    !0
                            },
                            x.setWrapperTransition = function(e, t) {
                                x.wrapper.transition(e),
                                "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTransition(e),
                                x.params.parallax && x.parallax && x.parallax.setTransition(e),
                                x.params.scrollbar && x.scrollbar && x.scrollbar.setTransition(e),
                                x.params.control && x.controller && x.controller.setTransition(e, t),
                                    x.emit("onSetTransition", x, e)
                            },
                            x.setWrapperTranslate = function(e, t, n) {
                                var r = 0,
                                    i = 0;
                                x.isHorizontal() ? r = x.rtl ? -e: e: i = e,
                                x.params.roundLengths && (r = a(r), i = a(i)),
                                x.params.virtualTranslate || (x.support.transforms3d ? x.wrapper.transform("translate3d(" + r + "px, " + i + "px, 0px)") : x.wrapper.transform("translate(" + r + "px, " + i + "px)")),
                                    x.translate = x.isHorizontal() ? r: i;
                                var o, s = x.maxTranslate() - x.minTranslate();
                                o = 0 === s ? 0 : (e - x.minTranslate()) / s,
                                o !== x.progress && x.updateProgress(e),
                                t && x.updateActiveIndex(),
                                "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTranslate(x.translate),
                                x.params.parallax && x.parallax && x.parallax.setTranslate(x.translate),
                                x.params.scrollbar && x.scrollbar && x.scrollbar.setTranslate(x.translate),
                                x.params.control && x.controller && x.controller.setTranslate(x.translate, n),
                                    x.emit("onSetTranslate", x, x.translate)
                            },
                            x.getTranslate = function(e, t) {
                                var n, r, i, a;
                                return void 0 === t && (t = "x"),
                                    x.params.virtualTranslate ? x.rtl ? -x.translate: x.translate: (i = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (r = i.transform || i.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(function(e) {
                                        return e.replace(",", ".")
                                    }).join(", ")), a = new window.WebKitCSSMatrix("none" === r ? "": r)) : (a = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = a.toString().split(",")), "x" === t && (r = window.WebKitCSSMatrix ? a.m41: 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (r = window.WebKitCSSMatrix ? a.m42: 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), x.rtl && r && (r = -r), r || 0)
                            },
                            x.getWrapperTranslate = function(e) {
                                return void 0 === e && (e = x.isHorizontal() ? "x": "y"),
                                    x.getTranslate(x.wrapper[0], e)
                            },
                            x.observers = [],
                            x.initObservers = function() {
                                if (x.params.observeParents) for (var e = x.container.parents(), t = 0; t < e.length; t++) l(e[t]);
                                l(x.container[0], {
                                    childList: !1
                                }),
                                    l(x.wrapper[0], {
                                        attributes: !1
                                    })
                            },
                            x.disconnectObservers = function() {
                                for (var e = 0; e < x.observers.length; e++) x.observers[e].disconnect();
                                x.observers = []
                            },
                            x.createLoop = function() {
                                x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove();
                                var t = x.wrapper.children("." + x.params.slideClass);
                                "auto" !== x.params.slidesPerView || x.params.loopedSlides || (x.params.loopedSlides = t.length),
                                    x.loopedSlides = parseInt(x.params.loopedSlides || x.params.slidesPerView, 10),
                                    x.loopedSlides = x.loopedSlides + x.params.loopAdditionalSlides,
                                x.loopedSlides > t.length && (x.loopedSlides = t.length);
                                var n, r = [],
                                    i = [];
                                for (t.each(function(n, a) {
                                    var o = e(this);
                                    n < x.loopedSlides && i.push(a),
                                    n < t.length && n >= t.length - x.loopedSlides && r.push(a),
                                        o.attr("data-swiper-slide-index", n)
                                }), n = 0; n < i.length; n++) x.wrapper.append(e(i[n].cloneNode(!0)).addClass(x.params.slideDuplicateClass));
                                for (n = r.length - 1; n >= 0; n--) x.wrapper.prepend(e(r[n].cloneNode(!0)).addClass(x.params.slideDuplicateClass))
                            },
                            x.destroyLoop = function() {
                                x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove(),
                                    x.slides.removeAttr("data-swiper-slide-index")
                            },
                            x.reLoop = function(e) {
                                var t = x.activeIndex - x.loopedSlides;
                                x.destroyLoop(),
                                    x.createLoop(),
                                    x.updateSlidesSize(),
                                e && x.slideTo(t + x.loopedSlides, 0, !1)
                            },
                            x.fixLoop = function() {
                                var e;
                                x.activeIndex < x.loopedSlides ? (e = x.slides.length - 3 * x.loopedSlides + x.activeIndex, e += x.loopedSlides, x.slideTo(e, 0, !1, !0)) : ("auto" === x.params.slidesPerView && x.activeIndex >= 2 * x.loopedSlides || x.activeIndex > x.slides.length - 2 * x.params.slidesPerView) && (e = -x.slides.length + x.activeIndex + x.loopedSlides, e += x.loopedSlides, x.slideTo(e, 0, !1, !0))
                            },
                            x.appendSlide = function(e) {
                                if (x.params.loop && x.destroyLoop(), "object" == typeof e && e.length) for (var t = 0; t < e.length; t++) e[t] && x.wrapper.append(e[t]);
                                else x.wrapper.append(e);
                                x.params.loop && x.createLoop(),
                                x.params.observer && x.support.observer || x.update(!0)
                            },
                            x.prependSlide = function(e) {
                                x.params.loop && x.destroyLoop();
                                var t = x.activeIndex + 1;
                                if ("object" == typeof e && e.length) {
                                    for (var n = 0; n < e.length; n++) e[n] && x.wrapper.prepend(e[n]);
                                    t = x.activeIndex + e.length
                                } else x.wrapper.prepend(e);
                                x.params.loop && x.createLoop(),
                                x.params.observer && x.support.observer || x.update(!0),
                                    x.slideTo(t, 0, !1)
                            },
                            x.removeSlide = function(e) {
                                x.params.loop && (x.destroyLoop(), x.slides = x.wrapper.children("." + x.params.slideClass));
                                var t, n = x.activeIndex;
                                if ("object" == typeof e && e.length) {
                                    for (var r = 0; r < e.length; r++) t = e[r],
                                    x.slides[t] && x.slides.eq(t).remove(),
                                    t < n && n--;
                                    n = Math.max(n, 0)
                                } else t = e,
                                x.slides[t] && x.slides.eq(t).remove(),
                                t < n && n--,
                                    n = Math.max(n, 0);
                                x.params.loop && x.createLoop(),
                                x.params.observer && x.support.observer || x.update(!0),
                                    x.params.loop ? x.slideTo(n + x.loopedSlides, 0, !1) : x.slideTo(n, 0, !1)
                            },
                            x.removeAllSlides = function() {
                                for (var e = [], t = 0; t < x.slides.length; t++) e.push(t);
                                x.removeSlide(e)
                            },
                            x.effects = {
                                fade: {
                                    setTranslate: function() {
                                        for (var e = 0; e < x.slides.length; e++) {
                                            var t = x.slides.eq(e),
                                                n = t[0].swiperSlideOffset,
                                                r = -n;
                                            x.params.virtualTranslate || (r -= x.translate);
                                            var i = 0;
                                            x.isHorizontal() || (i = r, r = 0);
                                            var a = x.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                            t.css({
                                                opacity: a
                                            }).transform("translate3d(" + r + "px, " + i + "px, 0px)")
                                        }
                                    },
                                    setTransition: function(e) {
                                        if (x.slides.transition(e), x.params.virtualTranslate && 0 !== e) {
                                            var t = !1;
                                            x.slides.transitionEnd(function() {
                                                if (!t && x) {
                                                    t = !0,
                                                        x.animating = !1;
                                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < e.length; n++) x.wrapper.trigger(e[n])
                                                }
                                            })
                                        }
                                    }
                                },
                                flip: {
                                    setTranslate: function() {
                                        for (var t = 0; t < x.slides.length; t++) {
                                            var n = x.slides.eq(t),
                                                r = n[0].progress;
                                            x.params.flip.limitRotation && (r = Math.max(Math.min(n[0].progress, 1), -1));
                                            var i = n[0].swiperSlideOffset,
                                                a = -180 * r,
                                                o = a,
                                                s = 0,
                                                l = -i,
                                                u = 0;
                                            if (x.isHorizontal() ? x.rtl && (o = -o) : (u = l, l = 0, s = -o, o = 0), n[0].style.zIndex = -Math.abs(Math.round(r)) + x.slides.length, x.params.flip.slideShadows) {
                                                var c = x.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                                                    d = x.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                                0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left": "top") + '"></div>'), n.append(c)),
                                                0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right": "bottom") + '"></div>'), n.append(d)),
                                                c.length && (c[0].style.opacity = Math.max( - r, 0)),
                                                d.length && (d[0].style.opacity = Math.max(r, 0))
                                            }
                                            n.transform("translate3d(" + l + "px, " + u + "px, 0px) rotateX(" + s + "deg) rotateY(" + o + "deg)")
                                        }
                                    },
                                    setTransition: function(t) {
                                        if (x.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), x.params.virtualTranslate && 0 !== t) {
                                            var n = !1;
                                            x.slides.eq(x.activeIndex).transitionEnd(function() {
                                                if (!n && x && e(this).hasClass(x.params.slideActiveClass)) {
                                                    n = !0,
                                                        x.animating = !1;
                                                    for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], r = 0; r < t.length; r++) x.wrapper.trigger(t[r])
                                                }
                                            })
                                        }
                                    }
                                },
                                cube: {
                                    setTranslate: function() {
                                        var t, n = 0;
                                        x.params.cube.shadow && (x.isHorizontal() ? (t = x.wrapper.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), x.wrapper.append(t)), t.css({
                                            height: x.width + "px"
                                        })) : (t = x.container.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), x.container.append(t))));
                                        for (var r = 0; r < x.slides.length; r++) {
                                            var i = x.slides.eq(r),
                                                a = 90 * r,
                                                o = Math.floor(a / 360);
                                            x.rtl && (a = -a, o = Math.floor( - a / 360));
                                            var s = Math.max(Math.min(i[0].progress, 1), -1),
                                                l = 0,
                                                u = 0,
                                                c = 0;
                                            r % 4 == 0 ? (l = 4 * -o * x.size, c = 0) : (r - 1) % 4 == 0 ? (l = 0, c = 4 * -o * x.size) : (r - 2) % 4 == 0 ? (l = x.size + 4 * o * x.size, c = x.size) : (r - 3) % 4 == 0 && (l = -x.size, c = 3 * x.size + 4 * x.size * o),
                                            x.rtl && (l = -l),
                                            x.isHorizontal() || (u = l, l = 0);
                                            var d = "rotateX(" + (x.isHorizontal() ? 0 : -a) + "deg) rotateY(" + (x.isHorizontal() ? a: 0) + "deg) translate3d(" + l + "px, " + u + "px, " + c + "px)";
                                            if (s <= 1 && s > -1 && (n = 90 * r + 90 * s, x.rtl && (n = 90 * -r - 90 * s)), i.transform(d), x.params.cube.slideShadows) {
                                                var p = x.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                                    f = x.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                                0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left": "top") + '"></div>'), i.append(p)),
                                                0 === f.length && (f = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right": "bottom") + '"></div>'), i.append(f)),
                                                p.length && (p[0].style.opacity = Math.max( - s, 0)),
                                                f.length && (f[0].style.opacity = Math.max(s, 0))
                                            }
                                        }
                                        if (x.wrapper.css({
                                            "-webkit-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                            "-moz-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                            "-ms-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                            "transform-origin": "50% 50% -" + x.size / 2 + "px"
                                        }), x.params.cube.shadow) if (x.isHorizontal()) t.transform("translate3d(0px, " + (x.width / 2 + x.params.cube.shadowOffset) + "px, " + -x.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + x.params.cube.shadowScale + ")");
                                        else {
                                            var h = Math.abs(n) - 90 * Math.floor(Math.abs(n) / 90),
                                                m = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                                                g = x.params.cube.shadowScale,
                                                v = x.params.cube.shadowScale / m,
                                                y = x.params.cube.shadowOffset;
                                            t.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (x.height / 2 + y) + "px, " + -x.height / 2 / v + "px) rotateX(-90deg)")
                                        }
                                        var w = x.isSafari || x.isUiWebView ? -x.size / 2 : 0;
                                        x.wrapper.transform("translate3d(0px,0," + w + "px) rotateX(" + (x.isHorizontal() ? 0 : n) + "deg) rotateY(" + (x.isHorizontal() ? -n: 0) + "deg)")
                                    },
                                    setTransition: function(e) {
                                        x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                                        x.params.cube.shadow && !x.isHorizontal() && x.container.find(".swiper-cube-shadow").transition(e)
                                    }
                                },
                                coverflow: {
                                    setTranslate: function() {
                                        for (var t = x.translate,
                                                 n = x.isHorizontal() ? -t + x.width / 2 : -t + x.height / 2, r = x.isHorizontal() ? x.params.coverflow.rotate: -x.params.coverflow.rotate, i = x.params.coverflow.depth, a = 0, o = x.slides.length; a < o; a++) {
                                            var s = x.slides.eq(a),
                                                l = x.slidesSizesGrid[a],
                                                u = s[0].swiperSlideOffset,
                                                c = (n - u - l / 2) / l * x.params.coverflow.modifier,
                                                d = x.isHorizontal() ? r * c: 0,
                                                p = x.isHorizontal() ? 0 : r * c,
                                                f = -i * Math.abs(c),
                                                h = x.isHorizontal() ? 0 : x.params.coverflow.stretch * c,
                                                m = x.isHorizontal() ? x.params.coverflow.stretch * c: 0;
                                            Math.abs(m) < .001 && (m = 0),
                                            Math.abs(h) < .001 && (h = 0),
                                            Math.abs(f) < .001 && (f = 0),
                                            Math.abs(d) < .001 && (d = 0),
                                            Math.abs(p) < .001 && (p = 0);
                                            var g = "translate3d(" + m + "px," + h + "px," + f + "px)  rotateX(" + p + "deg) rotateY(" + d + "deg)";
                                            if (s.transform(g), s[0].style.zIndex = 1 - Math.abs(Math.round(c)), x.params.coverflow.slideShadows) {
                                                var v = x.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                                                    y = x.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                                                0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left": "top") + '"></div>'), s.append(v)),
                                                0 === y.length && (y = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right": "bottom") + '"></div>'), s.append(y)),
                                                v.length && (v[0].style.opacity = c > 0 ? c: 0),
                                                y.length && (y[0].style.opacity = -c > 0 ? -c: 0)
                                            }
                                        }
                                        if (x.browser.ie) {
                                            x.wrapper[0].style.perspectiveOrigin = n + "px 50%"
                                        }
                                    },
                                    setTransition: function(e) {
                                        x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                                    }
                                }
                            },
                            x.lazy = {
                                initialImageLoaded: !1,
                                loadImageInSlide: function(t, n) {
                                    if (void 0 !== t && (void 0 === n && (n = !0), 0 !== x.slides.length)) {
                                        var r = x.slides.eq(t),
                                            i = r.find("." + x.params.lazyLoadingClass + ":not(." + x.params.lazyStatusLoadedClass + "):not(." + x.params.lazyStatusLoadingClass + ")"); ! r.hasClass(x.params.lazyLoadingClass) || r.hasClass(x.params.lazyStatusLoadedClass) || r.hasClass(x.params.lazyStatusLoadingClass) || (i = i.add(r[0])),
                                        0 !== i.length && i.each(function() {
                                            var t = e(this);
                                            t.addClass(x.params.lazyStatusLoadingClass);
                                            var i = t.attr("data-background"),
                                                a = t.attr("data-src"),
                                                o = t.attr("data-srcset"),
                                                s = t.attr("data-sizes");
                                            x.loadImage(t[0], a || i, o, s, !1,
                                                function() {
                                                    if (void 0 !== x && null !== x && x) {
                                                        if (i ? (t.css("background-image", 'url("' + i + '")'), t.removeAttr("data-background")) : (o && (t.attr("srcset", o), t.removeAttr("data-srcset")), s && (t.attr("sizes", s), t.removeAttr("data-sizes")), a && (t.attr("src", a), t.removeAttr("data-src"))), t.addClass(x.params.lazyStatusLoadedClass).removeClass(x.params.lazyStatusLoadingClass), r.find("." + x.params.lazyPreloaderClass + ", ." + x.params.preloaderClass).remove(), x.params.loop && n) {
                                                            var e = r.attr("data-swiper-slide-index");
                                                            if (r.hasClass(x.params.slideDuplicateClass)) {
                                                                var l = x.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + x.params.slideDuplicateClass + ")");
                                                                x.lazy.loadImageInSlide(l.index(), !1)
                                                            } else {
                                                                var u = x.wrapper.children("." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                                x.lazy.loadImageInSlide(u.index(), !1)
                                                            }
                                                        }
                                                        x.emit("onLazyImageReady", x, r[0], t[0])
                                                    }
                                                }),
                                                x.emit("onLazyImageLoad", x, r[0], t[0])
                                        })
                                    }
                                },
                                load: function() {
                                    var t, n = x.params.slidesPerView;
                                    if ("auto" === n && (n = 0), x.lazy.initialImageLoaded || (x.lazy.initialImageLoaded = !0), x.params.watchSlidesVisibility) x.wrapper.children("." + x.params.slideVisibleClass).each(function() {
                                        x.lazy.loadImageInSlide(e(this).index())
                                    });
                                    else if (n > 1) for (t = x.activeIndex; t < x.activeIndex + n; t++) x.slides[t] && x.lazy.loadImageInSlide(t);
                                    else x.lazy.loadImageInSlide(x.activeIndex);
                                    if (x.params.lazyLoadingInPrevNext) if (n > 1 || x.params.lazyLoadingInPrevNextAmount && x.params.lazyLoadingInPrevNextAmount > 1) {
                                        var r = x.params.lazyLoadingInPrevNextAmount,
                                            i = n,
                                            a = Math.min(x.activeIndex + i + Math.max(r, i), x.slides.length),
                                            o = Math.max(x.activeIndex - Math.max(i, r), 0);
                                        for (t = x.activeIndex + n; t < a; t++) x.slides[t] && x.lazy.loadImageInSlide(t);
                                        for (t = o; t < x.activeIndex; t++) x.slides[t] && x.lazy.loadImageInSlide(t)
                                    } else {
                                        var s = x.wrapper.children("." + x.params.slideNextClass);
                                        s.length > 0 && x.lazy.loadImageInSlide(s.index());
                                        var l = x.wrapper.children("." + x.params.slidePrevClass);
                                        l.length > 0 && x.lazy.loadImageInSlide(l.index())
                                    }
                                },
                                onTransitionStart: function() {
                                    x.params.lazyLoading && (x.params.lazyLoadingOnTransitionStart || !x.params.lazyLoadingOnTransitionStart && !x.lazy.initialImageLoaded) && x.lazy.load()
                                },
                                onTransitionEnd: function() {
                                    x.params.lazyLoading && !x.params.lazyLoadingOnTransitionStart && x.lazy.load()
                                }
                            },
                            x.scrollbar = {
                                isTouched: !1,
                                setDragPosition: function(e) {
                                    var t = x.scrollbar,
                                        n = x.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX: e.pageX || e.clientX: "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY: e.pageY || e.clientY,
                                        r = n - t.track.offset()[x.isHorizontal() ? "left": "top"] - t.dragSize / 2,
                                        i = -x.minTranslate() * t.moveDivider,
                                        a = -x.maxTranslate() * t.moveDivider;
                                    r < i ? r = i: r > a && (r = a),
                                        r = -r / t.moveDivider,
                                        x.updateProgress(r),
                                        x.setWrapperTranslate(r, !0)
                                },
                                dragStart: function(e) {
                                    var t = x.scrollbar;
                                    t.isTouched = !0,
                                        e.preventDefault(),
                                        e.stopPropagation(),
                                        t.setDragPosition(e),
                                        clearTimeout(t.dragTimeout),
                                        t.track.transition(0),
                                    x.params.scrollbarHide && t.track.css("opacity", 1),
                                        x.wrapper.transition(100),
                                        t.drag.transition(100),
                                        x.emit("onScrollbarDragStart", x)
                                },
                                dragMove: function(e) {
                                    var t = x.scrollbar;
                                    t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), x.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), x.emit("onScrollbarDragMove", x))
                                },
                                dragEnd: function(e) {
                                    var t = x.scrollbar;
                                    t.isTouched && (t.isTouched = !1, x.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function() {
                                            t.track.css("opacity", 0),
                                                t.track.transition(400)
                                        },
                                        1e3)), x.emit("onScrollbarDragEnd", x), x.params.scrollbarSnapOnRelease && x.slideReset())
                                },
                                draggableEvents: function() {
                                    return ! 1 !== x.params.simulateTouch || x.support.touch ? x.touchEvents: x.touchEventsDesktop
                                } (),
                                enableDraggable: function() {
                                    var t = x.scrollbar,
                                        n = x.support.touch ? t.track: document;
                                    e(t.track).on(t.draggableEvents.start, t.dragStart),
                                        e(n).on(t.draggableEvents.move, t.dragMove),
                                        e(n).on(t.draggableEvents.end, t.dragEnd)
                                },
                                disableDraggable: function() {
                                    var t = x.scrollbar,
                                        n = x.support.touch ? t.track: document;
                                    e(t.track).off(t.draggableEvents.start, t.dragStart),
                                        e(n).off(t.draggableEvents.move, t.dragMove),
                                        e(n).off(t.draggableEvents.end, t.dragEnd)
                                },
                                set: function() {
                                    if (x.params.scrollbar) {
                                        var t = x.scrollbar;
                                        t.track = e(x.params.scrollbar),
                                        x.params.uniqueNavElements && "string" == typeof x.params.scrollbar && t.track.length > 1 && 1 === x.container.find(x.params.scrollbar).length && (t.track = x.container.find(x.params.scrollbar)),
                                            t.drag = t.track.find(".swiper-scrollbar-drag"),
                                        0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'), t.track.append(t.drag)),
                                            t.drag[0].style.width = "",
                                            t.drag[0].style.height = "",
                                            t.trackSize = x.isHorizontal() ? t.track[0].offsetWidth: t.track[0].offsetHeight,
                                            t.divider = x.size / x.virtualSize,
                                            t.moveDivider = t.divider * (t.trackSize / x.size),
                                            t.dragSize = t.trackSize * t.divider,
                                            x.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px": t.drag[0].style.height = t.dragSize + "px",
                                            t.divider >= 1 ? t.track[0].style.display = "none": t.track[0].style.display = "",
                                        x.params.scrollbarHide && (t.track[0].style.opacity = 0)
                                    }
                                },
                                setTranslate: function() {
                                    if (x.params.scrollbar) {
                                        var e, t = x.scrollbar,
                                            n = (x.translate, t.dragSize);
                                        e = (t.trackSize - t.dragSize) * x.progress,
                                            x.rtl && x.isHorizontal() ? (e = -e, e > 0 ? (n = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (n = t.trackSize + e)) : e < 0 ? (n = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (n = t.trackSize - e),
                                            x.isHorizontal() ? (x.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = n + "px") : (x.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = n + "px"),
                                        x.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
                                                t.track[0].style.opacity = 0,
                                                    t.track.transition(400)
                                            },
                                            1e3))
                                    }
                                },
                                setTransition: function(e) {
                                    x.params.scrollbar && x.scrollbar.drag.transition(e)
                                }
                            },
                            x.controller = {
                                LinearSpline: function(e, t) {
                                    var n = function() {
                                        var e, t, n;
                                        return function(r, i) {
                                            for (t = -1, e = r.length; e - t > 1;) r[n = e + t >> 1] <= i ? t = n: e = n;
                                            return e
                                        }
                                    } ();
                                    this.x = e,
                                        this.y = t,
                                        this.lastIndex = e.length - 1;
                                    var r, i;
                                    this.x.length;
                                    this.interpolate = function(e) {
                                        return e ? (i = n(this.x, e), r = i - 1, (e - this.x[r]) * (this.y[i] - this.y[r]) / (this.x[i] - this.x[r]) + this.y[r]) : 0
                                    }
                                },
                                getInterpolateFunction: function(e) {
                                    x.controller.spline || (x.controller.spline = x.params.loop ? new x.controller.LinearSpline(x.slidesGrid, e.slidesGrid) : new x.controller.LinearSpline(x.snapGrid, e.snapGrid))
                                },
                                setTranslate: function(e, n) {
                                    function r(t) {
                                        e = t.rtl && "horizontal" === t.params.direction ? -x.translate: x.translate,
                                        "slide" === x.params.controlBy && (x.controller.getInterpolateFunction(t), a = -x.controller.spline.interpolate( - e)),
                                        a && "container" !== x.params.controlBy || (i = (t.maxTranslate() - t.minTranslate()) / (x.maxTranslate() - x.minTranslate()), a = (e - x.minTranslate()) * i + t.minTranslate()),
                                        x.params.controlInverse && (a = t.maxTranslate() - a),
                                            t.updateProgress(a),
                                            t.setWrapperTranslate(a, !1, x),
                                            t.updateActiveIndex()
                                    }
                                    var i, a, o = x.params.control;
                                    if (Array.isArray(o)) for (var s = 0; s < o.length; s++) o[s] !== n && o[s] instanceof t && r(o[s]);
                                    else o instanceof t && n !== o && r(o)
                                },
                                setTransition: function(e, n) {
                                    function r(t) {
                                        t.setWrapperTransition(e, x),
                                        0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function() {
                                            a && (t.params.loop && "slide" === x.params.controlBy && t.fixLoop(), t.onTransitionEnd())
                                        }))
                                    }
                                    var i, a = x.params.control;
                                    if (Array.isArray(a)) for (i = 0; i < a.length; i++) a[i] !== n && a[i] instanceof t && r(a[i]);
                                    else a instanceof t && n !== a && r(a)
                                }
                            },
                            x.hashnav = {
                                onHashCange: function(e, t) {
                                    var n = document.location.hash.replace("#", "");
                                    n !== x.slides.eq(x.activeIndex).attr("data-hash") && x.slideTo(x.wrapper.children("." + x.params.slideClass + '[data-hash="' + n + '"]').index())
                                },
                                attachEvents: function(t) {
                                    var n = t ? "off": "on";
                                    e(window)[n]("hashchange", x.hashnav.onHashCange)
                                },
                                setHash: function() {
                                    if (x.hashnav.initialized && x.params.hashnav) if (x.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + x.slides.eq(x.activeIndex).attr("data-hash") || "");
                                    else {
                                        var e = x.slides.eq(x.activeIndex),
                                            t = e.attr("data-hash") || e.attr("data-history");
                                        document.location.hash = t || ""
                                    }
                                },
                                init: function() {
                                    if (x.params.hashnav && !x.params.history) {
                                        x.hashnav.initialized = !0;
                                        var e = document.location.hash.replace("#", "");
                                        if (e) for (var t = 0,
                                                        n = x.slides.length; t < n; t++) {
                                            var r = x.slides.eq(t),
                                                i = r.attr("data-hash") || r.attr("data-history");
                                            if (i === e && !r.hasClass(x.params.slideDuplicateClass)) {
                                                var a = r.index();
                                                x.slideTo(a, 0, x.params.runCallbacksOnInit, !0)
                                            }
                                        }
                                        x.params.hashnavWatchState && x.hashnav.attachEvents()
                                    }
                                },
                                destroy: function() {
                                    x.params.hashnavWatchState && x.hashnav.attachEvents(!0)
                                }
                            },
                            x.history = {
                                init: function() {
                                    if (x.params.history) {
                                        if (!window.history || !window.history.pushState) return x.params.history = !1,
                                            void(x.params.hashnav = !0);
                                        x.history.initialized = !0,
                                            this.paths = this.getPathValues(),
                                        (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, x.params.runCallbacksOnInit), x.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                                    }
                                },
                                setHistoryPopState: function() {
                                    x.history.paths = x.history.getPathValues(),
                                        x.history.scrollToSlide(x.params.speed, x.history.paths.value, !1)
                                },
                                getPathValues: function() {
                                    var e = window.location.pathname.slice(1).split("/"),
                                        t = e.length;
                                    return {
                                        key: e[t - 2],
                                        value: e[t - 1]
                                    }
                                },
                                setHistory: function(e, t) {
                                    if (x.history.initialized && x.params.history) {
                                        var n = x.slides.eq(t),
                                            r = this.slugify(n.attr("data-history"));
                                        window.location.pathname.includes(e) || (r = e + "/" + r),
                                            x.params.replaceState ? window.history.replaceState(null, null, r) : window.history.pushState(null, null, r)
                                    }
                                },
                                slugify: function(e) {
                                    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                                },
                                scrollToSlide: function(e, t, n) {
                                    if (t) for (var r = 0,
                                                    i = x.slides.length; r < i; r++) {
                                        var a = x.slides.eq(r),
                                            o = this.slugify(a.attr("data-history"));
                                        if (o === t && !a.hasClass(x.params.slideDuplicateClass)) {
                                            var s = a.index();
                                            x.slideTo(s, e, n)
                                        }
                                    } else x.slideTo(0, e, n)
                                }
                            },
                            x.disableKeyboardControl = function() {
                                x.params.keyboardControl = !1,
                                    e(document).off("keydown", u)
                            },
                            x.enableKeyboardControl = function() {
                                x.params.keyboardControl = !0,
                                    e(document).on("keydown", u)
                            },
                            x.mousewheel = {
                                event: !1,
                                lastScrollTime: (new window.Date).getTime()
                            },
                        x.params.mousewheelControl && (x.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll": function() {
                            var e = "onwheel" in document;
                            if (!e) {
                                var t = document.createElement("div");
                                t.setAttribute("onwheel", "return;"),
                                    e = "function" == typeof t.onwheel
                            }
                            return ! e && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (e = document.implementation.hasFeature("Events.wheel", "3.0")),
                                e
                        } () ? "wheel": "mousewheel"),
                            x.disableMousewheelControl = function() {
                                if (!x.mousewheel.event) return ! 1;
                                var t = x.container;
                                return "container" !== x.params.mousewheelEventsTarged && (t = e(x.params.mousewheelEventsTarged)),
                                    t.off(x.mousewheel.event, d),
                                    x.params.mousewheelControl = !1,
                                    !0
                            },
                            x.enableMousewheelControl = function() {
                                if (!x.mousewheel.event) return ! 1;
                                var t = x.container;
                                return "container" !== x.params.mousewheelEventsTarged && (t = e(x.params.mousewheelEventsTarged)),
                                    t.on(x.mousewheel.event, d),
                                    x.params.mousewheelControl = !0,
                                    !0
                            },
                            x.parallax = {
                                setTranslate: function() {
                                    x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                        p(this, x.progress)
                                    }),
                                        x.slides.each(function() {
                                            var t = e(this);
                                            t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                                p(this, Math.min(Math.max(t[0].progress, -1), 1))
                                            })
                                        })
                                },
                                setTransition: function(t) {
                                    void 0 === t && (t = x.params.speed),
                                        x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                            var n = e(this),
                                                r = parseInt(n.attr("data-swiper-parallax-duration"), 10) || t;
                                            0 === t && (r = 0),
                                                n.transition(r)
                                        })
                                }
                            },
                            x.zoom = {
                                scale: 1,
                                currentScale: 1,
                                isScaling: !1,
                                gesture: {
                                    slide: void 0,
                                    slideWidth: void 0,
                                    slideHeight: void 0,
                                    image: void 0,
                                    imageWrap: void 0,
                                    zoomMax: x.params.zoomMax
                                },
                                image: {
                                    isTouched: void 0,
                                    isMoved: void 0,
                                    currentX: void 0,
                                    currentY: void 0,
                                    minX: void 0,
                                    minY: void 0,
                                    maxX: void 0,
                                    maxY: void 0,
                                    width: void 0,
                                    height: void 0,
                                    startX: void 0,
                                    startY: void 0,
                                    touchesStart: {},
                                    touchesCurrent: {}
                                },
                                velocity: {
                                    x: void 0,
                                    y: void 0,
                                    prevPositionX: void 0,
                                    prevPositionY: void 0,
                                    prevTime: void 0
                                },
                                getDistanceBetweenTouches: function(e) {
                                    if (e.targetTouches.length < 2) return 1;
                                    var t = e.targetTouches[0].pageX,
                                        n = e.targetTouches[0].pageY,
                                        r = e.targetTouches[1].pageX,
                                        i = e.targetTouches[1].pageY;
                                    return Math.sqrt(Math.pow(r - t, 2) + Math.pow(i - n, 2))
                                },
                                onGestureStart: function(t) {
                                    var n = x.zoom;
                                    if (!x.support.gestures) {
                                        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                                        n.gesture.scaleStart = n.getDistanceBetweenTouches(t)
                                    }
                                    if (! (n.gesture.slide && n.gesture.slide.length || (n.gesture.slide = e(this), 0 === n.gesture.slide.length && (n.gesture.slide = x.slides.eq(x.activeIndex)), n.gesture.image = n.gesture.slide.find("img, svg, canvas"), n.gesture.imageWrap = n.gesture.image.parent("." + x.params.zoomContainerClass), n.gesture.zoomMax = n.gesture.imageWrap.attr("data-swiper-zoom") || x.params.zoomMax, 0 !== n.gesture.imageWrap.length))) return void(n.gesture.image = void 0);
                                    n.gesture.image.transition(0),
                                        n.isScaling = !0
                                },
                                onGestureChange: function(e) {
                                    var t = x.zoom;
                                    if (!x.support.gestures) {
                                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                                        t.gesture.scaleMove = t.getDistanceBetweenTouches(e)
                                    }
                                    t.gesture.image && 0 !== t.gesture.image.length && (x.support.gestures ? t.scale = e.scale * t.currentScale: t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale, t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)), t.scale < x.params.zoomMin && (t.scale = x.params.zoomMin + 1 - Math.pow(x.params.zoomMin - t.scale + 1, .5)), t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                                },
                                onGestureEnd: function(e) {
                                    var t = x.zoom; ! x.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), x.params.zoomMin), t.gesture.image.transition(x.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"), t.currentScale = t.scale, t.isScaling = !1, 1 === t.scale && (t.gesture.slide = void 0))
                                },
                                onTouchStart: function(e, t) {
                                    var n = e.zoom;
                                    n.gesture.image && 0 !== n.gesture.image.length && (n.image.isTouched || ("android" === e.device.os && t.preventDefault(), n.image.isTouched = !0, n.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX: t.pageX, n.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY: t.pageY))
                                },
                                onTouchMove: function(e) {
                                    var t = x.zoom;
                                    if (t.gesture.image && 0 !== t.gesture.image.length && (x.allowClick = !1, t.image.isTouched && t.gesture.slide)) {
                                        t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth, t.image.height = t.gesture.image[0].offsetHeight, t.image.startX = x.getTranslate(t.gesture.imageWrap[0], "x") || 0, t.image.startY = x.getTranslate(t.gesture.imageWrap[0], "y") || 0, t.gesture.slideWidth = t.gesture.slide[0].offsetWidth, t.gesture.slideHeight = t.gesture.slide[0].offsetHeight, t.gesture.imageWrap.transition(0), x.rtl && (t.image.startX = -t.image.startX), x.rtl && (t.image.startY = -t.image.startY));
                                        var n = t.image.width * t.scale,
                                            r = t.image.height * t.scale;
                                        if (! (n < t.gesture.slideWidth && r < t.gesture.slideHeight)) {
                                            if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - n / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - r / 2, 0), t.image.maxY = -t.image.minY, t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX: e.pageX, t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY: e.pageY, !t.image.isMoved && !t.isScaling) {
                                                if (x.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x) return void(t.image.isTouched = !1);
                                                if (!x.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y) return void(t.image.isTouched = !1)
                                            }
                                            e.preventDefault(),
                                                e.stopPropagation(),
                                                t.image.isMoved = !0,
                                                t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX,
                                                t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY,
                                            t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)),
                                            t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)),
                                            t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)),
                                            t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)),
                                            t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x),
                                            t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y),
                                            t.velocity.prevTime || (t.velocity.prevTime = Date.now()),
                                                t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2,
                                                t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2,
                                            Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0),
                                            Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0),
                                                t.velocity.prevPositionX = t.image.touchesCurrent.x,
                                                t.velocity.prevPositionY = t.image.touchesCurrent.y,
                                                t.velocity.prevTime = Date.now(),
                                                t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                                        }
                                    }
                                },
                                onTouchEnd: function(e, t) {
                                    var n = e.zoom;
                                    if (n.gesture.image && 0 !== n.gesture.image.length) {
                                        if (!n.image.isTouched || !n.image.isMoved) return n.image.isTouched = !1,
                                            void(n.image.isMoved = !1);
                                        n.image.isTouched = !1,
                                            n.image.isMoved = !1;
                                        var r = 300,
                                            i = 300,
                                            a = n.velocity.x * r,
                                            o = n.image.currentX + a,
                                            s = n.velocity.y * i,
                                            l = n.image.currentY + s;
                                        0 !== n.velocity.x && (r = Math.abs((o - n.image.currentX) / n.velocity.x)),
                                        0 !== n.velocity.y && (i = Math.abs((l - n.image.currentY) / n.velocity.y));
                                        var u = Math.max(r, i);
                                        n.image.currentX = o,
                                            n.image.currentY = l;
                                        var c = n.image.width * n.scale,
                                            d = n.image.height * n.scale;
                                        n.image.minX = Math.min(n.gesture.slideWidth / 2 - c / 2, 0),
                                            n.image.maxX = -n.image.minX,
                                            n.image.minY = Math.min(n.gesture.slideHeight / 2 - d / 2, 0),
                                            n.image.maxY = -n.image.minY,
                                            n.image.currentX = Math.max(Math.min(n.image.currentX, n.image.maxX), n.image.minX),
                                            n.image.currentY = Math.max(Math.min(n.image.currentY, n.image.maxY), n.image.minY),
                                            n.gesture.imageWrap.transition(u).transform("translate3d(" + n.image.currentX + "px, " + n.image.currentY + "px,0)")
                                    }
                                },
                                onTransitionEnd: function(e) {
                                    var t = e.zoom;
                                    t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"), t.gesture.imageWrap.transform("translate3d(0,0,0)"), t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0, t.scale = t.currentScale = 1)
                                },
                                toggleZoom: function(t, n) {
                                    var r = t.zoom;
                                    if (r.gesture.slide || (r.gesture.slide = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), r.gesture.image = r.gesture.slide.find("img, svg, canvas"), r.gesture.imageWrap = r.gesture.image.parent("." + t.params.zoomContainerClass)), r.gesture.image && 0 !== r.gesture.image.length) {
                                        var i, a, o, s, l, u, c, d, p, f, h, m, g, v, y, w, b, x;
                                        void 0 === r.image.touchesStart.x && n ? (i = "touchend" === n.type ? n.changedTouches[0].pageX: n.pageX, a = "touchend" === n.type ? n.changedTouches[0].pageY: n.pageY) : (i = r.image.touchesStart.x, a = r.image.touchesStart.y),
                                            r.scale && 1 !== r.scale ? (r.scale = r.currentScale = 1, r.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), r.gesture.slide = void 0) : (r.scale = r.currentScale = r.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax, n ? (b = r.gesture.slide[0].offsetWidth, x = r.gesture.slide[0].offsetHeight, o = r.gesture.slide.offset().left, s = r.gesture.slide.offset().top, l = o + b / 2 - i, u = s + x / 2 - a, p = r.gesture.image[0].offsetWidth, f = r.gesture.image[0].offsetHeight, h = p * r.scale, m = f * r.scale, g = Math.min(b / 2 - h / 2, 0), v = Math.min(x / 2 - m / 2, 0), y = -g, w = -v, c = l * r.scale, d = u * r.scale, c < g && (c = g), c > y && (c = y), d < v && (d = v), d > w && (d = w)) : (c = 0, d = 0), r.gesture.imageWrap.transition(300).transform("translate3d(" + c + "px, " + d + "px,0)"), r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + r.scale + ")"))
                                    }
                                },
                                attachEvents: function(t) {
                                    var n = t ? "off": "on";
                                    if (x.params.zoom) {
                                        var r = (x.slides, !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                                            passive: !0,
                                            capture: !1
                                        });
                                        x.support.gestures ? (x.slides[n]("gesturestart", x.zoom.onGestureStart, r), x.slides[n]("gesturechange", x.zoom.onGestureChange, r), x.slides[n]("gestureend", x.zoom.onGestureEnd, r)) : "touchstart" === x.touchEvents.start && (x.slides[n](x.touchEvents.start, x.zoom.onGestureStart, r), x.slides[n](x.touchEvents.move, x.zoom.onGestureChange, r), x.slides[n](x.touchEvents.end, x.zoom.onGestureEnd, r)),
                                            x[n]("touchStart", x.zoom.onTouchStart),
                                            x.slides.each(function(t, r) {
                                                e(r).find("." + x.params.zoomContainerClass).length > 0 && e(r)[n](x.touchEvents.move, x.zoom.onTouchMove)
                                            }),
                                            x[n]("touchEnd", x.zoom.onTouchEnd),
                                            x[n]("transitionEnd", x.zoom.onTransitionEnd),
                                        x.params.zoomToggle && x.on("doubleTap", x.zoom.toggleZoom)
                                    }
                                },
                                init: function() {
                                    x.zoom.attachEvents()
                                },
                                destroy: function() {
                                    x.zoom.attachEvents(!0)
                                }
                            },
                            x._plugins = [];
                        for (var H in x.plugins) {
                            var B = x.plugins[H](x, x.params[H]);
                            B && x._plugins.push(B)
                        }
                        return x.callPlugins = function(e) {
                            for (var t = 0; t < x._plugins.length; t++) e in x._plugins[t] && x._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                        },
                            x.emitterEventListeners = {},
                            x.emit = function(e) {
                                x.params[e] && x.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                                var t;
                                if (x.emitterEventListeners[e]) for (t = 0; t < x.emitterEventListeners[e].length; t++) x.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                                x.callPlugins && x.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                            },
                            x.on = function(e, t) {
                                return e = f(e),
                                x.emitterEventListeners[e] || (x.emitterEventListeners[e] = []),
                                    x.emitterEventListeners[e].push(t),
                                    x
                            },
                            x.off = function(e, t) {
                                var n;
                                if (e = f(e), void 0 === t) return x.emitterEventListeners[e] = [],
                                    x;
                                if (x.emitterEventListeners[e] && 0 !== x.emitterEventListeners[e].length) {
                                    for (n = 0; n < x.emitterEventListeners[e].length; n++) x.emitterEventListeners[e][n] === t && x.emitterEventListeners[e].splice(n, 1);
                                    return x
                                }
                            },
                            x.once = function(e, t) {
                                e = f(e);
                                var n = function() {
                                    t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
                                        x.off(e, n)
                                };
                                return x.on(e, n),
                                    x
                            },
                            x.a11y = {
                                makeFocusable: function(e) {
                                    return e.attr("tabIndex", "0"),
                                        e
                                },
                                addRole: function(e, t) {
                                    return e.attr("role", t),
                                        e
                                },
                                addLabel: function(e, t) {
                                    return e.attr("aria-label", t),
                                        e
                                },
                                disable: function(e) {
                                    return e.attr("aria-disabled", !0),
                                        e
                                },
                                enable: function(e) {
                                    return e.attr("aria-disabled", !1),
                                        e
                                },
                                onEnterKey: function(t) {
                                    13 === t.keyCode && (e(t.target).is(x.params.nextButton) ? (x.onClickNext(t), x.isEnd ? x.a11y.notify(x.params.lastSlideMessage) : x.a11y.notify(x.params.nextSlideMessage)) : e(t.target).is(x.params.prevButton) && (x.onClickPrev(t), x.isBeginning ? x.a11y.notify(x.params.firstSlideMessage) : x.a11y.notify(x.params.prevSlideMessage)), e(t.target).is("." + x.params.bulletClass) && e(t.target)[0].click())
                                },
                                liveRegion: e('<span class="' + x.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                                notify: function(e) {
                                    var t = x.a11y.liveRegion;
                                    0 !== t.length && (t.html(""), t.html(e))
                                },
                                init: function() {
                                    x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.a11y.makeFocusable(x.nextButton), x.a11y.addRole(x.nextButton, "button"), x.a11y.addLabel(x.nextButton, x.params.nextSlideMessage)),
                                    x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.a11y.makeFocusable(x.prevButton), x.a11y.addRole(x.prevButton, "button"), x.a11y.addLabel(x.prevButton, x.params.prevSlideMessage)),
                                        e(x.container).append(x.a11y.liveRegion)
                                },
                                initPagination: function() {
                                    x.params.pagination && x.params.paginationClickable && x.bullets && x.bullets.length && x.bullets.each(function() {
                                        var t = e(this);
                                        x.a11y.makeFocusable(t),
                                            x.a11y.addRole(t, "button"),
                                            x.a11y.addLabel(t, x.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                                    })
                                },
                                destroy: function() {
                                    x.a11y.liveRegion && x.a11y.liveRegion.length > 0 && x.a11y.liveRegion.remove()
                                }
                            },
                            x.init = function() {
                                x.params.loop && x.createLoop(),
                                    x.updateContainerSize(),
                                    x.updateSlidesSize(),
                                    x.updatePagination(),
                                x.params.scrollbar && x.scrollbar && (x.scrollbar.set(), x.params.scrollbarDraggable && x.scrollbar.enableDraggable()),
                                "slide" !== x.params.effect && x.effects[x.params.effect] && (x.params.loop || x.updateProgress(), x.effects[x.params.effect].setTranslate()),
                                    x.params.loop ? x.slideTo(x.params.initialSlide + x.loopedSlides, 0, x.params.runCallbacksOnInit) : (x.slideTo(x.params.initialSlide, 0, x.params.runCallbacksOnInit), 0 === x.params.initialSlide && (x.parallax && x.params.parallax && x.parallax.setTranslate(), x.lazy && x.params.lazyLoading && (x.lazy.load(), x.lazy.initialImageLoaded = !0))),
                                    x.attachEvents(),
                                x.params.observer && x.support.observer && x.initObservers(),
                                x.params.preloadImages && !x.params.lazyLoading && x.preloadImages(),
                                x.params.zoom && x.zoom && x.zoom.init(),
                                x.params.autoplay && x.startAutoplay(),
                                x.params.keyboardControl && x.enableKeyboardControl && x.enableKeyboardControl(),
                                x.params.mousewheelControl && x.enableMousewheelControl && x.enableMousewheelControl(),
                                x.params.hashnavReplaceState && (x.params.replaceState = x.params.hashnavReplaceState),
                                x.params.history && x.history && x.history.init(),
                                x.params.hashnav && x.hashnav && x.hashnav.init(),
                                x.params.a11y && x.a11y && x.a11y.init(),
                                    x.emit("onInit", x)
                            },
                            x.cleanupStyles = function() {
                                x.container.removeClass(x.classNames.join(" ")).removeAttr("style"),
                                    x.wrapper.removeAttr("style"),
                                x.slides && x.slides.length && x.slides.removeClass([x.params.slideVisibleClass, x.params.slideActiveClass, x.params.slideNextClass, x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
                                x.paginationContainer && x.paginationContainer.length && x.paginationContainer.removeClass(x.params.paginationHiddenClass),
                                x.bullets && x.bullets.length && x.bullets.removeClass(x.params.bulletActiveClass),
                                x.params.prevButton && e(x.params.prevButton).removeClass(x.params.buttonDisabledClass),
                                x.params.nextButton && e(x.params.nextButton).removeClass(x.params.buttonDisabledClass),
                                x.params.scrollbar && x.scrollbar && (x.scrollbar.track && x.scrollbar.track.length && x.scrollbar.track.removeAttr("style"), x.scrollbar.drag && x.scrollbar.drag.length && x.scrollbar.drag.removeAttr("style"))
                            },
                            x.destroy = function(e, t) {
                                x.detachEvents(),
                                    x.stopAutoplay(),
                                x.params.scrollbar && x.scrollbar && x.params.scrollbarDraggable && x.scrollbar.disableDraggable(),
                                x.params.loop && x.destroyLoop(),
                                t && x.cleanupStyles(),
                                    x.disconnectObservers(),
                                x.params.zoom && x.zoom && x.zoom.destroy(),
                                x.params.keyboardControl && x.disableKeyboardControl && x.disableKeyboardControl(),
                                x.params.mousewheelControl && x.disableMousewheelControl && x.disableMousewheelControl(),
                                x.params.a11y && x.a11y && x.a11y.destroy(),
                                x.params.history && !x.params.replaceState && window.removeEventListener("popstate", x.history.setHistoryPopState),
                                x.params.hashnav && x.hashnav && x.hashnav.destroy(),
                                    x.emit("onDestroy"),
                                !1 !== e && (x = null)
                            },
                            x.init(),
                            x
                    }
                };
                t.prototype = {
                    isSafari: function() {
                        var e = window.navigator.userAgent.toLowerCase();
                        return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                    } (),
                    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
                    isArray: function(e) {
                        return "[object Array]" === Object.prototype.toString.apply(e)
                    },
                    browser: {
                        ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                        ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
                        lteIE9: function() {
                            var e = document.createElement("div");
                            return e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e",
                            1 === e.getElementsByTagName("i").length
                        } ()
                    },
                    device: function() {
                        var e = window.navigator.userAgent,
                            t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                            n = e.match(/(iPad).*OS\s([\d_]+)/),
                            r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                            i = !n && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                        return {
                            ios: n || i || r,
                            android: t
                        }
                    } (),
                    support: {
                        touch: window.Modernizr && !0 === Modernizr.touch ||
                            function() {
                                return !! ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
                            } (),
                        transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d ||
                            function() {
                                var e = document.createElement("div").style;
                                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
                            } (),
                        flexbox: function() {
                            for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n++) if (t[n] in e) return ! 0
                        } (),
                        observer: function() {
                            return "MutationObserver" in window || "WebkitMutationObserver" in window
                        } (),
                        passiveListener: function() {
                            var e = !1;
                            try {
                                var t = Object.defineProperty({},
                                    "passive", {
                                        get: function() {
                                            e = !0
                                        }
                                    });
                                window.addEventListener("testPassiveListener", null, t)
                            } catch(e) {}
                            return e
                        } (),
                        gestures: function() {
                            return "ongesturestart" in window
                        } ()
                    },
                    plugins: {}
                };
                for (var n = (function() {
                    var e = function(e) {
                            var t = this,
                                n = 0;
                            for (n = 0; n < e.length; n++) t[n] = e[n];
                            return t.length = e.length,
                                this
                        },
                        t = function(t, n) {
                            var r = [],
                                i = 0;
                            if (t && !n && t instanceof e) return t;
                            if (t) if ("string" == typeof t) {
                                var a, o, s = t.trim();
                                if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                                    var l = "div";
                                    for (0 === s.indexOf("<li") && (l = "ul"), 0 === s.indexOf("<tr") && (l = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (l = "tr"), 0 === s.indexOf("<tbody") && (l = "table"), 0 === s.indexOf("<option") && (l = "select"), o = document.createElement(l), o.innerHTML = t, i = 0; i < o.childNodes.length; i++) r.push(o.childNodes[i])
                                } else for (a = n || "#" !== t[0] || t.match(/[ .<>:~]/) ? (n || document).querySelectorAll(t) : [document.getElementById(t.split("#")[1])], i = 0; i < a.length; i++) a[i] && r.push(a[i])
                            } else if (t.nodeType || t === window || t === document) r.push(t);
                            else if (t.length > 0 && t[0].nodeType) for (i = 0; i < t.length; i++) r.push(t[i]);
                            return new e(r)
                        };
                    return e.prototype = {
                        addClass: function(e) {
                            if (void 0 === e) return this;
                            for (var t = e.split(" "), n = 0; n < t.length; n++) for (var r = 0; r < this.length; r++) this[r].classList.add(t[n]);
                            return this
                        },
                        removeClass: function(e) {
                            for (var t = e.split(" "), n = 0; n < t.length; n++) for (var r = 0; r < this.length; r++) this[r].classList.remove(t[n]);
                            return this
                        },
                        hasClass: function(e) {
                            return !! this[0] && this[0].classList.contains(e)
                        },
                        toggleClass: function(e) {
                            for (var t = e.split(" "), n = 0; n < t.length; n++) for (var r = 0; r < this.length; r++) this[r].classList.toggle(t[n]);
                            return this
                        },
                        attr: function(e, t) {
                            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                            for (var n = 0; n < this.length; n++) if (2 === arguments.length) this[n].setAttribute(e, t);
                            else for (var r in e) this[n][r] = e[r],
                                    this[n].setAttribute(r, e[r]);
                            return this
                        },
                        removeAttr: function(e) {
                            for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
                            return this
                        },
                        data: function(e, t) {
                            if (void 0 !== t) {
                                for (var n = 0; n < this.length; n++) {
                                    var r = this[n];
                                    r.dom7ElementDataStorage || (r.dom7ElementDataStorage = {}),
                                        r.dom7ElementDataStorage[e] = t
                                }
                                return this
                            }
                            if (this[0]) {
                                var i = this[0].getAttribute("data-" + e);
                                return i || (this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0)
                            }
                        },
                        transform: function(e) {
                            for (var t = 0; t < this.length; t++) {
                                var n = this[t].style;
                                n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
                            }
                            return this
                        },
                        transition: function(e) {
                            "string" != typeof e && (e += "ms");
                            for (var t = 0; t < this.length; t++) {
                                var n = this[t].style;
                                n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
                            }
                            return this
                        },
                        on: function(e, n, r, i) {
                            function a(e) {
                                var i = e.target;
                                if (t(i).is(n)) r.call(i, e);
                                else for (var a = t(i).parents(), o = 0; o < a.length; o++) t(a[o]).is(n) && r.call(a[o], e)
                            }
                            var o, s, l = e.split(" ");
                            for (o = 0; o < this.length; o++) if ("function" == typeof n || !1 === n) for ("function" == typeof n && (r = arguments[1], i = arguments[2] || !1), s = 0; s < l.length; s++) this[o].addEventListener(l[s], r, i);
                            else for (s = 0; s < l.length; s++) this[o].dom7LiveListeners || (this[o].dom7LiveListeners = []),
                                    this[o].dom7LiveListeners.push({
                                        listener: r,
                                        liveListener: a
                                    }),
                                    this[o].addEventListener(l[s], a, i);
                            return this
                        },
                        off: function(e, t, n, r) {
                            for (var i = e.split(" "), a = 0; a < i.length; a++) for (var o = 0; o < this.length; o++) if ("function" == typeof t || !1 === t)"function" == typeof t && (n = arguments[1], r = arguments[2] || !1),
                                this[o].removeEventListener(i[a], n, r);
                            else if (this[o].dom7LiveListeners) for (var s = 0; s < this[o].dom7LiveListeners.length; s++) this[o].dom7LiveListeners[s].listener === n && this[o].removeEventListener(i[a], this[o].dom7LiveListeners[s].liveListener, r);
                            return this
                        },
                        once: function(e, t, n, r) {
                            function i(o) {
                                n(o),
                                    a.off(e, t, i, r)
                            }
                            var a = this;
                            "function" == typeof t && (t = !1, n = arguments[1], r = arguments[2]),
                                a.on(e, t, i, r)
                        },
                        trigger: function(e, t) {
                            for (var n = 0; n < this.length; n++) {
                                var r;
                                try {
                                    r = new window.CustomEvent(e, {
                                        detail: t,
                                        bubbles: !0,
                                        cancelable: !0
                                    })
                                } catch(n) {
                                    r = document.createEvent("Event"),
                                        r.initEvent(e, !0, !0),
                                        r.detail = t
                                }
                                this[n].dispatchEvent(r)
                            }
                            return this
                        },
                        transitionEnd: function(e) {
                            function t(a) {
                                if (a.target === this) for (e.call(this, a), n = 0; n < r.length; n++) i.off(r[n], t)
                            }
                            var n, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                                i = this;
                            if (e) for (n = 0; n < r.length; n++) i.on(r[n], t);
                            return this
                        },
                        width: function() {
                            return this[0] === window ? window.innerWidth: this.length > 0 ? parseFloat(this.css("width")) : null
                        },
                        outerWidth: function(e) {
                            return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth: null
                        },
                        height: function() {
                            return this[0] === window ? window.innerHeight: this.length > 0 ? parseFloat(this.css("height")) : null
                        },
                        outerHeight: function(e) {
                            return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight: null
                        },
                        offset: function() {
                            if (this.length > 0) {
                                var e = this[0],
                                    t = e.getBoundingClientRect(),
                                    n = document.body,
                                    r = e.clientTop || n.clientTop || 0,
                                    i = e.clientLeft || n.clientLeft || 0,
                                    a = window.pageYOffset || e.scrollTop,
                                    o = window.pageXOffset || e.scrollLeft;
                                return {
                                    top: t.top + a - r,
                                    left: t.left + o - i
                                }
                            }
                            return null
                        },
                        css: function(e, t) {
                            var n;
                            if (1 === arguments.length) {
                                if ("string" != typeof e) {
                                    for (n = 0; n < this.length; n++) for (var r in e) this[n].style[r] = e[r];
                                    return this
                                }
                                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
                            }
                            if (2 === arguments.length && "string" == typeof e) {
                                for (n = 0; n < this.length; n++) this[n].style[e] = t;
                                return this
                            }
                            return this
                        },
                        each: function(e) {
                            for (var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
                            return this
                        },
                        html: function(e) {
                            if (void 0 === e) return this[0] ? this[0].innerHTML: void 0;
                            for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                            return this
                        },
                        text: function(e) {
                            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                            for (var t = 0; t < this.length; t++) this[t].textContent = e;
                            return this
                        },
                        is: function(n) {
                            if (!this[0]) return ! 1;
                            var r, i;
                            if ("string" == typeof n) {
                                var a = this[0];
                                if (a === document) return n === document;
                                if (a === window) return n === window;
                                if (a.matches) return a.matches(n);
                                if (a.webkitMatchesSelector) return a.webkitMatchesSelector(n);
                                if (a.mozMatchesSelector) return a.mozMatchesSelector(n);
                                if (a.msMatchesSelector) return a.msMatchesSelector(n);
                                for (r = t(n), i = 0; i < r.length; i++) if (r[i] === this[0]) return ! 0;
                                return ! 1
                            }
                            if (n === document) return this[0] === document;
                            if (n === window) return this[0] === window;
                            if (n.nodeType || n instanceof e) {
                                for (r = n.nodeType ? [n] : n, i = 0; i < r.length; i++) if (r[i] === this[0]) return ! 0;
                                return ! 1
                            }
                            return ! 1
                        },
                        index: function() {
                            if (this[0]) {
                                for (var e = this[0], t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && t++;
                                return t
                            }
                        },
                        eq: function(t) {
                            if (void 0 === t) return this;
                            var n, r = this.length;
                            return t > r - 1 ? new e([]) : t < 0 ? (n = r + t, new e(n < 0 ? [] : [this[n]])) : new e([this[t]])
                        },
                        append: function(t) {
                            var n, r;
                            for (n = 0; n < this.length; n++) if ("string" == typeof t) {
                                var i = document.createElement("div");
                                for (i.innerHTML = t; i.firstChild;) this[n].appendChild(i.firstChild)
                            } else if (t instanceof e) for (r = 0; r < t.length; r++) this[n].appendChild(t[r]);
                            else this[n].appendChild(t);
                            return this
                        },
                        prepend: function(t) {
                            var n, r;
                            for (n = 0; n < this.length; n++) if ("string" == typeof t) {
                                var i = document.createElement("div");
                                for (i.innerHTML = t, r = i.childNodes.length - 1; r >= 0; r--) this[n].insertBefore(i.childNodes[r], this[n].childNodes[0])
                            } else if (t instanceof e) for (r = 0; r < t.length; r++) this[n].insertBefore(t[r], this[n].childNodes[0]);
                            else this[n].insertBefore(t, this[n].childNodes[0]);
                            return this
                        },
                        insertBefore: function(e) {
                            for (var n = t(e), r = 0; r < this.length; r++) if (1 === n.length) n[0].parentNode.insertBefore(this[r], n[0]);
                            else if (n.length > 1) for (var i = 0; i < n.length; i++) n[i].parentNode.insertBefore(this[r].cloneNode(!0), n[i])
                        },
                        insertAfter: function(e) {
                            for (var n = t(e), r = 0; r < this.length; r++) if (1 === n.length) n[0].parentNode.insertBefore(this[r], n[0].nextSibling);
                            else if (n.length > 1) for (var i = 0; i < n.length; i++) n[i].parentNode.insertBefore(this[r].cloneNode(!0), n[i].nextSibling)
                        },
                        next: function(n) {
                            return new e(this.length > 0 ? n ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(n) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                        },
                        nextAll: function(n) {
                            var r = [],
                                i = this[0];
                            if (!i) return new e([]);
                            for (; i.nextElementSibling;) {
                                var a = i.nextElementSibling;
                                n ? t(a).is(n) && r.push(a) : r.push(a),
                                    i = a
                            }
                            return new e(r)
                        },
                        prev: function(n) {
                            return new e(this.length > 0 ? n ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(n) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
                        },
                        prevAll: function(n) {
                            var r = [],
                                i = this[0];
                            if (!i) return new e([]);
                            for (; i.previousElementSibling;) {
                                var a = i.previousElementSibling;
                                n ? t(a).is(n) && r.push(a) : r.push(a),
                                    i = a
                            }
                            return new e(r)
                        },
                        parent: function(e) {
                            for (var n = [], r = 0; r < this.length; r++) e ? t(this[r].parentNode).is(e) && n.push(this[r].parentNode) : n.push(this[r].parentNode);
                            return t(t.unique(n))
                        },
                        parents: function(e) {
                            for (var n = [], r = 0; r < this.length; r++) for (var i = this[r].parentNode; i;) e ? t(i).is(e) && n.push(i) : n.push(i),
                                i = i.parentNode;
                            return t(t.unique(n))
                        },
                        find: function(t) {
                            for (var n = [], r = 0; r < this.length; r++) for (var i = this[r].querySelectorAll(t), a = 0; a < i.length; a++) n.push(i[a]);
                            return new e(n)
                        },
                        children: function(n) {
                            for (var r = [], i = 0; i < this.length; i++) for (var a = this[i].childNodes, o = 0; o < a.length; o++) n ? 1 === a[o].nodeType && t(a[o]).is(n) && r.push(a[o]) : 1 === a[o].nodeType && r.push(a[o]);
                            return new e(t.unique(r))
                        },
                        remove: function() {
                            for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                            return this
                        },
                        add: function() {
                            var e, n, r = this;
                            for (e = 0; e < arguments.length; e++) {
                                var i = t(arguments[e]);
                                for (n = 0; n < i.length; n++) r[r.length] = i[n],
                                    r.length++
                            }
                            return r
                        }
                    },
                        t.fn = e.prototype,
                        t.unique = function(e) {
                            for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]);
                            return t
                        },
                        t
                } ()), r = ["jQuery", "Zepto", "Dom7"], i = 0; i < r.length; i++) window[r[i]] &&
                function(e) {
                    e.fn.swiper = function(n) {
                        var r;
                        return e(this).each(function() {
                            var e = new t(this, n);
                            r || (r = e)
                        }),
                            r
                    }
                } (window[r[i]]);
                var a;
                a = void 0 === n ? window.Dom7 || window.Zepto || window.jQuery: n,
                a && ("transitionEnd" in a.fn || (a.fn.transitionEnd = function(e) {
                    function t(a) {
                        if (a.target === this) for (e.call(this, a), n = 0; n < r.length; n++) i.off(r[n], t)
                    }
                    var n, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                        i = this;
                    if (e) for (n = 0; n < r.length; n++) i.on(r[n], t);
                    return this
                }), "transform" in a.fn || (a.fn.transform = function(e) {
                    for (var t = 0; t < this.length; t++) {
                        var n = this[t].style;
                        n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
                    }
                    return this
                }), "transition" in a.fn || (a.fn.transition = function(e) {
                    "string" != typeof e && (e += "ms");
                    for (var t = 0; t < this.length; t++) {
                        var n = this[t].style;
                        n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
                    }
                    return this
                }), "outerWidth" in a.fn || (a.fn.outerWidth = function(e) {
                    return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth: null
                })),
                    window.Swiper = t
            } (),
            e.exports = window.Swiper
        },
        ,
        function(e, t, n) {
            var r = n(24),
                i = n(25),
                a = n(15),
                o = n(40),
                s = n(9),
                l = n(46),
                u = Object.getOwnPropertyDescriptor;
            t.f = n(8) ? u: function(e, t) {
                if (e = a(e), t = o(t, !0), l) try {
                    return u(e, t)
                } catch(e) {}
                if (s(e, t)) return i(!r.f.call(e, t), e[t])
            }
        },
        , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
        function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e: {
                    default:
                    e
                }
            }
            var i, a = n(17),
                o = r(a),
                s = n(5),
                l = r(s); !
                function(r) {
                    var a = document,
                        s = "getElementsByClassName",
                        u = function(e) {
                            return a.querySelectorAll(e)
                        },
                        c = {
                            type: 0,
                            shade: !0,
                            shadeClose: !0,
                            fixed: !0,
                            anim: "scale"
                        },
                        d = {
                            extend: function(e) {
                                var t = JSON.parse((0, l.
                                    default)(c));
                                for (var n in e) t[n] = e[n];
                                return t
                            },
                            timer: {},
                            end: {}
                        };
                    d.touch = function(e, t) {
                        e.addEventListener("click",
                            function(e) {
                                t.call(this, e)
                            },
                            !1)
                    };
                    var p = 0,
                        f = ["layui-m-layer"],
                        h = function(e) {
                            var t = this;
                            t.config = d.extend(e),
                                t.view()
                        };
                    h.prototype.view = function() {
                        var e = this,
                            t = e.config,
                            n = a.createElement("div");
                        e.id = n.id = f[0] + p,
                            n.setAttribute("class", f[0] + " " + f[0] + (t.type || 0)),
                            n.setAttribute("index", p);
                        var r = function() {
                                var e = "object" == (0, o.
                                    default)(t.title);
                                return t.title ? '<h3 style="' + (e ? t.title[1] : "") + '">' + (e ? t.title[0] : t.title) + "</h3>": ""
                            } (),
                            i = function() {
                                "string" == typeof t.btn && (t.btn = [t.btn]);
                                var e, n = (t.btn || []).length;
                                return 0 !== n && t.btn ? (e = '<span yes type="1">' + t.btn[0] + "</span>", 2 === n && (e = '<span no type="0">' + t.btn[1] + "</span>" + e), '<div class="layui-m-layerbtn">' + e + "</div>") : ""
                            } ();
                        if (t.fixed || (t.top = t.hasOwnProperty("top") ? t.top: 100, t.style = t.style || "", t.style += " top:" + (a.body.scrollTop + t.top) + "px"), 2 === t.type && (t.content = '<i></i><i class="layui-m-layerload"></i><i></i><p>' + (t.content || "") + "</p>"), t.skin && (t.anim = "up"), "msg" === t.skin && (t.shade = !1), n.innerHTML = (t.shade ? "<div " + ("string" == typeof t.shade ? 'style="' + t.shade + '"': "") + ' class="layui-m-layershade"></div>': "") + '<div class="layui-m-layermain" ' + (t.fixed ? "": 'style="position:static;"') + '><div class="layui-m-layersection"><div class="layui-m-layerchild ' + (t.skin ? "layui-m-layer-" + t.skin + " ": "") + (t.className ? t.className: "") + " " + (t.anim ? "layui-m-anim-" + t.anim: "") + '" ' + (t.style ? 'style="' + t.style + '"': "") + ">" + r + '<div class="layui-m-layercont">' + t.content + "</div>" + i + "</div></div></div>", !t.type || 2 === t.type) {
                            var l = a[s](f[0] + t.type);
                            l.length >= 1 && layer.close(l[0].getAttribute("index"))
                        }
                        document.body.appendChild(n);
                        var c = e.elem = u("#" + e.id)[0];
                        t.success && t.success(c),
                            e.index = p++,
                            e.action(t, c)
                    },
                        h.prototype.action = function(e, t) {
                            var n = this;
                            e.time && (d.timer[n.index] = setTimeout(function() {
                                    layer.close(n.index)
                                },
                                1e3 * e.time));
                            var r = function() {
                                0 == this.getAttribute("type") ? (e.no && e.no(), layer.close(n.index)) : e.yes ? e.yes(n.index) : layer.close(n.index)
                            };
                            if (e.btn) for (var i = t[s]("layui-m-layerbtn")[0].children, a = i.length, o = 0; o < a; o++) d.touch(i[o], r);
                            if (e.shade && e.shadeClose) {
                                var l = t[s]("layui-m-layershade")[0];
                                d.touch(l,
                                    function() {
                                        layer.close(n.index, e.end)
                                    })
                            }
                            e.end && (d.end[n.index] = e.end)
                        },
                        r.layer = {
                            v: "2.0",
                            index: p,
                            open: function(e) {
                                return new h(e || {}).index
                            },
                            close: function(e) {
                                var t = u("#" + f[0] + e)[0];
                                t && (t.innerHTML = "", a.body.removeChild(t), clearTimeout(d.timer[e]), delete d.timer[e], "function" == typeof d.end[e] && d.end[e](), delete d.end[e])
                            },
                            closeAll: function() {
                                for (var e = a[s](f[0]), t = 0, n = e.length; t < n; t++) layer.close(0 | e[0].getAttribute("index"))
                            }
                        },
                    void 0 !== (i = function() {
                        return layer
                    }.call(t, n, t, e)) && (e.exports = i)
                } (window)
        },
        function(e, t, n) {
            "use strict";
            var r = n(28);
            "function" != typeof
                function(e) {
                    return e && e.__esModule ? e: {
                        default:
                        e
                    }
                } (r).
                    default && (Object.assign = function(e) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                e = Object(e);
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (null != n) for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            })
        },
        function(e, t, n) {
            "use strict";
            String.prototype.left = function(e) {
                return this.substr(0, e)
            },
                String.prototype.right = function(e) {
                    return this.substr(this.length - e)
                },
                String.prototype.format = function() {
                    var e = arguments;
                    return this.replace(/{(\d+)}/g,
                        function(t, n) {
                            return e[n]
                        })
                },
                String.prototype.byteLength = function() {
                    return this.replace(/[^\x00-\xff]/g, "**").length
                },
                String.prototype.byteLeft = function(e) {
                    for (var t = this; t.byteLength() > e;) t = t.left(t.length - 1);
                    return t
                },
                String.prototype.startWith = function(e) {
                    return 0 == this.indexOf(e)
                },
                String.prototype.endWith = function(e) {
                    return this.length - e.length >= 0 && this.lastIndexOf(e) == this.length - e.length
                },
                String.prototype.contain = function(e) {
                    return - 1 != this.indexOf(e)
                },
                String.prototype.addEnd = function(e) {
                    return this.endWith(e) ? this: this + e
                },
                String.prototype.FilterHtml = function() {
                    return this.replace(/<\/?[a-z][^<>]*>/gi, "").replace(/&[a-z]+;/gi, "")
                },
                String.prototype.FilterSpeChar = function(e) {
                    return this.replace(/[^0-9a-z\u4e00-\u9fa5]/gi,
                        function(t) {
                            return - 1 != (e || "").indexOf(t) ? t: ""
                        })
                },
                String.prototype.FilterSpeChar = function(e) {
                    return this.replace(/[^0-9a-z\u4e00-\u9fa5]/gi,
                        function(t) {
                            return - 1 != (e || "").indexOf(t) ? t: ""
                        })
                },
                String.prototype.fixNumber = function() {
                    return this.replace(/[\uff10-\uff19]/gi,
                        function(e) {
                            return "０１２３４５６７８９".indexOf(e).toString()
                        })
                },
                String.prototype.addEnd = function(e) {
                    return this.endWith(e) ? this: this + e
                },
                String.prototype.padLeft = function(e, t) {
                    return e.repeat(this.length > t ? 0 : t - this.length) + this
                },
            String.prototype.repeat || (String.prototype.repeat = function(e) {
                if (null == this) throw new TypeError("can't convert " + this + " to object");
                var t = "" + this;
                if (e = +e, e != e && (e = 0), e < 0) throw new RangeError("repeat count must be non-negative");
                if (e == 1 / 0) throw new RangeError("repeat count must be less than infinity");
                if (e = Math.floor(e), 0 == t.length || 0 == e) return "";
                if (t.length * e >= 1 << 28) throw new RangeError("repeat count must not overflow maximum string size");
                for (var n = ""; 1 == (1 & e) && (n += t), 0 != (e >>>= 1);) t += t;
                return n
            }),
            String.prototype.includes || (String.prototype.includes = function(e, t) {
                return "number" != typeof t && (t = 0),
                !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
            })
        },
        function(e, t, n) {
            e.exports = {
                default:
                    n(135),
                __esModule: !0
            }
        },
        function(e, t, n) {
            e.exports = {
                default:
                    n(136),
                __esModule: !0
            }
        },
        , ,
        function(e, t, n) {
            var r = n(3),
                i = r.JSON || (r.JSON = {
                    stringify: JSON.stringify
                });
            e.exports = function(e) {
                return i.stringify.apply(i, arguments)
            }
        },
        function(e, t, n) {
            n(162),
                e.exports = n(3).Object.assign
        },
        function(e, t, n) {
            n(59),
                n(60),
                n(61),
                n(163),
                n(165),
                n(166),
                e.exports = n(3).Promise
        },
        function(e, t, n) {
            n(164),
                n(59),
                n(167),
                n(168),
                e.exports = n(3).Symbol
        },
        function(e, t, n) {
            n(60),
                n(61),
                e.exports = n(42).f("iterator")
        },
        function(e, t) {
            e.exports = function() {}
        },
        function(e, t) {
            e.exports = function(e, t, n, r) {
                if (! (e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
                return e
            }
        },
        function(e, t, n) {
            var r = n(15),
                i = n(57),
                a = n(158);
            e.exports = function(e) {
                return function(t, n, o) {
                    var s, l = r(t),
                        u = i(l.length),
                        c = a(o, u);
                    if (e && n != n) {
                        for (; u > c;) if ((s = l[c++]) != s) return ! 0
                    } else for (; u > c; c++) if ((e || c in l) && l[c] === n) return e || c || 0;
                    return ! e && -1
                }
            }
        },
        function(e, t, n) {
            var r = n(23),
                i = n(36),
                a = n(24);
            e.exports = function(e) {
                var t = r(e),
                    n = i.f;
                if (n) for (var o, s = n(e), l = a.f, u = 0; s.length > u;) l.call(e, o = s[u++]) && t.push(o);
                return t
            }
        },
        function(e, t, n) {
            var r = n(22),
                i = n(145),
                a = n(143),
                o = n(7),
                s = n(57),
                l = n(160),
                u = {},
                c = {},
                t = e.exports = function(e, t, n, d, p) {
                    var f, h, m, g, v = p ?
                        function() {
                            return e
                        }: l(e),
                        y = r(n, d, t ? 2 : 1),
                        w = 0;
                    if ("function" != typeof v) throw TypeError(e + " is not iterable!");
                    if (a(v)) {
                        for (f = s(e.length); f > w; w++) if ((g = t ? y(o(h = e[w])[0], h[1]) : y(e[w])) === u || g === c) return g
                    } else for (m = v.call(e); ! (h = m.next()).done;) if ((g = i(m, y, h.value, t)) === u || g === c) return g
                };
            t.BREAK = u,
                t.RETURN = c
        },
        function(e, t) {
            e.exports = function(e, t, n) {
                var r = void 0 === n;
                switch (t.length) {
                    case 0:
                        return r ? e() : e.call(n);
                    case 1:
                        return r ? e(t[0]) : e.call(n, t[0]);
                    case 2:
                        return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                    case 3:
                        return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                    case 4:
                        return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
                }
                return e.apply(n, t)
            }
        },
        function(e, t, n) {
            var r = n(19),
                i = n(2)("iterator"),
                a = Array.prototype;
            e.exports = function(e) {
                return void 0 !== e && (r.Array === e || a[i] === e)
            }
        },
        function(e, t, n) {
            var r = n(18);
            e.exports = Array.isArray ||
                function(e) {
                    return "Array" == r(e)
                }
        },
        function(e, t, n) {
            var r = n(7);
            e.exports = function(e, t, n, i) {
                try {
                    return i ? t(r(n)[0], n[1]) : t(n)
                } catch(t) {
                    var a = e.
                        return;
                    throw void 0 !== a && r(a.call(e)),
                        t
                }
            }
        },
        function(e, t, n) {
            "use strict";
            var r = n(49),
                i = n(25),
                a = n(26),
                o = {};
            n(10)(o, n(2)("iterator"),
                function() {
                    return this
                }),
                e.exports = function(e, t, n) {
                    e.prototype = r(o, {
                        next: i(1, n)
                    }),
                        a(e, t + " Iterator")
                }
        },
        function(e, t, n) {
            var r = n(2)("iterator"),
                i = !1;
            try {
                var a = [7][r]();
                a.
                    return = function() {
                    i = !0
                },
                    Array.from(a,
                        function() {
                            throw 2
                        })
            } catch(e) {}
            e.exports = function(e, t) {
                if (!t && !i) return ! 1;
                var n = !1;
                try {
                    var a = [7],
                        o = a[r]();
                    o.next = function() {
                        return {
                            done: n = !0
                        }
                    },
                        a[r] = function() {
                            return o
                        },
                        e(a)
                } catch(e) {}
                return n
            }
        },
        function(e, t) {
            e.exports = function(e, t) {
                return {
                    value: t,
                    done: !!e
                }
            }
        },
        function(e, t, n) {
            var r = n(27)("meta"),
                i = n(11),
                a = n(9),
                o = n(12).f,
                s = 0,
                l = Object.isExtensible ||
                    function() {
                        return ! 0
                    },
                u = !n(16)(function() {
                    return l(Object.preventExtensions({}))
                }),
                c = function(e) {
                    o(e, r, {
                        value: {
                            i: "O" + ++s,
                            w: {}
                        }
                    })
                },
                d = function(e, t) {
                    if (!i(e)) return "symbol" == typeof e ? e: ("string" == typeof e ? "S": "P") + e;
                    if (!a(e, r)) {
                        if (!l(e)) return "F";
                        if (!t) return "E";
                        c(e)
                    }
                    return e[r].i
                },
                p = function(e, t) {
                    if (!a(e, r)) {
                        if (!l(e)) return ! 0;
                        if (!t) return ! 1;
                        c(e)
                    }
                    return e[r].w
                },
                f = function(e) {
                    return u && h.NEED && l(e) && !a(e, r) && c(e),
                        e
                },
                h = e.exports = {
                    KEY: r,
                    NEED: !1,
                    fastKey: d,
                    getWeak: p,
                    onFreeze: f
                }
        },
        function(e, t, n) {
            var r = n(1),
                i = n(56).set,
                a = r.MutationObserver || r.WebKitMutationObserver,
                o = r.process,
                s = r.Promise,
                l = "process" == n(18)(o);
            e.exports = function() {
                var e, t, n, u = function() {
                    var r, i;
                    for (l && (r = o.domain) && r.exit(); e;) {
                        i = e.fn,
                            e = e.next;
                        try {
                            i()
                        } catch(r) {
                            throw e ? n() : t = void 0,
                                r
                        }
                    }
                    t = void 0,
                    r && r.enter()
                };
                if (l) n = function() {
                    o.nextTick(u)
                };
                else if (!a || r.navigator && r.navigator.standalone) if (s && s.resolve) {
                    var c = s.resolve(void 0);
                    n = function() {
                        c.then(u)
                    }
                } else n = function() {
                    i.call(r, u)
                };
                else {
                    var d = !0,
                        p = document.createTextNode("");
                    new a(u).observe(p, {
                        characterData: !0
                    }),
                        n = function() {
                            p.data = d = !d
                        }
                }
                return function(r) {
                    var i = {
                        fn: r,
                        next: void 0
                    };
                    t && (t.next = i),
                    e || (e = i, n()),
                        t = i
                }
            }
        },
        function(e, t, n) {
            "use strict";
            var r = n(23),
                i = n(36),
                a = n(24),
                o = n(58),
                s = n(47),
                l = Object.assign;
            e.exports = !l || n(16)(function() {
                var e = {},
                    t = {},
                    n = Symbol(),
                    r = "abcdefghijklmnopqrst";
                return e[n] = 7,
                    r.split("").forEach(function(e) {
                        t[e] = e
                    }),
                7 != l({},
                    e)[n] || Object.keys(l({},
                    t)).join("") != r
            }) ?
                function(e, t) {
                    for (var n = o(e), l = arguments.length, u = 1, c = i.f, d = a.f; l > u;) for (var p, f = s(arguments[u++]), h = c ? r(f).concat(c(f)) : r(f), m = h.length, g = 0; m > g;) d.call(f, p = h[g++]) && (n[p] = f[p]);
                    return n
                }: l
        },
        function(e, t, n) {
            var r = n(12),
                i = n(7),
                a = n(23);
            e.exports = n(8) ? Object.defineProperties: function(e, t) {
                i(e);
                for (var n, o = a(t), s = o.length, l = 0; s > l;) r.f(e, n = o[l++], t[n]);
                return e
            }
        },
        function(e, t, n) {
            var r = n(15),
                i = n(50).f,
                a = {}.toString,
                o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
                s = function(e) {
                    try {
                        return i(e)
                    } catch(e) {
                        return o.slice()
                    }
                };
            e.exports.f = function(e) {
                return o && "[object Window]" == a.call(e) ? s(e) : i(r(e))
            }
        },
        function(e, t, n) {
            var r = n(9),
                i = n(58),
                a = n(37)("IE_PROTO"),
                o = Object.prototype;
            e.exports = Object.getPrototypeOf ||
                function(e) {
                    return e = i(e),
                        r(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype: e instanceof Object ? o: null
                }
        },
        function(e, t, n) {
            var r = n(10);
            e.exports = function(e, t, n) {
                for (var i in t) n && e[i] ? e[i] = t[i] : r(e, i, t[i]);
                return e
            }
        },
        function(e, t, n) {
            "use strict";
            var r = n(1),
                i = n(3),
                a = n(12),
                o = n(8),
                s = n(2)("species");
            e.exports = function(e) {
                var t = "function" == typeof i[e] ? i[e] : r[e];
                o && t && !t[s] && a.f(t, s, {
                    configurable: !0,
                    get: function() {
                        return this
                    }
                })
            }
        },
        function(e, t, n) {
            var r = n(39),
                i = n(32);
            e.exports = function(e) {
                return function(t, n) {
                    var a, o, s = String(i(t)),
                        l = r(n),
                        u = s.length;
                    return l < 0 || l >= u ? e ? "": void 0 : (a = s.charCodeAt(l), a < 55296 || a > 56319 || l + 1 === u || (o = s.charCodeAt(l + 1)) < 56320 || o > 57343 ? e ? s.charAt(l) : a: e ? s.slice(l, l + 2) : o - 56320 + (a - 55296 << 10) + 65536)
                }
            }
        },
        function(e, t, n) {
            var r = n(39),
                i = Math.max,
                a = Math.min;
            e.exports = function(e, t) {
                return e = r(e),
                    e < 0 ? i(e + t, 0) : a(e, t)
            }
        },
        function(e, t, n) {
            var r = n(1),
                i = r.navigator;
            e.exports = i && i.userAgent || ""
        },
        function(e, t, n) {
            var r = n(44),
                i = n(2)("iterator"),
                a = n(19);
            e.exports = n(3).getIteratorMethod = function(e) {
                if (void 0 != e) return e[i] || e["@@iterator"] || a[r(e)]
            }
        },
        function(e, t, n) {
            "use strict";
            var r = n(137),
                i = n(148),
                a = n(19),
                o = n(15);
            e.exports = n(48)(Array, "Array",
                function(e, t) {
                    this._t = o(e),
                        this._i = 0,
                        this._k = t
                },
                function() {
                    var e = this._t,
                        t = this._k,
                        n = this._i++;
                    return ! e || n >= e.length ? (this._t = void 0, i(1)) : "keys" == t ? i(0, n) : "values" == t ? i(0, e[n]) : i(0, [n, e[n]])
                },
                "values"),
                a.Arguments = a.Array,
                r("keys"),
                r("values"),
                r("entries")
        },
        function(e, t, n) {
            var r = n(14);
            r(r.S + r.F, "Object", {
                assign: n(151)
            })
        },
        function(e, t, n) {
            "use strict";
            var r, i, a, o, s = n(20),
                l = n(1),
                u = n(22),
                c = n(44),
                d = n(14),
                p = n(11),
                f = n(21),
                h = n(138),
                m = n(141),
                g = n(55),
                v = n(56).set,
                y = n(150)(),
                w = n(35),
                b = n(52),
                x = n(159),
                T = n(53),
                S = l.TypeError,
                C = l.process,
                E = C && C.versions,
                k = E && E.v8 || "",
                M = l.Promise,
                z = "process" == c(C),
                L = function() {},
                P = i = w.f,
                _ = !!
                    function() {
                        try {
                            var e = M.resolve(1),
                                t = (e.constructor = {})[n(2)("species")] = function(e) {
                                    e(L, L)
                                };
                            return (z || "function" == typeof PromiseRejectionEvent) && e.then(L) instanceof t && 0 !== k.indexOf("6.6") && -1 === x.indexOf("Chrome/66")
                        } catch(e) {}
                    } (),
                N = function(e) {
                    var t;
                    return ! (!p(e) || "function" != typeof(t = e.then)) && t
                },
                I = function(e, t) {
                    if (!e._n) {
                        e._n = !0;
                        var n = e._c;
                        y(function() {
                            for (var r = e._v,
                                     i = 1 == e._s,
                                     a = 0; n.length > a;) !
                                function(t) {
                                    var n, a, o, s = i ? t.ok: t.fail,
                                        l = t.resolve,
                                        u = t.reject,
                                        c = t.domain;
                                    try {
                                        s ? (i || (2 == e._h && O(e), e._h = 1), !0 === s ? n = r: (c && c.enter(), n = s(r), c && (c.exit(), o = !0)), n === t.promise ? u(S("Promise-chain cycle")) : (a = N(n)) ? a.call(n, l, u) : l(n)) : u(r)
                                    } catch(e) {
                                        c && !o && c.exit(),
                                            u(e)
                                    }
                                } (n[a++]);
                            e._c = [],
                                e._n = !1,
                            t && !e._h && A(e)
                        })
                    }
                },
                A = function(e) {
                    v.call(l,
                        function() {
                            var t, n, r, i = e._v,
                                a = D(e);
                            if (a && (t = b(function() {
                                z ? C.emit("unhandledRejection", i, e) : (n = l.onunhandledrejection) ? n({
                                    promise: e,
                                    reason: i
                                }) : (r = l.console) && r.error && r.error("Unhandled promise rejection", i)
                            }), e._h = z || D(e) ? 2 : 1), e._a = void 0, a && t.e) throw t.v
                        })
                },
                D = function(e) {
                    return 1 !== e._h && 0 === (e._a || e._c).length
                },
                O = function(e) {
                    v.call(l,
                        function() {
                            var t;
                            z ? C.emit("rejectionHandled", e) : (t = l.onrejectionhandled) && t({
                                promise: e,
                                reason: e._v
                            })
                        })
                },
                j = function(e) {
                    var t = this;
                    t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), I(t, !0))
                },
                H = function(e) {
                    var t, n = this;
                    if (!n._d) {
                        n._d = !0,
                            n = n._w || n;
                        try {
                            if (n === e) throw S("Promise can't be resolved itself"); (t = N(e)) ? y(function() {
                                var r = {
                                    _w: n,
                                    _d: !1
                                };
                                try {
                                    t.call(e, u(H, r, 1), u(j, r, 1))
                                } catch(e) {
                                    j.call(r, e)
                                }
                            }) : (n._v = e, n._s = 1, I(n, !1))
                        } catch(e) {
                            j.call({
                                    _w: n,
                                    _d: !1
                                },
                                e)
                        }
                    }
                };
            _ || (M = function(e) {
                h(this, M, "Promise", "_h"),
                    f(e),
                    r.call(this);
                try {
                    e(u(H, this, 1), u(j, this, 1))
                } catch(e) {
                    j.call(this, e)
                }
            },
                r = function(e) {
                    this._c = [],
                        this._a = void 0,
                        this._s = 0,
                        this._d = !1,
                        this._v = void 0,
                        this._h = 0,
                        this._n = !1
                },
                r.prototype = n(155)(M.prototype, {
                    then: function(e, t) {
                        var n = P(g(this, M));
                        return n.ok = "function" != typeof e || e,
                            n.fail = "function" == typeof t && t,
                            n.domain = z ? C.domain: void 0,
                            this._c.push(n),
                        this._a && this._a.push(n),
                        this._s && I(this, !1),
                            n.promise
                    },
                    catch: function(e) {
                        return this.then(void 0, e)
                    }
                }), a = function() {
                var e = new r;
                this.promise = e,
                    this.resolve = u(H, e, 1),
                    this.reject = u(j, e, 1)
            },
                w.f = P = function(e) {
                    return e === M || e === o ? new a(e) : i(e)
                }),
                d(d.G + d.W + d.F * !_, {
                    Promise: M
                }),
                n(26)(M, "Promise"),
                n(156)("Promise"),
                o = n(3).Promise,
                d(d.S + d.F * !_, "Promise", {
                    reject: function(e) {
                        var t = P(this);
                        return (0, t.reject)(e),
                            t.promise
                    }
                }),
                d(d.S + d.F * (s || !_), "Promise", {
                    resolve: function(e) {
                        return T(s && this === o ? M: this, e)
                    }
                }),
                d(d.S + d.F * !(_ && n(147)(function(e) {
                    M.all(e).
                    catch(L)
                })), "Promise", {
                    all: function(e) {
                        var t = this,
                            n = P(t),
                            r = n.resolve,
                            i = n.reject,
                            a = b(function() {
                                var n = [],
                                    a = 0,
                                    o = 1;
                                m(e, !1,
                                    function(e) {
                                        var s = a++,
                                            l = !1;
                                        n.push(void 0),
                                            o++,
                                            t.resolve(e).then(function(e) {
                                                    l || (l = !0, n[s] = e, --o || r(n))
                                                },
                                                i)
                                    }),
                                --o || r(n)
                            });
                        return a.e && i(a.v),
                            n.promise
                    },
                    race: function(e) {
                        var t = this,
                            n = P(t),
                            r = n.reject,
                            i = b(function() {
                                m(e, !1,
                                    function(e) {
                                        t.resolve(e).then(n.resolve, r)
                                    })
                            });
                        return i.e && r(i.v),
                            n.promise
                    }
                })
        },
        function(e, t, n) {
            "use strict";
            var r = n(1),
                i = n(9),
                a = n(8),
                o = n(14),
                s = n(54),
                l = n(149).KEY,
                u = n(16),
                c = n(38),
                d = n(26),
                p = n(27),
                f = n(2),
                h = n(42),
                m = n(41),
                g = n(140),
                v = n(144),
                y = n(7),
                w = n(11),
                b = n(15),
                x = n(40),
                T = n(25),
                S = n(49),
                C = n(153),
                E = n(96),
                k = n(12),
                M = n(23),
                z = E.f,
                L = k.f,
                P = C.f,
                _ = r.Symbol,
                N = r.JSON,
                I = N && N.stringify,
                A = f("_hidden"),
                D = f("toPrimitive"),
                O = {}.propertyIsEnumerable,
                j = c("symbol-registry"),
                H = c("symbols"),
                B = c("op-symbols"),
                R = Object.prototype,
                F = "function" == typeof _,
                q = r.QObject,
                W = !q || !q.prototype || !q.prototype.findChild,
                X = a && u(function() {
                    return 7 != S(L({},
                        "a", {
                            get: function() {
                                return L(this, "a", {
                                    value: 7
                                }).a
                            }
                        })).a
                }) ?
                    function(e, t, n) {
                        var r = z(R, t);
                        r && delete R[t],
                            L(e, t, n),
                        r && e !== R && L(R, t, r)
                    }: L,
                G = function(e) {
                    var t = H[e] = S(_.prototype);
                    return t._k = e,
                        t
                },
                Y = F && "symbol" == typeof _.iterator ?
                    function(e) {
                        return "symbol" == typeof e
                    }: function(e) {
                        return e instanceof _
                    },
                V = function(e, t, n) {
                    return e === R && V(B, t, n),
                        y(e),
                        t = x(t, !0),
                        y(n),
                        i(H, t) ? (n.enumerable ? (i(e, A) && e[A][t] && (e[A][t] = !1), n = S(n, {
                            enumerable: T(0, !1)
                        })) : (i(e, A) || L(e, A, T(1, {})), e[A][t] = !0), X(e, t, n)) : L(e, t, n)
                },
                $ = function(e, t) {
                    y(e);
                    for (var n, r = g(t = b(t)), i = 0, a = r.length; a > i;) V(e, n = r[i++], t[n]);
                    return e
                },
                U = function(e, t) {
                    return void 0 === t ? S(e) : $(S(e), t)
                },
                K = function(e) {
                    var t = O.call(this, e = x(e, !0));
                    return ! (this === R && i(H, e) && !i(B, e)) && (!(t || !i(this, e) || !i(H, e) || i(this, A) && this[A][e]) || t)
                },
                J = function(e, t) {
                    if (e = b(e), t = x(t, !0), e !== R || !i(H, t) || i(B, t)) {
                        var n = z(e, t);
                        return ! n || !i(H, t) || i(e, A) && e[A][t] || (n.enumerable = !0),
                            n
                    }
                },
                Q = function(e) {
                    for (var t, n = P(b(e)), r = [], a = 0; n.length > a;) i(H, t = n[a++]) || t == A || t == l || r.push(t);
                    return r
                },
                Z = function(e) {
                    for (var t, n = e === R,
                             r = P(n ? B: b(e)), a = [], o = 0; r.length > o;) ! i(H, t = r[o++]) || n && !i(R, t) || a.push(H[t]);
                    return a
                };
            F || (_ = function() {
                if (this instanceof _) throw TypeError("Symbol is not a constructor!");
                var e = p(arguments.length > 0 ? arguments[0] : void 0),
                    t = function(n) {
                        this === R && t.call(B, n),
                        i(this, A) && i(this[A], e) && (this[A][e] = !1),
                            X(this, e, T(1, n))
                    };
                return a && W && X(R, e, {
                    configurable: !0,
                    set: t
                }),
                    G(e)
            },
                s(_.prototype, "toString",
                    function() {
                        return this._k
                    }), E.f = J, k.f = V, n(50).f = C.f = Q, n(24).f = K, n(36).f = Z, a && !n(20) && s(R, "propertyIsEnumerable", K, !0), h.f = function(e) {
                return G(f(e))
            }),
                o(o.G + o.W + o.F * !F, {
                    Symbol: _
                });
            for (var ee = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), te = 0; ee.length > te;) f(ee[te++]);
            for (var ne = M(f.store), re = 0; ne.length > re;) m(ne[re++]);
            o(o.S + o.F * !F, "Symbol", {
                for: function(e) {
                    return i(j, e += "") ? j[e] : j[e] = _(e)
                },
                keyFor: function(e) {
                    if (!Y(e)) throw TypeError(e + " is not a symbol!");
                    for (var t in j) if (j[t] === e) return t
                },
                useSetter: function() {
                    W = !0
                },
                useSimple: function() {
                    W = !1
                }
            }),
                o(o.S + o.F * !F, "Object", {
                    create: U,
                    defineProperty: V,
                    defineProperties: $,
                    getOwnPropertyDescriptor: J,
                    getOwnPropertyNames: Q,
                    getOwnPropertySymbols: Z
                }),
            N && o(o.S + o.F * (!F || u(function() {
                var e = _();
                return "[null]" != I([e]) || "{}" != I({
                    a: e
                }) || "{}" != I(Object(e))
            })), "JSON", {
                stringify: function(e) {
                    for (var t, n, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]);
                    if (n = t = r[1], (w(t) || void 0 !== e) && !Y(e)) return v(t) || (t = function(e, t) {
                        if ("function" == typeof n && (t = n.call(this, e, t)), !Y(t)) return t
                    }),
                        r[1] = t,
                        I.apply(N, r)
                }
            }),
            _.prototype[D] || n(10)(_.prototype, D, _.prototype.valueOf),
                d(_, "Symbol"),
                d(Math, "Math", !0),
                d(r.JSON, "JSON", !0)
        },
        function(e, t, n) {
            "use strict";
            var r = n(14),
                i = n(3),
                a = n(1),
                o = n(55),
                s = n(53);
            r(r.P + r.R, "Promise", {
                finally: function(e) {
                    var t = o(this, i.Promise || a.Promise),
                        n = "function" == typeof e;
                    return this.then(n ?
                        function(n) {
                            return s(t, e()).then(function() {
                                return n
                            })
                        }: e, n ?
                        function(n) {
                            return s(t, e()).then(function() {
                                throw n
                            })
                        }: e)
                }
            })
        },
        function(e, t, n) {
            "use strict";
            var r = n(14),
                i = n(35),
                a = n(52);
            r(r.S, "Promise", {
                try: function(e) {
                    var t = i.f(this),
                        n = a(e);
                    return (n.e ? t.reject: t.resolve)(n.v),
                        t.promise
                }
            })
        },
        function(e, t, n) {
            n(41)("asyncIterator")
        },
        function(e, t, n) {
            n(41)("observable")
        },
        , , , ,
        function(e, t, n) {
            "use strict"; (function(t) {
                function n() {}
                function r(e, t) {
                    return function() {
                        e.apply(t, arguments)
                    }
                }
                function i(e) {
                    if (! (this instanceof i)) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e) throw new TypeError("not a function");
                    this._state = 0,
                        this._handled = !1,
                        this._value = void 0,
                        this._deferreds = [],
                        c(e, this)
                }
                function a(e, t) {
                    for (; 3 === e._state;) e = e._value;
                    if (0 === e._state) return void e._deferreds.push(t);
                    e._handled = !0,
                        i._immediateFn(function() {
                            var n = 1 === e._state ? t.onFulfilled: t.onRejected;
                            if (null === n) return void(1 === e._state ? o: s)(t.promise, e._value);
                            var r;
                            try {
                                r = n(e._value)
                            } catch(e) {
                                return void s(t.promise, e)
                            }
                            o(t.promise, r)
                        })
                }
                function o(e, t) {
                    try {
                        if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                        if (t && ("object" == typeof t || "function" == typeof t)) {
                            var n = t.then;
                            if (t instanceof i) return e._state = 3,
                                e._value = t,
                                void l(e);
                            if ("function" == typeof n) return void c(r(n, t), e)
                        }
                        e._state = 1,
                            e._value = t,
                            l(e)
                    } catch(t) {
                        s(e, t)
                    }
                }
                function s(e, t) {
                    e._state = 2,
                        e._value = t,
                        l(e)
                }
                function l(e) {
                    2 === e._state && 0 === e._deferreds.length && i._immediateFn(function() {
                        e._handled || i._unhandledRejectionFn(e._value)
                    });
                    for (var t = 0,
                             n = e._deferreds.length; t < n; t++) a(e, e._deferreds[t]);
                    e._deferreds = null
                }
                function u(e, t, n) {
                    this.onFulfilled = "function" == typeof e ? e: null,
                        this.onRejected = "function" == typeof t ? t: null,
                        this.promise = n
                }
                function c(e, t) {
                    var n = !1;
                    try {
                        e(function(e) {
                                n || (n = !0, o(t, e))
                            },
                            function(e) {
                                n || (n = !0, s(t, e))
                            })
                    } catch(e) {
                        if (n) return;
                        n = !0,
                            s(t, e)
                    }
                }
                var d = setTimeout;
                i.prototype.
                    catch = function(e) {
                    return this.then(null, e)
                },
                    i.prototype.then = function(e, t) {
                        var r = new this.constructor(n);
                        return a(this, new u(e, t, r)),
                            r
                    },
                    i.prototype.
                        finally = function(e) {
                        var t = this.constructor;
                        return this.then(function(n) {
                                return t.resolve(e()).then(function() {
                                    return n
                                })
                            },
                            function(n) {
                                return t.resolve(e()).then(function() {
                                    return t.reject(n)
                                })
                            })
                    },
                    i.all = function(e) {
                        return new i(function(t, n) {
                            function r(e, o) {
                                try {
                                    if (o && ("object" == typeof o || "function" == typeof o)) {
                                        var s = o.then;
                                        if ("function" == typeof s) return void s.call(o,
                                            function(t) {
                                                r(e, t)
                                            },
                                            n)
                                    }
                                    i[e] = o,
                                    0 == --a && t(i)
                                } catch(e) {
                                    n(e)
                                }
                            }
                            if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
                            var i = Array.prototype.slice.call(e);
                            if (0 === i.length) return t([]);
                            for (var a = i.length,
                                     o = 0; o < i.length; o++) r(o, i[o])
                        })
                    },
                    i.resolve = function(e) {
                        return e && "object" == typeof e && e.constructor === i ? e: new i(function(t) {
                            t(e)
                        })
                    },
                    i.reject = function(e) {
                        return new i(function(t, n) {
                            n(e)
                        })
                    },
                    i.race = function(e) {
                        return new i(function(t, n) {
                            for (var r = 0,
                                     i = e.length; r < i; r++) e[r].then(t, n)
                        })
                    },
                    i._immediateFn = "function" == typeof t &&
                        function(e) {
                            t(e)
                        } ||
                        function(e) {
                            d(e, 0)
                        },
                    i._unhandledRejectionFn = function(e) {
                        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                    },
                    e.exports = i
            }).call(t, n(178).setImmediate)
        },
        , , ,
        function(e, t, n) { (function(e, t) { !
            function(e, n) {
                "use strict";
                function r(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                    var r = {
                        callback: e,
                        args: t
                    };
                    return u[l] = r,
                        s(l),
                        l++
                }
                function i(e) {
                    delete u[e]
                }
                function a(e) {
                    var t = e.callback,
                        r = e.args;
                    switch (r.length) {
                        case 0:
                            t();
                            break;
                        case 1:
                            t(r[0]);
                            break;
                        case 2:
                            t(r[0], r[1]);
                            break;
                        case 3:
                            t(r[0], r[1], r[2]);
                            break;
                        default:
                            t.apply(n, r)
                    }
                }
                function o(e) {
                    if (c) setTimeout(o, 0, e);
                    else {
                        var t = u[e];
                        if (t) {
                            c = !0;
                            try {
                                a(t)
                            } finally {
                                i(e),
                                    c = !1
                            }
                        }
                    }
                }
                if (!e.setImmediate) {
                    var s, l = 1,
                        u = {},
                        c = !1,
                        d = e.document,
                        p = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    p = p && p.setTimeout ? p: e,
                        "[object process]" === {}.toString.call(e.process) ?
                            function() {
                                s = function(e) {
                                    t.nextTick(function() {
                                        o(e)
                                    })
                                }
                            } () : function() {
                                if (e.postMessage && !e.importScripts) {
                                    var t = !0,
                                        n = e.onmessage;
                                    return e.onmessage = function() {
                                        t = !1
                                    },
                                        e.postMessage("", "*"),
                                        e.onmessage = n,
                                        t
                                }
                            } () ?
                            function() {
                                var t = "setImmediate$" + Math.random() + "$",
                                    n = function(n) {
                                        n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && o( + n.data.slice(t.length))
                                    };
                                e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n),
                                    s = function(n) {
                                        e.postMessage(t + n, "*")
                                    }
                            } () : e.MessageChannel ?
                                function() {
                                    var e = new MessageChannel;
                                    e.port1.onmessage = function(e) {
                                        o(e.data)
                                    },
                                        s = function(t) {
                                            e.port2.postMessage(t)
                                        }
                                } () : d && "onreadystatechange" in d.createElement("script") ?
                                    function() {
                                        var e = d.documentElement;
                                        s = function(t) {
                                            var n = d.createElement("script");
                                            n.onreadystatechange = function() {
                                                o(t),
                                                    n.onreadystatechange = null,
                                                    e.removeChild(n),
                                                    n = null
                                            },
                                                e.appendChild(n)
                                        }
                                    } () : function() {
                                        s = function(e) {
                                            setTimeout(o, 0, e)
                                        }
                                    } (),
                        p.setImmediate = r,
                        p.clearImmediate = i
                }
            } ("undefined" == typeof self ? void 0 === e ? this: e: self)
        }).call(t, n(63), n(62))
        },
        function(e, t, n) { (function(e) {
            function r(e, t) {
                this._id = e,
                    this._clearFn = t
            }
            var i = void 0 !== e && e || "undefined" != typeof self && self || window,
                a = Function.prototype.apply;
            t.setTimeout = function() {
                return new r(a.call(setTimeout, i, arguments), clearTimeout)
            },
                t.setInterval = function() {
                    return new r(a.call(setInterval, i, arguments), clearInterval)
                },
                t.clearTimeout = t.clearInterval = function(e) {
                    e && e.close()
                },
                r.prototype.unref = r.prototype.ref = function() {},
                r.prototype.close = function() {
                    this._clearFn.call(i, this._id)
                },
                t.enroll = function(e, t) {
                    clearTimeout(e._idleTimeoutId),
                        e._idleTimeout = t
                },
                t.unenroll = function(e) {
                    clearTimeout(e._idleTimeoutId),
                        e._idleTimeout = -1
                },
                t._unrefActive = t.active = function(e) {
                    clearTimeout(e._idleTimeoutId);
                    var t = e._idleTimeout;
                    t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                            e._onTimeout && e._onTimeout()
                        },
                        t))
                },
                n(177),
                t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate,
                t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
        }).call(t, n(63))
        },
        , ,
        function(e, t, n) {
            n(30),
                n(29),
                e.exports = n(94)
        }]);
//# sourceMappingURL=vendor.275f47.js.map




// webpackJsonp([1], {
//     43 : function(a, s, t) {
//         "use strict";
//         var eax = a;
//         function e(a, s) {
//             var t = "";
//             s = s || [];
//             var e = s.length;
//             return a.forEach(function(a, c) {
//                 t += '<li class="tag" data-id="' + a.comic_id + '"' + (e ? 'style="background-color:' + s[c % e] + '"': "") + ">" + a.comic_name + "</li>"
//             }),
//                 t
//         }
//         function c() {
//             m = __global.store("searched") || [],
//                 d(m);
//             var a = $(".mk-search");
//             u.slideinLayer(a,
//                 function() {
//                     $("#closeSearch").off().on("click",
//                         function() {
//                             u.slideoutLayer(a)
//                         })
//                 })
//         }
//         function i() {
//             var a = $(".search-area").val();
//             a = a.replace(/<(\/)?script>/gi, ""),
//             a && (l(a), a = "?key=" + u.UrlEncode(a)),
//                 location.href = "/sort/" + a
//         }
//         function l(a) {
//             var s = __global.store("searched") || [];
//             s.some(function(s) {
//                 return s == a
//             }) || (s.unshift(a), s.length > 15 && s.pop(), __global.store("searched", s))
//         }
//         function n() {
//             var a = this.dataset.searched;
//             m = m.filter(function(s) {
//                 return s != a
//             }),
//                 m.length ? (__global.store("searched", m), $(this).parents(".hisSrch-item").remove()) : o()
//         }
//         // function o() {
//         //     __global.store("searched", []),
//         //         $(".historyClear").hide(),
//         //         $(".hisSrch-list").html('<p class="empty">暂无搜索历史^_^</p>')
//         // }
//         // function r(a, s, t) {
//         //     var e = $(".tmpSrch-list"),
//         //         c = s ? e.html() : "";
//         //     if (a.total_num) {
//         //         a.comic_list.forEach(function(a) {
//         //             c += '<a class="tmpSrch-item" href="/manhua/' + a.comic_id + '/" title="' + a.comic_name + '"><div class="itemBox"><span>' + a.comic_name + '</span><span class="last-chapter">' + a.last_chapter.name + "</span></div></a>"
//         //         }),
//         //             e.html(c);
//         //         e.find(".itemBox span:first-child").each(function(a, s) {
//         //             $(s).html($(s).html().replace(t, '<span class="keyRed">' + t + "</span>"))
//         //         }),
//         //             $(".search").height() > $(window).height() ? $(window).off("scroll").on("scroll",
//         //                 function() {
//         //                     var s = $(window).height(),
//         //                         t = $(".search").height();
//         //                     if (Math.ceil($(this).scrollTop()) >= t - s) if (a.current_page < a.total_page) {
//         //                         var c = ++a.current_page;
//         //                         h(c,
//         //                             function(a) {
//         //                                 r(a, !0)
//         //                             })
//         //                     } else $(".bottom_tip").length || e.append('<p class="bottom_tip">加载完毕</p>')
//         //                 }) : $(window).off("scroll")
//         //     } else c = '<p class="empty">暂无相关搜索结果^_^</p>',
//         //         e.html(c),
//         //         $(".tmpSrch").show()
//         // }
//         // function h(a, s) {
//         //     if (v) return ! 1;
//         //     var t = $(".search-area").val(),
//         //         e = $(".hot-search"),
//         //         c = $(".hisSrch").hide(),
//         //         i = $(".tmpSrch");
//         //     t = t.replace(/<(\/)?script>/gi, ""),
//         //         t ? (l(t), e.hide(), c.hide(), v = !0, $(".tmpSrch-list").append('<p class="bottom_tip">加载中...</p>'), i.show(), __global.wrapAjax({
//         //             url: __global.config.api + "/getsortlist_new/",
//         //             dataType: "jsonp",
//         //             jsonpCallback: "getsortlistNewCb",
//         //             data: {
//         //                 key: t,
//         //                 page: a
//         //             },
//         //             cache: !1,
//         //             success: function(a) {
//         //                 v = !1,
//         //                     $(".bottom_tip").remove(),
//         //                     0 == a.status ? "function" == typeof s && s(a.data.page, !1, t) : i.hide()
//         //             }
//         //         })) : (m = __global.store("searched") || [], d(m), e.show(), c.show(), i.hide())
//         // }
//         // function d(a) {
//         //     var s = "",
//         //         t = $(".hisSrch-list");
//         //     a.length ? (a.forEach(function(a) {
//         //         s += '<div class="hisSrch-item"><div class="itemBox"><div class="ift-clock"></div><a class="history-text" href="/sort/?key=' + a + '" title="搜索' + a + '">' + a + '</a><div class="historyDel ift-close" data-searched="' + a + '"></div></div></div>'
//         //     }), t.html(s), $(".historyClear").show().click(o), $(".historyDel").click(n)) : (s = '<p class="empty">暂无搜索历史^_^</p>', t.html(s))
//         // }
//         // var p, f = t(0),
//         //     u = function(a) {
//         //         if (a && a.__esModule) return a;
//         //         var s = {};
//         //         if (null != a) for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (s[t] = a[t]);
//         //         return s.
//         //             default = a,
//         //             s
//         //     } (f),
//         //     m = __global.store("searched") || [],
//         //     v = !1;
//         // $("body").append('<div class="mk-search">\n    <header class="hd mk-header fixed">\n      <div class="left"><i class="back ift-goback" id="closeSearch"></i></div>\n      <input class="search-area" type="text" value="" placeholder="可按 漫画名 或 漫画家 搜索">\n      <div class="right">\n      <span class="searchBtn ift-search"></span>\n      </div>\n    </header>\n    <div class="hot-search">\n      <div class="hot-hd">热门搜索</div>\n      <ul class="hot-tags" id="J_hotTags"></ul>\n    </div>\n    <div class="hisSrch">\n      <div class="hisSrch-hd">\n        <span>搜索历史</span>\n        <span class="historyClear" style="display: none">清空</span>\n      </div>\n      <div class="hisSrch-list"></div>\n    </div>\n    <div class="tmpSrch" style="display: none">\n      <div class="tmpSrch-hd">搜索结果</div>\n      <div class="tmpSrch-list"></div>\n    </div>\n  </div>').on("keyup", ".search-area",
//         //     function() {
//         //         clearTimeout(p),
//         //             p = setTimeout(function() {
//         //                     h(1, r)
//         //                 },
//         //                 500)
//         //     }),
//         //     $("#search").on("click",
//         //         function() {
//         //             $(".mk-search");
//         //             c()
//         //         }),
//         //     $(".searchBtn").on("click", i),
//         //     $("#classifySearch").on("click",
//         //         function() {
//         //             c()
//         //         }),
//         //     c(),
//         //     __global.wrapAjax({
//         //         url: __global.config.api + "/gethotsearch/",
//         //         dataType: "jsonp",
//         //         jsonpCallback: "gethotsearchCb",
//         //         cache: !1,
//         //         success: function(a) {
//         //             0 === a.status && ($("#J_hotTags").html(e(a.data.list, __global.tagColors)), $(".hot-tags li").on("click",
//         //                 function() {
//         //                     location.href = "/manhua/" + $(this).data("id") + "/"
//         //                 }))
//         //         }
//         //     })
//     }
// });
//# sourceMappingURL=1.75b6d46f80.js.map
