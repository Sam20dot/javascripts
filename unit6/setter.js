// this is the setter function here 
class Temperature {
    constructor(celicius) {
         this.celicius=celicius
    }
    get fahrenheit() {
        return this.celicius=this.celicius*1.8 +32;
    }
    set fahrenheit(value) {
        this.celicius=(value-32)/1.2
    }
    static fromfahrenheit(value) {
        return new Temperature (value-32)/1.8
    }
}
let temp=new Temperature(32) 
console.log(temp.fahrenheit)
temp.fahrenheit=43
console.log(temp.celicius)
// othe examples for setter 
class Bank{
    constructor(Name,Balance) {
        this.Balance=Balance;
        this.Name=Name
    }
    get deposit() {
        return this.Balance
    }
    set deposit(amount){
        return this.Balance= amount+=this.Balance
    }
    static mimimum() {
        return `the amount which are minimun is 100`
    }
}
let sam= new Bank('sam', 1000)
console.log(sam)

sam.deposit=3000// here i had to use the find thebecouse i have used the setter

console.log(sam.deposit)