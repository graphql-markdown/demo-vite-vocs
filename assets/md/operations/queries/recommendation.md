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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by recommendation id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by media id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">mediaRecommendationId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by media recommendation id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by user who created the recommendation

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">rating</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by total rating of the recommendation

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">onList</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter by the media on the authenticated user's lists

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">rating\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by total rating of the recommendation

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">rating\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by total rating of the recommendation

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[RecommendationSort\]</code></span>](/types/enums/recommendation-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Recommendation</code></span>](/types/objects/recommendation.mdx) :badge[object]

Media recommendation
