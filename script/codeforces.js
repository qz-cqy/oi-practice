function getCFUser(level, rating, type) { // user rating
    if (level == null) return `${showNA()}`;
    if (level == 'U') return `<p class='unrated'>Unrated</p>`;
    if (type == 1 && level == 'N' && rating >= 1000) return `<p class='rated high-newbie'>Newbie, ${rating}</p>`;
    if (level == 'N') return `<p class='rated newbie'>Newbie, ${rating}</p>`;
    if (level == 'P') return `<p class='rated pupil'>Pupil, ${rating}</p>`;
    if (level == 'S') return `<p class='rated specialist'>Specialist, ${rating}</p>`;
    if (level == 'E') return `<p class='rated expert'>Expert, ${rating}</p>`;
    if (level == 'CM') return `<p class='rated candidate-master'>Candidate Master, ${rating}</p>`;
    if (level == 'M') return `<p class='rated master'>Master, ${rating}</p>`;
    if (type == 1 && level == 'IM') return `<p class='rated international-master2'>International Master, ${rating}</p>`;
    if (level == 'IM') return `<p class='rated international-master'>International Master, ${rating}</p>`;
    if (level == 'GM') return `<p class='rated grandmaster'>Grandmaster, ${rating}</p>`;
    if (type == 1 && level == 'IGM') return `<p class='rated international-grandmaster2'>International Grandmaster, ${rating}</p>`;
    if (level == 'IGM') return `<p class='rated international-grandmaster'>International Grandmaster, ${rating}</p>`;
    if (level == 'LGM') return `<p class='rated legendary-grandmaster'>Legendary Grandmaster, ${rating}</p>`;
    return `<p class='rated headquarters'>Headquarters, ${rating}</p>`;
}
function getCFUserShortLevel(level, rating, type) { // user rating
    if (level == null) return `${showNA_span()}`;
    if (level == 'INF') return `<span class='unrated'>∞</span>`;
    if (level == 'U') return `<span class='unrated'>U</span>`;
    if (type == 1 && level == 'N' && rating >= 1000) return `<p class='rated high-newbie'>N${rating}</p>`;
    if (level == 'N') return `<span class='rated newbie'>N${rating}</span>`;
    if (level == 'P') return `<span class='rated pupil'>P${rating}</span>`;
    if (level == 'S') return `<span class='rated specialist'>S${rating}</span>`;
    if (level == 'E') return `<span class='rated expert'>E${rating}</span>`;
    if (level == 'CM') return `<span class='rated candidate-master'>CM${rating}</span>`;
    if (level == 'M') return `<span class='rated master'>M${rating}</span>`;
    if (type == 1 && level == 'IM') return `<p class='rated international-master2'>IM${rating}</p>`;
    if (level == 'IM') return `<span class='rated international-master'>IM${rating}</span>`;
    if (level == 'GM') return `<span class='rated grandmaster'>GM${rating}</span>`;
    if (type == 1 && level == 'IGM') return `<p class='rated international-grandmaster2'>IGM${rating}</p>`;
    if (level == 'IGM') return `<span class='rated international-grandmaster'>IGM${rating}</span>`;
    if (level == 'LGM') return `<span class='rated legendary-grandmaster'>LGM${rating}</span>`;
    return `<span class='rated headquarters'>HQ${rating}</span>`;
}
function getCFUser2(level, rating, name, type) { // user rating
    if (level == null) return `<p class='unrated'>${name}</p>`;
    if (level == 'U') return `<p class='unrated'>${name}</p>`;
    if (type == 1 && level == 'N' && rating >= 1000) return `<p class='rated high-newbie'>${name}</p>`;
    if (level == 'N') return `<p class='rated newbie'>${name}</p>`;
    if (level == 'P') return `<p class='rated pupil'>${name}</p>`;
    if (level == 'S') return `<p class='rated specialist'>${name}</p>`;
    if (level == 'E') return `<p class='rated expert'>${name}</p>`;
    if (level == 'CM') return `<p class='rated candidate-master'>${name}</p>`;
    if (level == 'M') return `<p class='rated master'>${name}</p>`;
    if (type == 1 && level == 'IM') return `<p class='rated international-master2'>${name}</p>`;
    if (level == 'IM') return `<p class='rated international-master'>${name}</p>`;
    if (level == 'GM') return `<p class='rated grandmaster'>${name}</p>`;
    if (type == 1 && level == 'IGM') return `<p class='rated international-grandmaster2'>${name}</p>`;
    if (level == 'IGM') return `<p class='rated international-grandmaster'>${name}</p>`;
    if (level == 'LGM') return `<p class='rated legendary-grandmaster'>${name}</p>`;
    return `<p class='rated headquarters'>${name}</p>`;
}
function getCFDelta(delta) { // delta / contribution
    if (delta == null) return `${showNA()}`;
    if(delta == '0') return `<p class='zero'>${delta}</p>`;
    if(delta[0] == '-') return `<p class='negative'>${delta}</p>`;
    return `<p class='positive'>${delta}</p>`;
}
function getCFLevel(rated, rating) {
    if(rating == '∞') return `INF`;
    if(rating >= 3000) return `LGM`;
    if(rating >= 2600) return `IGM`;
    if(rating >= 2400) return `GM`;
    if(rating >= 2300) return `IM`;
    if(rating >= 2100) return `M`;
    if(rating >= 1900) return `CM`;
    if(rating >= 1600) return `E`;
    if(rating >= 1400) return `S`;
    if(rating >= 1200) return `P`;
    if(rating != null) return `N`;
    if(rated == true) return `U`;
    return null;
}
function topPerfCF(perf) {
    if(perf == '∞') return 1;
    return 0;
}