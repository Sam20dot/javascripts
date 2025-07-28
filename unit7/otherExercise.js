// here we are going to create the robot that delives the mail in the city
let road=["kwarubangura-kwamakuza","kwamakuza-citytower","citytower-dontown",
    "dontown-kwarubangura"
]
// first let make the funcitons that show every building and thier links 
// this will be the graph or the objects tha will show how are connected
/*function connected(roads) {
    // first we create the objects that will holds that buildings and thier 
    //connections 
    let buidingConnection=Object.create(null)
    // here we are going to craet the function which connect them 
     function connectHouse(building,connectedto){
        if(building in buidingConnection){
            buidingConnection[building].push(connectedto)
        }
        else{
            buidingConnection[building]=[connectedto]
        }
        
        

    }
    for (let [building,connectedto] of roads.map(r=> r.split("-"))){
            connectHouse(building,connectedto)
            connectHouse(connectedto,building)
        }
    return buidingConnection
}
const mapOfKigali=connected(road)
console.log(mapOfKigali)

// here we are going to add the next staffs that class that contains the place where the robot is and where it 
// where the package is 
class PackageDervally{
    constructor(place,pack){
        this.place=place;
        this.pack=pack;
    }
    // then here we are going to create the function which helps our robot to move from one location to 
    // anather if the robot is at the same place as the package it will takes it and if not 
    // it will not go there 
    move(destination) {
       
        if(!mapOfKigali[this.place].includes(destination)){
            return this; //just like to stay where you are 
        }
        else {
            let pack=this.pack.map(p=>{
                if(p.place!=this.place) return p;
                return {place:destination, adress:p.adress}
            }).filter(p=>p.place!=p.adress)
        }
        return new PackageDervally

    }
}
let sendbiscuit=new PackageDervally("kwarubangura",

    [
        {place:"kwarubangura",adress:"kwamakuza"}
    ]
)
console.log(sendbiscuit)*/
// lets start exercises 
function map(array) {
    let buildMap=Object.create(null)
    function AddBuild(build,connectedto){
        if(build in buildMap) {
            buildMap[build].push(connectedto)
        }
        else {
            buildMap[build]=[connectedto]
        }
    }
    // here we are going to use that function for first take the array we have and separates it 
    // using map and the split function and make it more easy to map every building and it connection 
    for (let [build,connectedto] of array.map(p=>p.split("-"))){
        AddBuild(build,connectedto)
        AddBuild(connectedto,build)
    }
    return buildMap
}
let builtmap= map(road)
console.log(builtmap)
// here we are going to create the robot and where it will move 
// the robot must have the current location and the place where it has to go 
// so this must be the class where we can create the robot which emitates the behavior of 
// of that class 
// this class
class MapDelivaryRobot{
    // this class must have two constructors the first one is the current location of the robot 
    // the second is the current place of the packages 
    constructor(robotPlace, delivable){
        this.robotPlace=robotPlace;
        this.delivable=delivable;
        // to means that every new robot we create must have this two things 
        // we must make shure that the delivable contains the place and wherer it will be delived
    }
    // so here we are going to add the functions which determines the motion of the robot 
    // if the current locations is not the same as the robot it will not move it will stay where it is 
    // and this function will take the destination from the current built building we have creates which holds the 
    // whole map and the buildinsg and thier connection 
    move(destination) {
        if(!builtmap[this.robotPlace].includes(destination)) {

            return this
        }
        else{
            let delivable=this.delivable.map(p=>{
                if(p.place!= this.robotPlace) return p;
                return {place:destination, address:p.address}
            }).filter(p=>p.place!=p.address)
        }
        return new MapDelivaryRobot(destination,delivable);
    } 
    
}
let motion=new MapDelivaryRobot('kwamakuza',[{ place:"kwamakuza", destination:"citytower"}])
console.log(motion)
let first=motion.move("dontown")
console.log(first.robotPlace)