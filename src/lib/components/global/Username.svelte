<script lang="ts">
	export let username: string;
</script>

<a
	href={`/users/${username}`}
	class="flex justify-center items-center gap-1 p-2 px-3 bg-hover rounded transition-colors hover:bg-primary"
>
	<iconify-icon icon="carbon:user-filled" class="text-white text-lg bg-dark p-1 rounded-full" />
	<p class="text-white font-medium">{username}</p>
</a>
