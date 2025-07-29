// when we to do to repate the number many times we use the (+) 
// for maching the numbers many time examples 
console.log(/'\d+'/.test("'123'"))
console.log(/'\d+'/.test("'123'"));
// → true
console.log(/'\d+'/.test("''"));
// → false
console.log(/'\d*'/.test("'123'"));
// → true
console.log(/'\d*'/.test("''"));
// → true

