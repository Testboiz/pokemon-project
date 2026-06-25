import type { Pokemon } from "./types";

const KEY = "POKEMON";

export const PokedexService = {
    getAll() : Pokemon[]{
      return JSON.parse(localStorage.getItem(KEY) ?? "[]") as Pokemon[];
    },

    convert(rawPokemon: Map<String, any>) : Pokemon{
        return {
            id: rawPokemon['id'],
            name: rawPokemon["name"],
            petName: "",
            weight: rawPokemon["weight"],
            height: rawPokemon["height"],
            abilities: rawPokemon["abilities"].map((ability: any) => ability.ability.name),
            moves: rawPokemon["moves"].map((move: any) => move.move.name),
            stats: rawPokemon["stats"].map((skill: any) => {
              return {
                name: skill["stat"]["name"],
                value: skill["base_stat"],
              }
            }),
            types: rawPokemon["types"].map((type: any) => type.type.name),
            frontGifUrl: rawPokemon["sprites"]["other"]["showdown"]["front_default"],
            frontImageUrl: rawPokemon["sprites"]["other"]["dream_world"]["front_default"],
        }
    },
  
    create(pokemonToAdd: Pokemon) {
      const pokemons = this.getAll();
      pokemons.push(pokemonToAdd);
      localStorage.setItem(KEY, JSON.stringify(pokemons));
    },

    setName(pokemonToSet: Pokemon, name: string){
      pokemonToSet.petName = name;
      return pokemonToSet;
    },
  
    getById(id: number) {
      return this.getAll().find((pokemon: Pokemon) => pokemon.id === id) ?? null;
    },
  
    update(id: number, updatedPokemon: Pokemon) {
      const pokemons = this.getAll();
  
      const index = pokemons.findIndex((pokemon: Pokemon) => pokemon.id === id);
  
      if (index === -1) return null;

      pokemons[index] = {
        ...pokemons[index],
        ...updatedPokemon,
      };
      localStorage.setItem(KEY, JSON.stringify(pokemons));
    },
  
    delete(id: number) {
      const pokemons = this.getAll().filter((pokemon: Pokemon) => pokemon.id !== id);
      localStorage.setItem(KEY, JSON.stringify(pokemons));
    },
  
    clear() {
      localStorage.removeItem(KEY);
    },
  };