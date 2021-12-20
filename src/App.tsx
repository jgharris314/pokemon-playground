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
import { DisplayTeam } from "./components/DisplayTeam/DisplayTeam";
function App() {
	const [pokemonGroup, setPokemonGroup] = useState<AllPokemonData>();
	const [individualPokemon, setIndividualPokemon] =
		useState<IndividualPokemon>();
	const [pokemonTeam, setPokemonTeam] = useState<Array<IndividualPokemon>>(
		[]
	);

	useEffect(() => {
		const abortController = new AbortController();
		listAllPokemon(abortController.signal)
			.then(setPokemonGroup)

			.catch((error) => error);
	}, []);

	useEffect(() => {}, [pokemonTeam]);

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

	function handleAddToTeam(pokemonToAdd: IndividualPokemon): void {
		if (pokemonTeam.length < 6) {
			setPokemonTeam([...pokemonTeam, pokemonToAdd]);
		}
	}

	function handleRemoveFromTeam(pokemonToRemove: IndividualPokemon): void {
		setPokemonTeam([
			...pokemonTeam.filter((pokemon) => {
				return pokemon !== pokemonToRemove;
			}),
		]);
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
				<>
					<DisplayIndividualPokemon
						individualPokemon={individualPokemon}
						status="normal"
						handleRemoveFromTeam={handleRemoveFromTeam}
					/>
					<button onClick={() => handleAddToTeam(individualPokemon)}>
						Add to Team
					</button>
				</>
			)}
			{pokemonTeam && (
				<DisplayTeam
					pokemonTeam={pokemonTeam}
					setPokemonTeam={setPokemonTeam}
					handleRemoveFromTeam={handleRemoveFromTeam}
				/>
			)}
		</div>
	);
}

export default App;
