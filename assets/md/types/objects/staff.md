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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the staff member

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">name</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StaffName</code></span>](/types/objects/staff-name.mdx) :badge[object]

The names of the staff member

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">language</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StaffLanguage</code></span>](/types/enums/staff-language.mdx) :badge[deprecated]{warning} :badge[enum]

:::warning[DEPRECATED]
Replaced with languageV2
:::

The primary language the staff member dub's in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">languageV2</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The primary language of the staff member. Current values: Japanese, English, Korean, Italian, Spanish, Portuguese, French, German, Hebrew, Hungarian, Chinese, Arabic, Filipino, Catalan, Finnish, Turkish, Dutch, Swedish, Thai, Tagalog, Malaysian, Indonesian, Vietnamese, Nepali, Hindi, Urdu

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">image</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StaffImage</code></span>](/types/objects/staff-image.mdx) :badge[object]

The staff images

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">description</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

A general description of the staff member

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.description</code>.<code className="gqlmd-mdx-entity-name">asHtml</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Return the string in pre-parsed html instead of markdown

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">primaryOccupations</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

The person's primary occupations

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">gender</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The staff's gender. Usually Male, Female, or Non-binary but can be any string.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">dateOfBirth</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDate</code></span>](/types/objects/fuzzy-date.mdx) :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">dateOfDeath</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDate</code></span>](/types/objects/fuzzy-date.mdx) :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">age</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The person's age in years

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">yearsActive</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

\[startYear, endYear] (If the 2nd value is not present staff is still active)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">homeTown</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The persons birthplace or hometown

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">bloodType</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The persons blood type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">isFavourite</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) :badge[non-null] :badge[scalar]

If the staff member is marked as favourite by the currently authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">isFavouriteBlocked</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) :badge[non-null] :badge[scalar]

If the staff member is blocked from being added to favourites

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">siteUrl</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The url for the staff page on the AniList website

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">staffMedia</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaConnection</code></span>](/types/objects/media-connection.mdx) :badge[object]

Media where the staff member has a production role

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.staffMedia</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaSort\]</code></span>](/types/enums/media-sort.mdx) :badge[list] :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.staffMedia</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaType</code></span>](/types/enums/media-type.mdx) :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.staffMedia</code>.<code className="gqlmd-mdx-entity-name">onList</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.staffMedia</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.staffMedia</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">characters</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterConnection</code></span>](/types/objects/character-connection.mdx) :badge[object]

Characters voiced by the actor

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.characters</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[CharacterSort\]</code></span>](/types/enums/character-sort.mdx) :badge[list] :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.characters</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.characters</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">characterMedia</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaConnection</code></span>](/types/objects/media-connection.mdx) :badge[object]

Media the actor voiced characters in. (Same data as characters with media as node instead of characters)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.characterMedia</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaSort\]</code></span>](/types/enums/media-sort.mdx) :badge[list] :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.characterMedia</code>.<code className="gqlmd-mdx-entity-name">onList</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.characterMedia</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff.characterMedia</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">updatedAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[deprecated]{warning} :badge[scalar]

:::warning[DEPRECATED]
No data available
:::

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">staff</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Staff</code></span>](/types/objects/staff.mdx) :badge[object]

Staff member that the submission is referencing

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">submitter</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">User</code></span>](/types/objects/user.mdx) :badge[object]

Submitter for the submission

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">submissionStatus</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Status of the submission

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">submissionNotes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Inner details of submission status

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">favourites</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of user's who have favourited the staff member

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Staff</code>.<code className="gqlmd-mdx-entity-name">modNotes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Notes for site moderators

### Returned By

[`Staff`](/operations/queries/staff.mdx)  :badge[query]

### Member Of

[`CharacterEdge`](/types/objects/character-edge.mdx)  :badge[object]<Bullet />[`CharacterSubmissionEdge`](/types/objects/character-submission-edge.mdx)  :badge[object]<Bullet />[`InternalPage`](/types/objects/internal-page.mdx)  :badge[object]<Bullet />[`MediaCharacter`](/types/objects/media-character.mdx)  :badge[object]<Bullet />[`MediaEdge`](/types/objects/media-edge.mdx)  :badge[object]<Bullet />[`MediaSubmissionEdge`](/types/objects/media-submission-edge.mdx)  :badge[object]<Bullet />[`Page`](/types/objects/page.mdx)  :badge[object]<Bullet />[`RevisionHistory`](/types/objects/revision-history.mdx)  :badge[object]<Bullet />[`Staff`](/types/objects/staff.mdx)  :badge[object]<Bullet />[`StaffConnection`](/types/objects/staff-connection.mdx)  :badge[object]<Bullet />[`StaffEdge`](/types/objects/staff-edge.mdx)  :badge[object]<Bullet />[`StaffRoleType`](/types/objects/staff-role-type.mdx)  :badge[object]<Bullet />[`StaffStats`](/types/objects/staff-stats.mdx)  :badge[object]<Bullet />[`StaffSubmission`](/types/objects/staff-submission.mdx)  :badge[object]<Bullet />[`StaffSubmissionUpdateNotification`](/types/objects/staff-submission-update-notification.mdx)  :badge[object]<Bullet />[`UserStaffStatistic`](/types/objects/user-staff-statistic.mdx)  :badge[object]<Bullet />[`UserVoiceActorStatistic`](/types/objects/user-voice-actor-statistic.mdx)  :badge[object]
