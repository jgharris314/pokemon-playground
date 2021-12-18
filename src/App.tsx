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
		<div className="App flex flex-col">
			<h1 className="text-3xl font-bold underline">Pokemon Playground</h1>
			<div className="box-border h-60  w-48 overflow-y-scroll bg-slate-200 rounded-xl  shadow-lg m-5 p-2 md:max-w-2xl poke-list">
				{pokemonGroup
					? pokemonGroup.results.map((p: Pokemon, index: number) => (
							<li
								onClick={() => loadIndividualPokemon(p.url)}
								key={index}
								className="pokemon-group hover:bg-slate-600 hover:text-white hover:rounded-xl"
							>
								{p.name.charAt(0).toUpperCase() +
									p.name.slice(1)}
							</li>
					  ))
					: null}
			</div>
			<div className="flex flex-row">
				<button
					onClick={() =>
						nextPokemonGroup(
							pokemonGroup ? pokemonGroup.previous : ""
						)
					}
					className="bg-yellow-500 w-32 m-5 rounded-xl p-1 hover:bg-yellow-300"
				>
					Previous Set
				</button>
				<button
					onClick={() =>
						nextPokemonGroup(pokemonGroup ? pokemonGroup.next : "")
					}
					className="bg-green-500 w-32 m-5 rounded-xl p-1 hover:bg-green-300"
				>
					Next Set
				</button>
			</div>
			{individualPokemon && (
				<div className="flex flex-col w-1/4 rounded-xl justify-center items-center bg-slate-200 shadow-lg p-1">
					<div className="flex flex-row">
						{individualPokemon.name.charAt(0).toUpperCase() +
							individualPokemon.name.slice(1)}
					</div>
					<div className="flex flex-row w-full justify-center items-center">
						ID: {individualPokemon.id}
					</div>
					<div className="flex flex-row w-full justify-center items-center">
						<img
							src={individualPokemon.sprites.front_default}
							alt={`${
								individualPokemon.name.charAt(0).toUpperCase() +
								individualPokemon.name.slice(1)
							} facing frontwards`}
							className="w-1/2 m-auto"
						/>
					</div>
					<div className="flex flex-row w-full items-center justify-center">
						{individualPokemon.types.map(
							(type: PokemonTypes, index: number) => {
								return (
									<div
										className={`flex flex-col w-1/4 rounded-xl mx-1 p-0 ${type.type.name}`}
										key={index}
									>
										{type.type.name
											.charAt(0)
											.toUpperCase() +
											type.type.name.slice(1)}
									</div>
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
