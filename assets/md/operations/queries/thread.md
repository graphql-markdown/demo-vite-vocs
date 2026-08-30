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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the thread id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the user id of the thread's creator

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">replyUserId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the user id of the last user to comment on the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">subscribed</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter by if the currently authenticated user's subscribed threads

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">categoryId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by thread category id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">mediaCategoryId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by thread media id category

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by search query

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the thread id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Thread</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ThreadSort\]</code></span>](/types/enums/thread-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Thread</code></span>](/types/objects/thread.mdx) :badge[object]

Forum Thread
