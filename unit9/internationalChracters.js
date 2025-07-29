let smile = "\u263A";     // Unicode for ☺
let arabic = "\u0645";    // Unicode for Arabic letter Meem: م
let chinese = "\u6211";   // Unicode for 我 (means "I" or "me")

console.log(smile);   // ☺
console.log(arabic);  // م
console.log(chinese); // 我
// this is unicodes it takes all the character around the words and make them the languages 
// the cumpiter can undestand 
console.log(/\p{L}/u.test("α"));
// → true
console.log(/\p{L}/u.test("!"));
// → false
console.log(/\p{Script=Greek}/u.test("α"));
// → true
console.log(/\p{Script=Arabic}/u.test("α"));
// → false
