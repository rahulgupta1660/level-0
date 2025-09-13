import { execute } from "./main.js";

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    if (i == j || (i + j) % 2 == 0) {
      execute("1 ");
    } else {
      execute("0 ");
    }
  }
  execute("", true);
}
