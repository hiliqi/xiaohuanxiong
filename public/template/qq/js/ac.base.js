AC = {
    namespace: function() {
        var a = arguments,
            o = null,
            i, j, d, rt;
        for (i = 0; i < a.length; ++i) {
            d = a[i].split(".");
            rt = d[0];
            eval("if (typeof " + rt + ' == "undefined") {' + rt + " = {};} o = " + rt + ";");
            for (j = 1; j < d.length; ++j) {
                o[d[j]] = o[d[j]] || {};
                o = o[d[j]]
            }
        }
    }
};
AC.namespace("AC", "AC.Page", "AC.UI", "AC.UTILS");
AC.namespace("AC.UI.Tab");
AC.UI.Tab = {
    change: function(tabNav, activeClass, tabCon) {
        $(tabCon)
            .each(function() {
                $(this)
                    .children()
                    .eq(0)
                    .show()
            });
        $(tabNav)
            .each(function() {
                $(this)
                    .children()
                    .eq(0)
                    .addClass(activeClass)
            });
        $(tabNav)
            .children()
            .click(function() {
                $(this)
                    .addClass(activeClass)
                    .siblings()
                    .removeClass(activeClass);
                var index = $(tabNav)
                    .children()
                    .index(this);
                $(tabCon)
                    .children()
                    .eq(index)
                    .show()
                    .siblings()
                    .hide()
            })
    }
};
AC.namespace("AC.UI.Input");
AC.UI.Input = {
    insertText: function(inputId, inputText) {
        var inputObject = $("#" + inputId);
        inputObject.focus();
        var textObj = inputObject.get(0);
        if (document.all && textObj.createTextRange) {
            var textRange = document.selection.createRange();
            textRange.text = inputText
        } else if (textObj.setSelectionRange) {
            var rangeStart = textObj.selectionStart;
            var rangeEnd = textObj.selectionEnd;
            var tempStr1 = textObj.value.substring(0, rangeStart);
            var tempStr2 = textObj.value.substring(rangeEnd);
            var len = inputText.length;
            textObj.value = tempStr1 +
                inputText + tempStr2;
            textObj.setSelectionRange(rangeStart + len, rangeStart + len)
        } else textObj.value += inputText;
        inputObject.trigger("input")
    },
    moveEnd: function(inputId) {
        var inputObject = $("#" + inputId);
        inputObject.focus();
        var inputObject = inputObject.get(0);
        var len = inputObject.value.length;
        if (document.selection) {
            var sel = inputObject.createTextRange();
            sel.moveStart("character", len);
            sel.collapse();
            sel.select()
        } else if (typeof inputObject.selectionStart == "number" && typeof inputObject.selectionEnd == "number") inputObject.selectionStart =
            inputObject.selectionEnd = len
    }
};
AC.namespace("AC.UI.Dialog");
AC.UI.Dialog = {
    showAction: function(elementId) {
        showDialog.show({
            id: elementId,
            bgcolor: "#000",
            opacity: 70
        })
    },
    showMsg: function(msgContent, msgType) {
        var msgCss = msgType == "1" ? "succeed" : msgType == "2" ? "failed" : "warning";
        showDialog.show({
            sMsg: msgContent,
            sClass: msgCss,
            bgcolor: "#000",
            sTime: 3E3,
            opacity: 70
        })
    },
    hide: function() {
        showDialog.hide()
    }
};
AC.namespace("AC.UTILS.Browser");
AC.UTILS.Browser = {
    userAgentLower: navigator.userAgent.toLowerCase(),
    checkUserAgent: function(regex) {
        return regex.test(this.userAgentLower)
    },
    isOpera: function() {
        return this.checkUserAgent(/opera/)
    },
    isChrome: function() {
        return this.checkUserAgent(/\bchrome\b/)
    },
    isSougo: function() {
        return this.checkUserAgent(/se .+ metasr/)
    },
    isSafari: function() {
        return !this.isChrome() && this.checkUserAgent(/safari/)
    },
    isIE: function() {
        return !this.isOpera() && this.checkUserAgent(/msie/)
    },
    isIE6: function() {
        return this.isIE() && this.checkUserAgent(/msie 6/)
    }
};
AC.namespace("AC.UTILS.Include");
AC.UTILS.Include = {
    FilePath: "",
    Path: function(path) {
        var path = path || "";
        if (typeof path !== "string") {
            throw new Error("path --\x3e string");
            return
        } else if (this.FilePath !== "") return;
        this.FilePath += path
    },
    Loader: function(urls, callback) {
        var self = this,
            path = self.FilePath,
            script = $("head")
                .find("script"),
            successCallback = arguments[1],
            failCallback = arguments[2];
        var loaderMethod = {
            loaderReady: function(urls) {
                var dtd = $.Deferred(),
                    node = document.createElement("script"),
                    isExist = false,
                    resolved;
                node.type = "text/javascript";
                resolved = function() {
                    dtd.resolve()
                };
                if (!urls.match(/.js/i)) return;
                if (script[0]) script.each(function() {
                    if ($(this)
                        .attr("src") === urls) {
                        isExist = true;
                        resolved()
                    }
                });
                if (!isExist) {
                    $(node)
                        .load(resolved)
                        .bind("readystatechange", function() {
                            if (node.readyState == "loaded" || node.readyState == "complete") {
                                node.onreadystatechange = null;
                                resolved()
                            }
                        });
                    document.getElementsByTagName("head")[0].appendChild(node);
                    node.src = urls
                }
                return dtd.promise()
            },
            loaderAction: function(urls) {
                var that = this,
                    ret = [],
                    newUrl = [];
                if (typeof urls ===
                    "string") ret.push(that.loaderReady(path + urls));
                else {
                    var i = 0,
                        l = urls.length;
                    for (; i < l; i++) {
                        newUrl.push(path + urls[i]);
                        ret.push(that.loaderReady(newUrl[i]))
                    }
                }
                return $.when.apply($, ret)
                    .done(function() {
                        successCallback && successCallback()
                    })
                    .fail(function() {
                        failCallback && failCallback()
                    })
            }
        };
        return loaderMethod.loaderAction(urls)
    }
};
AC.namespace("AC.Page");
AC.Page = {
    protocol: "https:" === document.location.protocol ? "https:" : "http:",
    loadImage: function(container, force) {
        if (undefined == container || container == "") $("img.lazy")
            .lazyload({
                threshold: 100,
                failurelimit: 10
            });
        else if (undefined != force && true == force) $(container)
            .find("img.lazy")
            .each(function() {
                var src =
                    $(this)
                        .attr("src");
                var original = $(this)
                    .attr("data-original");
                if (src != "" && original != "" && original != src) $(this)
                    .attr("src", original)
            });
        else $(container)
                .find("img.lazy")
                .lazyload({
                    threshold: 100,
                    failurelimit: 10
                })
    },

    coreBind: function() {
        AC.UI.Tab.change("#mod-log-handle", "active", "#mod-log-main");
        AC.UI.Tab.change("#mod-log-his-handle", "active", "#mod-log-his-panel");
        AC.Page.Core.bindEvent();
    },
    GetQueryString: function(item) {
        var svalue = location.search.match(new RegExp("[?&]" + item + "=([^&]*)(&?)", "i"));
        return svalue ? svalue[1] : svalue
    },

};

function ptlogin2_onClose() {
    $.unblockUI()
}

function ptlogin2_onResize() {}
AC.namespace("AC.Page.Core");
AC.Page.Core = {
    nick: "",
    avatar: "",
    init: function() {
        AC.Page.Core.Timetstamp = (new Date)
            .getTime();
        AC.Page.loadImage();
        this.bindForRank();
        AC.Page.Core.sideTool();
        AC.Page.coreBind();
    },
    bindForRank: function() {
        $(".mod_rank_wr")
            .each(function() {
                $(this)
                    .find(".mod_rank_list")
                    .eq(0)
                    .css("display",
                        "block")
            });
        $(".mod_rank_tab li")
            .click(function() {
                var css = "current";
                if (!$(this)
                    .hasClass(css)) {
                    var tmp = this.id.split("_");
                    if (tmp.length > 0) {
                        var flag = tmp[0];
                        var id = tmp[1];
                        for (var i = 1; i <= 4; i++) {
                            $("#" + flag + "_" + i)
                                .removeClass(css);
                            $("#d_" + flag + "_" + i)
                                .hide()
                        }
                        $("#d_" + flag + "_" + id)
                            .show();
                        $(this)
                            .addClass(css)
                    }
                }
            })
    },
    bindEvent: function() {
        $("#a_login")
            .live("click", function() {
                AC.Page.showLogin(location.pathname)
            });
        $("#bookshelf_login")
            .live("click", function() {
                AC.Page.showLogin(location.pathname)
            });
        $("#a_logout")
            .live("click",
                function() {
                    $("#top-user-info")
                        .hide();
                    AC.Page.logout()
                });
        $("#igonAllComic")
            .live("click", function() {
                AC.Page.Core.igonAllComic()
            });
        $(".mod-top-user")
            .hoverDelay({
                outDuring: 200,
                hoverEvent: function() {
                    $obj = $(this);
                    var timestamp = (new Date)
                        .getTime();
                    if (AC.Page.Core.firstLoad != 1 || AC.Page.Core.Timetstamp + 1E4 < timestamp) {
                        AC.Page.Core.Timetstamp = timestamp;
                        $.get("/Ajax/getUserInfo", {
                            stamp: Math.random()
                        }, function(data) {
                            var avatar = data.avatar.match(/^(https?):\/\/.+$/g) ? data.avatar : "//ac.gtimg.com/media/images/top_face_no_bg.jpg";
                            AC.Page.Core.firstLoad = 1;
                            if (data.status == 2) {
                                $obj.attr("data", timestamp);
                                data = data.result;
                                $("#mod-dropdown-info")
                                    .html(template.render("script-user-info-dropdown", data));
                                $("#mod-top-user")
                                    .find("img")
                                    .first()
                                    .attr("src", avatar);
                                $(".mod-user-msg-wr")
                                    .attr("style", "display:block");
                                AC.Page.Core.avatar = data.avatar || "//ac.gtimg.com/media/images/top_face_no_bg.jpg";
                                AC.Page.Core.hasLogin = "1";
                                AC.Page.Core.nick = data.shortNick;
                                AC.Page.Core.token = data.token;
                                AC.Page.setUserCookie()
                            } else if (data.status == -99) {
                                $("#mod-dropdown-info")
                                    .html("");
                                $("#mod-top-user")
                                    .find("img")
                                    .first()
                                    .attr("src", "//ac.gtimg.com/media/images/top_face_no_bg.jpg");
                                $(".mod-user-msg-wr")
                                    .attr("style", "display:none");
                                AC.Page.cleanUserCookie()
                            } else if (data.status == -97) {
                                $("#top-user-info")
                                    .hide();
                                AC.Page.logout()
                            }
                        }, "json")
                    }
                },
                outEvent: function() {}
            });
        $(".mod-top-log")
            .hoverDelay({
                outDuring: 200,
                hoverEvent: function() {
                    var timestamp = (new Date)
                        .getTime();
                    if (AC.Page.Core.Timetstamp + 1E4 < timestamp) {
                        AC.Page.Core.loadFavoritUpdate();
                        AC.Page.Core.Timetstamp = timestamp
                    }
                },
                outEvent: function() {}
            });
        $("#mod-top-log-history")
            .die("click")
            .live("click", function() {
                var timestamp = (new Date)
                    .getTime();
                if (AC.Page.Core.Timetstamp + 1E4 < timestamp) {
                    AC.Page.Core.loadReadHistory();
                    AC.Page.Core.Timetstamp = timestamp
                }
            });
        this.directH5btn();
        $("#loginframe")
            .find(".close-btn")
            .live("click", function() {
                AC.Page.hideLogin()
            });
        $("#loginframe")
            .find(".tab-item")
            .live("click", function(e) {
                if ($(e.currentTarget)
                    .hasClass("active")) return;
                $(e.currentTarget)
                    .addClass("active")
                    .siblings(".tab-item")
                    .removeClass("active");
                if ($(e.currentTarget)
                    .hasClass("item-qq")) {
                    $(".iframe-qq")
                        .addClass("active");
                    $(".iframe-wx")
                        .removeClass("active")
                } else {
                    $(".iframe-wx")
                        .addClass("active");
                    $(".iframe-qq")
                        .removeClass("active")
                }
            })
    },
    directH5btn: function() {},
    igonAllComic: function() {
        $.post("/Ajax/ignoreUpdate", {
            "tokenKey": AC.Page.Core.token
        }, function(data) {
            if (data.status == 1) {
                $("#mod-log-fav-mh")
                    .html('<div class="mod-userlog-tips"><h3>\u60a8\u6536\u85cf\u7684\u6f2b\u753b\u6682\u65e0\u66f4\u65b0</h3><p class="ui-mb40">sorry,\u4f5c\u8005\u6b63\u5728\u52aa\u529b\u8d76\u7a3f\u4e2d\uff0c\u660e\u5929\u518d\u6765\u770b\u770b\u5427\uff01</p></div>');
                $("#mod-top-log")
                    .find(".mod-user-msg-num")
                    .text("0")
                    .hide()
            } else if (data.status == -98 || data.status == -99) AC.Page.showLogin(location.pathname)
        }, "json")
    },
    sideTool: function() {
        var sideWr = $("#mod-side-tool"),
            scrollTopElement = $("#scroll-top"),
            sideTimer;
        if (sideWr[0]) {
            $(window)
                .bind("scroll", function() {
                    var scrollTopVal = $(this)
                        .scrollTop();
                    if (sideTimer) clearTimeout(sideTimer);
                    sideTimer = setTimeout(function() {
                        scrollTopVal > 400 ? sideWr.fadeIn() : sideWr.fadeOut()
                    }, 200)
                });
            scrollTopElement.click(function() {
                $("html, body")
                    .animate({
                        scrollTop: 0
                    }, 100)
            })
        }
    }
};
AC.namespace("AC.UI.Tabs");
AC.UI.Tabs = {
    view: function(options) {
        var defaults = {
                eventType: "mouseover",
                wrap: null,
                handle: null,
                panel: null,
                activeClass: "active",
                delay: 100,
                callback: null
            },
            opts = $.extend({}, defaults, options),
            timer, change = function(handle, panel, index) {
                handle.siblings()
                    .removeClass(opts.activeClass);
                handle.addClass(opts.activeClass);
                panel.eq(index)
                    .show()
                    .siblings()
                    .hide();
                opts.callback && opts.callback(handle)
            };
        if (opts.wrap) {
            opts.handle = opts.wrap.find(".tabs-handle")
                .children();
            opts.panel = opts.wrap.find(".tabs-panel")
                .children()
        }
        if (opts.eventType ==
            "hover") opts.eventType = "mouseover";
        opts.handle.bind(opts.eventType, function() {
            var $this = $(this),
                idx = $this.index();
            if ($this.hasClass(opts.activeClass)) return false;
            timer && clearTimeout(timer);
            if (opts.delay) timer = setTimeout(function() {
                change($this, opts.panel, idx)
            }, opts.delay);
            else change($this, opts.panel, idx)
        });
        opts.handle.eq(0)
            .addClass(opts.activeClass);
        opts.panel.eq(0)
            .show()
            .siblings()
            .hide()
    }
};
AC.namespace("AC.UI.PopUp");
AC.UI.PopUp = {
    timer: null,
    closeHolder: ".ui-popup-btn-close, .ui-popup-closer",
    createBasicSkin: function(settings) {
        var title = settings.title || "",
            content = settings.content || "",
            foot = settings.foot || "",
            _class = settings._class || "",
            basicHtml = "";
        basicHtml += '<div class="ui-popup-wr ' + _class + '"><div class="ui-popup-content-wr">';
        if (typeof title === "string" && $.trim(title) !== "") basicHtml += '<div class="ui-popup-head"><h3 class="ui-popup-title">' + title + "</h3></div>";
        basicHtml += '<div class="ui-popup-content">' + content +
            "</div>";
        if (typeof foot === "string" && $.trim(foot) !== "") basicHtml += '<div class="ui-popup-foot-wr">' + foot + "</div>";
        basicHtml += '</div><sub class="ui-popup-closer">\u5173\u95ed</sub></div>';
        return basicHtml
    },
    closePanel: function() {
        var self = this;
        return $(self.closeHolder)
            .on("click", function() {
                self.hide()
            })
    },
    elementReady: function(element, contentSettings) {
        var self = this,
            isFirst = true,
            elemContent;
        if (element.find(".ui-popup-wr")[0]) isFirst = false;
        if (isFirst) {
            $("#_PopupMsg_")
                .css({
                    "border": "none",
                    "padding": "0px"
                });
            elemContent = self.createBasicSkin(contentSettings);
            element.children()
                .remove();
            $(elemContent)
                .prependTo(element)
        }
    },
    showElement: function(elementId, title) {
        var element = $("#" + elementId);
        showDialog.show({
            id: elementId,
            bgcolor: "#000",
            opacity: 30,
            deleyPop: true
        });
        this.elementReady(element, {
            title: title || "",
            content: element.html()
        });
        this.action();
        this.closePanel()
    },
    showMsg: function(msgContext, msgType) {
        var self = this,
            settings = {
                content: '<div class="ui-popup-msg clearfx"><i></i><p class="ui-popup-msg-text">' + msgContext +
                    "</p></div>"
            },
            time = 2E3,
            msgContent;
        var statusClass = msgType == "1" ? "succeed" : msgType == "2" ? "failed" : "warning";
        settings._class = statusClass;
        msgContent = this.createBasicSkin(settings);
        showDialog.show({
            sMsg: msgContent,
            bgcolor: "#000",
            opacity: 30,
            sStyle: "border:none;border-radius:3px;padding:0;",
            onCloseCallback: function() {
                self.timer && clearTimeout(self.timer)
            }
        });
        self.timeout(time);
        this.action();
        this.closePanel()
    },
    show: function(options) {
        var self = this,
            opts, contentHtml, popCallbak;
        opts = $.extend({
            elementId: null,
            frameSrc: null,
            bgcolor: "#000",
            opacity: 30,
            width: 350,
            height: 150,
            hideTime: 0,
            title: "",
            foot: "",
            content: "popup content",
            popClass: "",
            delayPop: false,
            onPopupCallback: null,
            onCloseCallback: null,
            okCallback: null,
            callback: null
        }, options), contentSettings = {
            title: opts.title,
            content: opts.content,
            foot: opts.foot,
            _class: opts.popClass
        };
        contentHtml = this.createBasicSkin(contentSettings);
        if (opts.frameSrc || opts.elementId) opts.delayPop = true;
        if (opts.elementId) contentHtml = null;
        showDialog.show({
            id: opts.elementId,
            src: opts.frameSrc,
            bgcolor: opts.bgcolor,
            opacity: opts.opacity,
            iWidth: opts.width,
            iHeight: opts.height,
            sMsg: contentHtml,
            delayPop: opts.delayPop,
            sStyle: "border:none;border-radius:3px;padding:0;",
            onPopupCallback: function() {
                opts.onPopupCallback && opts.onPopupCallback()
            },
            onCloseCallback: function() {
                self.timer && clearTimeout(self.timer);
                if (opts.callback) opts.callback = null;
                opts.onCloseCallback && opts.onCloseCallback()
            }
        });
        if (opts.elementId) {
            var element = $("#" + opts.elementId);
            contentSettings["content"] = element.html();
            self.elementReady(element, contentSettings)
        }
        if (opts.frameSrc &&
            opts.delayPop) $("#_PopupIframe_")
            .appendTo($(".ui-popup-content-wr"));
        if (opts.hideTime) self.timeout(opts.hideTime);
        $(".ui-popup-callback")
            .live("click", function() {
                if (opts.callback) opts.callback()
            });
        this.closePanel();
        this.action()
    },
    timeout: function(time) {
        var self = this;
        self.timer = setTimeout(function() {
            self.hide()
        }, time)
    },
    action: function() {
        return showDialog.popup()
    },
    hide: function(param) {
        var bool = param == false ? {
            cancleCallback: true
        } : "";
        showDialog.hide(bool)
    },
    savet: function() {
        var self = this;
        self.hide();
        setTimeout(function() {
                location.reload()
            },
            1E3)
    }
};
AC.namespace("AC.UI.Slider");
AC.UI.Slider = {
    show: function(list, opts) {
        var list = $(list),
            opts = $.extend({
                mode: "fade",
                speed: 600,
                auto: true,
                autoDelay: 2E3,
                loop: true,
                captions: false,
                pager: true,
                arrow: true,
                lazy: false,
                randomStart: false
            }, opts);
        if (list.children()
            .size() > 1) {
            var Slider = list.bxSlider({
                mode: opts.mode,
                infiniteLoop: opts.loop,
                auto: opts.auto,
                autoDelay: opts.autoDelay,
                captions: opts.captions,
                speed: opts.speed,
                pager: true,
                randomStart: opts.randomStart,
                onSlideBefore: function(el, o, n) {
                    var clone = el.siblings(".bx-clone");
                    if (opts.lazy)
                        if (opts.mode ==
                            "fade") AC.Page.loadImage(el.siblings(), true);
                        else if (n === Slider.getSlideCount() - 1 && clone[0]) AC.Page.loadImage(clone, true)
                }
            });
            var parant = list.parents(".bx-wrapper"),
                pager = parant.find(".bx-pager"),
                arrow = parant.find(".bx-controls-direction");
            if (!opts.pager) pager.css("display", "none");
            if (!opts.arrow) arrow.css("display", "none");
            parant.addClass("mod-slider")
                .css("position", "relative");
            parant.hover(function() {
                Slider.stopAuto()
            }, function() {
                Slider.startAuto()
            })
        }
    }
};