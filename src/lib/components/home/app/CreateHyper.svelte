<script lang="ts">
	import CreateHyperModal from "./CreateHyperModal.svelte";

	let isModalShown = false;

	const showModal = () => {
		isModalShown = true;
	};

	const hideModal = () => {
		isModalShown = false;
	};
</script>

<button
	on:click={showModal}
	class="flex justify-center items-center h-20 w-96 bg-primary rounded-tl-3xl rounded-br-3xl rounded-tr rounded-bl px-6 transition-colors hover:bg-primary-hover"
	><iconify-icon icon="icon-park-outline:plus" class="text-white text-3xl" /></button
>
{#if isModalShown}
	<CreateHyperModal {hideModal} />
{/if}
