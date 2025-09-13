import { execute } from "./main.js";

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    execute("* ");
  }
  execute("", true);
}
