<script lang="ts">
  type Pig = {
    uid: string;
    name: string;
    img: string;
    farmId: string;
  };

  export let pigs: Pig[];
</script>

<ul>
  {#each pigs as pig}
    <li>
      <a href='/pigs/{pig.uid}'>
        <div>
          <img src="{ pig.img }" alt="Photo of { pig.name }">
          <p>{pig.name}</p>
        </div>
      </a>
    </li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch;
    padding-left: 0;
  }

  li {
    font-size: 20px;
    list-style: none;
    margin: 10px;
    width: 250px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  li:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.26);
  }

  div {
    padding: 15px;
  }

  img {
    width: 200px;
  }

  a:hover {
    text-decoration: none;
  }

</style>
