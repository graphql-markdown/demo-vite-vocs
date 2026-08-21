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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-id}

The user id of the activity's creator

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ActivityType</code></span>](/types/enums/activity-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type}

The type of activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">replyCount</code></span>](#reply-count)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#reply-count}

The number of activity replies

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">text</code></span>](#text)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#text}

The status text (Markdown)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity.text</code>.<code className="gqlmd-mdx-entity-name">asHtml</code></span>](#text-activity-text-as-html)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#text-activity-text-as-html}

Return the string in pre-parsed html instead of markdown

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">siteUrl</code></span>](#site-url)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-url}

The url for the activity page on the AniList website

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">isLocked</code></span>](#is-locked)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-locked}

If the activity is locked and can receive replies

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">isSubscribed</code></span>](#is-subscribed)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-subscribed}

If the currently authenticated user is subscribed to the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">likeCount</code></span>](#like-count)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#like-count}

The amount of likes the activity has

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">isLiked</code></span>](#is-liked)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-liked}

If the currently authenticated user liked the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">isPinned</code></span>](#is-pinned)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-pinned}

If the activity is pinned to the top of the users activity feed

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#created-at}

The time the activity was created at

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">user</code></span>](#user)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#user}

The user who created the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">replies</code></span>](#replies)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ActivityReply\]</code></span>](/types/objects/activity-reply.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#replies}

The written replies to the activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TextActivity</code>.<code className="gqlmd-mdx-entity-name">likes</code></span>](#likes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[User\]</code></span>](/types/objects/user.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#likes}

The users who liked the activity

### Returned By

[`SaveTextActivity`](/operations/mutations/save-text-activity.mdx)  <Chip color="info" label="mutation" size="small" variant="outlined" />

### Implemented By

[`ActivityUnion`](/types/unions/activity-union.mdx)  <Chip color="info" label="union" size="small" variant="outlined" /><Bullet />[`LikeableUnion`](/types/unions/likeable-union.mdx)  <Chip color="info" label="union" size="small" variant="outlined" />
