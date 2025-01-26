const fs=require("fs");

//al llamar al metod writable.end( ) indicas q no se escribira mas datos en writable, si se proporciona una funcion de llamada se adjunta como un detector de ebentos end
const writableStream=fs.createWriteStream("./file2.txt");// si no existe lo crea

    writableStream.write("🐣​🐤​🐥​");
    writableStream.write("🐳​🐋​🐟​​");
    writableStream.write("🐢​🦎​🐸​");
    writableStream.end("Fin");

