import {
	AllPokemonData,
	IndividualPokemon,
	PokemonTypeAttributes,
} from "../types";
/**
 * Defines the base URL for the API.
 * The default values is overridden by the `API_BASE_URL` environment variable.
 */
const API_BASE_URL = "https://pokeapi.co/api/v2";

/**
 * Defines the default headers for these functions to work with `json-server`
 */
const headers = new Headers();
headers.append("Content-Type", "application/json");

/**
 * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
 *
 * This function is NOT exported because it is not needed outside of this file.
 *
 * @param url
 *  the url for the requst.
 * @param options
 *  any options for fetch
 * @param onCancel
 *  value to return if fetch call is aborted. Default value is undefined.
 * @returns {Promise<Error|any>}
 *  a promise that resolves to the `json` data or an error.
 *  If the response is not in the 200 - 399 range the promise is rejected.
 */
async function fetchJson(url: string, options: any, onCancel?: any) {
	try {
		const response = await fetch(url, options);

		if (response.status === 204) {
			return null;
		}

		const payload = await response.json();

		if (payload.error) {
			return Promise.reject({ message: payload.error });
		}

		return payload;
	} catch (error: any) {
		if (error.name !== "AbortError") {
			console.error(error.stack);
			throw error;
		}
		return Promise.resolve(onCancel);
	}
}

/**
 * Retrieves all existing kendama.
 * @returns {Promise<Pokemon>}
 *  a promise that resolves to a possibly empty array of kendama saved in the database.
 */

export async function listAllPokemon(signal: any): Promise<AllPokemonData> {
	const url = `${API_BASE_URL}/pokemon`;

	const options = {
		method: "GET",
		headers,
		signal,
	};

	const res = await fetchJson(url, options);
	return res;
}

export async function listNextPokemon(
	signal: any,
	url: string
): Promise<AllPokemonData> {
	const options = {
		method: "GET",
		headers,
		signal,
	};

	const res = await fetchJson(url, options);
	return res;
}

export async function listIndividualPokemon(
	signal: any,
	url: string
): Promise<IndividualPokemon> {
	const options = {
		method: "GET",
		headers,
		signal,
	};

	const res = await fetchJson(url, options);
	return res;
}

export async function listPokemonTypeAttributes(
	signal: any,
	url: string
): Promise<PokemonTypeAttributes> {
	const options = {
		method: "GET",
		headers,
		signal,
	};

	const res = await fetchJson(url, options);
	return res;
}
