(function($){
    $.fn.share = function ($options) {
        var $image = $(document).find('img:first').attr('src');

        var $defaults = {
            url: window.location.href,
            site: document.title,
            title: $(document.head).find('[name="site-title"]').attr('content') || document.title,
            description: $(document.head).find('[name="description"]').attr('content'),
            image: $image ? $image : '',
            target : '_blank',
            weiboAppendDescription: true,
        };

        var $settings = $.extend(true, $defaults, $options);

       /* $settings['title']       = encodeURIComponent($settings['title']);
        $settings['site']        = encodeURIComponent($settings['site']);
        $settings['description'] = encodeURIComponent($settings['description']);*/

        var $urls = {
            qzone: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + $settings.url + "&title=" + $settings.title + "&desc=" + $settings.description + "&summary=" + $settings.description + "&site=" + $settings.site + ($settings.image? $settings.image : ''),
            qq: "http://connect.qq.com/widget/shareqq/index.html?url="+ $settings.url + "&title=" + $settings.title + "&source=" + $settings.site + "&desc=" + $settings.description,
            weibo: "http://service.weibo.com/share/share.php?url=" + $settings.url + "&title=" + $settings.title + ($settings.weiboAppendDescription ? $settings.description : '') + ($settings.image ? "&pic=" + $settings.image : ''),
            /*wechat: 'javascript:;',*/
            /*wechat: 'http://qr.liantu.com/api.php?text={url}',*/
            douban: "http://shuo.douban.com/!service/share?href=" + $settings.url + "&name=" + $settings.title + "&text=" + $settings.description + ( $settings.image ? "&image=" + $settings.image : '') + '&starid=0&aid=0&style=11&stime=&sig='
        };

        this.each(function() {
            var el = $(this).addClass('sns-share-component');
            var $wechat = el.find('a.wechat');

            for($id in $urls){
                el.find('a.' + $id).attr('href', $urls[$id]).attr('target', $settings.target);
            }

        });
    };
})(jQuery);