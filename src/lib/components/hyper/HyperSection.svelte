<script lang="ts">
	import Title from "../global/Title.svelte";
	import Message from "../global/Message.svelte";
	import PostDisplayList from "./PostDisplayList.svelte";
	import { hypers, fetchedHyper } from "$lib/stores";
	import Join from "./Join.svelte";
	import CreatePost from "./CreatePost.svelte";
	import getFormattedDate from "$lib/getFormattedDate";

	$: canUserJoin =
		!$hypers || !$hypers.some((currentHyper) => currentHyper.name === $fetchedHyper?.name);
</script>

{#if $fetchedHyper}
	<div class="flex flex-col items-center gap-2">
		<Title>{$fetchedHyper.name}</Title>
		<p class="text-gray-300 text-xl">{$fetchedHyper.description}</p>
		<p class="text-gray-500">
			Created by <span class="text-gray-400">{$fetchedHyper.createdBy}</span> on
			<span class="text-gray-400">{getFormattedDate($fetchedHyper.createdAt)}</span>
		</p>
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
