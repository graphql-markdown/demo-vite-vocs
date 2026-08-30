Media recommendation

```graphql
type Recommendation {
  id: Int!
  rating: Int
  userRating: RecommendationRating
  media: Media
  mediaRecommendation: Media
  user: User
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the recommendation

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">rating</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Users rating of the recommendation

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">userRating</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">RecommendationRating</code></span>](/types/enums/recommendation-rating.mdx) :badge[enum]

The rating of the recommendation by currently authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) :badge[object]

The media the recommendation is from

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">mediaRecommendation</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) :badge[object]

The recommended media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">user</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

The user that first created the recommendation

### Returned By

[`Recommendation`](/operations/queries/recommendation.mdx)  :badge[query]<Bullet />[`SaveRecommendation`](/operations/mutations/save-recommendation.mdx)  :badge[mutation]

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  :badge[object]<Bullet />[`Page`](/types/objects/page.mdx)  :badge[object]<Bullet />[`RecommendationConnection`](/types/objects/recommendation-connection.mdx)  :badge[object]<Bullet />[`RecommendationEdge`](/types/objects/recommendation-edge.mdx)  :badge[object]
