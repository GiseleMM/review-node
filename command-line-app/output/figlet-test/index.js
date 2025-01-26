const figlet = require("figlet");

figlet(" Hola mundo 👻",function(error,data){
    if(error)
    {
        console.log("Error:",error.message);
        return;

    }
    console.log(data);
});

//figlet.text en un metod q permite creqar arte ASCII a partir nde texto
// figlet.text(entrada,opciones,devolucion de llamada) retorna el valor un una promesa resuelta
figlet.text("figlet.text()",{
    font: "Ghost",
    horizontalLayout:"default",
    verticalLayout:"default",
    width:50,
    whitespaceBreak:true,
},function(error,data){
    if(error)
    {
        console.log(error.message);
        return;
    }
    console.log(data);
});
// podemos usarlo como async/await (CommondJS con f anonima autoinvocada)
(async()=>{
    try {
        let data=await figlet.text(":)",{
            font: "Ghost",
            horizontalLayout: "default",
            verticalLayout: "default",
            width: 80,
            whitespaceBreak: true,
        });
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
})();

//podemos usar el metodo syncronico (se va ejecutar 1 por q es el primero syncronico)
let data=  figlet.textSync("Boo!", {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  });
  console.log(data);

  //lista de todas las fonts disponibles 
  figlet.fonts(function (err, fonts) {
    if (err) {
      console.log("something went wrong...");
      console.dir(err);
      return;
    }
    console.dir(fonts);
  });
  //lista de todas las fuentes disponibles de manera sync
  console.log(figlet.fontsSync());

  //parseFont permite usar fonts de otras fuentes
  /**
   * const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "myfont.flf"), "utf8");
figlet.parseFont("myfont", data);
console.log(figlet.textSync("myfont!", "myfont"));
   */