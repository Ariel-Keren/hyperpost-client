<script lang="ts">
	import type { Comment } from "$lib/types";
	import { page } from "$app/stores";
	import { hypers } from "$lib/stores";
	import getFormattedDate from "$lib/getFormattedDate";
	import Username from "../global/Username.svelte";
	import Reaction from "../global/Reaction.svelte";
	import reactToComment from "$lib/api/reactToComment";

	export let comment: Comment;

	$: hyper = $hypers?.find((currentHyper) => currentHyper.name === $page.params.hyperName);
	$: isLiked = hyper?.likes.some(
		(like) => like.postID === $page.params.postID && like.commentID === comment._id
	);
	$: isDisliked = hyper?.dislikes.some(
		(dislike) => dislike.postID === $page.params.postID && dislike.commentID === comment._id
	);

	const changeLikes = async () => await reactToComment(comment._id, true, !isLiked);
	const changeDislikes = async () => await reactToComment(comment._id, false, !isDisliked);
</script>

<div class="flex flex-col items-start gap-1 w-96 p-5 bg-dark rounded">
	<div class="flex justify-between items-center w-full">
		<Username username={comment.createdBy} />
		<div class="flex gap-2">
			<Reaction
				count={comment.dislikes}
				isActive={!!isDisliked}
				activeIcon="solar:dislike-bold-duotone"
				inactiveIcon="solar:dislike-line-duotone"
				color="warning"
				onClick={changeDislikes}
			/>
			<Reaction
				count={comment.likes}
				isActive={!!isLiked}
				activeIcon="solar:like-bold-duotone"
				inactiveIcon="solar:like-line-duotone"
				color="primary"
				onClick={changeLikes}
			/>
		</div>
	</div>
	<p class="w-full text-white whitespace-pre-wrap">
		{comment.text}
	</p>
	<p class="text-dim font-medium">
		{getFormattedDate(comment.createdAt)}
	</p>
</div>
