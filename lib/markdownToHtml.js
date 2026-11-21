import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

function demoteTopHeadings() {
  return (tree) => {
    const headings = []
    const visit = (node) => {
      if (node.type === 'heading') headings.push(node)
      if (Array.isArray(node.children)) node.children.forEach(visit)
    }
    visit(tree)

    if (headings.some((h) => h.depth === 1)) {
      headings.forEach((h) => {
        h.depth = Math.min(6, h.depth + 1)
      })
    }
  }
}

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(remarkGfm)
    .use(demoteTopHeadings)
    .use(remarkHtml)
    .process(markdown)
  return result.toString()
}
