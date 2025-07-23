// here is the functions that make the repeat of the different things here we have the 
// numbers the actions will be done and and what will happen here 
// here we are going to create the functions that will make the units of the books 
// it will take the number of the time and actions what to do with that 
function repeat( n, action ){
     for (let i=0; i<n; i++) {
         action(i)
     }
}
// here we have to create the array of the books so here we can ask the user to inter the 
// numbers of the unit he or she want so it can stored in that array 
let units=[]
repeat(10, i=> {
    units.push(`unit ${i+1}`)
})
// then here we are going to print what happened 

console.log(units)
// we can also create the array of the odd numbers and the so even numbers 
let even=[]
repeat(100,i=>{
    if (i %2==0) {
        even.push(i)
    }
})
console.log(even)
// here we are going on the filter so here we are going to need two things the first things
/** here we need the SCRIPT this is the elements or the array that are made up the 
 * the objects so here we need to filter in that array so here the argments must be two 
 * we must have the array and test becouse the choosen one must passed the test 
 * and then after creating that functions we create TEST functions which is responsilble for 
 * go into all the objects see if the objects has been well recorded well
 * or tested to means that the function we create FILTER is going to pas through all the objects 
 * and the test pass through and test in all the objects 
 */
function filter(array, test){
    // here we put the array which will holds the codes that win the test 
    let results=[]
    // we check in all the objects of the array 
    for (let element of array ) {
        // here we first see if that elements win the test and 
        if (test(element)) {
             // here we will push it to that array above which is passed array or results 
             results.push(element)
        }
        return results;
    }
// step two we are going to create the functions that is responsible for testing 
// here we use the marks of the students 
}
let students=[
    { studentName:"sam",marks:90},
    {studentName:"patrick", marks:20 },
    {studentName:"kevestuent", marks:70}

    
]
// here we are going to creat the test function lets call it pass



console.log( filter(students, element =>element.marks >50))
function above(element) {
    return element.marks >70
}

console.log( filter(students, above ))