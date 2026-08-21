Comment query

```graphql
ThreadComment(
  id: Int
  threadId: Int
  userId: Int
  sort: [ThreadCommentSort]
): [ThreadComment]
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadComment</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

Filter by the comment id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadComment</code>.<code className="gqlmd-mdx-entity-name">threadId</code></span>](#thread-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#thread-id}

Filter by the thread id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadComment</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-id}

Filter by the user id of the comment's creator

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ThreadComment</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ThreadCommentSort\]</code></span>](/types/enums/thread-comment-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#sort}

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ThreadComment</code></span>](/types/objects/thread-comment.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Forum Thread Comment
