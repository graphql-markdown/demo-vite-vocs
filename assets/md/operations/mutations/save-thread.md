Create or update a forum thread

```graphql
SaveThread(
  id: Int
  title: String
  body: String
  categories: [Int]
  mediaCategories: [Int]
  sticky: Boolean
  locked: Boolean
): Thread
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThread</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The thread id, required for updating

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThread</code>.<code className="gqlmd-mdx-entity-name">title</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The title of the thread (Min: 6, Max: 120)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThread</code>.<code className="gqlmd-mdx-entity-name">body</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The main text body of the thread (Max: 30000)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThread</code>.<code className="gqlmd-mdx-entity-name">categories</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Forum categories the thread should be within

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThread</code>.<code className="gqlmd-mdx-entity-name">mediaCategories</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Media related to the contents of the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThread</code>.<code className="gqlmd-mdx-entity-name">sticky</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the thread should be stickied. (Mod Only)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThread</code>.<code className="gqlmd-mdx-entity-name">locked</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the thread should be locked. (Mod Only)

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Thread</code></span>](/types/objects/thread.mdx) :badge[object]

Forum Thread
