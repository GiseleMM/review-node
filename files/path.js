const path=require("node:path");
const ruta="./files/path.js";
console.log(path.dirname(ruta));
console.log(path.basename(ruta));
console.log(path.extname(ruta));
//puedes obtener el nombre del archivo sin la expension especificando un segundo argumento en basename
console.log(path.basename(ruta,path.extname(ruta)));


//UNIR RUTAS
const name="rosa";
const join=path.join("/","users",name,"usuarios.txt");// /users/rosa/usuarios.txt
console.log(join);

//PARA OBTENER RUTA OBSOLUTA DE UNA RUTA RELATIVA
console.log(path.resolve("path.js"));
//si solo se coloca el  nombre del archivo crea la ruta absoluta al directorio actual
//Si especificas una segunda carpeta de parametro , resolve utilizara la primera como base de la segunda
console.log(path.resolve("introduccion","path.js"));// ....../introduccion/path.js
//si ponemos "/" en el primer parametro lo toma como ruta absoluta 
console.log(path.resolve("/introduccion","path.js"));// /introduccion/path.js

