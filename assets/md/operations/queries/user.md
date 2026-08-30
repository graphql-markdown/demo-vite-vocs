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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the user id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">name</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by the name of the user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">isModerator</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter to moderators only if true

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by search query

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">User</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserSort\]</code></span>](/types/enums/user-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

A user
