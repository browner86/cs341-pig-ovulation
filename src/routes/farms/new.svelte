<script lang="ts">
	import { goto } from '$app/navigation';
	let farmName, farmRegion, errorMessage = '';

	async function createFarm() {
		errorMessage = '';

		const res = await fetch(
			'/farms/newFarm',
			{
				method: 'POST',
				body: JSON.stringify({
					farmName,
					farmRegion
				})
			}
		);

		if (res.ok) {
			goto('/farms')
		} else {
			const body = await res.json();
			errorMessage = body.message;
		}

	}
</script>

<svelte:head>
	<title>Add a Farm</title>
</svelte:head>

<section>
	<form>
		<div class='form-group'>
			<label for='farmName' class='form-label'>Farm Name</label>
			<input type='text' bind:value={farmName} class='form-control' name='farmName' id='farmName'>
		</div>

		<div class='form-group'>
			<label for='farmRegion' class='form-label'>Farm Region</label>
			<input type='text' bind:value={farmRegion} class='form-control' name='farmRegion' id='farmRegion'>
		</div>

		<button type='submit' class='btn btn-primary' on:click={createFarm}> Add Farm</button>
		{#if errorMessage.length > 0}
			<div class="alert alert-danger py-2" role="alert">
				{errorMessage}
			</div>
		{/if}
	</form>
</section>
