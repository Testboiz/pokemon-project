import API from "./api";

export async function getAllPokemons(page = 0){
    const paginationSize = 20;
    try {
        const response = await API.get(`pokemon?offset=${page*paginationSize}&limit=20`);
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