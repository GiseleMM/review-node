const { rejects } = require("node:assert");

function creandoPromesa(argumento) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (argumento > 0) {
        resolve(argumento);
      } else {
        reject("Error");
      }
    }, 3000);
  });
};

console.log("Inicio");
creandoPromesa(0)
.then(console.log)
.catch(console.log);
console.log("FIN");




const myPromesa=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("​🤞​")},4000);
})
//promesas encadenadas
myPromesa
.then((valor)=>"​👁️ ​"+valor)// retorna otra promesa
.then((valor)=>"​​​🙊​ "+valor)
.then((valor)=>"​​🙀​ ​"+valor)
.then((valor)=>console.log(valor))//maneja la promesa cumplida
.catch((error)=>console.error(error));//maneja el rechazo de la promesa


myPromesa
.then((valor)=>{throw new Error("​💥​")})
.then((valor)=>console.log("NO paso por aca...por que el error va al catch"))
.catch((error)=>console.log(error.message));