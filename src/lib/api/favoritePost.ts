import { fetchedHyper, token } from "$lib/stores";
import { get } from "svelte/store";
import API_URL from "./API_URL";

const changeFavoriteState = async (postIndex: number, favorite: boolean) => {
	const sessionToken = get(token);
	const hyper = get(fetchedHyper);

	if (
		!sessionToken ||
		!hyper ||
		!Number.isInteger(postIndex) ||
		Number(postIndex) < 0 ||
		Number(postIndex) >= hyper.posts.length
	)
		return;

	const favoritesChange = favorite ? 1 : -1;
	const post = hyper.posts[Number(postIndex)];
	const newPosts = hyper.posts;
	newPosts[Number(postIndex)].favorites += favoritesChange;
	fetchedHyper.set({ ...hyper, posts: newPosts });
	await fetch(`${API_URL}/hypers/${hyper.name}/posts/${postIndex}`, {
		method: "PATCH",
		headers: { "Content-Type": "application/json", authorization: sessionToken },
		body: JSON.stringify({
			title: post.title,
			text: post.text,
			favoritesChange
		})
	});
};

export default changeFavoriteState;
