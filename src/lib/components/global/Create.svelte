<script lang="ts">
	import Title from "./Title.svelte";

	export let createFunction:
		| ((name: string, description: string) => Promise<void>)
		| ((title: string, text: string) => Promise<void>);
	export let title: string;
	export let nameLabel: string;
	export let textLabel: string;
	export let namePlaceholder: string;
	export let textPlaceholder: string;
	export let buttonText: string;

	let name = "";
	let text = "";

	const create = async () => await createFunction(name.trim(), text.trim());
</script>

<div class="flex flex-col items-center gap-10">
	<Title>{title}</Title>
	<form on:submit={create} class="flex flex-col items-center gap-10">
		<div class="flex flex-col items-center gap-3">
			<label for={namePlaceholder.toLowerCase()} class="text-gray-200 font-medium text-xl"
				>{nameLabel}</label
			>
			<input
				bind:value={name}
				placeholder={namePlaceholder}
				maxlength="35"
				id={namePlaceholder.toLowerCase()}
				class="w-52 text-lg bg-gray-950 text-gray-200 border-2 border-gray-800 rounded-lg p-1 outline-none transition-colors placeholder:text-gray-500 focus:border-gray-700"
			/>
		</div>
		<div class="flex flex-col items-center gap-3">
			<label for={textPlaceholder.toLowerCase()} class="text-gray-200 font-medium text-xl"
				>{textLabel}</label
			>
			<textarea
				bind:value={text}
				placeholder={textPlaceholder}
				maxlength="100"
				id={textPlaceholder.toLowerCase()}
				class="w-96 text-lg bg-gray-950 text-gray-200 border-2 border-gray-800 rounded-lg p-2 outline-none resize-none transition-colors placeholder:text-gray-500 focus:border-gray-700"
			/>
		</div>
		<input
			type="submit"
			value={buttonText}
			class="text-gray-200 bg-gray-900 h-10 w-32 font-medium uppercase rounded cursor-pointer transition-colors hover:bg-gray-800"
		/>
	</form>
</div>
