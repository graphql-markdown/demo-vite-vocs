No description

```graphql
type SiteStatistics {
  users(
    sort: [SiteTrendSort]
    page: Int
    perPage: Int
  ): SiteTrendConnection
  anime(
    sort: [SiteTrendSort]
    page: Int
    perPage: Int
  ): SiteTrendConnection
  manga(
    sort: [SiteTrendSort]
    page: Int
    perPage: Int
  ): SiteTrendConnection
  characters(
    sort: [SiteTrendSort]
    page: Int
    perPage: Int
  ): SiteTrendConnection
  staff(
    sort: [SiteTrendSort]
    page: Int
    perPage: Int
  ): SiteTrendConnection
  studios(
    sort: [SiteTrendSort]
    page: Int
    perPage: Int
  ): SiteTrendConnection
  reviews(
    sort: [SiteTrendSort]
    page: Int
    perPage: Int
  ): SiteTrendConnection
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics</code>.<code className="gqlmd-mdx-entity-name">users</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">SiteTrendConnection</code></span>](/types/objects/site-trend-connection.mdx) :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.users</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[SiteTrendSort\]</code></span>](/types/enums/site-trend-sort.mdx) :badge[list] :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.users</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.users</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics</code>.<code className="gqlmd-mdx-entity-name">anime</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">SiteTrendConnection</code></span>](/types/objects/site-trend-connection.mdx) :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.anime</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[SiteTrendSort\]</code></span>](/types/enums/site-trend-sort.mdx) :badge[list] :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.anime</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.anime</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics</code>.<code className="gqlmd-mdx-entity-name">manga</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">SiteTrendConnection</code></span>](/types/objects/site-trend-connection.mdx) :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.manga</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[SiteTrendSort\]</code></span>](/types/enums/site-trend-sort.mdx) :badge[list] :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.manga</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.manga</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics</code>.<code className="gqlmd-mdx-entity-name">characters</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">SiteTrendConnection</code></span>](/types/objects/site-trend-connection.mdx) :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.characters</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[SiteTrendSort\]</code></span>](/types/enums/site-trend-sort.mdx) :badge[list] :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.characters</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.characters</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics</code>.<code className="gqlmd-mdx-entity-name">staff</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">SiteTrendConnection</code></span>](/types/objects/site-trend-connection.mdx) :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.staff</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[SiteTrendSort\]</code></span>](/types/enums/site-trend-sort.mdx) :badge[list] :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.staff</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.staff</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics</code>.<code className="gqlmd-mdx-entity-name">studios</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">SiteTrendConnection</code></span>](/types/objects/site-trend-connection.mdx) :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.studios</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[SiteTrendSort\]</code></span>](/types/enums/site-trend-sort.mdx) :badge[list] :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.studios</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.studios</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics</code>.<code className="gqlmd-mdx-entity-name">reviews</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">SiteTrendConnection</code></span>](/types/objects/site-trend-connection.mdx) :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.reviews</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[SiteTrendSort\]</code></span>](/types/enums/site-trend-sort.mdx) :badge[list] :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.reviews</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.reviews</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

### Returned By

[`SiteStatistics`](/operations/queries/site-statistics.mdx)  :badge[query]
