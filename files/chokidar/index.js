import chokidar from "chokidar";

// chokidar.watch(path de tutas a archivo q se deben vigilar de forma recursiva, [options])


/*OPTIONS
{
persistent:true, //persistent(predeterminado: true). Indica si el proceso debe continuar ejecutándose mientras se observan los archivos
ignored:(path,stats)=>stats?.isFile() && !path.endsWith(".js"), //solo mira archivos js
ignore:(path)=>path.endsWith(".txt"), //ingono  archivo .txt
depth:99// si se configura limita la cantidad de niveles de subdirectorios q se recorreran
....
}
*/


//OBSERVO todos los eventos y reacciono de la misma forma
// chokidar.watch("./test").on("all",(event,path)=>{
//     console.log(event,path);
// });


//OBSERVO EVENTOS ESPECIFICOS Y REACCIONO de dif forma
const watcher=chokidar.watch("./test");
//para cuando se reciben los eventos
const log =console.log.bind(console);
watcher
.on("change",(path,stats)=>log(`se cambio ${stats} del ${path}`))
.on("unlink",path=>log("se elimino archivo:",path));

//eventos add ,change,unlink,addDir,unlinkDir,error,ready,raw
//add ,addDir,change pueden recibir un segundo argumento q muestra los resultados  

//mirar  nuevos archivos como array o individualmente
// watcher.add(["nuevo-archivo","nuevo-archivo2"]);
// watcher.add("nuevo-archivo");

//obtener la lista de archivos observados
let seenPaths=watcher.getWatched();
console.log(seenPaths);

//dejar de mirara algunos archivos
await watcher.unwatch("./test/uno.txt");

//dejar de mirar. método asincróno
await watcher.close().then(()=>log("close"));


//MÉTODOS
//chokidar.watch produce una isntancia de FSWatcher que tiene varios metodos:
    //.add agrega archivos y directorios para realizar seguimiento
    //.on(evento,callback) escucha ebemypd
    //.unwatch(path)deja de ver archivo p ditectorio
    //.close()async elimina observadores de los archivos vigilados. deveulve promise.
    //getWatched( devuelve un objeto q representa todas las rutas del sistema de archivo q supervida la istancia de FSwatcher)