const { spawn } = require('child_process');

//Para que el código funcione en un entorno de Windows, debes usar comandos que sean compatibles con tu sistema operativo. 
// Cambia 'bash' por 'cmd' para usar el shell de Windows.
const s = spawn('cmd', { shell: true });

// Envía comandos compatibles con Windows.
s.stdin.write('cd .. && dir\n'); // Reemplaza `ls` con `dir`.
s.stdin.end(); // Finaliza la entrada estándar.

// Maneja el evento 'exit'.
s.once('exit', (code) => {
  console.log(`Process exited with code: ${code}`);
});

// Captura la salida estándar.
s.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});


//Eventos de stdout y stderr: Capturamos las salidas estándar y de error para inspeccionar el resultado o mensajes de error.
