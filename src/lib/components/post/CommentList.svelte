<script lang="ts">
	import { page } from "$app/stores";
	import { fetchedHyper } from "$lib/stores";
	import Comment from "./Comment.svelte";

	$: comments = $fetchedHyper?.posts[Number($page.params.postIndex)].comments;
</script>

{#if comments}
	<div class="flex flex-col gap-2">
		{#each comments as comment}
			<Comment {comment} />
		{/each}
	</div>
{/if}
