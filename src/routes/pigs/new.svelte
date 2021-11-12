<svelte:head>
	<title>Register Pig</title>
</svelte:head>

<section>
	<form>
		<div class="form-group">
			<label for="name">Pig Name</label><br />
			<input type="text" class="form-control" name="name" id="name" placeholder="Wilbur" /><br />
		</div>
		<div class="form-group">
			<label for="description">Description</label>
			<textarea
				class="form-control"
				name="desctiption"
				id="description"
				cols="30"
				rows="3"
				placeholder="spot below left ear"
			/><br />
		</div>
		<div class="form-group">
			<label for="breed">Breed</label>
			<input type="text" class="form-control" /><br>
		</div>
		<div class="form-group">
			<label for="dob"> Aproximate Date of Birth</label>
			<input type="date" class="form-control"/><br />
		</div>
		<button type="submit" class="btn btn-primary">Add Pig to Farm</button>
	</form>
</section>
