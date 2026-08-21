Add or remove a like from a likeable type.

```graphql
ToggleLikeV2(
  id: Int
  type: LikeableType
): LikeableUnion
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ToggleLikeV2</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the likeable type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ToggleLikeV2</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">LikeableType</code></span>](/types/enums/likeable-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type}

The type of model to be un/liked

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">LikeableUnion</code></span>](/types/unions/likeable-union.mdx) <Chip color="info" label="union" size="small" variant="outlined" />

Likeable union type
