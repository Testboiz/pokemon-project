import { useNavigate, useParams } from "react-router";
import useDetailPokemonFetch from "../hooks/useDetailPokemon";

export function DetailPage(){
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const {loading, pokemon} = useDetailPokemonFetch(id);

    if (loading){
        return <div className="my-auto text-center">Fetching pokemon data...</div>
    }

    if (pokemon === null || pokemon === undefined){
        return <div className="my-auto text-center">You got teleported to an unknown wasteland, Click the Pokedex to return</div>
    }

    return  (
        <div className="grid grid-cols-2 gap-2">
            <div className="p-4 border-4 border-black">
                <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} 
                    alt={pokemon.name}
                    className="w-48 h-48"    
                />
                <div className="flex flex-col gap-2">
                    {pokemon.types.map((type, index) => <div key={`stats-${index}`} className=" bg-red-500 px-2 py-1 text-center nes-container is-rounded text-white [border-image:none]">{type}</div>)}
                </div>
            </div>
            <div className="p-4 border-4 border-black">
                <div className="flex flex-col gap-2 px-2">
                    {pokemon.stats.map((stat, index) => (
                        <div key={`stat-${index}`}>
                            <p className="my-1">{stat.name} :</p>
                            <progress className="nes-progress is-primary h-4 m-0" value={stat.value} max="100"></progress>
                            <p className="my-1">{stat.value}</p>
                        </div>
                    ))}
                </div>

            </div>
            <div className="px-4 py-2 border-4 border-black col-span-2">
                <p>Name &nbsp;&nbsp;: {pokemon.name}</p>
                <p>Weight : {pokemon.height/10} m</p>
                <p className="my-0">Height : {pokemon.weight/10} kg</p>
            </div>
            <div className="p-4 border-4 border-black">
                <p>Abilities : </p>
                <ul className="list-disc list-inside">
                    {pokemon.abilities.slice(0,5).map((ability, index) => <li key={`ability-${index}`}>{ability}</li>)}
                </ul>
            </div>
            <div className="p-4 border-4 border-black">
            <p>Skills : </p>
                <ul className="list-disc list-inside">
                    {pokemon.moves.slice(0,5).map((move,index) => <li key={`move-${index}`}>{move}</li>)}
                </ul>
            </div>
                <button className="nes-btn is-error bg-red-500 col-span-2"
                        onClick={() => navigate(`/catch/${pokemon.id}`)}>
                    Catch em!
                </button>          
        </div>
    )
}