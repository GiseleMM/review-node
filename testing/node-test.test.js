const { test, describe, it } = require("node:test");
const assert = require("node:assert/strict");

// test("Ejemplo de un test", () => {
//   //contenido del test
// });
describe("contenedor de tests", () => {
  it("test 1", () => {
    //escribir assestor , estos los podemos importar desde el apquete de node:assert/strict
    const expected = 3;
    const metodo1 = () => 3; //funcionalidad a probar (deberia estar definida en otro archivo eimportarla)
    const actual = metodo1();

    assert.equal(expected, actual);
  });
  it("test 2", () => {
    class Cat{
        constructor(name)
        {
            this.name=name;
        }
        eat(comida)
        {
            if(comida=="fish") throw new Error("michi no come pezcado");

        }
    }

    const g=new Cat("Garfield");
    assert.doesNotThrow(()=>g.eat("suhi"));
  });

  it("test 3", () => {
    class Cat{
        constructor(name)
        {
            this.name=name;
        }
        eat(comida)
        {
            if(comida=="fish") throw new Error("michi no come pezcado");

        }
    }

    const g=new Cat("Garfield");
    assert.throws(()=>g.eat("fish"));
  });
});
