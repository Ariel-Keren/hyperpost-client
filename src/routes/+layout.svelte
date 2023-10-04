<script lang="ts">
	import "../app.css";
	import { onMount } from "svelte";
	import { hypers, token, username } from "$lib/stores";
	import session from "$lib/api/session";
	import Loading from "$lib/components/global/Loading.svelte";

	export let data;

	let isLoading = true;

	$token = data.token;

	onMount(async () => {
		const userData = await session();
		isLoading = false;

		if (!userData) return;

		$username = userData.username;
		$hypers = userData.hypers;
	});
</script>

{#if isLoading}
	<Loading />
{:else}
	<slot />
{/if}
