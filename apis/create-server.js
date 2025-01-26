const http = require("node:http");
const fs = require("node:fs").promises;
const path = require("node:path"); // Para manejar rutas de forma segura
const {plantas,animales}=require("./routes.js");
//my servidor

const host = "localhost"; //direccion privada de los ordenadors para referirse a ellos mismos , solo esta disponible para el equipo local
const port = "8888"; //nuemro q usan como endpoint a nuestra direccion IP
//http://localhost:8888

//creamos fucnion para ecuchar solicitudes que estar destinada a gestionar una solicitud entrande y devolver una respuest HTTP.
// const requestListener=function(req,res){
//   res.writeHead(200);//esatblece el cód de estado HTTP de la respuesta
//   res.end("My server run😈!");//escribe la respuest HTTP devuelta al cliente q la solicitó
// }
// //creo servidor y usar la escucha
// const server=http.createServer(requestListener);//crea servidor q acepta solicitudes http y las pasa a nuestra funcion requestListener

// server.listen(port,host,()=>{//vinculamos el servidor con una direccion de red , le pasoamos el puerto el host y una funcion de llamda q se activa cuando els ervidor empieza a escuchar
//     console.log("Server running in http://"+host+":"+port);
// })

//curl http://localhost:8888 ejecutamos en terminal y enviamos una solicitud GET al servidor .
//nuestro servidor escucha esa direccion, pasa esa solicitud a la fucnion requestListener
//la funcion devuelve datos y el codigo de estdo, y el servidor envio esa respuesta de vuelta a la dierccion

//-----------------------------------------------
//devolver direrentes tipos de contenido
//la respuesta q devolvemos de un servidor puede tener varios formatos  como pdf,archivos,audios,json,csv,html
//necesitamos establecer el encabezado Content-type en nuestra respuesta HTTP y aseguranos q res.end() obtenga los datos en el formato adecuado

//JSON🔷
//Es un formato de intercambio de datos en texo. Como queresmos devolver una respuesta JSON  colocamos en encabezado adecuado
// const requestListener = function (req, res) {
//   //setHeader(nombre de encabezado , valor)
//   res.setHeader("Content-Type", "application/json; charset=utf-8"); // añade un encabezado a la respuest. Los encabezdos son informacion adicional q puede adjuntarse a una solicitud o respuesta.
//   res.writeHead(200); //esatblece el cód de estado HTTP de la respuesta
//   res.end(JSON.stringify({message:"My server run😈!"}));
// };
// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//   console.log("Server running in http://" + host + ":" + port);
// });

//CSV🔷
//Es un formato de archivo q tiene los valores separados por comas

// const requestListener = function (req, res) {
//     //setHeader(nombre de encabezado , valor)
//     res.setHeader("Content-Type", "text/csv; charset=utf-8");
//     res.setHeader("Content-Disposition","attachment;filename=micsv.csv"); // Content-Disposition indica al navegador como mostrar los datos, cuando devolvemos respuesta csv la mayoria de los navegadores descargan el archivo,por ello con filename inicamos el nombre del archivo csv
//     res.writeHead(200); //esatblece el cód de estado HTTP de la respuesta
//     res.end("id,name,email\n1,Lali,lali@gmail.com\n2,Lalo,lalo@gmail.com");//escribimos los datos en formato csv
//   };
//   const server = http.createServer(requestListener);
//   server.listen(port, host, () => {
//     console.log("Server running in http://" + host + ":" + port);
//   });

//HTML🔷
//Lenguaje de marcado de hipertexto. Los navegadors web se crearon para mostrar contenido HTML

// const requestListener = function (req, res) {
//     //setHeader(nombre de encabezado , valor)
//     res.setHeader("Content-Type", "text/html; charset=utf-8");
//     res.writeHead(200); //esatblece el cód de estado HTTP de la respuesta
//     res.end(`<html><body><h1>Respondo con HTML🐤 </h1></body></html>`);
//   };
//   const server = http.createServer(requestListener);
//   server.listen(port, host, () => {
//     console.log("Server running in http://" + host + ":" + port);
//   });

//presentando archivos html

// const requestListener = function (req, res) {
//     if (req.url === "/style.css") {
//       // Si la solicitud es para el archivo CSS
//       const filePath = path.join(__dirname, "style.css");

//       fs.readFile(filePath)
//         .then((content) => {
//           res.setHeader("Content-Type", "text/css; charset=utf-8"); // Especificamos que es un archivo CSS
//           res.writeHead(200); // Establece el código de estado HTTP
//           res.end(content); // Retorna el contenido del archivo CSS
//         })
//         .catch((error) => {
//           res.writeHead(500); // Establece el código de estado HTTP de error
//           res.end("Error al cargar el archivo CSS: " + error.message); // Pasa el mensaje del error como texto
//         });
//     } else if (req.url === "/") {
//       // Si la solicitud es para la página principal (HTML)
//       const filePath = path.join(__dirname, "index.html");

//       fs.readFile(filePath)
//         .then((content) => {
//           res.setHeader("Content-Type", "text/html; charset=utf-8");
//           res.writeHead(200); // Establece el código de estado HTTP
//           res.end(content); // Retorna el contenido del archivo HTML
//         })
//         .catch((error) => {
//           res.writeHead(500); // Establece el código de estado HTTP de error
//           res.end("Error al cargar el archivo HTML: " + error.message); // Pasa el mensaje del error como texto
//         });
//     } else {
//       // Si la solicitud no es para / o /style.css, retorna un error 404
//       res.writeHead(404);
//       res.end("Archivo no encontrado");
//     }
//   };

//   const server = http.createServer(requestListener);
//   server.listen(port, host, () => {
//     console.log("Server running in http://" + host + ":" + port);
//   });

//Presentar html de manera eficiente----------------------------------------------------------
//cunado la aplicacion esta en produccion es posiblke q no queira cargar una pagina html cada vez q recibas una solicitud http . si tu sitio espera mucho trafico puede ser mejor cargar los archivos html al inicio y guardar su contenido.
//tras cargarse puede configuarr el servidor para que escuche las solicitudes en esa direccion
const cssPath = path.join(__dirname, "style.css");
const filePath = path.join(__dirname, "index.html");

// let indexFile;
// let cssFile;
// fs.readFile(cssPath)
//   .then((content) => {
//     cssFile = content;
//     console.log(cssFile);
//   })
//   .catch((e) => {
//     console.log("no encontrado archivo");
//     cssFile = null;
//   });

// fs.readFile(filePath)
//   .then((content) => {
//     indexFile = content;
//     console.log(indexFile);

//   })
//   .catch((e) => {
//     console.log("no encontrado archivo");
//     indexFile = null;
//   });

// const requestListener = function (req, res) {
//   if (req.url == "/style.css") {
//     res.setHeader("Content-Type", "text/css; charset=utf-8");
//     res.writeHead(200);
//     res.end(cssFile);
//     return;
//   } else if (req.url == "/") {
//     res.setHeader("Content-Type", "text/html; charset=utf-8");
//     res.writeHead(200);
//     res.end(indexFile);
//     return;
//   }
//   res.writeHead(404);
//   res.end("Archivo no encontrado");
// };

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//   console.log("Server running in http://" + host + ":" + port);
// });


//administrar rutas usando un objeto de solicitud http--------------------------------------------
//podemos separar los tipos de datos q se devuelve en base al endpoint al que el usuario accede


const requestListener=function(req,res){
    res.setHeader("Content-type","application/json; charset=utf-8");
    switch (req.url) {
        case "/plantas":
            res.writeHead(200);
            res.end(plantas);
            break;
            
        case "/animales":
            res.writeHead(200);
            res.end(animales);
            break;
            default:
                res.writeHead(404);
                res.end(JSON.stringify({error:"Resource not found"}));
            break;
    }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log("Server running in http://" + host + ":" + port);
});
