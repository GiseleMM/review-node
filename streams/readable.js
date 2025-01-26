const Stream = require('stream');

// Creamos un flujo legible y sobrecargamos el método _read()
const readableStream = new Stream.Readable({
    //Implementa el método _read(): Este método es necesario para definir cómo se leerán los datos desde el flujo.
  read(size) {
    // Empujamos los datos que quieres emitir
    this.push("ping");
    this.push("pong");
    this.push(null);  // Indica que no hay más datos
  }
});

// Consumimos el flujo legible
readableStream.on('data', (chunk) => {
  console.log(chunk.toString());  // Muestra 'ping' y 'pong'
});

readableStream.on('end', () => {
  console.log("Fin de la transmisión.");
});


