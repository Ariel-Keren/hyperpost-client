<script lang="ts">
	import { fetchedHyper } from "$lib/stores";
	import joinHyper from "$lib/api/joinHyper";

	const joinCurrentHyper = async () => await joinHyper($fetchedHyper?.name ?? "");
</script>

<button
	on:click={joinCurrentHyper}
	class="text-gray-200 font-medium uppercase py-1 px-8 border-2 border-green-200 rounded transition-colors hover:bg-green-200 hover:text-gray-950"
	>Join</button
>
