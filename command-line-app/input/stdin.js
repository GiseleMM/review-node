const {stdin,stdout}= require("node:process");

stdin.pipe(stdout);// valos a obtener informacion de la terminal y luego mostrarla en la pantalla con stdout
//ahora ejecutamos en la terminal el archivo node stdin.js y a caundo escribimos y damos enter aparece lo q escribimos. Si quiero salir control +C
