Notification query

```graphql
Notification(
  type: NotificationType
  resetNotificationCount: Boolean
  type_in: [NotificationType]
): NotificationUnion
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Notification</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">NotificationType</code></span>](/types/enums/notification-type.mdx) :badge[enum]

Filter by the type of notifications

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Notification</code>.<code className="gqlmd-mdx-entity-name">resetNotificationCount</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Reset the unread notification count to 0 on load

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Notification</code>.<code className="gqlmd-mdx-entity-name">type\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[NotificationType\]</code></span>](/types/enums/notification-type.mdx) :badge[list] :badge[enum]

Filter by the type of notifications (max 10,000 items)

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">NotificationUnion</code></span>](/types/unions/notification-union.mdx) :badge[union]

Notification union type
