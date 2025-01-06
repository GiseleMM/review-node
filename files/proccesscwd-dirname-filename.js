const path = require("node:path");
const {cwd} =require("node:process");


console.log("cwd:",cwd());
//devuelve el directorio desde el que se invocó el node comando

console.log("__dirname ",__dirname);
//devuelve el nombre del directorio que continen el archivo de código fuente de JS

console.log("path.dirname(__filename)",path.dirname(__filename));// nombre  del directorio del modulo actual

console.log("__filename",__filename);
/*
  workpace
    -files
        proccess-cwd.js

        si ejecuto desde cd files; node proccess-cwd.js 
            cwd->c:/course/workpace/files
            __dirname->c:/course/workpace/files

        si ejecuto desde workpace cd workpace;node files/proccess.cwd.js
                cwd->c:/course/workpace
            __dirname->c:/course/workpace/files


 */