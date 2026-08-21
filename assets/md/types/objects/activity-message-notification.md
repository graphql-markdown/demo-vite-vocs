Notification for when a user is send an activity message

```graphql
type ActivityMessageNotification {
  id: Int!
  userId: Int!
  type: NotificationType
  activityId: Int!
  context: String
  createdAt: Int
  message: MessageActivity
  user: User
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityMessageNotification</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the Notification

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityMessageNotification</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-id}

The if of the user who send the message

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityMessageNotification</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">NotificationType</code></span>](/types/enums/notification-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type}

The type of notification

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityMessageNotification</code>.<code className="gqlmd-mdx-entity-name">activityId</code></span>](#activity-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#activity-id}

The id of the activity message

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityMessageNotification</code>.<code className="gqlmd-mdx-entity-name">context</code></span>](#context)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#context}

The notification context text

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityMessageNotification</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#created-at}

The time the notification was created at

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityMessageNotification</code>.<code className="gqlmd-mdx-entity-name">message</code></span>](#message)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MessageActivity</code></span>](/types/objects/message-activity.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#message}

The message activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityMessageNotification</code>.<code className="gqlmd-mdx-entity-name">user</code></span>](#user)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#user}

The user who sent the message

### Implemented By

[`NotificationUnion`](/types/unions/notification-union.mdx)  <Chip color="info" label="union" size="small" variant="outlined" />
