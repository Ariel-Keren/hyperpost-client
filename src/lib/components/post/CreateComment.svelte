<script lang="ts">
	import { page } from "$app/stores";
	import createComment from "$lib/api/createComment";
	import { username, fetchedHyper } from "$lib/stores";
	import type { Post, Comment } from "$lib/types";
	import Button from "../global/Button.svelte";

	let text = "";

	$: post = $fetchedHyper?.posts[Number($page.params.postIndex)];

	const createCurrentComment = async () => {
		if (!$username || !$fetchedHyper || !post) return;

		const textCopy = text;
		text = "";

		if (!textCopy.replaceAll(" ", "")) return;

		const createdAt = await createComment(textCopy.trim());

		if (!createdAt) return;

		const newComment: Comment = {
			text: textCopy.trim(),
			createdBy: $username,
			createdAt,
			updatedAt: createdAt
		};
		const newComments = [...post.comments, newComment];
		const newPost: Post = { ...post, comments: newComments };
		const newPosts = [...$fetchedHyper.posts];
		newPosts[Number($page.params.postIndex)] = newPost;
		$fetchedHyper = { ...$fetchedHyper, posts: newPosts };
	};
</script>

<form class="group flex flex-col items-start gap-2 my-2 opacity-50 focus-within:opacity-100">
	<textarea
		bind:value={text}
		placeholder="Comment"
		maxlength="500"
		class="w-96 bg-darker text-white border-2 border-dark rounded-lg p-2 outline-none resize-none transition-colors placeholder:text-dim focus:border-hover"
	/>
	<Button onClick={createCurrentComment} color="primary"
		><iconify-icon icon="majesticons:comment" />Comment</Button
	>
</form>
