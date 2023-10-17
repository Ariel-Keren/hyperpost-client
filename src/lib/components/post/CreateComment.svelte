<script lang="ts">
	import { page } from "$app/stores";
	import createComment from "$lib/api/createComment";
	import { username, fetchedHyper } from "$lib/stores";
	import type { Post, Comment } from "$lib/types";

	let text = "";

	$: post = $fetchedHyper?.posts[Number($page.params.postIndex)];

	const createCurrentPost = async () => {
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

<form
	on:submit={createCurrentPost}
	class="group flex flex-col items-start gap-2 my-2 opacity-50 focus-within:opacity-100"
>
	<textarea
		bind:value={text}
		placeholder="Comment"
		maxlength="500"
		class="w-96 bg-gray-950 text-gray-200 border-2 border-gray-800 rounded-lg p-2 outline-none resize-none transition-colors placeholder:text-gray-500 focus:border-gray-700"
	/>
	<input
		type="submit"
		value="Comment"
		class="text-gray-200 font-medium uppercase py-1 px-8 border-2 border-green-200 rounded hidden cursor-pointer transition-colors hover:bg-green-200 hover:text-gray-950 group-focus-within:block"
	/>
</form>
