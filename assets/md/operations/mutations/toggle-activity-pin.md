Toggle activity to be pinned to the top of the user's activity feed

```graphql
ToggleActivityPin(
  id: Int
  pinned: Boolean
): ActivityUnion
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ToggleActivityPin</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Toggle activity id to be pinned

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ToggleActivityPin</code>.<code className="gqlmd-mdx-entity-name">pinned</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the activity should be pinned or unpinned

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ActivityUnion</code></span>](/types/unions/activity-union.mdx) :badge[union]

Activity union type
