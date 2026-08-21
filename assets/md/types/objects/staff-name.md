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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffName</code>.<code className="gqlmd-mdx-entity-name">first</code></span>](#first)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#first}

The person's given name

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffName</code>.<code className="gqlmd-mdx-entity-name">middle</code></span>](#middle)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#middle}

The person's middle name

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffName</code>.<code className="gqlmd-mdx-entity-name">last</code></span>](#last)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#last}

The person's surname

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffName</code>.<code className="gqlmd-mdx-entity-name">full</code></span>](#full)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#full}

The person's first and last name

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffName</code>.<code className="gqlmd-mdx-entity-name">native</code></span>](#native)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#native}

The person's full name in their native language

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffName</code>.<code className="gqlmd-mdx-entity-name">alternative</code></span>](#alternative)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#alternative}

Other names the staff member might be referred to as (pen names)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffName</code>.<code className="gqlmd-mdx-entity-name">userPreferred</code></span>](#user-preferred)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#user-preferred}

The currently authenticated users preferred name language. Default romaji for non-authenticated

### Member Of

[`Staff`](/types/objects/staff.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
