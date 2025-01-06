class MyPersonalizadoError extends Error{
    constructor(message,cause)
    {
        super(message);
        //el nombre se establece con el contructor de la clase
        this.name=this.constructor.name;
        this.cause=cause;
    }
}

function test(numero)
{
    if(!numero) throw new MyPersonalizadoError("mensaje=numero no pasado","causa=argumento undefined");

    if(numero && numero<0)throw new MyPersonalizadoError("negativo no valido","valor de numero invalido");
    
    console.log("sin error",numero);
}
try {
    // test();
    // test(-1);
    test(1);
    
} catch (error) {

    if(error instanceof MyPersonalizadoError)
    {
        console.log(error.message);
        console.log(error.cause);
    }
}