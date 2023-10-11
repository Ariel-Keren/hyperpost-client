<script lang="ts">
	import { page } from "$app/stores";
	import { fetchedHyper } from "$lib/stores";
	import getFormattedDate from "$lib/getFormattedDate";
	import Title from "../global/Title.svelte";
	import Message from "../global/Message.svelte";
	import CommentList from "./CommentList.svelte";

	const post = $fetchedHyper?.posts[Number($page.params.postIndex)];
</script>

{#if post}
	<div class="flex flex-col items-center gap-10">
		<Title>{post.title}</Title>
		<div class="flex flex-col gap-5 p-10 w-1/2 bg-gray-900 bg-opacity-50 rounded">
			<p class="text-gray-300 text-xl whitespace-pre-wrap">{post.text}</p>
			<p class="text-gray-500">
				Created by <span class="text-gray-400">{post.createdBy}</span> on
				<span class="text-gray-400">{getFormattedDate(post.createdAt)}</span>
			</p>
		</div>
		<hr class="w-1/2 border-gray-900" />
		{#if !post.comments.length}
			<Message>Looks like there are no comments</Message>
		{:else}
			<CommentList />
		{/if}
	</div>
{/if}
