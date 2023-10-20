<script lang="ts">
	import joinHyper from "$lib/api/joinHyper";
	import Button from "../global/Button.svelte";

	const joinCurrentHyper = async () => await joinHyper();
</script>

<Button onClick={joinCurrentHyper} color="primary"
	><iconify-icon icon="basil:login-solid" />Join</Button
>
