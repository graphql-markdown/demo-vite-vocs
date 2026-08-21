Create or update a review

```graphql
SaveReview(
  id: Int
  mediaId: Int
  body: String
  summary: String
  score: Int
  private: Boolean
): Review
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveReview</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The review id, required for updating

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveReview</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#media-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-id}

The id of the media the review is of

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveReview</code>.<code className="gqlmd-mdx-entity-name">body</code></span>](#body)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#body}

The main review text (Min: 2600)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveReview</code>.<code className="gqlmd-mdx-entity-name">summary</code></span>](#summary)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#summary}

A short summary/preview of the review (Min: 20, Max: 120)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveReview</code>.<code className="gqlmd-mdx-entity-name">score</code></span>](#score)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#score}

The score of the review (Min: 0, Max: 100)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveReview</code>.<code className="gqlmd-mdx-entity-name">private</code></span>](#private)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#private}

If the review should only be visible to its creator

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Review</code></span>](/types/objects/review.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

A Review that features in an anime or manga
