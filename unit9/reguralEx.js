// regural expression is the way of discribing the parten in the string 
// so to mean that the reguaral expression are the special syntax that is used to search or matching or manupilates the 
// information so the regualar expression is are the objects and the words are stored in the backfard slash 
// and it can be either the constructor like regExp or the writings using the notation menstioned 

let r1= new RegExp("abc")// this is the way of using the constructors 
let r2=/abc/;
// there are the other sign that is has the special meaning in the regular expression and 
//.]like + and the ? so when we are going to write it we use this \+/
let plus =/A\+/

console.log(/\p{L}/u.test("α"));
// → true
console.log(/\p{L}/u.test("!"));
// → false
console.log(/\p{Script=Greek}/u.test("α"));
// → true
console.log(/\p{Script=Arabic}/u.test("α"));
// → false
