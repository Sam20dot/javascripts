// here the objects can have other objects 
// like here we have the empty object 
let empty={} 
console.log(empty.toString)
// here we are getting the function to string 
console.log(empty.toString())
// how this works the objects check if it does not have it
// it asks the protype when the prototye is not there it ask the objects of 
//other protype 

console.log(Object.getPrototypeOf(Math.max)== Function.prototype)
console.log(Object.getPrototypeOf([])== Array.prototype)

//here we have created the objects where the whole rabbit will have the same 
// chractersitcs 
let protoRabbit={
    speak:function(line) {
         console.log(`the ${this.type} says that ${line} `)
    }
}
// then here we can link this on the following labbit 
let whiteRabbits= Object.create(protoRabbit)
 whiteRabbits.type="white"
console.log(whiteRabbits.speak("we are making this codes very easier"))

// so here we are making the o
//here we need to see the objects how they call each other 
let BlackRabbit=Object.create(protoRabbit) 
console.log(BlackRabbit)
console.log(protoRabbit)
BlackRabbit.type="white"
console.log(BlackRabbit)
console.log(BlackRabbit.speak("sam"))

