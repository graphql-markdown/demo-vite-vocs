Media connection edge

```graphql
type MediaEdge {
  node: Media
  id: Int
  relationType(
    version: Int
  ): MediaRelation
  isMainStudio: Boolean!
  characters: [Character]
  characterRole: CharacterRole
  characterName: String
  roleNotes: String
  dubGroup: String
  staffRole: String
  voiceActors(
    language: StaffLanguage
    sort: [StaffSort]
  ): [Staff]
  voiceActorRoles(
    language: StaffLanguage
    sort: [StaffSort]
  ): [StaffRoleType]
  favouriteOrder: Int
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">node</code></span>](#node)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#node}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the connection

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">relationType</code></span>](#relation-type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaRelation</code></span>](/types/enums/media-relation.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#relation-type}

The type of relation to the parent model

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge.relationType</code>.<code className="gqlmd-mdx-entity-name">version</code></span>](#media-edge-relation-type-version)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-edge-relation-type-version}

Provide 3 to use new version 3 of relation enum

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">isMainStudio</code></span>](#is-main-studio)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-main-studio}

If the studio is the main animation studio of the media (For Studio->MediaConnection field only)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">characters</code></span>](#characters)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Character\]</code></span>](/types/objects/character.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#characters}

The characters in the media voiced by the parent actor

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">characterRole</code></span>](#character-role)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterRole</code></span>](/types/enums/character-role.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#character-role}

The characters role in the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">characterName</code></span>](#character-name)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#character-name}

Media specific character name

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">roleNotes</code></span>](#role-notes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#role-notes}

Notes regarding the VA's role for the character

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">dubGroup</code></span>](#dub-group)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#dub-group}

Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">staffRole</code></span>](#staff-role)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#staff-role}

The role of the staff member in the production of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">voiceActors</code></span>](#voice-actors)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Staff\]</code></span>](/types/objects/staff.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#voice-actors}

The voice actors of the character

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge.voiceActors</code>.<code className="gqlmd-mdx-entity-name">language</code></span>](#media-edge-voice-actors-language)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StaffLanguage</code></span>](/types/enums/staff-language.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#media-edge-voice-actors-language}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge.voiceActors</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#media-edge-voice-actors-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffSort\]</code></span>](/types/enums/staff-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#media-edge-voice-actors-sort}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">voiceActorRoles</code></span>](#voice-actor-roles)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffRoleType\]</code></span>](/types/objects/staff-role-type.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#voice-actor-roles}

The voice actors of the character with role date

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge.voiceActorRoles</code>.<code className="gqlmd-mdx-entity-name">language</code></span>](#media-edge-voice-actor-roles-language)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StaffLanguage</code></span>](/types/enums/staff-language.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#media-edge-voice-actor-roles-language}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge.voiceActorRoles</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#media-edge-voice-actor-roles-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffSort\]</code></span>](/types/enums/staff-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#media-edge-voice-actor-roles-sort}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">favouriteOrder</code></span>](#favourite-order)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#favourite-order}

The order the media should be displayed from the users favourites

### Member Of

[`MediaConnection`](/types/objects/media-connection.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaSubmission`](/types/objects/media-submission.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
