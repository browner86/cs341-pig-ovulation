<script lang="ts">
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
		path: '/todos',
		name: 'Todos',
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
</script>


{#if $page.path !== '/login'}
	<header class="d-flex justify-content-center">
		<nav class="d-flex justify-content-center">
			<ul class="p-0 m-0 d-flex justify-content-center align-items-center list-unstyled">
			{#each routes as route}
				<li class:active={$page.path === route.path}><a sveltekit:prefetch href={route.path}>{route.name}</a></li>
			{/each}
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

	nav a {
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
