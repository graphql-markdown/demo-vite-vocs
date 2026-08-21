Notification query

```graphql
Notification(
  type: NotificationType
  resetNotificationCount: Boolean
  type_in: [NotificationType]
): NotificationUnion
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Notification</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">NotificationType</code></span>](/types/enums/notification-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type}

Filter by the type of notifications

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Notification</code>.<code className="gqlmd-mdx-entity-name">resetNotificationCount</code></span>](#reset-notification-count)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#reset-notification-count}

Reset the unread notification count to 0 on load

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Notification</code>.<code className="gqlmd-mdx-entity-name">type\_in</code></span>](#type-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[NotificationType\]</code></span>](/types/enums/notification-type.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type-in}

Filter by the type of notifications (max 10,000 items)

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">NotificationUnion</code></span>](/types/unions/notification-union.mdx) <Chip color="info" label="union" size="small" variant="outlined" />

Notification union type
