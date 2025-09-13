import { execute } from "./main.js";

const a = parseInt(prompt("enter a number"));

for (let i = 1; i <= 10; i++) {
  execute(`${a} X ${i} = ${a * i}`);
}
