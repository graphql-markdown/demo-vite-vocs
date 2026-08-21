Airing schedule query

```graphql
AiringSchedule(
  id: Int
  mediaId: Int
  episode: Int
  airingAt: Int
  notYetAired: Boolean
  id_not: Int
  id_in: [Int]
  id_not_in: [Int]
  mediaId_not: Int
  mediaId_in: [Int]
  mediaId_not_in: [Int]
  episode_not: Int
  episode_in: [Int]
  episode_not_in: [Int]
  episode_greater: Int
  episode_lesser: Int
  airingAt_greater: Int
  airingAt_lesser: Int
  sort: [AiringSort]
): AiringSchedule
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

Filter by the id of the airing schedule item

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#media-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id}

Filter by the id of associated media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">episode</code></span>](#episode)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#episode}

Filter by the airing episode number

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">airingAt</code></span>](#airing-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#airing-at}

Filter by the time of airing

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">notYetAired</code></span>](#not-yet-aired)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#not-yet-aired}

Filter to episodes that haven't yet aired

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#id-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id-not}

Filter by the id of the airing schedule item

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id-in}

Filter by the id of the airing schedule item (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id-not-in}

Filter by the id of the airing schedule item (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not</code></span>](#media-id-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id-not}

Filter by the id of associated media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">mediaId\_in</code></span>](#media-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id-in}

Filter by the id of associated media (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not\_in</code></span>](#media-id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id-not-in}

Filter by the id of associated media (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">episode\_not</code></span>](#episode-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#episode-not}

Filter by the airing episode number

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">episode\_in</code></span>](#episode-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#episode-in}

Filter by the airing episode number (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">episode\_not\_in</code></span>](#episode-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#episode-not-in}

Filter by the airing episode number (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">episode\_greater</code></span>](#episode-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#episode-greater}

Filter by the airing episode number

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">episode\_lesser</code></span>](#episode-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#episode-lesser}

Filter by the airing episode number

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">airingAt\_greater</code></span>](#airing-at-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#airing-at-greater}

Filter by the time of airing

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">airingAt\_lesser</code></span>](#airing-at-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#airing-at-lesser}

Filter by the time of airing

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[AiringSort\]</code></span>](/types/enums/airing-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#sort}

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">AiringSchedule</code></span>](/types/objects/airing-schedule.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate.
