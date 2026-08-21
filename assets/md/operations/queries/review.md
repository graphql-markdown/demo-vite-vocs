Review query

```graphql
Review(
  id: Int
  mediaId: Int
  userId: Int
  mediaType: MediaType
  sort: [ReviewSort]
): Review
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

Filter by Review id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#media-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id}

Filter by media id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-id}

Filter by user id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">mediaType</code></span>](#media-type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaType</code></span>](/types/enums/media-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#media-type}

Filter by media type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ReviewSort\]</code></span>](/types/enums/review-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#sort}

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Review</code></span>](/types/objects/review.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

A Review that features in an anime or manga
