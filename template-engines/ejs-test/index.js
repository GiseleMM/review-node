const express=require("express");
const app=express();
const path=require("path");

const PUERTO=8888;
//establece EJS como motor de visualizacion para la aplicacion de express
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

//configuramos las rutas  con los template conrrespondiente
app.get("/",function(req,res){
    res.render("index");// digo q resderize vista index que esta en la carpeta de los archivos views como configuramos
})

//puedo pasar datos y usarmos como varibles 
app.get("/datos",function(req,res){
    let mascotas=["🐼​","🐭​","🐻","🐣","🐤​","🐧​","🐼​","🦇​","🐟​","🐕","🐶","​🐯","​🦁","​🦍​"];
    res.render("index",{nombre:"Rosa",emoji:"🌹",mascotas});// digo q resderize vista index que esta en la carpeta de los archivos views como configuramos
})

app.listen(PUERTO,()=>console.log("Iniciando servidor en http://localhost:"+PUERTO));