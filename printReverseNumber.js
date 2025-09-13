import { execute } from "./main.js";

let a = 123;

while (a > 0) {
  let lastDigit = a % 10;
  execute(`${lastDigit} `);
  a = Math.floor(a / 10);
}
