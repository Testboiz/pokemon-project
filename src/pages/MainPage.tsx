import { useNavigate } from "react-router"
import usePokemonFetch from "../hooks/usePokemonFetch";

export default function MainPage(){
    const navigate = useNavigate();
    const {pokemons, loading} = usePokemonFetch();
    console.log(pokemons);
    
    if (loading){
        return <div className="my-auto text-center">Loading the pokemons...</div>
    }

    return (
        <div className="grid grid-cols-2 gap-4">
            {pokemons.map(pokemons => {
                return (
                    <div key={"pokemon-" + pokemons.id} className="flex flex-col p-2 border-4 border-black" onClick={() => navigate(`/detail/${pokemons.id}`)}>
                        <img className="inline-block w-50 h-50" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemons.id}.gif`} alt={pokemons.name} />
                        <p className="text-center mt-4 mb-2">{pokemons.name}</p>
                    </div>
                )
            })}
        </div>
    )
}