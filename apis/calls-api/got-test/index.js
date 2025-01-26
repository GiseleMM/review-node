import got from "got";

const getData = async () => {
  //agrego bloque try catch para manejar error
  try {
    const res = await got
      .get("https://jsonplaceholder.typicode.com/users/1/todos")
      .json();
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
};

//realizamos una solicitud GET a la api
getData();

