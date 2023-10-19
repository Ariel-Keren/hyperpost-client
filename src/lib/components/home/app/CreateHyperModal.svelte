<script lang="ts">
	import createHyper from "$lib/api/createHyper";
	import Title from "$lib/components/global/Title.svelte";
	import Button from "$lib/components/global/Button.svelte";

	export let hideModal: () => void;

	let name = "";
	let description = "";

	const createCurrentHyper = () => {
		hideModal();
		createHyper(name.trim(), description.trim());
	};
</script>

<div
	class="fixed top-0 left-0 flex justify-center items-center h-full w-full backdrop-brightness-75"
>
	<div class="relative flex flex-col items-center gap-5 h-1/3 w-1/2 bg-dark rounded p-5">
		<Title>Create a New Hyper</Title>
		<div class="flex flex-col items-center">
			<input
				bind:value={name}
				placeholder="Name"
				class="w-52 bg-darker text-white border-2 border-dark rounded-lg p-1 outline-none transition-colors placeholder:text-dim focus:border-hover"
			/>
			<textarea
				bind:value={description}
				placeholder="Description"
				maxlength="500"
				class="w-96 bg-darker text-white border-2 border-dark rounded-lg p-2 outline-none resize-none transition-colors placeholder:text-dim focus:border-hover"
			/>
		</div>
		<div class="absolute bottom-3 right-3 flex gap-2">
			<Button onClick={hideModal} color="warning"
				><iconify-icon icon="mingcute:close-fill" />Cancel</Button
			>
			<Button onClick={createCurrentHyper} color="primary"
				><iconify-icon icon="icon-park-outline:plus" />Create</Button
			>
		</div>
	</div>
</div>
