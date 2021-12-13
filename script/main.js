function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return '-1';
}
function qpow(x, y) {
    var ans = 1;
    for(;y;y>>=1,x*=x) if(y&1) ans *= x;
    return ans;
}
function setStyle(name, stylename, styleval) {
    document.getElementsByTagName(name)[0].style[stylename] = styleval;
}
(function () {
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if((month == 9 && day == 18) || (month == 12 && day == 13)) {
        setStyle("html", "-webkit-filter", "grayscale(100%)");
        setStyle("html", "-moz-filter", "grayscale(100%)");
        setStyle("html", "-ms-filter", "grayscale(100%)");
        setStyle("html", "-o-filter", "grayscale(100%)");
        setStyle("html", "filter", "grayscale(100%)");
    }
})();