<script lang="ts">
	export let count: number;
	export let isActive: boolean;
	export let activeIcon: string;
	export let inactiveIcon: string;
	export let color: "primary" | "warning";
	export let onClick: () => Promise<void>;
</script>

<div class="flex items-center gap-1">
	<span class="text-white font-medium text-2xl">{count}</span>
	<button on:click|preventDefault={onClick} class="group flex items-center">
		{#if isActive}
			<iconify-icon
				icon={activeIcon}
				class={`text-2xl transition-colors group-hover:text-dim-hover" ${
					color === "primary" ? "text-primary" : "text-warning"
				}`}
			/>
		{:else}
			<iconify-icon
				icon={inactiveIcon}
				class={`text-dim-hover text-2xl transition-colors ${
					color === "primary" ? "group-hover:text-primary" : "group-hover:text-warning"
				}`}
			/>
		{/if}
	</button>
</div>
