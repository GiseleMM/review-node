const { error } = require("console");
const fs = require("fs"); // por q no estamos trabajando con npm

// fs.readFile("/jdsdj", callback);
// function callback(err, result) {
//   // en caso de error el primer atributo contendra el error y el segundo no estará definido y viceversa
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(result);
// }

//funcion anonima
fs.readFile("/hshaks",(err,result)=>{
    if(err)
    {
        console.error(err);
        return;
    }
    console.log(result);
});


