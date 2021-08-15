function getContest(name, virtual, rated) {
    if(rated == true) return `${name}(R)`;
    if(virtual == true) return `${name}(#)`;
    return `${name}(U)`;
}
function getACs(solved, ak) {
    if(ak == true) return `<p class='qwq'>AK(${solved})</p>`;
    return `<p>${solved}</p>`;
}
function showNA() {
    return `<p class='na'>N/A</p>`;
}
function showNA_span() {
    return `<span class='na'>N/A</span>`;
}