
<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	import { userNeedsToLogin } from '$lib/guards';

	// Get the Header component so we can display our nav
	import Navigation from '$lib/Navigation.svelte';

	// Import all the bootstrap styles
	import 'bootstrap/dist/css/bootstrap.min.css';

	// Import our global styles
	import '../app.css';

	onMount(async () => {
		// When we load a page check to see if we need to be logged in before accessing it
		if (await userNeedsToLogin({ page: $page })) {
			await goto('/login');
		}
	});
</script>


<Navigation />

<main>
	<slot />
</main>


<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
