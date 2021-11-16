<script lang="ts">
	// import { goto, invalidate } from '$app/navigation';

	let email: string;
	let password: string;
	let errorMessage = '';

	async function login() {
		const res = await fetch(
			'/auth/login',
			{
				method: 'POST',
				body: JSON.stringify({
					email,
					password,
				}),
			},
		);

		if (res.ok) {
			// Normally we'd be fancy by using goto(), but that doesn't get the cookie to reload correctly
			// So we need to do a full page load with an actual changing of the location
			window.location.href = '/';
			// await invalidate('/');
			// await goto('/');
		} else {
			const body = await res.json();
			errorMessage = body.message;
		}
	}

</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="row d-flex justify-content-center mt-5">
	<div class="col-md-4 card border-0 bg-transparent">
		<div class="card-body">
			<div class="card-title mb-3">
				<h2>Login</h2>
			</div>
			<div class="card-text">
				<div class="mb-2">
					<label for="email" class="form-label">Email Address</label>
					<input bind:value={email} type="email" class="form-control" id="email" placeholder="name@example.com">
				</div>
				<div class="mb-3">
					<label for="password" class="form-label">Password</label>
					<input bind:value={password} type="password" class="form-control" id="password" placeholder="*****">
				</div>
				{#if errorMessage.length > 0}
				<div class="alert alert-danger py-2" role="alert">
					{errorMessage}
				</div>
				{/if}
				<button class="btn btn-primary" on:click={login}>Login</button>
				<a href="/register" class="btn btn-secondary">Register</a>
			</div>
		</div>
	</div>
</div>

