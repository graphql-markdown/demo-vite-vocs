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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StudioEdge</code>.<code className="gqlmd-mdx-entity-name">node</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Studio</code></span>](/types/objects/studio.mdx) :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StudioEdge</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The id of the connection

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StudioEdge</code>.<code className="gqlmd-mdx-entity-name">isMain</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) :badge[non-null] :badge[scalar]

If the studio is the main animation studio of the anime

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StudioEdge</code>.<code className="gqlmd-mdx-entity-name">favouriteOrder</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The order the character should be displayed from the users favourites

### Member Of

[`MediaSubmissionComparison`](/types/objects/media-submission-comparison.mdx)  :badge[object]<Bullet />[`StudioConnection`](/types/objects/studio-connection.mdx)  :badge[object]
