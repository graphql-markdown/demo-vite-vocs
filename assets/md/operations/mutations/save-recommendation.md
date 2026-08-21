Recommendation a media

```graphql
SaveRecommendation(
  mediaId: Int
  mediaRecommendationId: Int
  rating: RecommendationRating
): Recommendation
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveRecommendation</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#media-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id}

The id of the base media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveRecommendation</code>.<code className="gqlmd-mdx-entity-name">mediaRecommendationId</code></span>](#media-recommendation-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-recommendation-id}

The id of the media to recommend

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveRecommendation</code>.<code className="gqlmd-mdx-entity-name">rating</code></span>](#rating)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">RecommendationRating</code></span>](/types/enums/recommendation-rating.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#rating}

The rating to give the recommendation

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Recommendation</code></span>](/types/objects/recommendation.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Media recommendation
