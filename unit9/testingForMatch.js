// regural expression objects has many methods one them are test
// which is used to test if the passing strings is includes in the given pattens 
console.log(/abc/.test("abcde"))
console.log(/abc/.test("abxde"))
console.log(/asn/.test("asnsa"))

let words=" the dogs like to find the caata and fight with them "
let pattens=/dogs/
let patternse= new RegExp("like ")
console.log(patternse.test(words))
console.log(pattens.test(words))// this shows that the words are in the context using the 
// this methods of test from the regular expression object