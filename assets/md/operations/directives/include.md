Directs the executor to include this field or fragment only when the `if` argument is true.

```graphql
directive @include(
  if: Boolean!
) on 
  | FIELD
  | FRAGMENT_SPREAD
  | INLINE_FRAGMENT
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">include</code>.<code className="gqlmd-mdx-entity-name">if</code></span>](#if)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#if}

Included when true.
