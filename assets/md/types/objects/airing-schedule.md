Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate.

```graphql
type AiringSchedule {
  id: Int!
  airingAt: Int!
  timeUntilAiring: Int!
  episode: Int!
  mediaId: Int!
  media: Media
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the airing schedule item

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">airingAt</code></span>](#airing-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#airing-at}

The time the episode airs at

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">timeUntilAiring</code></span>](#time-until-airing)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#time-until-airing}

Seconds until episode starts airing

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">episode</code></span>](#episode)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#episode}

The airing episode number

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#media-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id}

The associate media id of the airing episode

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#media)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#media}

The associate media of the airing episode

### Returned By

[`AiringSchedule`](/operations/queries/airing-schedule.mdx)  <Chip color="info" label="query" size="small" variant="outlined" />

### Member Of

[`AiringScheduleConnection`](/types/objects/airing-schedule-connection.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`AiringScheduleEdge`](/types/objects/airing-schedule-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`InternalPage`](/types/objects/internal-page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Media`](/types/objects/media.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Page`](/types/objects/page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
