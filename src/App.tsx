import React, { useEffect, useState } from "react";
import {
	listAllPokemon,
	listIndividualPokemon,
	listNextPokemon,
} from "./utils/api";
import "./App.css";
import {
	Pokemon,
	AllPokemonData,
	IndividualPokemon,
	PokemonTypes,
	PokemonType,
} from "./types";

function App() {
	const [pokemonGroup, setPokemonGroup] = useState<AllPokemonData>();
	const [rerender, setRerender] = useState<Boolean>(false);

	const [individualPokemon, setIndividualPokemon] =
		useState<IndividualPokemon>();

	useEffect(() => {
		const abortController = new AbortController();
		listAllPokemon(abortController.signal)
			.then(setPokemonGroup)

			.catch((error) => error);
	}, [rerender]);

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
		<div className="App">
			<h1 className="text-3xl font-bold underline">Pokemon</h1>
			<div className="box-border h-52 w-32 bg-slate-200 rounded-xl  shadow-lg overflow-hidden m-5 p-2 hover:overflow-scroll md:max-w-2xl poke-list">
				{pokemonGroup
					? pokemonGroup.results.map((p: Pokemon, index: number) => (
							<li
								onClick={() => loadIndividualPokemon(p.url)}
								key={index}
								className="pokemon-group hover:bg-slate-600 hover:text-white"
							>
								{p.name.charAt(0).toUpperCase() +
									p.name.slice(1)}
							</li>
					  ))
					: null}
			</div>
			<button
				onClick={() =>
					nextPokemonGroup(pokemonGroup ? pokemonGroup.next : "")
				}
			>
				Next Set
			</button>
			<button
				onClick={() =>
					nextPokemonGroup(pokemonGroup ? pokemonGroup.previous : "")
				}
			>
				Previous Set
			</button>
			{individualPokemon && (
				<div>
					<div>
						{individualPokemon.name.charAt(0).toUpperCase() +
							individualPokemon.name.slice(1)}
					</div>
					<div>{individualPokemon.id}</div>
					<img
						src={individualPokemon.sprites.front_default}
						alt={`${
							individualPokemon.name.charAt(0).toUpperCase() +
							individualPokemon.name.slice(1)
						} facing frontwards`}
					/>
					<div>
						{individualPokemon.types.map(
							(type: PokemonTypes, index: number) => {
								return (
									<li
										className={`type ${type.type.name}`}
										key={index}
									>
										{type.type.name
											.charAt(0)
											.toUpperCase() +
											type.type.name.slice(1)}
									</li>
								);
							}
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
