import got from "got";

const postData = async () => {
  //agrego bloque try catch para manejar error
  try {
    const res = await got
      .post("https://jsonplaceholder.typicode.com/users", {
        json: {
          title: "foo",
        },
      })
      .json();
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
};


postData();
