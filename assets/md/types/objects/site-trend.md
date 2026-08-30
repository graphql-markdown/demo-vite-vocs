Daily site statistics

```graphql
type SiteTrend {
  date: Int!
  count: Int!
  change: Int!
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteTrend</code>.<code className="gqlmd-mdx-entity-name">date</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The day the data was recorded (timestamp)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteTrend</code>.<code className="gqlmd-mdx-entity-name">count</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteTrend</code>.<code className="gqlmd-mdx-entity-name">change</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The change from yesterday

### Member Of

[`SiteTrendConnection`](/types/objects/site-trend-connection.mdx)  :badge[object]<Bullet />[`SiteTrendEdge`](/types/objects/site-trend-edge.mdx)  :badge[object]
