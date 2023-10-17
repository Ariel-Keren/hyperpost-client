<script lang="ts">
	import type { Post } from "$lib/types";
	import { page } from "$app/stores";
	import Username from "../global/Username.svelte";

	export let post: Post;
	export let index: number;
</script>

<a href={`/hypers/${$page.params.hyperName}/posts/${index}`}>
	<div
		class="flex flex-col p-5 border-b-2 border-b-green-200 bg-gray-900 bg-opacity-50 rounded-t transition-transform hover:scale-105"
	>
		<Username username={post.createdBy} />
		<h2 class="text-gray-200 font-medium">{post.title}</h2>
		<p
			class="text-gray-300 whitespace-pre-wrap border-l-2 border-l-gray-800 p-5 mt-5 mb-1 bg-gray-950 rounded-r"
		>
			{post.text}
		</p>
		<p class="text-gray-500">
			{post.comments.length}
			<span class="text-gray-600">comment{post.comments.length !== 1 && "s"}</span>
		</p>
	</div>
</a>
