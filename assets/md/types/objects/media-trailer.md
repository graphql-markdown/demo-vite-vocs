Media trailer or advertisement

```graphql
type MediaTrailer {
  id: String
  site: String
  thumbnail: String
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrailer</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The trailer video id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrailer</code>.<code className="gqlmd-mdx-entity-name">site</code></span>](#site)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site}

The site the video is hosted by (Currently either youtube or dailymotion)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaTrailer</code>.<code className="gqlmd-mdx-entity-name">thumbnail</code></span>](#thumbnail)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#thumbnail}

The url for the thumbnail image of the video

### Member Of

[`Media`](/types/objects/media.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
