<script lang="ts">
	import type { Hyper } from "$lib/types";
	import Title from "../global/Title.svelte";
	import Message from "../global/Message.svelte";
	import PostDisplayList from "./PostDisplayList.svelte";
	import { hypers } from "$lib/stores";
	import Join from "./Join.svelte";

	export let hyper: Hyper;

	$: canUserJoin = !$hypers || !$hypers.some((currentHyper) => currentHyper.name === hyper.name);
</script>

<div class="flex flex-col items-center gap-5">
	<Title>{hyper.name}</Title>
	<p class="text-gray-300 text-xl">{hyper.description}</p>
	{#if canUserJoin}
		<Join hyperName={hyper.name} />
	{/if}
	<hr class="w-1/2 border-gray-900" />
	{#if !hyper.posts.length}
		<Message>Looks like there aren't any posts here</Message>
	{:else}
		<PostDisplayList posts={hyper.posts} />
	{/if}
</div>
