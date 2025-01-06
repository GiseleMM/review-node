const process=require("node:process");
process.on("exit",(code)=>{
    //no debe ser operacion asincronas (ej settimeout) por q el proceso de node finaliza inmediatamente despues e llamar a exit
    console.log("🔄Evento de salida del process ,code: ",code);
});
process.exitCode=1;//sera  codigo de salida del proceso cuando el proceso sale correctamente o se llama a process.exit()sin ningun codigo como param 

process.exit();//si se pasa un código se anulara la configuracion de process.exitCode
