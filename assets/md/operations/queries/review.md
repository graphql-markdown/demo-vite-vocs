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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by Review id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by media id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by user id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">mediaType</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaType</code></span>](/types/enums/media-type.mdx) :badge[enum]

Filter by media type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ReviewSort\]</code></span>](/types/enums/review-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Review</code></span>](/types/objects/review.mdx) :badge[object]

A Review that features in an anime or manga
