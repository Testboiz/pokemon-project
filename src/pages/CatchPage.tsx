export default function CatchPage(){
    return (
        <div className="flex flex-1 flex-col justify-between bg-gray-100 -mx-4 -mt-4 -mb-4 p-4 bg-cover bg-no-repeat bg-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTe_F4yIwOZUfocG4i5NZ__bMqQr5RSRUaTbe_E9dtjAqNSB3T98nlfaf&s=10')]">
          <div className="bg-green-700 text-white p-4 border-black border-4 text-center">
            A wild Bulbasaur appeared!
          </div>

              <img 
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif" 
                        alt="Bulba"
                        className="w-60 h-60 self-center"    
                />

          <div className="flex justify-around">
            <div className="bg-red-500 border-4 border-black rounded p-4">Catch</div>
            <div className="bg-red-500 border-4 border-black rounded p-4">Run Away</div>
        </div>
        </div>
    )
}