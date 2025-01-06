
//por la linea de comando shell ejecutamos '$env:USER_ID="333333"; $env:USER_KEY="clave"; node process-env.js'
const process=require("node:process");
console.log(process.env.USER_ID);
console.log(process.env.USER_KEY);


//ESTE COMPORTAMIENTO ESTA DEPRECADO
process.env.DIA=5;//establezco ahi
console.log(process.env.DIA);
delete process.env.DIA;
console.log(process.env.DIA);//undefined 

