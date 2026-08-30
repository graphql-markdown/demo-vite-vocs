A media's statistics

```graphql
type MediaStats {
  scoreDistribution: [ScoreDistribution]
  statusDistribution: [StatusDistribution]
  airingProgression: [AiringProgression] @deprecated
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaStats</code>.<code className="gqlmd-mdx-entity-name">scoreDistribution</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ScoreDistribution\]</code></span>](/types/objects/score-distribution.mdx) :badge[list] :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaStats</code>.<code className="gqlmd-mdx-entity-name">statusDistribution</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StatusDistribution\]</code></span>](/types/objects/status-distribution.mdx) :badge[list] :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaStats</code>.<code className="gqlmd-mdx-entity-name">airingProgression</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[AiringProgression\]</code></span>](/types/objects/airing-progression.mdx) :badge[deprecated]{warning} :badge[list] :badge[object]

:::warning[DEPRECATED]
Replaced by MediaTrends
:::

### Member Of

[`Media`](/types/objects/media.mdx)  :badge[object]
