//Cargamos el módulo e imprtamos la calse EventEmitter
const EventEmitter = require("node:events");

//creacion una instancia de objeto emisor de eventos
const miEvent = new EventEmitter();
// este objeto expone muchos métodos entre ellos on y emit

//EMIT se utiliza para activar un evento, necesitamos pasarle el nombre del evento como una cadena, y podemos
//pasar cualquier cantidad de argumentos después del nombre del evento
// la funcion devuelve true si hay oyentes para el evento y false si no hay
console.log(miEvent.emit("miEvent"));

//ON() agrega un detector para un evento con un nombre de evento en particular y activa la devolucion de llamada cuando se activa el evento
//ON se utiliza agregar una funcion de devolucion de llamada que se ejecutara cunao se active el evento
// se utilza para agregar receptores , cuando se registra ese oyente se invoca cada vez q se emite el evnto nombrado
let m = 0;
miEvent.on("start", (argumento) => {
  console.log(++m);
  console.log("evento start", argumento);
});
miEvent.on("second", () => console.log("second"));
miEvent.on("last", () => console.log("last"));

console.log(miEvent.emit("start", 2025));

miEvent.emit("start", 2025);
miEvent.emit("start", 2025);


//ONCE registra un oyecnte q se llama solo una vez para un evento en particular
//una vez emitido el evento se anula el registro del detector
miEvent.once("once", () => {
  console.log("once", (m += 1));
});
miEvent.emit("once");
miEvent.emit("once");//es ignorado

//Otra forma de crear eventos es crear un objeto q extienda de el objeto emisor de eventos
// esto significa q la calse hereda los métodos y propiedades de la clase EventEmitter
class ClaseEvento extends EventEmitter {
  constructor() {
    super();
  }
  pasoAlgo(param) {
    //emitimos evento pasoAlgo cuando se llama a la funcion pasoALgo de la clase
    this.emit("pasoAlgo", param);
  }


//MANEJO DE EVENTOS DE ERROR
//si un emisor de eventos no puede realizar su accion, debe emitir un evento
//par indicar que la aciion fallo.La forma estandar de node en que un emisor de eventos
//indica una falla es emitiendo un Error Event 
// un evento de error debe tener su nombre establecido en error, y estar acompañado de un objeto Error

  pasoAlgoErroneo(num)
  {

    if(num<0)
    {
      this.emit("error",new Error("numero negativo invalido"));
      return;
    }
    this.emit("pasoAlgoError");
  }
}

// ahora q ya tenemos todo para enviar evento , creamos detectores de eventos con ON()
const listener=new ClaseEvento();// cremoas un objeto emisor de evento
listener.on("pasoAlgo",(arg)=>{
    console.log("👀​",arg);
});
listener.pasoAlgo("👍​");// llamo a funsion q internamente emite el evento

//se considera una buena práctica escuchar simepre los eventos "error" si estas escuchando un emisor de eventos.
//Si no configuras un detector de errores , toda la aplicacion se bloqueara al emitir uno
listener.on("error",(error)=>{
console.log(error.message);
});
listener.on("pasoAlgoError",()=>console.log("pasoAlgoError"));
//invoco funcion q emite evento si es menor a cero "error" y si es mayor o igual "pasoAlgoError"
listener.pasoAlgoErroneo(1);
listener.pasoAlgoErroneo(-1);

//GESTION DE OYENTES DE EVENTOS
/*Los emisores de eventos tienen mecanismos para supervisar y controlar los oyentes
suscritos a un evento.
Para saber cuantos oyentes estan procesando un evento tenemos el metodo
listenerCount("nombre de evento") */
const listener2=new ClaseEvento();
listener2.on("pasoAlgo",(arg)=>{
  console.log("listener2 🌡️​",arg);
});
listener2.on("pasoAlgo",(arg)=>{
  console.log("listener2 🌡️​🌡️​",arg);
});
//cada objeto tiene su propio instacia de evento
console.log("listener1",listener.listenerCount("pasoAlgo"));//1
console.log("listener2",listener2.listenerCount("pasoAlgo"));//2 tiene dos ouentes esta instancia del obejto event emitter

//Si queremos eliminar los oyentes podemos usar la funcion off() para eliminar los detectores de eventos de un emisor de evento
//el método off acepta 2 argumento el nombre del evento y la funcion q lo esta detectando(por lo que para eliminar
// la devolucion de llamda debe guardarse en alguna  varaible o constante)

const devolucionLLamada=(arg)=>{
  console.log("listener2 🌡️​🌡️🌡️​",arg);
};
listener2.on("pasoAlgo",devolucionLLamada);

listener2.pasoAlgo('🔥​');//se emite las 3 devoluciones de llamadas 
listener2.off("pasoAlgo",devolucionLLamada);// quito una devolucion de llamada no las otras
listener2.pasoAlgo('🔥​');//se emite las 2 devoluciones de llamadas 

//si queremos emilinar todos los oyentes de un evento podemos usar la funcion 
//removeAllListeners("nombre del evento")
listener2.removeAllListeners("pasoAlgo");
console.log(listener2.listenerCount("pasoAlgo"));//0 sin oyentes
listener2.pasoAlgo('🔥​');// no deberia pasar nada