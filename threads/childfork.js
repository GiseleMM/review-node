const {fork}= require("child_process");
const child=fork("./hijo.js");//nombre del archivo q se ejcutara en proceso secundario
child.send({data:"Padre fork🐷"})// //El método send se utiliza para enviar un mensaje al proceso secundario a través de IPC 
child.on("message",message=>{
    //El método //on("message") se utiliza para escuchar los mensajes enviados por el proceso secundario
    console.log(message);
})
