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

    h1 {
        border-left: 2px solid #ff3e00;
        padding: 0 1rem;
    }

    .date {
        margin: 0;
        text-align: right;
    }

    .description {
        font-size: 1.25rem;
        margin-left: 4rem;
    }

    @media (max-width: 768px) {
        .description {
            margin-left: 0;
            margin-right: 0;
        }
    }
</style>
