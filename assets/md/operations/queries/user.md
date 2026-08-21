User query

```graphql
User(
  id: Int
  name: String
  isModerator: Boolean
  search: String
  sort: [UserSort]
): User
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

Filter by the user id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">name</code></span>](#name)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#name}

Filter by the name of the user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">isModerator</code></span>](#is-moderator)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-moderator}

Filter to moderators only if true

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#search)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#search}

Filter by search query

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserSort\]</code></span>](/types/enums/user-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#sort}

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

A user
