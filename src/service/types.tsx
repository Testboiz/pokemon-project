export type Pokemon = {
    id: number;
    uniqueId: string;
    name: string;
    petName: string;
    weight: number;
    height: number;
    abilities: string[];
    moves: string[];
    stats: {
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

export type DisplayOnlyPokemonResponse = {
    count: number;
    next: string;
    previous: string;
    results: DisplayOnlyPokemon[];
}