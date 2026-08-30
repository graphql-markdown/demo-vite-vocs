User's tag statistics

```graphql
type TagStats {
  tag: MediaTag
  amount: Int
  meanScore: Int
  timeWatched: Int
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TagStats</code>.<code className="gqlmd-mdx-entity-name">tag</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaTag</code></span>](/types/objects/media-tag.mdx) :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TagStats</code>.<code className="gqlmd-mdx-entity-name">amount</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TagStats</code>.<code className="gqlmd-mdx-entity-name">meanScore</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TagStats</code>.<code className="gqlmd-mdx-entity-name">timeWatched</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of time in minutes the tag has been watched by the user

### Member Of

[`UserStats`](/types/objects/user-stats.mdx)  :badge[object]
