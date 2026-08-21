Thread query

```graphql
Thread(
  id: Int
  userId: Int
  replyUserId: Int
  subscribed: Boolean
  categoryId: Int
  mediaCategoryId: Int
  search: String
  id_in: [Int]
  sort: [ThreadSort]
): Thread
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

Filter by the thread id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-id}

Filter by the user id of the thread's creator

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">replyUserId</code></span>](#reply-user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#reply-user-id}

Filter by the user id of the last user to comment on the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">subscribed</code></span>](#subscribed)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#subscribed}

Filter by if the currently authenticated user's subscribed threads

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">categoryId</code></span>](#category-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#category-id}

Filter by thread category id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">mediaCategoryId</code></span>](#media-category-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-category-id}

Filter by thread media id category

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#search)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#search}

Filter by search query

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id-in}

Filter by the thread id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ThreadSort\]</code></span>](/types/enums/thread-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#sort}

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Thread</code></span>](/types/objects/thread.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Forum Thread
