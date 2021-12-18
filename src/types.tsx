export type Pokemon = {
	name: string;
	url: string;
};

export type AllPokemonData = {
	count: number;
	next: string;
	previous: string;
	results: Array<Pokemon>;
};

export type IndividualAbility = {
	name: string;
	url: string;
};

export type Abilities = {
	ability: IndividualAbility;
	is_hidden: boolean;
	slot: number;
};

export type Forms = {
	name: string;
	url: string;
};

export type Version = {
	name: string;
	url: string;
};

export type GameIndex = {
	game_index: string;
	version: Version;
};

export type IndividualMove = {
	name: string;
	url: string;
};

export type MoveLearnMethod = {
	name: string;
	url: string;
};

export type VersionGroup = {
	name: string;
	url: string;
};

export type VersionGroupDetails = {
	level_learned_at: number;
	move_learn_method: MoveLearnMethod;
	version_group: VersionGroup;
};

export type Move = {
	move: IndividualMove;
	version_group_details: Array<VersionGroupDetails>;
};

export type Species = {
	name: string;
	url: string;
};

export type Stat = {
	name: string;
	url: string;
};

export type Stats = {
	base_stat: number;
	effort: number;
	stat: Stat;
};

export type PokemonType = {
	name: string;
	url: string;
};

export type PokemonTypes = {
	slot: number;
	type: PokemonType;
};

export type IndividualPokemon = {
	abilities: Array<Abilities>;
	base_experience: number;
	forms: Array<Forms>;
	game_indices: Array<GameIndex>;
	height: number;
	held_items: Array<any>;
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: Array<Move>;
	name: string;
	orer: number;
	past_types: Array<any>;
	species: Species;
	sprites: any;
	stats: Array<Stats>;
	types: Array<PokemonTypes>;
	weight: number;
};
