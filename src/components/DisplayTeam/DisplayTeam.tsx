import React, { useState, FC } from "react";
import { IndividualPokemon } from "../../types";
import { DisplayIndividualPokemon } from "../DisplayIndividualPokemon/DisplayIndividualPokemon";

interface props {
	pokemonTeam: Array<IndividualPokemon>;
	setPokemonTeam: Function;
	handleRemoveFromTeam: Function;
}

export const DisplayTeam: FC<props> = (props: props) => {
	return (
		<div className="flex flex-wrap w-3/4">
			{props.pokemonTeam.map((pokemon, index) => {
				return (
					<div key={index} className="flex flex-col w-1/3">
						<DisplayIndividualPokemon
							individualPokemon={pokemon}
							status="team"
							handleRemoveFromTeam={props.handleRemoveFromTeam}
						/>
					</div>
				);
			})}
		</div>
	);
};
