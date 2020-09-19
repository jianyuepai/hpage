/*
作者:bird
主页：https://jianyuepai.github.io/
github：https://jianyuepai.github.io/
日期：20200918
版权所有，请勿删除
*/

$(document).ready(function() {
    //判断窗口大小，添加输入框自动完成
    var wid = $("body").width();
    if (wid < 640) {
        $(".wd").attr('autocomplete', 'off');
    }else{
        $(".wd").focus();
    }
    //按钮
	$("button").click(function() {
	    var dt = $(".lg").attr('data-s');
	    wd = $(".wd").val();
	    if (dt == "bing") {
	        if (wd == "" || wd == null) {
	            window.location.href = "https://www.bing.com/";
	        } else {
	            $("form").attr('action', 'https://www.bing.com/search?');
	            $(".wd").attr("name","q");
	            //$(".t").val("g");
	            $("form").submit();
	        }
	    } else {
	        if (wd == "" || wd == null) {
	            window.location.href = "https://www.baidu.com/?tn=simple";
	        } else {
	            $("form").attr('action', 'https://www.baidu.com/s?ie=utf-8');
	            $(".wd").attr("name","wd");
	            //$(".t").val("b");
	            $("form").submit();
	        }
	    }
	
	});
	
	//切换搜索引擎
	$(".lg").click(function() {
	    var dt = $(".lg").attr('data-s');
	    if (dt == "bing") {
			$("form").attr('action', 'https://www.baidu.com/s?ie=utf-8');
	        $(".lg").attr('data-s', 'baidu');
			$(".lg").attr('style','background: url(icon/baidu.svg) no-repeat center/cover;');
	    } else {
			$("form").attr('action', 'https://www.bing.com/');
	        $(".lg").attr('data-s', 'bing');
	        $(".lg").attr('style','background: url(icon/bing.svg) no-repeat center/cover;');
	    }
	
	});
    
    //菜单点击
    $("#menu").click(function(event) {
        $(this).toggleClass('on');
        $(".list").toggleClass('closed');
        $(".mywth").toggleClass('hidden');
    });
    $("#content").click(function(event) {
        $(".on").removeClass('on');
        $(".list").addClass('closed');
        $(".mywth").removeClass('hidden');
    });
    $(".mywth").click(function(event) {
        var wt = $("body").width();
        if (wt < 750 || wt == 750) {
            //window.location.href = "https://tianqi.qq.com/";
            window.location.href = "https://apip.weatherdt.com/h5.html?id=pjICbzAo4C";
        }
    });
});
