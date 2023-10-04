<script lang="ts">
	import { hypers } from "$lib/stores";
	import Header from "../../global/Header.svelte";
	import HyperDisplayList from "./HyperDisplayList.svelte";
	import Message from "../../global/Message.svelte";
	import SafeArea from "../../global/SafeArea.svelte";
</script>

<Header />
<SafeArea>
	{#if $hypers && !$hypers.length}
		<Message>Looks like you don't have any Hypers</Message>
	{:else if $hypers}
		<HyperDisplayList />
	{/if}
</SafeArea>
