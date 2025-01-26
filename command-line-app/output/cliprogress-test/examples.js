const cliProgress = require("cli-progress");

function example1(onComplete) {
  console.log("Example 1 con standar configuracion");
  //creo progress bar
  const b1 = new cliProgress.Bar();
  b1.start(200, 0);

  //lineal incremento
  let value = 0;
  const timer = setInterval(function () {
    //incremento valor
    value++;
    //actulizo valor de barra
    b1.update(value);
    //seteo el limite
    if (value >= b1.getTotal()) {
      //paro en interval
      clearInterval(timer);
      b1.stop();

      //ejecuto la callback
      onComplete.apply(this);
    }
  }, 10);
}

// example1(() => console.log("Ejemplo 1 teminado"));
/*
¿Por qué usar apply(this)?
La razón por la que se usa .apply(this) podría ser para garantizar que la función onComplete tenga el mismo contexto que la función Example2, lo que puede ser importante si dentro de onComplete se accede a propiedades o métodos de Example2. Si no se usara .apply(this), el contexto de onComplete sería el global (en Node.js, podría ser el objeto global), lo que podría llevar a que se pierdan referencias a los elementos internos de Example2.

Ejemplo:
Imagina que onComplete se ve algo así:

js
Copiar código
function onComplete() {
  console.log(this);
}
Si onComplete se ejecuta con .apply(this), this se referiría al contexto de Example2. Sin embargo, si se invocara directamente como onComplete(), this podría no estar definido correctamente (dependiendo del modo de invocación).
*/

function example2(onComplete) {
  console.log("Example 2 Custom configuracion");
  //creo nueva barra  configuro usando valores por default
  const b2 = new cliProgress.Bar({
    barCompleteChar: "#",
    barIncompleteChar: "_",
    format: " |- Current upload progress: {percentage}%" + " - " + "||{bar}||",
    fps: 5,
    stream: process.stdout,
    barsize: 30,
  });

  b2.start(100, 0);

  const timer = setInterval(function () {
    b2.increment();
    if (b2.value >= b2.getTotal()) {
      clearInterval(timer);
      b2.stop();
      onComplete.apply(this);
    }
  }, 50);
}
//example2(() => console.log("Ejemplo 2 teminado"));

function example3(onComplete) {
  console.log("Example 3 Stop the bar automatically");
  //creo nueva barra  configuro usando valores por default
  const b3 = new cliProgress.Bar({
    stopOnComplete: true,
    clearOnComplete: true,
  });

  b3.start(100, 0);
  let value = 0;

  const timer = setInterval(function () {
    value++;
    b3.update(value);
    if (b3.value >= b3.getTotal()) {
      clearInterval(timer);
      // b3.stop(); NO necesito
      onComplete.apply(this);
    }
  }, 50);
}
//example3(() => console.log("Ejemplo 3 teminado"));

function example4(onComplete) {
  console.log("Example 3 Start Zero");
  const b4 = new cliProgress.Bar();
  b4.start(100, 0);
  setTimeout(function () {
    b4.stop();
    onComplete.apply(this);
  }, 1000);
}
//   example4(() => console.log("Ejemplo 4 teminado"));

function example5(onComplete) {
  console.log("Example 5 custom payload");
  //creo nueva barra  configuro usando valores por default
  const b5 = new cliProgress.Bar({
    format:
      "prossess [{bar}] {percentage}% | ETA: {eta}s | {value}/{total} | Speed: {speed}",
  });

  b5.start(200, 0, { speed: "N/A" });

  let value = 0;
  const speedData = [];

  const timer = setInterval(function () {
    value++;
    speedData.push(Math.random() * 2 + 5);
    const currentSpeedData = speedData.slice(-10);
    b5.update(value, {
      speed:
        (
          currentSpeedData.reduce(function (a, b) {
            return a + b;
          }, 0) / currentSpeedData.length
        ).toFixed(2) + "mb/s",
    });
    if (b5.value >= b5.getTotal()) {
      clearInterval(timer);
      b5.stop();
      onComplete.apply(this);
    }
  }, 20);
}
//  example5(() => console.log("Ejemplo 5 teminado"));

function example6(onComplete) {
  console.log("Example  6  Set dinamically the total progress");

  //creo nueva barra  configuro usando valores por default
  const b6 = new cliProgress.Bar({}, cliProgress.Presets.shades_grey);
  b6.start(200, 0);

  let value = 0;

  const timer = setInterval(function () {
    value++;

    b6.update(value);
    if (value > 1500) {
      b6.setTotal(3000);
    } else if (value > 150) {
      b6.setTotal(2000);
    }

    if (value >= b6.getTotal()) {
      clearInterval(timer);
      b6.stop();
      onComplete.apply(this);
    }
  }, 15);
}
example6(() => console.log("Ejemplo 6 teminado"));
