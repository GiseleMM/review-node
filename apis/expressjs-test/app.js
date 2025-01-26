import express from "express";
import path from "path";
import * as url from 'url';
import routerIndex from "./routes/index.js";

//creamos aplicacion, el objeto de aplicacion maneja tareas imprtantes como solicitudes htpp, representacion de vistas HTML y configuracion de middleawar

const app=express();
const port=3000;
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));// por q dirname y filename no existe en ESModule
const __filename = url.fileURLToPath(import.meta.url);



//routes

// app.get("/",(req,res)=>{ 
//     res.send("Hola mundo");//renderiza en la pantalla
// });


//neesitamos agregar json middleware para poder recibir por post json
app.use(express.json())// parse request body as JSON

//Express proporciona un middleware para servir los archivos estáticos como imagenes ,css , js solo se debe pasar el nombre al middlerware express.static para q comienze a servir a los archivos directamente
app.use(express.static(path.join(__dirname, 'public')));
//localhost:3000/imagenes/logo.png me deberia serviar la imagen directamente

//Enrtutamiento
//app instancia de express 
 //metodo de solicitud HTTP
 //path ruta en el servidor
 //handler manejador
// el servidor NOdeJs proporciona los objetos de solicitud HTTP y respuesta HTTP como argumento para estos métodos.Estos métodos son asincronicos e invocan una devolucion de llamada al pasar los objestos de solicitud y respuesta

app.get("/",(req,res)=>{ 
    //res.send("Hola mundo"+__dirname);//renderiza en la pantalla
    //el objeto solicitud req representa la solicitud Http
    //el objeto respuest res representa la respuesta htpp que envia una aplicion express . el metodo send()envia la respuesta del servidor al cliente. Tambien tiene un método sendFile( que envia el contenido de un  archivo ) ej:send.File(path.join(__dirname,"index.html"))
    res.sendFile(path.join(__dirname,"views","index.html"));
});

//para obtener los parametros enviados en la url (por ejemplo cuando se llena un  forma con el método get)
app.get("/argumentos",function(req,res){
//localhost:puerto/argumentos?primero=valor&segundo=valor
    const response={
        //los param de la url se incluyen el el obj solicitud en req.query
        primero:req.query.primero,
        segundo:req.query.segundo

    };
    console.log(response);
    res.end(JSON.stringify(response));//retorno como json
});

//si se envia datos al servidor  con el método post ya sea por q si se deben enviar datos binarios como imagenes o si no se quiere q los datos viajen en la url  sino en el cuerpo de la req.
app.post("/argumentos",function(req,res)
{
const body=req.body;

//otra forma de pasar informacion post :
/*
application/x-www-form-urlencoded: Ej foo=bar&abc=123&stack=abuse. 
Y se necesita usar app.use(bodyParser.urlencoded({ extended: true }));

multipart/form-data: 
text/plain:
 */

//header conte-type aplicaction json; charset=utf-8
console.log("cuerpo:",body);//llegan como json puedo desestructurar
//let {param,param2}=req.body
res.send({message:"llegaron datos :"+body});
});

//app.use("/",routerIndex);// le digo a la aplicacion q use las rutas configuradas en otro archivo



// metodo que crea el servidor en el host y en el puerto especificao(encapsula el método createSever del modulo Http de la api de NOde)
app.listen(port,()=>{//servidor escucha en el puerto 3000
    console.log("Iniciando APi Express.js 🤖 en http://127.0.0.1:"+port);
})