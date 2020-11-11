<script context="module">
	export function preload() {
		return this.fetch(`articles.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import Link from '../components/Link.svelte'

	export let posts;
</script>

<svelte:head>
	<title>Morphyish's blog</title>
</svelte:head>

<h1>Scribbles and code</h1>

<ul>
	{#each posts as post}
		<li>
			<Link {post} />
		</li>
	{/each}
</ul>

<style>
	h1 {
		margin-bottom: 3rem;
	}

	ul {
		padding: 0;
		margin: 0 0 1rem 0;
		list-style: none;
	}
</style>
