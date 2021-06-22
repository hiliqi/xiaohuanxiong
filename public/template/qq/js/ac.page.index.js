AC.namespace("AC.Page.Index");
AC.Page.Index = {
	protocol: "https:" === document.location.protocol ? "https:" : "http:",
	init: function() {
		AC.Page.Core.init();
		this.alienphoto();
		this.leftNavInit();
		var riseList = $("#in-rise-list"),
			btn = $("#in-rise-tab a");
		if (riseList.children()
			.size() > 1) this.riseScroll(riseList, btn);
		if (riseList.children()
			.size() < 2) $("#in-rise-tab")
			.hide();
		else if (riseList.children()
			.size() == 2) $("#in-rise-tab a")
			.eq(3)
			.hide();
		var aniList = $(".video-content-ul");
		if (aniList.children()
			.size() >
			1) this.animationSlider();
		AC.Page.Index.tabs({
			handle: $("#top-rank-handle")
				.find("li"),
			panel: $("#top-rank-panel"),
			activeClass: "active",
			delay: 100
		});
		setTimeout(function() {
			var wh = $(window)
				.height(),
				el = $("div.in-show-wr"),
				ws = parseInt($(window)
					.scrollTop() + wh);
			if (el[0]) {
				var elOffsetTop = parseInt(el.offset()
					.top);
				if (elOffsetTop <= ws || wh >= elOffsetTop) AC.Page.loadImage("div.in-show-wr")
			}
		}, 100);
		this.topAd($("#J_ad")
			.attr("data-info"));
		this.fixedTool();
		this.fixedCheck();
		$(window)
			.resize(function() {
				AC.Page.Index.fixedCheck()
			});
		this.fixSearch();
		this.faq();
		$("#ran-dir")
			.hoverDelay({
				outDuring: 100,
				hoverEvent: function() {
					$(this)
						.find("#in-dir-desc")
						.show()
				},
				outEvent: function() {
					$(this)
						.find("#in-dir-desc")
						.hide()
				}
			});
		this.addPointStatics();
		AC.Page.Index.tabs({
			handle: $("#in-anishe-tabbtn")
				.find("a"),
			panel: $(".in-anishe-tab-1"),
			activeClass: "active",
			delay: 100,
			callback: function() {
				var list1 = $("#in-anishe-list1"),
					list2 = $("#in-anishe-list2"),
					_thisIndex = $("#in-anishe-tabbtn")
					.children(".active")
					.index();
				if (!list2.hasClass("bxslider") &&
					_thisIndex == 1) {
					list2.bxSlider({
						pager: true,
						pagerType: "short",
						slideWidth: 9E3,
						slideMargin: 20,
						minSlides: 5,
						maxSlides: 5,
						moveSlides: 1,
						prevText: "<",
						nextText: ">",
						infiniteLoop: true,
						controls: true,
						mode: "fade"
					});
					list2.addClass("bxslider")
				}
			}
		});
		AC.Page.Index.tabs({
			handle: $(".in-ranrank-tab-a")
				.find("a"),
			panel: $(".in-monrank-tab-con"),
			activeClass: "active"
		});
		$(".mod-animate-list li")
			.hover(function() {
				$(this)
					.find(".mod-ani-info")
					.show()
			}, function() {
				$(this)
					.find(".mod-ani-info")
					.hide()
			});
		$(".in-news-list")
			.hover(function() {
					$(this)
						.find(".in-news-position")
						.show()
				},
				function() {
					$(this)
						.find(".in-news-position")
						.hide()
				});
		$("#top-search-input")
			.live("focus", function() {
				if ($(this)
					.val() == "") AC.Page.Index.getTopSearchComic();
				pgvSendClick({
					hottag: "NEW.AC_SEARCH.DIANJI"
				})
			});
		this.lazyLoadImage();
		if (!$.browser.msie) $("#banner")
			.addClass("blur-banner");
		this.bannerSlider("in-banner", "in-banner-page", "in-banner-arrow");
		$(".in-anishe-wrap img.lazy")
			.lazyload({
				threshold: 300,
				failurelimit: 10
			});
		this.rightComicTabs($("#in-sign-handle")
			.find("li"), ["#in-sign-cover",
				"#in-sign-intro"
			]);
		this.rightComicTabs($("#in-sign-handle-qtxt")
			.find("li"), ["#in-sign-cover-qtxt", "#in-sign-intro-qtxt"], "1");
		$("[data-ping]")
			.live("click", function() {
				var stats = $(this)
					.attr("data-ping");
				pgvSendClick({
					hottag: stats
				})
			})
	},
	lazyLoadImage: function() {
		AC.Page.loadImage("#in-sign-cover");
		AC.Page.loadImage("#in-sign-handle");
		AC.Page.loadImage("#in-sign-cover-qtxt");
		AC.Page.loadImage("#in-sign-handle-qtxt")
	},
	addPointStatics: function() {
		$(".mod-top-nav-list li")
			.removeClass("active")
			.eq(0)
			.addClass("active")
			.find("a")
			.attr("href", "javascript:void(0)");
		$(".mod-tags-list li:eq(0)")
			.addClass("ft-red")
	},
	pingTop70: function() {
		var top70 = "in-top70-panel";
		if ($("#" + top70)[0]) {
			var len = $("#" + top70)
				.children()
				.length,
				nameArr = ["all", "young",
					"girl", "rexue", "gaoxiao", "kongbu", "zhentan"
				],
				typeArr = ["renqi", "yuepiao", "dashang"];
			for (var i = 0; i < len; i++) {
				var _thisId = $("#" + top70)
					.children()
					.eq(i)
					.attr("id"),
					_name = _thisId.substring(9, 10),
					_type = _thisId.substring(11, 12);
				$("#" + top70)
					.children()
					.eq(i)
					.attr("data-ping", "new.ac_index.Allrank." + nameArr[_type] + "." + typeArr[_name])
			}
		}
	},
	animationSlider: function() {
		var container = $("#video-list");
		container.bxSlider({
			mode: "horizontal",
			maxSlides: 5,
			moveSlides: 1,
			slideWidth: 240,
			pager: false,
			controls: true,
			infiniteLoop: false,
			hideControlOnEnd: true
		});
		$("#video-list a")
			.live("mouseover", function() {
				var _this = $(this),
					i = _this.index();
				time = setTimeout(function() {
					_this.addClass("current")
						.siblings()
						.removeClass("current");
					$("#video-content-ul .video-content")
						.eq(i)
						.parent()
						.fadeIn("600")
						.siblings()
						.fadeOut("400")
				}, 300)
			})
			.live("mouseout", function() {
				clearTimeout(time)
			})
	},
	riseScroll: function(slider, btn) {
		var btn;
		var rise = {
			scroll: function() {
				this.bindEvent()
			},
			bindEvent: function() {
				slider.bxSlider({
					pager: false,
					slideWidth: 9E3,
					slideMargin: 20,
					minSlides: 5,
					maxSlides: 5,
					moveSlides: 5,
					infiniteLoop: true,
					controls: false,
					mode: "fade"
				});
				btn.bind("click", function() {
					var i = $(this)
						.index();
					var obj = null;
					if ($(this)
						.hasClass("in-rise-tab-leftbtn")) {
						slider.goToPrevSlide();
						var index = slider.getCurrentSlide() + 1;
						obj = btn.eq(index)
					} else if ($(this)
						.hasClass("in-rise-tab-rightbtn")) {
						slider.goToNextSlide();
						var index = slider.getCurrentSlide() + 1;
						obj = btn.eq(index)
					} else {
						slider.goToSlide(i - 1);
						obj = $(this)
					}
					swapClass(obj, "current")
				})
			}
		};

		function swapClass(el, _class) {
			el.addClass(_class)
				.siblings()
				.removeClass(_class)
		}
		rise.scroll()
	},
	fixSearch: function() {
		$("#mod-fix-search-input")
			.autocomplete("/Comic/search", {
				delay: 100,
				minChars: 1,
				width: 309,
				matchSubset: 1,
				matchContains: 1,
				autoFill: false,
				cacheLength: 10,
				formatItem: function(item) {
					return "<a href='javascript:void(0)'>" + item[1] + "</a>"
				},
				onItemSelect: function(li) {
					if (li.selectValue !== null && li.selectValue.length > 0) location.replace("/Comic/ComicInfo/id/" + li.selectValue, false)
				}
			})
	},
	rightComicTabs: function(tabParent, panel, lightState) {
		var isFirst =
			true,
			lightState = lightState || "";
		AC.Page.Index.tabs({
			handle: tabParent,
			panel: panel,
			activeClass: "active",
			delay: 100,
			preProcess: function(i) {
				if (isFirst) {
					isFirst = false;
					return
				}
				AC.Page.Index.signedLazyLoad(i, lightState)
			}
		})
	},
	getTopSearchComic: function() {
		var length = $("#ui-search-list-div")
			.html()
			.length;
		if (length > 10) return;
		$.ajax({
			type: "GET",
			url: "/Index/getTopSearchComic",
			cache: false,
			success: function(data) {
				var flag = data.substr(0, 1);
				var content = data.substr(1);
				if (flag == "1") {
					$("#ui-search-list-div")
						.html(content);
					$("#ui-search-list li")
						.first()
						.addClass("active");
					$("#ui-search-list li")
						.last()
						.addClass("last");
					$("#ui-search-list li")
						.mouseover(function() {
							$(this)
								.addClass("active")
								.siblings()
								.removeClass("active")
						});
					for (var i = 0; i < 10; i++) {
						$("#ui-search-list li:eq(" + i + ")")
							.find(".ui-search-info")
							.attr("onclick", "pgvSendClick({hottag:'NEW.AC_SEARCH.INPUT.TUIJIAN.COMICINFO" + (i + 1) + "'});");
						$("#ui-search-list li:eq(" + i + ")")
							.find(".ui-search-chapter")
							.attr("onclick", "pgvSendClick({hottag:'NEW.AC_SEARCH.INPUT.TUIJIAN.VIEW" +
								(i + 1) + "'});")
					}
				} else $("#ui-search-list-div")
					.html("")
			}
		})
	},
	alienphoto: function() {
		$("#alienphoto-wr .in-alienphoto-item")
			.hover(function() {
				var img =
					$(this)
					.find("img");
				$(this)
					.css({
						width: img.width() - 4,
						height: img.height() - 4
					})
			}, function() {
				var img = $(this)
					.find("img");
				$(this)
					.css({
						width: img.width(),
						height: img.height()
					})
			})
	},
	powerScroll: function(preProcess) {
		var preProcess = preProcess || null;
		var powerWr = $(".in-slider-wr"),
			powerList = $("#in-slider-list"),
			itemSize = powerList.find("li")
			.size(),
			limit = Math.floor(itemSize / 7),
			count = Math.floor(itemSize / 4),
			btn = $("#in-slider-btns")
			.find(".in-slider-btn"),
			pageIndex = 0;
		var powerSlider = powerList.bxSlider({
			pager: false,
			slideWidth: 9E3,
			slideMargin: 22,
			minSlides: 8,
			maxSlides: 8,
			moveSlides: 4,
			infiniteLoop: true,
			onSlideBefore: function() {
				if (preProcess) preProcess()
			},
			onSlideAfter: function() {
				var current = powerSlider.getCurrentSlide();
				switch (current) {
					case 0:
						pageIndex = 0;
						break;
					case 2:
						pageIndex = 1;
						break;
					case 4:
						pageIndex = 2;
						break
				}
				swapClass(btn.eq(pageIndex), "active")
			}
		});

		function swapClass(el, _class) {
			el.addClass(_class)
				.siblings()
				.removeClass(_class)
		}
		btn.click(function() {
			var idx = $(this)
				.index(),
				goIndex = idx * 2 > count ? count : idx * 2;
			powerSlider.goToSlide(goIndex)
		})
	},
	tabs: function(options) {
		var opts = $.extend({
				handle: null,
				panel: null,
				eventType: "mouseover",
				activeClass: null,
				delay: 0,
				callback: null
			}, options),
			timer;
		var tab = {
			view: function() {
				this.bindEvent();
				this.active(0)
			},
			bindEvent: function() {
				var self = this;
				if (opts.eventType == "hover") opts.eventType = "mouseover";
				opts.handle.live(opts.eventType, function() {
					if ($(this)
						.hasClass(opts.activeClass)) return false;
					timer && clearTimeout(timer);
					self.active($(this)
						.index())
				})
			},
			change: function(element, index) {
				var child = element.children(),
					actObj = opts.handle.eq(index);
				actObj.addClass(opts.activeClass)
					.siblings()
					.removeClass(opts.activeClass);
				child.eq(index)
					.show()
					.siblings()
					.hide()
			},
			active: function(index) {
				var self = this,
					panel = opts.panel;
				if (opts.preProcess) opts.preProcess(index);

				function setPanel() {
					if (panel && panel instanceof Array)
						for (var i = 0, j = panel.length; i < j; i++) self.change($(panel[i]), index);
					else self.change(panel, index);
					opts.callback && opts.callback(opts.handle.eq(index))
				}
				if (opts.delay) timer = setTimeout(function() {
					setPanel()
				}, opts.delay);
				else setPanel()
			}
		};
		tab.view()
	},
	leftNavInit: function() {
		$("#mod-fixed-left-tags li")
			.click(function() {
				var index = $(this)
					.index(),
					positionMap = {
						0: $("#in-strong-wr")
							.offset()
							.top - 100,
						1: $("#in-anishe-wrap")
							.offset()
							.top - 100,
						2: $("#in-sign-wr")
							.offset()
							.top - 100,
						3: $("#in-video-wr")
							.offset()
							.top - 100,
						4: $("#in-vip-wr")
							.offset()
							.top - 100,
						5: $("#in-teen-list-wr")
							.offset()
							.top - 100,
						6: $("#in-top70")
							.offset()
							.top - 100
					};
				pgvSendClick({
					hottag: "ac_index. relate" + (index + 1)
				});
				$("html,body")
					.animate({
							scrollTop: positionMap[index]
						},
						300)
			});
		$("#mod-fixed-left-top")
			.click(function() {
				$("html,body")
					.animate({
						scrollTop: 0
					}, 300)
			})
	},
	commendLazyLoad: function() {
		AC.Page.loadImage(".in-slider-list", true)
	},
	riseLazyLoad: function() {
		AC.Page.loadImage(".in-rise-list", true)
	},
	signedLazyLoad: function(index, light) {
		var light = light || "";
		if (index == null) return false;
		if (light == "") container = $("#in-sign-cover a")
			.eq(index);
		else container = $("#in-sign-cover-qtxt a")
			.eq(index);
		AC.Page.loadImage(container, true)
	},
	gambleLazyLoad: function(index) {
		if (index == null) return false;
		container =
			$(".in-gamble-content-wr")
			.eq(index);
		AC.Page.loadImage(container, true)
	},
	topBang: function() {
		var handle = $("#in-top70-handle"),
			position = $("#in-top70")
			.offset()
			.top - $("#fixed")
			.height() + 485,
			triggerFunc, positionAnimate;
		triggerFunc = function(index) {
			handle.find("a")
				.eq(index)
				.trigger("mouseover");
			$("html,body")
				.animate({
					scrollTop: position
				}, 300)
		};
		$("#in-teen-handle")
			.click(function() {
				triggerFunc(1)
			});
		$("#in-girl-handle")
			.click(function() {
				triggerFunc(2)
			})
	},
	faq: function() {
		$(".vip-faq")
			.bind("click", function() {
				$(this)
					.parent()
					.next()
					.toggle()
			})
	},
	fixedTool: function() {
		if (AC.Page.Core.avatar) $("#fixed-avatar")
			.attr("src", AC.Page.Core.avatar);
		var fixedLayer = $("#fixed"),
			strongWr = $("div.in-strong-wr"),
			headHeigth = 712,
			fixTimer, fixedShow = function(el) {
				el.css({
					"top": "0px",
					"visibility": "visible"
				})
			},
			fixedHide = function(el) {
				el.css({
					"top": "-79px",
					"visibility": "hidden"
				})
			},
			resultsHide = function() {
				var res = $("#fix-search .ac_results"),
					inp = $("#mod-fix-search-input");
				if (res[0]) {
					res.hide();
					inp.val("")
				}
			};
		$(window)
			.bind("scroll", function(e) {
				var scrollTopVal = parseInt($(this)
					.scrollTop());
				if (scrollTopVal > headHeigth) fixedShow(fixedLayer);
				else {
					fixedHide(fixedLayer);
					resultsHide()
				}
			})
	},
	fixedCheck: function() {
		var winWidth = $(window)
			.width(),
			fixMain = $("#fixed")
			.find(".mod-fixed-top"),
			fixa = fixMain.find(".mod-fixed-top-tags a");
		var setStyle = function() {
			var args = arguments;
			fixa.css("width", args[0]);
			fixMain.css("width", args[1])
		};
		return winWidth <= 1050 ? setStyle(80, 990) : setStyle(100, 1200)
	},
	processDisplay: function(comicList) {
		for (var i = 0; i < comicList.length; i++) {
			comicList[i]["url"] = "/Comic/ComicInfo/id/" +
				comicList[i]["id"];
			comicList[i]["less_title"] = comicList[i]["title"].substring(0, 8);
			comicList[i]["score_flag"] = parseInt(comicList[i]["score"]);
			if (comicList[i]["tag"] != "") {
				var tagHtml = "";
				var tagArr = comicList[i]["tag"].split(" ");
				for (var j = 0; j < tagArr.length; j++) {
					var tag = tagArr[j].split("|");
					var tagLink = tag != null ? "/Comic/index/theme/" + tag[1] : "javascript:void(0)";
					var tagName = tag != null ? tag[0] : "";
					tagHtml += '<a class="mod-tag-item" href="' + tagLink + '" target="_blank">' + tagName + "</a> "
				}
				comicList[i]["tag_html"] =
					tagHtml
			}
		}
		return comicList
	},
	topAd: function(adInfo, btnBgColor, iconBgColor) {
		if (!$("#J_ad")[0]) return;
		var adBtn = $("#J_ad_btn"),
			adContent = $("#J_ad"),
			topWrapp = $(".mod-top-wr"),
			info = adInfo || "",
			origHeight = adContent.height() || 0,
			switc = true,
			type = 0,
			speed = 750,
			timer = null,
			isIE7 = $.browser.msie && $.browser.version < 8 ? true : false,
			isIE = AC.UTILS.Browser.isIE();
		var topad = {
			init: function() {
				var self = this;
				self.setStyle();
				self.adEvent();
				timer = setTimeout(function() {
					self.slide("up")
				}, 8E3)
			},
			adEvent: function() {
				var self = this;
				adBtn.on("click",
					function() {
						if (!switc) return false;
						timer && clearTimeout(timer);
						type == 0 ? self.slide("up") : self.slide("down")
					})
			},
			setStyle: function() {
				var btnBg = btnBgColor || "#d23606",
					iconBg = iconBgColor || "#a42700";
				adBtn.css("background-color", btnBg);
				adBtn.find("i")
					.css("background-color", iconBg);
				if (isIE7) this.IEslowStyle()
			},
			IEslowStyle: function() {
				adBtn.css("width", adBtn.find("span")
					.innerWidth("padding") + adBtn.find("i")
					.outerWidth("margin"))
			},
			slide: function(method) {
				var self = this,
					btnText = adBtn.find("span"),
					Class;
				Class = {
					down: function() {
						switc =
							false;
						if (!isIE) adContent.css("height", "90px");
						else adContent.animate({
							height: "90px"
						}, 700);
						setTimeout(function() {
							type = 0;
							btnText.text("\u5173\u95ed");
							if (adBtn.hasClass("open")) adBtn.removeClass("open");
							if (isIE7) self.IEslowStyle();
							switc = true
						}, 600)
					},
					up: function() {
						switc = false;
						if (!isIE) adContent.css("height", "0");
						else adContent.animate({
							height: "0"
						}, 600);
						setTimeout(function() {
							type = 1;
							adBtn.addClass("open");
							btnText.text(info);
							if (isIE7) self.IEslowStyle();
							switc = true
						}, 600)
					}
				};
				return Class[method]()
			}
		};
		topad.init()
	},
	popAd: function() {
		return
	},
	top70Tab: function() {
		var minBtn = $(".in-top70-tab"),
			subBtn = $("#in-top70-handle"),
			tabcontent = $("#in-top70-panel");
		minBtn.find("a")
			.live("mouseover", function() {
				var _thisIndex = $(this)
					.index(),
					subActiveIndex = subBtn.children(".active")
					.index();
				$(this)
					.addClass("active")
					.siblings()
					.removeClass("active");
				$("#rank_div_" + _thisIndex + "_" + subActiveIndex)
					.show()
					.siblings()
					.hide()
			});
		subBtn.find("a")
			.live("mouseover", function() {
				var _thisIndex = $(this)
					.index(),
					minActiveIndex = minBtn.children(".active")
					.index();
				$(this)
					.addClass("active")
					.siblings()
					.removeClass("active");
				$("#rank_div_" + minActiveIndex + "_" + _thisIndex)
					.show()
					.siblings()
					.hide()
			})
	},
	centerDom: function(obj) {
		var windowWidth = document.documentElement.clientWidth;
		var windowHeight = document.documentElement.clientHeight;
		var popupHeight = $(obj)
			.height();
		var popupWidth = $(obj)
			.width();
		$(obj)
			.css({
				"position": "absolute",
				"top": (windowHeight - popupHeight) / 2 + $(document)
					.scrollTop(),
				"left": (windowWidth - popupWidth) / 2
			})
	},
	bannerSlider: function(container, btnId, pageId) {
		var container =
			$("#" + container),
			btnId = $("#" + btnId),
			pagebtn = $("#" + pageId)
			.find("a"),
			current = btnId.find("current");
		var btn = btnId.find(".in-banner-item");
		slider = container.bxSlider({
			pager: false,
			slideWidth: 9E3,
			slideMargin: 20,
			minSlides: 5,
			maxSlides: 5,
			moveSlides: 5,
			infiniteLoop: true,
			controls: false,
			mode: "fade"
		});
		eggAnimate();
		timer = setTimeout(function() {
			addAnimate()
		}, 500);
		setTimeout(function() {
			$("#in-animate-egg")
				.show()
		}, 500);
		btn.bind("click", function() {
			var i = $(this)
				.index();
			var obj = null;
			container.goToSlide(i);
			obj = $(this);
			btn.eq(i)
				.addClass("current")
				.siblings()
				.removeClass("current");
			$(".in-banner-focus")
				.stop()
				.css("width", "0")
				.appendTo(btn.eq(i))
		});
		pagebtn.live("click", function() {
			var i = $(this)
				.index();
			var obj = null;
			if ($(this)
				.hasClass("in-banner-leftbtn")) prevSlider();
			if ($(this)
				.hasClass("in-banner-rightbtn")) nextSlider()
		});
		$("#banner")
			.bind({
				mouseover: function() {
					mouseOver()
				},
				mouseout: function() {
					mouseOut()
				}
			});

		function eggAnimate() {
			var i = 0,
				$div = $("#in-animate-egg");
			setInterval(function() {
				i++;
				if (i == 12) i = 0;
				$div.attr("class",
					"in-animate-egg-" + i)
			}, 100)
		}

		function prevSlider() {
			slider.goToPrevSlide();
			var index = slider.getCurrentSlide();
			obj = btn.eq(index);
			obj.addClass("current")
				.siblings()
				.removeClass("current");
			$(".in-banner-focus")
				.stop()
				.css("width", "0")
				.appendTo(obj);
			addAnimate()
		}

		function nextSlider() {
			container.goToNextSlide();
			var index = slider.getCurrentSlide();
			obj = btn.eq(index);
			obj.addClass("current")
				.siblings()
				.removeClass("current");
			$(".in-banner-focus")
				.stop()
				.css("width", "0")
				.appendTo(obj);
			addAnimate()
		}

		function addAnimate() {
			$(".in-banner-focus")
				.css("width",
					"0");
			$(".in-banner-focus")
				.animate({
					width: "100%"
				}, 7900, function() {
					$(".in-banner-focus")
						.css("width", "0");
					nextSlider()
				})
		}

		function stopAnimate() {
			$(".in-banner-focus")
				.stop()
		}

		function mouseOver() {
			clearTimeout(timer);
			stopAnimate();
			$(".in-banner-focus")
				.css("width", "0")
				.hide()
		}

		function mouseOut() {
			clearTimeout(timer);
			timer = setTimeout(function() {
				$(".in-banner-focus")
					.css("width", "0")
					.show();
				addAnimate()
			}, 500)
		}
	}
};
$(function() {
	AC.Page.Index.init()
});