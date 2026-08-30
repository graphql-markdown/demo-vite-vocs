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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the id of the airing schedule item

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the id of associated media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">episode</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the airing episode number

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">airingAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the time of airing

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">notYetAired</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter to episodes that haven't yet aired

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the id of the airing schedule item

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the id of the airing schedule item (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the id of the airing schedule item (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the id of associated media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">mediaId\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the id of associated media (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the id of associated media (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">episode\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the airing episode number

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">episode\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the airing episode number (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">episode\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the airing episode number (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">episode\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the airing episode number

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">episode\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the airing episode number

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">airingAt\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the time of airing

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">airingAt\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the time of airing

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringSchedule</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[AiringSort\]</code></span>](/types/enums/airing-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">AiringSchedule</code></span>](/types/objects/airing-schedule.mdx) :badge[object]

Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate.
