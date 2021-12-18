import React, { useEffect, useState } from "react";
import {
	listAllPokemon,
	listIndividualPokemon,
	listNextPokemon,
} from "./utils/api";
import "./App.css";
import { AllPokemonData, IndividualPokemon } from "./types";
import { DisplayPokemonGroup } from "./components/DisplayPokemonGroup/DisplayPokemonGroup";
import { DisplayIndividualPokemon } from "./components/DisplayIndividualPokemon/DisplayIndividualPokemon";
function App() {
	const [pokemonGroup, setPokemonGroup] = useState<AllPokemonData>();
	const [individualPokemon, setIndividualPokemon] =
		useState<IndividualPokemon>();

	useEffect(() => {
		const abortController = new AbortController();
		listAllPokemon(abortController.signal)
			.then(setPokemonGroup)

			.catch((error) => error);
	}, []);

	function nextPokemonGroup(url: string): void {
		const abortController = new AbortController();
		listNextPokemon(abortController.signal, url)
			.then(setPokemonGroup)
			.catch((error) => error);
	}

	function loadIndividualPokemon(url: string): void {
		const abortController = new AbortController();

		listIndividualPokemon(abortController.signal, url)
			.then(setIndividualPokemon)
			.catch((error) => error);
	}

	return (
		<div className="flex flex-col justify-center items-center">
			{pokemonGroup && (
				<DisplayPokemonGroup
					pokemonGroup={pokemonGroup}
					loadIndividualPokemon={loadIndividualPokemon}
					nextPokemonGroup={nextPokemonGroup}
				/>
			)}
			{individualPokemon && (
				<DisplayIndividualPokemon
					individualPokemon={individualPokemon}
				/>
			)}
		</div>
	);
}

export default App;
