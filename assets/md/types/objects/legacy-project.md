# LegacyProject

:badge[deprecated]

Use Project instead for active workspace work.

:::warning[Deprecated]
Replaced by [`Project`](/types/objects/project.mdx) to support ownership and lifecycle status.
:::

```graphql
type LegacyProject {
  id: ID!
  name: String!
}
```

## Fields

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">LegacyProject</code>.<code className="gqlmd-mdx-entity-name">id</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ID!</code></span>](/types/scalars/id.mdx) :badge[non-null] :badge[scalar]

The unique identifier of the legacy project.

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">LegacyProject</code>.<code className="gqlmd-mdx-entity-name">name</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String!</code></span>](/types/scalars/string.mdx) :badge[non-null] :badge[scalar]

The legacy project name.

## Example

```graphql
{}
```

[View as Markdown](https://graphql-markdown.dev/demo-vite-vocs/types/objects/legacy-project.md)
