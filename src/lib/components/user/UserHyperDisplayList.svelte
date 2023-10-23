<script lang="ts">
	import type { HyperDisplay } from "$lib/types";
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import Title from "../global/Title.svelte";
	import getUser from "$lib/api/getUser";
	import Loading from "../global/Loading.svelte";
	import Message from "../global/Message.svelte";
	import UserHyperDisplay from "./UserHyperDisplay.svelte";

	let userHypers: HyperDisplay[] | null | undefined = undefined;

	onMount(async () => (userHypers = await getUser()));
</script>

{#if userHypers === undefined}
	<Loading />
{:else if userHypers === null}
	<Message>Couldn't find the user {$page.params.username}</Message>
{:else}
	<div class="flex flex-col items-center gap-10 w-full">
		<Title>{$page.params.username}'s Hypers</Title>
		<div class="flex flex-col items-center w-full gap-2">
			{#each userHypers as hyper}
				<UserHyperDisplay {hyper} />
			{/each}
		</div>
	</div>
{/if}
