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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">recipientId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The user id of the activity's recipient

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">messengerId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The user id of the activity's sender

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ActivityType</code></span>](/types/enums/activity-type.mdx) :badge[enum]

The type of the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">replyCount</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The number of activity replies

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">message</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The message text (Markdown)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity.message</code>.<code className="gqlmd-mdx-entity-name">asHtml</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Return the string in pre-parsed html instead of markdown

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">isLocked</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the activity is locked and can receive replies

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">isSubscribed</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the currently authenticated user is subscribed to the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">likeCount</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The amount of likes the activity has

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">isLiked</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the currently authenticated user liked the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">isPinned</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the activity is pinned to the top of the users activity feed

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">isPrivate</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the message is private and only viewable to the sender and recipients

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">siteUrl</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The url for the activity page on the AniList website

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The time the activity was created at

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">recipient</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

The user who the activity message was sent to

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">messenger</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

The user who sent the activity message

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">replies</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ActivityReply\]</code></span>](/types/objects/activity-reply.mdx) :badge[list] :badge[object]

The written replies to the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MessageActivity</code>.<code className="gqlmd-mdx-entity-name">likes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[User\]</code></span>](/types/objects/user.mdx) :badge[list] :badge[object]

The users who liked the activity

### Returned By

[`SaveMessageActivity`](/operations/mutations/save-message-activity.mdx)  :badge[mutation]

### Member Of

[`ActivityMessageNotification`](/types/objects/activity-message-notification.mdx)  :badge[object]

### Implemented By

[`ActivityUnion`](/types/unions/activity-union.mdx)  :badge[union]<Bullet />[`LikeableUnion`](/types/unions/likeable-union.mdx)  :badge[union]
