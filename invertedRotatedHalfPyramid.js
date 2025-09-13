import { execute } from "./main.js";

let n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    execute("\u00A0\u00A0\u00A0");
  }
  for (let j = 1; j <= i; j++) {
    execute("\u00A0*");
  }
  execute("", true);
}
