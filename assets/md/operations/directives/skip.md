Directs the executor to skip this field or fragment when the `if` argument is true.

```graphql
directive @skip(
  if: Boolean!
) on 
  | FIELD
  | FRAGMENT_SPREAD
  | INLINE_FRAGMENT
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">skip</code>.<code className="gqlmd-mdx-entity-name">if</code></span>](#if)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#if}

Skipped when true.
