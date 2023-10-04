<script lang="ts">
	import { enhance } from "$app/forms";

	export let title: string;
	export let button: string;
	export let endpoint: "register" | "login";
</script>

<form
	method="POST"
	action={`?/${endpoint}`}
	use:enhance
	class="relative flex flex-col justify-center items-center gap-5 border-2 border-gray-900 h-64 w-1/3 rounded"
>
	<h2 class="absolute top-1 text-gray-200 font-medium text-xl">{title}</h2>
	<div class="flex flex-col gap-1">
		<input
			name="username"
			placeholder="Username"
			class="text-gray-200 bg-gray-950 border-2 border-gray-900 rounded p-1 outline-none transition-colors focus:border-gray-700"
		/>
		<input
			name="password"
			placeholder="Password"
			class="text-gray-200 bg-gray-950 border-2 border-gray-900 rounded p-1 outline-none transition-colors focus:border-gray-700"
		/>
	</div>
	<input
		type="submit"
		value={button}
		class="text-gray-200 bg-gray-900 h-10 w-32 font-medium uppercase rounded cursor-pointer transition-colors hover:bg-gray-800"
	/>
</form>
