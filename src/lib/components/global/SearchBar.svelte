<script lang="ts">
	import { goto } from "$app/navigation";

	let searchInputRef: HTMLInputElement | null = null;
	let searchedHyper = "";

	const navigateToSearchedHyper = () => {
		if (!searchInputRef) return;

		searchInputRef.focus();
		if (searchedHyper.replaceAll(" ", "") === "") return;
		goto(`/hypers/${searchedHyper}`);
	};
</script>

<form on:submit|preventDefault={navigateToSearchedHyper} class="group/search-bar flex items-center">
	<button
		class="group/search-button flex justify-center items-center h-full pl-2 border-y-2 border-l-2 border-y-dark border-l-dark rounded-l-full outline-none transition-colors group-focus-within/search-bar:border-hover"
		><iconify-icon
			icon="carbon:search"
			class="text-dim text-xl transition-colors group-hover/search-button:text-dim-hover"
		/></button
	>
	<input
		bind:value={searchedHyper}
		bind:this={searchInputRef}
		placeholder="Search Hyper"
		class="peer w-28 bg-darker text-white border-y-2 border-r-2 border-y-dark border-r-dark rounded-r-full p-1 outline-none transition-all placeholder:text-dim group-focus-within/search-bar:border-hover group-focus-within/search-bar:w-48"
	/>
</form>
