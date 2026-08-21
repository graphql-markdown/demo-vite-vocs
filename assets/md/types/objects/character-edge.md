Character connection edge

```graphql
type CharacterEdge {
  node: Character
  id: Int
  role: CharacterRole
  name: String
  voiceActors(
    language: StaffLanguage
    sort: [StaffSort]
  ): [Staff]
  voiceActorRoles(
    language: StaffLanguage
    sort: [StaffSort]
  ): [StaffRoleType]
  media: [Media]
  favouriteOrder: Int
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge</code>.<code className="gqlmd-mdx-entity-name">node</code></span>](#node)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Character</code></span>](/types/objects/character.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#node}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the connection

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge</code>.<code className="gqlmd-mdx-entity-name">role</code></span>](#role)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterRole</code></span>](/types/enums/character-role.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#role}

The characters role in the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge</code>.<code className="gqlmd-mdx-entity-name">name</code></span>](#name)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#name}

Media specific character name

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge</code>.<code className="gqlmd-mdx-entity-name">voiceActors</code></span>](#voice-actors)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Staff\]</code></span>](/types/objects/staff.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#voice-actors}

The voice actors of the character

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge.voiceActors</code>.<code className="gqlmd-mdx-entity-name">language</code></span>](#character-edge-voice-actors-language)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StaffLanguage</code></span>](/types/enums/staff-language.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#character-edge-voice-actors-language}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge.voiceActors</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#character-edge-voice-actors-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffSort\]</code></span>](/types/enums/staff-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#character-edge-voice-actors-sort}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge</code>.<code className="gqlmd-mdx-entity-name">voiceActorRoles</code></span>](#voice-actor-roles)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffRoleType\]</code></span>](/types/objects/staff-role-type.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#voice-actor-roles}

The voice actors of the character with role date

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge.voiceActorRoles</code>.<code className="gqlmd-mdx-entity-name">language</code></span>](#character-edge-voice-actor-roles-language)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StaffLanguage</code></span>](/types/enums/staff-language.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#character-edge-voice-actor-roles-language}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge.voiceActorRoles</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#character-edge-voice-actor-roles-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffSort\]</code></span>](/types/enums/staff-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#character-edge-voice-actor-roles-sort}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#media)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Media\]</code></span>](/types/objects/media.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#media}

The media the character is in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge</code>.<code className="gqlmd-mdx-entity-name">favouriteOrder</code></span>](#favourite-order)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#favourite-order}

The order the character should be displayed from the users favourites

### Member Of

[`CharacterConnection`](/types/objects/character-connection.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
