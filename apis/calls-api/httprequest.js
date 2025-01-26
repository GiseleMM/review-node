const https = require("https");

//https.request(URL_String, Options_Object, Callback_Function) {
//    Action }
const opcion = {
  method: "GET", // le indica que se trata de una solicitud get
};
// const request = https.request(
//   "https://jsonplaceholder.typicode.com/users?_limit=2",
//   opcion,
//   (res) => {
//     //error
//     if (res.statusCode !== 200) {
//       console.error("Error:", res.statusCode);
//       res.resume();
//       return;
//     }
//     // obtener la data
//     let data = "";
//     res.on("data", (chunk) => {
//         console.log(chunk);//buffer objeto
//       data += chunk;
//     });

//     res.on("close",()=>{
//         console.log("DATA COMPLETA:");
//         console.log(JSON.parse(data));
//     })
//   }
// );
// //enste medito se debe llamar siempre q se usa el metodo request, por que completa la solicitud lo que permite enviarla . Sino node pensara que todavia tienes datos q agregar a la solicitud
// request.end();

// request.on("error",(e)=>{
//     console.log("Error",e.message);
// });

//personalizar solicitud
//https.request(Options_Object, Callback_Function) {Action}
// const opcion2={
//     host:"jsonplaceholder.typicode.com",// nombre del dominio del servidor a q se solicita
//     path:"/users?_limit=2",//ruta todo lo q viene despues del domino
//     method:"GET",
//     headers:{
//         Accept:"application/json"
//     }
//     //tambien podrias proporcionar encabezados de la solicitud, como Accept encabezado pra determinar el tipo de respuesta correcto,
//     //es decir especifica el tipo de datos q puede manehar el usuario. Puedes agregar el Accept encabezado a la solicitud para indicar
//     //q deseas JSON.
//     //Node admite  muchas mas opciones
// }
// const request2 = https.request(
//     "https://jsonplaceholder.typicode.com/users?_limit=2",
//     opcion2,
//     (res) => {
//       //error
//       if (res.statusCode !== 200) {
//         console.error("Error:", res.statusCode);
//         res.resume();
//         return;
//       }
//       // obtener la data
//       let data = "";
//       res.on("data", (chunk) => {
//           console.log(chunk);//buffer objeto
//         data += chunk;
//       });

//       res.on("close",()=>{
//           console.log("DATA COMPLETA:");
//           console.log(JSON.parse(data));
//       })
//     }
//   );
//   //enste medito se debe llamar siempre q se usa el metodo request, por que completa la solicitud lo que permite enviarla . Sino node pensara que todavia tienes datos q agregar a la solicitud
//   request2.end();

//   request2.on("error",(e)=>{
//       console.log("Error",e.message);
//   });

//realizar una post solicitud

// const opcion3 = {
//   host: "jsonplaceholder.typicode.com",
//   path: "/users",// endoint de la solicitud post de la api
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json; charset=UTF-8", // este encabezado le dice al servidor q tipo de datos estas cargando
//   },
// };

// const request3 = https.request(opcion3, (res) => {
//   if (res.statusCode !== 201) {
//     // el codigo 201 indica q el servidor creo un recurso
//     console.log("Error:", res.statusCode);
//     res.resume();
//     return;
//   }
//   let data = "";
//   res.on("data", (chunk) => {
//     data += chunk;
//   });
//   res.on("close", () => {
//     console.log("Complete:", JSON.parse(data));
//   });
// });

// //como la solicitud post muchas veces tiene como objetivo crear un nuevo objeto se debe enviar en la solicitd post
// //  //no incluye el id por q los servidores suelen generalos
// const requestData = {
//   name: "New User",
//   username: "digitalocean",
//   email: "user@digitalocean.com",
//   address: {
//     street: "North Pole",
//     city: "Murmansk",
//     zipcode: "12345-6789",
//   },
//   phone: "555-1212",
//   website: "digitalocean.com",
//   company: {
//     name: "DigitalOcean",
//     catchPhrase: "Welcome to the developer cloud",
//     bs: "cloud scale security",
//   },
// };

// // write acepta una cadena o un objeto buffer para enviar junto con la solicitud
// request3.write(JSON.stringify(requestData));
// //finaliza la solicitud y verifica si hay errores
// request3.end(); // se debe escribir los datos antes de usar END por q esta le indica a node q no hay datos q agregar y envia la solicitud
// request3.on("error", (e) => {
//   console.log("Error:", e.message);
// });

//realizar solicitudes PUT ( se utilza para actualizar datos en un servidor, son idempotentes es decir puede ejecutar la solicitud n veces y obtendra el mismo resultado)
// const opcion4={
//     host: 'jsonplaceholder.typicode.com',
//     path: '/users/1',
//     method: 'PUT',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json; charset=UTF-8'
//     }
// }
// const request4=https.request(opcion4,res=>{
//     if(res.statusCode!==200)
//     {
//         console.log("Error status code:",res.statusCode);
//         res.resume();
//         return;
//     }
//     let data="";

//     res.on('data', (chunk) => {
//         data += chunk;
//       });
    
//       res.on('close', () => {
//         console.log('Updated data');
//         console.log(JSON.parse(data));
//       });

// });
// const requestData={
//     username:"Bocaa"
// };
// request4.write(JSON.stringify(requestData));
// request4.end();

// request4.on('error', (err) => {
//   console.error(`Error: ${err.message}`);
// });

//realizar solicitudes delete:
const opcion5={
    host: 'jsonplaceholder.typicode.com',
    path: '/users/1',
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
    }  
}
const request5=https.request(opcion5,res=>{
    if (res.statusCode !== 200) {
        console.error(`ERROR STATUS Code: ${res.statusCode}`);
        res.resume();
        return;
      }
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });
    
      res.on('close', () => {
        console.log('Deleted user');
        console.log(JSON.parse(data));
      });
});
request5.end();

request5.on('error', (err) => {
  console.error(`error : ${err.message}`);
});