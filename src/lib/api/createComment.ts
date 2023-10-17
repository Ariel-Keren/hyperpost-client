import { get } from "svelte/store";
import { token, username } from "$lib/stores";
import API_URL from "./API_URL";
import { page } from "$app/stores";

const createComment = async (text: string) => {
	const sessionToken = get(token);
	const createdBy = get(username);
	const { hyperName, postIndex } = get(page).params;

	if (!sessionToken || !createdBy || !hyperName.replaceAll(" ", "") || !text.replaceAll(" ", ""))
		return;

	const response = await fetch(
		`${API_URL}/hypers/${hyperName}/posts/${Number(postIndex)}/comments`,
		{
			method: "POST",
			headers: { "Content-Type": "application/json", authorization: sessionToken },
			body: JSON.stringify({ text, createdBy })
		}
	);

	if (!response.ok) return;

	const data = (await response.json()) as unknown;

	if (
		!data ||
		typeof data !== "object" ||
		!("createdAt" in data) ||
		typeof data.createdAt !== "string"
	)
		return;

	return data.createdAt;
};

export default createComment;
