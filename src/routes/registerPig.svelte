<script context="module" lang="ts">
	export const prerender = true;
</script>



<svelte:head>
	<title>Register Pig</title>
</svelte:head>

<section>
	<label for="name">Pig Name</label><br>
    <input type="text" name="name" id="name" placeholder="Wilbur"><br>
    <label for="description">Description</label><br>
    <textarea name="desctiption" id="description" cols="30" rows="3" placeholder="spot below left ear"></textarea><br>
    <label for="breed">Breed</label><br>
    <input type="text"><br>
    <label for="dob"> Aproximate Date of Birth</label><br>
    <input type="date"><br>
    <button>Add Pig to Farm</button>

	
</section>

<style>
    
</style>