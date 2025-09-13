import { execute } from "./main.js";

const n = parseInt(prompt("Enter a number to find factorial"));

let fact = 1;

for (let i = n; i >= 1; i--) {
  fact = fact * i;
}

execute(`Factorial of ${n} is ${fact}`);
