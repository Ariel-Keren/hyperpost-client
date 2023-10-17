<script lang="ts">
	export let username: string;
</script>

<div class="flex items-center gap-[2px]">
	<iconify-icon icon="mdi:user-circle" class="text-green-200 text-xl" />
	<p class="text-gray-200 text-lg">{username}</p>
</div>
