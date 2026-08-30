Daily media statistics

```graphql
type MediaTrend {
  mediaId: Int!
  date: Int!
  trending: Int!
  averageScore: Int
  popularity: Int
  inProgress: Int
  releasing: Boolean!
  episode: Int
  media: Media
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the tag

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">date</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The day the data was recorded (timestamp)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">trending</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The amount of media activity on the day

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">averageScore</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

A weighted average score of all the user's scores of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">popularity</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The number of users with the media on their list

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">inProgress</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The number of users with watching/reading the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">releasing</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) :badge[non-null] :badge[scalar]

If the media was being released at this time

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">episode</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The episode number of the anime released on this day

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) :badge[object]

The related media

### Returned By

[`MediaTrend`](/operations/queries/media-trend.mdx)  :badge[query]

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  :badge[object]<Bullet />[`MediaTrendConnection`](/types/objects/media-trend-connection.mdx)  :badge[object]<Bullet />[`MediaTrendEdge`](/types/objects/media-trend-edge.mdx)  :badge[object]<Bullet />[`Page`](/types/objects/page.mdx)  :badge[object]
