import { type State } from './state.js';
import { getCommands } from './commands.js';

export function commandHelp(state: State): void {
  console.log("Welcome to the Pokedex!");
  console.log("Usage:\n");
  const commands = state.commands;
  for (let c in commands) {
    console.log(`${c}: ${commands[c].description}`);
  }
}
