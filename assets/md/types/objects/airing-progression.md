Score & Watcher stats for airing anime by episode and mid-week

```graphql
type AiringProgression {
  episode: Float
  score: Float
  watching: Int
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringProgression</code>.<code className="gqlmd-mdx-entity-name">episode</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Float</code></span>](/types/scalars/float.mdx) :badge[scalar]

The episode the stats were recorded at. .5 is the mid point between 2 episodes airing dates.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringProgression</code>.<code className="gqlmd-mdx-entity-name">score</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Float</code></span>](/types/scalars/float.mdx) :badge[scalar]

The average score for the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">AiringProgression</code>.<code className="gqlmd-mdx-entity-name">watching</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of users watching the anime

### Member Of

[`MediaStats`](/types/objects/media-stats.mdx)  :badge[object]
