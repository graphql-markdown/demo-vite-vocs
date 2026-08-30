A user's activity history stats for the previous 6 months. Refreshes only periodically

```graphql
type UserActivityHistory {
  date: Int
  amount: Int
  level: Int
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserActivityHistory</code>.<code className="gqlmd-mdx-entity-name">date</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The day the activity took place (Unix timestamp)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserActivityHistory</code>.<code className="gqlmd-mdx-entity-name">amount</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of activity on the day

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserActivityHistory</code>.<code className="gqlmd-mdx-entity-name">level</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The level of activity represented on a 1-10 scale

### Member Of

[`UserStats`](/types/objects/user-stats.mdx)  :badge[object]
