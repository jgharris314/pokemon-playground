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

export type Generation = {
	name: string;
	url: string;
};

export type PokemonTypeGameIndex = {
	game_index: number;
	generation: Generation;
};

export type Language = {
	name: string;
	url: string;
};

export type Name = {
	language: Language;
	name: string;
};
// the pokemon object shaped for when you use the /type route
export type PokemonTypePokemon = {
	pokemong: IndividualPokemon;
	slot: number;
};

export type Damage_Relations = {
	double_damage_from: Array<PokemonType>;
	double_damage_to: Array<PokemonType>;
	half_damage_from: Array<PokemonType>;
	half_damage_to: Array<PokemonType>;
	no_damage_from: Array<PokemonType | null>;
	no_damage_to: Array<PokemonType | null>;
};

export type PokemonTypeAttributes = {
	damage_relations: Damage_Relations;
	game_indices: Array<PokemonTypeGameIndex>;
	generation: Generation;
	id: number;
	move_damage_class: IndividualMove;
	moves: Array<IndividualMove>;
	name: string;
	names: Array<Name>;
	past_damage_relations: Array<any>;
	pokemon: Array<PokemonTypePokemon>;
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
	order: number;
	past_types: Array<any>;
	species: Species;
	sprites: any;
	stats: Array<Stats>;
	types: Array<PokemonTypes>;
	weight: number;
};
