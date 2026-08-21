Replay to an activity item

```graphql
type ActivityReply {
  id: Int!
  userId: Int
  activityId: Int
  text(
    asHtml: Boolean
  ): String
  likeCount: Int!
  isLiked: Boolean
  createdAt: Int!
  user: User
  likes: [User]
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityReply</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the reply

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityReply</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-id}

The id of the replies creator

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityReply</code>.<code className="gqlmd-mdx-entity-name">activityId</code></span>](#activity-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#activity-id}

The id of the parent activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityReply</code>.<code className="gqlmd-mdx-entity-name">text</code></span>](#text)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#text}

The reply text

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityReply.text</code>.<code className="gqlmd-mdx-entity-name">asHtml</code></span>](#activity-reply-text-as-html)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#activity-reply-text-as-html}

Return the string in pre-parsed html instead of markdown

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityReply</code>.<code className="gqlmd-mdx-entity-name">likeCount</code></span>](#like-count)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#like-count}

The amount of likes the reply has

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityReply</code>.<code className="gqlmd-mdx-entity-name">isLiked</code></span>](#is-liked)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-liked}

If the currently authenticated user liked the reply

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityReply</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#created-at}

The time the reply was created at

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityReply</code>.<code className="gqlmd-mdx-entity-name">user</code></span>](#user)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#user}

The user who created reply

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityReply</code>.<code className="gqlmd-mdx-entity-name">likes</code></span>](#likes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[User\]</code></span>](/types/objects/user.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#likes}

The users who liked the reply

### Returned By

[`ActivityReply`](/operations/queries/activity-reply.mdx)  <Chip color="info" label="query" size="small" variant="outlined" /><Bullet />[`SaveActivityReply`](/operations/mutations/save-activity-reply.mdx)  <Chip color="info" label="mutation" size="small" variant="outlined" />

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ListActivity`](/types/objects/list-activity.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MessageActivity`](/types/objects/message-activity.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Page`](/types/objects/page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`TextActivity`](/types/objects/text-activity.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />

### Implemented By

[`LikeableUnion`](/types/unions/likeable-union.mdx)  <Chip color="info" label="union" size="small" variant="outlined" />
