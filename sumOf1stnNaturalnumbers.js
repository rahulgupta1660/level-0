import { execute } from "./main.js";

let i = 1;
let sum = 0;
while (i <= 5) {
  sum += i;
  i++;
}

execute(sum);
