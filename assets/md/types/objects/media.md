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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

The id of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">idMal</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The mal id of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">title</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaTitle</code></span>](/types/objects/media-title.mdx) :badge[object]

The official titles of the media in various languages

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaType</code></span>](/types/enums/media-type.mdx) :badge[enum]

The type of the media; anime or manga

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">format</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaFormat</code></span>](/types/enums/media-format.mdx) :badge[enum]

The format the media was released in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">status</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaStatus</code></span>](/types/enums/media-status.mdx) :badge[enum]

The current releasing status of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.status</code>.<code className="gqlmd-mdx-entity-name">version</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Provide 2 to use new version 2 of sources enum

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">description</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Short description of the media's story and characters

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.description</code>.<code className="gqlmd-mdx-entity-name">asHtml</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Return the string in pre-parsed html instead of markdown

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">startDate</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDate</code></span>](/types/objects/fuzzy-date.mdx) :badge[object]

The first official release date of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">endDate</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDate</code></span>](/types/objects/fuzzy-date.mdx) :badge[object]

The last official release date of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">season</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaSeason</code></span>](/types/enums/media-season.mdx) :badge[enum]

The season the media was initially released in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">seasonYear</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The season year the media was initially released in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">seasonInt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[deprecated]{warning} :badge[scalar]

:::warning[DEPRECATED]
:::

The year & season the media was initially released in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">episodes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of episodes the anime has when complete

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">duration</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The general length of each anime episode in minutes

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">chapters</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of chapters the manga has when complete

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">volumes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of volumes the manga has when complete

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">countryOfOrigin</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CountryCode</code></span>](/types/scalars/country-code.mdx) :badge[scalar]

Where the media was created. (ISO 3166-1 alpha-2)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">isLicensed</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the media is officially licensed or a self-published doujin release

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">source</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaSource</code></span>](/types/enums/media-source.mdx) :badge[enum]

Source type the media was adapted from.

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.source</code>.<code className="gqlmd-mdx-entity-name">version</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Provide 2 or 3 to use new version 2 or 3 of sources enum

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">hashtag</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Official Twitter hashtags for the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">trailer</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaTrailer</code></span>](/types/objects/media-trailer.mdx) :badge[object]

Media trailer or advertisement

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">updatedAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

When the media's data was last updated

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">coverImage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaCoverImage</code></span>](/types/objects/media-cover-image.mdx) :badge[object]

The cover images of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">bannerImage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The banner image of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">genres</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

The genres of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">synonyms</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

Alternative titles of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">averageScore</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

A weighted average score of all the user's scores of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">meanScore</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Mean score of all the user's scores of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">popularity</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The number of users with the media on their list

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">isLocked</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Locked media may not be added to lists our favorited. This may be due to the entry pending for deletion or other reasons.

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">trending</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of related activity in the past hour

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">favourites</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of user's who have favourited the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">tags</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaTag\]</code></span>](/types/objects/media-tag.mdx) :badge[list] :badge[object]

List of tags that describes elements and themes of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">relations</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaConnection</code></span>](/types/objects/media-connection.mdx) :badge[object]

Other media in the same or connecting franchise

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">characters</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterConnection</code></span>](/types/objects/character-connection.mdx) :badge[object]

The characters in the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.characters</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[CharacterSort\]</code></span>](/types/enums/character-sort.mdx) :badge[list] :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.characters</code>.<code className="gqlmd-mdx-entity-name">role</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CharacterRole</code></span>](/types/enums/character-role.mdx) :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.characters</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.characters</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">staff</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StaffConnection</code></span>](/types/objects/staff-connection.mdx) :badge[object]

The staff who produced the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.staff</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffSort\]</code></span>](/types/enums/staff-sort.mdx) :badge[list] :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.staff</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.staff</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">studios</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">StudioConnection</code></span>](/types/objects/studio-connection.mdx) :badge[object]

The companies who produced the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.studios</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StudioSort\]</code></span>](/types/enums/studio-sort.mdx) :badge[list] :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.studios</code>.<code className="gqlmd-mdx-entity-name">isMain</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">isFavourite</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) :badge[non-null] :badge[scalar]

If the media is marked as favourite by the current authenticated user

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">isFavouriteBlocked</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean!</code></span>](/types/scalars/boolean.mdx) :badge[non-null] :badge[scalar]

If the media is blocked from being added to favourites

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">isAdult</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the media is intended only for 18+ adult audiences

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">nextAiringEpisode</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">AiringSchedule</code></span>](/types/objects/airing-schedule.mdx) :badge[object]

The media's next episode airing schedule

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">airingSchedule</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">AiringScheduleConnection</code></span>](/types/objects/airing-schedule-connection.mdx) :badge[object]

The media's entire airing schedule

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.airingSchedule</code>.<code className="gqlmd-mdx-entity-name">notYetAired</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter to episodes that have not yet aired

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.airingSchedule</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.airingSchedule</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">trends</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaTrendConnection</code></span>](/types/objects/media-trend-connection.mdx) :badge[object]

The media's daily trend stats

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.trends</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaTrendSort\]</code></span>](/types/enums/media-trend-sort.mdx) :badge[list] :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.trends</code>.<code className="gqlmd-mdx-entity-name">releasing</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter to stats recorded while the media was releasing

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.trends</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.trends</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">externalLinks</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaExternalLink\]</code></span>](/types/objects/media-external-link.mdx) :badge[list] :badge[object]

External links to another site related to the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">streamingEpisodes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaStreamingEpisode\]</code></span>](/types/objects/media-streaming-episode.mdx) :badge[list] :badge[object]

Data and links to legal streaming episodes on external sites

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">rankings</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaRank\]</code></span>](/types/objects/media-rank.mdx) :badge[list] :badge[object]

The ranking of the media in a particular time span and format compared to other media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">mediaListEntry</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaList</code></span>](/types/objects/media-list.mdx) :badge[object]

The authenticated user's media list entry for the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">reviews</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ReviewConnection</code></span>](/types/objects/review-connection.mdx) :badge[object]

User reviews of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.reviews</code>.<code className="gqlmd-mdx-entity-name">limit</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.reviews</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ReviewSort\]</code></span>](/types/enums/review-sort.mdx) :badge[list] :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.reviews</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.reviews</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">recommendations</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">RecommendationConnection</code></span>](/types/objects/recommendation-connection.mdx) :badge[object]

User recommendations for similar media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.recommendations</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[RecommendationSort\]</code></span>](/types/enums/recommendation-sort.mdx) :badge[list] :badge[enum]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.recommendations</code>.<code className="gqlmd-mdx-entity-name">page</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The page

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media.recommendations</code>.<code className="gqlmd-mdx-entity-name">perPage</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The amount of entries per page, max 25

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">stats</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaStats</code></span>](/types/objects/media-stats.mdx) :badge[object]

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">siteUrl</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

The url for the media page on the AniList website

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">autoCreateForumThread</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the media should have forum thread automatically created for it on airing episode release

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">isRecommendationBlocked</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the media is blocked from being recommended to/from

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">isReviewBlocked</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the media is blocked from being reviewed

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">modNotes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Notes for site moderators

### Returned By

[`Media`](/operations/queries/media.mdx)  :badge[query]

### Member Of

[`AiringNotification`](/types/objects/airing-notification.mdx)  :badge[object]<Bullet />[`AiringSchedule`](/types/objects/airing-schedule.mdx)  :badge[object]<Bullet />[`CharacterEdge`](/types/objects/character-edge.mdx)  :badge[object]<Bullet />[`InternalPage`](/types/objects/internal-page.mdx)  :badge[object]<Bullet />[`ListActivity`](/types/objects/list-activity.mdx)  :badge[object]<Bullet />[`MediaConnection`](/types/objects/media-connection.mdx)  :badge[object]<Bullet />[`MediaDataChangeNotification`](/types/objects/media-data-change-notification.mdx)  :badge[object]<Bullet />[`MediaEdge`](/types/objects/media-edge.mdx)  :badge[object]<Bullet />[`MediaList`](/types/objects/media-list.mdx)  :badge[object]<Bullet />[`MediaMergeNotification`](/types/objects/media-merge-notification.mdx)  :badge[object]<Bullet />[`MediaSubmission`](/types/objects/media-submission.mdx)  :badge[object]<Bullet />[`MediaSubmissionEdge`](/types/objects/media-submission-edge.mdx)  :badge[object]<Bullet />[`MediaSubmissionUpdateNotification`](/types/objects/media-submission-update-notification.mdx)  :badge[object]<Bullet />[`MediaTrend`](/types/objects/media-trend.mdx)  :badge[object]<Bullet />[`Page`](/types/objects/page.mdx)  :badge[object]<Bullet />[`Recommendation`](/types/objects/recommendation.mdx)  :badge[object]<Bullet />[`RelatedMediaAdditionNotification`](/types/objects/related-media-addition-notification.mdx)  :badge[object]<Bullet />[`Review`](/types/objects/review.mdx)  :badge[object]<Bullet />[`RevisionHistory`](/types/objects/revision-history.mdx)  :badge[object]<Bullet />[`Thread`](/types/objects/thread.mdx)  :badge[object]
