// this is the exercises for the javascripts here i want to make the change the way 
// the codes are being writen 

// here studying the methods 
function speak(line) {
     console.log(`the ${this.type} rabbit and it say that ${line}`)

}
// here we are going to use this in the following objects 
let whiteRabbit={type:"white", speak}
let HungryRabbit={type:"hungry",speak}

whiteRabbit.speak(" i am white i and I leave at the sun and i need to be good")
// here there are the oother way to define this 
let people={
    type:"white",
    // here we declare as the valiable 
    leave:function(place) {
        console.log(`the ${this.type} they live at ${place}`)
    }
}
people.leave("antrantica")
// the here we have to make the practices of the what we have studied 
// yesterday i have studied the high order function
// lets start on the filter 
let rider=[
    {Name:"sangwa", location:"kigali",money:3000, time:"monday"},
    {Name:"best", location:"kicukiro", money:3000, time:"wendsday"},
    {Name:"Keve",location:"ruhango",money:4000,time:"tuesday"}
]
function filter(array,test) {
     let resulted=[]
     for (let element of array) {
         if (test(element)) {
            resulted.push(element)
         }
     }
     return resulted;
}
// here we are going to sort the paid one who has the more money
let paid =filter(rider, (people=> people.money>=3000))
console.log(paid)
// the one who live in kigali 



console.log()
// this is the high order function what we call the map 
function map(array,transform) {
    let mapped=[] ;
     for (let element of array) {
        mapped.push(transform(element))
        
     }
     return mapped;
}
console.log(paid.map(name=>` the paid are ${name.Name}`))
// we are moving to the other function which is called reduce 
function reduce ( array,combine,start) {
    let current= start
    for (let element of array ) {
        current=combine(current ,element) 


    }
    return current;
}
// here we are going to see the averages of the money we have paid them 
let average=rider.reduce((total,ride)=> total+ride.money,0)/rider.length
console.log(` the averages of the whole riders ${average}`)