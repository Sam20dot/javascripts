// this is the symbols the unique values 
const length= Symbol("length")
Array.prototype.length=0
console.log([1,2].length)
console.log([1,2][length])