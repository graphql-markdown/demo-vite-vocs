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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge</code>.<code className="gqlmd-mdx-entity-name">node</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Character</code></span>](/types/objects/character.mdx) :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The id of the connection

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge</code>.<code className="gqlmd-mdx-entity-name">role</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterRole</code></span>](/types/enums/character-role.mdx) :badge[enum]

The characters role in the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge</code>.<code className="gqlmd-mdx-entity-name">name</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Media specific character name

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge</code>.<code className="gqlmd-mdx-entity-name">voiceActors</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Staff\]</code></span>](/types/objects/staff.mdx) :badge[list] :badge[object]

The voice actors of the character

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge.voiceActors</code>.<code className="gqlmd-mdx-entity-name">language</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StaffLanguage</code></span>](/types/enums/staff-language.mdx) :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge.voiceActors</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffSort\]</code></span>](/types/enums/staff-sort.mdx) :badge[list] :badge[enum]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge</code>.<code className="gqlmd-mdx-entity-name">voiceActorRoles</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffRoleType\]</code></span>](/types/objects/staff-role-type.mdx) :badge[list] :badge[object]

The voice actors of the character with role date

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge.voiceActorRoles</code>.<code className="gqlmd-mdx-entity-name">language</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StaffLanguage</code></span>](/types/enums/staff-language.mdx) :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge.voiceActorRoles</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffSort\]</code></span>](/types/enums/staff-sort.mdx) :badge[list] :badge[enum]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Media\]</code></span>](/types/objects/media.mdx) :badge[list] :badge[object]

The media the character is in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">CharacterEdge</code>.<code className="gqlmd-mdx-entity-name">favouriteOrder</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The order the character should be displayed from the users favourites

### Member Of

[`CharacterConnection`](/types/objects/character-connection.mdx)  :badge[object]
