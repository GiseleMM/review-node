// en un modo de fujo para leer datos de un flujo , es posible ecuchar un evento de datos y adjuntad una devolcuin de llamadas
const fs=require("fs");
let data="";

const readerStream=fs.createReadStream("./readable2.mjs");//proporciona un flujo legible q incialmente esta en un estado estático, tan pronto escucha el evento dato y adjunta una devolucion de llamadacomienza a fluir
readerStream.setEncoding("utf-8");

console.log("INICIO");
//handle stream events ->data , end ,error
readerStream.on("data",function(chunk){
    data+=chunk;
});

readerStream.on("end",function(){//cuando no hay datos q eller el flujo emite el evento end
    console.log("DATA➡️:",data);
});
readerStream.on("error",function(e){//si hay un error el flujo emitira y notoificara el error
    console.log("Error➡️:",e.message);
});
console.log("Fin ");
