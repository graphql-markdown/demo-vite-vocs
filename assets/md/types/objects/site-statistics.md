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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics</code>.<code className="gqlmd-mdx-entity-name">users</code></span>](#users)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">SiteTrendConnection</code></span>](/types/objects/site-trend-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#users}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.users</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#site-statistics-users-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[SiteTrendSort\]</code></span>](/types/enums/site-trend-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#site-statistics-users-sort}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.users</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#site-statistics-users-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-statistics-users-page}

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.users</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#site-statistics-users-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-statistics-users-per-page}

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics</code>.<code className="gqlmd-mdx-entity-name">anime</code></span>](#anime)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">SiteTrendConnection</code></span>](/types/objects/site-trend-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#anime}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.anime</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#site-statistics-anime-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[SiteTrendSort\]</code></span>](/types/enums/site-trend-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#site-statistics-anime-sort}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.anime</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#site-statistics-anime-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-statistics-anime-page}

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.anime</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#site-statistics-anime-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-statistics-anime-per-page}

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics</code>.<code className="gqlmd-mdx-entity-name">manga</code></span>](#manga)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">SiteTrendConnection</code></span>](/types/objects/site-trend-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#manga}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.manga</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#site-statistics-manga-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[SiteTrendSort\]</code></span>](/types/enums/site-trend-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#site-statistics-manga-sort}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.manga</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#site-statistics-manga-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-statistics-manga-page}

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.manga</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#site-statistics-manga-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-statistics-manga-per-page}

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics</code>.<code className="gqlmd-mdx-entity-name">characters</code></span>](#characters)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">SiteTrendConnection</code></span>](/types/objects/site-trend-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#characters}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.characters</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#site-statistics-characters-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[SiteTrendSort\]</code></span>](/types/enums/site-trend-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#site-statistics-characters-sort}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.characters</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#site-statistics-characters-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-statistics-characters-page}

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.characters</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#site-statistics-characters-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-statistics-characters-per-page}

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics</code>.<code className="gqlmd-mdx-entity-name">staff</code></span>](#staff)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">SiteTrendConnection</code></span>](/types/objects/site-trend-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#staff}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.staff</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#site-statistics-staff-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[SiteTrendSort\]</code></span>](/types/enums/site-trend-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#site-statistics-staff-sort}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.staff</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#site-statistics-staff-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-statistics-staff-page}

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.staff</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#site-statistics-staff-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-statistics-staff-per-page}

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics</code>.<code className="gqlmd-mdx-entity-name">studios</code></span>](#studios)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">SiteTrendConnection</code></span>](/types/objects/site-trend-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#studios}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.studios</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#site-statistics-studios-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[SiteTrendSort\]</code></span>](/types/enums/site-trend-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#site-statistics-studios-sort}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.studios</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#site-statistics-studios-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-statistics-studios-page}

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.studios</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#site-statistics-studios-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-statistics-studios-per-page}

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics</code>.<code className="gqlmd-mdx-entity-name">reviews</code></span>](#reviews)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">SiteTrendConnection</code></span>](/types/objects/site-trend-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#reviews}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.reviews</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#site-statistics-reviews-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[SiteTrendSort\]</code></span>](/types/enums/site-trend-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#site-statistics-reviews-sort}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.reviews</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#site-statistics-reviews-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-statistics-reviews-page}

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SiteStatistics.reviews</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#site-statistics-reviews-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-statistics-reviews-per-page}

The amount of entries per page, max 25

### Returned By

[`SiteStatistics`](/operations/queries/site-statistics.mdx)  <Chip color="info" label="query" size="small" variant="outlined" />
