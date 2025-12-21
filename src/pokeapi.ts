export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    try {
      const obj = fetch(`${PokeAPI.baseURL}/${pageURL}`)
      console.log(obj);
      return obj;
    } catch (err) {
      throw new Error("didn't work");
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    return fetch(`baseURL/location`)
  }
}

export type ShallowLocations = {
  // add properties here
};

export type Location = {
  // add properties here
};