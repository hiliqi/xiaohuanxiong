$(document).ready(function () {
    // 选择
    $('span.edit-state').click(function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        var $item = $(this)
        $item.hasClass('active') ? $item.removeClass('active') : $item.addClass('active')
    });


    // 显
    $('.js_edit_booklist_btn').click(function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        $(this).hide();
        $('.box-booklist-edit-head').show();
        $('span.edit-state').show();
    })
    // 隐
    $('.js_esc_booklist_btn').click(function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        $('.box-booklist-edit-head').hide();
        $('.js_edit_booklist_btn').show();
        $('span.edit-state').removeClass('active').hide();
        $('.js_allsel_checkbox').prop('checked', false);
    })

    $("#book_del").click(function () {
        var arr = $('span.edit-state.active');
        if (arr.length > 0) {
            var url = $('#url_param').val();
            if (url == 'delfavors') {
                var str = $(arr).map(function () {
                    return $(this).attr('mid');
                }).get().join(',');

                $.ajax({
                    url: '/' + url,
                    data: {ids: str},
                    type: 'POST',
                    dataType:'json',
                    success:function(res){
                        if (res.err === "0") {
                            ShowDialog(res.msg);
                        } else {
                            ShowDialog(res.msg);
                        }
                    }
                });
            } else {
                $(arr).map(function () {
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
            }

        } else {
            ShowDialog("请选择要删除的收藏或历史记录");
        }
        setTimeout(function () {
            location.reload();
        },2);
    });

    $("#history_del").click(function () {
        var ids = $("#ids").val();
        var uid = $(".pull-right input[type=hidden][name=uid]").val();
        if (ids && ids != "") {
            $.ajax({
                url: '/readHistory.ashx?t=' + new Date().getTime(),
                dataType: 'json',
                cache: false,
                data: {mids: ids, uid: uid, action: "delete"},
                type: 'POST',
                success: function (msg) {
                    if (msg.Value === "1") {
                        ShowDialog('删除成功~');
                        $('.js_esc_booklist_btn').click();
                        yqdm.isrepeat = true;
                        if (yqdm.params.pageindex !== 1 && $('.mh-list li').length > ids.length || yqdm.params.pageindex === 1) {
                            yqdm.search();
                        } else {
                            yqdm.params.pageindex--;
                            yqdm.search();
                        }
                    } else {
                        ShowDialog("删除失败！");
                    }
                }
            });
        } else {
            alert("请选择要删除的漫画");
        }
    });

    // 排序
    $('.box-head-sort dd').click(function () {
        yqdm.changesort(this);
    });
});

