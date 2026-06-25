import { useNavigate } from "react-router"
import { PokedexService } from "../service/PokedexService"
import { useState } from "react";
import type { Pokemon } from "../service";

export default function CaughtPage(){
    const navigate = useNavigate();
    const [pokemons, setPokemons] = useState<Pokemon[]>(PokedexService.getAll());

    return (
        <div className="grid grid-cols-2 gap-4">
            {pokemons.map((pokemon) => {
                return (
                    <div className="relative border-4 border-black" onClick={() => navigate("/detail/" + pokemon.id)}>
                        <button
                            type="button"
                            className="absolute top-0 right-0 p-2 text-xl"
                            onClick={(e) => {
                                e.stopPropagation();
                                PokedexService.delete(pokemon.id);
                                setPokemons(PokedexService.getAll())
                            }}
                        >
                            X
                        </button>
                        <div className="flex flex-col p-2">
                            <img className="inline-block w-50 h-50" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.id}.gif`} alt={pokemon.name} />
                            <p className="text-center mt-4 ">{pokemon.name}</p>
                            <p className="text-center mb-2">{pokemon.petName}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}