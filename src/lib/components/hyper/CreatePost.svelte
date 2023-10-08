<script lang="ts">
	import createPost from "$lib/api/createPost";
	import { username, fetchedHyper } from "$lib/stores";
	import type { Post } from "$lib/types";

	let title = "";
	let body = "";

	const createCurrentPost = async () => {
		if (!$username || !$fetchedHyper) return;

		const titleCopy = title;
		const bodyCopy = body;
		title = "";
		body = "";

		if (!titleCopy.replaceAll(" ", "") || !bodyCopy.replaceAll(" ", "")) return;

		const createdAt = await createPost(titleCopy.trim(), bodyCopy.trim());

		if (!createdAt) return;

		const newPost: Post = {
			title: titleCopy.trim(),
			text: bodyCopy.trim(),
			createdBy: $username,
			createdAt,
			updatedAt: createdAt,
			comments: []
		};
		const newPosts = [...$fetchedHyper.posts, newPost];
		$fetchedHyper = { ...$fetchedHyper, posts: newPosts };
	};
</script>

<form
	on:submit={createCurrentPost}
	class="group flex flex-col items-start gap-2 my-2 opacity-50 focus-within:opacity-100"
>
	<input
		bind:value={title}
		placeholder="Title"
		class="w-52 bg-gray-950 text-gray-200 border-2 border-gray-800 rounded-lg p-1 outline-none transition-colors placeholder:text-gray-500 focus:border-gray-700"
	/>
	<textarea
		bind:value={body}
		placeholder="Body"
		maxlength="500"
		class="w-96 bg-gray-950 text-gray-200 border-2 border-gray-800 rounded-lg p-2 outline-none resize-none transition-colors placeholder:text-gray-500 focus:border-gray-700"
	/>
	<input
		type="submit"
		value="Post"
		class="text-gray-200 font-medium uppercase py-1 px-8 border-2 border-green-200 rounded hidden cursor-pointer transition-colors hover:bg-green-200 hover:text-gray-950 group-focus-within:block"
	/>
</form>
