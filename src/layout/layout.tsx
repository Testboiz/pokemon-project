import { Outlet } from "react-router";

export default function GlobalLayout(){
    return (
        <main className="flex justify-center bg-slate-950 h-screen">
            <div className="layout-container min-w-full max-w-full bg-white  md:min-w-[480px] md:max-w-[480px] flex flex-col">
                <header className="z-50 bg-red-500 sticky top-0 border-b-4 border-black">abc</header>
                <div className="flex-1 flex flex-col p-4 overflow-y-auto">
                    <Outlet />
                </div>
                <footer className="z-50 bg-red-500 sticky bottom-0 border-t-4 border-black">ghi</footer>
            </div>
        </main>
    );
}