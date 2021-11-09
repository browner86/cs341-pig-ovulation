<script context='module'>
  export async function load({ fetch }) {
    const res = await fetch('/pigs/getpigs');

    if (res.ok) {
      const body = await res.json();
      return {
        props: { pigs: body.pigs, },
      };
    }
  };
</script>

<script lang="ts">
  import PigList from '$lib/PigList.svelte';

  type Pig = {
    uid: string;
    name: string;
    img: string;
    farmId: string;
  };

  export let pigs: Pig[];
</script>

<svelte:head>
  <title>My pigs</title>
</svelte:head>

<h1>My pigs</h1>

<a class="btn btn-primary" href="/pigs/new">Add New Pig</a>

<PigList {pigs} />
