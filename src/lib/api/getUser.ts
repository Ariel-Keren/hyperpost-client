import { page } from "$app/stores";
import { get } from "svelte/store";
import API_URL from "./API_URL";
import { token } from "$lib/stores";
import { isHyperDisplayArray } from "$lib/types";

const getUser = async () => {
	const sessionToken = get(token);
	const { username } = get(page).params;

	if (!sessionToken) return null;

	const response = await fetch(`${API_URL}/users/${username}`, {
		headers: { authorization: sessionToken }
	});

	if (!response.ok) return null;

	const data = (await response.json()) as unknown;

	if (!data || typeof data !== "object" || !("hypers" in data) || !isHyperDisplayArray(data.hypers))
		return null;

	return data.hypers;
};

export default getUser;
