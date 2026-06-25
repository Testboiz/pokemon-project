import { useNavigate } from "react-router"
import { PokedexService } from "../service/PokedexService"
import { useState } from "react";
import type { Pokemon } from "../service";

export default function CaughtPage(){
    const navigate = useNavigate();
    const [pokemons, setPokemons] = useState<Pokemon[]>(PokedexService.getAll());

    if (pokemons.length === 0){
        return <div className="my-auto text-center">No pokemons yet, catch them all!</div>
    }

    return (
        <div className="grid grid-cols-2 gap-4">
            {pokemons.map((pokemon) => {
                return (
                    <div key={pokemon.uniqueId} className="relative border-4 border-black" onClick={() => navigate("/detail/" + pokemon.id)}>
                        <button
                            type="button"
                            className="absolute top-0 right-0 p-2 text-xl"
                            onClick={(e) => {
                                e.stopPropagation();
                                PokedexService.delete(pokemon.uniqueId);
                                setPokemons(PokedexService.getAll())
                            }}
                        >
                            X
                        </button>
                        <div className="flex flex-col p-2">
                            <img className="inline-block w-50 h-50" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.id}.gif`} alt={pokemon.name} />
                            <div className="pt-2">
                                <p className="text-center mb-0">[{pokemon.name}]</p>
                                {pokemon.petName !== "" && (<>
                                    <p className="text-center mt-0">{pokemon.petName}</p>
                                </>)
                                }
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}