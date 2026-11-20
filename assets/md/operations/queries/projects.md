# projects

List projects, optionally filtered by lifecycle status.

```graphql
projects(
  status: ProjectStatus
  limit: Int
): ProjectConnection!
```

## Arguments

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">projects</code>.<code className="gqlmd-mdx-entity-name">status</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ProjectStatus</code></span>](/types/enums/project-status.mdx) :badge[enum]

Limit results to projects in this lifecycle stage.

### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">projects</code>.<code className="gqlmd-mdx-entity-name">limit</code></span><Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Maximum number of projects to return. Defaults to 20.

## Type

### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ProjectConnection</code></span>](/types/objects/project-connection.mdx) :badge[object]

A paginated project result set.

## Example

```graphql
query ListActiveProjects($status: ProjectStatus) {
  projects(status: $status) {
    totalCount
    nodes {
      id
      name
      status
      owner {
        name
      }
    }
  }
}
```
