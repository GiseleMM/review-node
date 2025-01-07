## Q es node.js?

entorno de ejecucion para JavaScript basado eb el motor V8 de chrome.Permite a los desarrolladores ejecutar códgo JS fuera del navegador web( puedo usar JS para construir aplicaciones del lado del servidor, es decir puedo ejecutar codigo del lado del cliente y en el lado del servidor).
Una aplicacion Node se ejecuta en un solo proceso, no hay un nuevo hilo para cada solicitud

De esta forma JS se puede ejecutar en la 3 capas del desarrollo web:

- frontend con js en los navegadores
- backend con entornos de programacion como node.js
- en las persistencia de datos, con gestores de bases de datos NOSQL como Firebase, mongo

## usos de Node

- en el frontend
  - para ejecutar tareas y scripts
  - manejo de paquetes y dependencia
  - build enviroment , puede ser usados como un entorno de construccion.Es comun en proyectos q utilizan framework de frontend como Angular
  - servidores de desarrollo locales para probar sus aplicacion antes de desplegarla en un servicdor de produccion
  - es utilizado para pruebas y automatizacion(unitarias, de integraciony end-to-end)
  - server-side-rendering(SSR) , algunos framework permiten q el renderizado del lado del servidor . Node es util para habilitar este proceso
- en el backend
  - uso de JS del lado del sevidor
  - asincrono y no bloqueante, se basa en eventos lo q permite manejar multiples solicitudes y operaciones simultáneas
  - eficiente y rapido, lo que los hace adecuado para aplicaciones en tiempo real y de alto redimiento
  - escalable, el enfoque en la asincronia y la eficienica permite q las aplicaciones escales facilmente sin aumentar significativamente los recursos del servidor;
  - manejo de solicitudes HTTP , permite la creacion de srvidores web y manejar solicitudes y respuestas HTTP
  - multiplataforma, window/macOS/linux
  - ideal para aplicaciones en tiempo real , como chats , juegos en linea, aplicaciones de colaboracion
- en las bases de datos

  - conexion y consulatas a base de datos tanto relacionales como no relacionales
  - desarrollo de apis para acceso a datos,que actuaen como intermediarios para el acceso y manipulacon de datos
  - middleware para manipulacion de datos,en aplicaciones web node puede actuar como middleware(antes de guardar o recuperar datos de la base de datos)
  - cacheo , se puede utilizar para implementar estrategias de cache,donde los datos frecuentemente accedidos se almacenas en memorias
  - procesamiento de datos en tiempo real,como actualizaciones de datos ,notficaciones al ser asincrono y no bloqueante
  - migraciones y cambios de estructura de la base de datos, se pueden crear script pra realizar migraciones
  - integracion con base de datos externas y servicios

- en el hardware
  - internet de las cosas , perimite a los desarrolladores interactuar con dispositivos fisicos , con sensores
  - controlar robots y drones
  - automatozacion del hogar, donde se puede conectar y controlar dispositivos electronicos, dipositivos inteligentes y otros dispositivos
  - impresora 3d
  - realidad virtual y realidad aumentada

## Instalacion

- instalacion binaria, descargar un instalador precompilado especifico para el sist operativo
- instalacion a traves del GESTOR de paquetes del sistema package manager
- instalacion desde codigo fuente (descargar el codigo fuente de GITHUB, compilarlo y configurar el sistema manualmente)
- manejo de versiones con NVM NODE VERSION MANAGER , herramienta q permite instalar multiples versiones de NODE.js en el sitema

para verificar la isntalacion

`node -v `

`npm -v `

## TIpos de versiones

- LTS long term support, soporte a largo plazo,
- CURRENT con las ultimas caracteristocas pero con un tiempo de soporte mas corto, es menos estable

## REPL

READ leer: espera q el usuario ingrese una linea de codigo
EVAL evaluar: cuando el usuario da Enter , el REPL evalua la expresion
PRINT imprimir: imprime el resulatdo en la pantalla
LOOP bucle: el REPL vuelve a esperar q el usuario ingrese codigo y repite el proceso
READ EVAL PRINT LOOP es una herramienta interactiva q permite a los desarrolladores ejecutar y probar código JS , es similar a la consola de los navegadores pero se ejecuta en la line ade comando del sistema operativo
Se accede escribiendo en la terminal
`node ENTER ` y se vera un >
para salir escribes :
`.exit ENTER o Ctrol+c`

## Diferencias entre Node.js y el navegador

crear apliciones q se ejecuten en el navegador es completamente diferente a crear aplicaciones node.js a persar de que ambas usen JS
Usar el mismo lenguaje de programacion para el frontend y backend es ventajoso.
En el BROWSER lo que haces es interactuar con el DOM y API de plataformas web. En el no tenemos todas las APIS q node tiene atraves de sus modulos( como acceso a archivos)
EN node no se tienen ninguno de los objetops q proporcionan los navegadores(DOCUMENT WINDOW).Ademas node soporta los sistema de módulos CommonJS (require) y ES(import) , mientras q el mavegador esta empezando a implementar los modulos ES( es decir en el navegador solo puedes usar import )

## Ejecucuin de codigo

Para ejecutar un programa escribes el comando  
` node nombredelarchivo.js`
Tambien puedes pasar una cadena como argumento en lugar de la ruta y lo ejecutara igual q el REPL
`node -e 'console.log("boca")'`

`node -e "console.log(1+2)"`
y retornara la consola boca y 3

para reiniciar la aplicacion automaticamente cuando se modifique un archivo
` node --watch file.js  y control+c para salir`

para ejecutar una tarea con node.js,deben estar especificados en su package.json . Puede ser util para automatizar tareas repetidas como ejecutar pruebas, build proyectos o analizar codigo

- usando la bandera --run ,permite ejecutar un comando especifico en la seccion scripts de su package.json

```js
{
  "type": "module",
  "scripts": {
    "start": "node app.js",
    "dev": "node --run -- --watch",
    "test": "node --test"
  }
}
node --run test
```

## Bloqueante Vs No bloqueante

Las operacion q implique esperar q algo suceda son operaciones de E/S (lectura/escritura de archivops,solicitudes http, consultas a bases de datos). Dependiendo en modo en el que se ejecutan estas se refiere a bloqueante o no bloquenate.
BLOQUEANTE , en este modelo una operación de E/S bloqueara la ejecucion del programa hasta q se complete y no podra continuar con otras tareas
NO BLOQUEANTE , en este modelo la operaciones de E/S se ejecutan de manera asincrona, es decir en vez de esperar q se complete , el programa continúa con otras tareas y cuando se completa se ejecuta la callback.
Como node usa un solo hilo para manejar multiples solicitudes es fundamental el modelo no bloquente . El hilo de ejecucion no se queda esperando operaciones de E/S sino q utiliza para otras tareas

## Single Thread

Por defecto node.js usa un único hilo de ejecución. Este es reponsable de todas las operaciones y tareas del servidor. ESte hilo unico utiliza el enfoque no bloquenate y asincromo . Cuando una operacion de E/S se inica , en lugar de bloquear el hilo node continua ejecutando otras tareas y eventos. Y cuando la operacion de E/S se completa se activa el callback para manejar el resultado

## Event Loop

el bucle de evento, permite q el servidor maneje multiples solicitudes de manera eficiente sin bloquear el hilo.El event loop se encarga de las operaciones d eentrada/salida y las devoluciones de llamdas . Cuando una operacion de E/S inicia (ej:una solicitud HTTP), en lugar de bloquear la ejecucion el event loop delega la operacion a un componente externod el sistema operativo y continua ejecutando otras tareas en el hilo principal. Cuando la operacionde E/S se completa , el componente externo notifica que la operacion ha terminado, y el event loop agrega el callback asociado a esa operacion a la cola de eventos para que posteriormente cuando el hilo principal(stack) este vacio , el event Loop procese la COLA de evento y ejecute el callback;

## Modulos

son bloques de código reutiilizables y encapsulados que permiten organizar y separar funcionalidades mas pequeñas y manejables.Un módulo no es mas q un archivo JS. Node tiene muchos moódulos integrados q formas parte de la plataforma (HTTP,fs,PATH)
En node exiten 2 tipos de sistemas de módulos:

- CommonJS , utiliza las palabras `requiere(ruta/al/modulo)` y `module.exports={f1,f2}` para importar y exportar modulos
- ECMAScript ESM, a partir de node v 13 se agrego los modulos ES que utiliza la palabra `import {obj,funciones} from 'ruta/al/modulo.js'` y `export const f1=()=>{}` .
  Pra utilizar ESM en node se debe agregar el atributo `type:"module"` en el package.json o usar la extension .mjs para los archivos q usen ESM
  Los archivos con extension .js y .cjs por defecto seran tratados como modulos CommonJS
  LOs archivos con extension .mjs y los .js en el archivo package.json contiene `type:"module"`seran tratados como modulos ECMAScript

## Palabra Clave GLOBAL

en los navegadores el ámbito de nivel superior es el global y su objeto global se denomina window. en el navegador con var definimos variables globales dentro de window. en Node el ámbito superior no es el global y cuando declaremos con var va a ser local para ese modulo.

## Aceptar la entrada desde la linea de comandos en node.js

para hacer q un programa CLI sea interactivo node proporciona el módulo `readline ` para obtener la entrada de la terminal una linea a la vez

```js
const readline = require("node:readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("q hora es?", (res) => {
  console.log(" hora: " + res);
  r1.close();
});
```

el método question() muestra el 1 param y espera la entrada , y luego llama al callback cuando el usuario presiona enter.
el método close cierra el flujo

## NPM

administrador de paquetes para node.js, es un repositorio en linea para la publicacion de proyectos de node.js y ademas es una utilidad de linea de comando para interactuar con dicho repositorio.
Se utiliza para instalar, actualizar y gestionar paquetes y dependencias de terceros en un proyecto.
Las dependencias son fragmentos de codigo predefinidos,como bibliotecas y paquetes q la aplicacion NOde necesita para funcionar

### comandos

- para iniciar un poryecto
  `npm init  // con pregunstas`
  `npm init  -y  // sin preguntas`

- para instalar todas las dependencia si un proyecto tiene un package.json , lo hace en la carpéta node_modules
  `npm i`
  `npm install`

- para instalr un solo paquete , desde npm5 ademas agrega la dependencias al package.sjon e installa la ultima version
  `npm install namedelpaquete`

- para instalar una version especifica de paquete
  `npm install [packete]@3.4.12   //version especifica`

- para actualizar paqutes
  `npm update `

- para actualizar un paquete
  `npm update [paquete]`

- para desinstalar paquetes
  `npm uninstall [paquete]`
  `npm uninstall [paquete]@[version] // version especifica`
  `npm un [paquete] //shorcut`

- para instalar como dependencia de DESARROLLO , en el package json se agregan a devDependencies
  `npm install [paquete] --save-dev`
  `npm install [paquete] -D`

- para instalar las dependencias explicitamente en la seccion de dependencies
  `npm install [paquete --save`
  `npm install [paquete -S`

- para instalar solo las dependenciasa de produccion(si existe package.json) y omitir las dependencias de desarrollo
  `npm install --production`

## Sematic versioning

el control de versiones semantico es un estándar para el control de versions que cumunica cambios en paquete
MAYOR.MENOR.PARCHE ej: 1.2.3

- mayor se incrementa cuando hay cambios que pueden ser incompatibles con la version anterios
- menor se incrementa cuando se agrega una funcionalidad pero es compatible con la version anterior
- parche se incrementa cuando se corrige un error

## NPX

es un comando disponible que permite ejecuar un comando desde un paquete npm local o remoto
si alguno de los paquets solicitados no se encuentyra en las dependencias del proyecto local, se instala en una carpeta en la memoria cache de NPM .
Se usa para ejecutar paquetes temprrales sin tener q instalarlos previamente(ni global ni en tu proyecto)
`npx comado`

## INSTALCION GLOBAL VS INSTALACION LOCAL

node y npm permite 2 formas de instalacion de paquetes/dependencias:Localy global.

- local, cuando se instal un pauqte o dependencia como parte de un proyect, este se instalara en una carpeta en el proyecto llamada `node_modules` . ademas se agregara en el package.json en la seccion de dependecies. COMANDO : `npm install [paquete]`
- globalmente , esto isntalaria en una ruta del sitema y los paquetes estarian disponibles para cualquier programa q se ejecute en la computadora local .COMANDO: `npm install -g [paquete]`

## Carpeta node_modules

cuando se jecuta el comando npm install npm crea una carpeta node_modules en la raiz del proyecto . en esta carpeta estan todos los paquetes externos y dependencias q se utilizan en el proyecto.
NO se debe incluir la carpeta node_modules en un sist de control de verisones (como git) por que suele ser bastante pesado y ademas se puede recrear con el comando npm isntall si existe el archivo package.json para ello se suele incluir la carpeta en el archivo .gitignore

## package.json

es una archivo de configuaracion del proyecto que proporciona metadatos del proyecto(nombre,version,descripcion,author ,licencia) , contiene toda la informacion sobre el proyecto , sus dependencias scripts personalizados . Es utilizado por NPM para gestionar dependencias y scripts
Es un archivo JSON q contiene una serie de clave y valor. Las claves mas comunes son:

- name nombre del proyecto
- version la version actual del proyecto
- description breve descripcion del proyecto
- main el archivo q se debe ejecutar
- dependencies un objeto q lista las dependencia de produccio de l proyecto
- devDependencies un objeto q lista las dependencias de desarrollo
- script un objeto q define scripts personalizados q pueden ser ejecutados desde la linea de comandodos con el comando `npm run [nombre]` .Permite definir isntrucciones personalizadas
- author autor/s del proyecto
- license bajo la que se distribuye el proyecto

## package-lock.json

es un archivo q genera automaticamente NPM cuando se instala o actualiza dependencia. Sirve para asegurar una instalacion consistente el proyecto en diferentes entornos

## ejecucion de scripts

el archivo package.json tiene una clave scripts que especifica tareas de linea de comando que se pueden ejecutar mediante `npm run [name task]` es comun colocar ahi los comando largos bajo nombres mas faciles de ejecutar.
los scripts se utilizan para iniciar un servidor , iniciar la compilacion de un proyecto y tambien para ejecutar pruebas

```js
{
  "name": "your-package",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "author": "",
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {},
  "scripts": {
    "echo": "echo hello!"
  }
}
```

si ejecutamos `npm run echo ` en la linea de comnado se ejecutar eso

## Manejo de error

Puede haber errores operativos y errores de programación. Para el manejo de errores es necesario desarrollar codigo solido. Permite reducir el tiempo de dasarrollo al encontrat errores y fallos mas prontamente.

- Errores operacionales , representan problemas en tiempo de ejecucion :
  - no se pudo conectar al servidor
  - entrada de usuario no válida
  - el servidor devolvio respuestaa 500
  - el sistema no tiene memoria
- Errores de programcion o bugs, representan problemas del código en su
  - cuando intentas leer una propiedad de un objeto indefinido
  - se llama a funcion asyncrona sin devolucion de llamada
  - no capturar promesa rechazada
  - paso de parametro incorrecto en una funcion
    Los errores operativos son parte del tiempo de ejecución y de la aplicacion, mientras q los de programacion son errores en el codígo
    Usualmente los errores operativos no implican que reinicias la aplicacion(si la entrada del usuario no es valida), pero si hay un error progratico quizas no tenga sentido mantener la aplicacion funcionando cuando hay un error
    NOde tiene un objeto de ERROR integrado, que te brinda un conj de info sobre un error ciando ocurre. Tiene un error.stack q proporcional un seguimiento de la pila de donde proviene el error. Y un error.message q imprime un mensaje de error

### Técnicas de manejo de errores

- try catch ( envolvemos el bloque de codigo q puede producir el error, y el error se procesa en el bloque catch si se produce)

```js
const fs = require("fs"); // por q no estamos trabajando con npm
try {
  const data = fs.readFileSync("/jdsdj");
  console.log(data);
} catch (error) {
  console.log(error);
}
```

- callback( es una argumento de la funcion en la que implementamos el manejo de errores. El proposito de una funcion de devolucion de llamada es verificar los errores antes de q se utilice el resultado)

```js
fs.readFile("/hshaks", (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result);
});
```

- promesas o async/await( son una alternativa al callback)
  const fs= require("fs/promises");

```js
console.log("Inicio");
fs.readFile("/hasajh")
  .then((result) => console.log(result))
  .catch((erro) => console.log(erro));
console.log("Fin");

//ASYNC/AWAIT
try {
  const result = await fs.readFile("/hasajh");
  console.log(result);
} catch (error) {
  console.log(error);
}
// NOTA: SI se quiere usar async debe ser de typo module o extension .mjs
```

- emisores de eventos ( podemos usar la clase EventEmmiter del modulo de eventos para informar errores)

```js
const { EventEmitter } = require("node:events");
const fs = require("fs");
//emit se utiliza para desencadenar un evento
//on para agregar un funcion de devolucion de llamada q se ejecutar cuando se active un evento

const eventEmitter = new EventEmitter();

//cramos un evento llanado errorArchivo
eventEmitter.on("errorArchivo", (error) => {
  console.log("Error en archivo:", error);
});
eventEmitter.on("data", (result) => {
  console.log(result);
});

try {
  const data = fs.readFileSync("/nsdaks");
  //emitimos evento
  if (data) eventEmitter.emit("data", data);
} catch (error) {
  //emitimos evento
  eventEmitter.emit("errorArchivo", error);
}
```

### Errores personalizadas por el usuarios

Se pueden crear ampliando del objeto Error base para reflejar mejor los tipos de errores que podria ocurrir en la aplicacion EJ ValidationError o DatabaseError. Pueden mejorar agregando propiedades y debe incluir suficiente informacion para q el controlador de error gestione correctamenre el error

```JS
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
```

### AssertionError

Es una clase que permite realizar pruebas de asercion simples .Cuando una asercion de este tipo falla AssertionError lanza un error de este tiop- AssertionError hereda de la clase ERROR

```js
const assert = require("assert"); // solicitamos el modulo
const AssertionError = require("assert").AssertionError; //

//DEFINIMOS LAS PRUEBAS
function assertStrictEquality(a, b, message = null) {
  try {
    //output test
    console.log("---Asserting:" + a + "=== " + b + " ---");
    assert.strictEqual(a, b, message);
    //output confirmation of suceessfull assertion
    console.log("---Confirmed:" + a + "=== " + b + " ---");
  } catch (error) {
    if (error instanceof AssertionError) {
      console.log(error);
    } else {
      console.log(error);
    }
  }
}
function assertStrictInequality(a, b, message = null) {
  try {
    //output test
    console.log("---Asserting:" + a + " !== " + b + " ---");
    assert.notStrictEqual(a, b, message);
    //output confirmation of suceessfull assertion
    console.log("---Confirmed:" + a + " !== " + b + " ---");
  } catch (error) {
    if (error instanceof AssertionError) {
      console.log(error);
    } else {
      console.log(error);
    }
  }
}
function executeTests() {
  console.log("+++++++++");
  assertStrictEquality(0, 1);
  console.log("+++++++++");
  assertStrictEquality(0, 1, "O y 1 no son iguales");
  console.log("+++++++++");

  assertStrictInequality(4, 4);
  console.log("+++++++++");
  assertStrictInequality(4, 4, "4 y 4 son iguales");
  console.log("+++++++++");
  assertStrictInequality(4, 5, "4 y 5 NO son iguales"); // no se ejecuta el mensaje por q no son iguales da true
}
executeTests();
```

La unica vez q deberiaas experimentar un error AssertionError en cuando haces uso de la API de Assert. Cada assertion de prueba debe ser simple y faculmente ejecutable, sin intentar realizar mas de una tarea singular
La clase Assert proporciona metodos basicos como por ejemplo assert.equall (para probar igualdad)m assert.notEqual(desigualdad),assert.ok(la veracidad del argumento pasado),etc. Cualquiera de los metodos, si falla genera un error de tipo AssertionError

### JS Errores

Js utiliza los errores para informar a los desarrolladores sobre diversos problemas en el script que se está ejecutando

- Error de evalucacion
- Error de rango ( numero fuera de un rango permitido)
- Error de referencia(variable o elemento no exite)
- Error de sintaxis (cuando escribimos código q el motor de JS no puede entender )
- Error de tipo (cuando se realiza una operacion en un tipo de datos incorrecto)
- Error URIE (URI indicador uniforma de recursos , se produce cuando una de las funciones de manejo de URI global se utilizo mal, es decir cunado se codifica o decodifica el URI mal)
- Error interno( ocurre cuando el motor se sobrecarga por demasiada recursiones, demasiados datos para manejar y la pila crece mas alla de los limites)

```js
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
```

### Exepciones no detectadas

Dado q node se ejecuta en un unico proceso, las excepciones no detectas son un problemas.Node sigue un patron de devolucion de llamadas en el q un objeto error es el 1° arg y los datos son los 2°

### Errores asincrónicos

Los errores siempre deben manejarse,el manejo en casos sincronicos se usa try catch, en al caso de trabajar de forma asincrónica se manejan dentro de la funcion de devolucion de llamada, las abstracciones de Promise y async/await
hay 3 formas de manejar los errores en escenarios asincrónicos (no excluyentes):

- rechazo
- try/catch
- propagación

#### Rechazo:

cuando se produce un error en una funcion sincronica se trata de una EXCEPCION , pero en una funcion asincrónica se trata de un Promise(un error asincrono o de un rechazo de promesa)

```js
function dividirPorDos(numero) {
  return new Promise((resolve, reject) => {
    if (typeof numero !== "number") {
      reject(new TypeError("argumento debe ser numero"));
      return;
    }
    resolve(numero / 2);
  });
}
// dividirPorDos("2")
dividirPorDos(2)
  .then((resul) => console.log(resul))
  .catch((e) => console.log(e.message));
// si aparece throw dentro de un controlador de promesa, then o catch devolvera una promesa rechazada
```

#### try/catch asincrónica

La sintaxis async /await admite try/catch rechzados.

```js
async function dividirPorDosAsync(params) {
  if (typeof params !== "number") throw new TypeError("Argumento no valido");

  return params / 2;
}
// la funcion asincrona deveulve una promesa q se resuleve a menos que se produzca un rechazo
async function test() {
  try {
    let r = await dividirPorDosAsync("2");
    console.log(r);
  } catch (error) {
    console.log(error);
  }
}
```

#### Propagacion

En lugar de gestionar el error en el lugar donde se produce, el autor de la llamada es el responsable de gestionarlo. cuando usamos async/await y queremos propagarlo ,lo volvemos a generar

```js
async function testPropagacion() {
  try {
    let r = await dividirPorDosAsync("2");
    console.log(r);
  } catch (error) {
    console.log(error.message);
    if (error instanceof TypeError) throw new Error("Genero otro error");
  }
}
testPropagacion();
```

### Seguimiento de pila

Para imprimir un seguimiento de la pila de llamadas desde el ultimo al primero (LIFO). Stacktrace se muestra cuando se produce un error inesperado. con try/catch capturamos la excepcion y en la propiedad stack contiene una cadena con el seguiento de la pila de llamadasen orden LIFO
`console.log(new Error("mi error").stack);`

### Debugger

node incluye una utilidad de depuracion de linea de comando que permite realizar inspeccones sensillas . Para usarelo inice node con el argumento inspector seguido de la ruta q desea depurar
`node inspect [name script].js`
ahora abre el navegador e ingresa la URL chrome://inspect y desde esa ventana podes depurar el codigo linea por linea
SI sse quiere se puede poner un script para depurar la aplicaion en el package.json

```js
"scripts": {
    "start": "node index.js",
    "debug": "node inspect index.js",
    "dev": "nodemon index.js"
},
//y ahora ejecutas npm run debg para iniciar la aplicaion en modo depuracion
```

## Programacion asyncrona ⏰

EL código asincrónico significa q se procesa en segundo plano independientemente
del flujo principal del programa. Esto graratiza la ejecución de código sin bloqueos.
El problema básico de las funciones síncronicas de larga duración, nuestro programa no responde.

### Event Loop (blucle de eventos)

El event loop premite a Node realizar operaciones sin bloqueo a pesar de que Js use un solo hilo
Cuando invocamos a una funcion , esta se agrega a la pila(STACK primero en entrar,último en salir) de llamadas
. Y cuando termina de ejecutarse( return)se extrae de la pila. Pero en el caso de las operaciones asincronas no
pasan por las pilas de llamadas si no que van a una API , lo que permite seguir con la ejecucion del código al estar
el stack liberado.Miestras en la APi se ejecutar la funcion asincronica pero su devolucion de llamada
no se agregará inmediatamente en la pila de llamadas sino que pasa a una cola(FIFO primero en estrar primero en salir)de
devolucines de llamadas(callback).
Ahora es el bucle de eventos conecta la cola con la pila de llamadas. SI la pila esta vacia(no hay funciones sincronicas ejecutandose)
el primer elemento de la cola se agregara a la pila de llamadas, se invoca, devulve un valor y se extrae de la pila

### Emisor de eventos

Los emisores de eventos son objetos en node que activasn un evento enviando un mensaje para indicar q se
completó una accion.Normalmente, en node cuando queremos q se produzca una ccion al comlpletarse tra accion, usamos
la técnica de la programcion asyncrona con callback o encadenar promesas, pero estas técnicas acoplan la
accion desencadenante y la accion resultante. En el caso de los eventos, el emisor de evento envia un mensaje Y
un subcriptor recibe el evento y realiza una accion. ( el emisor no necesita saber de los subcriptores )

Del lado del navegador , parte de la interaccion del usuario se maneja a través de eventos.
Del lado del backend Node ofrece la opcion de contruir un sistema similiar con el modulo
`events ` y con la clase `EventEmitter`.

```js
//Cargamos el módulo e imprtamos la calse EventEmitter
const EventEmitter = require("node:events");

//creacion una instancia de objeto emisor de eventos
const miEvent = new EventEmitter();
// este objeto expone muchos métodos entre ellos on y emit

//EMIT se utiliza para activar un evento, necesitamos pasarle el nombre del evento como una cadena, y podemos
//pasar cualquier cantidad de argumentos después del nombre del evento
// la funcion devuelve true si hay oyentes para el evento y false si no hay
console.log(miEvent.emit("miEvent"));

//ON() agrega un detector para un evento con un nombre de evento en particular y activa la devolucion de llamada cuando se activa el evento
//ON se utiliza agregar una funcion de devolucion de llamada que se ejecutara cunao se active el evento
// se utilza para agregar receptores , cuando se registra ese oyente se invoca cada vez q se emite el evnto nombrado
let m = 0;
miEvent.on("start", (argumento) => {
  console.log(++m);
  console.log("evento start", argumento);
});
miEvent.on("second", () => console.log("second"));
miEvent.on("last", () => console.log("last"));

console.log(miEvent.emit("start", 2025));

miEvent.emit("start", 2025);
miEvent.emit("start", 2025);

//ONCE registra un oyecnte q se llama solo una vez para un evento en particular
//una vez emitido el evento se anula el registro del detector
miEvent.once("once", () => {
  console.log("once", (m += 1));
});
miEvent.emit("once");
miEvent.emit("once"); //es ignorado

//Otra forma de crear eventos es crear un objeto q extienda de el objeto emisor de eventos
// esto significa q la calse hereda los métodos y propiedades de la clase EventEmitter
class ClaseEvento extends EventEmitter {
  constructor() {
    super();
  }
  pasoAlgo(param) {
    //emitimos evento pasoAlgo cuando se llama a la funcion pasoALgo de la clase
    this.emit("pasoAlgo", param);
  }

  //MANEJO DE EVENTOS DE ERROR
  //si un emisor de eventos no puede realizar su accion, debe emitir un evento
  //para indicar que la accion fallo.La forma estandar de node en que un emisor de eventos
  //indica una falla es emitiendo un Error Event
  // un evento de error debe tener su nombre establecido en error, y estar acompañado de un objeto Error

  pasoAlgoErroneo(num) {
    if (num < 0) {
      this.emit("error", new Error("numero negativo invalido"));
      return;
    }
    this.emit("pasoAlgoError");
  }
}

// ahora q ya tenemos todo para enviar evento , creamos detectores de eventos con ON()
const listener = new ClaseEvento(); // cremoas un objeto emisor de evento
listener.on("pasoAlgo", (arg) => {
  console.log("👀​", arg);
});
listener.pasoAlgo("👍​"); // llamo a funsion q internamente emite el evento

//se considera una buena práctica escuchar simepre los eventos "error" si estas escuchando un emisor de eventos.
//Si no configuras un detector de errores , toda la aplicacion se bloqueara al emitir uno
listener.on("error", (error) => {
  console.log(error.message);
});
listener.on("pasoAlgoError", () => console.log("pasoAlgoError"));
//invoco funcion q emite evento si es menor a cero "error" y si es mayor o igual "pasoAlgoError"
listener.pasoAlgoErroneo(1);
listener.pasoAlgoErroneo(-1);

//GESTION DE OYENTES DE EVENTOS
/*Los emisores de eventos tienen mecanismos para supervisar y controlar los oyentes
suscritos a un evento.
Para saber cuantos oyentes estan procesando un evento tenemos el metodo
listenerCount("nombre de evento") */
const listener2 = new ClaseEvento();
listener2.on("pasoAlgo", (arg) => {
  console.log("listener2 🌡️​", arg);
});
listener2.on("pasoAlgo", (arg) => {
  console.log("listener2 🌡️​🌡️​", arg);
});
//cada objeto tiene su propio instacia de evento
console.log("listener1", listener.listenerCount("pasoAlgo")); //1
console.log("listener2", listener2.listenerCount("pasoAlgo")); //2 tiene dos ouentes esta instancia del obejto event emitter

//Si queremos eliminar los oyentes podemos usar la funcion off() para eliminar los detectores de eventos de un emisor de evento
//el método off acepta 2 argumento el nombre del evento y la funcion q lo esta detectando(por lo que para eliminar
// la devolucion de llamda debe guardarse en alguna  varaible o constante)

const devolucionLLamada = (arg) => {
  console.log("listener2 🌡️​🌡️🌡️​", arg);
};
listener2.on("pasoAlgo", devolucionLLamada);

listener2.pasoAlgo("🔥​"); //se emite las 3 devoluciones de llamadas
listener2.off("pasoAlgo", devolucionLLamada); // quito una devolucion de llamada no las otras
listener2.pasoAlgo("🔥​"); //se emite las 2 devoluciones de llamadas

//si queremos emilinar todos los oyentes de un evento podemos usar la funcion
//removeAllListeners("nombre del evento")
listener2.removeAllListeners("pasoAlgo");
console.log(listener2.listenerCount("pasoAlgo")); //0 sin oyentes
listener2.pasoAlgo("🔥​"); // no deberia pasar nada
```

### Promesas

Es objeto que representa el resultado de una operación asincrónica .Las funciones asincronas usan promesas en sugundo plano.Una promesa se encuentra en uno de 3 estados diferentes:

- pendiente , estado initial de una promesa
- cumplido ,estado q representa un operación exitosa
- rechazado , esatdo q representa una operacion fallida.
  Una vez q la promesa se cumple o se rechaza es inmutable ,no se puede cambiar.

#### Contruyendo promesa

Para contruir una promesa usamos `new Promise(function(resolv,reject))` usando resolve() y reject() podemos cuminicar al llamador cual fue el estado de la Promesa resultando.
Para poder utilizar una promesa debemso poder esperar que se cumpla o que se rechaze usamos then() que se ejecuta so se cumple o catch cuyo bloque se ejecuta si se rechaza.

```js
function creandoPromesa(argumento) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (argumento > 0) {
        resolve(argumento);
      } else {
        reject("Error");
      }
    }, 3000);
  });
}

console.log("Inicio");
creandoPromesa(0).then(console.log).catch(console.log);
console.log("FIN");
```

Promesas encadenadas, el método then() toma 2 arguemto, el 1 es una callback para el caso q se resuelva la promesa, y el 2 es una funcion de devolucion de llamada si se rechaza la promesa. Cada then devuelve un objeto Promesa que se puede usar para encadenar.Pero es mas sensillo omitir el manejo de errores hasta una sentencia catch()

```js
myPromesa
  .then((valor) => {
    throw new Error("​💥​");
  })
  .then((valor) =>
    console.log("NO paso por aca...por que el error va al catch")
  )
  .catch((error) => console.log(error.message));
```

### Async/Await

Es una sintaxis especial para trabajar con promesa. Se debe agregar la palabra async antes de una funcion y de esta forma garantiza q la funcion devuelve una promesa y la palabra await que hace que Js espere hasta q se cumpla la promesa, miestras le pasa el flujo de la ejecucion al codigo que invoco a la funcion asincrona. De esta forma no se bloquea el flujo del programa.
Definicion de funciones asincronas:

- declaracion de funcion async
- expresion de funcion async

```js
async function f(params) {
  return params;
}
const f2 = async (params) => {
  return params;
};
console.log(f2("🐶​")); // si ejecuto no pasa nada por q no la maneje como una promesa
f2("🐶​").then(console.log);

let valor = await f("🐷​"); // la palabra clave await hace q Js espere hasta q se cumpla esa promesa y devuelva su valor
console.log(valor);
```

Cuando se llame a la funcion este devuelve un elemto Promise.Si la promesa se resuelve exitosamente el resultado se incluye en esta. Si la funcion async genera una excepción la promise se rechaza con el valor generado.

Una funcion async puede contener una expresion await, la cual pausa la ejecuion de la funcion asíncrona y espera la resolución de la promesa y a continuacion reanuda la ejecucion de la funcion async.La palabra clave await solo funciona dentro de funciones async.
Await suspende la ejecución de la funcion hasta q se cumpla la promesa y sede el flujo del programa al código q invocó a la funcion asincrona.
Podemos declarar métodos de clase asíncronos poniendo async

```js
class MyClass {
  async f3() {
    return await Promise.resolve("🍄​");
  }
}
new MyClass().f3().then(console.log); //manejo como promesa
(async () => {
  let r = await new MyClass().f3();
  console.log(r);
})(); //manejo a traves de una funcion asíncronica anonima , ya q para usar await si o si debo estar dentro de una funcion async
```

Manejo de error: Si una promesa se rechaza, arroja el error como si ubiera un throw

```js
//estas dos hacen lo mismo,
async function eF() {
  try {
    await Promise.reject(new Error("💥​"));
  } catch (error) {
    console.log(error.message);
  }
}
async function eF2() {
  throw new Error("💥​");
}

async function eF3() {
  await Promise.reject(new Error("☠️​"));
}
//podemos detectar ese error usando try...catch dentro de la funcion o fuera de ella
eF();
eF3().catch((e) => console.log(e.message)); //catch de promsa
try {
  console.log(await eF3());
} catch (error) {
  console.log(error.message);
}
```

### Callback (devoluciones de llamadas)

Un callback es una función q se llama al finalizar una tarea .
ES una funcion q se pasa aotra como argumento, que luego se invoca dentro de la funcion externa para completar algún tipo de rutina o accion
A menudo se utilizan para continuar la ejecucion del código despues de que se haya completado una operación de esta forma se evita cualquier bloqueo y permite q se ejecute otro código mientras tanto (devolucion de llamada asincrono).
Js es sincrónico de manera predeterminada y tiene un solo subproceso. las lineas de código se ejecutan linea tras linea.Js nacio dentro del navegador ,que ofrece un conjunto de APi que pueden gestionar la asincronia. Mas recientemente Node introdujo un entorno de E/S sin bloqueo para extender este concepto al acceso a archivos, llamadas a red,etc.
Como no se puede saber cunado un usuario va a ser click a un botón , se define un controlador de eventos para el evento click, este controlador acepta una funcion que se llamará cuando se active el evento. Esta es la llamada devolucion de llamada, es simplemente una funcion q se pasa como valor a otra funcion. Podemos hacer esto porque JS tiene funciones de primera clase.
Las devoluciones de llamadas se utilizan en todas partes, no solo en eventos DOM:

- con el uso de temporizadores (setTimeout, setInterval)
- solicitudes XHR
- trabajo con archivos

```js
function saludar(nombre) {
  console.log("hola " + nombre + " 😉​");
}
function despedir(nombre) {
  console.log("Chaoo " + nombre + " 🖐️​");
}
function funcionOrdenSuperior(callback, nombre) {
  console.log("funcion de orden superior");
  callback(nombre);
}
//callback sincronicos, se ejecutan inmediatamente
console.log("Inicio sincronico");
funcionOrdenSuperior(saludar, "Rosa");
funcionOrdenSuperior(despedir, "Rosa");
console.log("Fin sincronico");

//callback asincronicos
console.log("Inicio async");
setTimeout(() => {
  //callback
  despedir("Rosa");
}, 3000);
console.log("Fin async");
```

Cómo se manejan los errores con la devolucion de llamada? Node adopto la estrategia de poner como 1° param en cualquier funcion de devolución de llamadas el objeto error. Si no hay error el objeto es null, si hay error contiene la informacion del error.

```js
//manejo de error en 1 parametro del callback objeto error
const fs = require("node:fs");
fs.readFile("/file.json", (error, data) => {
  if (error) {
    //manejo error
    console.log(error.message);
    return;
  }
  //no errors
  console.log(data);
});
```

A partir de ES6 Js introdujo varaias caracteristicas q ayudan con el código asincrono que no implica el uso de devolucion de llamadas :promesas(ES6 ) y async/await (ES2017)

### setTimeout

es una funcion q ejecuta un funcion después de que transcurre un periodo especificado . Los tiempos se declaran en milisegundo. Se debe especificar una funcion de devolución de llamda para q se ejecute mas tarde.
setTimeout devuelve un valor entero positivo q indentifica el temporizado creado por la llamada a setTimeout(). Este valor se puede pasar a clearTimeout() para cancelar el tiempo de espera

```js
console.log("inicio");
setTimeout(function () {
  console.log("uno");
}, 2000); // paso funcion anonima
setTimeout(function () {
  console.log("dos");
}, 1000);
setTimeout(function () {
  console.log("tres");
}, 50);
console.log("fin");

function callback() {
  console.log("⌛");
}
setTimeout(callback, 3000); //paso nombre del callback
let id = setTimeout(callback, 3000); //obtengo id de settimeout
clearTimeout(id); // cancela la ejecucion con del settimeout

console.log("antes");
setTimeout(() => {
  console.log("sin tiempo de espera👁️");
}, 0);
console.log("despues");
//por mas que se ponga cero tiempo de espera , la funcion de devolucion de llamada se ejecutar lo antes posible pero no antes de la
//ejecucion del codigo actual que no pasa por la Api, ni el EventLoop si no que van directamente all stack
```

### setTinterval

Metodo q ayuda a ejecutar repetidamente una funcion después de un retraso fijo. Devuelve un id de intervalo único q la funcion
clearInterval() puede utilizar para detener la ejecucion repetida de la funcion. El tiempo específicado es en milisegundos.

### Process.nextTime()

cada vez q el bucle de eventos realiza un recorrido completo, lo llamamos tic. Cuando pasamos una funciona `process.nextTick()` le indicamos al motor q invoque esta funcion al final de la operacion actual antes de que comience el siguiente tic del bucle de eventos.
El bucle de eventos está opcupado procesando el código de la funcion actual. Cuando esta operación finalize , el motor de js ejecuta todas las funciones pasadas a nextTime.
Es la forma en que podemos decirle al motor Js que procese una funcion asincrónica lo antes posible , sin ponerla en la cola.
La llamada setTimeOut(()=>{},0) ejecuta la funcion al final del siguiente tic, mucho mas tarde de cuando se usa nextTick porque prioriza la llamada y la ejecuta justo antes del comiento del tick.
Use nextTick() si deseas asegurate de que el la proxima iteracion del bucle de eventos ese codigo ya esté ejecutado.

```js
console.log("number 1");
setTimeout(() => console.log("number 2"));
setTimeout(() => console.log("number 3"));
process.nextTick(() => console.log("number 4"));
console.log("number 5");

//output 1,5,4,2,3
```

## Files 📂​

Se puede manipular archivos en Node.js con el módulo integrado `fs` , el cual contiene funciones para leer, escribir y eliminar archivosen la maquina local.Este aspecto hace que JS sea un lenguaje útil para la programacion de herramientas de interfaza de linea de comando y back-end.
El modulo admite la interaccion con archivos de forma sicrónica, asincrónica o mediante secuencias.

#### Lectura de archivos con readFile()

Primero se debe importar el modulo que permite q el programa trabaje con archivos.
Cuando se creo el modulo fs , la forma principal de escribior código asincrono en node era atraves de callback. A medida q las promesas se hicieron popular, el quipo de Node trabajo para admitirlas en el modulo de fs.En la version 10 de Node crearon un objeto promises en el modulo fs miestras que el modulo principal continúa exponiendo funciones q usan callbacks.
Para importar la version de promesas del módulo:
`const fs = require('fs').promises;`. Una vez que se importa el modulo puedo crear funciones asincronas para leer el archivo utilizando await en lugar de encadenar la promesa con el then().

```js
async function readFile(fileName) {
  try {
    //readFile devuelve un objeto buffer  que puede almacenar caulquier tipo de archivo , y conviertes esos bytes en texto mediate el metodo toString() del objeto buffer
    const data = await fs.readFile(fileName);
    console.log(data.toString());
  } catch (error) {
    console.log("No se pudo leer archivo:", error.message);
  }
}
readFile("./test-lectura.txt");
```

#### Escribir archivos con writeFile()

```js
//ESCRITURA
async function createCSV(header, name) {
  try {
    const csvHeader = header; //name,age,city
    await fs.writeFile(name, csvHeader);
    //1 argumento el la ruta del archivo. si solo proporcionas el nombre Node creará el archivo en el mismo directorio en el q se esta ejecutando el código
    //2 arguemnto son los datos q se escriben
  } catch (error) {
    console.log("Error en creacion de archivo:", error.message);
  }
}
async function addItemCSV(param, name) {
  try {
    const csvLine = "\n" + param; //param si header es name,age,city=> rosa,30,quilmes
    await fs.writeFile(name, csvLine, { flag: "a" });
    //el 3 argumento en un objeto que tiene una calve flag con el valor a que le indica a node q agregue algo al archivo no lo sobreescriba, si no se especifica el valor predeterminado es w que crea un archivo nuevo si no exite o sobreescribe si existe
  } catch (error) {
    console.log("Error en agregar item a archivo:", error.message);
  }
}
//ESMODULE
//Para usar esta sintaxis el archivo debe ser mjs otener el package.json type module y ademas la importacion debe ser: import { promises as fs } from "fs";
await createCSV("id,nombre,edad", "user.csv");
await addItemCSV("1,anya,44", "user.csv");
await addItemCSV("2,mara,12", "user.csv");
await addItemCSV("3,andres,28", "user.csv");

//COMMON.JS
// si no estas trabajando con mudulo msj . deben encapsular las funciones asincronicas en una async function anonima
// ademas se incluye entre parentesis esto le indica a js q el código q se encuentra dentro de ellos es una expreson de funcion. los parentesis final de la expresion de funcionse utilzan para invocalr inmediatament.IIFE

(async () => {
  await addItemCSV("4,lucas,18", "user.csv");
  await addItemCSV("4,tomas,56", "user.csv");
})();
```

#### Eliminar archivo con unlink()

```js
async function deleteFile(path) {
  try {
    await fs.unlink(path);
    // se pasa la ruta del archivo q desea eliminar, NO envia a la papelera sino q elimina de forma permanente del sistema
  } catch (error) {
    console.log("Error en eliminacion de archivo:", error.message);
  }
}
deleteFile("user.csv"); // si no se indica ruta se busca el la carpeta donde se ejecuta el codigo
```

#### Mover archivos con rename()

Puedes usar la funcion rename() para mover un archivo a una nueva carpeta.
,se debe proporcionar la rurta del archivo original y la rurta de la ubicacion de
destino.

```js
async function moveFile(source, destination) {
  try {
    await fs.rename(source, destination);
    console.log("archivo movido desde " + source + " a " + destination);
  } catch (error) {
    console.log("Ocurrio error en mover archivo", error.message);
  }
}
moveFile("copy-test.txt", "./move/newname.txt"); //se mueve de la ubicacion original y se colaco en el destino con el nombre indicado
```

### Módulo FS

FS es el módulo integrado de node que ´permite interactuar con el sistema de archivo mediante JS. Todas las operaciones de archivos tinene formas sincrónica,de callaback y basadas en promesas y se puede acceder a ellas mediante la Sintaxis CommonJS y los ES Modulo6

```js
//const fs=require("fs"); COMMONJS

import fs from "fs"; //ESMODULO

//sincronico
console.log("Inicio lectura sincronica");
const data = fs.readFileSync("test-lectura.txt");
console.log(data); //buffer
console.log(data.toString().trim());
console.log("Fin lectura sincronica");

console.log("Inicio lectura asincronica");
fs.readFile("test-lectura.txt", (error, data) => {
  console.log(data.toString().trim());
});
console.log("Fin lectura asincronica");

//CREACION

//APPENDFILE
console.log("Inicio creacion archivo sincronica");
fs.appendFileSync(
  "appendFile.txt",
  "si el archivo no existe lo crea y agrega el contenido,si exite solo agrega contenido"
);
console.log("Fin creacion archivo sincronica");

console.log("Inicio creacion archivo Asincronica");
fs.appendFileSync(
  "appendFile.txt",
  "Si es asincrona necesita un callback como tercer argumento",
  function (err) {
    if (err) console.log(err.message);
  }
);
console.log("Fin creacion archivo asincronica");

//OPEN
console.log("Inicio cracion con open syncronico");
fs.openSync("opensync.txt", "w"); // segundo argumento es una bandera  q especifica el modo de apertura, w indica escritura y si no exite lo crea vacio
console.log("Fin cracion con open syncronico");

console.log("Inicio cracion con open Asyncronico");
fs.open("openasync.txt", "w", (error, file) => {
  if (error) console.log("Error en creacion de archivo");
}); // segundo argumento es una bandera  q especifica el modo de apertura, w indica escritura y si no exite lo crea vacio, 3 argumeto callback error
console.log("Fin cracion con open Asyncronico");

//WRITEFILE
//método remplaza el archivo y el contenido si exite, si no existe se creara un nuevo archivo con el contenido
console.log("Inicio creacion con writeFile syncronico");
fs.writeFileSync("writefilesync.txt", "contenido de writeFileSync");
console.log("Fin creacion con writeFile syncronico");

console.log("Inicio creacion con writeFile Asyncronico");
fs.writeFile(
  "writefileasync.txt",
  "contenido de writeFile (asincrono)",
  function (err) {
    if (err) console.log("Error en creacion de archivo");
  }
);
console.log("Fin creacion con writeFile Asyncronico");

//ACTUALIZAR ARCHIVOS

//APPENDFILE Agrega el contenido del 2°argumento al final del archivo especificado en el 1° arg

console.log("Inicio actulizacion con appendFileSync");
fs.appendFileSync("opensync.txt", "appendFileSync contenido append");
console.log("Fin actulizacion con appendFileSync");

console.log("Inicio actulizacion con appendFile asincronico");
fs.appendFileSync(
  "opensync.txt",
  "appendFile contenido append asincronico",
  function (e) {
    if (e) console.log("Error en append a archivo");
  }
);
console.log("Fin actulizacion con appendFile asincronico");

//ELIMINAR ARCHIVO
console.log("Inicio eliminacion sincrónica");
fs.unlinkSync("opensync.txt");
console.log("fin eliminacion sincrónica");

console.log("Fin eliminacion Asincrónica");
fs.unlink("openasync.txt", (err) => {
  if (err) console.log("Error en eliminacion de archivo");
});
console.log("fin eliminacion Aincrónica");

//CAMBIAR NOMBRE
console.log("Inicio cambio de nombre sincrono");
fs.renameSync("writefileasync.txt", "writeFileAsync.txt");
console.log("Fin cambio de nombre sincrono");

console.log("Inicio cambio de nombre asincrono");
fs.renameSync("writefilesync.txt", "writeFileSync.txt");
console.log("Fin cambio de nombre Asincrono");
```

### Módulo path

Módulo q proporciona utilidades para trabajar con rutas de archivos y directorios. esta integrado al núcleo de Node y se puede usar solicitandolo `const path=require("node:path")`

- dirname obtine la carpeta principal de un archivo
- basename obtine la parte del nombre del archivo
- extname obtiene la extension del archivo

```js
const path = require("node:path");
const ruta = "./files/path.js";
console.log(path.dirname(ruta));
console.log(path.basename(ruta));
console.log(path.extname(ruta));
//puedes obtener el nombre del archivo sin la expension especificando un segundo argumento en basename
console.log(path.basename(ruta, path.extname(ruta)));
```

Para unir 2 o mas partes de rutas puedes usar `path.join()`

```js
const name = "rosa";
const join = path.join("/", "users", name, "usuarios.txt"); // /users/rosa/usuarios.txt
console.log(join);
```

para crear rutas absolutas usar `path.resolve()`

```js
console.log(path.resolve("path.js"));
//si solo se coloca el  nombre del archivo crea la ruta absoluta al directorio actual
//Si especificas una segunda carpeta de parametro , resolve utilizara la primera como base de la segunda
console.log(path.resolve("introduccion", "path.js")); // ....../introduccion/path.js
//si ponemos "/" en el primer parametro lo toma como ruta absoluta
console.log(path.resolve("/introduccion", "path.js")); // /introduccion/path.js

// NO COMPRUEBA SE LA RUTA EXUSTE. SOLO CANLCULA UNA RUTA EN FUNCION DE LA INFORMACION QUE SE SUMINISTRO
```

### Process.cwd()

Devuelve un string con el directorio de trabajo actual del proceso de Node.js
proccess.cwd() es un método de un objeto Global proccess, devuelve el valor del directorio donde ejecutamos el processo del node
**dirmane no es global sino local para cada módulo., es decir devulve el valor del directorio donde reside el archivo q se está ejecutando actualmente
process es un objeto global y cwd retorna donde se ejecuta el nodo
**dirname es de modulo y reprsenta la ruta del archivo del modulo

```js
const { cwd } = require("node:process");
console.log("cwd:", cwd());
//devuelve el directorio desde el que se invocó el node comando

console.log("__dirname ", __dirname);
//devuelve el nombre del directorio que continen el archivo de código fuente de JS

/*
  workpace
    --files
        ---proccess-cwd.js

        si ejecuto desde cd files; node proccess-cwd.js 
            cwd->c:/course/workpace/files
            __dirname->c:/course/workpace/files

        si ejecuto desde workpace cd workpace;node files/proccess.cwd.js
                cwd->c:/course/workpace   
            __dirname->c:/course/workpace/files

            
 */
```

### \_\_dirname

en un nodo devuelve la ruta de la carpeta donde reside el archivo JS actual. . Es decir el nombre del directorio del archivo q se está ejecutando actualmente. es lo mismo que path.dirname del **filename.
` console.log("path.dirname(**filename)",path.dirname(\_\_filename));`

### \_\_filename n

Devuelve el nombre del archivo del código ejecitado y se proporciona la ruta absoluta del archivo de código
`console.log("__filename",__filename);`

### CHOKIDAR

ES un paquete de código abierto que permite observar archivos de código abierto para Node.js.Le asigna un conjunto de archivos,los observa para detectar cambios y notifica cada vez q se edita un archivo antiguo o se crea un archivo nuevo.Chikidar iniciará observadores de forma recursiva para todo que esté dentro del alcance de las rutas q se han especificado. Por lo que ojo con recursos del sistema.

## Aplicacion de linea de comando ⌨️​

Son aplicacion q se pueden ejecutar desde la línea de comados. Se denominan app CLI. Los usuarios puede interactuar mediante comandos de terminal. son utilez para la automatización y la creación de herramientas.
Si te encuentras haciendo las mismas cosas una y otra vez, es probable q puedas automatizar esos pasos en un script y ahorrar tiempo.
Node.js tiene bibliotecas intergradas para leer y escribir archivos , inicar otras aplicaiones y realizar comunicacion de red básicas.

#### Para ejecutar un script desde caulquier lugar

crea una carpeta e inicializala con `npm init`, crea una carpeta con el nombre bin
t agrega en la carpeta un archivo `index.js` cola en el :

```js
 #!/usr/bin/env node
 console.log("first script ");
```

La primera linea se llama shebang #! seguida de la ruta al shell , es una secuencia de caracteres q se utiliza para indicar al sistema operativo que desea q use el script .El shell lo utilza para decidir q interprete ejecutara el resto del script. Normalmente sera :
`#!/bin/bash o #!/usr/bin/env bash ` como la primera línea al escribir o leer scripts bash.
Pero en nuestro caso vamos a usar para q los script de Node.js se isntalen y se ejecuten correctamente en macOsy windows.
En el package.json cambie la clave main por el valor bin/index.js y agrege una nueva clave con bin con un comando y el script a ejecutar:

```js
{
  "name": "first-app",
  "version": "1.0.0",
  "main": "bin/index.js",// el primer archivo a ejecuatrse
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "bin":{
    "hola":"./bin/index.js"
  }
}
```

Ahora se puede ejecutar el script como cualquier aplicacion de node `node .` desde la linea de comando .Para q el script se pueda ejecutar desde cualquier lugar . Debemos instalarlo globalmente
`npm i -g` de esta forma. todos los comandos que aparecen en la seccion bin del package.json archivo estarán disponibles como aplicacion de linea de comando. Es decir que puedes ejecutar el script colocando el comando "hola" en este caso.
Para desinstalar un script ejecuta el comando
`npm uninstall -g [nombre de la carpeta del proyecto]`
Para ver todos los módulos node.js instalados globalmente ejecuta `npm ls -g --depth=0`

> NOTA: Si no se ejecuta en powershell , abra la powershell como administrador compruebe con el comando "Get-ExecutionPolicy" si dice restricted tendra q modificar la configuración.Escriba en la terminal "Set-executionPolicy Unrestricted y a continuacion indique la respuesta para modificarla S

### Exitting / Exit Codes

Forma de finalizar un proceso NOde mediante el módulo de proccess de node

```js
const process = require("node:process");
process.exitCode = 1; //sera  codigo de salida del proceso cuando el proceso sale correctamente o se llama a process.exit()sin ningun codigo como param

process.exit(); //si se pasa un código se anulara la configuracion de process.exitCode
```

process.exit le indica a node que finalice el proceso de forma sincrónica con un estdo de codigo de salida. Se code se omite la salida utiliza el codigo exito o 0 o el valor de exitCode si se ha establecido.La llamada de process.exit forzara al proceso al salir lo mas rápido posible incluso si todavia hay operacion asincrónas que o se han completado. La mayoria de las situaciones no es necesario llamar a process.exit(). El proceso Node saldrá por si solo si no hay trabajo adicional pendiente. La prodiedad process.exitCode se puede configuarra para indicarle al proceso q código de salida utilizar cuando el proceso es correcto.

#### evento exit

El evento exit se emite cuando el proceso de Node esta a punto de salir como resultado de :

- el llamdo exicito a process.exit()
- el bucle de eventos de Node ya no tiene trabajo adicional
  No hay forma de evitar la salida. la funcion callback del oyente se invoca con el código de salida especificado por process.exitCode o en por el argumento pasado en process.exit(arg)

```js
const process = require("node:process");
process.on("exit", (code) => {
  console.log("🔄Evento de salida del process ,code: ", code);
});
process.exit(); //por defecto cero
```

### Variables de entornos

Las varaibels de entrono nos permiten gestionar la configuración de nuestrasa aplicacions de forma independiente de nuestro código. Separar las configuraciones facilita la implementacion de nuestras aplicaiones en dif entornos.
Las varaibles de entorno son varaibles externas a neustra aplicacion que residen en el sist operativo o en el contenedor donnde se ejecuta la aplicaion de produción.Debido a que el desarrolo se realiza principalmente en máquinas locales, las variables de entorno se colocan en entornos locales con comandos como ser o export , o se almacenan en el archivo local .env
Por convenciom ,las varaibles de entorno se encriben en letra mayúsculas.Algunos datos de configuracion q se almacenan en varibles de entorno son:

- peurto http
- cadena de conexion de base de datos
- ubicacion de archivos estáticos.
  El archivo .env _nunca_ debe enviarse al repositorio de código

#### Process.env

es una variable global q se inyecta durante el tiempo de ejcución.
Es una vuista del estado de las variables de entorno del sistema.Cuando
configuramos una variable de entorno , se carga en process.env durante el tiempo de ejcución
y se puede acceder a ella mas adelante.
El process modulo de Node proporcion la propiead `env` que alberga todas las varaibels
de entorno que se configuran en el momento en que se inició el proceso.
Para establecer la variable de entorna desde la linea de comando:

- sistema linux/unix/mac
  `USER_ID=333333 USER_KEY=clave node process-env.js` sin espacios, Si lo divides, las variables no estarán disponibles para el proceso.
- window Command Prompt
  `set USER_ID=333333 && set USER_KEY=clave && node process-env.js`
- window poweshell
  `$env:USER_ID="333333"; $env:USER_KEY="clave"; node process-env.js`

y en el archivo podemos hacer uso de ellas:

```js
console.log(process.env.USER_ID);
console.log(process.env.USER_KEY);
```

Las varaibels definidas en el comando son varaibles temporales asociadas al processo q ejecuta NOde.js y no varaibels de entorno del sitema o sesión.
Este comando define las variables USER_ID y USER_KEY solo para el proceso que ejecuta node process-env.js. Estas variables están disponibles temporalmente para ese proceso de Node.js y no afectan el entorno global ni tu terminal después de que el comando se ejecute.
Solo definen variables temporales disponibles para el proceso node process-env.js y eliminarse automáticamente cuando el proceso termina.(cuando cierres la terminal). Pero si quieres eliminar sin cerrar la asesion actual de Powershell puedes ejecutar en la powershell:

```
Remove-Item Env:USER_ID
Remove-Item Env:USER_KEY
```

y luego comprobar con :

```
Write-Output $env:USER_ID
Write-Output $env:USER_KEY

```

#### Dotenv

Es un módulo de dependencia cero q carga variables de entorno desde un archivo `.env` a process.env.
Si necesitras trabajar con variables de entorno con frecuencia, es mejor usar un archivo .env para almacenarlas y una libreria como dotenv para cargarlas en tu aplicacion.
Para establecer variables de entorno con la libreria dotenv:

1. instalo dotenv
   `npm install dotenv`
2. creo un archivo .env en el mismo directorio con las variables de entorno
   `USER_ID=333333`
   NO dejare espacio alrededor del=
   NO uses comillas a menos q el valor contenga espacios o caracteres especiales
3. usa dotnet en script para acceder a las variables de entorno

```js
require("dotenv").config();
console.log(process.env.USER_ID);
//recuerda configuara dotnenv al inicio de tu script para aseguar q todas las variables estén disponibles antes de usarlas
```

4. ejecuta el script normalmente node [nombre del archivo ].js
   DE esta forma separamos la configuracion, las variables estan en un archivo dedicado a ello, no en el código. Ademas es mas seguro ya que podemos excluir el archivo .env del control de versiones añadiendolo en .gitignore con .env
   Y por ultimo puedes definir todas tus configuaraciones en el archivo .env y utilizarlas en multiples scripts.

### Input

_Proccess.stdin_ es la entrada estándar del proceso. se trata de una secuencia legibloe estándar que escucha las esntradas del usaurio y a la q se puede accesder a través del módulo dse process. Utiliza on() para escuchar los eventos de entrada.

```js
const { stdin, stdout } = require("node:process");

stdin.pipe(stdout); // valos a obtener informacion de la terminal y luego mostrarla en la pantalla con stdout
//ahora ejecutamos en la terminal el archivo node stdin.js y a caundo escribimos y damos enter aparece lo q escribimos. Si quiero salir control +C
```

#### Package Inquirer.js

es una coleccion de interfaces de linea de comando interactivas comunes para recibir entradas del usuario. Se base en promesas y admite la posibilidad de encadenar series de preguntas, recibir entrada de texto, casilla de verificacion , lista de opciones y mucgo más.
Se puede usar para potenciar aplicacion de terminal q necesiten entrada del usuario o para crear su propia CLI.
El paquete inquirer ofrece varios mensajes predeterminados y configurables.

1. Instalacion del paquete
   `npm install @inquirer/prompts`
2. escribe los prompt en tu script

```js
import { input } from "@inquirer/prompts";
import { select, Separator } from "@inquirer/prompts";
import { checkbox } from "@inquirer/prompts";
import { confirm } from "@inquirer/prompts";
import { search } from "@inquirer/prompts";
import { password } from "@inquirer/prompts";
import { number } from "@inquirer/prompts";
import { rawlist } from "@inquirer/prompts";

//input
const answer = await input({ message: "Cual es tu animal favorito 🤔?" });
console.log(answer);

//select
const answer2 = await select({
  message: "Selecciona tu segundo animal fav",
  choices: [
    { name: "🦋", value: "mariposa", description: "animal volador" },
    { name: "🐘", value: "elefante" },
    new Separator(),
    { name: "🦄", value: "unicornio", description: "animal fantastico" },
    { name: "🦇", value: "batman", description: "batmam" },
  ],
});
console.log(answer2);

//checkbox
const answer3 = await checkbox({
  message: "Selecciona uno de estos con barra espaciadora:",
  choices: [
    { name: "🐴", value: "caballo", disabled: true },
    { name: "🐣", value: "pollito" },
    { name: "🐍", value: "serpiente" },
    new Separator(),
    { name: "🐷", value: "chancho" },
    { name: "🐭", value: "rata" },
    { name: "🐳", value: "ballena" },
  ],
});
console.log(answer3); //array con el value

//confirm y/n
const answer4 = await confirm({ message: "Desea continuar ?" });
//si no usuamos await uso promesa
// answer4
// .then((s)=>console.log("then->",s))
// .catch(console.error);
console.log(answer4);

//search
const animals = [
  "🐷​",
  "🐆",
  "​🐶",
  "​🦍",
  "🐮​",
  "🐰​",
  "🐍​",
  "🐫​",
  "🐈",
  "​🦉",
  "​🐑",
  "​🦏",
  "​🐟",
  "​🕊️​",
];
const answer5 = await search({
  message: "Search un animal",
  source: async (input, { signal }) => {
    if (!input) {
      return animals;
    }
    const response = await animals.find((a) => a == { signal });
    if (response) {
      return [response];
    }
    return [];
  },
});
console.log(answer5);

//password
const answer6 = await password({ message: "Ingresa clave 🐸", mask: "*" }); //si no indico propiedad mask no muestra como ingresamos la clave
console.log(answer6);

//number
const answer7 = await number({ message: "Cuántos animales tienes", min: 0 });
console.log(answer7);

//raw list
const answer8 = await rawlist({
  message: "Elige uno",
  choices: [
    { name: "🐴", value: "caballo" },
    { name: "🐣", value: "pollito" },
    { name: "🐍", value: "serpiente" },
  ],
});
console.log(answer8); // da el numero elegido
```

Documentacion oficial : [https://github.com/SBoudrias/Inquirer.js#readme](https://github.com/SBoudrias/Inquirer.js#readme)

#### Package Prompts

Es una interfaz de nivel superiops y facil de usar, contruida sobre el modulo integrado de node _Readline_ . Admite distinto tipos de inidcaciones, como texto, constraseña , autocompletar,fech,etc.Es un módulo interactivo y viene con soporte de valicion integrado

1. instala el paquete
   `npm i prompts`
2. usa el paquete para codificar tu prompts

```js
const prompts = require("prompts");

//funcion anonima autoinvocada para trabajar con async await desde commandjs
(async () => {
  const response = await prompts({
    type: "number",
    name: "edad",
    message: "Cuantos años tienes?",
    validate: (edad) => (edad < 18 ? "No se acepta menores de edad" : true),
  });
  console.log(response);
})(); //{edad:22} si se responde con una respuesta q no pase la validacion el cursor sigue en la pregunta

//Cadena de indicacions
const answers = [
  {
    type: "text",
    name: "nombre",
    message: "Cual es tu nombre?",
  },
  {
    type: "text",
    name: "Apellido",
    message: "Cual es tu apellido?",
  },
  {
    type: "number",
    name: "edad",
    message: "Cual es tu edad?",
  },
];
(async () => {
  const response = await prompts(answers);
  console.log(response);
})();

//DINAMICOS colocando null en la propiedades de type y fucniones
const answers2 = [
  { type: "text", name: "job", message: " trabajas actualmente?" },
  {
    type: (prev) => (prev == "si" ? "text" : null),
    name: "lugar",
    message: " donde trabajas ?",
  },
];

(async () => {
  const responde = await prompts(answers2);
  console.log(responde);
})();
```
### Output salida estándar

La propiedad *process.stdout* es una interfaz de programacion de aplciaciones incorporadas del módulo de proceso q se utiliza para enviar datos desde nuestro programa.Un flujo de escritura a la salida stámdar.Implementa un método write(). Console.log()improme con process.stdout.write() salida formateada o nueva linea.
al paracer console.log usa internamente .stdout.write y agrega un salto de lina
```js
 console.log = function (d) {
   process.stdout.write(d + '\n');
};
```

Una diferencia con console.log y stdout  es la  ultima solo toma arguemnto de cadena y Buffer(q retorna las peticiones http),y
console.log cualquier tipo de datos de JS

```js
const fs= require("fs");
process.stdout.write("Hola mundo"); 
process.stdout.write("Hola mundo");
//Hola mundoHolaMundo   ->NO  agrega salto de linea
```
*Backpressure o contrapresión*
suele ocurrir cuando el software no puede procesar los datos de entrada a la 
velocidad con la que llega. Si la velocidad de procesamiento de un nodo es lenta y la
velocidad de entrada de datos es mayor q la salida se produce  backpressure.
La backpressure es una técnica q se utiliza para evitar q un software o aplicacion use mas 
recurso de los que hay disponible en una infraestructura
Process.stdout permite detectar la contrapresion y escuchar el evento drain de forma  manual con process.
stdout.write() o automática con stream.pipe(process.stdou)
Si quisieras escribir un archivo enorme en la salida estandar

```js
const content=fs.readFileSync("./test.txt",{encoding:"utf-8"});
console.log(content);
console.log("---------------------------------");

//primero se cargaria todo el contenido del archivo en memoria y luego comenzaria a escribir en stdou con 
//console.log. 
//Pero q pasa su si el archivo es mas grande q la memoria disponible. 
fs.createReadStream("./test.txt").pipe(process.stdout);


```
ahora  el programa solo necesita leer en la memoria fragmentos relativamente pequeños , uno a la vez, a medida  q stdout los solicita:luego cada fragmento puede ser recolectado como basura. lo q hace q su programa use menos menoria

####  CLI Progress package
CLI-Progress es un paquete que proporciona una barra de progreso personalizada para aplicaciones CLI.
```js
const cliProgress=require("cli-progress");
const  colors  =  require ( 'ansi-colors' ) ; //npm i ansi-colors
//creo barra de progreso 
const bar1= new  cliProgress . SingleBar ( { 
    format: 'CLI Progress |'  +  colors . cyan ( '{bar}' )  +  '| {percentage}% || {value}/{total} Chunks || Speed: {speed}' , 
    barCompleteChar : '\u2588' , 
    barIncompleteChar : '\u2591' , 
    hideCursor : true 
} ) ;
//Inicializo el token de carga bar.start(total,inicial,{objeto})
bar1.start(200,0,{speed:"N/A"});
//aumenta el valor actual  en una cantidad especificada y si no se pasa se incrementa en 1
bar1.increment();

//Actulizar el valor del progreso actual
bar1.update(50);// no agrega si no q fija como valor total
bar1.increment();// 51

//Establece el valor de progreso total mientras la barra de progreso está activa.Util para gestionar tareas dinamicas
bar1.setTotal(51);

//detengo barra de progreso
bar1.stop();

```

