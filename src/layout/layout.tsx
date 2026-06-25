import { Outlet, useNavigate } from "react-router";

export default function GlobalLayout(){
    const navigate = useNavigate();
    return (
        <main className="flex justify-center bg-slate-950 h-screen select-none">
            <div className="layout-container min-w-full max-w-full bg-white  md:min-w-[480px] md:max-w-[480px] flex flex-col">
                <header className="z-50 bg-red-500 sticky top-0 border-b-4 border-black text-center p-4 text-white">
                    Mini Pokemon
                </header>
                <div className="flex-1 flex flex-col p-4 overflow-y-auto">
                    <Outlet />
                </div>
                <footer className="z-50 bg-red-500 sticky bottom-0 border-t-4 border-black py-4 flex justify-around text-white">
                    <div onClick={() => navigate("/")}>Pokedex</div>
                    <div onClick={() => navigate("/caught")}>Your Pokemons</div>
                </footer>
            </div>
        </main>
    );
}