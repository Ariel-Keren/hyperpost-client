<script lang="ts">
	import { username, hypers } from "$lib/stores";
	import App from "$lib/components/home/app/App.svelte";
	import Auth from "$lib/components/home/auth/Auth.svelte";

	export let form;

	$: if (form) {
		$username = form.username;
		$hypers = form.hypers;
	}
</script>

{#if $username}
	<App />
{:else}
	<Auth />
{/if}
