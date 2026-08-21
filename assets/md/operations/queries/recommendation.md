Recommendation query

```graphql
Recommendation(
  id: Int
  mediaId: Int
  mediaRecommendationId: Int
  userId: Int
  rating: Int
  onList: Boolean
  rating_greater: Int
  rating_lesser: Int
  sort: [RecommendationSort]
): Recommendation
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

Filter by recommendation id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#media-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id}

Filter by media id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">mediaRecommendationId</code></span>](#media-recommendation-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-recommendation-id}

Filter by media recommendation id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-id}

Filter by user who created the recommendation

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">rating</code></span>](#rating)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#rating}

Filter by total rating of the recommendation

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">onList</code></span>](#on-list)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#on-list}

Filter by the media on the authenticated user's lists

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">rating\_greater</code></span>](#rating-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#rating-greater}

Filter by total rating of the recommendation

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">rating\_lesser</code></span>](#rating-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#rating-lesser}

Filter by total rating of the recommendation

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[RecommendationSort\]</code></span>](/types/enums/recommendation-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#sort}

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Recommendation</code></span>](/types/objects/recommendation.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Media recommendation
