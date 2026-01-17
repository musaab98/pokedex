export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const fullURL = `${PokeAPI.baseURL}/${pageURL}`;
    console.log("FETCHING FROM:", fullURL);
    const locations: ShallowLocations[] = [];
    let jsn;
    try {
      const obj = await fetch(fullURL);
      jsn = await obj.json();
    } catch (err) {
      console.log(err);
      throw new Error("500");
    }
    for (let l of jsn.results) {
      locations.push(l.name);
    }
    return locations;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    return {};
  }
}

export type ShallowLocations = {
  // add properties here
};

export type Location = {
  // add properties here
};