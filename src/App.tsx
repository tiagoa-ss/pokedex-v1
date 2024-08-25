import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Col, Row, Card } from 'react-bootstrap';

import { usePokemon, usePokemons } from './services/queries';
import { capitalize } from './utils/capitalizee';

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
						<Col xs={3} key={data?.id} className='card'>
							<Card className='border mb-2'>
								<Card.Img
									variant='top'
									src={data?.sprites.front_default}
									className='w-auto'
								></Card.Img>
								<Card.Title className='d-flex justify-content-center'>
									{data?.name && capitalize(data.name)}
								</Card.Title>
							</Card>
						</Col>
					))}
				</Row>
			)}
		</div>
	);
}

export default App;
