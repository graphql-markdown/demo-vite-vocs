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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ScoreFormat</code>.<code className="gqlmd-mdx-entity-name">POINT\_100</code></span>](#)

An integer from 0-100

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ScoreFormat</code>.<code className="gqlmd-mdx-entity-name">POINT\_10\_DECIMAL</code></span>](#)

A float from 0-10 with 1 decimal place

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ScoreFormat</code>.<code className="gqlmd-mdx-entity-name">POINT\_10</code></span>](#)

An integer from 0-10

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ScoreFormat</code>.<code className="gqlmd-mdx-entity-name">POINT\_5</code></span>](#)

An integer from 0-5. Should be represented in Stars

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">ScoreFormat</code>.<code className="gqlmd-mdx-entity-name">POINT\_3</code></span>](#)

An integer from 0-3. Should be represented in Smileys. 0 => No Score, 1 => :(, 2 => :|, 3 => :)

### Member Of

[`MediaListOptions`](/types/objects/media-list-options.mdx)  :badge[object]<Bullet />[`UpdateUser`](/operations/mutations/update-user.mdx)  :badge[mutation]
