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

<h1 class="mx-auto">My Farms</h1>

<ul class="list-unstyled mx-auto w-75">
  {#each farms as farm (farm.uid)}
    <li class="p-1"><a href='farms/{farm.uid}' class="text-decoration-none fs-3">{farm.name}</a></li>
  {/each}
</ul>

<style>
  
</style>
