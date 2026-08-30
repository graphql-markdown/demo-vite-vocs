User text activity

```graphql
type TextActivity {
  id: Int!
  userId: Int
  type: ActivityType
  replyCount: Int!
  text(
    asHtml: Boolean
  ): String
  siteUrl: String
  isLocked: Boolean
  isSubscribed: Boolean
  likeCount: Int!
  isLiked: Boolean
  isPinned: Boolean
  createdAt: Int!
  user: User
  replies: [ActivityReply]
  likes: [User]
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The user id of the activity's creator

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ActivityType</code></span>](/types/enums/activity-type.mdx) :badge[enum]

The type of activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">replyCount</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The number of activity replies

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">text</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The status text (Markdown)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity.text</code>.<code className="gqlmd-mdx-entity-name">asHtml</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Return the string in pre-parsed html instead of markdown

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">siteUrl</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The url for the activity page on the AniList website

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">isLocked</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the activity is locked and can receive replies

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">isSubscribed</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the currently authenticated user is subscribed to the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">likeCount</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The amount of likes the activity has

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">isLiked</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the currently authenticated user liked the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">isPinned</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the activity is pinned to the top of the users activity feed

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The time the activity was created at

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">user</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

The user who created the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">replies</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ActivityReply\]</code></span>](/types/objects/activity-reply.mdx) :badge[list] :badge[object]

The written replies to the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">likes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[User\]</code></span>](/types/objects/user.mdx) :badge[list] :badge[object]

The users who liked the activity

### Returned By

[`SaveTextActivity`](/operations/mutations/save-text-activity.mdx)  :badge[mutation]

### Implemented By

[`ActivityUnion`](/types/unions/activity-union.mdx)  :badge[union]<Bullet />[`LikeableUnion`](/types/unions/likeable-union.mdx)  :badge[union]
