A user's activity history stats for the previous 6 months. Refreshes only periodically

```graphql
type UserActivityHistory {
  date: Int
  amount: Int
  level: Int
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserActivityHistory</code>.<code className="gqlmd-mdx-entity-name">date</code></span>](#date)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#date}

The day the activity took place (Unix timestamp)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserActivityHistory</code>.<code className="gqlmd-mdx-entity-name">amount</code></span>](#amount)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#amount}

The amount of activity on the day

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">UserActivityHistory</code>.<code className="gqlmd-mdx-entity-name">level</code></span>](#level)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#level}

The level of activity represented on a 1-10 scale

### Member Of

[`UserStats`](/types/objects/user-stats.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
