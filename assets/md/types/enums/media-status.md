The current releasing status of the media

```graphql
enum MediaStatus {
  FINISHED
  RELEASING
  NOT_YET_RELEASED
  CANCELLED
  HIATUS
}
```

### Values

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaStatus</code>.<code className="gqlmd-mdx-entity-name">FINISHED</code></span>](#finished) \{#finished}

Has completed and is no longer being released

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaStatus</code>.<code className="gqlmd-mdx-entity-name">RELEASING</code></span>](#releasing) \{#releasing}

Currently releasing

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaStatus</code>.<code className="gqlmd-mdx-entity-name">NOT\_YET\_RELEASED</code></span>](#not-yet-released) \{#not-yet-released}

To be released at a later date

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaStatus</code>.<code className="gqlmd-mdx-entity-name">CANCELLED</code></span>](#cancelled) \{#cancelled}

Ended before the work could be finished

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaStatus</code>.<code className="gqlmd-mdx-entity-name">HIATUS</code></span>](#hiatus) \{#hiatus}

Version 2 only. Is currently paused from releasing and will resume at a later date

### Member Of

[`Media`](/operations/queries/media.mdx)  <Chip color="info" label="query" size="small" variant="outlined" /><Bullet />[`Media`](/types/objects/media.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
