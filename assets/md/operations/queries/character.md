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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by character id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">isBirthday</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter by character by if its their birthday today

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by search query

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by character id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by character id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by character id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[CharacterSort\]</code></span>](/types/enums/character-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Character</code></span>](/types/objects/character.mdx) :badge[object]

A character that features in an anime or manga
