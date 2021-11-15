<script lang="ts">
  import type { Pig } from '$lib/types';
  export let pigs: Pig[];
</script>

<ul class="d-flex flex-wrap justify-content-evenly ps-0">
  {#each pigs as pig}
    <li class="m-2 rounded-1 card list-unstyled">
      <a class="text-dark text-decoration-none" href="/pigs/{pig.uid}">
        <div class="p-3">
          <img class="rounded-1 w-100" src="{ pig.img }" alt="Photo of { pig.name }">
          <h2 class="h4 py-1">{pig.name}</h2>
          <p>{pig.description}</p>
        </div>
      </a>
    </li>
  {/each}
</ul>

<style>
  li {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    width: 250px;
  }

  li:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.26);
  }
</style>
