/** here we have to find the distance between two vectors and 
 * t add them or to subsrtact them so here we  have to do this 
 * exercise so we  are going to create the class called vec which stands 
 * for the vectors in two dimensioin and we need to create 
 * the minus and the plus fucntion or methods to add them
 * and then we will need the getter function which returns the other parts 
 * // here is the steps for the developments of this algorthism 
 * we create the class first called vec 
 * 2. we ceate the constructor which is responsible for storing and initialize 
 * the x, and y cordinates 
 * 3. we create the function which will take the vectors and minus the 
 * cordinates alread stored in the consrttuctor parts and then 
 * 4. we create the function add which will add the whole vectors whichh will take the vectors 
 * and return the the object which has been created from the class vec 
 * 6. we create the function that is capable for returning the the distance between them 
 * the following is the imprementation
 */
class Vec {
    constructor(x,y) {
         this.x=x
          this.y=y
    }
    minus(other) {
        return new Vec(this.x-other.x,this.y-other.y)
    }
    plus(other){
        return new Vec(this.x+other.x, this.y-other.y)
    }
    get length() {
        return Math.sqrt(this.x**2+ this.y**2)
    }
}
// here we create  the objects in that class 
let vector1= new Vec(12,45)
let vector2= new Vec(34,56)
console.log(vector1)
console.log(vector2)
// lets call the function called minus
let substract=vector1.minus(vector2)// here we take the vector one and minus the other one 
console.log(substract)
let add= vector2.plus(vector1)
console.log(" the added vectors are ")
console.log(add)
console.log(vector1.length)