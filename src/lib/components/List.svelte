<script lang="ts">
export let items;
</script>

<ul>
	{#each items as item}
	<li>{item}</li>
	{/each}
</ul>

<style>
	ul {
		background-color: #CCCCCC;
		color: red;
	}
</style>