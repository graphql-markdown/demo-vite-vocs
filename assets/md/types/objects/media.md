Anime or Manga

```graphql
type Media {
  id: Int!
  idMal: Int
  title: MediaTitle
  type: MediaType
  format: MediaFormat
  status(
    version: Int
  ): MediaStatus
  description(
    asHtml: Boolean
  ): String
  startDate: FuzzyDate
  endDate: FuzzyDate
  season: MediaSeason
  seasonYear: Int
  seasonInt: Int @deprecated
  episodes: Int
  duration: Int
  chapters: Int
  volumes: Int
  countryOfOrigin: CountryCode
  isLicensed: Boolean
  source(
    version: Int
  ): MediaSource
  hashtag: String
  trailer: MediaTrailer
  updatedAt: Int
  coverImage: MediaCoverImage
  bannerImage: String
  genres: [String]
  synonyms: [String]
  averageScore: Int
  meanScore: Int
  popularity: Int
  isLocked: Boolean
  trending: Int
  favourites: Int
  tags: [MediaTag]
  relations: MediaConnection
  characters(
    sort: [CharacterSort]
    role: CharacterRole
    page: Int
    perPage: Int
  ): CharacterConnection
  staff(
    sort: [StaffSort]
    page: Int
    perPage: Int
  ): StaffConnection
  studios(
    sort: [StudioSort]
    isMain: Boolean
  ): StudioConnection
  isFavourite: Boolean!
  isFavouriteBlocked: Boolean!
  isAdult: Boolean
  nextAiringEpisode: AiringSchedule
  airingSchedule(
    notYetAired: Boolean
    page: Int
    perPage: Int
  ): AiringScheduleConnection
  trends(
    sort: [MediaTrendSort]
    releasing: Boolean
    page: Int
    perPage: Int
  ): MediaTrendConnection
  externalLinks: [MediaExternalLink]
  streamingEpisodes: [MediaStreamingEpisode]
  rankings: [MediaRank]
  mediaListEntry: MediaList
  reviews(
    limit: Int
    sort: [ReviewSort]
    page: Int
    perPage: Int
  ): ReviewConnection
  recommendations(
    sort: [RecommendationSort]
    page: Int
    perPage: Int
  ): RecommendationConnection
  stats: MediaStats
  siteUrl: String
  autoCreateForumThread: Boolean
  isRecommendationBlocked: Boolean
  isReviewBlocked: Boolean
  modNotes: String
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

The id of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">idMal</code></span>](#id-mal)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id-mal}

The mal id of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">title</code></span>](#title)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaTitle</code></span>](/types/objects/media-title.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#title}

The official titles of the media in various languages

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaType</code></span>](/types/enums/media-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type}

The type of the media; anime or manga

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">format</code></span>](#format)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaFormat</code></span>](/types/enums/media-format.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#format}

The format the media was released in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">status</code></span>](#status)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaStatus</code></span>](/types/enums/media-status.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#status}

The current releasing status of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.status</code>.<code className="gqlmd-mdx-entity-name">version</code></span>](#media-status-version)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-status-version}

Provide 2 to use new version 2 of sources enum

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">description</code></span>](#description)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#description}

Short description of the media's story and characters

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.description</code>.<code className="gqlmd-mdx-entity-name">asHtml</code></span>](#media-description-as-html)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-description-as-html}

Return the string in pre-parsed html instead of markdown

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">startDate</code></span>](#start-date)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDate</code></span>](/types/objects/fuzzy-date.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#start-date}

The first official release date of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">endDate</code></span>](#end-date)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDate</code></span>](/types/objects/fuzzy-date.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#end-date}

The last official release date of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">season</code></span>](#season)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaSeason</code></span>](/types/enums/media-season.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#season}

The season the media was initially released in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">seasonYear</code></span>](#season-year)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#season-year}

The season year the media was initially released in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">seasonInt</code></span>](#season-int)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="warning" label="deprecated" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#season-int}

:::warning[DEPRECATED]
:::

The year & season the media was initially released in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">episodes</code></span>](#episodes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#episodes}

The amount of episodes the anime has when complete

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">duration</code></span>](#duration)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#duration}

The general length of each anime episode in minutes

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">chapters</code></span>](#chapters)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#chapters}

The amount of chapters the manga has when complete

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">volumes</code></span>](#volumes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#volumes}

The amount of volumes the manga has when complete

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">countryOfOrigin</code></span>](#country-of-origin)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CountryCode</code></span>](/types/scalars/country-code.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#country-of-origin}

Where the media was created. (ISO 3166-1 alpha-2)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">isLicensed</code></span>](#is-licensed)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-licensed}

If the media is officially licensed or a self-published doujin release

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">source</code></span>](#source)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaSource</code></span>](/types/enums/media-source.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#source}

Source type the media was adapted from.

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.source</code>.<code className="gqlmd-mdx-entity-name">version</code></span>](#media-source-version)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-source-version}

Provide 2 or 3 to use new version 2 or 3 of sources enum

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">hashtag</code></span>](#hashtag)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#hashtag}

Official Twitter hashtags for the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">trailer</code></span>](#trailer)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaTrailer</code></span>](/types/objects/media-trailer.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#trailer}

Media trailer or advertisement

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#updated-at}

When the media's data was last updated

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">coverImage</code></span>](#cover-image)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaCoverImage</code></span>](/types/objects/media-cover-image.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#cover-image}

The cover images of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">bannerImage</code></span>](#banner-image)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#banner-image}

The banner image of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">genres</code></span>](#genres)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#genres}

The genres of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">synonyms</code></span>](#synonyms)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#synonyms}

Alternative titles of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">averageScore</code></span>](#average-score)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#average-score}

A weighted average score of all the user's scores of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">meanScore</code></span>](#mean-score)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#mean-score}

Mean score of all the user's scores of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">popularity</code></span>](#popularity)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#popularity}

The number of users with the media on their list

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">isLocked</code></span>](#is-locked)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-locked}

Locked media may not be added to lists our favorited. This may be due to the entry pending for deletion or other reasons.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">trending</code></span>](#trending)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#trending}

The amount of related activity in the past hour

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">favourites</code></span>](#favourites)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#favourites}

The amount of user's who have favourited the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">tags</code></span>](#tags)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaTag\]</code></span>](/types/objects/media-tag.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#tags}

List of tags that describes elements and themes of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">relations</code></span>](#relations)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaConnection</code></span>](/types/objects/media-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#relations}

Other media in the same or connecting franchise

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">characters</code></span>](#characters)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterConnection</code></span>](/types/objects/character-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#characters}

The characters in the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.characters</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#media-characters-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[CharacterSort\]</code></span>](/types/enums/character-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#media-characters-sort}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.characters</code>.<code className="gqlmd-mdx-entity-name">role</code></span>](#media-characters-role)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterRole</code></span>](/types/enums/character-role.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#media-characters-role}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.characters</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#media-characters-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-characters-page}

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.characters</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#media-characters-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-characters-per-page}

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">staff</code></span>](#staff)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StaffConnection</code></span>](/types/objects/staff-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#staff}

The staff who produced the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.staff</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#media-staff-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffSort\]</code></span>](/types/enums/staff-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#media-staff-sort}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.staff</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#media-staff-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-staff-page}

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.staff</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#media-staff-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-staff-per-page}

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">studios</code></span>](#studios)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StudioConnection</code></span>](/types/objects/studio-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#studios}

The companies who produced the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.studios</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#media-studios-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StudioSort\]</code></span>](/types/enums/studio-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#media-studios-sort}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.studios</code>.<code className="gqlmd-mdx-entity-name">isMain</code></span>](#media-studios-is-main)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-studios-is-main}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">isFavourite</code></span>](#is-favourite)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-favourite}

If the media is marked as favourite by the current authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">isFavouriteBlocked</code></span>](#is-favourite-blocked)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-favourite-blocked}

If the media is blocked from being added to favourites

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">isAdult</code></span>](#is-adult)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-adult}

If the media is intended only for 18+ adult audiences

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">nextAiringEpisode</code></span>](#next-airing-episode)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">AiringSchedule</code></span>](/types/objects/airing-schedule.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#next-airing-episode}

The media's next episode airing schedule

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">airingSchedule</code></span>](#airing-schedule)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">AiringScheduleConnection</code></span>](/types/objects/airing-schedule-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#airing-schedule}

The media's entire airing schedule

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.airingSchedule</code>.<code className="gqlmd-mdx-entity-name">notYetAired</code></span>](#media-airing-schedule-not-yet-aired)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-airing-schedule-not-yet-aired}

Filter to episodes that have not yet aired

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.airingSchedule</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#media-airing-schedule-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-airing-schedule-page}

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.airingSchedule</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#media-airing-schedule-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-airing-schedule-per-page}

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">trends</code></span>](#trends)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaTrendConnection</code></span>](/types/objects/media-trend-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#trends}

The media's daily trend stats

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.trends</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#media-trends-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaTrendSort\]</code></span>](/types/enums/media-trend-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#media-trends-sort}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.trends</code>.<code className="gqlmd-mdx-entity-name">releasing</code></span>](#media-trends-releasing)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-trends-releasing}

Filter to stats recorded while the media was releasing

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.trends</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#media-trends-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-trends-page}

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.trends</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#media-trends-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-trends-per-page}

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">externalLinks</code></span>](#external-links)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaExternalLink\]</code></span>](/types/objects/media-external-link.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#external-links}

External links to another site related to the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">streamingEpisodes</code></span>](#streaming-episodes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaStreamingEpisode\]</code></span>](/types/objects/media-streaming-episode.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#streaming-episodes}

Data and links to legal streaming episodes on external sites

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">rankings</code></span>](#rankings)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaRank\]</code></span>](/types/objects/media-rank.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#rankings}

The ranking of the media in a particular time span and format compared to other media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">mediaListEntry</code></span>](#media-list-entry)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaList</code></span>](/types/objects/media-list.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#media-list-entry}

The authenticated user's media list entry for the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">reviews</code></span>](#reviews)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ReviewConnection</code></span>](/types/objects/review-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#reviews}

User reviews of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.reviews</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#media-reviews-limit)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-reviews-limit}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.reviews</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#media-reviews-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ReviewSort\]</code></span>](/types/enums/review-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#media-reviews-sort}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.reviews</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#media-reviews-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-reviews-page}

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.reviews</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#media-reviews-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-reviews-per-page}

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">recommendations</code></span>](#recommendations)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">RecommendationConnection</code></span>](/types/objects/recommendation-connection.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#recommendations}

User recommendations for similar media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.recommendations</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#media-recommendations-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[RecommendationSort\]</code></span>](/types/enums/recommendation-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#media-recommendations-sort}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.recommendations</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#media-recommendations-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-recommendations-page}

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.recommendations</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#media-recommendations-per-page)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#media-recommendations-per-page}

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">stats</code></span>](#stats)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaStats</code></span>](/types/objects/media-stats.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#stats}

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">siteUrl</code></span>](#site-url)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#site-url}

The url for the media page on the AniList website

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">autoCreateForumThread</code></span>](#auto-create-forum-thread)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#auto-create-forum-thread}

If the media should have forum thread automatically created for it on airing episode release

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">isRecommendationBlocked</code></span>](#is-recommendation-blocked)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-recommendation-blocked}

If the media is blocked from being recommended to/from

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">isReviewBlocked</code></span>](#is-review-blocked)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-review-blocked}

If the media is blocked from being reviewed

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">modNotes</code></span>](#mod-notes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#mod-notes}

Notes for site moderators

### Returned By

[`Media`](/operations/queries/media.mdx)  <Chip color="info" label="query" size="small" variant="outlined" />

### Member Of

[`AiringNotification`](/types/objects/airing-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`AiringSchedule`](/types/objects/airing-schedule.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`CharacterEdge`](/types/objects/character-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`InternalPage`](/types/objects/internal-page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`ListActivity`](/types/objects/list-activity.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaConnection`](/types/objects/media-connection.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaDataChangeNotification`](/types/objects/media-data-change-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaEdge`](/types/objects/media-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaList`](/types/objects/media-list.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaMergeNotification`](/types/objects/media-merge-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaSubmission`](/types/objects/media-submission.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaSubmissionEdge`](/types/objects/media-submission-edge.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaSubmissionUpdateNotification`](/types/objects/media-submission-update-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`MediaTrend`](/types/objects/media-trend.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Page`](/types/objects/page.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Recommendation`](/types/objects/recommendation.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`RelatedMediaAdditionNotification`](/types/objects/related-media-addition-notification.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Review`](/types/objects/review.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`RevisionHistory`](/types/objects/revision-history.mdx)  <Chip color="info" label="object" size="small" variant="outlined" /><Bullet />[`Thread`](/types/objects/thread.mdx)  <Chip color="info" label="object" size="small" variant="outlined" />
