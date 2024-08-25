import { useQueries, useQuery } from '@tanstack/react-query';
import { getPokemon, getPokemonList } from './api';

export function usePokemons() {
	return useQuery({
		queryKey: ['pokemons'],
		queryFn: getPokemonList,
	});
}

export function usePokemon(ids: number[] | undefined) {
	return useQueries({
		queries: (ids ?? [])?.map((id) => {
			return {
				enabled: !!id,
				queryKey: ['pokemon', { id }],
				queryFn: () => getPokemon(id),
			};
		}),
	});
}
