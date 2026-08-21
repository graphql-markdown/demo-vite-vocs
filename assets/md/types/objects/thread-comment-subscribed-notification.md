Notification for when a user replies to a subscribed forum thread

```graphql
type ThreadCommentSubscribedNotification {
  id: Int!
  userId: Int!
  type: NotificationType
  commentId: Int!
  context: String
  createdAt: Int
  thread: Thread
  comment: ThreadComment
  user: User
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadCommentSubscribedNotification</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the Notification

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadCommentSubscribedNotification</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-id}

The id of the user who commented on the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadCommentSubscribedNotification</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">NotificationType</code></span>](/types/enums/notification-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type}

The type of notification

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadCommentSubscribedNotification</code>.<code className="gqlmd-mdx-entity-name">commentId</code></span>](#comment-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#comment-id}

The id of the new comment in the subscribed thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadCommentSubscribedNotification</code>.<code className="gqlmd-mdx-entity-name">context</code></span>](#context)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#context}

The notification context text

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadCommentSubscribedNotification</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#created-at}

The time the notification was created at

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadCommentSubscribedNotification</code>.<code className="gqlmd-mdx-entity-name">thread</code></span>](#thread)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Thread</code></span>](/types/objects/thread.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#thread}

The thread that the relevant comment belongs to

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadCommentSubscribedNotification</code>.<code className="gqlmd-mdx-entity-name">comment</code></span>](#comment)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ThreadComment</code></span>](/types/objects/thread-comment.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#comment}

The reply thread comment

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadCommentSubscribedNotification</code>.<code className="gqlmd-mdx-entity-name">user</code></span>](#user)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#user}

The user who replied to the subscribed thread

### Implemented By

[`NotificationUnion`](/types/unions/notification-union.mdx)  <Chip color="info" label="union" size="small" variant="outlined" />
