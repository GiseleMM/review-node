//error de rango
const l=console.log;
try {
 const array=[90,88];
array.length=90**99;   
} catch (error) {
    l(error.message);
}
//error de referencia
try {
 
    const cat="Garfield";// se escribe en un registro de entorno (clave/valor)
    l(cat);// variable existe
    l(dog);   //no existe
} catch (error) {
    l(error.message);
}
//error de sintaxis
try {
  let gato h="gato";  
} catch (error) {
    l(error.message);
}

//error de tipo 
try {
    
    const numero=123;
    numero.toUpperCase();// toUpperCase espera un tipo cadena 
} catch (error) {
    l(error.message);   
}

//Error URIE
try {
    decodeURI("%");//funcion q obtine la version no codificada de un URI ,al no ser una URI correcta lanza URIError
} catch (error) {
    l(error.message);
    
}
//Error interno
try {
    function foo()
    {
        foo();
    }
    foo();
} catch (error) {
    l(error.message);
    
}