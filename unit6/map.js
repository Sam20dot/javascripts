// this is the map to javascripts 
/**A map (noun) is a data structure that associates values (the keys) with other
values. For example, you might want to map names to ages. It is possible to
use objects for this. */

let ages= {
    boris:64,
    sam:45,
    keve:34

}
//
console.log(`is julian ages are ${ages["boris"]}`)
// here we are going to test if the jack or the new name is hter 
console.log(" is the jack's ages known", " the jack " in ages)
// is to string is there it will be there becouse is in the objects.protpype

console.log(" is to string age known", "toString" in ages)

// to string here if we want to prevent the usages of the objects protype we 
//can pass the null in the objects.create this create te sage objects 
console.log("toString" in Object.create(null))

// here we are going to use the other way we can use to prevent outo coversion 
// into into the string 
// we use the builtin function which is called Map
let age= new Map();
 age.set("boris",23)
 age.set("keve",65)
 age.set("kalisa", 76)

 console.log(` the ages of the boris is ${age.get("boris")}`)
 console.log(` the ages of the jack is known ${age.has("john")}`)
 console.log(age.has("toString"))