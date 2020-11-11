export function formatDate(d) {
    const date = new Date(d)
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    return date.toLocaleDateString(undefined, options)
}
