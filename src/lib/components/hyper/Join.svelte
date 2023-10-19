<script lang="ts">
	import { fetchedHyper } from "$lib/stores";
	import joinHyper from "$lib/api/joinHyper";
	import Button from "../global/Button.svelte";

	const joinCurrentHyper = async () => await joinHyper($fetchedHyper?.name ?? "");
</script>

<Button onClick={joinCurrentHyper} color="primary"
	><iconify-icon icon="basil:login-solid" />Join</Button
>
