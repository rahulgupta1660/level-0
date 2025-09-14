import { execute } from "./main.js";

const n = 5;

for (let i = 1; i <= n; i++) {
  // spaces
  for (let j = 1; j <= n - i; j++) {
    execute("\u00a0\u00a0\u00a0\u00a0\u00a0");
  }
  //stars
  for (let j = 1; j <= n; j++) {
    if (i == 1 || j == n || i == n || j == 1) {
      execute("\u00a0\u00a0\u00a0*");
    } else {
      execute("\u00a0\u00a0\u00a0\u00a0\u00a0");
    }
  }
  execute("", true);
}
