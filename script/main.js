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