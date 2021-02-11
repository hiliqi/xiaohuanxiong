<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=yes" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>跳转提示</title>

    <style type="text/css">
        body, h1, h2, p,dl,dd,dt{margin: 0;padding: 0;font: 15px/1.5 微软雅黑,tahoma,arial;}
        body{background:#efefef;}
        h1, h2, h3, h4, h5, h6 {font-size: 100%;cursor:default;}
        ul, ol {list-style: none outside none;}
        a {text-decoration: none;color:#447BC4}
        a:hover {text-decoration: underline;}
        .ip-attack{width:600px; margin:200px auto 0;}
        .ip-attack dl{ background:#fff; padding:30px; border-radius:10px;border: 1px solid #CDCDCD;-webkit-box-shadow: 0 0 8px #CDCDCD;-moz-box-shadow: 0 0 8px #cdcdcd;box-shadow: 0 0 8px #CDCDCD;}
        .ip-attack dt{text-align:center;}
        .ip-attack dd{font-size:16px; color:#333; text-align:center;}
        .tips{text-align:center; font-size:14px; line-height:50px; color:#999;}
    </style>


</head>
<body>
<div class="ip-attack"><dl>
        <?php switch ($code) {?>
        <?php case 1:?>
        <dt style="color: green"><?php echo(strip_tags($msg));?></dt>
        <?php break;?>
        <?php case 0:?>
        <dt style="color: red"><?php echo(strip_tags($msg));?></dt>
        <?php break;?>
        <?php } ?>
        <br>
        <dt>
            页面自动 <a id="href" href="<?php echo($url);?>">跳转</a> 等待时间： <b id="wait"><?php echo($wait);?></b>
        </dt></dl>
</div>
<script type="text/javascript">
    (function(){
        var wait = document.getElementById('wait'),
            href = document.getElementById('href').href;
        var interval = setInterval(function(){
            var time = --wait.innerHTML;
            if(time <= 0) {
                window.location.href = href;
                clearInterval(interval);
            };
        }, 1000);
    })();
</script>
</body>
</html>
