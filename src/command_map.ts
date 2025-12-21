import { type State } from './state.js'
import { PokeAPI, type ShallowLocations, type Location } from "./pokeapi.js"

export async function commandMap(state: State) {
  console.log("Doing map stuff");
  const obj = await fetch(`https://pokeapi.co/api/v2/location-area/1`);
  // const jsn = JSON.stringify(obj);
  //@ts-ignore
  for (let i in obj.body) {
    console.log(i);
  }
  console.log(await obj.body?.values().next());
}