The names of the staff member

```graphql
input StaffNameInput {
  first: String
  middle: String
  last: String
  native: String
  alternative: [String]
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffNameInput</code>.<code className="gqlmd-mdx-entity-name">first</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The person's given name

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffNameInput</code>.<code className="gqlmd-mdx-entity-name">middle</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The person's middle name

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffNameInput</code>.<code className="gqlmd-mdx-entity-name">last</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The person's surname

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffNameInput</code>.<code className="gqlmd-mdx-entity-name">native</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The person's full name in their native language

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffNameInput</code>.<code className="gqlmd-mdx-entity-name">alternative</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

Other names the character might be referred by
