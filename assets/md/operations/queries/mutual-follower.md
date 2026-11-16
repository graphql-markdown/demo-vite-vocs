# MutualFollower

Mutual follower query

```graphql
MutualFollower(
  userId: Int!
  sort: [UserSort]
): User
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MutualFollower</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](/operations/queries/mutual-follower)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

User id to fetch mutual followers for

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MutualFollower</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](/operations/queries/mutual-follower)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserSort\]</code></span>](/types/enums/user-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

A user
