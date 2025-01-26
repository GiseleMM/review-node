

//peticion get
// fetch("https://jsonplaceholder.typicode.com/users?_limit=2")
// .then(response=>response.json())//para extraer el contenido en el cuerpo del json desde la respuesta usamos el metodos json()
// .then(data=>console.log(data));

// suministrando opciones de peticion en un segundo parámetro, q permite controlar dif ajustes
// const data = {
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

// const opcion = {
//   method: "POST", // get es la opcion por defecto.PUT,DELETE,POST,etc
//   mode: "cors", //cors es la opcion por defecto.no-cors,same-origin
//   cache: "no-cache", // default es la opcion por defecto.no-cache,reload,force-cache
//   credential: "same-origin", // same origin es la opcion por defecto.include,omit
//   headers: {
//     "Content-type": "application/json",
//     // 'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   body: JSON.stringify(data),// enviando datos json
// };


// fetch("https://jsonplaceholder.typicode.com/users", opcion)
//   .then((response) => response.json())
//   .then((data) => console.log(data));




  //comporbando q la peticion es satisfatoria
  //cuando una promesa de fectch es rechazada sera un typeError . Una forma de comprobar q la peticion es satisfactoria es comprobar la 
  //propeidad Response.ok que tenga el valor  true
  
  fetch("flores.jpg")
  .then((response)=>{
    if(response.ok)
    {
        response.blob().then(miBlob=>{
            const objetUrl=URL.createObjectURL(miBlob);
            console.log(objetUrl);
        });

    }else{
        console.log("respuesta de red ok, pero http no Ok");
    }
  })
  .catch(e=>{console.log("problema en la peticion")});


  //enviar un archivo
//   fetch("https://example.com/profile/avatar", {
//     method: "PUT",
//     body: formData,
//   })
//     .then((response) => response.json())
//     .catch((error) => console.error("Error:", error))
//     .then((response) => console.log("Success:", response));


