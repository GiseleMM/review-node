#!/usr/bin/env node
import axios from "axios";

const url = "https://icanhazdadjoke.com/";

console.log(" ​🤡​ Joker ​🤡​​");

axios
  .get(url, { headers: { Accept: "application/json" } })
  .then((res) => console.log(res.data.joke,"😂"));
