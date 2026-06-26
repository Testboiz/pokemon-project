import { useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

export default function GlobalLayout(){
    const navigate = useNavigate();
    const location = useLocation();

    const isHomePage = location.pathname === "/";
    const isCaughtPage = location.pathname === "/caught"

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollToTop = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = 0;
        }
    };
    return (
        <main className="flex justify-center items-center bg-slate-950 h-screen select-none overflow-hidden">
            <div className="layout-container w-full h-full bg-white  md:min-w-[480px] md:max-w-[480px] flex flex-col">
                <header className="z-50 bg-red-500 sticky top-0 border-b-4 border-black text-center p-4 text-white">
                    <div onClick={() => navigate("/")} className="w-8 h-8 overflow-visible mx-auto">
                        <i className="nes-pokeball scale-50 origin-top-left"></i>
                    </div>
                </header>
                <div ref={scrollContainerRef} className="flex-1 flex flex-col p-4 overflow-y-auto">
                    <Outlet context={{ scrollToTop }} />
                </div>
                <footer className="z-50 bg-red-500 sticky bottom-0 border-t-4 border-black pt-2 flex flex-col items-center justify-around text-white">
                    <div className="flex flex-row w-full justify-around">
                        <div className="flex flex-col" onClick={() => navigate("/")}>
                            <div className="w-12 h-12 overflow-visible mx-auto">
                                <i className="nes-bulbasaur scale-50 origin-top-left"></i>
                            </div>
                            {isHomePage ? <p className="underline decoration-3">Pokedex</p> : <p>Pokedex</p>}
                        </div>
                        <div className="flex flex-col" onClick={() => navigate("/caught")}>
                            <div className="w-12 h-12 overflow-visible mx-auto">
                                <i className="nes-charmander scale-50 origin-top-left"></i>
                            </div>
                            {isCaughtPage? <p className="underline decoration-3">Your Pokemons</p> : <p>Your Pokemons</p>}
                        </div>
                    </div>
                    <p>Copyright &copy; 2026 Testboiz</p>
                </footer>
            </div>
        </main>
    );
}