const {argv}=require("node:process");

argv.forEach((val,index)=>{
    console.log(`index:${index}: valor:${val}`);
});
//node process-argv.js one two=hola four
/*
index:0: valor:C:\Program Files\nodejs\node.exe
index:1: valor:D:\utn\workpace node\command-line-a
pp\args\process-argv.js
index:2: valor:one
index:3: valor:two=hola
index:4: valor:four
 
 */