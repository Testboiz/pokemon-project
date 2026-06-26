import { useNavigate, useOutletContext } from "react-router"
import usePokemonFetch from "../hooks/usePokemonFetch";
import { useEffect, useRef, useState } from "react";

export default function MainPage(){
    const navigate = useNavigate();
    const [page, setPage] = useState<number>(0);
    const {pokemons, pokemonResponse, loading, refetchLoading} = usePokemonFetch(page);
    const [hasPrev, setHasPrev] = useState<boolean>(false);
    const [hasNext, setHasNext] = useState<boolean>(false);

    const didClickNext = useRef(false);

    useEffect(() => {
        if (!loading && pokemonResponse) {
          setHasNext(pokemonResponse.next !== null);
          setHasPrev(pokemonResponse.previous !== null);
        }
      }, [loading, pokemonResponse]);

    const { scrollToTop } = useOutletContext<{ scrollToTop: () => void }>();

    useEffect(() => {
        if (!refetchLoading && didClickNext.current) {
          scrollToTop();
          didClickNext.current = false; 
        }
      }, [refetchLoading, scrollToTop]);

    if (loading){
        return <div className="my-auto text-center">Loading the pokemons...</div>
    }

    return (
        <div className="grid grid-cols-2 gap-4">
            {pokemons.map(pokemons => {
                return (
                    <div key={`pokemon-${pokemons.id}`} className="flex flex-col p-2 border-4 border-black" onClick={() => navigate(`/detail/${pokemons.id}`)}>
                        <img className="inline-block w-50 h-50" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemons.id}.gif`} alt={pokemons.name} />
                        <p className="text-center mt-4 mb-2">{pokemons.name}</p>
                    </div>
                )
            })}
            {hasPrev ? (
                <button className="nes-btn is-error bg-red-500" onClick={() => {
                    didClickNext.current = true;
                    setPage(page-1);
                }}> &lt;  </button>
            ) : (
                <button className="nes-btn is-disabled" disabled> &lt;  </button>
            ) }
            {hasNext ? (
                <button className="nes-btn is-error bg-red-500" onClick={() => {
                    didClickNext.current = true;
                    setPage(page+1);
                }}> &gt;  </button>
            ) : (
                <button className="nes-btn is-disabled" disabled> &gt;  </button>
            ) }
            </div>
    )
}