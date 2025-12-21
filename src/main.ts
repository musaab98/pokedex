// repl.js actually refers to repl.ts
import { startREPL } from "./repl.js";
import { initState, type State } from "./state.js"

function main() {
  const s: State = initState();
  startREPL(s);
}

main();