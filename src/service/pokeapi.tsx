import API from "./api";

export async function getAllPokemons(){
    try {
        const response = await API.get("pokemon?limit=100");
        return response.data.results;
    } catch (error) {
        console.log(error)
    }
}

export async function getPokemonDetail(id: string){
    try {
        const response = await API.get(`pokemon/${id}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}