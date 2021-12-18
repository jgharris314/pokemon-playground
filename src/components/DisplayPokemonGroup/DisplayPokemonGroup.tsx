import React, { FC } from "react";
import { AllPokemonData, Pokemon } from "../../types";

interface props {
	pokemonGroup: AllPokemonData;
	loadIndividualPokemon: (url: string) => void;
	nextPokemonGroup: (url: string) => void;
}

export const DisplayPokemonGroup: FC<props> = (props: props) => {
	return (
		<div>
			<h1 className="text-3xl font-bold underline">Pokemon Playground</h1>
			<div className="box-border h-60  w-48 overflow-y-scroll bg-slate-200 rounded-xl  shadow-lg mx-auto my-2 p-2 md:max-w-2xl poke-list">
				{props.pokemonGroup
					? props.pokemonGroup.results.map(
							(p: Pokemon, index: number) => (
								<li
									onClick={() =>
										props.loadIndividualPokemon(p.url)
									}
									key={index}
									className="pokemon-group hover:bg-slate-600 hover:text-white hover:rounded-xl"
								>
									{p.name.charAt(0).toUpperCase() +
										p.name.slice(1)}
								</li>
							)
					  )
					: null}
			</div>
			<div className="flex flex-row mb-5">
				<button
					onClick={() =>
						props.nextPokemonGroup(
							props.pokemonGroup
								? props.pokemonGroup.previous
								: ""
						)
					}
					className="bg-yellow-500 w-32 m-1 rounded-xl p-1 hover:bg-yellow-300"
				>
					Previous Set
				</button>
				<button
					onClick={() =>
						props.nextPokemonGroup(
							props.pokemonGroup ? props.pokemonGroup.next : ""
						)
					}
					className="bg-green-500 w-32 m-1 rounded-xl p-1 hover:bg-green-300"
				>
					Next Set
				</button>
			</div>
		</div>
	);
};
