//reduce is the functions that is there for m
// here this is the reduce functions thta takes three argments and then 
/** the first one is the array
 * seconds is the functions which is going to be used to combine 
 * the last things is the starting points 
 */
function reduce (array, combine, start ) {
     let current =start;
     for (let element of array) {
        current =combine(current, element)
     }
     // return the currents as the solutions 
     return current;
}
// here we have the array 
let numbers=[1,4,4,6,7,8,6,5,4,3,2,2,1] 

console.log(reduce(numbers, (a,b)=>(a+b),1))


// here they are other way of writing the average functions 
function average(array) {

     return array.reduce((a,b)=>a+b )/array.length
}
console.log(average(numbers))
