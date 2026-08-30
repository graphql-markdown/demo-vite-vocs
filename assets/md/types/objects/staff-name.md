The names of the staff member

```graphql
type StaffName {
  first: String
  middle: String
  last: String
  full: String
  native: String
  alternative: [String]
  userPreferred: String
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffName</code>.<code className="gqlmd-mdx-entity-name">first</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The person's given name

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffName</code>.<code className="gqlmd-mdx-entity-name">middle</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The person's middle name

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffName</code>.<code className="gqlmd-mdx-entity-name">last</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The person's surname

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffName</code>.<code className="gqlmd-mdx-entity-name">full</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The person's first and last name

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffName</code>.<code className="gqlmd-mdx-entity-name">native</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The person's full name in their native language

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffName</code>.<code className="gqlmd-mdx-entity-name">alternative</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

Other names the staff member might be referred to as (pen names)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffName</code>.<code className="gqlmd-mdx-entity-name">userPreferred</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The currently authenticated users preferred name language. Default romaji for non-authenticated

### Member Of

[`Staff`](/types/objects/staff.mdx)  :badge[object]
