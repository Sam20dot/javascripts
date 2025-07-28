// this is the way we test the codes using the different aproach and to tes if the expected 
//codes are the one that are comming from that things 
function test(label,body) {
    if (!body())console.log(`the fail to:${label}`)
}
test ( "")