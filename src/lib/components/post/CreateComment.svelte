<script lang="ts">
	import createComment from "$lib/api/createComment";
	import Button from "../global/Button.svelte";

	let text = "";

	const createCurrentComment = async () => {
		const textCopy = text;
		text = "";

		if (!textCopy.replaceAll(" ", "")) return;

		await createComment(textCopy.trim());
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
