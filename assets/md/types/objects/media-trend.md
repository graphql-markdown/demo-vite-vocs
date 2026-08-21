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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#media-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id}

The id of the tag

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">date</code></span>](#date)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#date}

The day the data was recorded (timestamp)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">trending</code></span>](#trending)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#trending}

The amount of media activity on the day

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">averageScore</code></span>](#average-score)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#average-score}

A weighted average score of all the user's scores of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">popularity</code></span>](#popularity)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#popularity}

The number of users with the media on their list

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">inProgress</code></span>](#in-progress)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#in-progress}

The number of users with watching/reading the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">releasing</code></span>](#releasing)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#releasing}

If the media was being released at this time

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">episode</code></span>](#episode)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#episode}

The episode number of the anime released on this day

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrend</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#media)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#media}

The related media

### Returned By

[`MediaTrend`](/operations/queries/media-trend.mdx)  <Chip color="info" label="query" size="small" variant="outlined" />

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaTrendConnection`](/types/objects/media-trend-connection.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaTrendEdge`](/types/objects/media-trend-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Page`](/types/objects/page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
