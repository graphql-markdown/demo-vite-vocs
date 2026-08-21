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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThreadComment</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The comment id, required for updating

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThreadComment</code>.<code className="gqlmd-mdx-entity-name">threadId</code></span>](#thread-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#thread-id}

The id of thread the comment belongs to

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThreadComment</code>.<code className="gqlmd-mdx-entity-name">parentCommentId</code></span>](#parent-comment-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#parent-comment-id}

The id of thread comment to reply to

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThreadComment</code>.<code className="gqlmd-mdx-entity-name">comment</code></span>](#comment)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#comment}

The comment markdown text (Min: 1, Max: 12000)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThreadComment</code>.<code className="gqlmd-mdx-entity-name">locked</code></span>](#locked)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#locked}

If the comment tree should be locked. (Mod Only)

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ThreadComment</code></span>](/types/objects/thread-comment.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Forum Thread Comment
