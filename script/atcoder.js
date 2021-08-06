function getATUser(level, rating) {
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
function getATUser2(level, name) {
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