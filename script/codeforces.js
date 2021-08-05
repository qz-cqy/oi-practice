function getCFUser(level, rating) {
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
function getDelta(delta) {
    if(delta == '0') return `<p class='zero'>${delta}</p>`;
    if(delta[0] == '-') return `<p class='negative'>${delta}</p>`;
    return `<p class='positive'>${delta}</p>`;
}