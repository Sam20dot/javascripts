// this is the reduce methods which is used in high order functions 
function reduce (array, combine, start ) {
    let current=start;
    for (let element of array) {

 current =combine(current, element);
    }
    return current;
}

// here we will have the examples of what is going to used 
// we have an array 
let numbers=[1,2,4,6,8,7,6,5] 
function addNumber(a,b) {
     return (a+b);
}
// then here we use the starting as the firs numbers os here we will use the numbers 
let sum= reduce(numbers, addNumber,0)
console.log(sum)
// here we find the averages 
let average=sum/8;

console.log(average)
