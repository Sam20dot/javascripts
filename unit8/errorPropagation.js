// here we are going to tell the user and check if the number they entered is the valid numbers 
function number(question) {
    let result=Number(prompt(question))
    if (Number.isNaN(result)) return null
    else return result
}
console.log(`enter the number you want ${number("enter the number")}`)
// then we are adding the codes here for the catching the error
function promptDirection(question) {
    let results= prompt(question)
    if (results.toLocaleLowerCase=="left") return 'L';
    if(results.toLocaleLowerCase== "right") return 'R';
    throw new error("invaled direction:"+error)
}
function look() {
    if(promptDirection("which way")=='L'){
        return "a house"
    }
    else {
        return "two angry bears"
    }

}
try {
    console.log("you see", look())
} catch (error){
    console.log("somethings went wrong" + error)

}