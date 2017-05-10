function _set_font_size_750() {
    setRootFontSize();
    document.head.removeChild(old_font_size_css_vendor);
    document.head.removeChild(old_font_size_css_special);
}
function setRootFontSize() {
    var width = document.documentElement.clientWidth, fontSize;
    if (width < 1366) {
        width = 1366
    }
    fontSize = (width / 100);
    document.getElementsByTagName('html')[0].style['font-size'] = fontSize + 'px';
}
if (location.search.indexOf('m=special') < 0) {
    setRootFontSize();
    window.addEventListener('resize', function () {
        setRootFontSize();
        console.log( document.body.offsetWidth);
console.log(document.getElementsByTagName('html')[0].style['font-size']);


    }, false);
}
else {
    setTimeout(function () {
        var a = document.createElement('link');
        var b = document.createElement('link');
        a.rel = 'stylesheet';
        b.rel = 'stylesheet';
        a.id = 'old_font_size_css_vendor';
        b.id = 'old_font_size_css_special';
        a.href = 'http://weixin-static.vip.com/uploadfiles/mstatic/vendors.4bcc12ae.css';
        b.href = 'http://weixin-static.vip.com/uploadfiles/mstatic/special.afabeca9.css';
        document.head.appendChild(a);
        document.head.appendChild(b);
    }, 0);
}
