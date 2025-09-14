import { execute } from "./main.js";

const n = 5;

for (let i = 1; i <= n; i++) {
  //spaces
  for (let j = 1; j <= n - i; j++) {
    execute("\u00a0\u00a0\u00a0\u00a0");
  }
  //stars
  for (let j = 1; j <= 2 * i - 1; j++) {
    execute("\u00a0\u00a0*");
  }
  execute("", true);
}
for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= n - i; j++) {
    execute("\u00a0\u00a0\u00a0\u00a0");
  }
  //spaces
  for (let j = 1; j <= 2 * i - 1; j++) {
    execute("\u00a0\u00a0*");
  }
  //stars
  execute("", true);
}
