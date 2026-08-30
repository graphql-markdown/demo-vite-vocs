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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the review

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the review's creator

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the review's media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">mediaType</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaType</code></span>](/types/enums/media-type.mdx) :badge[enum]

For which type of media the review is for

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">summary</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

A short summary of the review

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">body</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The main review body text

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review.body</code>.<code className="gqlmd-mdx-entity-name">asHtml</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Return the string in pre-parsed html instead of markdown

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">rating</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The total user rating of the review

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">ratingAmount</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of user ratings of the review

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">userRating</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ReviewRating</code></span>](/types/enums/review-rating.mdx) :badge[enum]

The rating of the review by currently authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">score</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The review score of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">private</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the review is not yet publicly published and is only viewable by creator

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">siteUrl</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The url for the review page on the AniList website

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The time of the thread creation

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">updatedAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The time of the thread last update

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">user</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

The creator of the review

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Review</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) :badge[object]

The media the review is of

### Returned By

[`RateReview`](/operations/mutations/rate-review.mdx)  :badge[mutation]<Bullet />[`Review`](/operations/queries/review.mdx)  :badge[query]<Bullet />[`SaveReview`](/operations/mutations/save-review.mdx)  :badge[mutation]

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  :badge[object]<Bullet />[`Page`](/types/objects/page.mdx)  :badge[object]<Bullet />[`ReviewConnection`](/types/objects/review-connection.mdx)  :badge[object]<Bullet />[`ReviewEdge`](/types/objects/review-edge.mdx)  :badge[object]
