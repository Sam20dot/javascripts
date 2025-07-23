// this is the codes for imprementing the abstractions for many times using the function 

function RepeatLog(n) {
    for (let i=0; i<n ;i++) {
        console.log(i)
    }
}
// here we will see the good thinsg examples 
console.log(RepeatLog(9))

// high level of obsrtractions 

function repeat(n, action) {
    for (let i=0 ;i<n ;i++) {
        action (i)
    }
}
repeat(5,console.log)

// by using that functions we are going to create the functions that add the unit of the book 

//here we will have an array
let labels=[] ;
repeat(6, i=>{
    labels.push(`unit ${i+1}`) 
})
console.log(labels)