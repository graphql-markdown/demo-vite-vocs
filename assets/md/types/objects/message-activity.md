User message activity

```graphql
type MessageActivity {
  id: Int!
  recipientId: Int
  messengerId: Int
  type: ActivityType
  replyCount: Int!
  message(
    asHtml: Boolean
  ): String
  isLocked: Boolean
  isSubscribed: Boolean
  likeCount: Int!
  isLiked: Boolean
  isPinned: Boolean
  isPrivate: Boolean
  siteUrl: String
  createdAt: Int!
  recipient: User
  messenger: User
  replies: [ActivityReply]
  likes: [User]
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">recipientId</code></span>](#recipient-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#recipient-id}

The user id of the activity's recipient

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">messengerId</code></span>](#messenger-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#messenger-id}

The user id of the activity's sender

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ActivityType</code></span>](/types/enums/activity-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type}

The type of the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">replyCount</code></span>](#reply-count)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#reply-count}

The number of activity replies

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">message</code></span>](#message)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#message}

The message text (Markdown)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity.message</code>.<code className="gqlmd-mdx-entity-name">asHtml</code></span>](#message-activity-message-as-html)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#message-activity-message-as-html}

Return the string in pre-parsed html instead of markdown

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">isLocked</code></span>](#is-locked)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-locked}

If the activity is locked and can receive replies

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">isSubscribed</code></span>](#is-subscribed)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-subscribed}

If the currently authenticated user is subscribed to the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">likeCount</code></span>](#like-count)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#like-count}

The amount of likes the activity has

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">isLiked</code></span>](#is-liked)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-liked}

If the currently authenticated user liked the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">isPinned</code></span>](#is-pinned)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-pinned}

If the activity is pinned to the top of the users activity feed

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">isPrivate</code></span>](#is-private)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-private}

If the message is private and only viewable to the sender and recipients

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">siteUrl</code></span>](#site-url)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-url}

The url for the activity page on the AniList website

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#created-at}

The time the activity was created at

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">recipient</code></span>](#recipient)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#recipient}

The user who the activity message was sent to

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">messenger</code></span>](#messenger)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#messenger}

The user who sent the activity message

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">replies</code></span>](#replies)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ActivityReply\]</code></span>](/types/objects/activity-reply.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#replies}

The written replies to the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">likes</code></span>](#likes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[User\]</code></span>](/types/objects/user.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#likes}

The users who liked the activity

### Returned By

[`SaveMessageActivity`](/operations/mutations/save-message-activity.mdx)  <Chip color="info" label="mutation" size="small" variant="outlined" />

### Member Of

[`ActivityMessageNotification`](/types/objects/activity-message-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />

### Implemented By

[`ActivityUnion`](/types/unions/activity-union.mdx)  <Chip color="info" label="union" size="small" variant="outlined" /><Bullet />[`LikeableUnion`](/types/unions/likeable-union.mdx)  <Chip color="info" label="union" size="small" variant="outlined" />
