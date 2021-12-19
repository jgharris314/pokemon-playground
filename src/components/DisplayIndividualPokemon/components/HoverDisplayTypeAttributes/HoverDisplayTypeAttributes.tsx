import React, { FC, useEffect, useState } from "react";
import { PokemonType, PokemonTypeAttributes } from "../../../../types";
import { listPokemonTypeAttributes } from "../../../../utils/api";
import "../../../../App.css";
interface props {
	pokemonType: PokemonType;
}

export const HoverDisplayTypeAttributes: FC<props> = (props: props) => {
	const [pokemonTypeAttributes, setPokemonTypeAttributes] =
		useState<PokemonTypeAttributes>();
	useEffect(() => {
		const abortController = new AbortController();
		listPokemonTypeAttributes(abortController.signal, props.pokemonType.url)
			.then(setPokemonTypeAttributes)
			.catch((error) => error);
	}, []);
	return (
		<div className="flex flex-row w-full justify-around align-center">
			<div className="flex flex-col w-1/3 mx-auto">
				Weak Against <br />
				{pokemonTypeAttributes
					? pokemonTypeAttributes.damage_relations.double_damage_from.map(
							(type, index) => {
								return (
									<div
										className={`w-1/2 rounded-xl mx-1 p-0  text-center ${type.name}`}
										key={index}
									>
										{type.name.charAt(0).toUpperCase() +
											type.name.slice(1)}
									</div>
								);
							}
					  )
					: null}
			</div>
			<div className="flex flex-col w-1/3 mx-auto">
				Strong Against <br />
				{pokemonTypeAttributes
					? pokemonTypeAttributes.damage_relations.double_damage_to.map(
							(type, index) => {
								return (
									<div
										className={`w-1/2 rounded-xl text-center mx-auto p-0 ${type.name}`}
										key={index}
									>
										{type.name.charAt(0).toUpperCase() +
											type.name.slice(1)}
									</div>
								);
							}
					  )
					: null}
			</div>
		</div>
	);
};
