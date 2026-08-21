No description

```graphql
type Report {
  id: Int!
  reporter: User
  reported: User
  reason: String
  createdAt: Int
  cleared: Boolean
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Report</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Report</code>.<code className="gqlmd-mdx-entity-name">reporter</code></span>](#reporter)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#reporter}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Report</code>.<code className="gqlmd-mdx-entity-name">reported</code></span>](#reported)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#reported}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Report</code>.<code className="gqlmd-mdx-entity-name">reason</code></span>](#reason)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#reason}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Report</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#created-at}

When the entry data was created

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Report</code>.<code className="gqlmd-mdx-entity-name">cleared</code></span>](#cleared)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#cleared}

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
