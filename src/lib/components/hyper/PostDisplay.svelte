<script lang="ts">
	import type { Post } from "$lib/types";
	import { page } from "$app/stores";

	export let post: Post;
	export let index: number;
</script>

<a href={`/hypers/${$page.params.hyperName}/posts/${index}`}>
	<div
		class="flex flex-col gap-2 p-5 border-b-2 border-b-green-200 bg-gray-900 bg-opacity-50 rounded-t transition-transform hover:scale-105"
	>
		<h2 class="text-gray-200 font-medium">{post.title}</h2>
		<p class="text-gray-300 whitespace-pre-wrap border-l-2 border-l-gray-800 p-2">{post.text}</p>
		<div class="bg-gray-950 rounded py-2 px-5">
			<p class="text-gray-500">
				<span class="text-gray-600">Posted by</span>
				{post.createdBy}
			</p>
			<p class="text-gray-500">
				{post.comments.length}
				<span class="text-gray-600">comment{post.comments.length !== 1 && "s"}</span>
			</p>
		</div>
	</div>
</a>
