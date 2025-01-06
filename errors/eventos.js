const {EventEmitter}=  require('node:events');
const fs=require("fs");
//emit se utiliza para desencadenar un evento 
//on para agregar un funcion de devolucion de llamada q se ejecutar cuando se active un evento

const eventEmitter=new EventEmitter();

//cramos un evento llanado errorArchivo
eventEmitter.on('errorArchivo',(error)=>{
    console.log("Error en archivo:",error);
});
eventEmitter.on("data",(result)=>{
    console.log(result);
})

try {
const data=fs.readFileSync("/nsdaks");
//emitimos evento 
if(data) eventEmitter.emit("data",data);
    
} catch (error) {
    //emitimos evento
eventEmitter.emit("errorArchivo",error);
    
}
