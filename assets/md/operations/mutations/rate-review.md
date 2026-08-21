Rate a review

```graphql
RateReview(
  reviewId: Int
  rating: ReviewRating
): Review
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RateReview</code>.<code className="gqlmd-mdx-entity-name">reviewId</code></span>](#review-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#review-id}

The id of the review to rate

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">RateReview</code>.<code className="gqlmd-mdx-entity-name">rating</code></span>](#rating)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ReviewRating</code></span>](/types/enums/review-rating.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#rating}

The rating to apply to the review

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Review</code></span>](/types/objects/review.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

A Review that features in an anime or manga
