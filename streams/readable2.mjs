
import * as fs from "fs";
import { Readable } from 'stream';
import assert from 'assert'; // Importa el módulo assert

async function logChuck(readable) {
    for await (const chunk of readable)
    {
        console.log(chunk);
    }
    
};



const readable=fs.createReadStream("./readable.js",{encoding:'utf8'});
logChuck(readable);


//tambien se puede recupera el contenido de un flujo en un cadena


// Función asincrónica para leer los chunks del flujo
async function logChuck2(readable) {
    let result = "";
    for await (const chunk of readable) {
        console.log(chunk);
        result += chunk;
    }
    return result; // Retorna el resultado concatenado
}

// Crea un flujo legible desde una cadena
const readable2 = Readable.from("Hola mundo🐞", { encoding: "utf8" });

// Compara el resultado con el valor esperado
assert.equal(await logChuck2(readable2), "Hola mundo🐞");

console.log("Prueba completada con éxito.");