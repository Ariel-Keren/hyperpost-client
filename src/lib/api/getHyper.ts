import { get } from "svelte/store";
import API_URL from "./API_URL";
import { token } from "$lib/stores";
import { isHyper } from "$lib/types";
import { page } from "$app/stores";

const getHyper = async () => {
	const sessionToken = get(token);
	const { hyperName } = get(page).params;

	if (!sessionToken || !hyperName.replaceAll(" ", "")) return null;

	const response = await fetch(`${API_URL}/hypers/${hyperName}`, {
		headers: { authorization: sessionToken }
	});

	if (!response.ok) return null;

	const data = (await response.json()) as unknown;

	if (!data || typeof data !== "object" || !("hyper" in data) || !isHyper(data.hyper)) return null;

	return data.hyper;
};

export default getHyper;
