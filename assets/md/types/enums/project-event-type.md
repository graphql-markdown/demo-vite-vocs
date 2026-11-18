# ProjectEventType

The kind of change that occurred on a project.

```graphql
enum ProjectEventType {
  CREATED
  UPDATED
  ARCHIVED
}
```

### Values

#### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ProjectEventType</code>.<code className="gqlmd-mdx-entity-name">CREATED</code></span>

The project was created.

#### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ProjectEventType</code>.<code className="gqlmd-mdx-entity-name">UPDATED</code></span>

One or more project fields were updated.

#### <span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ProjectEventType</code>.<code className="gqlmd-mdx-entity-name">ARCHIVED</code></span>

The project was archived.

### Member Of

[`projectChanged`](/operations/subscriptions/project-changed.mdx)  :badge[subscription]<Bullet />[`ProjectEvent`](/types/objects/project-event.mdx)  :badge[object]
