<script lang='ts'>
	let loggedIn = true;

	function handleClick() {
		loggedIn = !loggedIn;
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	{#if !loggedIn}
		<h2>Please Sign In</h2>
		<form>

			<label for='username'>Username: </label>
			<input type='text' id='username'>

			<label for='password'>Password: </label>
			<input type='password' id='password'>

			<button on:click={handleClick}>Log In</button>
		</form>
	{:else if loggedIn}
		<h2>You are logged in</h2>
		<button on:click={handleClick}>Sign Out</button>
	{/if}
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
</style>
