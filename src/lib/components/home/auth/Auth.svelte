<script lang="ts">
	import AuthForm from "$lib/components/home/auth/AuthForm.svelte";
</script>

<div class="flex flex-col justify-center items-center gap-16 h-screen">
	<h1 class="text-green-200 text-8xl font-medium">hyperpost</h1>
	<div class="flex justify-around w-full">
		<AuthForm title="Create an Account" button="Register" endpoint="register" />
		<AuthForm title="Already Have an Account?" button="Log in" endpoint="login" />
	</div>
</div>
