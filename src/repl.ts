import { type State } from './state.js';

export function cleanInput(input: string): string[] {
  const out = input
  .split(" ")
  .filter(word => word.length > 0)
  .map(word => word.toLowerCase());
  return out;
}

export function startREPL(state: State): void {
  const rl = state.readline;
  const commands = state.commands;

  rl.prompt();
  rl.on("line", (input: string) => {
    const words = cleanInput(input);
    const cmd = words[0];
    // do nothing if no command was entered
    if (!cmd) {
      rl.prompt();
      return;
    }
    // call given command
    if (cmd in commands) {
      const command = commands[cmd];
      command.callback(state);
    } else {
      console.log("Unknown command");
    }
    // display the prompt and loop
    rl.prompt();
  });
}

