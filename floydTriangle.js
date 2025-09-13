import { execute } from "./main.js";

let n = 1;

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    execute(`${n}\u00A0\u00A0`);
    n++;
  }
  execute("", true);
}
