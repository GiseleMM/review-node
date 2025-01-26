const axios = require("axios"); // node

const postJsonPlaceholder = "https://jsonplaceholder.typicode.com/users";
axios
  .post(
    postJsonPlaceholder,
    {
      title: "foo",
      body: "bar",
      userId: 1,
    },
    {
      headers: {
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
