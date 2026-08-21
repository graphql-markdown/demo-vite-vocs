Studio query

```graphql
Studio(
  id: Int
  search: String
  id_not: Int
  id_in: [Int]
  id_not_in: [Int]
  sort: [StudioSort]
): Studio
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

Filter by the studio id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#search)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#search}

Filter by search query

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#id-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id-not}

Filter by the studio id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id-in}

Filter by the studio id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id-not-in}

Filter by the studio id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Studio</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StudioSort\]</code></span>](/types/enums/studio-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#sort}

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Studio</code></span>](/types/objects/studio.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Animation or production company
