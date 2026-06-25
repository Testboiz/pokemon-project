import { useEffect, useState } from "react";
import { getAllPokemons, type DisplayOnlyPokemon, type DisplayOnlyPokemonResponse } from "../service";

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
                setPokemons(response.results.map((pokemon : Omit<DisplayOnlyPokemon, "id">) => {
                    return {
                        "id": Number(pokemon.url.match(/(?<=\/)\d+(?=\/?$)/)[0]),
                        "name": pokemon.name,
                        "url": pokemon.url,
                    }
                }));
                
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