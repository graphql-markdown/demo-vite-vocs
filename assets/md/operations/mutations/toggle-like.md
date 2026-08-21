Add or remove a like from a likeable type.
Returns all the users who liked the same model

```graphql
ToggleLike(
  id: Int
  type: LikeableType
): [User]
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ToggleLike</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the likeable type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ToggleLike</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">LikeableType</code></span>](/types/enums/likeable-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type}

The type of model to be un/liked

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

A user
