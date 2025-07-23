// the main for adding the motosyclist and sorts them according to the payments 

function filter(array, test){
    let paid=[];
    for (let element of array) {
        if (test(element)) {
            paid.push(element)
        }
    }
    return paid ;
}
let motosyclist=[
    {Name:"Sam Pray", payment:3000, month:3},
    {Name:"keve",payment:1000 ,month:1}
]
function isPaid(moto){
    return moto.payment>1000 || moto.month>1
}

console.log(filter(motosyclist,isPaid))

