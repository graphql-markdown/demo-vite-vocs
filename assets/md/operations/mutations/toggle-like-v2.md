Add or remove a like from a likeable type.

```graphql
ToggleLikeV2(
  id: Int
  type: LikeableType
): LikeableUnion
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ToggleLikeV2</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The id of the likeable type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ToggleLikeV2</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">LikeableType</code></span>](/types/enums/likeable-type.mdx) :badge[enum]

The type of model to be un/liked

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">LikeableUnion</code></span>](/types/unions/likeable-union.mdx) :badge[union]

Likeable union type
