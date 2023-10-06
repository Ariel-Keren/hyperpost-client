<script lang="ts">
	import type { Post } from "$lib/types";

	export let post: Post;
</script>

<div>
	<h2>{post.title}</h2>
	<p>{post.text}</p>
	<p>
		{post.comments.length}
		{post.comments.length === 1 ? "comment" : "comments"} · Created by {post.createdBy}
	</p>
</div>
