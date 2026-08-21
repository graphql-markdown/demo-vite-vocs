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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListStatus</code>.<code className="gqlmd-mdx-entity-name">CURRENT</code></span>](#current) \{#current}

Currently watching/reading

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListStatus</code>.<code className="gqlmd-mdx-entity-name">PLANNING</code></span>](#planning) \{#planning}

Planning to watch/read

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListStatus</code>.<code className="gqlmd-mdx-entity-name">COMPLETED</code></span>](#completed) \{#completed}

Finished watching/reading

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListStatus</code>.<code className="gqlmd-mdx-entity-name">DROPPED</code></span>](#dropped) \{#dropped}

Stopped watching/reading before completing

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListStatus</code>.<code className="gqlmd-mdx-entity-name">PAUSED</code></span>](#paused) \{#paused}

Paused watching/reading

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaListStatus</code>.<code className="gqlmd-mdx-entity-name">REPEATING</code></span>](#repeating) \{#repeating}

Re-watching/reading

### Member Of

[`ListActivityOption`](/types/objects/list-activity-option.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ListActivityOptionInput`](/types/inputs/list-activity-option-input.mdx)  <Chip color="info" label="input" size="small" variant="outlined" /><Bullet />[`MediaList`](/operations/queries/media-list.mdx)  <Chip color="info" label="query" size="small" variant="outlined" /><Bullet />[`MediaList`](/types/objects/media-list.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaListCollection`](/operations/queries/media-list-collection.mdx)  <Chip color="info" label="query" size="small" variant="outlined" /><Bullet />[`MediaListGroup`](/types/objects/media-list-group.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`SaveMediaListEntry`](/operations/mutations/save-media-list-entry.mdx)  <Chip color="info" label="mutation" size="small" variant="outlined" /><Bullet />[`StatusDistribution`](/types/objects/status-distribution.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`UpdateMediaListEntries`](/operations/mutations/update-media-list-entries.mdx)  <Chip color="info" label="mutation" size="small" variant="outlined" /><Bullet />[`UserStatusStatistic`](/types/objects/user-status-statistic.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
