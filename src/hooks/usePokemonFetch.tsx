import { useEffect, useState } from "react";
import { getAllPokemons, type DisplayOnlyPokemon } from "../service";

export default function usePokemonFetch(){
    const [loading, setLoading] = useState<boolean>(true);
    const [pokemons, setPokemons] = useState<DisplayOnlyPokemon[]>([]);

    async function getPokemons() {
        try {
            const response = await getAllPokemons();
            if (response) {
                setPokemons(response.map((pokemon : Omit<DisplayOnlyPokemon,"id">) => {
                    return {
                        "id": pokemon.url.match(/(?<=\/)\d+(?=\/?$)/)[0],
                        "name": pokemon.name,
                        "url": pokemon.url,
                    }
                }));
                
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getPokemons();
    }, []);

    return {loading, pokemons}

}