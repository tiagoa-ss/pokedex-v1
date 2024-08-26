import axios from 'axios';
import { PokemonListResponse } from '../types/pokemonListResponse';
import { Pokemon } from '../types/pokemon';

const axiosInstance = axios.create({ baseURL: 'https://pokeapi.co/api/v2' });

export const getPokemonList = async () => {
	return (
		await axiosInstance.get<PokemonListResponse>('pokemon?limit=20&offset=0')
	).data;
};

export const getPokemon = async (id: number) => {
	return (await axiosInstance.get<Pokemon>(`pokemon/${id}`)).data;
};
