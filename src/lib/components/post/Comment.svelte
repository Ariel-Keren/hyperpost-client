<script lang="ts">
	import getFormattedDate from "$lib/getFormattedDate";
	import type { Comment } from "$lib/types";

	export let comment: Comment;
</script>

<div class="flex flex-col gap-1">
	<p class="text-gray-400">{comment.createdBy}</p>
	<p class="text-gray-200">{comment.text}</p>
	<p class="text-gray-500">{getFormattedDate(comment.createdAt)}</p>
</div>
