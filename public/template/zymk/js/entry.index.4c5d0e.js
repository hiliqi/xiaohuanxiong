webpackJsonp([22], {
    108 : function(i, n, o) {
        "use strict";
        function e(i) {
            var n = u.eq(i).children(".item-warp");
            m.css({
                width: n.width(),
                left: n.offset().left
            })
        }
        function t() {
            var i = $("#notice"),
            n = parseInt(__global.cookie("notice")),
            o = i.data("id");
            if (o != n && i.length) {
                layer.open({
                    className: "mk-notice",
                    title: "公告",
                    content: i.html(),
                    btn: ["朕知道了，你退下"],
                    shadeClose: !1,
                    yes: function(i) {
                        __global.cookie("notice", o, {
                            expires: 8760
                        }),
                        layer.close(i)
                    },
                    success: function() {
                        $(".mk-layer-close").on("click",
                        function() {
                            layer.closeAll(),
                            __global.cookie("notice", $("#notice").data("id"), {
                                expires: 8760
                            })
                        })
                    },
                    cancel: function(i) {
                        __global.cookie("notice", o, {
                            expires: 8760
                        }),
                        layer.close(i)
                    }
                })
            }
        }
        var r = o(0); !
        function(i) {
            if (i && i.__esModule) return i;
            var n = {};
            if (null != i) for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
            n.
        default = i
        } (r);
        o.e(0).then(function(i) {
            o(4);
            var n = 1.28 * parseInt(getComputedStyle(document.documentElement).fontSize);
            riverDrive.open({
                name: "ybRain",
                ext: [n, !0,
                function() {
                    t(),
                    riverDrive.open("topAlterBanner")
                }]
            })
        }.bind(null, o)).
        catch(o.oe);
        var a = __global.store("readList") || [],
        c = $("#readRecord");
        if (a.length) {
            var l = a[0],
            d = l.comic_name + " " + l.chapter_name;
			if(l.chapter_id){
            c.css("display", "flex").find(".read-history").html('上次阅读: <a href="/chapter/' + l.chapter_id + '.html" title="' + d + '">续看' + d + "</a>");
			}else{
				c.css("display", "flex").find(".read-history").html('上次阅读: <a href="/manhua/' + l.comic_id + '/" title="' + d + '">续看' + d + "</a>")
			}
        }
        $(".close").on("click",
        function() {
            c.hide()
        });
        var s = (new Swiper(".swiper-banner", {
            notNextTick: !0,
            autoplay: 2e3,
            autoplayDisableOnInteraction: !0,
            loop: !0,
            direction: "horizontal",
            setWrapperSize: !0,
            autoHeight: !1,
            pagination: ".swiper-pagination",
            observeParents: !0,
            onTouchEnd: function(i) {
                this._touchIndex = !0
            },
            onAutoplay: function(i) {
                this._touchIndex = !1
            },
            onSlidePrevEnd: function(i) {
                this._touchIndex && ("horizontal" === i.params.direction ? window.maidian && window.maidian.curstomMsg("scroll_derection_banner", {
                    scroll_derection: "左"
                }) : window.maidian && window.maidian.curstomMsg("scroll_derection_banner", {
                    scroll_derection: "上"
                }))
            },
            onSlideNextEnd: function(i) {
                this._touchIndex && ("horizontal" === i.params.direction ? window.maidian && window.maidian.curstomMsg("scroll_derection_banner", {
                    scroll_derection: "右"
                }) : window.maidian && window.maidian.curstomMsg("scroll_derection_banner", {
                    scroll_derection: "下"
                }))
            }
        }), new Swiper(".swiper-floor", {
            slidesPerView: "auto",
            freeMode: !0,
            spaceBetween: 0,
            freeModeMomentum: !0,
            observer: !0,
            observeParents: !0,
            onTouchEnd: function(i) {
                this._touchIndex = !0
            },
            onAutoplay: function(i) {
                this._touchIndex = !1
            },
            onSlidePrevEnd: function(i) {
                var n = i.wrapper.parents(".mk-floor").index();
                this._touchIndex && ("horizontal" === i.params.direction ? window.maidian && window.maidian.curstomMsg("scroll_derection_modular-" + n, {
                    scroll_derection: "左"
                }) : window.maidian && window.maidian.curstomMsg("scroll_derection_modular-" + n, {
                    scroll_derection: "上"
                }))
            },
            onSlideNextEnd: function(i) {
                var n = i.wrapper.parents(".mk-floor").index();
                this._touchIndex && ("horizontal" === i.params.direction ? window.maidian && window.maidian.curstomMsg("scroll_derection_modular-" + n, {
                    scroll_derection: "右"
                }) : window.maidian && window.maidian.curstomMsg("scroll_derection_modular-" + n, {
                    scroll_derection: "下"
                }))
            }
        }), $("#rank-tabs")),
        u = s.find(".tab-toggle li"),
        m = s.find(".modify");
        e(0);
        var w = new Swiper(".swiper-container-tab", {
            onSlideChangeEnd: function(i) {
                u.eq(i.activeIndex).addClass("active").siblings().removeClass("active")
            },
            onSlideChangeStart: function(i) {
                e(i.activeIndex)
            },
            onSlidePrevEnd: function(i) {
                "horizontal" === i.params.direction ? window.maidian && window.maidian.curstomMsg("scroll_derection_list", {
                    scroll_derection: "左"
                }) : window.maidian && window.maidian.curstomMsg("scroll_derection_list", {
                    scroll_derection: "上"
                })
            },
            onSlideNextEnd: function(i) {
                "horizontal" === i.params.direction ? window.maidian && window.maidian.curstomMsg("scroll_derection_list", {
                    scroll_derection: "右"
                }) : window.maidian && window.maidian.curstomMsg("scroll_derection_list", {
                    scroll_derection: "下"
                })
            }
        });
        u.on("click",
        function() {
            w.slideTo($(this).index())
        }),
        $(window).resize(function() {
            setTimeout(function() {
                e(s.find(".tab-toggle li.active").index())
            },
            500)
        }),
        $("#search").click(function() {
            o.e(1).then(function(i) {
                o(43)
            }.bind(null, o)).
            catch(o.oe)
        }),
        __global.search($("#search")),
        __global.classify()
    }
},
[108]);
//# sourceMappingURL=entry.index.4c5d0e.js.map
