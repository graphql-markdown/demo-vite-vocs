A user's previous name

```graphql
type UserPreviousName {
  name: String
  createdAt: Int
  updatedAt: Int
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserPreviousName</code>.<code className="gqlmd-mdx-entity-name">name</code></span>](#name)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#name}

A previous name of the user.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserPreviousName</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#created-at}

When the user first changed from this name.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserPreviousName</code>.<code className="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#updated-at}

When the user most recently changed from this name.

### Member Of

[`User`](/types/objects/user.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
