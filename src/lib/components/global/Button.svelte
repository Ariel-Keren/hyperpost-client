<script lang="ts">
	export let onClick: () => void;
	export let color: "primary" | "warning";
</script>

<button
	on:click|preventDefault={onClick}
	class={`flex justify-center items-center gap-1 p-2 rounded text-white uppercase font-medium transition-colors ${
		color === "primary" ? "bg-primary hover:bg-primary-hover" : "bg-warning hover:bg-warning-hover"
	}`}><slot /></button
>
