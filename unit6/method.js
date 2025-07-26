// method is the functions that takes the propaties as the argments 
function speak(line) {
     console.log(`the ${this.type} rabbit says ${line}`)

}
let whiteRabbit={type:'white',speak}
let hungryRabbit={type:"hungry",speak}

whiteRabbit.speak(" this is the best life i have ever lived ")
hungryRabbit.speak(" we need the food for the eating on this methods ")

// the methods is the functions that has been used with in  the objects here the are the other 
// version of that first examples 

let Rabbit ={
    type:"white",
    speaky:function(line) {
        console.log(` the ${this.type} rabbit say that ${line}`)
    }}
 
    Rabbit.speaky( " this is the place we like to eat the food ")
// here the anthore things we can use here is to use the mehod.