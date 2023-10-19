<script lang="ts">
	import "iconify-icon";
	import SearchBar from "./SearchBar.svelte";
</script>

<header class="fixed top-0 flex items-center justify-between w-full p-5">
	<a href="/" class="text-primary text-xl font-medium transition-colors hover:text-primary-hover"
		>hyperpost</a
	>
	<div class="flex gap-3">
		<SearchBar />
		<a href="/create-hyper" class="flex items-center text-white text-3xl"
			><iconify-icon icon="icon-park-outline:plus" /></a
		>
	</div>
</header>
