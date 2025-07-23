// this is the product lating analysis and is good for helping me be good at making the codes in good maner 

let products=[
    {Name:"laptop" ,rating:4.5},
    {Name:"tablet" , rating:3.4},
    {Name:"iPhone" ,rating:4.6},
    {Name:"keyboard", rating:4.9}

]
function filter(array,test) {
     let passed=[]
     for (let element of array){
         if (test(element)) {
            passed.push(element)
         }
     }
     return passed;

}
function map(array,transform) {
    let mapped=[] 
        for (let element of array) {
            mapped.push(transform(element))
        }
    return mapped
}
// anather function we will need is the reduce
function reduce( array,combine, start ) {
     let current =start ;
     for (let element of array) {
        current =combine(element,current)
     }
     return current;
}
function average (array){
    return array.reduce((a,b)=>a+b )/array.length
}
//
// there we are going to filter the phone and then which has more than 4 in ratings and then we put 
// we arnage together using mapp and then we make the averages of the rating using the reduce 
let highRating=filter(products, e=>e.rating>4)
console.log(highRating)
// here we are going to map them 
//let nameofRated=highRating.map( e=>e.name +" this is the rated")
//console.log(nameofRated)
//console.log(average(highRating))
let hProductName=highRating.map( product=> product.Name)
console.log(hProductName)

// we are going to make the averages of the rating 
let sum= reduce(highRating,(product,total)=>product.rating+total,0)
let averages=sum /highRating.length

console.log(` the averages of this is ${averages}`)
