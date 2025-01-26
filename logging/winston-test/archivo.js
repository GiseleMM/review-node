const logger=require(__dirname+"/logers/index.js");
const winston=require("winston");

// logger.info("Iniciando aplicacion");
logger.error("error test2 ");
logger.warn("Warning test2");

//Puedes agregar o eliminar transportes una loggervez que se te hayan proporcionado desde winston.createLogger:
const files = new winston.transports.File({ filename: 'combined.log' });
const console = new winston.transports.Console();
logger.remove(files);
// remueva todos los transportes logger.clear();
// agrega  el transportes logger.add(console);

