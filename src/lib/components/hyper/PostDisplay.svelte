<script lang="ts">
	import type { Post } from "$lib/types";
	import { page } from "$app/stores";
	import Username from "../global/Username.svelte";
	import Button from "../global/Button.svelte";
	import getFormattedDate from "$lib/getFormattedDate";

	export let post: Post;
	export let index: number;
</script>

<a href={`/hypers/${$page.params.hyperName}/posts/${index}`}>
	<div
		class="flex flex-col items-start gap-1 p-5 border-b-2 border-b-primary bg-dark rounded-t transition-transform hover:scale-105"
	>
		<div class="flex justify-between items-center w-full">
			<div class="flex flex-col items-start">
				<Username username={post.createdBy} />
				<h2 class="text-white font-medium">{post.title}</h2>
			</div>
			<div class="flex items-center gap-1">
				<span class="text-white font-medium text-2xl">0</span><iconify-icon
					icon="ph:heart-fill"
					class="text-warning text-2xl"
				/>
			</div>
		</div>
		<p class="w-full text-white whitespace-pre-wrap p-5 mt-5 mb-1 bg-darker rounded">
			{post.text}
		</p>
		<div class="flex justify-between items-center w-full mt-2">
			<div>
				<p class="text-dim font-medium">
					{post.comments.length}
					comment{post.comments.length !== 1 && "s"}
				</p>
				<p class="text-dim">Posted on {getFormattedDate(post.createdAt)}</p>
			</div>
			<Button onClick={() => {}} color="warning"
				><iconify-icon icon="ph:heart-fill" />Favorite</Button
			>
		</div>
	</div>
</a>
