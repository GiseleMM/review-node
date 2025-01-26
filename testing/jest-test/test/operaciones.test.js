const { suma, resta } = require("../operaciones.js");
// import {suma ,resta} from "../operaciones.mjs";
// test("sumo 1+2 igual a3",()=>{
//     expect(suma(1,2)).toBe(3)
// });
// test("resto 1-2 igual a -1",()=>{
//     expect(resta(1,2)).toBe(-1)
// });

describe("set de operaciones test", () => {
  test("sumo 1+2 es igual a 3", () => expect(suma(1, 2)).toBe(3));
  test("resto 1-2 no es igual a 3", () => expect(resta(1, 2)).not.toBe(3));
});

//matchers
describe("set matchers ", () => {
  test("toBe", () => expect(3).toBe(3)); // tobe(valor)compara si un valor es identico al esperado
  const ob1 = { name: "alice", age: 2 };
  const ob2 = { name: "alice", age: 2 };
  test("toEqual", () => expect(ob1).toEqual(ob2)); // toEqual(valor)compara si un valor es igual al esperado en teminos de propiedaes y valorees de objetos o arrays

  const valor = null;
  test("toBeNull", () => expect(valor).toBeNull()); // toBeNull()comprueba si el valor es null

  const valor2 = 1;
  test("toBeDefined", () => expect(valor2).toBeDefined()); // toBeDefined()comprueba si el valor esta definido (no es undefined)

  test("toBeTruthy", () => expect("Hola").toBeTruthy()); // toBeTruthy()comprueba si el valor es truthy (evaluado a verdadero en contento booleano)

  test("toBeFalsy", () => expect(0).toBeFalsy()); // toBeTruthy()comprueba si el valor es falsy (evaluado a verdadero en contento booleano)

  test("toBeGreaterThan", () => expect(10).toBeGreaterThan(5)); // toBeGreater(valor)comprueba si el valor es mayor q el valor esperado

  test("toContain", () => expect([1, 2, 3, 4]).toContain(4)); // toContain(array o string)comprueba si un array o string contiene un elemento especifico

  test("toHaveLength", () => expect("hola").toHaveLength(4)); // toContain(array o string)comprueba si un array o string tiene la longitud indicada

  const regex = /hola/i;
  test("toMatch", () => expect("hola mundo").toMatch(regex)); // comprueba si un valor coincide con un patrón de expresion regular

  const throwError = () => {
    throw new Error("error de prueba");
  };
  test("toThrow", () => expect(throwError).toThrow("error de prueba")); // comprueba si una funcion arroja una excepcion
  class Mascota {
    constructor(nombre)
    {
        this.nombre=nombre;
    }
  }
  const perro=new Mascota("Gordo");
  test("toBeInstanceOf", () => expect(perro).toBeInstanceOf(Mascota)); //comprueba si un valor es una instancia de una clase especifica
});
