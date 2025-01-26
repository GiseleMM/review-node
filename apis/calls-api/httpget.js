const https = require('https');

//http.get(url,[opcion],callback):http.ClientRequest
let request = https.get('https://jsonplaceholder.typicode.com/users?_limit=2', (res) => { 
    //en caso de error
    if(res.statusCode!==200)
    {
        console.error("Server respusta NO OK. Code:"+res.statusCode);
        res.resume();//al realizar la solicitud node consumira todos los datos q se envien con la solicitud. Pero con resume( le indico a node q ignore los datos de la secuencia)
        return;
    }
    //para leer los datos
    //las respuestas de node transmiten sus datos en fragmentos .La estrategia es escuhar cuando proviene los datos de la respuesta y luego analizar el json para usarlo
    let data="";
    //creo un detector de eventos, Cuando el objeto respuesta emita un data evento tomara los datos ylos agregara a la data
    res.on("data",(chunk)=>{
        data+=chunk;
    });
    //cuando se reciben todos los datos del servidor node emite el evento clse
    res.on("close",()=>{
        console.log("Data:");
        console.log(JSON.parse(data));
    })
    //si no se puede realizar una solicitud para evitar q el script genere un error, y el programa se bloquera
    res.on("error",(e)=>{
        console.log("Error:",e.message);
    })
});