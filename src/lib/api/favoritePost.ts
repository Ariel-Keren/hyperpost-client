import { fetchedHyper, token } from "$lib/stores";
import { get } from "svelte/store";
import API_URL from "./API_URL";

const changeFavoriteState = async (postID: string, favorite: boolean) => {
	const sessionToken = get(token);
	const hyper = get(fetchedHyper);

	if (!sessionToken || !hyper) return;

	const postIndex = hyper.posts.findIndex((post) => post._id === postID);

	if (postIndex === -1) return;

	const favoritesChange = favorite ? 1 : -1;
	const newPosts = hyper.posts;
	newPosts[postIndex].favorites += favoritesChange;
	fetchedHyper.set({ ...hyper, posts: newPosts });
	await fetch(`${API_URL}/hypers/${hyper.name}/posts/${postIndex}`, {
		method: "PATCH",
		headers: { "Content-Type": "application/json", authorization: sessionToken },
		body: JSON.stringify({
			title: newPosts[postIndex].title,
			text: newPosts[postIndex].text,
			favoritesChange
		})
	});
};

export default changeFavoriteState;
