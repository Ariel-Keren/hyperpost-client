<script lang="ts">
	import type { HyperDisplay } from "$lib/types";

	export let hyper: HyperDisplay;
</script>

<a href={`/hypers/${hyper.name}`}>
	<div>
		<h3>{hyper.name}</h3>
		<p>By: {hyper.createdBy}</p>
		<p>Created: {hyper.createdAt}</p>
	</div>
</a>
