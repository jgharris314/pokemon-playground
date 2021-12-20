import React, { FC, useState } from "react";
import { IndividualPokemon, PokemonType, PokemonTypes } from "../../types";
import { HoverDisplayTypeAttributes } from "./components/HoverDisplayTypeAttributes/HoverDisplayTypeAttributes";
interface props {
	individualPokemon: IndividualPokemon;
	status: string;
	handleRemoveFromTeam: Function;
}

export const DisplayIndividualPokemon: FC<props> = (props: props) => {
	const [hoverType, setHoverType] = useState<boolean>(false);
	const [activeType, setActiveType] = useState<PokemonType>();
	function handleTypeHover(pokemonType: PokemonType): void {
		setActiveType(pokemonType);
		setHoverType(true);
	}

	return props.individualPokemon.name ? (
		<div className="flex flex-col w-80 rounded-xl justify-center items-center bg-slate-200 shadow-lg p-1">
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
								className={`flex flex-col w-1/2 rounded-xl mx-1 p-0 ${type.type.name} justify-center items-center`}
								key={index}
								onMouseEnter={() => handleTypeHover(type.type)}
								onMouseLeave={() => setHoverType(false)}
							>
								{type.type.name.charAt(0).toUpperCase() +
									type.type.name.slice(1)}
							</div>
						);
					}
				)}
			</div>
			{props.status === "team" && (
				<div>
					<button
						onClick={() =>
							props.handleRemoveFromTeam(props.individualPokemon)
						}
					>
						Remove {props.individualPokemon.name}
					</button>{" "}
				</div>
			)}
			{hoverType && activeType && (
				<HoverDisplayTypeAttributes pokemonType={activeType} />
			)}
		</div>
	) : null;
};
