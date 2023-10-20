import { get } from "svelte/store";
import { fetchedHyper, token, username } from "$lib/stores";
import API_URL from "./API_URL";
import { page } from "$app/stores";
import type { Post } from "$lib/types";

const createPost = async (title: string, body: string) => {
	const sessionToken = get(token);
	const createdBy = get(username);
	const hyperName = get(page).params.hyperName;

	if (
		!sessionToken ||
		!createdBy ||
		!hyperName.replaceAll(" ", "") ||
		!title.replaceAll(" ", "") ||
		!body.replaceAll(" ", "")
	)
		return;

	const response = await fetch(`${API_URL}/hypers/${hyperName}/posts`, {
		method: "POST",
		headers: { "Content-Type": "application/json", authorization: sessionToken },
		body: JSON.stringify({ title, text: body, createdBy })
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

	const newPost: Post = {
		title,
		text: body,
		createdBy,
		favorites: 0,
		createdAt: data.createdAt,
		updatedAt: data.createdAt,
		comments: []
	};
	fetchedHyper.update((hyper) => (hyper ? { ...hyper, posts: [...hyper.posts, newPost] } : null));
};

export default createPost;
