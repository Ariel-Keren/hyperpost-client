<script lang="ts">
	import type { Hyper } from "$lib/types";

	export let hyper: Hyper;
</script>

<h1 class="text-gray-200">{hyper.name}</h1>
<p class="text-gray-300">{hyper.description}</p>
