<script lang="ts">
	import createPost from "$lib/api/createPost";
	import Button from "../global/Button.svelte";

	let title = "";
	let body = "";

	const createCurrentPost = async () => {
		const titleCopy = title;
		const bodyCopy = body;
		title = "";
		body = "";

		if (!titleCopy.replaceAll(" ", "") || !bodyCopy.replaceAll(" ", "")) return;

		await createPost(titleCopy.trim(), bodyCopy.trim());
	};
</script>

<form class="group flex flex-col items-start gap-2 my-2 opacity-50 focus-within:opacity-100">
	<input
		bind:value={title}
		placeholder="Title"
		class="w-52 bg-darker text-white border-2 border-dark rounded-lg p-1 outline-none transition-colors placeholder:text-dim focus:border-hover"
	/>
	<textarea
		bind:value={body}
		placeholder="Body"
		maxlength="500"
		class="w-96 bg-darker text-white border-2 border-dark rounded-lg p-2 outline-none resize-none transition-colors placeholder:text-dim focus:border-hover"
	/>
	<Button onClick={createCurrentPost} color="primary"
		><iconify-icon icon="material-symbols:post" />Post</Button
	>
</form>
