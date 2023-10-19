<script lang="ts">
	import Button from "$lib/components/global/Button.svelte";
	import type { HyperDisplay } from "$lib/types";

	export let hyper: HyperDisplay;

	const copyLink = () => {
		navigator.clipboard.writeText(`https://hyperpost.netlify.app/hypers/${hyper.name}`);
	};
</script>

<a href={`/hypers/${hyper.name}`} class="w-96">
	<div
		class="flex justify-between items-center h-20 bg-dark rounded-tl-3xl rounded-br-3xl rounded-tr rounded-bl px-6 transition-colors hover:bg-hover"
	>
		<h2 class="text-white font-medium text-2xl">{hyper.name}</h2>
		<Button onClick={copyLink} color="primary"><iconify-icon icon="fa-solid:share" />Share</Button>
	</div>
</a>
