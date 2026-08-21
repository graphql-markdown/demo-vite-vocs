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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the recommendation

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">rating</code></span>](#rating)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#rating}

Users rating of the recommendation

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">userRating</code></span>](#user-rating)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">RecommendationRating</code></span>](/types/enums/recommendation-rating.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#user-rating}

The rating of the recommendation by currently authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#media)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#media}

The media the recommendation is from

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">mediaRecommendation</code></span>](#media-recommendation)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#media-recommendation}

The recommended media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Recommendation</code>.<code className="gqlmd-mdx-entity-name">user</code></span>](#user)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#user}

The user that first created the recommendation

### Returned By

[`Recommendation`](/operations/queries/recommendation.mdx)  <Chip color="info" label="query" size="small" variant="outlined" /><Bullet />[`SaveRecommendation`](/operations/mutations/save-recommendation.mdx)  <Chip color="info" label="mutation" size="small" variant="outlined" />

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Page`](/types/objects/page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`RecommendationConnection`](/types/objects/recommendation-connection.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`RecommendationEdge`](/types/objects/recommendation-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
