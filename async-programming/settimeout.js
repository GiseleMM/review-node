console.log("inicio");
setTimeout(function(){console.log("uno")},2000);// paso funcion anonima
setTimeout(function(){console.log("dos")},1000);
setTimeout(function(){console.log("tres")},50);
console.log("fin");

function callback()
{
    console.log("⌛")
}
setTimeout(callback,3000);//paso nombre del callback
let id=setTimeout(callback,3000);//obtengo id de settimeout
clearTimeout(id);// cancela la ejecucion con del settimeout 

console.log("antes");
setTimeout(() => {
    console.log("sin tiempo de espera👁️");
    
},0);
console.log("despues");
//por mas que se ponga cero tiempo de espera , la funcion de devolucion de llamada se ejecutar lo antes posible pero no antes de la
//ejecucion del codigo actual que no pasa por la Api, ni el EventLoop si no que van directamente all stack
//Node.js también proporciona setImmediate(), que es equivalente a usar setTimeout(() => {}, 0), que se utiliza principalmente para trabajar con el bucle de eventos de Node.js.
setImmediate(()=>console.log("SET IMMEDIATE"));// tanto settimeout con cero como setImmediate su callback se ejecutará en la siguiente iteracion del bucle de evntos.


