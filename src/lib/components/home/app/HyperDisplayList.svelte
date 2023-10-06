<script lang="ts">
	import { hypers } from "$lib/stores";
	import HyperDisplay from "./HyperDisplay.svelte";
</script>

{#if $hypers}
	<div class="flex flex-col items-center gap-10 w-full">
		<h1 class="text-gray-200 font-medium text-3xl">Your Hypers</h1>
		<div class="flex flex-col items-center w-full gap-2">
			{#each $hypers as hyper}
				<HyperDisplay {hyper} />
			{/each}
		</div>
	</div>
{/if}
