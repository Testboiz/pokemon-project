import { useNavigate, useParams } from "react-router";
import useDetailPokemonFetch from "../hooks/useDetailPokemon";

export function DetailPage(){
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const {loading, pokemon} = useDetailPokemonFetch(id);

    if (loading){
        return <></>
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
                    {pokemon.types.map((type, index) => <div key={"ability-" + index} className="border-2 border-black bg-red-500 rounded-full px-2 text-center">{type}</div>)}
                    {/* <div className="border-2 border-black bg-red-500 rounded-full px-2 text-center">abc</div>
                    <div className="border-2 border-black bg-red-500 rounded-full px-2 text-center">abc</div> */}
                </div>
            </div>
            <div className="p-4 border-4 border-black">
                <div className="flex flex-col gap-2">
                    <div className="px-2">
                        <p>HP : 45</p>
                        <div className="w-full bg-gray-200 rounded">
                            <div className="h-2 bg-blue-600 rounded" style={{width:"65%"}}></div>
                        </div>
                    </div>
                    <div className="px-2">
                        <p>HP : 45</p>
                        <div className="w-full bg-gray-200 rounded">
                            <div className="h-2 bg-blue-600 rounded" style={{width:"65%"}}></div>
                        </div>
                    </div>
                    <div className="px-2">
                        <p>HP : 45</p>
                        <div className="w-full bg-gray-200 rounded">
                            <div className="h-2 bg-blue-600 rounded" style={{width:"65%"}}></div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="p-4 border-4 border-black col-span-2">
                <p>Name : {pokemon.name}</p>
                <p>Weight : {pokemon.height}</p>
                <p>Height : {pokemon.weight}</p>
            </div>
            <div className="p-4 border-4 border-black">
                <p>Abilities : </p>
                <ul className="list-disc list-inside">
                    {pokemon.abilities.slice(0,5).map((ability) => <li>{ability}</li>)}
                </ul>
            </div>
            <div className="p-4 border-4 border-black">
            <p>Skills : </p>
                <ul className="list-disc list-inside">
                    {pokemon.moves.slice(0,5).map((move) => <li>{move}</li>)}
                </ul>
            </div>
                <button className="col-span-2 mx-auto  px-4 my-2 rounded-full bg-red-500 border-4 border-black text-center hover:ring-4 ring-red-500 transition"
                        onClick={() => navigate("/catch/" + pokemon.id)}>
                    Catch em!
                </button>          
        </div>
    )
}