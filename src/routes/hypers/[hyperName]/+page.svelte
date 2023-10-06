<script lang="ts">
	import type { Hyper } from "$lib/types";
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import getHyper from "$lib/api/getHyper";
	import Header from "$lib/components/global/Header.svelte";
	import SafeArea from "$lib/components/global/SafeArea.svelte";
	import Loading from "$lib/components/global/Loading.svelte";
	import Message from "$lib/components/global/Message.svelte";
	import HyperSection from "$lib/components/hyper/HyperSection.svelte";

	let hyper: Hyper | null | undefined = undefined;

	$: $page.params && (async () => (hyper = await getHyper($page.params.hyperName)))();
</script>

<Header />
<SafeArea>
	{#if hyper === undefined}
		<Loading />
	{:else if hyper === null}
		<Message>Looks like this Hyper doesn't exist</Message>
	{:else}
		<HyperSection {hyper} />
	{/if}
</SafeArea>
