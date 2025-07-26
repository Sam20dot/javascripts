// this is the pplymeakthism 
// here we when we call the string objects it also calls to string function 
class Rabbit{
    // constructor function 
    constructor(type) {
        this.type=type
    }
    // methods for this 
    speak(line) {
         console.log(` the ${this.type} says that ${line}`)
    }

}
// then here we need to find the main call of that class 
let killerRabbt=new Rabbit("killer")
// here we are going to use polymathism 
Rabbit.prototype.toString=function() {
     return `a ${this.type} rabit` 
}
console.log(String(killerRabbt))
console.log (typeof(String))
// so here the function string has called the toString and as the function 
// of the rabbit so that is what happened
// EXERCISES
//here we have different animals like cat ,dog and other we want to create this 
//function 
function speak(animals) {
    // this function will pass the animals and it will return this 
    return animals.makesound()
}
// then we are going to make the classes of all the animals
class Rabbit1 {
    makesound() {
        console.log("says wowo")
    }
}
class Dog{
    makesound() {
        console.log("wowooooo")
    }
}
class Cat{
    makesound() {
         console.log("mwauw")
    }
}
// here we dont care what the name of the animal is the main functoin is 
// that it has the makesound function 

// here we will call that main function 
speak(new Rabbit1)
speak(new Cat)
speak(new Dog)

// other examples here 
function connected(divice) {
    return divice.connect()

}
class Arduino{
    connect() {
        console.log(" arduino is connected")
    }
}
class ESP_32{
    connect() {
        console.log(" the esp32 is connected successfully")
    }
}

connected(new Arduino)
connected(new ESP_32)