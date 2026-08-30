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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveReview</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The review id, required for updating

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveReview</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The id of the media the review is of

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveReview</code>.<code className="gqlmd-mdx-entity-name">body</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The main review text (Min: 2600)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveReview</code>.<code className="gqlmd-mdx-entity-name">summary</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

A short summary/preview of the review (Min: 20, Max: 120)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveReview</code>.<code className="gqlmd-mdx-entity-name">score</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The score of the review (Min: 0, Max: 100)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">SaveReview</code>.<code className="gqlmd-mdx-entity-name">private</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the review should only be visible to its creator

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Review</code></span>](/types/objects/review.mdx) :badge[object]

A Review that features in an anime or manga
