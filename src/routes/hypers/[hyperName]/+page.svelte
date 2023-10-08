<script lang="ts">
	import { page } from "$app/stores";
	import { fetchedHyper } from "$lib/stores";
	import getHyper from "$lib/api/getHyper";
	import Header from "$lib/components/global/Header.svelte";
	import SafeArea from "$lib/components/global/SafeArea.svelte";
	import Loading from "$lib/components/global/Loading.svelte";
	import Message from "$lib/components/global/Message.svelte";
	import HyperSection from "$lib/components/hyper/HyperSection.svelte";

	$: $page.params && (async () => ($fetchedHyper = await getHyper($page.params.hyperName)))();
</script>

<Header />
<SafeArea>
	{#if $fetchedHyper === undefined}
		<Loading />
	{:else if $fetchedHyper === null}
		<Message>Looks like this Hyper doesn't exist</Message>
	{:else}
		<HyperSection />
	{/if}
</SafeArea>
