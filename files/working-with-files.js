//import { promises as fs } from "fs";
const fs = require("fs").promises;//para usar await

//LECTURA
async function readFile(fileName) {
  try {
    //readFile devuelve un objeto buffer  que puede almacenar caulquier tipo de archivo , y conviertes esos bytes en texto mediate el metodo toString() del objeto buffer
    const data = await fs.readFile(fileName);
    console.log(data.toString());
  } catch (error) {
    console.log("No se pudo leer archivo:", error.message);
  }
}
readFile("./test-lectura.txt");

//ESCRITURA
async function createCSV(header, name) {
  try {
    const csvHeader = header; //name,age,city
    await fs.writeFile(name, csvHeader);
    //1 argumento el la ruta del archivo. si solo proporcionas el nombre Node creará el archivo en el mismo directorio en el q se esta ejecutando el código
    //2 arguemnto son los datos q se escriben
  } catch (error) {
    console.log("Error en creacion de archivo:", error.message);
  }
}
async function addItemCSV(param, name) {
  try {
    const csvLine = "\n" + param; //param si header es name,age,city=> rosa,30,quilmes
    await fs.writeFile(name, csvLine, { flag: "a" });
    //el 3 argumento en un objeto que tiene una calve flag con el valor a que le indica a node q agregue algo al archivo no lo sobreescriba, si no se especifica el valor predeterminado es w que crea un archivo nuevo si no exite o sobreescribe si existe
  } catch (error) {
    console.log("Error en agregar item a archivo:", error.message);
  }
}
//ESMODULE
//Para usar esta sintaxis el archivo debe ser mjs otener el package.json type module y ademas la importacion debe ser: import { promises as fs } from "fs";
// await createCSV("id,nombre,edad","user.csv");
// await addItemCSV("1,anya,44","user.csv");
// await addItemCSV("2,mara,12","user.csv");
// await addItemCSV("3,andres,28","user.csv");

//COMMON.JS
// si no estas trabajando con mudulo msj . deben encapsular las funciones asincronicas en una async function anonima
// ademas se incluye entre parentesis esto le indica a js q el código q se encuentra dentro de ellos es una expreson de funcion. los parentesis final de la expresion de funcionse utilzan para invocalr inmediatament.IIFE

// (async () => {
//   await addItemCSV("4,lucas,18","user.csv");
//   await addItemCSV("4,tomas,56","user.csv");
  
// })();

//ELIMINACION
async function deleteFile(path) {
  try {
    await fs.unlink(path);
    // se pasa la ruta del archivo q desea eliminar, NO envia a la papelera sino q elimina de forma permanente del sistema
    
  } catch (error) {
    console.log("Error en eliminacion de archivo:",error.message);
  }
  
}
deleteFile("user.csv");// si no se indica ruta se busca el la carpeta donde se ejecuta el codigo

//MOVER ARCHIVOS

async function moveFile(source,destination)
{
  try {
    await fs.rename(source,destination);
    console.log("archivo movido desde "+source+" a "+destination);
  } catch (error) {
    console.log("Ocurrio error en mover archivo",error.message);
  }
}
moveFile("copy-test.txt","./move/newname.txt");//se mueve de la ubicacion original y se colaco en el destino con el nombre indicado