import { execute } from "./main.js";

const n = parseInt(prompt("Enter the number"));
let count = 0;

for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    count++;
  }
}

count === 2 ? execute("prime number") : execute("not a prime number");
