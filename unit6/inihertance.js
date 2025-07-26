// this is the way we emitates or use the proparties and the behaviour s
// of the old class in the new class 
// here we need the three words we use extend 
// and the super to call the delived class 
//examples 
class animals{
    constructor(type) {
        return this.type=type
    }
    speak(line) {
       return  console.log(`this is ${this.type} we ${line}`)

    }
}
class dog extends animals {
    speak(line) {
        console.log(`this ${this.type} it backs ${line}`)
    }
}
let flex= new animals("cat")
console.log(flex.speak(" we are the people"))
// here er str going to create the dog one in the class that 
// has inihertad from the animals class 
let max= new dog ("max")
console.log(max.speak("i am a dog please")) 

// for using the super user here we need to know how super user works 
// 
class Parant{
    constructor(name) {
        this.name=name
    }
}
class child extends Parant{
    constructor(name, ages) {
        super(name);
        this.ages=ages
    }
}
// then here we will create the objects here for hundle this 
let kid= new child("sam",32) 
console.log(kid)
console.log(kid.ages)
// in iot and embedded systems 
class Devices{
    constructor(name) {
        this.name=name
    }
    get seeName() {
        return this.name
    }
   
}
class Arduino extends Devices{
    constructor(name, type) {
        super(name);
      this.type=type
    }
    connected(){
        console.log(` the arduino name is ${this.name} and it type of microcontroller is ${this.type}`)
    }
}
let arduin=new Devices("arduino")
console.log(arduin.seeName)
// lets call the iniharted objects 
let arduins=new Arduino("uno","atmega-35")
console.log(arduins)
// here we are going to use the instance of the operators so here i need to us it 
console.log(arduins instanceof Arduino)