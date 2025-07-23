//  this is the high order functions we have seen that they are the functions that operates on the other functions
//either by taking them as argments or by returning them 
// here we are going to create the functions which return other functuins

function greatherThan(n) {
    // here m is parmaters
    return m=>m>n
}
const greatherThan10=greatherThan(10) 
console.log(greatherThan10(11))
// i have seen the problem i was calling the functiosn twice so that created the new functiosn but now 
// lets try again 
function addThe(m) {
    return n=> m+n;
} 
let addition=addThe(23)
console.log(addition(34))
// forEach as the builtin methods of the javascripts 

