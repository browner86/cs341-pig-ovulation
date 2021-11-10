<script lang="ts">
	import { goto, invalidate } from '$app/navigation';
	import { page } from '$app/stores';

	const routes = [
		{
			path: '/',
			name: 'Home',
		},
		{
			path: '/about',
			name: 'About',
		},
		{
			path: '/farms',
			name: 'Farms',
		},
		{
			path: '/testing',
			name: 'Testing',
		},
	];

	// Here we make a post to the logout page to destroy the session cookie
	async function logout() {
		const res = await fetch('/auth/logout', { method: 'POST' });

		if (res.ok) {
			await invalidate('/login');
			await goto('/login');
		}
	}
</script>


{#if $page.path !== '/login' && $page.path !== '/register'}
	<header class="d-flex justify-content-center">
		<nav class="d-flex justify-content-center">
			<ul class="p-0 m-0 d-flex justify-content-center align-items-center list-unstyled">
			{#each routes as route}
				<li class:active={$page.path === route.path}><a sveltekit:prefetch href={route.path}>{route.name}</a></li>
			{/each}
				<li><button on:click={logout}>Logout</button></li>
			</ul>
		</nav>
	</header>
{/if}


<style>
	ul {
		height: 3em;
	}

	li {
		height: 100%;
		position: relative;
	}

	/* Arrow above the link when the page is active */
	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: -1px;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid #333333;
	}

	nav a, nav button {
		background: none;
		border: none;
		height: 100%;
		display: flex;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
</style>
