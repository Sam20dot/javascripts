// this is the exercises from the obstraction repeatition 
function printEvens(n, m) {
    for(let i=n; i<m ; i++) {
        // becouuse we want the even numbers we will need the conditions 
        if (i%2===0 ) {
            console.log(i)
        }
    }
}
printEvens(6,100)