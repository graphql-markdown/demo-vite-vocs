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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRank</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the rank

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRank</code>.<code className="gqlmd-mdx-entity-name">rank</code></span>](#rank)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#rank}

The numerical rank of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRank</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaRankType!</code></span>](/types/enums/media-rank-type.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type}

The type of ranking

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRank</code>.<code className="gqlmd-mdx-entity-name">format</code></span>](#format)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaFormat!</code></span>](/types/enums/media-format.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#format}

The format the media is ranked within

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRank</code>.<code className="gqlmd-mdx-entity-name">year</code></span>](#year)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#year}

The year the media is ranked within

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRank</code>.<code className="gqlmd-mdx-entity-name">season</code></span>](#season)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaSeason</code></span>](/types/enums/media-season.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#season}

The season the media is ranked within

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRank</code>.<code className="gqlmd-mdx-entity-name">allTime</code></span>](#all-time)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#all-time}

If the ranking is based on all time instead of a season/year

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaRank</code>.<code className="gqlmd-mdx-entity-name">context</code></span>](#context)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String!</code></span>](/types/scalars/string.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#context}

String that gives context to the ranking type and time span

### Member Of

[`Media`](/types/objects/media.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
