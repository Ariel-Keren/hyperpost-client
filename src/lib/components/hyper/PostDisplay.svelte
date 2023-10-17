<script lang="ts">
	import type { Post } from "$lib/types";
	import { page } from "$app/stores";

	export let post: Post;
	export let index: number;
</script>

<a href={`/hypers/${$page.params.hyperName}/posts/${index}`}>
	<div
		class="flex flex-col p-5 border-b-2 border-b-green-200 bg-gray-900 bg-opacity-50 rounded-t transition-transform hover:scale-105"
	>
		<div class="flex items-center gap-[2px]">
			<iconify-icon icon="mdi:user-circle" class="text-green-200 text-xl" />
			<p class="text-gray-200 text-lg">{post.createdBy}</p>
		</div>
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
