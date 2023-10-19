<script lang="ts">
	import Title from "../global/Title.svelte";
	import Message from "../global/Message.svelte";
	import PostDisplayList from "./PostDisplayList.svelte";
	import { hypers, fetchedHyper } from "$lib/stores";
	import Join from "./Join.svelte";
	import CreatePost from "./CreatePost.svelte";
	import getFormattedDate from "$lib/getFormattedDate";
	import Username from "../global/Username.svelte";

	$: canUserJoin =
		!$hypers || !$hypers.some((currentHyper) => currentHyper.name === $fetchedHyper?.name);
</script>

{#if $fetchedHyper}
	<div class="flex flex-col items-center gap-5">
		<Title>{$fetchedHyper.name}</Title>
		<div class="flex flex-col items-center gap-3">
			<p class="text-white text-xl">{$fetchedHyper.description}</p>
			<p class="flex items-center gap-2 text-dim">
				Created by <Username username={$fetchedHyper.createdBy} /> on {getFormattedDate(
					$fetchedHyper.createdAt
				)}
			</p>
		</div>
		{#if canUserJoin}
			<Join />
		{/if}
		<hr class="w-1/2 border-gray-900" />
		{#if !canUserJoin}
			<CreatePost />
		{/if}
		{#if !$fetchedHyper.posts.length && canUserJoin}
			<Message>Looks like there aren't any posts here</Message>
		{:else}
			<PostDisplayList />
		{/if}
	</div>
{/if}
