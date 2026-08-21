Notification option input

```graphql
input NotificationOptionInput {
  type: NotificationType
  enabled: Boolean
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationOptionInput</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">NotificationType</code></span>](/types/enums/notification-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type}

The type of notification

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">NotificationOptionInput</code>.<code className="gqlmd-mdx-entity-name">enabled</code></span>](#enabled)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#enabled}

Whether this type of notification is enabled

### Member Of

[`UpdateUser`](/operations/mutations/update-user.mdx)  <Chip color="info" label="mutation" size="small" variant="outlined" />
