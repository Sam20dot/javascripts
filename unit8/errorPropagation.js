// here we are going to tell the user and check if the number they entered is the valid numbers 
function number(question) {
    let result=Number(prompt(question))
    if (Number.isNaN(result)) return null
    else return result
}
console.log(`enter the number you want ${number("enter the number")}`)
// then we are adding the codes here for the catching the error
function promptDirection(question) {
    let results=prompt(question)
    if(results.toLowerCase=="left") return "L";
    if(results.toLowerCase=="right") return "R";
    // here we try to cath the error that might happen here 
    // to means that when the user enter the word  which is different from the left or right it 
    // show the error but the codes will preceed 

    throw new error(" invalid direction:"+ results)
}
function show() {
   if(promptDirection('which way is  ')=="L") return " a house"
   else return "two bear animals"
}
// here we use try to cath the error 
try {
    console.log(" the way is " +show)
} catch (error){
    console.log(" the error happened"+error)
}
//the code and the way we find the way we want to build

// here we are going to try this to see what will happen to mean that here we use the catch the error 
// to helps us to see what happened just like what couseed the stop of the excutions 
// but the following staff continue to works 
//EXAMPLES
try {
    let sam=String(prompt('what is your name'))
    console.log("sam"+sam)
}catch{
    console.log(" you entered the number instead of the string " + error)
}