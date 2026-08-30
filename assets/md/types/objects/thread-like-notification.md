Notification for when a thread is liked

```graphql
type ThreadLikeNotification {
  id: Int!
  userId: Int!
  type: NotificationType
  threadId: Int!
  context: String
  createdAt: Int
  thread: Thread
  comment: ThreadComment
  user: User
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadLikeNotification</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the Notification

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadLikeNotification</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the user who liked to the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadLikeNotification</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">NotificationType</code></span>](/types/enums/notification-type.mdx) :badge[enum]

The type of notification

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadLikeNotification</code>.<code className="gqlmd-mdx-entity-name">threadId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the thread which was liked

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadLikeNotification</code>.<code className="gqlmd-mdx-entity-name">context</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The notification context text

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadLikeNotification</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The time the notification was created at

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadLikeNotification</code>.<code className="gqlmd-mdx-entity-name">thread</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Thread</code></span>](/types/objects/thread.mdx) :badge[object]

The thread that the relevant comment belongs to

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadLikeNotification</code>.<code className="gqlmd-mdx-entity-name">comment</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ThreadComment</code></span>](/types/objects/thread-comment.mdx) :badge[object]

The liked thread comment

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadLikeNotification</code>.<code className="gqlmd-mdx-entity-name">user</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

The user who liked the activity

### Implemented By

[`NotificationUnion`](/types/unions/notification-union.mdx)  :badge[union]
