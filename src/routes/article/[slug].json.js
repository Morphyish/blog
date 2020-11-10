import path from 'path'
import fs from 'fs'
import grayMatter from 'gray-matter'
import marked from 'marked'
import hljs from 'highlight.js'

const getPost = fileName =>
    fs.readFileSync(path.resolve('articles', `${fileName}.md`), 'utf-8')

export function get(req, res, next) {
    const { slug } = req.params

    // get the markdown text
    try {
        const post = getPost(slug)

        // function that expose helpful callbacks
        // to manipulate the data before convert it into html
        const renderer = new marked.Renderer()

        // use hljs to highlight our blocks codes
        renderer.code = (source, lang) => {
            const { value: highlighted, language } = hljs.highlight(lang, source)
            return `<pre class='language-${language}'><code>${highlighted}</code></pre>`
        }

        // parse the md to get front matter
        // and the content without escaping characters
        const { data, content } = grayMatter(post)

        const html = marked(content, { renderer })

        res.writeHead(200, {
            'Content-Type': 'application/json',
        })

        res.end(JSON.stringify({ html, ...data }))
    } catch {
        res.writeHead(404, {
            'Content-Type': 'application/json',
        })

        res.end(
            JSON.stringify({
                message: `Article not found`,
            }),
        )
    }
}
