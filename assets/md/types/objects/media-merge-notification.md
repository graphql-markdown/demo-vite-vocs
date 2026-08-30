Notification for when a media entry is merged into another for a user who had it on their list

```graphql
type MediaMergeNotification {
  id: Int!
  type: NotificationType
  mediaId: Int!
  deletedMediaTitles: [String]
  context: String
  reason: String
  createdAt: Int
  media: Media
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaMergeNotification</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the Notification

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaMergeNotification</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">NotificationType</code></span>](/types/enums/notification-type.mdx) :badge[enum]

The type of notification

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaMergeNotification</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the media that was merged into

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaMergeNotification</code>.<code className="gqlmd-mdx-entity-name">deletedMediaTitles</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

The title of the deleted media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaMergeNotification</code>.<code className="gqlmd-mdx-entity-name">context</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The reason for the media data change

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaMergeNotification</code>.<code className="gqlmd-mdx-entity-name">reason</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The reason for the media merge

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaMergeNotification</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The time the notification was created at

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaMergeNotification</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) :badge[object]

The media that was merged into

### Implemented By

[`NotificationUnion`](/types/unions/notification-union.mdx)  :badge[union]
