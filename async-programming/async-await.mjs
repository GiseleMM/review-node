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
//los navegadore modernos await funciona dentro de un módulo si no usamos modulos es necesario envolver en un funcion asincronica anónima autoinvocada


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
eF3().catch(e=>console.log(e.message)); //catch de promsa
try {
  console.log(await eF3());
} catch (error) {
  console.log(error.message);
}
