<script lang="ts">
	import joinHyper from "$lib/api/joinHyper";

	export let hyperName: string;

	const joinCurrentHyper = () => joinHyper(hyperName);
</script>

<button
	on:click={joinCurrentHyper}
	class="text-gray-200 font-medium uppercase py-1 px-8 border-2 border-green-200 rounded transition-colors hover:bg-green-200 hover:text-gray-950"
	>Join</button
>
