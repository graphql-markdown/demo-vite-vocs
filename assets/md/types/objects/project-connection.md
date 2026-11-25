# ProjectConnection

A paginated project result set.

```graphql
type ProjectConnection {
  nodes: [Project!]!
  totalCount: Int!
}
```

## Fields

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ProjectConnection</code>.<code className="gqlmd-mdx-entity-name">nodes</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Project!\]!</code></span>](/types/objects/project.mdx) :badge[non-null] :badge[object]

Projects in the current result page.

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ProjectConnection</code>.<code className="gqlmd-mdx-entity-name">totalCount</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The total number of projects matching the query.

## Example

```graphql
{
  "nodes": [
    {
      "id": "project_01",
      "name": "Mobile Refresh",
      "status": "ACTIVE",
      "owner": {
        "id": "user_01",
        "name": "Avery Chen"
      },
      "updatedAt": "2026-09-05T10:15:00Z"
    }
  ]
}
```

## Returned By

[`projects`](/operations/queries/projects.mdx)  :badge[query]

[View as Markdown](https://graphql-markdown.dev/demo-vite-vocs/types/objects/project-connection.md)
