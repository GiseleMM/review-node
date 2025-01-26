// Importar el paquete commander
const { program } = require("commander");

// Definir una versión de tu aplicación
program.version("1.0.0"); //Esto define la versión de tu aplicación. Puedes mostrarla con un comando --version.

// Definir un comando simple
program
  .command("saludar") //Define un comando llamado saludar
  .description("Muestra un saludo") //Añade una descripción del comando que será mostrada si usas --help.
  .action(() => {
    //Define lo que ocurre cuando ejecutas el comando. En este caso, solo imprime un mensaje en la consola.
    console.log("¡Hola, bienvenido a mi aplicación CLI!");
  });

// Agregar un comando que acepte un argumento
program
  .command("saludar2 <nombre>") // `<nombre>` es un argumento obligatorio
  .description("Saluda a una persona por su nombre")
  .action((nombre) => {
    console.log(`¡Hola, ${nombre}!`);
  });

//Agregar Opciones
//También puedes agregar opciones, que son como "flags" o banderas para modificar el comportamiento de tu comando
program
  .command("saludar3 <nombre>")
  .option("-e, --emoji", "Agergar emoji al saludo") //Opcion
  .description("saluda a una persona por su nombre")
  .action((nombre, option) => {
    const final = option.emoji ? "🖐️!" : "!";
    const saludo = "¡Hola " + nombre + " " + final;
    console.log(saludo);
  });

//subcomandos
//podrias tener un comando usuario u dentro de ese comando, subcomando como crear, listar,etc
//Esos subcomando pueden tener su propia lógica, argumentos y opciones
//deberia tener un archivo en comando principal y en otro los comando en otro archivo

//este podria ser otro archivo
function userCommands(program) {
    // Definir el comando 'usuario' como un contenedor para los subcomandos
    const usuario = program.command('usuario')  // Comando principal 'usuario'
      .description('Gestiona usuarios');
  
    // Subcomando para crear un usuario
    usuario
      .command('crear <nombre>')  // Aquí definimos subcomando 'usuario crear'
      .description('Crea un nuevo usuario')
      .action((nombre) => {
        console.log(`Usuario ${nombre} creado.`);
      });
  
    // Subcomando para listar usuarios
    usuario
      .command('listar')
      .description('Lista todos los usuarios')
      .action(() => {
        console.log('Listado de usuarios...');
      });
  
    // Subcomando para eliminar un usuario
    usuario
      .command('eliminar <nombre>')  // <nombre> es un argumento obligatorio
      .description('Elimina un usuario')
      .action((nombre) => {
        console.log(`Usuario ${nombre} eliminado.`);
      });
  };

//
//module.exports = userCommands; lo exportamos de otro archivo


// Integrar los subcomandos de usuario
userCommands(program);




// Parsear los argumentos de la línea de comandos
program.parse(process.argv);
