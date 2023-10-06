<script lang="ts">
	import type { Post } from "$lib/types";
	import PostDisplay from "./PostDisplay.svelte";

	export let posts: Post[];
</script>

<div class="flex flex-col">
	{#each posts as post}
		<PostDisplay {post} />
	{/each}
</div>
