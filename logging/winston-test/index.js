const winston = require('winston');

//creamos un registro personalizado con createLogger

const logger=winston.createLogger({
    level:"info",
    format:winston.format.json(),
    transports:[
      new winston.transports.Console()],
});

//luego puedes comenzar a registar a traves de metodos en el logger objeto



/*winston admite 6 niveles de registro de forma predermindada
{
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
}
*/
logger.error('error');
logger.warn('warn');
logger.info('info');
logger.verbose('verbose');
logger.debug('debug');
logger.silly('silly');
 //tambien puedes  pasar una cadena q represente el nivel de registro 
 logger.info("info message");
logger.error("error message");
logger.warn("warning message");
// la level propiedad de logger determinara q mensaje de registro se emitiran , solo se escribiran las entradas de resgitro con una gravedad minima de info que es el level con que la creamos
// para q los demas niveles produzcan resultado , deberan cambiar el valor de level al minimo deseado . En los estornos de producuion de podra ejecutar con un nivels info y en desarrollo puden configuarar en un nivel menos severo como debug a silly. 
// lo que comunmente se hace es adaptarla a la varaible de entorno

// const logger=winston.createLogger({
//     leve:process.env.LoG_LEVEL || "info",
//     format:winston.format.json(),
//     transports:[new winston.transports.Console()],

// })
