<script lang="ts">
	import { fetchedHyper } from "$lib/stores";
	import PostDisplay from "./PostDisplay.svelte";
</script>

{#if $fetchedHyper}
	<div class="flex flex-col gap-5 mb-10">
		{#each $fetchedHyper.posts as post, index}
			<PostDisplay {post} />
		{/each}
	</div>
{/if}
