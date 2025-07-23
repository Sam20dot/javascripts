// lets me just rewrite it here we are going to create the functiosn that will take the array 
// and the test for a given numbers 

function filter(array,test) {
     let passed=[];
     for (let element of array) {
        if (test(element)) {
            passed.push(element)
        }
     }
     return passed;
}
//here we  will have the array and the functions that is there for sorting the elements according to different 
// charactersitics 
// and we have seen that the scripts is the array which contains the an elements where all the 
// elements are the objects 
let students =[
    {Name:"Sam" , marks:90 ,department:"ete"},
    {Name:" keve",marks:30, department:"epe"},
    {name:"Etoo", marks:80, department:"ete"}

]
// after scripts we are going to create the functions that will sorts the students who passed and the one who didnt 

console.log(filter(students, students=>students.marks>50))
function names(array) {
    let results=[];
    for (let result of students){
        if (array.name !== "sam") {

            results.push(result) 
        }

    }
    return results;
}
console.log(filter(students,names(students) ))
// this is the codes for the next generations 
let motosyclist