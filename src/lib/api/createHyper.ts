import { get } from "svelte/store";
import { hypers, token, username } from "$lib/stores";
import API_URL from "./API_URL";
import type { HyperDisplay } from "$lib/types";

const createHyper = async (name: string, description: string) => {
	const sessionToken = get(token);
	const createdBy = get(username);

	if (!sessionToken || !createdBy) return;

	const response = await fetch(`${API_URL}/hypers`, {
		method: "POST",
		headers: { "Content-Type": "application/json", authorization: sessionToken },
		body: JSON.stringify({ name, description, createdBy })
	});

	if (!response.ok) return;

	const data = (await response.json()) as unknown;

	if (
		!data ||
		typeof data !== "object" ||
		!("createdAt" in data) ||
		typeof data.createdAt !== "string"
	)
		return;

	const hyper: HyperDisplay = { name, createdBy, createdAt: data.createdAt };
	hypers.update((prevHypers) => (prevHypers ? [...prevHypers, hyper] : [hyper]));
};

export default createHyper;
