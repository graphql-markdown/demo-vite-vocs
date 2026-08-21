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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThread</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The thread id, required for updating

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThread</code>.<code className="gqlmd-mdx-entity-name">title</code></span>](#title)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#title}

The title of the thread (Min: 6, Max: 120)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThread</code>.<code className="gqlmd-mdx-entity-name">body</code></span>](#body)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#body}

The main text body of the thread (Max: 30000)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThread</code>.<code className="gqlmd-mdx-entity-name">categories</code></span>](#categories)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#categories}

Forum categories the thread should be within

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThread</code>.<code className="gqlmd-mdx-entity-name">mediaCategories</code></span>](#media-categories)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-categories}

Media related to the contents of the thread

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThread</code>.<code className="gqlmd-mdx-entity-name">sticky</code></span>](#sticky)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#sticky}

If the thread should be stickied. (Mod Only)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveThread</code>.<code className="gqlmd-mdx-entity-name">locked</code></span>](#locked)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#locked}

If the thread should be locked. (Mod Only)

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Thread</code></span>](/types/objects/thread.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Forum Thread
