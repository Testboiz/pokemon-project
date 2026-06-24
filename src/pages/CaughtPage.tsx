export default function CaughtPage(){
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="relative border-4 border-black">
                <button
                    type="button"
                    className="absolute top-2 right-2"
                >
                    ×
                </button>
            <div className="flex flex-col p-2">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif" alt="Bulba" />
                <p className="text-center mt-4 ">Bulbasaur</p>
                <p className="text-center mb-2">My Bulba 2</p>
            </div>
            </div>
            <div className="relative border-4 border-black">
                <button
                    type="button"
                    className="absolute top-2 right-2"
                >
                    ×
                </button>
                <div className="flex flex-col p-2">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif" alt="Bulba" />
                <p className="text-center mt-4 ">Bulbasaur</p>
                <p className="text-center mb-2">My Bulba 2</p>
            </div>
            </div>
        </div>
    )
}