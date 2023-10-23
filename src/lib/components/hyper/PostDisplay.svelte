<script lang="ts">
	import type { Post } from "$lib/types";
	import { page } from "$app/stores";
	import Username from "../global/Username.svelte";
	import getFormattedDate from "$lib/getFormattedDate";
	import changeFavoriteState from "$lib/api/changeFavoriteState";
	import { hypers } from "$lib/stores";
	import Reaction from "../global/Reaction.svelte";

	export let post: Post;

	$: hyper = $hypers?.find((currentHyper) => currentHyper.name === $page.params.hyperName);
	$: isFavorite = hyper?.favorites?.includes(post._id);
	const changeCurrentFavoriteState = async () => await changeFavoriteState(post._id, !isFavorite);
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
			<Reaction
				count={post.favorites}
				isActive={!!isFavorite}
				activeIcon="ph:heart-fill"
				inactiveIcon="ph:heart-bold"
				color="warning"
				onClick={changeCurrentFavoriteState}
			/>
		</div>
		<p class="w-full text-white whitespace-pre-wrap p-5 mt-5 mb-1 bg-darker rounded">
			{post.text}
		</p>
		<div class="flex flex-col">
			<p class="text-dim font-medium">
				{post.comments.length}
				comment{post.comments.length !== 1 ? "s" : ""}
			</p>
			<p class="text-dim">Posted on {getFormattedDate(post.createdAt)}</p>
		</div>
	</div>
</a>
