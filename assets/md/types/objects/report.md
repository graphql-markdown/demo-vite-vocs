# Report

No description

```graphql
type Report {
  id: Int!
  reporter: User
  reported: User
  reason: String
  createdAt: Int
  cleared: Boolean
  assignee: User
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Report</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](/types/objects/report)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Report</code>.<code className="gqlmd-mdx-entity-name">reporter</code></span>](/types/objects/report)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Report</code>.<code className="gqlmd-mdx-entity-name">reported</code></span>](/types/objects/report)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Report</code>.<code className="gqlmd-mdx-entity-name">reason</code></span>](/types/objects/report)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Report</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](/types/objects/report)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

When the entry data was created

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Report</code>.<code className="gqlmd-mdx-entity-name">cleared</code></span>](/types/objects/report)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Report</code>.<code className="gqlmd-mdx-entity-name">assignee</code></span>](/types/objects/report)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

### Member Of

[`InternalPage`](/types/objects/internal-page.mdx)  :badge[object]
