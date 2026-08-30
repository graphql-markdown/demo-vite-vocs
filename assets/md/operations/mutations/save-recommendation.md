Recommendation a media

```graphql
SaveRecommendation(
  mediaId: Int
  mediaRecommendationId: Int
  rating: RecommendationRating
): Recommendation
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveRecommendation</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The id of the base media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveRecommendation</code>.<code className="gqlmd-mdx-entity-name">mediaRecommendationId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The id of the media to recommend

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveRecommendation</code>.<code className="gqlmd-mdx-entity-name">rating</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">RecommendationRating</code></span>](/types/enums/recommendation-rating.mdx) :badge[enum]

The rating to give the recommendation

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Recommendation</code></span>](/types/objects/recommendation.mdx) :badge[object]

Media recommendation
