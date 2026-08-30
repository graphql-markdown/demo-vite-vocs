Media list watching/reading status enum.

```graphql
enum MediaListStatus {
  CURRENT
  PLANNING
  COMPLETED
  DROPPED
  PAUSED
  REPEATING
}
```

### Values

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListStatus</code>.<code className="gqlmd-mdx-entity-name">CURRENT</code></span>](#)

Currently watching/reading

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListStatus</code>.<code className="gqlmd-mdx-entity-name">PLANNING</code></span>](#)

Planning to watch/read

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListStatus</code>.<code className="gqlmd-mdx-entity-name">COMPLETED</code></span>](#)

Finished watching/reading

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListStatus</code>.<code className="gqlmd-mdx-entity-name">DROPPED</code></span>](#)

Stopped watching/reading before completing

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListStatus</code>.<code className="gqlmd-mdx-entity-name">PAUSED</code></span>](#)

Paused watching/reading

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListStatus</code>.<code className="gqlmd-mdx-entity-name">REPEATING</code></span>](#)

Re-watching/reading

### Member Of

[`ListActivityOption`](/types/objects/list-activity-option.mdx)  :badge[object]<Bullet />[`ListActivityOptionInput`](/types/inputs/list-activity-option-input.mdx)  :badge[input]<Bullet />[`MediaList`](/operations/queries/media-list.mdx)  :badge[query]<Bullet />[`MediaList`](/types/objects/media-list.mdx)  :badge[object]<Bullet />[`MediaListCollection`](/operations/queries/media-list-collection.mdx)  :badge[query]<Bullet />[`MediaListGroup`](/types/objects/media-list-group.mdx)  :badge[object]<Bullet />[`SaveMediaListEntry`](/operations/mutations/save-media-list-entry.mdx)  :badge[mutation]<Bullet />[`StatusDistribution`](/types/objects/status-distribution.mdx)  :badge[object]<Bullet />[`UpdateMediaListEntries`](/operations/mutations/update-media-list-entries.mdx)  :badge[mutation]<Bullet />[`UserStatusStatistic`](/types/objects/user-status-statistic.mdx)  :badge[object]
