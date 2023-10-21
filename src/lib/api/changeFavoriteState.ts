import { fetchedHyper, hypers, token, username } from "$lib/stores";
import { get } from "svelte/store";
import API_URL from "./API_URL";

const changeFavoriteState = async (postID: string, favorite: boolean) => {
	const sessionToken = get(token);
	const hyper = get(fetchedHyper);
	const hyperDisplays = get(hypers);
	const user = get(username);

	if (!sessionToken || !hyper || !hyperDisplays) return;

	const postIndex = hyper.posts.findIndex((post) => post._id === postID);

	if (postIndex === -1) return;

	const favoritesChange = favorite ? 1 : -1;
	const newPosts = hyper.posts;
	newPosts[postIndex].favorites += favoritesChange;
	fetchedHyper.set({ ...hyper, posts: newPosts });

	const hyperIndex = hyperDisplays.findIndex((currentHyper) => currentHyper.name === hyper.name);
	if (favorite) hyperDisplays[hyperIndex].favorites.push(postID);
	else {
		const favoriteIndex = hyperDisplays[hyperIndex].favorites.findIndex(
			(favorite) => favorite === postID
		);
		hyperDisplays[hyperIndex].favorites.splice(favoriteIndex, 1);
	}
	hypers.set(hyperDisplays);

	await fetch(`${API_URL}/hypers/${hyper.name}/posts/${postID}`, {
		method: "PATCH",
		headers: { "Content-Type": "application/json", authorization: sessionToken },
		body: JSON.stringify({
			title: newPosts[postIndex].title,
			text: newPosts[postIndex].text,
			favoritesChange,
			username: user
		})
	});
};

export default changeFavoriteState;
