<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('/farms/getfarms');

    if (res.ok) {
      const body = await res.json();
      return {
        props: { farms: body.farms },
      };
    }
  };
</script>

<script lang="ts">

type Farm = {
    uid: string;
		name: string;
	};

  export let farms: Farm[];
</script>

<svelte:head>
  <title>My Farms</title>
</svelte:head>

<h1>My Farms</h1>

<ul>
  {#each farms as farm (farm.uid)}
    <li><a href='farms/{farm.uid}'>{farm.name}</a></li>
  {/each}
</ul>

<style>
  li {
    list-style: none;
    padding: 10px;
    font-size: 20px;
  }
</style>
