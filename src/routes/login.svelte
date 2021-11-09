<script lang='ts'>
	let loggedIn = true;

	function handleClick() {
		loggedIn = !loggedIn;
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="row">
    <div class="col-sm-4 login-box">
	<div class="title-box">
	    <h2>Admin Login</h2>
	    <p>Please enter  your Login details !</p>
	</div>
	<div class="row">
	    <input type="text" placeholder="Enter Email/Username" class="form-control inpt-sm">
	</div>
	<div class="row">
	    <input type="text" placeholder="Enter Password" class="form-control inpt-sm">
	</div>
	<div class="row chk-lab">
	    <div class="col-sm-6">
		<input type="checkbox"> <label>Remember me</label>
	    </div>
	    <div class="col-sm-6 colkd">
		<a>Forget Password ?</a>
	    </div>
	</div>
	<div class=" submot-row">
	    <div class="btn btn-sm btn-success"><i class="fas fa-paper-plane"></i> Submit</div>
	</div>
    </div>
</div>


<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
</style>
