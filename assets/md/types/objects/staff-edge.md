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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffEdge</code>.<code className="gqlmd-mdx-entity-name">node</code></span>](#node)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Staff</code></span>](/types/objects/staff.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#node}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffEdge</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the connection

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffEdge</code>.<code className="gqlmd-mdx-entity-name">role</code></span>](#role)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#role}

The role of the staff member in the production of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffEdge</code>.<code className="gqlmd-mdx-entity-name">favouriteOrder</code></span>](#favourite-order)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#favourite-order}

The order the staff should be displayed from the users favourites

### Member Of

[`MediaSubmissionComparison`](/types/objects/media-submission-comparison.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`StaffConnection`](/types/objects/staff-connection.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
