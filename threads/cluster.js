const cluster=require("cluster");
const http=require("http");
const os=require("os");


//verifica si el proceso es el maestro
if(cluster.isMaster)
{

    //comunicacion 
    const w=cluster.fork();//en el proceso primario
    w.on("message",(m)=>{ //como recibe el proceso principal
        console.log("Mensaje from worker:",m);
    });
    w.send("Desde principal 👽");//se envia a los process secundarios


    console.log(`Master ${process.pid} esta ejecutandose`);

    //obten la cantidad de nucleos de CPU
    const numCPUs=os.cpus().length;

    //creo un worker para cada núcleo
    for (let index = 0; index < numCPUs; index++) {
        console.log("creando worker "+index);
        cluster.fork();
        
    }

    cluster.on("exit",(worker,code,signal)=>{
        console.log(`worker ${worker.process.pid} termino`);
        // Opcional: reinicia el worker si falla
    // cluster.fork();
    })

}else{
    //codigo del worker: cada uno crea un servidor
    http.createServer((req,res)=>{
        res.writeHead(200);
        res.end("Hola desde el worker "+process.pid);
    }).listen(8888);
    console.log("Worker iniciado :"+process.pid);


    //comunicacion

    process.on("message",(m)=>{
        console.log("Mensaje desde master:"+m);
        process.send("mensaje desde secundario 🐸 ");
    })
}