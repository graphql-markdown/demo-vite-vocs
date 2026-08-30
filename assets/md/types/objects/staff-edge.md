Staff connection edge

```graphql
type StaffEdge {
  node: Staff
  id: Int
  role: String
  favouriteOrder: Int
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffEdge</code>.<code className="gqlmd-mdx-entity-name">node</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Staff</code></span>](/types/objects/staff.mdx) :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffEdge</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The id of the connection

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffEdge</code>.<code className="gqlmd-mdx-entity-name">role</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The role of the staff member in the production of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffEdge</code>.<code className="gqlmd-mdx-entity-name">favouriteOrder</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The order the staff should be displayed from the users favourites

### Member Of

[`MediaSubmissionComparison`](/types/objects/media-submission-comparison.mdx)  :badge[object]<Bullet />[`StaffConnection`](/types/objects/staff-connection.mdx)  :badge[object]
