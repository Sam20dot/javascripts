// this is the other way of testing the what we have studied and see
// if we still remember it 
// here there is the array of the devices that are connected to each other 
let devices=["arduino-bloototh","arduino-camera","bloototh-telephone", 
    "telephone-ipod", "ipod-arduino","arduino-esp32","television-telephone", "speaker-televison"
]
// here we are going to make the functions that shows the connected devices 
function connected(dev) {
    let deviceConnection=Object.create(null) 
    // the above we created the objects that will holds the divices and thier connections 
    // here we are going to creat the functions that sorts the objects and thier connections and push them 
    // in the above object 
     function addConnection(device,connectedto){
        if (device in deviceConnection) {
            deviceConnection[device].push(connectedto)
        }
        else {
            deviceConnection[device]=[connectedto]

        }
       
        
        }  
          for (let [device,connectedto] of dev.map(d=>d.split("-"))){
            addConnection(device,connectedto)
            addConnection(connectedto,device)
}
return deviceConnection;
     }
   
     let conncetedD= connected(devices)

    console.log(conncetedD)
    // here we are going to make the robot that is going to connect this all staffs it will connect 
    // the wire from where it and connect to the other parts 
    class RobotConnect{
        constructor(device,where){
             this.device=device;
             this.where=where
        }
        // here we create the robot where it will make the codes and connected 
        move(destination) {
            if(!conncetedD[this.device].includes(destination)){
                return this
            }
            else {
                let where=this.where.map(d=>
                { if(d.device !=this.device) return d;
                    return {divice:destination ,connecte:this.connected}
                }
                
                ).filter(d=>d.device!=d.connected)
            }
            return new RobotConnect(this.device,where)
        }
        
    }
    let connectstaff=new RobotConnect('arduino',
        [{device:"arduino"},{conncted:"telephone"}])
        console.log(connectstaff)
        