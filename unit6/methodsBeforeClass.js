// this is the parts of the javascripts where we use the class to create the other 
// objects 
// this is the constructor functions 
let protoRabbit={
    speak:function(line) {
        console.log(`the ${this.type} says that ${line}`)
    }
}
// that is the 
function speakRabbit(type) {
    let rabbit=Object.create(protoRabbit)
    rabbit.type="white"
    return rabbit
}
// this is the whole staff we have done is not now neccessary to use this 