function getCFUser(level, rating) { // user rating
    if (level == 'U') return `<p class='unrated'>Unrated, ${rating}</p>`;
    if (level == 'N') return `<p class='rated newbie'>Newbie, ${rating}</p>`;
    if (level == 'P') return `<p class='rated pupil'>Pupil, ${rating}</p>`;
    if (level == 'S') return `<p class='rated specialist'>Specialist, ${rating}</p>`;
    if (level == 'E') return `<p class='rated expert'>Expert, ${rating}</p>`;
    if (level == 'CM') return `<p class='rated candidate-master'>Candidate Master, ${rating}</p>`;
    if (level == 'M') return `<p class='rated master'>Master, ${rating}</p>`;
    if (level == 'IM') return `<p class='rated international-master'>International Master, ${rating}</p>`;
    if (level == 'GM') return `<p class='rated grandmaster'>Grandmaster, ${rating}</p>`;
    if (level == 'IGM') return `<p class='rated international-grandmaster'>International Grandmaster, ${rating}</p>`;
    if (level == 'LGM') return `<p class='rated legendary-grandmaster'>Legendary Grandmaster, ${rating}</p>`;
    return `<p class='rated headquarters'>Headquarters, ${rating}</p>`;
}
function getCFUserShortLevel(level, rating) { // user rating
    if (level == 'U') return `<p class='unrated'>U${rating}</p>`;
    if (level == 'N') return `<p class='rated newbie'>N${rating}</p>`;
    if (level == 'P') return `<p class='rated pupil'>P${rating}</p>`;
    if (level == 'S') return `<p class='rated specialist'>S${rating}</p>`;
    if (level == 'E') return `<p class='rated expert'>E${rating}</p>`;
    if (level == 'CM') return `<p class='rated candidate-master'>CM${rating}</p>`;
    if (level == 'M') return `<p class='rated master'>M${rating}</p>`;
    if (level == 'IM') return `<p class='rated international-master'>IM${rating}</p>`;
    if (level == 'GM') return `<p class='rated grandmaster'>Grandmaster, GM${rating}</p>`;
    if (level == 'IGM') return `<p class='rated international-grandmaster'>IGM${rating}</p>`;
    if (level == 'LGM') return `<p class='rated legendary-grandmaster'>LGM${rating}</p>`;
    return `<p class='rated headquarters'>HQ${rating}</p>`;
}
function getCFUser2(level, name) { // user rating
    if (level == 'U') return `<p class='unrated'>${name}</p>`;
    if (level == 'N') return `<p class='rated newbie'>${name}</p>`;
    if (level == 'P') return `<p class='rated pupil'>${name}</p>`;
    if (level == 'S') return `<p class='rated specialist'>${name}</p>`;
    if (level == 'E') return `<p class='rated expert'>${name}</p>`;
    if (level == 'CM') return `<p class='rated candidate-master'>${name}</p>`;
    if (level == 'M') return `<p class='rated master'>${name}</p>`;
    if (level == 'IM') return `<p class='rated international-master'>${name}</p>`;
    if (level == 'GM') return `<p class='rated grandmaster'>${name}</p>`;
    if (level == 'IGM') return `<p class='rated international-grandmaster'>${name}</p>`;
    if (level == 'LGM') return `<p class='rated legendary-grandmaster'>${name}</p>`;
    return `<p class='rated headquarters'>${name}</p>`;
}
function getCFDelta(delta) { // delta / contribution
    if(delta == '0') return `<p class='zero'>${delta}</p>`;
    if(delta[0] == '-') return `<p class='negative'>${delta}</p>`;
    return `<p class='positive'>${delta}</p>`;
}