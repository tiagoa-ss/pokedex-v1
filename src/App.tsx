import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CustomSwitch } from './components/customSwitch';
import { PokemonList } from './pages/PokemonList';
import { useState } from 'react';

function App() {
	const [isShiny, setIsShiny] = useState(false);

	const toggleShiny = () => {
		setIsShiny(!isShiny);
	};

	return (
		<div className='px-5'>
			<div className='header'>
				<h2>Pokemon Files: </h2>
				<CustomSwitch isShiny={isShiny} toggleShiny={toggleShiny} />
			</div>
			<div>
				<PokemonList isShiny={isShiny} />
			</div>
		</div>
	);
}

export default App;
