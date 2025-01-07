const fs= require("fs");
process.stdout.write("Hola mundo"); 
process.stdout.write("Hola mundo");
//Hola mundoHolaMundo   ->NO  agrega salto de linea
//al paracer console.log usa internamente .stdout.write y agrega un salto de lina
//console.log = function (d) {
//    process.stdout.write(d + '\n');
//};

//Una diferencia con console.log y stdout  es la  ultima solo toma arguemnto de cadena y Buffer(q retorna las peticiones http),y
//console.log cualquier tipo de datos de JS

//backpressure o contrapresion
// suele ocurrir cuando el software no puede procesar los datos de entrada a la 
//velocidad con la que llega. Si la velocidad de procesamiento de un nodo es lenta y la
//velocidad de entrada de datos es mayor q la salida se produce  backpressure.
//La backpressure es una técnica q se utiliza para evitar q un software o aplicacion use mas 
//recurso de los que hay disponible en una infraestructura
//Process.stdout permite detectar la contrapresion y escuchar el evento drain de forma  manual con process.
//stdout.write() o automática con stream.pipe(process.stdou)
// Si quisieras escribir un archivo enorme en la salida estandar
const content=fs.readFileSync("./test.txt",{encoding:"utf-8"});
console.log(content);
console.log("---------------------------------");

//primero se cargaria todo el contenido del archivo en memoria y luego comenzaria a escribir en stdou con 
//console.log. 
//Pero q pasa su si el archivo es mas grande q la memoria disponible. 
fs.createReadStream("./test.txt").pipe(process.stdout);
//ahora  el programa solo necesita leer en la memoria fragmentos relativamente pequeños , uno a la vez, a medida 
// q stdout los solicita:luego cada fragmento puede ser recolectado como basura. lo q hace q su programa use menos 
//menoria





