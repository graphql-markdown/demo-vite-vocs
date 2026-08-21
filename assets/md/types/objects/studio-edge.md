Studio connection edge

```graphql
type StudioEdge {
  node: Studio
  id: Int
  isMain: Boolean!
  favouriteOrder: Int
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StudioEdge</code>.<code className="gqlmd-mdx-entity-name">node</code></span>](#node)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Studio</code></span>](/types/objects/studio.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#node}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StudioEdge</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the connection

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StudioEdge</code>.<code className="gqlmd-mdx-entity-name">isMain</code></span>](#is-main)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-main}

If the studio is the main animation studio of the anime

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StudioEdge</code>.<code className="gqlmd-mdx-entity-name">favouriteOrder</code></span>](#favourite-order)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#favourite-order}

The order the character should be displayed from the users favourites

### Member Of

[`MediaSubmissionComparison`](/types/objects/media-submission-comparison.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`StudioConnection`](/types/objects/studio-connection.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
