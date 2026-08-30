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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the airing schedule item

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">airingAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The time the episode airs at

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">timeUntilAiring</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

Seconds until episode starts airing

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">episode</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The airing episode number

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The associate media id of the airing episode

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) :badge[object]

The associate media of the airing episode

### Returned By

[`AiringSchedule`](/operations/queries/airing-schedule.mdx)  :badge[query]

### Member Of

[`AiringScheduleConnection`](/types/objects/airing-schedule-connection.mdx)  :badge[object]<Bullet />[`AiringScheduleEdge`](/types/objects/airing-schedule-edge.mdx)  :badge[object]<Bullet />[`InternalPage`](/types/objects/internal-page.mdx)  :badge[object]<Bullet />[`Media`](/types/objects/media.mdx)  :badge[object]<Bullet />[`Page`](/types/objects/page.mdx)  :badge[object]
