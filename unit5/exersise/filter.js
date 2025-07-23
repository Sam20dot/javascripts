// here is where we want to practice the filter to make it more good 

function filter (array, test) {
    let results=[]
    for (let element of array) 
    {if (test(element)){
        results.push(element)
    }

    }
    return results;
}
// here we use the scripts 
let farmers=[
    {firstName:"nizawe", location:"kigali"},
    {firstName:"hisopes", location:"nyungwe"}
]
// here we are going to select according to the locations if he come from the city or not 
function tellME(locat) {
    
    
     return locat.location =="kigali"
}
console.log(filter(farmers,tellME))