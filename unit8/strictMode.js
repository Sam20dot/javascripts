// this is the way we finds the bugs for the codes we are making so that we can get the error easily 

function canYouSpotTheProblem() {
    "use strict" ;
    for( counter ; counter<10;counter++  ){
        console.log("happy birthday")
    }
}
canYouSpotTheProblem()
// here is the way this also can works 
// if we dont put the strict mode it is hard to find the error so that the function create the 
// grobal bug so that  it can be best for you to cath the error \
function Person(name,){ this.name=name}
 let 