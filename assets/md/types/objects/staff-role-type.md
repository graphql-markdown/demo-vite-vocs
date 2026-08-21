Voice actor role for a character

```graphql
type StaffRoleType {
  voiceActor: Staff
  roleNotes: String
  dubGroup: String
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffRoleType</code>.<code className="gqlmd-mdx-entity-name">voiceActor</code></span>](#voice-actor)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Staff</code></span>](/types/objects/staff.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#voice-actor}

The voice actors of the character

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffRoleType</code>.<code className="gqlmd-mdx-entity-name">roleNotes</code></span>](#role-notes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#role-notes}

Notes regarding the VA's role for the character

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">StaffRoleType</code>.<code className="gqlmd-mdx-entity-name">dubGroup</code></span>](#dub-group)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#dub-group}

Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant.

### Member Of

[`CharacterEdge`](/types/objects/character-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaEdge`](/types/objects/media-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
