<script lang="ts">
	import { hypers } from "$lib/stores";
	import Title from "../../global/Title.svelte";
	import CreateHyper from "./CreateHyper.svelte";
	import HyperDisplay from "./HyperDisplay.svelte";
</script>

{#if $hypers}
	<div class="flex flex-col items-center gap-10 w-full">
		<Title>Your Hypers</Title>
		<div class="flex flex-col items-center w-full gap-2">
			{#each $hypers as hyper}
				<HyperDisplay {hyper} />
			{/each}
			<CreateHyper />
		</div>
	</div>
{/if}
