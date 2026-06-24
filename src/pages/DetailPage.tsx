import { useParams } from "react-router";

export function DetailPage(){
    const { id } = useParams<{ id: string }>();

    return  (
        <div className="grid grid-cols-2 gap-2">
            <div className="p-4 border-4 border-black">
                <img 
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
                    alt="Bulba"
                    className="w-48 h-48"    
                />
                <div className="flex flex-col gap-2">
                    <div className="border-2 border-black bg-red-500 rounded-full px-2 text-center">abc</div>
                    <div className="border-2 border-black bg-red-500 rounded-full px-2 text-center">abc</div>
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
                <p>Name : Bulba</p>
                <p>Weight : 69</p>
                <p>Height : 420</p>
            </div>
            <div className="p-4 border-4 border-black">
                <p>Abilities : </p>
                <ul className="list-disc list-inside">
                    <li>eat</li>
                    <li>sleep</li>
                    <li>attack</li>
                </ul>
            </div>
            <div className="p-4 border-4 border-black">
            <p>Skills : </p>
                <ul className="list-disc list-inside">
                    <li>nom</li>
                    <li>zzz</li>
                    <li>grr</li>
                </ul>
            </div>
                <button className="col-span-2 mx-auto  px-4 my-2 rounded-full bg-red-500 border-4 border-black text-center hover:ring-4 ring-red-500 transition">
                    Catch em!
                </button>          
        </div>
    )
}