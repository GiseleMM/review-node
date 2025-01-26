const axios = require('axios'); // node

let getJsonPlaceholder="https://jsonplaceholder.typicode.com/users"
axios.get(getJsonPlaceholder)
.then(function(response){// sin response.json del fetch
    //success
    console.log(response);
})
.catch(function(error){
    //error
    console.log(error);
})
.finally(function(){
    console.log("siempre se ejecuta🍄");
});