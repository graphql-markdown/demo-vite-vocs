# ProjectEvent

A change delivered to subscribers watching a project.

```graphql
type ProjectEvent {
  type: ProjectEventType!
  project: Project!
  actor: User
  occurredAt: DateTime!
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ProjectEvent</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](/types/objects/project-event)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ProjectEventType!</code></span>](/types/enums/project-event-type.mdx) :badge[non-null] :badge[enum]

The kind of change that occurred.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ProjectEvent</code>.<code className="gqlmd-mdx-entity-name">project</code></span>](/types/objects/project-event)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Project!</code></span>](/types/objects/project.mdx) :badge[non-null] :badge[object]

The project in its state after the change.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ProjectEvent</code>.<code className="gqlmd-mdx-entity-name">actor</code></span>](/types/objects/project-event)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

The user who triggered the change, when known.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ProjectEvent</code>.<code className="gqlmd-mdx-entity-name">occurredAt</code></span>](/types/objects/project-event)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">DateTime!</code></span>](/types/scalars/date-time.mdx) :badge[non-null] :badge[scalar]

When the change occurred.

### Example

```graphql
{
  "type": "UPDATED",
  "project": {
    "id": "project_01",
    "name": "Mobile Refresh",
    "status": "ACTIVE"
  },
  "occurredAt": "2026-09-05T10:15:00Z"
}
```

### Returned By

[`projectChanged`](/operations/subscriptions/project-changed.mdx)  :badge[subscription]
