Create or update a thread comment

```graphql
SaveThreadComment(
  id: Int
  threadId: Int
  parentCommentId: Int
  comment: String
  locked: Boolean
): ThreadComment
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThreadComment</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The comment id, required for updating

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThreadComment</code>.<code className="gqlmd-mdx-entity-name">threadId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The id of thread the comment belongs to

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThreadComment</code>.<code className="gqlmd-mdx-entity-name">parentCommentId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The id of thread comment to reply to

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThreadComment</code>.<code className="gqlmd-mdx-entity-name">comment</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The comment markdown text (Min: 1, Max: 12000)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThreadComment</code>.<code className="gqlmd-mdx-entity-name">locked</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the comment tree should be locked. (Mod Only)

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ThreadComment</code></span>](/types/objects/thread-comment.mdx) :badge[object]

Forum Thread Comment
