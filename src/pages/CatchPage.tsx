import { useNavigate, useParams } from "react-router"
import useDetailPokemonFetch from "../hooks/useDetailPokemon";
import { useState } from "react";
import { PokedexService } from "../service/PokedexService";

export default function CatchPage(){
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const {pokemon, loading} = useDetailPokemonFetch(id);
    const [runAway, setRunAway] = useState(false);
    const [caught, setCaught] = useState(false);
    const [value, setValue] = useState("");

    function catchLogic(){
      if (Math.random() < 0.5){
        setRunAway(true);
      } else {
        setCaught(true);
      }
    }

    if(loading){
      return <></>
    }

    return (
        <>
          <div className="flex flex-1 flex-col justify-between bg-gray-100 -mx-4 -mt-4 -mb-4 p-4 bg-cover bg-no-repeat bg-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTe_F4yIwOZUfocG4i5NZ__bMqQr5RSRUaTbe_E9dtjAqNSB3T98nlfaf&s=10')]">
            <div className="bg-green-700 text-white p-4 border-black border-4 text-center">
              A wild {pokemon.name} appeared!
            </div>
                <img 
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.id}.gif`} 
                  alt="Bulba"
                  className="w-60 h-60 self-center"    
                  />
  
            <div className="flex justify-around">
              <button className="nes-btn is-error bg-red-500" onClick={() => catchLogic()}>Catch</button>
              <button className="nes-btn is-error bg-red-500" onClick={() => navigate("/detail/" + pokemon.id)}>Run Away</button>
          </div>
        </div>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" hidden={!caught}>
          <div className="bg-white border-black border-4 p-4 text-center">
            <p>You've caught {pokemon.name}!</p>
            <p>Give it a name!</p>
            <input 
              type="text" 
              className="my-2 border-black border-2" 
              placeholder="Pika"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              />
            <button className="flex flex-col w-full bg-red-500 border-2 border-black rounded py-2"
              onClick={() => {
                const namedPokemon = PokedexService.setName(pokemon, value)
                PokedexService.create(namedPokemon);
                setCaught(false);
              }}
            > Submit</button>
          </div>
        </div>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" hidden={!runAway}>
          <div className="bg-white border-black border-4 p-4 text-center">
            <p>The {pokemon.name} run away!</p>
            <button className="flex flex-col w-full bg-red-500 border-2 border-black rounded py-2" onClick={() => setRunAway(false)}> Try Again</button>
          </div>
        </div>
        </>
    )
}