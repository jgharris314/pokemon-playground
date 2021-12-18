import React, { FC } from "react";
import { IndividualPokemon, PokemonTypes } from "../../types";

interface props {
	individualPokemon: IndividualPokemon;
}

export const DisplayIndividualPokemon: FC<props> = (props: props) => {
	return (
		<div className="flex flex-col w-1/5 rounded-xl justify-center items-center bg-slate-200 shadow-lg p-1">
			<div className="flex flex-row">
				{props.individualPokemon.name.charAt(0).toUpperCase() +
					props.individualPokemon.name.slice(1)}
			</div>
			<div className="flex flex-row w-full justify-center items-center">
				ID: {props.individualPokemon.id}
			</div>
			<div className="flex flex-row w-full justify-center items-center">
				<img
					src={props.individualPokemon.sprites.front_default}
					alt={`${
						props.individualPokemon.name.charAt(0).toUpperCase() +
						props.individualPokemon.name.slice(1)
					} facing frontwards`}
					className="w-1/4 m-auto"
				/>
			</div>
			<div className="flex flex-row w-full items-center justify-center">
				{props.individualPokemon.types.map(
					(type: PokemonTypes, index: number) => {
						return (
							<div
								className={`flex flex-col w-1/4 rounded-xl mx-1 p-0 ${type.type.name} justify-center items-center`}
								key={index}
							>
								{type.type.name.charAt(0).toUpperCase() +
									type.type.name.slice(1)}
							</div>
						);
					}
				)}
			</div>
		</div>
	);
};
