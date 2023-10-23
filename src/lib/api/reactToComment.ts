import { fetchedHyper, hypers, token, username } from "$lib/stores";
import { get } from "svelte/store";
import API_URL from "./API_URL";
import { page } from "$app/stores";
import type { CommentLocation } from "$lib/types";

const reactToComment = async (commentID: string, isLike: boolean, shouldAdd: boolean) => {
	const sessionToken = get(token);
	const hyper = get(fetchedHyper);
	const hyperDisplays = get(hypers);
	const user = get(username);
	const { postID } = get(page).params;

	if (!sessionToken || !hyper || !hyperDisplays) return;

	const postIndex = hyper.posts.findIndex((post) => post._id === postID);

	if (postIndex === -1) return;

	const commentIndex = hyper.posts[postIndex].comments.findIndex(
		(comment) => comment._id === commentID
	);

	if (commentIndex === -1) return;

	const hyperIndex = hyperDisplays.findIndex((currentHyper) => currentHyper.name === hyper.name);

	if (hyperIndex === -1) return;

	const likeIndex = hyperDisplays[hyperIndex].likes.findIndex(
		(like) => like.postID === postID && like.commentID === commentID
	);
	const dislikeIndex = hyperDisplays[hyperIndex].dislikes.findIndex(
		(dislike) => dislike.postID === postID && dislike.commentID === commentID
	);

	const reactionChange = shouldAdd ? 1 : -1;
	const newPosts = hyper.posts;
	if (isLike && dislikeIndex !== -1) newPosts[postIndex].comments[commentIndex].dislikes--;
	else if (!isLike && likeIndex !== -1) newPosts[postIndex].comments[commentIndex].likes--;
	if (isLike) newPosts[postIndex].comments[commentIndex].likes += reactionChange;
	else newPosts[postIndex].comments[commentIndex].dislikes += reactionChange;
	fetchedHyper.set({ ...hyper, posts: newPosts });

	if (shouldAdd) {
		const newReaction: CommentLocation = { postID, commentID };
		if (isLike && dislikeIndex !== -1) hyperDisplays[hyperIndex].dislikes.splice(dislikeIndex, 1);
		else if (!isLike && likeIndex !== -1) hyperDisplays[hyperIndex].likes.splice(likeIndex, 1);
		if (isLike) hyperDisplays[hyperIndex].likes.push(newReaction);
		else hyperDisplays[hyperIndex].dislikes.push(newReaction);
	} else {
		const reactionIndex = isLike ? likeIndex : dislikeIndex;

		if (reactionIndex === -1) return;

		if (isLike) hyperDisplays[hyperIndex].likes.splice(reactionIndex, 1);
		else hyperDisplays[hyperIndex].dislikes.splice(reactionIndex, 1);
	}
	hypers.set(hyperDisplays);

	await fetch(`${API_URL}/hypers/${hyper.name}/posts/${postID}/comments/${commentID}`, {
		method: "PATCH",
		headers: { "Content-Type": "application/json", authorization: sessionToken },
		body: JSON.stringify({
			title: newPosts[postIndex].title,
			text: newPosts[postIndex].text,
			likesChange: isLike ? reactionChange : 0,
			dislikesChange: isLike ? 0 : reactionChange,
			username: user
		})
	});
};

export default reactToComment;
