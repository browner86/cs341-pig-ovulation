<script lang="ts" context="module">
	export async function load({ fetch }) {
		const res = await fetch(`/farms/getFarms.json`);

		if (res.ok) {
			const body = await res.json();

			// When we return props we're looking to assign these values to
			// any of our exports from our main 'script' tag. Note that we have `export let farms;`
			// so that we can pass this data into our component.
			return {
				props: {
					farms: body.farms,
				},
			};
		}
	};
</script>

<script lang="ts">
	import List from '$lib/List.svelte';
	export let farms;
</script>

<h1>Current Farms</h1>

<List items={farms}/>

<ul>
	{#each farms as farm}
	<li>{farm}</li>
	{/each}
</ul>

<style>
	ul {
		background-color: black;
		color: red;
	}
</style>