A Review that features in an anime or manga

```graphql
type Review {
  id: Int!
  userId: Int!
  mediaId: Int!
  mediaType: MediaType
  summary: String
  body(
    asHtml: Boolean
  ): String
  rating: Int
  ratingAmount: Int
  userRating: ReviewRating
  score: Int
  private: Boolean
  siteUrl: String
  createdAt: Int!
  updatedAt: Int!
  user: User
  media: Media
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the review

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-id}

The id of the review's creator

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#media-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id}

The id of the review's media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">mediaType</code></span>](#media-type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaType</code></span>](/types/enums/media-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#media-type}

For which type of media the review is for

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">summary</code></span>](#summary)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#summary}

A short summary of the review

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">body</code></span>](#body)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#body}

The main review body text

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review.body</code>.<code className="gqlmd-mdx-entity-name">asHtml</code></span>](#review-body-as-html)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#review-body-as-html}

Return the string in pre-parsed html instead of markdown

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">rating</code></span>](#rating)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#rating}

The total user rating of the review

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">ratingAmount</code></span>](#rating-amount)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#rating-amount}

The amount of user ratings of the review

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">userRating</code></span>](#user-rating)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ReviewRating</code></span>](/types/enums/review-rating.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#user-rating}

The rating of the review by currently authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">score</code></span>](#score)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#score}

The review score of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">private</code></span>](#private)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#private}

If the review is not yet publicly published and is only viewable by creator

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">siteUrl</code></span>](#site-url)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-url}

The url for the review page on the AniList website

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#created-at}

The time of the thread creation

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#updated-at}

The time of the thread last update

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">user</code></span>](#user)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#user}

The creator of the review

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#media)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#media}

The media the review is of

### Returned By

[`RateReview`](/operations/mutations/rate-review.mdx)  <Chip color="info" label="mutation" size="small" variant="outlined" /><Bullet />[`Review`](/operations/queries/review.mdx)  <Chip color="info" label="query" size="small" variant="outlined" /><Bullet />[`SaveReview`](/operations/mutations/save-review.mdx)  <Chip color="info" label="mutation" size="small" variant="outlined" />

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Page`](/types/objects/page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ReviewConnection`](/types/objects/review-connection.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ReviewEdge`](/types/objects/review-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
