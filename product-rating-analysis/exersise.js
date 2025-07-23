// here  i am going to writes that programs 
function filter(array,test) {

    let passed=[] 
    for (let element of array) {
        if (test(element)) {
            passed.push(element)
        }
    }
    return passed;
}
let numbers=[1,2,3,4,5,6,7,4,4,3,2,4,5,]
let choosn=filter(numbers, number=>number>4)
console.log(choosn.join(" ,"))
// this is the next for map 
function map(array, transform) {
    mapped=[] 
    for (let element of array) {
        mapped.push (transform(element))
    }
    return mapped;

}
let added=numbers.map(number=>number+5)
console.log(added)
function reduce(array,combine,start) {
    let current=start;
    for (let element of array) {
        current =combine (current,element)
    }
     return current
}
let combined= numbers.reduce( (a,b) =>a+b,0)
console.log(combined)
let average=combined/numbers.length
console.log(average)