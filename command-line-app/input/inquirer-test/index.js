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
    { name: "🐴", value: "caballo"},
    { name: "🐣", value: "pollito" },
    { name: "🐍", value: "serpiente" }
  ],
});
console.log(answer8);// da el numero elegido
