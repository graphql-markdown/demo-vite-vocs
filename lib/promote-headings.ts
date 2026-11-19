type Node = { type: string; depth?: number; children?: Node[] }

/**
 * Vocs' "On this page" outline only lists headings at its minimum level (h2) as
 * top-level items. Generated reference pages start their sections at h3, so the
 * outline rendered empty. On pages with no h2, promote every h3+ heading one level.
 */
export function remarkPromoteHeadings() {
  return (tree: Node) => {
    const headings: Node[] = []
    const visit = (node: Node) => {
      if (node.type === 'heading') headings.push(node)
      node.children?.forEach(visit)
    }
    visit(tree)
    if (headings.some((heading) => heading.depth === 2)) return
    for (const heading of headings) {
      if (heading.depth && heading.depth >= 3) heading.depth -= 1
    }
  }
}
