//const fs=require("fs"); COMMONJS

import fs from "fs"; //ESMODULO

//sincronico
console.log("Inicio lectura sincronica");
const data = fs.readFileSync("test-lectura.txt");
console.log(data); //buffer
console.log(data.toString().trim());
console.log("Fin lectura sincronica");

console.log("Inicio lectura asincronica");
fs.readFile("test-lectura.txt", (error, data) => {
  console.log(data.toString().trim());
});
console.log("Fin lectura asincronica");


//CREACION

//APPENDFILE
// console.log("Inicio creacion archivo sincronica");
// fs.appendFileSync("appendFile.txt","si el archivo no existe lo crea y agrega el contenido,si exite solo agrega contenido");
// console.log("Fin creacion archivo sincronica");


// console.log("Inicio creacion archivo Asincronica");
// fs.appendFileSync(
//   "appendFile.txt",
//   "Si es asincrona necesita un callback como tercer argumento",
//   function (err) {
//     if (err) console.log(err.message);
//   }
// );
// console.log("Fin creacion archivo asincronica");


//OPEN
// console.log("Inicio cracion con open syncronico");
// fs.openSync("opensync.txt","w");// segundo argumento es una bandera  q especifica el modo de apertura, w indica escritura y si no exite lo crea vacio
// console.log("Fin cracion con open syncronico");

// console.log("Inicio cracion con open Asyncronico");
// fs.open("openasync.txt","w",(error,file)=>{
//   if(error)console.log("Error en creacion de archivo");
// });// segundo argumento es una bandera  q especifica el modo de apertura, w indica escritura y si no exite lo crea vacio, 3 argumeto callback error
// console.log("Fin cracion con open Asyncronico");

//WRITEFILE 
//método remplaza el archivo y el contenido si exite, si no existe se creara un nuevo archivo con el contenido
//  console.log("Inicio creacion con writeFile syncronico");
//  fs.writeFileSync("writefilesync.txt","contenido de writeFileSync");
//  console.log("Fin creacion con writeFile syncronico");

//  console.log("Inicio creacion con writeFile Asyncronico");
//  fs.writeFile("writefileasync.txt","contenido de writeFile (asincrono)",function(err){
//   if(err)console.log("Error en creacion de archivo");
//  });
//  console.log("Fin creacion con writeFile Asyncronico");
  

//ACTUALIZAR ARCHIVOS

//APPENDFILE Agrega el contenido del 2°argumento al final del archivo especificado en el 1° arg

// console.log("Inicio actulizacion con appendFileSync");
// fs.appendFileSync("opensync.txt","appendFileSync contenido append");
// console.log("Fin actulizacion con appendFileSync");

// console.log("Inicio actulizacion con appendFile asincronico");
// fs.appendFileSync("opensync.txt","appendFile contenido append asincronico",function(e){
//   if(e)console.log("Error en append a archivo");
// });
// console.log("Fin actulizacion con appendFile asincronico");

//ELIMINAR ARCHIVO
// console.log("Inicio eliminacion sincrónica");
// fs.unlinkSync("opensync.txt");
// console.log("fin eliminacion sincrónica");


// console.log("Fin eliminacion Asincrónica");
// fs.unlink("openasync.txt",(err)=>{
//   if(err) console.log("Error en eliminacion de archivo");
// });
// console.log("fin eliminacion Aincrónica");


//CAMBIAR NOMBRE
console.log("Inicio cambio de nombre sincrono");
fs.renameSync("writefileasync.txt","writeFileAsync.txt");
console.log("Fin cambio de nombre sincrono");

console.log("Inicio cambio de nombre asincrono");
fs.renameSync("writefilesync.txt","writeFileSync.txt");
console.log("Fin cambio de nombre Asincrono");
