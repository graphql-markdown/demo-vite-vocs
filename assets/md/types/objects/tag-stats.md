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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TagStats</code>.<code className="gqlmd-mdx-entity-name">tag</code></span>](#tag)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaTag</code></span>](/types/objects/media-tag.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#tag}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TagStats</code>.<code className="gqlmd-mdx-entity-name">amount</code></span>](#amount)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#amount}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TagStats</code>.<code className="gqlmd-mdx-entity-name">meanScore</code></span>](#mean-score)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#mean-score}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">TagStats</code>.<code className="gqlmd-mdx-entity-name">timeWatched</code></span>](#time-watched)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#time-watched}

The amount of time in minutes the tag has been watched by the user

### Member Of

[`UserStats`](/types/objects/user-stats.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
