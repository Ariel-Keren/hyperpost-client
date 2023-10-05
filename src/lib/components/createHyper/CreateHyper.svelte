<script lang="ts">
	import createHyper from "$lib/api/createHyper";

	let name = "";
	let description = "";

	const addHyper = async () => {
		if (name.replaceAll(" ", "") === "" || description.replaceAll(" ", "") === "") return;

		await createHyper(name.trim(), description.trim());
	};
</script>

<form on:submit={addHyper} class="flex flex-col items-center gap-10">
	<div class="flex flex-col items-center gap-3">
		<label for="name" class="text-gray-200 font-medium text-xl"
			>Pick a good name for your new Hyper</label
		>
		<input
			bind:value={name}
			placeholder="Name"
			maxlength="35"
			id="name"
			class="w-52 text-lg bg-gray-950 text-gray-200 border-2 border-gray-800 rounded-lg p-1 outline-none transition-colors placeholder:text-gray-500 focus:border-gray-700"
		/>
	</div>
	<div class="flex flex-col items-center gap-3">
		<label for="description" class="text-gray-200 font-medium text-xl"
			>Give your Hyper a short description</label
		>
		<textarea
			bind:value={description}
			placeholder="Description"
			maxlength="100"
			id="description"
			class="w-96 text-lg bg-gray-950 text-gray-200 border-2 border-gray-800 rounded-lg p-2 outline-none resize-none transition-colors placeholder:text-gray-500 focus:border-gray-700"
		/>
	</div>
	<input
		type="submit"
		value="Create"
		class="text-gray-200 bg-gray-900 h-10 w-32 font-medium uppercase rounded cursor-pointer transition-colors hover:bg-gray-800"
	/>
</form>
