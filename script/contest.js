function getContest(name, virtual, rated) {
    if(rated == true) return `${name}(R)`;
    if(virtual == true) return `${name}#`;
    return `${name}(U)`;
}
function getACs(solved, ak) {
    if(ak == true) return `<p color='red'>AK(${solved})</p>`;
    return `<p>${solved}</p>`;
}