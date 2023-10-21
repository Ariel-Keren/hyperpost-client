<script lang="ts">
	import type { Post } from "$lib/types";
	import { page } from "$app/stores";
	import Username from "../global/Username.svelte";
	import getFormattedDate from "$lib/getFormattedDate";
	import changeFavoriteState from "$lib/api/changeFavoriteState";
	import { hypers } from "$lib/stores";

	export let post: Post;

	$: hyper = $hypers?.find((currentHyper) => currentHyper.name === $page.params.hyperName);
	$: isFavorite = hyper?.favorites?.includes(post._id);
	const changeCurrentFavoriteState = async () => {
		if (isFavorite === undefined) return;

		await changeFavoriteState(post._id, !isFavorite);
	};
</script>

<a href={`/hypers/${$page.params.hyperName}/posts/${post._id}`}>
	<div
		class="flex flex-col items-start gap-1 p-5 border-b-2 border-b-primary bg-dark rounded-t transition-transform hover:scale-105"
	>
		<div class="flex justify-between items-center w-full">
			<div class="flex flex-col items-start">
				<Username username={post.createdBy} />
				<h2 class="text-white font-medium">{post.title}</h2>
			</div>
			<div class="flex items-center gap-1">
				<span class="text-white font-medium text-2xl">{post.favorites}</span>
				<button
					on:click|preventDefault={changeCurrentFavoriteState}
					class="group flex items-center"
				>
					{#if isFavorite}
						<iconify-icon
							icon="ph:heart-fill"
							class="text-warning text-2xl transition-colors group-hover:text-warning-hover"
						/>
					{:else}
						<iconify-icon
							icon="ph:heart-bold"
							class="text-dim-hover text-2xl transition-colors group-hover:text-warning"
						/>
					{/if}
				</button>
			</div>
		</div>
		<p class="w-full text-white whitespace-pre-wrap p-5 mt-5 mb-1 bg-darker rounded">
			{post.text}
		</p>
		<div class="flex flex-col">
			<p class="text-dim font-medium">
				{post.comments.length}
				comment{post.comments.length !== 1 && "s"}
			</p>
			<p class="text-dim">Posted on {getFormattedDate(post.createdAt)}</p>
		</div>
	</div>
</a>
