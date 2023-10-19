<script lang="ts">
	import { page } from "$app/stores";
	import { fetchedHyper } from "$lib/stores";
	import getFormattedDate from "$lib/getFormattedDate";
	import Title from "../global/Title.svelte";
	import Message from "../global/Message.svelte";
	import CommentList from "./CommentList.svelte";
	import Username from "../global/Username.svelte";
	import CreateComment from "./CreateComment.svelte";

	$: post = $fetchedHyper?.posts[Number($page.params.postIndex)];
</script>

{#if post}
	<div class="flex flex-col items-center gap-10">
		<Title>{post.title}</Title>
		<div class="flex flex-col items-center">
			<div class="flex flex-col items-start gap-1">
				<Username username={post.createdBy} />
				<div class="flex flex-col gap-5 p-7 bg-dark rounded">
					<p class="text-white text-xl whitespace-pre-wrap">{post.text}</p>
					<p class="text-dim">
						Posted on {getFormattedDate(post.createdAt)}
					</p>
				</div>
			</div>
		</div>
		<hr class="w-1/2 border-gray-900" />
		<CreateComment />
		{#if !post.comments.length}
			<Message>Looks like there are no comments</Message>
		{:else}
			<CommentList />
		{/if}
	</div>
{/if}
