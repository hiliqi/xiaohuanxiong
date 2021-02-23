function slide() {
    $('html,body').stop().animate({ scrollTop: 0 }, 500);
}

function setActive(myLi) {
    $('.header-search-list li').removeClass('active');
    myLi.addClass('active');
    if (myLi.parent().find('.type_2').length > 0) {
        myLi.parent().find('.type_2').hide();
        myLi.parent().find('.type_1').css('display', 'block');
        myLi.find('.type_2').show();
        myLi.find('.type_1').hide();
    }
}

function ShowDialog(title) {
    $(".toast").text(title);
    $(".toast").show();
    $("#alertTop_1").text(title);
    $(".alertTop_1").show();
    setTimeout(function () {
        $(".toast").hide();
        $(".alertTop_1").hide();
    }, 1000);
}

window.onresize = function () {
    if ($(window).width() < 1420) {
        $('.index-right-float').hide();
        $('.top-menu').hide();
    } else {
        $('.index-right-float').show();
        $('.top-menu').show();
    }
};

var showmorechapter = false;
//章节加载更多事件
function charpterMore() {
    var much = $("#detail-list-select li").length;
    if (much >= 12) {
        $('#detail-list-more').hide();
        $("#detail-list-select").css("max-height", "none");
    }
}

function sortBtnClick() {
    var orderIdArray = [];
    var idIndex = [];
    var a = $("#detail-list-title a");
    var mode = a.attr("mode");
    var orderid = $("#detail-list-select li");
    orderid.each(function (i) {
        var id = parseInt($(this).attr("idx"));
        idIndex[id] = i;        //orderid的序号
        orderIdArray.push(id);  //orderid的值
    });
    //index的值是从大到小的，所以此处的大于号和小于号是相反的
    if (mode == 1) {
        a.attr("mode", 0);
        a.html("倒序");
        orderIdArray = orderIdArray.sort(function (a, b) { return (a > b) ? 1 : -1 }); //从大到小排序
        a.addClass("inverted");
    }
    else if (mode == 0) {
        a.attr("mode", 1);
        a.html("正序");
        orderIdArray = orderIdArray.sort(function (a, b) { return (a < b) ? 1 : -1 }); //从小到大排序
        a.removeClass("inverted");
    }

    var list = $("#detail-list-select").find("li");
    var _length = orderIdArray.length;

    for (var i = 0; i < _length; i++) {
        $("#detail-list-select").append(list.eq(idIndex[orderIdArray[i]]));
    }
}

function scrollTopComment() {
    //console.log($('#formpl2').offset().top);
    $("body,html").animate({ scrollTop: $('#formpl2').offset().top - 100 }, 500);
    return false;
}