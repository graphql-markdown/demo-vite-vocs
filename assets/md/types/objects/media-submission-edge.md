No description

```graphql
type MediaSubmissionEdge {
  id: Int
  characterRole: CharacterRole
  staffRole: String
  roleNotes: String
  dubGroup: String
  characterName: String
  isMain: Boolean
  character: Character
  characterSubmission: Character
  voiceActor: Staff
  voiceActorSubmission: Staff
  staff: Staff
  staffSubmission: Staff
  studio: Studio
  externalLink: MediaExternalLink
  media: Media
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the direct submission

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">characterRole</code></span>](#character-role)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterRole</code></span>](/types/enums/character-role.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#character-role}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">staffRole</code></span>](#staff-role)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#staff-role}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">roleNotes</code></span>](#role-notes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#role-notes}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">dubGroup</code></span>](#dub-group)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#dub-group}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">characterName</code></span>](#character-name)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#character-name}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">isMain</code></span>](#is-main)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-main}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">character</code></span>](#character)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Character</code></span>](/types/objects/character.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#character}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">characterSubmission</code></span>](#character-submission)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Character</code></span>](/types/objects/character.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#character-submission}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">voiceActor</code></span>](#voice-actor)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Staff</code></span>](/types/objects/staff.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#voice-actor}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">voiceActorSubmission</code></span>](#voice-actor-submission)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Staff</code></span>](/types/objects/staff.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#voice-actor-submission}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">staff</code></span>](#staff)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Staff</code></span>](/types/objects/staff.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#staff}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">staffSubmission</code></span>](#staff-submission)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Staff</code></span>](/types/objects/staff.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#staff-submission}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">studio</code></span>](#studio)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Studio</code></span>](/types/objects/studio.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#studio}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">externalLink</code></span>](#external-link)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaExternalLink</code></span>](/types/objects/media-external-link.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#external-link}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaSubmissionEdge</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#media)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#media}

### Member Of

[`MediaSubmissionComparison`](/types/objects/media-submission-comparison.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
