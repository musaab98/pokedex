import { type State } from './state.js'
import { PokeAPI, type ShallowLocations, type Location } from "./pokeapi.js"

export async function commandMap(state: State) {
  console.log("Doing map stuff");
  const poke = new PokeAPI();
  const arr = await poke.fetchLocations("location-area");
}