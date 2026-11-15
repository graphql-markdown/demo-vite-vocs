Media Trend query

```graphql
MediaTrend(
  mediaId: Int
  date: Int
  trending: Int
  averageScore: Int
  weightedScore: Int
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
  weightedScore_greater: Int
  weightedScore_lesser: Int
  weightedScore_not: Int
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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">date</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by date

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">trending</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by trending amount

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">averageScore</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by score

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">weightedScore</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by weighted scores

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">popularity</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by popularity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">episode</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by episode number

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">releasing</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter to stats recorded while the media was releasing

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">mediaId\_in</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the media id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not\_in</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the media id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">date\_greater</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by date

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">date\_lesser</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by date

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">trending\_greater</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by trending amount

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">trending\_lesser</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by trending amount

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">trending\_not</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by trending amount

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">averageScore\_greater</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by score

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">averageScore\_lesser</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by score

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">averageScore\_not</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by score

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">weightedScore\_greater</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by weighted scores

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">weightedScore\_lesser</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by weighted scores

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">weightedScore\_not</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by weighted scores

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">popularity\_greater</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by popularity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">popularity\_lesser</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by popularity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">popularity\_not</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by popularity

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">episode\_greater</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by episode number

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">episode\_lesser</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by episode number

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">episode\_not</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by episode number

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](/operations/queries/media-trend)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaTrendSort\]</code></span>](/types/enums/media-trend-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaTrend</code></span>](/types/objects/media-trend.mdx) :badge[object]

Daily media statistics
