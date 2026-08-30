A character that features in an anime or manga

```graphql
type Character {
  id: Int!
  name: CharacterName
  image: CharacterImage
  description(
    asHtml: Boolean
  ): String
  gender: String
  dateOfBirth: FuzzyDate
  age: String
  bloodType: String
  isFavourite: Boolean!
  isFavouriteBlocked: Boolean!
  siteUrl: String
  media(
    sort: [MediaSort]
    type: MediaType
    onList: Boolean
    page: Int
    perPage: Int
  ): MediaConnection
  updatedAt: Int @deprecated
  favourites: Int
  modNotes: String
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the character

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">name</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterName</code></span>](/types/objects/character-name.mdx) :badge[object]

The names of the character

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">image</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterImage</code></span>](/types/objects/character-image.mdx) :badge[object]

Character images

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">description</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

A general description of the character

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character.description</code>.<code className="gqlmd-mdx-entity-name">asHtml</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Return the string in pre-parsed html instead of markdown

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">gender</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The character's gender. Usually Male, Female, or Non-binary but can be any string.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">dateOfBirth</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDate</code></span>](/types/objects/fuzzy-date.mdx) :badge[object]

The character's birth date

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">age</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The character's age. Note this is a string, not an int, it may contain further text and additional ages.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">bloodType</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The characters blood type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">isFavourite</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) :badge[non-null] :badge[scalar]

If the character is marked as favourite by the currently authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">isFavouriteBlocked</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) :badge[non-null] :badge[scalar]

If the character is blocked from being added to favourites

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">siteUrl</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The url for the character page on the AniList website

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaConnection</code></span>](/types/objects/media-connection.mdx) :badge[object]

Media that includes the character

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character.media</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaSort\]</code></span>](/types/enums/media-sort.mdx) :badge[list] :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character.media</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaType</code></span>](/types/enums/media-type.mdx) :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character.media</code>.<code className="gqlmd-mdx-entity-name">onList</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character.media</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character.media</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">updatedAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[deprecated]{warning} :badge[scalar]

:::warning[DEPRECATED]
No data available
:::

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">favourites</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of user's who have favourited the character

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">modNotes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Notes for site moderators

### Returned By

[`Character`](/operations/queries/character.mdx)  :badge[query]

### Member Of

[`CharacterConnection`](/types/objects/character-connection.mdx)  :badge[object]<Bullet />[`CharacterEdge`](/types/objects/character-edge.mdx)  :badge[object]<Bullet />[`CharacterSubmission`](/types/objects/character-submission.mdx)  :badge[object]<Bullet />[`CharacterSubmissionUpdateNotification`](/types/objects/character-submission-update-notification.mdx)  :badge[object]<Bullet />[`InternalPage`](/types/objects/internal-page.mdx)  :badge[object]<Bullet />[`MediaCharacter`](/types/objects/media-character.mdx)  :badge[object]<Bullet />[`MediaEdge`](/types/objects/media-edge.mdx)  :badge[object]<Bullet />[`MediaSubmissionEdge`](/types/objects/media-submission-edge.mdx)  :badge[object]<Bullet />[`Page`](/types/objects/page.mdx)  :badge[object]<Bullet />[`RevisionHistory`](/types/objects/revision-history.mdx)  :badge[object]
