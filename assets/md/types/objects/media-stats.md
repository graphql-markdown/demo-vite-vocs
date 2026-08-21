A media's statistics

```graphql
type MediaStats {
  scoreDistribution: [ScoreDistribution]
  statusDistribution: [StatusDistribution]
  airingProgression: [AiringProgression] @deprecated
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaStats</code>.<code className="gqlmd-mdx-entity-name">scoreDistribution</code></span>](#score-distribution)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ScoreDistribution\]</code></span>](/types/objects/score-distribution.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#score-distribution}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaStats</code>.<code className="gqlmd-mdx-entity-name">statusDistribution</code></span>](#status-distribution)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StatusDistribution\]</code></span>](/types/objects/status-distribution.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#status-distribution}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaStats</code>.<code className="gqlmd-mdx-entity-name">airingProgression</code></span>](#airing-progression)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[AiringProgression\]</code></span>](/types/objects/airing-progression.mdx) <Chip color="warning" label="deprecated" size="small" variant="outlined" /> <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#airing-progression}

:::warning[DEPRECATED]
Replaced by MediaTrends
:::

### Member Of

[`Media`](/types/objects/media.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
