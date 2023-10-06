<script lang="ts">
	import type { Hyper } from "$lib/types";
	import Title from "../global/Title.svelte";

	export let hyper: Hyper;
</script>

<div class="flex flex-col items-center">
	<Title>{hyper.name}</Title>
	<p class="text-gray-300">{hyper.description}</p>
</div>
