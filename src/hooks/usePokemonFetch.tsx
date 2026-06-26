import { useEffect, useState } from "react";
import { getAllPokemons, type DisplayOnlyPokemon, type DisplayOnlyPokemonResponse } from "../service";
import {  ID_REGEX } from "../service/constants";

export default function usePokemonFetch(page = 0){
    const [loading, setLoading] = useState<boolean>(true);
    const [refetchLoading, setRefetchLoading] = useState<boolean>(false);
    const [pokemons, setPokemons] = useState<DisplayOnlyPokemon[]>([]);
    const [pokemonResponse, setPokemonResponse] = useState<DisplayOnlyPokemonResponse>();

    async function getPokemons() {
        try {
            setRefetchLoading(true);
            const response = await getAllPokemons(page);
            if (response) {
                setPokemonResponse(response);
                const mappedPokemons = (response.results ?? []).map((pokemon: Omit<DisplayOnlyPokemon, "id">) => {
                    const match = pokemon.url.match(ID_REGEX);
                    return {
                        "id": match ? Number(match[0]) : 0,
                        "name": pokemon.name,
                        "url": pokemon.url,
                    };
                });
    
                setPokemons(mappedPokemons);                
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
            setRefetchLoading(false);
        }
    }
    useEffect(() => {
        getPokemons();
    }, [page]);

    return {loading, refetchLoading, pokemons, pokemonResponse}

}