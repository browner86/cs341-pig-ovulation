<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Pig Ovulation</title>
</svelte:head>

<div class="content">
	<h1>Deterimining ovulation cycle in hogs</h1>
	<h2>Why would you need to know the ovulation cycle of your pigs?</h2>
	<p>Short answer: Pigs eat a lot of feed and feed costs money.</p>

	<p>
		Pigs are one of the most popular animals for first time farmers and homesteaders. This is partly
		because they can be raised from birth to market in just 17 weeks. The pig farming game is all
		about efficiency and timing.
	</p>
	<p>
		Breeding pigs can get particularly costly due to the cost of feeding the sows year round. If the
		enterprise also is feeding a boar year round costs go up significantly. Many pig farmers opt to
		using artificial insemenation to keep their sows bred to cut feed costs and allow for a more
		diverce gene pool.
	</p>
        In order to efficiently and effectivly perform artificial insemenation, the farmer must know which 
        day in the sow's cycle will the service be effective. The farmer also needs to know if the insemenation 
        was successfull, which can also be determined by careful monitoring of the hogs estrus cycle.
	<p />
    <h2>How to check the ovulation cycle in pigs.</h2>
    <p>sows and gilts(females being bred for the first time) have a 21 day ovulation cycle. </p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
    h2 {
        font-size: larger;
    }
</style>
