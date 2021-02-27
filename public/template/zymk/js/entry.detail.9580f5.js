webpackJsonp([26], {
        104: function (e, a, t) {
            "use strict";

            function o(e) {
                var a = C.eq(e).find(".item-warp");
                M.css({
                    width: a.width(),
                    left: a.offset().left
                })
            }

            function i() {

            }

            // function r() {
            //     var e = parseInt($(".goldInput").val(), 10);
            //     if (isNaN(e)) __global.layerMsg("请大人输入元宝数量");
            //     else if (e > m.Cgold) __global.layerMsg("元宝君不够啦...");
            //     else if (e <= 0) __global.layerMsg("请输入大于０的数字");
            //     else {
            //         var a = $(".gold .num");
            //         __global.wrapAjax({
            //             url: __global.config.api + "/addgold/",
            //             dataType: "jsonp",
            //             jsonpCallback: "addgoldCb",
            //             data: {
            //                 type: h,
            //                 openid: b,
            //                 comic_id: f,
            //                 gold: e
            //             },
            //             cache: !1,
            //             success: function(e) {
            //                 0 == e.status ? (__global.layerMsg("打赏成功，当前剩余" + e.data.user_gold + "元宝"), a.text(e.data.comic_gold), m.Cgold = e.data.user_gold, __global.cookieParse("user", m, {
            //                     expires: 8760
            //                 })) : __global.layerMsg(e.msg)
            //             },
            //             error: function(e) {
            //                 __global.layerMsg("操作失败，请稍后再试！")
            //             }
            //         })
            //     }
            // }
            function n() {
                $("li.star").each(function (e, a) {
                    $(a).click(function () {
                        $(this).siblings().each(function (t, o) {
                            e > t ? ($(a).addClass("active"), $(o).addClass("active")) : $(o).removeClass("active")
                        }),
                            p = 20 * (e + 1)
                    })
                })
            }

            // function l() {
            //     __global.wrapAjax({
            //         url: __global.config.api + "/addscore/",
            //         dataType: "jsonp",
            //         jsonpCallback: "addscoreCb",
            //         data: {
            //             type: h,
            //             openid: b,
            //             comic_id: f,
            //             score: p
            //         },
            //         cache: !1,
            //         success: function(e) {
            //             __global.layerMsg(0 === e.status ? "感谢您参与评价！": e.msg);
            //             var a = (e.data.score / 10).toFixed(1);
            //             $(".support .score .num").text(e.data.jury),
            //                 $(".info .score").text(a)
            //         },
            //         error: function(e) {
            //             __global.layerMsg("操作失败，请稍后再试！")
            //         }
            //     })
            // }
            // function c() {
            //     var e = $(this).data("btn"),
            //         a = $("." + e + " .num");
            //     if (m) switch (e) {
            //         case "recommend":
            //             $.ajax({
            //                 url:
            //                     __global.config.api + "/addrecommend/",
            //                 dataType: "json",
            //                 method: "post",
            //                 data: {
            //                     type: h,
            //                     openid: b,
            //                     comic_id: f
            //                 },
            //                 cache: !1,
            //                 success: function(e) {
            //                     __global.layerMsg(0 === e.status ? "推荐成功，当前剩余" + e.data.user_count + "张推荐票": e.msg),
            //                         a.text(e.data.count),
            //                         m.recommend = e.data.user_count,
            //                         __global.cookieParse("user", m, {
            //                             expires: 8760
            //                         })
            //                 },
            //                 error: function(e) {
            //                     __global.layerMsg("操作失败，请稍后再试！")
            //                 }
            //             });
            //             break;
            //         case "gold":
            //             __global.wrapAjax({
            //                 url:
            //                     __global.config.api + "/getuserinfo_gold/",
            //                 dataType: "jsonp",
            //                 jsonpCallback: "getuserinfoGoldCb",
            //                 data: {
            //                     type: h,
            //                     openid: b,
            //                     client: "wap"
            //                 },
            //                 success: function(e) {
            //                     0 === e.status && (m.Cgold = e.data.Cgold, __global.cookieParse("user", m, {
            //                         expires: 8760
            //                     }), __global.layerInput("您有" + m.Cgold + "个可用元宝", r))
            //                 }
            //             });
            //             break;
            //         case "ticket":
            //             $.ajax({
            //                 url:
            //                     __global.config.api + "/addmonthticket/",
            //                 dataType: "json",
            //                 method: "post",
            //                 data: {
            //                     type: h,
            //                     openid: b,
            //                     comic_id: f
            //                 },
            //                 success: function(e) {
            //                     __global.layerMsg(0 === e.status ? "月票使用成功，当前剩余" + e.data.user_ticket + "张月票": e.msg),
            //                         a.text(e.data.comic_ticket),
            //                         m.Cticket = e.data.user_ticket,
            //                         __global.cookieParse("user", m, {
            //                             expires: 8760
            //                         })
            //                 },
            //                 error: function(e) {
            //                     __global.layerMsg("操作失败，请稍后再试！")
            //                 }
            //             });
            //             break;
            //         case "score":
            //             __global.layerScore("请给 " + d + " 打分", n, l);
            //             break;
            //         case "collect":
            //             i();
            //             break;
            //         case "share":
            //             riverDrive && riverDrive.open({
            //                 name: "blackCloth",
            //                 ext: 3
            //             })
            //     } else switch (e) {
            //         case "collect":
            //             i();
            //             break;
            //         case "share":
            //             riverDrive && riverDrive.open({
            //                 name: "blackCloth",
            //                 ext: 3
            //             });
            //             break;
            //         default:
            //             __global.cookieParse("login_from", location.pathname),
            //                 location.replace("/uc/login.html")
            //     }
            // }
            function s(e) {
                var a = $(".chapterlist"),
                    t = a.find(".item").get().reverse();
                a.html(t);
                var f = e.hasClass('ift-down');
                f ? (e.removeClass("ift-down").addClass("ift-up"), e.text("升序")) : (e.removeClass("ift-up").addClass("ift-down"), e.text("降序")),
                    f = !f;

            }

            //var d, u = t(0);
            //     _ = function(e) {
            //         if (e && e.__esModule) return e;
            //         var a = {};
            //         if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (a[t] = e[t]);
            //         return a.
            //             default = e,
            //             a
            //     } (u),
            //     g = !1,
            //     p = 0,
            //     f = location.pathname.match(/\d+/)[0],
            //     m = __global.cookieParse("user");
            // if (m) var h = m.type,
            //     b = m.openid;
            // var v = __global.store("subsList") || [],
            //     w = __global.store("readList") || [],
            //     k = __global.store("saw") || [],
            //     y = v.some(function(e) {
            //         return e.comic_id == f
            //     });
            // y && $(".like").removeClass("ift-collect").addClass("ift-lovered"),
            //     __global.wrapAjax({
            //         url: "//www.baidu.com/",
            //         data: {
            //             ssid: f,
            //             ssidType: 0,
            //             opreateTime: Date.now(),
            //             AppId: 11,
            //             userIdentifier: 0,
            //             ssidtype: 0
            //         },
            //         cache: !1,
            //         success: function(e) {
            //             if (1 == e.status) {
            //                 var a = e.data >= 100 ? "99+": e.data;
            //                 document.getElementById("sourceId::" + f).innerText = a
            //             }
            //         },
            //         error: function(e) {
            //             //__global.layerMsg("请求评论总数失败，请稍后再试！")
            //         }
            //     }),
            // t.e(0).then(function() {
            //     t(4),
            //         riverDrive.open({
            //             name: "topAlterBanner",
            //             ext: ["push", {
            //                 title: "召唤漫客娘",
            //                 article: "阅览《" + (d.length > 6 ? d.slice(0, 5) + "...": d) + "》更方便",
            //                 cookie: "detail"
            //             }]
            //         }),
            //         $("#downApp").on("click",
            //             function(e) {
            //                 e.preventDefault(),
            //                     riverDrive.open({
            //                         name: "blackCloth",
            //                         ext: 0
            //                     })
            //             }),
            //         $("a.read").on("click",
            //             function(e) {
            //                 var a = $(this);
            //                 if (w && w.length) {
            //                     for (var t = !1,
            //                              o = 0; o < w.length; o++) if (w[o].comic_id == f) {
            //                         t = !0;
            //                         break
            //                     }
            //                     if (t) {
            //                         if (riverDrive.open({
            //                             name: "blackCloth",
            //                             ext: [2,
            //                                 function() {
            //                                     location.href = a.attr("href")
            //                                 }]
            //                         })) return e.preventDefault(),
            //                             e.stopPropagation(),
            //                             !1
            //                     } else if (riverDrive.open({
            //                         name: "blackCloth",
            //                         ext: [1,
            //                             function() {
            //                                 location.href = a.attr("href")
            //                             }]
            //                     })) return e.preventDefault(),
            //                         e.stopPropagation(),
            //                         !1
            //                 }
            //             })
            // }.bind(null, t)).
            // catch(t.oe),
//            m &&
            // function(e, a) {
            //     __global.wrapAjax({
            //         url: __global.config.api + "/get_purchased_chapters/",
            //         dataType: "jsonp",
            //         jsonpCallback: "getPurchasedChaptersCb",
            //         data: {
            //             type: h,
            //             openid: b,
            //             comic_id: e
            //         },
            //         cache: !1,
            //         success: function(e) {
            //             if (0 === e.status) {
            //                 var t = e.data || [];
            //                 "function" == typeof a && a(t)
            //             }
            //         }
            //     })
            // } (f,
            //     function(e) {
            //         e.forEach(function(e) {
            //             $(".chapterlist .item").each(function(a, t) {
            //                 var o = $(t);
            //                 o.data("id") === e && o.children(".lockIcon").attr("src", "/Public/wap/zymk/images/default/icons/unlock.png")
            //             })
            //         })
            //     });
            new Swiper("#recommend", {
                slidesPerView: "auto",
                freeMode: !0,
                spaceBetween: 0,
                freeModeMomentum: !0,
                observer: !0,
                observeParents: !0,
                onSlidePrevEnd: function (e) {
                    "horizontal" === e.params.direction ? window.maidian && window.maidian.curstomMsg("scroll_derection_recommend", {
                        scroll_derection: "左"
                    }) : window.maidian && window.maidian.curstomMsg("scroll_derection_recommend", {
                        scroll_derection: "上"
                    })
                },
                onSlideNextEnd: function (e) {
                    "horizontal" === e.params.direction ? window.maidian && window.maidian.curstomMsg("scroll_derection_recommend", {
                        scroll_derection: "右"
                    }) : window.maidian && window.maidian.curstomMsg("scroll_derection_recommend", {
                        scroll_derection: "下"
                    })
                }
            });
            if ($("#authorProduction .swiper-slide").length > 3) {
                new Swiper("#authorProduction", {
                    slidesPerView: "auto",
                    freeMode: !0,
                    spaceBetween: 0,
                    freeModeMomentum: !0,
                    observer: !0,
                    observeParents: !0
                })
            }
            var x = $("#comicDetailTab"),
                C = x.find(".tab-toggle li"),
                M = x.find(".modify"),
                j = x.find(".swiper-slide.tab-item"),
                P = new Swiper(".swiper-container-tab", {
                    onSlideChangeEnd: function (e) {
                        C.eq(e.activeIndex).addClass("active").siblings().removeClass("active")
                    },
                    onSlideChangeStart: function (e) {
                        o(e.activeIndex),
                            j.css("height", 0).eq(e.activeIndex).css("height", "auto")
                    },
                    onSlidePrevEnd: function (e) {
                        "horizontal" === e.params.direction ? window.maidian && window.maidian.curstomMsg("scroll_derection_details", {
                            scroll_derection: "左"
                        }) : window.maidian && window.maidian.curstomMsg("scroll_derection_details", {
                            scroll_derection: "上"
                        })
                    },
                    onSlideNextEnd: function (e) {
                        "horizontal" === e.params.direction ? window.maidian && window.maidian.curstomMsg("scroll_derection_details", {
                            scroll_derection: "右"
                        }) : window.maidian && window.maidian.curstomMsg("scroll_derection_details", {
                            scroll_derection: "下"
                        })
                    }
                });
            if (C.on("click", function () {
                P.slideTo($(this).index())
            }),
                P.slideTo(1), o(1), j.eq(1).css("height", "auto"),
                $(window).resize(function () {
                    setTimeout(function () {
                            o(x.find(".tab-toggle li.active").index())
                        },
                        500)
                })
            //     d = $(".comic-info .name").text(), $(".like").click(i), $(".tags-txt").each(function (e, a) {
            //     $(a).css({
            //         "background-color": __global.tagColors[e % __global.tagColors.length]
            //     })
            // }),
            ) {
                // var T = w.filter(function (e) {
                //         return e.comic_id == f
                //     }),
                //     D = $(".read");
                // T.length && (D.attr("href", "/chapter/" + T[0].chapter_id + ".html"), D.text("续看: " + T[0].chapter_name), $(".chapterlist .item").each(function (e, a) {
                //     if ($(a).data("id") === T[0].chapter_id && ($(a).children(".readChapter").show(), $(a).children(".updot").hide()), k.length) {
                //         k.some(function (e) {
                //             return e === $(a).data("id")
                //         }) && $(a).children(".updot").hide()
                //     }
                // }))
            }
            var I = $(".order-switch"),
                S = $(".chapterlist"),
                A = $("#chapterSwitch");
            I.click(function () {
                s(I)
            }),
                A.click(function () {
                    S.hasClass("autoHeight") ? (S.removeClass("autoHeight"), $(this).text("查看全部")) : (S.addClass("autoHeight"), $(this).text("收起"))
                })
            // $(".support").on("click", "li", c),
            // _.tabTaggle($(".mk-fansrank-tabs")),
            // function() {
            //     var e = document.referrer;
            //     new RegExp(location.pathname + "\\d+\\.html").test(document.referrer) && __global.cookie("historypath", e)
            // } (),
            // $(".back").click(function() {
            //     __global.cookie("historypath") == document.referrer ? location.href = "/": history.back(),
            //         __global.cookie("historypath", null)
            // })
        }
    },
    [104]);
//# sourceMappingURL=entry.detail.87a3a3.js.map