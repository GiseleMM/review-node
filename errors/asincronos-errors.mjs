function dividirPorDos(numero)
{
    return new Promise((resolve,reject)=>{
        if(typeof numero!=="number") 
        {
            
            reject(new TypeError("argumento debe ser numero"));
            return;
        }
        resolve(numero/2);
    });
   

}
// dividirPorDos("2")
 dividirPorDos(2)
.then(resul=>console.log(resul))
.catch(e=>console.log(e.message));
// si aparece throw dentro de un controlador de promesa, then o catch devolvera una promesa rechazada



async function dividirPorDosAsync(params) {
    if(typeof params!=="number") throw new TypeError("Argumento no valido");
    
    return params/2;
    
}
// la funcion asincrona deveulve una promesa q se resuleve a menos que se produzca un rechazo
async function test()
{
    try {
        let r=await dividirPorDosAsync("2");
        console.log(r);
        
    } catch (error) {
        console.log(error.message);
    }
}
test();


async function testPropagacion()
{
    try {
        let r=await dividirPorDosAsync("2");
        console.log(r);
        
    } catch (error) {
        console.log(error.message);
        if(error instanceof TypeError) throw new Error("Genero otro error");
        
    }
}
testPropagacion();