<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1rem;
	}

	ul {
		display: flex;
		margin: 0;
		padding: 0;
	}

	li {
		display: block;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1rem);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1rem 0.5rem;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a rel="prefetch" aria-current={segment === undefined ? 'page' : undefined} href="/">articles</a></li>
		<li><a rel="prefetch" aria-current={segment === 'about' ? 'page' : undefined} href="/about">about</a></li>
	</ul>
</nav>
