var isedit = false;
function editReadhistory() {
    $("#btnedit").hide();
    $("#btneditclose").show();
    $(".buy-manga-cover-hover").show();
    $(".center-main-bottom-btn").show();
    isedit = true;
}

function editReadhistoryClose() {
    $("#btnedit").show();
    $("#btneditclose").hide();
    $(".buy-manga-cover-hover").hide();
    $(".center-main-bottom-btn").hide();
    isedit = false;
}

var temparr = [];
$(function () {
    $(".buy-manga-cover-hover").click(function () {
        var mid = $(this).attr("mid");
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            if ($.inArray(mid, temparr) != -1) {
                temparr.splice($.inArray(mid, temparr), 1);
            }
        } else {
            $(this).addClass("active");
            if ($.inArray(mid, temparr) == -1) {
                temparr.push(mid);
            }
        }
    });
});

function clearReadhistory() {

}

function deleteReadhistory()
{
    var temparr = $('.buy-manga-cover-hover.active');
    if (temparr.length > 0) {
        $(temparr).map(function () {
            localStorage.removeItem('manhua_' + $(this).attr('mid'));
            let value = localStorage.getItem('xwx_historys');
            if (value != undefined && value != null) {
                let history = JSON.parse(value);
                for (let i = 0; i < history.length; i++) {
                    if (history[i] == 'manhua_' + $(this).attr('mid')){
                        history.slice(i, 1);
                    }
                }
                localStorage.setItem('xwx_historys', JSON.stringify(history));
            }
        });
        ShowDialog('删除历史~');
    } else {
        ShowDialog('请选择要删除的历史~');
    }
    setTimeout(function () {
        location.reload();
    },2);
}