function getATUser(level, rating, beta) {
    if (level == null) return `${showNA()}`;
    if(level == 'U') { // unrated
        return `<p class='user at-unrated'>Unrated${beta?"β":""}</p>`;
    }
    if(level == 'K') { // king
        return `<p class='user red'>King, ${rating}${beta?"β":""}</p>`;
    }
    if(level == "L") { // legend
        return `<p class='user red'>Legend, ${rating}${beta?"β":""}</p>`;
    }
    var lv_arr = level.match(/KYU/ig);
    if(lv_arr != null) { // is KYU
        var num_arr = level.match(/\d+/g);
        var num = num_arr[0];
        if(num >= 9) return `<p class='user gray'>${level}, ${rating}${beta?"β":""}</p>`; // 9~20
        if(num >= 7) return `<p class='user brown'>${level}, ${rating}${beta?"β":""}</p>`;
        if(num >= 5) return `<p class='user green'>${level}, ${rating}${beta?"β":""}</p>`;
        if(num >= 3) return `<p class='user cyan'>${level}, ${rating}${beta?"β":""}</p>`;
        return `<p class='user blue'>${level}, ${rating}${beta?"β":""}</p>`;
    }
    else { // is DAN
        var num_arr = level.match(/\d+/g);
        var num = num_arr[0];
        if(num <= 2) return `<p class='user yellow'>${level}, ${rating}${beta?"β":""}</p>`;
        if(num <= 4) return `<p class='user orange'>${level}, ${rating}${beta?"β":""}</p>`;
        return `<p class='user red'>${level}, ${rating}${beta?"β":""}</p>`;
    }
}
function getATUserShortLevel(level, rating, beta) {
    if (level == null) return `${showNA_span()}`;
    if(level == 'U') { // unrated
        return `<span class='user at-unrated'>U${beta?"β":""}</span>`;
    }
    if(level == 'K') { // king
        return `<span class='user red'>K${rating}${beta?"β":""}</span>`;
    }
    if(level == "L") { // legend
        return `<p class='user red'>L${rating}${beta?"β":""}</p>`;
    }
    var lv_arr = level.match(/KYU/ig);
    if(lv_arr != null) { // is KYU
        var num_arr = level.match(/\d+/g);
        var num = num_arr[0];
        if(num >= 9) return `<span class='user gray'>${num}K${rating}${beta?"β":""}</span>`; // 9~20
        if(num >= 7) return `<span class='user brown'>${num}K${rating}${beta?"β":""}</span>`;
        if(num >= 5) return `<span class='user green'>${num}K${rating}${beta?"β":""}</span>`;
        if(num >= 3) return `<span class='user cyan'>${num}K${rating}${beta?"β":""}</span>`;
        return `<span class='user blue'>${num}K${rating}${beta?"β":""}</span>`;
    }
    else { // is DAN
        var num_arr = level.match(/\d+/g);
        var num = num_arr[0];
        if(num <= 2) return `<span class='user yellow'>${num}D${rating}${beta?"β":""}</span>`;
        if(num <= 4) return `<span class='user orange'>${num}D${rating}${beta?"β":""}</span>`;
        return `<span class='user red'>${num}D${rating}${beta?"β":""}</span>`;
    }
}
function getATUser2(level, name, beta) {
    if(level == null) return `<p class='user at-unrated'>${name}${beta?"β":""}</p>`;
    if(level == 'U') { // unrated
        return `<p class='user at-unrated'>${name}${beta?"β":""}</p>`;
    }
    if(level == 'K') { // king
        return `<p class='user red'>${name}${beta?"β":""}</p>`;
    }
    if(level == "L") { // legend
        return `<p class='user red'>${name}${beta?"β":""}</p>`;
    }
    var lv_arr = level.match(/KYU/ig);
    if(lv_arr != null) { // is KYU
        var num_arr = level.match(/\d+/g);
        var num = num_arr[0];
        if(num >= 9) return `<p class='user gray'>${name}${beta?"β":""}</p>`; // 9~20
        if(num >= 7) return `<p class='user brown'>${name}${beta?"β":""}</p>`;
        if(num >= 5) return `<p class='user green'>${name}${beta?"β":""}</p>`;
        if(num >= 3) return `<p class='user cyan'>${name}${beta?"β":""}</p>`;
        return `<p class='user blue'>${name}${beta?"β":""}</p>`;
    }
    else { // is DAN
        var num_arr = level.match(/\d+/g);
        var num = num_arr[0];
        if(num <= 2) return `<p class='user yellow'>${name}${beta?"β":""}</p>`;
        if(num <= 4) return `<p class='user orange'>${name}${beta?"β":""}</p>`;
        return `<p class='user red'>${name}${beta?"β":""}</p>`;
    }
}
function getATProvisional(provisional) {
    if(provisional == true) return `<p class='active'>+</p>`;
    else return `<p class='inactive'>-</p>`;
}
function getATDelta(delta, beta) {
    if (delta == null) return `${showNA()}`;
    if(delta == '0') return `<p class='inactive'>${delta}${beta?"(β)":""}</p>`;
    if(delta[0] == '-') return `<p class='inactive'>${delta}${beta?"(β)":""}</p>`;
    return `<p class='active'>${delta}${beta?"(β)":""}</p>`;
}
function getATLevel(rated, rating) {
    if (rated == false) return null;
    if (rating == null) return `U`;
    if (rating >= 4200) return `KING`;
    if (rating >= 4000) return `LEGEND`;
    if (rating >= 3800) return `10 DAN`;
    if (rating >= 3600) return `9 DAN`;
    if (rating >= 3400) return `8 DAN`;
    if (rating >= 3200) return `7 DAN`;
    if (rating >= 3000) return `6 DAN`;
    if (rating >= 2800) return `5 DAN`;
    if (rating >= 2600) return `4 DAN`;
    if (rating >= 2400) return `3 DAN`;
    if (rating >= 2200) return `2 DAN`;
    if (rating >= 2000) return `1 DAN`;
    if (rating >= 1800) return `1 KYU`;
    if (rating >= 1600) return `2 KYU`;
    if (rating >= 1400) return `3 KYU`;
    if (rating >= 1200) return `4 KYU`;
    if (rating >= 1000) return `5 KYU`;
    if (rating >= 800) return `6 KYU`;
    if (rating >= 600) return `7 KYU`;
    if (rating >= 400) return `8 KYU`;
    if (rating >= 243) return `9 KYU`;
    if (rating >= 147) return `10 KYU`;
    if (rating >= 90) return `11 KYU`;
    if (rating >= 54) return `12 KYU`;
    if (rating >= 33) return `13 KYU`;
    if (rating >= 20) return `14 KYU`;
    if (rating >= 13) return `15 KYU`;
    if (rating >= 8) return `16 KYU`;
    if (rating >= 5) return `17 KYU`;
    if (rating >= 3) return `18 KYU`;
    if (rating >= 2) return `19 KYU`;
    return `20 KYU`;
}
function topPerfAT(rank, type, perf) {
    if(type == 'abc' && perf == 2400) return 1;
    if(type == 'arc' && perf == 3200) return 1;
    if(type == 'agc' && rank == 1) return 1;
    if(type == 'ahc' && rank == 1) return 1;
    return 0;
}