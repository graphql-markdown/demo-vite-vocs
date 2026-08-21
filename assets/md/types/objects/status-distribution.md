The distribution of the watching/reading status of media or a user's list

```graphql
type StatusDistribution {
  status: MediaListStatus
  amount: Int
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StatusDistribution</code>.<code className="gqlmd-mdx-entity-name">status</code></span>](#status)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListStatus</code></span>](/types/enums/media-list-status.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#status}

The day the activity took place (Unix timestamp)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StatusDistribution</code>.<code className="gqlmd-mdx-entity-name">amount</code></span>](#amount)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#amount}

The amount of entries with this status

### Member Of

[`MediaStats`](/types/objects/media-stats.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`UserStats`](/types/objects/user-stats.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
