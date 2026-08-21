Daily site statistics

```graphql
type SiteTrend {
  date: Int!
  count: Int!
  change: Int!
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteTrend</code>.<code className="gqlmd-mdx-entity-name">date</code></span>](#date)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#date}

The day the data was recorded (timestamp)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteTrend</code>.<code className="gqlmd-mdx-entity-name">count</code></span>](#count)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#count}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteTrend</code>.<code className="gqlmd-mdx-entity-name">change</code></span>](#change)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#change}

The change from yesterday

### Member Of

[`SiteTrendConnection`](/types/objects/site-trend-connection.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`SiteTrendEdge`](/types/objects/site-trend-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
