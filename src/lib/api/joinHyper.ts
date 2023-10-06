import { hypers, token, username } from "$lib/stores";
import { get } from "svelte/store";
import API_URL from "./API_URL";
import type { HyperDisplay } from "$lib/types";

const joinHyper = async (hyperName: string) => {
	const sessionToken = get(token);
	const user = get(username);

	if (!sessionToken || !user) return;

	const response = await fetch(`${API_URL}/users/${user}`, {
		method: "PATCH",
		headers: { "Content-Type": "application/json", authorization: sessionToken },
		body: JSON.stringify({ hyper: hyperName })
	});

	if (!response.ok) return;

	const data = (await response.json()) as unknown;

	if (
		!data ||
		typeof data !== "object" ||
		!("createdBy" in data) ||
		!("createdAt" in data) ||
		typeof data.createdBy !== "string" ||
		typeof data.createdAt !== "string"
	)
		return;

	const newHyperDisplay: HyperDisplay = {
		name: hyperName,
		createdBy: data.createdBy,
		createdAt: data.createdAt
	};
	hypers.update((prevHypers) =>
		prevHypers ? [...prevHypers, newHyperDisplay] : [newHyperDisplay]
	);
};

export default joinHyper;
