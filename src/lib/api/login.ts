import API_URL from "./API_URL";
import { isHyperDisplayArray } from "$lib/types";

const login = async (username: string, password: string) => {
	const response = await fetch(`${API_URL}/auth/login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ username, password })
	});

	if (!response.ok) return;

	const data = (await response.json()) as unknown;

	if (
		!data ||
		typeof data !== "object" ||
		!("token" in data) ||
		!("hypers" in data) ||
		typeof data.token !== "string" ||
		!isHyperDisplayArray(data.hypers)
	)
		return;

	return { token: data.token, hypers: data.hypers };
};

export default login;
