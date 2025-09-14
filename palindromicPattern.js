import { execute } from "./main.js";

const n = 5;

for (let i = 1; i <= n; i++) {
  //spaces
  for (let j = 1; j <= n - i; j++) {
    execute("\u00a0\u00a0\u00a0");
  }
  //numbers
  for (let j = i; j >= 1; j--) {
    execute("\u00a0" + j);
  }
  //numbers
  for (let j = 2; j <= i; j++) {
    execute("\u00a0" + j);
  }
  execute("", true);
}
