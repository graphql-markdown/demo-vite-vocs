Internal - Media characters separated

```graphql
type MediaCharacter {
  id: Int
  role: CharacterRole
  roleNotes: String
  dubGroup: String
  characterName: String
  character: Character
  voiceActor: Staff
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaCharacter</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the connection

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaCharacter</code>.<code className="gqlmd-mdx-entity-name">role</code></span>](#role)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterRole</code></span>](/types/enums/character-role.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#role}

The characters role in the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaCharacter</code>.<code className="gqlmd-mdx-entity-name">roleNotes</code></span>](#role-notes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#role-notes}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaCharacter</code>.<code className="gqlmd-mdx-entity-name">dubGroup</code></span>](#dub-group)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#dub-group}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaCharacter</code>.<code className="gqlmd-mdx-entity-name">characterName</code></span>](#character-name)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#character-name}

Media specific character name

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaCharacter</code>.<code className="gqlmd-mdx-entity-name">character</code></span>](#character)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Character</code></span>](/types/objects/character.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#character}

The characters in the media voiced by the parent actor

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaCharacter</code>.<code className="gqlmd-mdx-entity-name">voiceActor</code></span>](#voice-actor)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Staff</code></span>](/types/objects/staff.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#voice-actor}

The voice actor of the character

### Member Of

[`MediaSubmissionComparison`](/types/objects/media-submission-comparison.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
