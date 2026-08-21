A tag that describes a theme or element of the media

```graphql
type MediaTag {
  id: Int!
  name: String!
  description: String
  category: String
  rank: Int
  isGeneralSpoiler: Boolean
  isMediaSpoiler: Boolean
  isAdult: Boolean
  userId: Int
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTag</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the tag

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTag</code>.<code className="gqlmd-mdx-entity-name">name</code></span>](#name)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String!</code></span>](/types/scalars/string.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#name}

The name of the tag

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTag</code>.<code className="gqlmd-mdx-entity-name">description</code></span>](#description)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#description}

A general description of the tag

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTag</code>.<code className="gqlmd-mdx-entity-name">category</code></span>](#category)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#category}

The categories of tags this tag belongs to

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTag</code>.<code className="gqlmd-mdx-entity-name">rank</code></span>](#rank)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#rank}

The relevance ranking of the tag out of the 100 for this media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTag</code>.<code className="gqlmd-mdx-entity-name">isGeneralSpoiler</code></span>](#is-general-spoiler)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-general-spoiler}

If the tag could be a spoiler for any media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTag</code>.<code className="gqlmd-mdx-entity-name">isMediaSpoiler</code></span>](#is-media-spoiler)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-media-spoiler}

If the tag is a spoiler for this media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTag</code>.<code className="gqlmd-mdx-entity-name">isAdult</code></span>](#is-adult)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-adult}

If the tag is only for adult 18+ media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTag</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-id}

The user who submitted the tag

### Returned By

[`MediaTagCollection`](/operations/queries/media-tag-collection.mdx)  <Chip color="info" label="query" size="small" variant="outlined" />

### Member Of

[`Media`](/types/objects/media.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`TagStats`](/types/objects/tag-stats.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`UserTagStatistic`](/types/objects/user-tag-statistic.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
