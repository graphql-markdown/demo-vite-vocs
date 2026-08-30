The distribution of the watching/reading status of media or a user's list

```graphql
type StatusDistribution {
  status: MediaListStatus
  amount: Int
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StatusDistribution</code>.<code className="gqlmd-mdx-entity-name">status</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListStatus</code></span>](/types/enums/media-list-status.mdx) :badge[enum]

The day the activity took place (Unix timestamp)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StatusDistribution</code>.<code className="gqlmd-mdx-entity-name">amount</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries with this status

### Member Of

[`MediaStats`](/types/objects/media-stats.mdx)  :badge[object]<Bullet />[`UserStats`](/types/objects/user-stats.mdx)  :badge[object]
