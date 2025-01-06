const fs= require("fs/promises");

console.log("Inicio");
// fs.readFile("/hasajh").
// then(result=>console.log(result)).
// catch(erro=>console.log(erro));
//ASYNC/AWAIT
try {
    const result=await fs.readFile("/hasajh");
    console.log(result);
    
} catch (error) {
    console.log(error);
}

console.log("Fin");


