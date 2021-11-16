<script lang="ts">
	import { goto } from '$app/navigation';

	let email: string;
	let password: string;
	let password1: string;
	let errorMessage = '';

	async function register() {
		errorMessage = '';

		if (password !== password1) {
			errorMessage = 'Passwords do not match!';
			return;
		}

		const res = await fetch(
			'/auth/register',
			{
				method: 'POST',
				body: JSON.stringify({
					email,
					password,
					password1,
				}),
			},
		);

		if (res.ok) {
			goto('/login');
		} else {
			const body = await res.json();
			errorMessage = body.message;
		}
	}

</script>

<svelte:head>
	<title>Register</title>
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
				<div class="mb-3">
					<label for="password1" class="form-label">Repeat Password</label>
					<input bind:value={password1} type="password" class="form-control" id="password1" placeholder="*****">
				</div>
				{#if errorMessage.length > 0}
				<div class="alert alert-danger py-2" role="alert">
					{errorMessage}
				</div>
				{/if}
				<button class="btn btn-primary" on:click={register}>Register</button>
				<a href="/login" class="btn btn-secondary">Login</a>
			</div>
		</div>
	</div>
</div>

