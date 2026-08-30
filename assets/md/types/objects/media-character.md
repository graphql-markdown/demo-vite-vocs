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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaCharacter</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The id of the connection

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaCharacter</code>.<code className="gqlmd-mdx-entity-name">role</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterRole</code></span>](/types/enums/character-role.mdx) :badge[enum]

The characters role in the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaCharacter</code>.<code className="gqlmd-mdx-entity-name">roleNotes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaCharacter</code>.<code className="gqlmd-mdx-entity-name">dubGroup</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaCharacter</code>.<code className="gqlmd-mdx-entity-name">characterName</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Media specific character name

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaCharacter</code>.<code className="gqlmd-mdx-entity-name">character</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Character</code></span>](/types/objects/character.mdx) :badge[object]

The characters in the media voiced by the parent actor

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaCharacter</code>.<code className="gqlmd-mdx-entity-name">voiceActor</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Staff</code></span>](/types/objects/staff.mdx) :badge[object]

The voice actor of the character

### Member Of

[`MediaSubmissionComparison`](/types/objects/media-submission-comparison.mdx)  :badge[object]
