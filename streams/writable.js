const fs=require("fs");

//para escribir datos en una secuencia q permita la escritura es necesario llamar a write()
const readableStream=fs.createReadStream("./file1.txt");
const writableStream=fs.createWriteStream("./file2.txt");// si no existe lo crea

readableStream.setEncoding("utf-8");
readableStream.on("data",function(chunk){
    console.log(chunk);
    writableStream.write(chunk);
});
