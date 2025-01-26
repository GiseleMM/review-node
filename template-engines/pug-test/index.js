const express=require("express");
const path=require("path");

//creo servidor
const app=express();
const PUERTO=8888;

app.set("views",path.join(__dirname,"views"));
app.set("view engine","pug");

app.get("/",(req,res)=>{
res.render("index")
})
app.listen(PUERTO,()=>console.log("🔥Server runs in http://localhost:"+PUERTO));
