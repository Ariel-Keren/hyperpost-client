<script lang="ts">
	import type { Comment } from "$lib/types";
	import getFormattedDate from "$lib/getFormattedDate";
	import Button from "../global/Button.svelte";
	import Username from "../global/Username.svelte";

	export let comment: Comment;
</script>

<div class="flex flex-col items-start gap-1 w-96 p-5 bg-dark rounded">
	<div class="flex justify-between items-center w-full">
		<Username username={comment.createdBy} />
		<div class="flex gap-5">
			<div class="flex items-center gap-1">
				<span class="text-white font-medium text-2xl">0</span><iconify-icon
					icon="solar:dislike-bold-duotone"
					class="text-dim text-2xl"
				/>
			</div>
			<div class="flex items-center gap-1">
				<span class="text-white font-medium text-2xl">0</span><iconify-icon
					icon="solar:like-bold-duotone"
					class="text-dim text-2xl"
				/>
			</div>
		</div>
	</div>
	<p class="w-full text-white whitespace-pre-wrap">
		{comment.text}
	</p>
	<div class="flex justify-between items-center w-full mt-2">
		<p class="text-dim font-medium">
			{getFormattedDate(comment.createdAt)}
		</p>
		<div class="flex gap-2">
			<Button onClick={() => {}} color="warning"
				><iconify-icon icon="solar:dislike-bold-duotone" />Dislike</Button
			>
			<Button onClick={() => {}} color="primary"
				><iconify-icon icon="solar:like-bold-duotone" />Like</Button
			>
		</div>
	</div>
</div>
