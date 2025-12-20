import { createInterface } from 'node:readline';
import {commandExit} from './command_exit.js'

export function cleanInput(input: string): string[] {
  const out = input
  .split(" ")
  .filter(word => word.length > 0)
  .map(word => word.toLowerCase());
  return out;
}

export function startREPL(): void {
  // Create REPL Interface
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > "
  });
  // Initiate proompting
  rl.prompt();
  rl.on('line', (input: string) => {
    const words = cleanInput(input);
    const commands = getCommands();
    // do nothing
    if (words.length === 0) {
      // rl.prompt();
      // return;
    }
    // call command
    else if (words[0] in commands) {
      commands[words[0]].callback(commands);
    }
    else {
      console.log("Unknown command");
    }
    rl.prompt();
  });
}

export type CLICommand = {
  name: string;
  description: string;
  callback: (commands: Record<string, CLICommand>) => void;
};

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
  };
}

export function commandHelp(): void {
  console.log("Welcome to the Pokedex!");
  console.log("Usage:\n");
  const commands = getCommands();
  for (let c in commands) {
    console.log(`${c}: ${commands[c].description}`);
  }
}