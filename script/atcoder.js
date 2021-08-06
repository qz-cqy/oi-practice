function getATUser(level, rating) {
    if(level == null) return `<p>N/A</p>`;
    if(level == 'β') return `<p class='user at-unrated'>β${rating}</p>`;
    if(level == 'U') { // unrated
        return `<p class='user at-unrated'>Unrated, ${rating}</p>`;
    }
    if(level == 'K') { // king
        return `<p class='user red'>King, ${rating}</p>`;
    }
    var lv_arr = level.match(/KYU/ig);
    if(lv_arr != null) { // is KYU
        var num_arr = level.match(/\d+/g);
        var num = num_arr[0];
        if(num >= 9) return `<p class='user gray'>${level}, ${rating}</p>`; // 9~20
        if(num >= 7) return `<p class='user brown'>${level}, ${rating}</p>`;
        if(num >= 5) return `<p class='user green'>${level}, ${rating}</p>`;
        if(num >= 3) return `<p class='user cyan'>${level}, ${rating}</p>`;
        return `<p class='user blue'>${level}, ${rating}</p>`;
    }
    else { // is DAN
        var num_arr = level.match(/\d+/g);
        var num = num_arr[0];
        if(num <= 2) return `<p class='user yellow'>${level}, ${rating}</p>`;
        if(num <= 4) return `<p class='user orange'>${level}, ${rating}</p>`;
        return `<p class='user red'>${level}, ${rating}</p>`;
    }
}
function getATUserShortLevel(level, rating) {
    if(level == null) return `<p>N/A</p>`;
    if(level == 'β') return `<p class='user at-unrated'>β${rating}</p>`;
    if(level == 'U') { // unrated
        return `<p class='user at-unrated'>U${rating}</p>`;
    }
    if(level == 'K') { // king
        return `<p class='user red'>K${rating}</p>`;
    }
    var lv_arr = level.match(/KYU/ig);
    if(lv_arr != null) { // is KYU
        var num_arr = level.match(/\d+/g);
        var num = num_arr[0];
        if(num >= 9) return `<p class='user gray'>${num}K${rating}</p>`; // 9~20
        if(num >= 7) return `<p class='user brown'>${num}K${rating}</p>`;
        if(num >= 5) return `<p class='user green'>${num}K${rating}</p>`;
        if(num >= 3) return `<p class='user cyan'>${num}K${rating}</p>`;
        return `<p class='user blue'>${num}K${rating}</p>`;
    }
    else { // is DAN
        var num_arr = level.match(/\d+/g);
        var num = num_arr[0];
        if(num <= 2) return `<p class='user yellow'>${num}D${rating}</p>`;
        if(num <= 4) return `<p class='user orange'>${num}D${rating}</p>`;
        return `<p class='user red'>${num}D${rating}</p>`;
    }
}
function getATUser2(level, name) {
    if(level == null) return `<p>N/A</p>`;
    if(level == 'β') return `<p class='user at-unrated'>β${name}</p>`;
    if(level == 'U') { // unrated
        return `<p class='user at-unrated'>Unrated, ${name}</p>`;
    }
    if(level == 'K') { // king
        return `<p class='user red'>King, ${name}</p>`;
    }
    var lv_arr = level.match(/KYU/ig);
    if(lv_arr != null) { // is KYU
        var num_arr = level.match(/\d+/g);
        var num = num_arr[0];
        if(num >= 9) return `<p class='user gray'>${name}</p>`; // 9~20
        if(num >= 7) return `<p class='user brown'>${name}</p>`;
        if(num >= 5) return `<p class='user green'>${name}</p>`;
        if(num >= 3) return `<p class='user cyan'>${name}</p>`;
        return `<p class='user blue'>${name}</p>`;
    }
    else { // is DAN
        var num_arr = level.match(/\d+/g);
        var num = num_arr[0];
        if(num <= 2) return `<p class='user yellow'>${name}</p>`;
        if(num <= 4) return `<p class='user orange'>${name}</p>`;
        return `<p class='user red'>${name}</p>`;
    }
}
function getATProvisional(provisional) {
    if(provisional == true) return `<p class='active'>+</p>`;
    else return `<p class='inactive'>-</p>`;
}
function getATDelta(delta) {
    if(delta == null) return `<p>N/A</p>`;
    if(delta == '0') return `<p class='inactive'>${delta}</p>`;
    if(delta[0] == '-') return `<p class='inactive'>${delta}</p>`;
    return `<p class='active'>${delta}</p>`;
}