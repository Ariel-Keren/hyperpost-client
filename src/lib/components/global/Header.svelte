<script lang="ts">
	import { goto } from "$app/navigation";
	import "iconify-icon";

	let searchedHyper = "";

	const navigateToSearchedHyper = () => {
		if (searchedHyper.replaceAll(" ", "") === "") return;
		goto(`/hypers/${searchedHyper}`);
	};
</script>

<header class="fixed top-0 flex items-center justify-between w-full p-5">
	<a href="/" class="text-green-200 text-xl font-medium">hyperpost</a>
	<div class="absolute left-1/2 -translate-x-1/2">
		<form on:submit|preventDefault={navigateToSearchedHyper} class="relative">
			<input
				bind:value={searchedHyper}
				placeholder="Search Hyper"
				class="w-52 bg-gray-950 text-gray-200 border-2 border-gray-800 rounded-lg p-1 outline-none transition-colors placeholder:text-gray-500 focus:border-gray-700"
			/>
			<button
				class="absolute top-1 right-1 text-gray-500 text-2xl transition-colors hover:text-gray-400"
				><iconify-icon icon="carbon:search" /></button
			>
		</form>
	</div>
	<a href="/create-hyper" class="text-gray-200 text-3xl"
		><iconify-icon icon="icon-park-outline:plus" /></a
	>
</header>
