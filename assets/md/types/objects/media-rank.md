The ranking of a media in a particular time span and format compared to other media

```graphql
type MediaRank {
  id: Int!
  rank: Int!
  type: MediaRankType!
  format: MediaFormat!
  year: Int
  season: MediaSeason
  allTime: Boolean
  context: String!
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRank</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the rank

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRank</code>.<code className="gqlmd-mdx-entity-name">rank</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The numerical rank of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRank</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaRankType!</code></span>](/types/enums/media-rank-type.mdx) :badge[non-null] :badge[enum]

The type of ranking

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRank</code>.<code className="gqlmd-mdx-entity-name">format</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaFormat!</code></span>](/types/enums/media-format.mdx) :badge[non-null] :badge[enum]

The format the media is ranked within

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRank</code>.<code className="gqlmd-mdx-entity-name">year</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The year the media is ranked within

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRank</code>.<code className="gqlmd-mdx-entity-name">season</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaSeason</code></span>](/types/enums/media-season.mdx) :badge[enum]

The season the media is ranked within

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRank</code>.<code className="gqlmd-mdx-entity-name">allTime</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the ranking is based on all time instead of a season/year

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRank</code>.<code className="gqlmd-mdx-entity-name">context</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String!</code></span>](/types/scalars/string.mdx) :badge[non-null] :badge[scalar]

String that gives context to the ranking type and time span

### Member Of

[`Media`](/types/objects/media.mdx)  :badge[object]
