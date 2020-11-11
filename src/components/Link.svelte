<script>
    import { formatDate } from '../utils'

    export let post = {}

    $: label = `${post.title}, published on ${formatDate(post.date)}`
</script>

<a rel="prefetch" href="article/{post.slug}" aria-label={label}>
    <span class="title-container">
        <time datetime={post.date}>{formatDate(post.date)}</time>
        <span class="title">{post.title}</span>
    </span>
    <span>{post.description}</span>
</a>

<style>
    a {
        position: relative;
        display: block;
        padding: .5rem 1rem;
        text-decoration: none;
        border-left: 2px solid rgba(255,62,0,0.1);
    }

    a:hover,
    a:focus,
    a:active {
        outline: 0;
        border-color: #ff3e00;
    }

    a::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 0;
        background: rgba(255,62,0,0.1);
        transition: all 250ms linear;
    }

    a:hover::before,
    a:focus::before,
    a:active::before {
        width: 100%;
    }

    .title-container {
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
    }

    .title {
        font-size: 1.5rem;
    }

    time {
        font-style: italic;
        margin-left: auto;
    }
</style>
