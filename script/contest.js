function getContest(name, virtual, rated, beta) {
    if(rated == true) return `${name}(R)${beta?"(β)":""}`;
    if(virtual == true) return `${name}(#)${beta?"(β)":""}`;
    return `${name}(U)${beta?"(β)":""}`;
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