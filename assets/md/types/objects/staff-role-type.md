Voice actor role for a character

```graphql
type StaffRoleType {
  voiceActor: Staff
  roleNotes: String
  dubGroup: String
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffRoleType</code>.<code className="gqlmd-mdx-entity-name">voiceActor</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Staff</code></span>](/types/objects/staff.mdx) :badge[object]

The voice actors of the character

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffRoleType</code>.<code className="gqlmd-mdx-entity-name">roleNotes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Notes regarding the VA's role for the character

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffRoleType</code>.<code className="gqlmd-mdx-entity-name">dubGroup</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant.

### Member Of

[`CharacterEdge`](/types/objects/character-edge.mdx)  :badge[object]<Bullet />[`MediaEdge`](/types/objects/media-edge.mdx)  :badge[object]
