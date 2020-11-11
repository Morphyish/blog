<script>
    import { formatDate } from '../utils'

    export let title
    export let date
    export let description
    export let html
</script>

<svelte:head>
    <title>{title} - Morphyish's blog</title>
</svelte:head>

<header>
    <p class="date"><time datetime={date}>{formatDate(date)}</time></p>
    <h1>{title}</h1>
    <p class="description">{description}</p>
</header>

<style>
    header {
        margin-bottom: 3rem;
    }

    .date {
        margin: 0;
        text-align: right;
    }
</style>
