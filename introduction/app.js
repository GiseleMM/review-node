console.log("Hola mundo NOde.Js");
console.log("Probando bandera --watch");

// BLOQUEANTE
// console.log("Inicio  bloqueante");

// const fs=require("fs");
// const data=fs.readFileSync("readme.md","utf-8");
// console.log("data",data);
// console.log("Fin bloqueante");

//NO BLOQUEANTE
// console.log("Inicio no bloqueante");
// fs.readFile("readme.md","utf-8",(err,datos)=>{
//     if(err)throw err;
//     console.log("data",datos);
// });
// console.log("fin no bloqueante");


//COMMONJS
const commonjs=require("./common.js");
commonjs.funcion2();
console.log(commonjs.CLAVE);

//ESM se ejecuta en archivo mjs o type module

const readline=require("readline");
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
r1.question("funciona readline?",res=>{
    console.log("Respuesta",res);
    r1.close();
});
