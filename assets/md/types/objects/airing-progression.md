Score & Watcher stats for airing anime by episode and mid-week

```graphql
type AiringProgression {
  episode: Float
  score: Float
  watching: Int
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringProgression</code>.<code className="gqlmd-mdx-entity-name">episode</code></span>](#episode)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Float</code></span>](/types/scalars/float.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#episode}

The episode the stats were recorded at. .5 is the mid point between 2 episodes airing dates.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringProgression</code>.<code className="gqlmd-mdx-entity-name">score</code></span>](#score)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Float</code></span>](/types/scalars/float.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#score}

The average score for the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringProgression</code>.<code className="gqlmd-mdx-entity-name">watching</code></span>](#watching)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#watching}

The amount of users watching the anime

### Member Of

[`MediaStats`](/types/objects/media-stats.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
