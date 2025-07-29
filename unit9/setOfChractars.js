//here we match any mumber using the square bracket we determing the range of the testing 
console.log(/[0123456789]/.test("in 1992"))
// so here we can use the ranges 
console.log(/[0-9]/.test("in 2345"))
//after studying the match of the different shortcut like \d for decimals \w for the alphabetical or words
// and \s for any whitespace or the new tab and then \D non decimal character \W non alphabetical charter
// and \S non white space or the back slash staffs or the new line 
// here we are going to match the date time incoded in the regular expressions 
let dateTime=/\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("12-07-2025 12:00"))

// when we want to math the number exepts any number we use the caret(^)
let nonBinary = /[^01]/;
console.log(nonBinary.test("1100100010100110"));
// false becouse here we are telling this test methods to see if there is the number which 
// is differe from 0 and 1 if so it will return true if not any bad number which is not the same 
// it will return false
console.log(nonBinary.test("0111010112101001"));
// that why here we have the postive number becouse we have 2 which is not mentioned as the set so that 
// why we have true 
