const axios = require("axios"); // node
//Las solicitudes se pueden realizar pasando la configuración correspondiente a axios.
const postJsonPlaceholder = "https://jsonplaceholder.typicode.com/users";
axios({
    method:"POST",
    url:postJsonPlaceholder,
    data:{

      title: "foo",
      body: "bar",
      userId: 1,
    },
    headers:{
        'Content-type': 'application/json; charset=UTF-8',//'multipart/form-data' =>para formulario multiparte, 'application/x-www-form-urlencoded => para formulario application/x-www-form-urlencoded'
      },
    }
  )
  .then(function (response) {
    // sin response.json del fetch
    //success
    console.log(response.data);// en data esta la informacion
  })
  .catch(function (error) {
    //error
    console.log(error);
  })
  .finally(function () {
    console.log("siempre se ejecuta🍄");
  });

  //axios(url[, configuración]) get por defecto sin configuaracion