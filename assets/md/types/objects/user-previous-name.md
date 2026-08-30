A user's previous name

```graphql
type UserPreviousName {
  name: String
  createdAt: Int
  updatedAt: Int
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserPreviousName</code>.<code className="gqlmd-mdx-entity-name">name</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

A previous name of the user.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserPreviousName</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

When the user first changed from this name.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserPreviousName</code>.<code className="gqlmd-mdx-entity-name">updatedAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

When the user most recently changed from this name.

### Member Of

[`User`](/types/objects/user.mdx)  :badge[object]
