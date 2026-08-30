Provide AniList markdown to be converted to html (Requires auth)

```graphql
Markdown(
  markdown: String!
): ParsedMarkdown
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Markdown</code>.<code className="gqlmd-mdx-entity-name">markdown</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String!</code></span>](/types/scalars/string.mdx) :badge[non-null] :badge[scalar]

The markdown to be parsed to html

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ParsedMarkdown</code></span>](/types/objects/parsed-markdown.mdx) :badge[object]

Provides the parsed markdown as html
