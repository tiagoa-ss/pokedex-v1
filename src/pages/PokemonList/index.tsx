import { Card, Col, Image, Row } from 'react-bootstrap';
import { capitalize } from '../../utils/capitalize';
import { usePokemon, usePokemons } from '../../services/queries';

interface IPokemonList {
	isShiny?: boolean;
}

export const PokemonList = ({ isShiny = false }: IPokemonList) => {
	const pokemonsQuery = usePokemons();

	const pokemonsIds = pokemonsQuery.data?.results.map((pokemon) => {
		return +pokemon.url
			.replace('https://pokeapi.co/api/v2/pokemon/', '')
			.replace('/', '');
	});

	const pokemonQuery = usePokemon(pokemonsIds);
	return (
		<>
			{pokemonsQuery.isLoading || pokemonsQuery.isPending ? (
				'Loading...'
			) : (
				<Row>
					{pokemonQuery.map(({ data }) => (
						<Col xs={3} key={data?.id}>
							<Card className='border mb-2 d-flex align-items-center'>
								<Card.Img
									variant='top'
									src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
										isShiny ? 'shiny/' : ''
									}${data?.id}.png`}
									className='w-75'
								></Card.Img>
								<Card.Title>{data?.name && capitalize(data.name)}</Card.Title>
								<Card.Subtitle className='d-flex gap-1'>
									{data?.types.map((_, i) => (
										<Image
											src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${data.types[
												i
											].type.url
												.replace('https://pokeapi.co/api/v2/type/', '')
												.replace('/', '')}.png`}
											style={{ maxWidth: '100px' }}
											className='py-2'
										/>
									))}
								</Card.Subtitle>
							</Card>
						</Col>
					))}
				</Row>
			)}
		</>
	);
};
