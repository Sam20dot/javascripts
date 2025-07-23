// this is the methods which transform the array into a new array 
/** here are the clear definition of the map function 
 * MAP METHOD : the map methods transforms an array by applying the  a functions to all its elements and build 
 * a new array  from the returned value 
 * 
 * here they are two conditions :
 * new array must have the same length as the input array but its content has mapped 
 */
function map(array, transform) {
    mapped=[];
    for (let element of array) {
        mapped.push(transform(element))
    }
    return mapped;

}
// this is the array and here we want to find the codes and we want to make 
let students =[
    {Name:"Sam" , marks:90 ,department:"ete"},
    {Name:" keve",marks:30, department:"epe"},
    {Name:"Etoo", marks:80, department:"ete"}

]
// we use the transforms and function 
function transform (e) {
   return e.marks+30
}
console.log(map(students,transform))
console.log(students)
console.log(map(students, e=>e.Name + " is student"))
console.log(map(students, e=> e.Name.toUpperCase()))