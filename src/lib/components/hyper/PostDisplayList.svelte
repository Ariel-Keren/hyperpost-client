<script lang="ts">
	import { fetchedHyper } from "$lib/stores";
	import PostDisplay from "./PostDisplay.svelte";
</script>

{#if $fetchedHyper}
	<div class="flex flex-col">
		{#each $fetchedHyper.posts as post}
			<PostDisplay {post} />
		{/each}
	</div>
{/if}
