<script context="module">
    export async function preload({ params }) {
        const res = await this.fetch(`article/${params.slug}.json`)
        const { html, ...header } = await res.json()

        if (res.status === 200) {
            return { html, header }
        } else {
            this.error(res.status, data.message)
        }
    }
</script>

<script>
    import Header from '../../components/Header.svelte'
    export let header
    export let html
</script>

<article>
    <Header {...header} />
    {@html html}
</article>

<style>
    article :global(h2) {
        font-size: 1.75rem;
        font-weight: 500;
    }

    article :global(h3) {
        font-weight: 500;
    }

    article :global(p) {
        margin-left: 1rem;
        margin-right: 1rem;
    }

    article :global(pre) {
        background-color: #f9f9f9;
        box-shadow: inset 1px 1px 5px rgba(0, 0, 0, .05);
        padding: .5rem;
        border-radius: 2px;
        overflow-x: auto;
    }

    article :global(pre) :global(code) {
        background-color: transparent;
        padding: 0;
    }

    article :global(ul) {
        line-height: 1.5;
    }

    article :global(li) {
        margin: 0 0 .5rem 0;
    }

    @media (max-width: 768px) {
        article :global(p) {
            margin-left: .5rem;
            margin-right: .5rem;
        }
    }
</style>
