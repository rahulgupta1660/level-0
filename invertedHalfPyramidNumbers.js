import { execute } from "./main.js";

let n = 5;

for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    execute(j);
  }
  execute("", true);
}
