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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the character

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">name</code></span>](#name)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterName</code></span>](/types/objects/character-name.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#name}

The names of the character

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">image</code></span>](#image)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterImage</code></span>](/types/objects/character-image.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#image}

Character images

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">description</code></span>](#description)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#description}

A general description of the character

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character.description</code>.<code className="gqlmd-mdx-entity-name">asHtml</code></span>](#character-description-as-html)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#character-description-as-html}

Return the string in pre-parsed html instead of markdown

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">gender</code></span>](#gender)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#gender}

The character's gender. Usually Male, Female, or Non-binary but can be any string.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">dateOfBirth</code></span>](#date-of-birth)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDate</code></span>](/types/objects/fuzzy-date.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#date-of-birth}

The character's birth date

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">age</code></span>](#age)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#age}

The character's age. Note this is a string, not an int, it may contain further text and additional ages.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">bloodType</code></span>](#blood-type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#blood-type}

The characters blood type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">isFavourite</code></span>](#is-favourite)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-favourite}

If the character is marked as favourite by the currently authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">isFavouriteBlocked</code></span>](#is-favourite-blocked)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-favourite-blocked}

If the character is blocked from being added to favourites

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">siteUrl</code></span>](#site-url)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-url}

The url for the character page on the AniList website

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#media)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaConnection</code></span>](/types/objects/media-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#media}

Media that includes the character

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character.media</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#character-media-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaSort\]</code></span>](/types/enums/media-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#character-media-sort}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character.media</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#character-media-type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaType</code></span>](/types/enums/media-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#character-media-type}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character.media</code>.<code className="gqlmd-mdx-entity-name">onList</code></span>](#character-media-on-list)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#character-media-on-list}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character.media</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#character-media-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#character-media-page}

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character.media</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#character-media-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#character-media-per-page}

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="warning" label="deprecated" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#updated-at}

:::warning[DEPRECATED]
No data available
:::

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">favourites</code></span>](#favourites)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#favourites}

The amount of user's who have favourited the character

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Character</code>.<code className="gqlmd-mdx-entity-name">modNotes</code></span>](#mod-notes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#mod-notes}

Notes for site moderators

### Returned By

[`Character`](/operations/queries/character.mdx)  <Chip color="info" label="query" size="small" variant="outlined" />

### Member Of

[`CharacterConnection`](/types/objects/character-connection.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`CharacterEdge`](/types/objects/character-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`CharacterSubmission`](/types/objects/character-submission.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`CharacterSubmissionUpdateNotification`](/types/objects/character-submission-update-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`InternalPage`](/types/objects/internal-page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaCharacter`](/types/objects/media-character.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaEdge`](/types/objects/media-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaSubmissionEdge`](/types/objects/media-submission-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Page`](/types/objects/page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`RevisionHistory`](/types/objects/revision-history.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
