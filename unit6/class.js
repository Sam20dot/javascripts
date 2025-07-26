// this is the way we make the codes easier to understand where we create the objects 
// of the general thing liek the the labbits wich speaks soemthinsg
// here the neccesary thing we need the class keywards 
// and we need the name of the class must start with the capital later 
// this class must contain the following 
// constrcutor which specify how all the objects will behave 
// and the methods 

class Rabbit {
    // here we are going to define the constructor and the passing argments 
    constructor(type) {
        this.type=type
    }
    // here we are going to add the methods 
    //here we dont put the name of the function declarations are this called the prototype 
    //wow 
     speak(line) {
        console.log(` the ${this.type} rabbit says that we ${line}`)
    }

}
// someone can ask him or her self how do we declare the or create the instant objects of 
// the class we use the new keyworlds ]
let whiteRabbits= new Rabbit(" the wite cat")
console.log(whiteRabbits.speak(" we want to make the codes as we was "))

// here we want to insure that we have all we need to make the codes for the better devolopments 
class Rabbits {
    constructor(type) {
        this.type=type;
    }
    // here we are making the 
    speak(line) {

        console.log(`this is how the ${this.type} and the ${line}`)
    }
}
let whiteRabbit= new Rabbits( " the white rabbit ")
console.log(whiteRabbits.speak(" the things we are there for the to make the codes "))