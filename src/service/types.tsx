export type Pokemon = {
    id: number;
    name: string;
    petName: string;
    weight: number;
    height: number;
    abilities: string[];
    moves: string[];
    skills: {
        name: string;
        value: number;
    }[];
    types: string[];
    frontGifUrl: string;
    frontImageUrl: string;
}

export type DisplayOnlyPokemon = {
    id: number;
    name: string;
    url: string;
}