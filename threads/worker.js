const {parentPort}=require("worker_threads");

//escucha los mensaje del proceso principal
parentPort.on("message",(msg)=>{
console.log("mensaje recibido en el worker:",msg);
//realiza alguna tarea
const result="mensaje procesado en worker 🍋"+msg;

//envia un mensaje de vuelta
parentPort.postMessage(result);
});
//termina automaticamente cuando no hay mas tareas pendientes
