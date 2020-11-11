<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		max-width: 56rem;
		background-color: white;
		padding: 2rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (max-width: 768px) {
		main {
			padding: .75rem;
		}
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
