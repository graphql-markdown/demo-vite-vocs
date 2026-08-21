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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffNameInput</code>.<code className="gqlmd-mdx-entity-name">first</code></span>](#first)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#first}

The person's given name

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffNameInput</code>.<code className="gqlmd-mdx-entity-name">middle</code></span>](#middle)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#middle}

The person's middle name

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffNameInput</code>.<code className="gqlmd-mdx-entity-name">last</code></span>](#last)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#last}

The person's surname

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffNameInput</code>.<code className="gqlmd-mdx-entity-name">native</code></span>](#native)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#native}

The person's full name in their native language

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffNameInput</code>.<code className="gqlmd-mdx-entity-name">alternative</code></span>](#alternative)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#alternative}

Other names the character might be referred by
