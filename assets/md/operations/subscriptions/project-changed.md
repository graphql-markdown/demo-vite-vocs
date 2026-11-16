# projectChanged

Receive an event whenever a project changes in the workspace.

```graphql
projectChanged(
  projectId: ID
  types: [ProjectEventType!]
): ProjectEvent!
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">projectChanged</code>.<code className="gqlmd-mdx-entity-name">projectId</code></span>](/operations/subscriptions/project-changed)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ID</code></span>](/types/scalars/id.mdx) :badge[scalar]

Limit events to a single project.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">projectChanged</code>.<code className="gqlmd-mdx-entity-name">types</code></span>](/operations/subscriptions/project-changed)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ProjectEventType!\]</code></span>](/types/enums/project-event-type.mdx) :badge[list] :badge[enum]

Limit events to these change kinds.

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ProjectEvent</code></span>](/types/objects/project-event.mdx) :badge[object]

A change delivered to subscribers watching a project.

### Example

```graphql
subscription WatchProject($projectId: ID, $types: [ProjectEventType!]) {
  projectChanged(projectId: $projectId, types: $types) {
    type
    occurredAt
    project {
      id
      name
      status
    }
    actor {
      name
    }
  }
}
```
