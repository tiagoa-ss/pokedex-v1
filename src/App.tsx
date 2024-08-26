import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Col, Row, Card, Image } from 'react-bootstrap';

import { usePokemon, usePokemons } from './services/queries';
import { capitalize } from './utils/capitalize';
import { PokemonTypes, PokemonTypesMap } from './types/pokemonTypes.enum';

function App() {
	const pokemonsQuery = usePokemons();

	const pokemonsIds = pokemonsQuery.data?.results.map((pokemon) => {
		return +pokemon.url
			.replace('https://pokeapi.co/api/v2/pokemon/', '')
			.replace('/', '');
	});

	const pokemonQuery = usePokemon(pokemonsIds);

	return (
		<div className='px-5'>
			<h2>Pokemon Files: </h2>
			{pokemonsQuery.isLoading || pokemonsQuery.isPending ? (
				'Loading...'
			) : (
				<Row>
					{pokemonQuery.map(({ data }) => (
						<Col xs={3} key={data?.id}>
							<Card className='border mb-2 d-flex align-items-center'>
								<Card.Img
									variant='top'
									src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data?.id}.png`}
									className='w-75'
								></Card.Img>
								<Card.Title>{data?.name && capitalize(data.name)}</Card.Title>
								<Card.Subtitle className='d-flex gap-1'>
									{data?.types.map((types) => (
										<Image
											src={PokemonTypesMap.get(types.type.name as PokemonTypes)}
											style={{ maxWidth: '25px' }}
											className='py-2'
										/>
									))}
								</Card.Subtitle>
							</Card>
						</Col>
					))}
				</Row>
			)}
		</div>
	);
}

export default App;
