function saludar(nombre) {
  console.log("hola " + nombre + " 😉​");
}
function despedir(nombre) {
  console.log("Chaoo " + nombre + " 🖐️​");
}
function funcionOrdenSuperior(callback, nombre) {
  console.log("funcion de orden superior");
  callback(nombre);
}
//callback sincronicos, se ejecutan inmediatamente
console.log("Inicio sincronico");
funcionOrdenSuperior(saludar, "Rosa");
funcionOrdenSuperior(despedir, "Rosa");
console.log("Fin sincronico");

//callback asincronicos
console.log("Inicio async");
setTimeout(() => {
  //callback
  despedir("Rosa");
}, 3000);
console.log("Fin async");

//manejo de error en 1 parametro del callback objeto error
const fs=require("node:fs");
fs.readFile("/file.json",(error,data)=>{
    if(error)
    {
        //manejo error
       console.log(error.message);
        return;
    }
    //no errors
    console.log(data);

});