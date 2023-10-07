<script lang="ts">
	import Header from "$lib/components/global/Header.svelte";
	import SafeArea from "$lib/components/global/SafeArea.svelte";
	import Create from "$lib/components/global/Create.svelte";
	import createHyper from "$lib/api/createHyper";
</script>

<Header />
<SafeArea>
	<Create
		createFunction={createHyper}
		title="Create a New Hyper"
		nameLabel="Pick a good name for your new Hyper"
		textLabel="Give your Hyper a short description"
		namePlaceholder="Name"
		textPlaceholder="Description"
		buttonText="Create Hyper"
	/>
</SafeArea>
