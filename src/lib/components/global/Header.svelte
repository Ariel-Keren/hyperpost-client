<script lang="ts">
	import SearchBar from "./SearchBar.svelte";
	import logo from "$lib/logo.svg";
</script>

<header class="fixed top-0 flex items-center justify-between w-full p-5">
	<a
		href="/"
		class="flex items-center gap-1 rounded p-2 text-white text-xl transition-colors hover:bg-dark"
		><img src={logo} width="35" alt="" />hyperpost</a
	>
	<SearchBar />
</header>
