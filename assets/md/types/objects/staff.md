Voice actors or production staff

```graphql
type Staff {
  id: Int!
  name: StaffName
  language: StaffLanguage @deprecated
  languageV2: String
  image: StaffImage
  description(
    asHtml: Boolean
  ): String
  primaryOccupations: [String]
  gender: String
  dateOfBirth: FuzzyDate
  dateOfDeath: FuzzyDate
  age: Int
  yearsActive: [Int]
  homeTown: String
  bloodType: String
  isFavourite: Boolean!
  isFavouriteBlocked: Boolean!
  siteUrl: String
  staffMedia(
    sort: [MediaSort]
    type: MediaType
    onList: Boolean
    page: Int
    perPage: Int
  ): MediaConnection
  characters(
    sort: [CharacterSort]
    page: Int
    perPage: Int
  ): CharacterConnection
  characterMedia(
    sort: [MediaSort]
    onList: Boolean
    page: Int
    perPage: Int
  ): MediaConnection
  updatedAt: Int @deprecated
  staff: Staff
  submitter: User
  submissionStatus: Int
  submissionNotes: String
  favourites: Int
  modNotes: String
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the staff member

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">name</code></span>](#name)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StaffName</code></span>](/types/objects/staff-name.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#name}

The names of the staff member

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">language</code></span>](#language)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StaffLanguage</code></span>](/types/enums/staff-language.mdx) <Chip color="warning" label="deprecated" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#language}

:::warning[DEPRECATED]
Replaced with languageV2
:::

The primary language the staff member dub's in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">languageV2</code></span>](#language-v2)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#language-v2}

The primary language of the staff member. Current values: Japanese, English, Korean, Italian, Spanish, Portuguese, French, German, Hebrew, Hungarian, Chinese, Arabic, Filipino, Catalan, Finnish, Turkish, Dutch, Swedish, Thai, Tagalog, Malaysian, Indonesian, Vietnamese, Nepali, Hindi, Urdu

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">image</code></span>](#image)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StaffImage</code></span>](/types/objects/staff-image.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#image}

The staff images

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">description</code></span>](#description)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#description}

A general description of the staff member

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.description</code>.<code className="gqlmd-mdx-entity-name">asHtml</code></span>](#staff-description-as-html)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#staff-description-as-html}

Return the string in pre-parsed html instead of markdown

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">primaryOccupations</code></span>](#primary-occupations)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#primary-occupations}

The person's primary occupations

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">gender</code></span>](#gender)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#gender}

The staff's gender. Usually Male, Female, or Non-binary but can be any string.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">dateOfBirth</code></span>](#date-of-birth)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDate</code></span>](/types/objects/fuzzy-date.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#date-of-birth}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">dateOfDeath</code></span>](#date-of-death)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDate</code></span>](/types/objects/fuzzy-date.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#date-of-death}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">age</code></span>](#age)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#age}

The person's age in years

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">yearsActive</code></span>](#years-active)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#years-active}

\[startYear, endYear] (If the 2nd value is not present staff is still active)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">homeTown</code></span>](#home-town)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#home-town}

The persons birthplace or hometown

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">bloodType</code></span>](#blood-type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#blood-type}

The persons blood type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">isFavourite</code></span>](#is-favourite)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-favourite}

If the staff member is marked as favourite by the currently authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">isFavouriteBlocked</code></span>](#is-favourite-blocked)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-favourite-blocked}

If the staff member is blocked from being added to favourites

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">siteUrl</code></span>](#site-url)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-url}

The url for the staff page on the AniList website

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">staffMedia</code></span>](#staff-media)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaConnection</code></span>](/types/objects/media-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#staff-media}

Media where the staff member has a production role

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.staffMedia</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#staff-staff-media-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaSort\]</code></span>](/types/enums/media-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#staff-staff-media-sort}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.staffMedia</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#staff-staff-media-type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaType</code></span>](/types/enums/media-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#staff-staff-media-type}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.staffMedia</code>.<code className="gqlmd-mdx-entity-name">onList</code></span>](#staff-staff-media-on-list)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#staff-staff-media-on-list}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.staffMedia</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#staff-staff-media-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#staff-staff-media-page}

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.staffMedia</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#staff-staff-media-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#staff-staff-media-per-page}

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">characters</code></span>](#characters)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterConnection</code></span>](/types/objects/character-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#characters}

Characters voiced by the actor

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.characters</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#staff-characters-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[CharacterSort\]</code></span>](/types/enums/character-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#staff-characters-sort}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.characters</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#staff-characters-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#staff-characters-page}

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.characters</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#staff-characters-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#staff-characters-per-page}

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">characterMedia</code></span>](#character-media)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaConnection</code></span>](/types/objects/media-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#character-media}

Media the actor voiced characters in. (Same data as characters with media as node instead of characters)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.characterMedia</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#staff-character-media-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaSort\]</code></span>](/types/enums/media-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#staff-character-media-sort}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.characterMedia</code>.<code className="gqlmd-mdx-entity-name">onList</code></span>](#staff-character-media-on-list)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#staff-character-media-on-list}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.characterMedia</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#staff-character-media-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#staff-character-media-page}

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.characterMedia</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#staff-character-media-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#staff-character-media-per-page}

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="warning" label="deprecated" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#updated-at}

:::warning[DEPRECATED]
No data available
:::

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">staff</code></span>](#staff)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Staff</code></span>](/types/objects/staff.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#staff}

Staff member that the submission is referencing

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">submitter</code></span>](#submitter)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#submitter}

Submitter for the submission

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">submissionStatus</code></span>](#submission-status)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#submission-status}

Status of the submission

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">submissionNotes</code></span>](#submission-notes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#submission-notes}

Inner details of submission status

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">favourites</code></span>](#favourites)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#favourites}

The amount of user's who have favourited the staff member

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">modNotes</code></span>](#mod-notes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#mod-notes}

Notes for site moderators

### Returned By

[`Staff`](/operations/queries/staff.mdx)  <Chip color="info" label="query" size="small" variant="outlined" />

### Member Of

[`CharacterEdge`](/types/objects/character-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`CharacterSubmissionEdge`](/types/objects/character-submission-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`InternalPage`](/types/objects/internal-page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaCharacter`](/types/objects/media-character.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaEdge`](/types/objects/media-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaSubmissionEdge`](/types/objects/media-submission-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Page`](/types/objects/page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`RevisionHistory`](/types/objects/revision-history.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Staff`](/types/objects/staff.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`StaffConnection`](/types/objects/staff-connection.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`StaffEdge`](/types/objects/staff-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`StaffRoleType`](/types/objects/staff-role-type.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`StaffStats`](/types/objects/staff-stats.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`StaffSubmission`](/types/objects/staff-submission.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`StaffSubmissionUpdateNotification`](/types/objects/staff-submission-update-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`UserStaffStatistic`](/types/objects/user-staff-statistic.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`UserVoiceActorStatistic`](/types/objects/user-voice-actor-statistic.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
