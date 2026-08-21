Media Trend query

```graphql
MediaTrend(
  mediaId: Int
  date: Int
  trending: Int
  averageScore: Int
  popularity: Int
  episode: Int
  releasing: Boolean
  mediaId_not: Int
  mediaId_in: [Int]
  mediaId_not_in: [Int]
  date_greater: Int
  date_lesser: Int
  trending_greater: Int
  trending_lesser: Int
  trending_not: Int
  averageScore_greater: Int
  averageScore_lesser: Int
  averageScore_not: Int
  popularity_greater: Int
  popularity_lesser: Int
  popularity_not: Int
  episode_greater: Int
  episode_lesser: Int
  episode_not: Int
  sort: [MediaTrendSort]
): MediaTrend
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#media-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id}

Filter by the media id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">date</code></span>](#date)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#date}

Filter by date

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">trending</code></span>](#trending)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#trending}

Filter by trending amount

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">averageScore</code></span>](#average-score)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#average-score}

Filter by score

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">popularity</code></span>](#popularity)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#popularity}

Filter by popularity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">episode</code></span>](#episode)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#episode}

Filter by episode number

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">releasing</code></span>](#releasing)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#releasing}

Filter to stats recorded while the media was releasing

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not</code></span>](#media-id-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id-not}

Filter by the media id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">mediaId\_in</code></span>](#media-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id-in}

Filter by the media id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not\_in</code></span>](#media-id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id-not-in}

Filter by the media id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">date\_greater</code></span>](#date-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#date-greater}

Filter by date

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">date\_lesser</code></span>](#date-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#date-lesser}

Filter by date

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">trending\_greater</code></span>](#trending-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#trending-greater}

Filter by trending amount

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">trending\_lesser</code></span>](#trending-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#trending-lesser}

Filter by trending amount

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">trending\_not</code></span>](#trending-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#trending-not}

Filter by trending amount

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">averageScore\_greater</code></span>](#average-score-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#average-score-greater}

Filter by score

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">averageScore\_lesser</code></span>](#average-score-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#average-score-lesser}

Filter by score

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">averageScore\_not</code></span>](#average-score-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#average-score-not}

Filter by score

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">popularity\_greater</code></span>](#popularity-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#popularity-greater}

Filter by popularity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">popularity\_lesser</code></span>](#popularity-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#popularity-lesser}

Filter by popularity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">popularity\_not</code></span>](#popularity-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#popularity-not}

Filter by popularity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">episode\_greater</code></span>](#episode-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#episode-greater}

Filter by episode number

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">episode\_lesser</code></span>](#episode-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#episode-lesser}

Filter by episode number

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">episode\_not</code></span>](#episode-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#episode-not}

Filter by episode number

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaTrendSort\]</code></span>](/types/enums/media-trend-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#sort}

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaTrend</code></span>](/types/objects/media-trend.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Daily media statistics
