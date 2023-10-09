<script lang="ts">
	import getFormattedDate from "$lib/getFormattedDate";
	import type { HyperDisplay } from "$lib/types";

	export let hyper: HyperDisplay;

	const createdAt = getFormattedDate(hyper.createdAt);
</script>

<a href={`/hypers/${hyper.name}`} class="w-1/2">
	<div class="flex flex-col items-center border-2 border-gray-800 rounded hover:bg-gray-800 p-5">
		<h3 class="text-gray-200 font-medium text-xl">{hyper.name}</h3>
		<p class="text-gray-500">By <span class="text-gray-400">{hyper.createdBy}</span></p>
		<p class="text-gray-500">Created on <span class="text-gray-400">{createdAt}</span></p>
	</div>
</a>
