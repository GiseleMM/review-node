const prompts = require("prompts");

//funcion anonima autoincocada para trabajar con astnc await desde commandjs
// (async () => {
//   const response = await prompts({
//     type: "number",
//     name: "edad",
//     message: "Cuantos años tienes?",
//     validate: (edad) => (edad < 18 ? "No se acepta menores de edad" : true),
//   });
//   console.log(response);
// })(); //{edad:22} si se responde con una respuesta q no pase la validacion el cursor sigue en la pregunta

//Cadena de indicacions
const answers = [
  {
    type: "text",
    name: "nombre",
    message: "Cual es tu nombre?",
  },
  {
    type: "text",
    name: "Apellido",
    message: "Cual es tu apellido?",
  },
  {
    type: "number",
    name: "edad",
    message: "Cual es tu edad?",
  },
];
// (async () => {
//   const response = await prompts(answers);
//   console.log(response);
  
// })();

//DINAMICOS colocando null en la propiedades de type y fucniones
const answers2=[
  {type:"text",
    name:"job",
    message:" trabajas actualmente?",
  },
  {type:prev=>prev=="si"?"text":null,
    name:"lugar",
    message:" donde trabajas ?",
  },
];

(async()=>{
  const responde=await prompts(answers2);
  console.log(responde);
})();