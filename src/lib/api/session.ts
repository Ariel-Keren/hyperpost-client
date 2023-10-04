import { token } from "$lib/stores";
import { isHyperDisplayArray } from "$lib/types";
import API_URL from "./API_URL";
import { get } from "svelte/store";

const session = async () => {
	const sessionToken = get(token);

	if (!sessionToken) return;

	const response = await fetch(`${API_URL}/auth/session`, {
		headers: { authorization: sessionToken }
	});

	if (!response.ok) return;

	const data = (await response.json()) as unknown;
	if (
		!data ||
		typeof data !== "object" ||
		!("username" in data) ||
		!("hypers" in data) ||
		typeof data.username !== "string" ||
		!isHyperDisplayArray(data.hypers)
	)
		return;

	return { username: data.username, hypers: data.hypers };
};

export default session;
