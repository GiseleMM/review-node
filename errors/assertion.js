const assert= require("assert");// solicitamos el modulo 
const AssertionError= require("assert").AssertionError;// 

//DEFINIMOS LAS PRUEBAS 
function assertStrictEquality(a,b,message=null)
{
    try {
        //output test
        console.log("---Asserting:"+a+ "=== " +b+" ---");
        assert.strictEqual(a,b,message);
        //output confirmation of suceessfull assertion
        console.log("---Confirmed:"+a+ "=== " +b+" ---");


    } catch (error) {
        if(error instanceof AssertionError)
        {
            console.log(error);
        }else{
            console.log(error);

        }
    }
}
function assertStrictInequality(a,b,message=null)
{
    try {

          //output test
          console.log("---Asserting:"+a+ " !== " +b+" ---");
          assert.notStrictEqual(a,b,message);
          //output confirmation of suceessfull assertion
          console.log("---Confirmed:"+a+ " !== " +b+" ---");
        
    } catch (error) {
        if(error instanceof AssertionError)
            {
                console.log(error);
            }else{
                console.log(error);
    
            }
        
    }

}
function executeTests()
{
    console.log("+++++++++");
    assertStrictEquality(0,1);
    console.log("+++++++++");
    assertStrictEquality(0,1,"O y 1 no son iguales");
    console.log("+++++++++");

    assertStrictInequality(4,4);
    console.log("+++++++++");
    assertStrictInequality(4,4,"4 y 4 son iguales");
    console.log("+++++++++");
    assertStrictInequality(4,5,"4 y 5 NO son iguales");// no se ejecuta el mensaje por q no son iguales da true 

}
executeTests();