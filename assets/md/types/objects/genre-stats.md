User's genre statistics

```graphql
type GenreStats {
  genre: String
  amount: Int
  meanScore: Int
  timeWatched: Int
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">GenreStats</code>.<code className="gqlmd-mdx-entity-name">genre</code></span>](#genre)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#genre}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">GenreStats</code>.<code className="gqlmd-mdx-entity-name">amount</code></span>](#amount)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#amount}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">GenreStats</code>.<code className="gqlmd-mdx-entity-name">meanScore</code></span>](#mean-score)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#mean-score}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">GenreStats</code>.<code className="gqlmd-mdx-entity-name">timeWatched</code></span>](#time-watched)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#time-watched}

The amount of time in minutes the genre has been watched by the user

### Member Of

[`UserStats`](/types/objects/user-stats.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
