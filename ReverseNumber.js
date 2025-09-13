import { execute } from "./main.js";

let n = 123;
let ld;
let rev = 0;

while (n > 0) {
  ld = n % 10;
  rev = rev * 10 + ld;
  n = Math.floor(n / 10);
}

execute(rev);
