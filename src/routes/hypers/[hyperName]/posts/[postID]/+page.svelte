<script lang="ts">
	import { page } from "$app/stores";
	import { fetchedHyper } from "$lib/stores";
	import getHyper from "$lib/api/getHyper";
	import Header from "$lib/components/global/Header.svelte";
	import SafeArea from "$lib/components/global/SafeArea.svelte";
	import Loading from "$lib/components/global/Loading.svelte";
	import Message from "$lib/components/global/Message.svelte";
	import PostSection from "$lib/components/post/PostSection.svelte";

	const fetchHyper = async () => {
		$fetchedHyper = undefined;
		$fetchedHyper = await getHyper();
	};

	$: $page.params && fetchHyper();
</script>

<Header />
<SafeArea>
	{#if $fetchedHyper === undefined}
		<Loading />
	{:else if $fetchedHyper === null}
		<Message>Looks like this Hyper doesn't exist</Message>
	{:else}
		<PostSection />
	{/if}
</SafeArea>
