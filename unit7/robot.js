//  this is the project we are going to create the robot which will deliver 
// the mail we have the place called the MEADOWFIELD IT HAS 11 PLACES AND 14 ROADS
// HERE THERE IS AN ARRAY THAT DISCRIBES THAT LOADS
const roads = [
"Alice's House-Bob's House", "Alice's House-Cabin",
"Alice's House-Post Office", "Bob's House-Town Hall",
"Daria's House-Ernie's House", "Daria's House-Town Hall",
"Ernie's House-Grete's House", "Grete's House-Farm",
"Grete's House-Shop", "Marketplace-Farm",
"Marketplace-Post Office", "Marketplace-Shop",
"Marketplace-Town Hall", "Shop-Town Hall"
];
function buildGraph(edges) {
    let graph= Object.create(null) 
    function addEdge (from, to) {
        if (from in graph) {
            graph[from].push(to)
        }
        else {
            graph[from]=[to]
        }
    }
    for(let [from ,to] of edges.map(r=>r.split("-"))){
        addEdge(from,to) ;
        addEdge(to,from)
    }
    return graph;
}
const roadGraph= buildGraph(roads)
// here we are going to create the class for the villages 
class VillageState{
    constructor(place,parcels) {
        this.place=place;
        this.parcels=parcels
    }
    // we create the move methods that is responsible for making the robot move 
    move (destination) {
        if(!roadGraph[this.place].includes(destination)) {
            return this
        }
        else {
            let parcels=this.parcels.map(p=> {
                if(!p.place==this.place) return p;
                return {place:destination, address:p.address}
            }
            ).filter(p=>p.place!=p.address)
            return new VillageState(destination,parcels)

        }
    }

}
let first = new VillageState(
"Post Office",
[{place: "Post Office", address: "Alice's House"}]
);
let next = first.move("Alice's House");
console.log(next.place);
// we have seen that this robot here it will take the state where the it is and where it want to go
function runRobot(state, robot, memory) { // then it will take robot function which takes the 
    // memory and the destination and return memory and direction 
    // and memory where is remaining 
for (let turn = 0;; turn++) {// this loop will run forver when the state.parcel still contains somethings which is like parcel length
if (state.parcels.length == 0) {
console.log(`Done in ${turn} turns`);
break;// when top the parcel packages remain with nothings it will stop the loop
}
// when the condtion become force it will take the action this robot function which will take all 
// the job as states and the momory of where to go so it will return when it go and the direction 
let action = robot(state, memory);
// here it will updates its location when it reach there 
state = state.move(action.direction);
// and it will updates it memory 
memory = action.memory;
// then it will print the location where it has travelled to 
console.log(`Moved to ${action.direction}`);
}
}
// here we are going to make th rondom piatch for this robot 
function randomPick(array) {
    let choice=Math.floor(Math.random()*array.length);
    return array[choice]
}
// then here we create the random place of the robot 
function randomRobot(state) {
    return {direction:randomPick(roadGraph[state.place])}
}
//
VillageState.random = function(parcelCount = 5) {
let parcels = [];
for (let i = 0; i < parcelCount; i++) {
let address = randomPick(Object.keys(roadGraph));
let place;
do {
place = randomPick(Object.keys(roadGraph));
} while (place == address);
parcels.push({place, address});
}
return new VillageState("Post Office", parcels);
};
// let start make it run 
runRobot(VillageState.random(), randomRobot);
// lets give it the location 
const mailRoute = [
"Alice's House", "Cabin", "Alice's House", "Bob's House",
"Town Hall", "Daria's House", "Ernie's House",
"Grete's House", "Shop", "Grete's House", "Farm",
"Marketplace", "Post Office"
]
function routeRobot(state, memory) {
if (memory.length == 0) {
memory = mailRoute;
}
return {direction: memory[0], memory: memory.slice(1)};
}// here we can use the type just to define the what cames in the function 
//(gragh:object , from:string , to:string)

function findRoute(graph, from, to) {
let work = [{at: from, route: []}];
for (let i = 0; i < work.length; i++) {
let {at, route} = work[i];
for (let place of graph[at]) {
if (place == to) return route.concat(place);
if (!work.some(w => w.at == place)) {
work.push({at: place, route: route.concat(place)});
}
}
}
}
function goalOrientedRobot({place, parcels}, route) {
if (route.length == 0) {
let parcel = parcels[0];
if (parcel.place != place) {
route = findRoute(roadGraph, place, parcel.place);
} else {
route = findRoute(roadGraph, place, parcel.address);
}
}
return {direction: route[0], memory: route.slice(1)};
}