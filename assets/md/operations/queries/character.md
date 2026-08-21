Character query

```graphql
Character(
  id: Int
  isBirthday: Boolean
  search: String
  id_not: Int
  id_in: [Int]
  id_not_in: [Int]
  sort: [CharacterSort]
): Character
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

Filter by character id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">isBirthday</code></span>](#is-birthday)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-birthday}

Filter by character by if its their birthday today

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#search)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#search}

Filter by search query

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#id-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id-not}

Filter by character id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id-in}

Filter by character id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id-not-in}

Filter by character id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[CharacterSort\]</code></span>](/types/enums/character-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#sort}

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Character</code></span>](/types/objects/character.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

A character that features in an anime or manga
