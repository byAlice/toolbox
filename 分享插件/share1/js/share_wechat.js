/*
 * @Description: 分享插件
 */


(function($, window, document, undefined) {
    //插件初始化
    function init(target, options) {
        var settings = $.extend({}, $.fn.socialShare.defaults, options);
        //初始化各个组件
        console.log(settings);

        //添加微信分享事件
        $(document).on("click", "#weixinShare", function() {
            weixinShare(this, settings);
        });
    }

    function replaceAPI(api, options) {
        api = api.replace('{url}', options.url);
        api = api.replace('{title}', options.title);
        api = api.replace('{content}', options.content);
        api = api.replace('{pic}', options.pic);
        return api;
    }

    function OPenWindow(URL) {
        var openUrl = URL; //弹出窗口的url
        var iWidth = 630; //弹出窗口的宽度;
        var iHeight = 580; //弹出窗口的高度;
        var iTop = (window.screen.availHeight - 30 - iHeight) / 2; //获得窗口的垂直位置;
        var iLeft = (window.screen.availWidth - 10 - iWidth) / 2; //获得窗口的水平位置;
        window.open(openUrl, "", "height=" + iHeight + ", width=" + iWidth + ", top=" + iTop + ", left=" + iLeft + "" + ",toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
        //window.open('page.html', 'newwindow', 'height=580, width=650, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');
    }


    function weixinShare(target, options) {
        var options = $.extend({}, $.fn.socialShare.defaults, options);
        // console.log(options);
        /*alert('45454')*/
        showWX(replaceAPI(weixin, options));

        //  window.open(replaceAPI(weixin, ));
    }

    function autocenter() {
        var bodyW = parseInt(document.documentElement.clientWidth);
        var bodyH = parseInt(document.documentElement.clientHeight);
        var elW = $("#weixin").width();
        var elH = $("#weixin").height();
        console.log((bodyW - elW) / 2);
        $("#weixin").css("left", (bodyW - elW) / 2);
        $("#weixin").css("top", (bodyH - elH) / 2);
    }

    function showWX(url) {
        var weixing = '<div id="weixin">' +
            '<div class="bd_weixin_popup_head">' +
            '<span>分享到微信朋友圈</span>' +
            '<a href="#" id="close" class="bd_weixin_popup_close">×</a>' +
            '</div>' +
            '<div class="erweima">' +
            '<img class="erweimas" src="" />' +
            '</div>' +
            '<p class="msgs">打开微信，点击右上角的  + ，<br/> 使用“扫一扫”即可将网页分享至朋友圈。</p>' +
            '</div>';
        $("body").append(weixing);
        $(".erweimas").attr('src', url);
        autocenter();
        $("#weixin").show();
    }
    $(document).on('click', "#close", function() {
        $("#weixin").hide();
    });
    $.fn.socialShare = function(options, param) {
        if (typeof options == 'string') {
            var method = $.fn.socialShare.methods[options];
            if (method)
                return method(this, param);
        } else
            init(this, options);
    }

    //插件默认参数
    $.fn.socialShare.defaults = {
        url: window.location.href,
        title: document.title,
        content: '',
        pic: ''
    }

    //插件方法
    $.fn.socialShare.methods = {
        //初始化方法
        init: function(jq, options) {
            return jq.each(function() {
                init(this, options);
            });
        },
        weixinShare: function(jq, options) {
            return jq.each(function() {
                weixinShare(this, options);
            });
        }
    }

    //分享地址
    var weixin = 'http://qr.liantu.com/api.php?text={url}'; //接受URL返回图片

})(jQuery, window, document);
