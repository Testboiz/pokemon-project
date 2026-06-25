import { useEffect, useState } from "react";
import { getPokemonDetail, type Pokemon } from "../service";
import { PokedexService } from "../service/PokedexService";

export default function useDetailPokemonFetch(id: string){
    const [loading, setLoading] = useState<boolean>(true);
    const [pokemon, setPokemon] = useState<Pokemon>();

    async function getPokemons() {
        try {
            const response = await getPokemonDetail(id);
            if (response) {
                setPokemon(PokedexService.convert(response))
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

    return {loading, pokemon}

}