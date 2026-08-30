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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityReply</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the reply

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityReply</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The id of the replies creator

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityReply</code>.<code className="gqlmd-mdx-entity-name">activityId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The id of the parent activity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityReply</code>.<code className="gqlmd-mdx-entity-name">text</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The reply text

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityReply.text</code>.<code className="gqlmd-mdx-entity-name">asHtml</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Return the string in pre-parsed html instead of markdown

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityReply</code>.<code className="gqlmd-mdx-entity-name">likeCount</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The amount of likes the reply has

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityReply</code>.<code className="gqlmd-mdx-entity-name">isLiked</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the currently authenticated user liked the reply

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityReply</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The time the reply was created at

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityReply</code>.<code className="gqlmd-mdx-entity-name">user</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

The user who created reply

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ActivityReply</code>.<code className="gqlmd-mdx-entity-name">likes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[User\]</code></span>](/types/objects/user.mdx) :badge[list] :badge[object]

The users who liked the reply

### Returned By

[`ActivityReply`](/operations/queries/activity-reply.mdx)  :badge[query]<Bullet />[`SaveActivityReply`](/operations/mutations/save-activity-reply.mdx)  :badge[mutation]

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  :badge[object]<Bullet />[`ListActivity`](/types/objects/list-activity.mdx)  :badge[object]<Bullet />[`MessageActivity`](/types/objects/message-activity.mdx)  :badge[object]<Bullet />[`Page`](/types/objects/page.mdx)  :badge[object]<Bullet />[`TextActivity`](/types/objects/text-activity.mdx)  :badge[object]

### Implemented By

[`LikeableUnion`](/types/unions/likeable-union.mdx)  :badge[union]
