No description

```graphql
Page(
  page: Int
  perPage: Int
): Page
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page}

The page number

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#per-page}

The amount of entries per page, max 50

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Page</code></span>](/types/objects/page.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Page of data. Limited to a max depth of 5000 entries. This is calculated as the page parameter multiplied by the perPage parameter.
