function subcomment() {
    var uid = $('#session_uid').val();
    var comment = $('#content').val();
    var book_id = $('#book_id').val();
    if (uid == '-1') {
        ShowDialog('请先登录');
    } else if (comment.length <= 0) {
        ShowDialog('请勿提交空评论');
    } else {
        $.post({
            url: '/commentadd',
            data: {comment: comment, book_id: book_id},
            success(res) {
                if (res.err == 1) {
                    ShowDialog(res.msg);
                } else {
                    ShowDialog(res.msg);
                    setTimeout(function () {
                        location.reload();
                    },1000)
                }
            },
            error(res) {
                ShowDialog('表单提交出错');
                return false;
            }
        })
    }
}