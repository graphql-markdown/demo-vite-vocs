Provide AniList markdown to be converted to html (Requires auth)

```graphql
Markdown(
  markdown: String!
): ParsedMarkdown
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Markdown</code>.<code className="gqlmd-mdx-entity-name">markdown</code></span>](#markdown)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String!</code></span>](/types/scalars/string.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#markdown}

The markdown to be parsed to html

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ParsedMarkdown</code></span>](/types/objects/parsed-markdown.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Provides the parsed markdown as html
