import type { Comment, Post } from "$lib/types";
import { get } from "svelte/store";
import { fetchedHyper, token, username } from "$lib/stores";
import API_URL from "./API_URL";
import { page } from "$app/stores";

const createComment = async (text: string) => {
	const sessionToken = get(token);
	const createdBy = get(username);
	const hyper = get(fetchedHyper);
	const { postID } = get(page).params;

	if (!sessionToken || !createdBy || !hyper || !text.replaceAll(" ", "")) return;

	const postIndex = hyper.posts.findIndex((currentPost) => currentPost._id === postID);

	if (postIndex === -1) return;

	const response = await fetch(`${API_URL}/hypers/${hyper.name}/posts/${postID}/comments`, {
		method: "POST",
		headers: { "Content-Type": "application/json", authorization: sessionToken },
		body: JSON.stringify({ text, createdBy })
	});

	if (!response.ok) return;

	const data = (await response.json()) as unknown;

	if (
		!data ||
		typeof data !== "object" ||
		!("createdAt" in data) ||
		!("id" in data) ||
		typeof data.createdAt !== "string" ||
		typeof data.id !== "string"
	)
		return;

	const newComment: Comment = {
		text,
		createdBy,
		likes: 0,
		dislikes: 0,
		createdAt: data.createdAt,
		updatedAt: data.createdAt,
		_id: data.id
	};
	const newComments = [...hyper.posts[postIndex].comments, newComment];
	const newPost: Post = { ...hyper.posts[postIndex], comments: newComments };
	const newPosts = [...hyper.posts];
	newPosts[postIndex] = newPost;
	fetchedHyper.update((currentHyper) =>
		currentHyper ? { ...currentHyper, posts: newPosts } : null
	);
};

export default createComment;
