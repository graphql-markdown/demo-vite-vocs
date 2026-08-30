Staff query

```graphql
Staff(
  id: Int
  isBirthday: Boolean
  search: String
  id_not: Int
  id_in: [Int]
  id_not_in: [Int]
  sort: [StaffSort]
): Staff
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the staff id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">isBirthday</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter by staff by if its their birthday today

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by search query

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the staff id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the staff id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the staff id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffSort\]</code></span>](/types/enums/staff-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Staff</code></span>](/types/objects/staff.mdx) :badge[object]

Voice actors or production staff
