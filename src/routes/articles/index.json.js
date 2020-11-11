import fs from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'

const getAllPosts = () =>
    fs.readdirSync('articles')
        .map(fileName => {
            const post = fs.readFileSync(path.resolve('articles', fileName), 'utf-8')
            return grayMatter(post).data
        })
        .sort((a, b) => new Date(a.date) - new Date(b.date))

export function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json',
    })

    const posts = getAllPosts()
    res.end(JSON.stringify(posts))
}
