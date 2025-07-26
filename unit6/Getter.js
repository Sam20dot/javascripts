// here there are the getter function 
// when we uses the getter we use the get keyword infront of the function 
//name so when we call that function we use call it as proparties not a fucntion 
// console.log(" this is an example")


let veryfying={
    get size() {
        return Math.floor(Math.random()*100)
    }
}
console.log(veryfying.size)
// the next here is to make t
console.log(veryfying.size)

// other examples 
let arduino= {
    type:"arduino",
    get Name() {
        console.log(`this${ this.type} is connected`)
    }
}
console.log(arduino.Name)
