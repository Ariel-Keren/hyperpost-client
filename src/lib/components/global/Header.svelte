<script lang="ts">
	import "iconify-icon";
	import SearchBar from "./SearchBar.svelte";
</script>

<header class="fixed top-0 flex items-center justify-between w-full p-5">
	<a href="/" class="text-primary text-xl font-medium transition-colors hover:text-primary-hover"
		>hyperpost</a
	>
	<SearchBar />
</header>
