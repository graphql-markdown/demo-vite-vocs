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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaMergeNotification</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the Notification

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaMergeNotification</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">NotificationType</code></span>](/types/enums/notification-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type}

The type of notification

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaMergeNotification</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#media-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id}

The id of the media that was merged into

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaMergeNotification</code>.<code className="gqlmd-mdx-entity-name">deletedMediaTitles</code></span>](#deleted-media-titles)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#deleted-media-titles}

The title of the deleted media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaMergeNotification</code>.<code className="gqlmd-mdx-entity-name">context</code></span>](#context)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#context}

The reason for the media data change

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaMergeNotification</code>.<code className="gqlmd-mdx-entity-name">reason</code></span>](#reason)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#reason}

The reason for the media merge

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaMergeNotification</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#created-at}

The time the notification was created at

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaMergeNotification</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#media)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#media}

The media that was merged into

### Implemented By

[`NotificationUnion`](/types/unions/notification-union.mdx)  <Chip color="info" label="union" size="small" variant="outlined" />
