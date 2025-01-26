const { Worker } = require('worker_threads');

console.log(`Proceso principal: ${process.pid}`);

// Crea un worker
const worker = new Worker('./worker.js');

//escucha mensaje del worker
worker.on("message", (msg) => {
  console.log("mensaje del worker:", msg);
});

//maneja error del worker
worker.on("error", (e) => {
  console.log("Error en el worker:", e);
});

//detecta cunado el worker termina
worker.on("exit", (code) => {
  console.log("worker termino con codigo:", code);
});

//envia mensaje a worker
worker.postMessage("Hola desde proceso principal 🍓");