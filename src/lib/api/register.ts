import API_URL from "./API_URL";

const register = async (formUsername: string, password: string) => {
	const response = await fetch(`${API_URL}/auth/register`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ username: formUsername, password })
	});

	if (!response.ok) return;

	const data = (await response.json()) as unknown;

	if (!data || typeof data !== "object" || !("token" in data) || typeof data.token !== "string")
		return;

	return data.token;
};

export default register;
