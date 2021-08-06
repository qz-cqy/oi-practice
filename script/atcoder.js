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
    if(level == null) return `<span>N/A</span>`;
    if(level == 'β') return `<span class='user at-unrated'>β${rating}</span>`;
    if(level == 'U') { // unrated
        return `<span class='user at-unrated'>U${rating}</span>`;
    }
    if(level == 'K') { // king
        return `<span class='user red'>K${rating}</span>`;
    }
    var lv_arr = level.match(/KYU/ig);
    if(lv_arr != null) { // is KYU
        var num_arr = level.match(/\d+/g);
        var num = num_arr[0];
        if(num >= 9) return `<span class='user gray'>${num}K${rating}</span>`; // 9~20
        if(num >= 7) return `<span class='user brown'>${num}K${rating}</span>`;
        if(num >= 5) return `<span class='user green'>${num}K${rating}</span>`;
        if(num >= 3) return `<span class='user cyan'>${num}K${rating}</span>`;
        return `<span class='user blue'>${num}K${rating}</span>`;
    }
    else { // is DAN
        var num_arr = level.match(/\d+/g);
        var num = num_arr[0];
        if(num <= 2) return `<span class='user yellow'>${num}D${rating}</span>`;
        if(num <= 4) return `<span class='user orange'>${num}D${rating}</span>`;
        return `<span class='user red'>${num}D${rating}</span>`;
    }
}
function getATUser2(level, name) {
    if(level == null) return `<p class='user at-unrated'>${name}</p>`;
    if(level == 'β') return `<p class='user at-unrated'>β${name}</p>`;
    if(level == 'U') { // unrated
        return `<p class='user at-unrated'>${name}</p>`;
    }
    if(level == 'K') { // king
        return `<p class='user red'>${name}</p>`;
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