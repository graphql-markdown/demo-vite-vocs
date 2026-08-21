Media list scoring type

```graphql
enum ScoreFormat {
  POINT_100
  POINT_10_DECIMAL
  POINT_10
  POINT_5
  POINT_3
}
```

### Values

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ScoreFormat</code>.<code className="gqlmd-mdx-entity-name">POINT\_100</code></span>](#point-100) \{#point-100}

An integer from 0-100

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ScoreFormat</code>.<code className="gqlmd-mdx-entity-name">POINT\_10\_DECIMAL</code></span>](#point-10-decimal) \{#point-10-decimal}

A float from 0-10 with 1 decimal place

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ScoreFormat</code>.<code className="gqlmd-mdx-entity-name">POINT\_10</code></span>](#point-10) \{#point-10}

An integer from 0-10

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ScoreFormat</code>.<code className="gqlmd-mdx-entity-name">POINT\_5</code></span>](#point-5) \{#point-5}

An integer from 0-5. Should be represented in Stars

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ScoreFormat</code>.<code className="gqlmd-mdx-entity-name">POINT\_3</code></span>](#point-3) \{#point-3}

An integer from 0-3. Should be represented in Smileys. 0 => No Score, 1 => :(, 2 => :|, 3 => :)

### Member Of

[`MediaListOptions`](/types/objects/media-list-options.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`UpdateUser`](/operations/mutations/update-user.mdx)  <Chip color="info" label="mutation" size="small" variant="outlined" />
