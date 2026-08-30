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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">node</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The id of the connection

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">relationType</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaRelation</code></span>](/types/enums/media-relation.mdx) :badge[enum]

The type of relation to the parent model

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge.relationType</code>.<code className="gqlmd-mdx-entity-name">version</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Provide 3 to use new version 3 of relation enum

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">isMainStudio</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) :badge[non-null] :badge[scalar]

If the studio is the main animation studio of the media (For Studio->MediaConnection field only)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">characters</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Character\]</code></span>](/types/objects/character.mdx) :badge[list] :badge[object]

The characters in the media voiced by the parent actor

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">characterRole</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterRole</code></span>](/types/enums/character-role.mdx) :badge[enum]

The characters role in the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">characterName</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Media specific character name

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">roleNotes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Notes regarding the VA's role for the character

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">dubGroup</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">staffRole</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The role of the staff member in the production of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">voiceActors</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Staff\]</code></span>](/types/objects/staff.mdx) :badge[list] :badge[object]

The voice actors of the character

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge.voiceActors</code>.<code className="gqlmd-mdx-entity-name">language</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StaffLanguage</code></span>](/types/enums/staff-language.mdx) :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge.voiceActors</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffSort\]</code></span>](/types/enums/staff-sort.mdx) :badge[list] :badge[enum]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">voiceActorRoles</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffRoleType\]</code></span>](/types/objects/staff-role-type.mdx) :badge[list] :badge[object]

The voice actors of the character with role date

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge.voiceActorRoles</code>.<code className="gqlmd-mdx-entity-name">language</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StaffLanguage</code></span>](/types/enums/staff-language.mdx) :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge.voiceActorRoles</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffSort\]</code></span>](/types/enums/staff-sort.mdx) :badge[list] :badge[enum]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">MediaEdge</code>.<code className="gqlmd-mdx-entity-name">favouriteOrder</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The order the media should be displayed from the users favourites

### Member Of

[`MediaConnection`](/types/objects/media-connection.mdx)  :badge[object]<Bullet />[`MediaSubmission`](/types/objects/media-submission.mdx)  :badge[object]
