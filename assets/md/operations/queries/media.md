Media query

```graphql
Media(
  id: Int
  idMal: Int
  startDate: FuzzyDateInt
  endDate: FuzzyDateInt
  season: MediaSeason
  seasonYear: Int
  type: MediaType
  format: MediaFormat
  status: MediaStatus
  episodes: Int
  duration: Int
  chapters: Int
  volumes: Int
  isAdult: Boolean
  genre: String
  tag: String
  minimumTagRank: Int
  tagCategory: String
  onList: Boolean
  licensedBy: String
  licensedById: Int
  averageScore: Int
  popularity: Int
  source: MediaSource
  countryOfOrigin: CountryCode
  isLicensed: Boolean
  search: String
  id_not: Int
  id_in: [Int]
  id_not_in: [Int]
  idMal_not: Int
  idMal_in: [Int]
  idMal_not_in: [Int]
  startDate_greater: FuzzyDateInt
  startDate_lesser: FuzzyDateInt
  startDate_like: String
  endDate_greater: FuzzyDateInt
  endDate_lesser: FuzzyDateInt
  endDate_like: String
  format_in: [MediaFormat]
  format_not: MediaFormat
  format_not_in: [MediaFormat]
  status_in: [MediaStatus]
  status_not: MediaStatus
  status_not_in: [MediaStatus]
  episodes_greater: Int
  episodes_lesser: Int
  duration_greater: Int
  duration_lesser: Int
  chapters_greater: Int
  chapters_lesser: Int
  volumes_greater: Int
  volumes_lesser: Int
  genre_in: [String]
  genre_not_in: [String]
  tag_in: [String]
  tag_not_in: [String]
  tagCategory_in: [String]
  tagCategory_not_in: [String]
  licensedBy_in: [String]
  licensedById_in: [Int]
  averageScore_not: Int
  averageScore_greater: Int
  averageScore_lesser: Int
  popularity_not: Int
  popularity_greater: Int
  popularity_lesser: Int
  source_in: [MediaSource]
  countryOfOrigin_in: [CountryCode]
  countryOfOrigin_not_in: [CountryCode]
  sort: [MediaSort]
): Media
```

### Arguments

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id}

Filter by the media id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">idMal</code></span>](#id-mal)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id-mal}

Filter by the media's MyAnimeList id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">startDate</code></span>](#start-date)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#start-date}

Filter by the start date of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">endDate</code></span>](#end-date)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#end-date}

Filter by the end date of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">season</code></span>](#season)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaSeason</code></span>](/types/enums/media-season.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#season}

Filter by the season the media was released in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">seasonYear</code></span>](#season-year)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#season-year}

The year of the season (Winter 2017 would also include December 2016 releases). Requires season argument

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaType</code></span>](/types/enums/media-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#type}

Filter by the media's type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">format</code></span>](#format)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaFormat</code></span>](/types/enums/media-format.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#format}

Filter by the media's format

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">status</code></span>](#status)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaStatus</code></span>](/types/enums/media-status.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#status}

Filter by the media's current release status

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">episodes</code></span>](#episodes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#episodes}

Filter by amount of episodes the media has

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">duration</code></span>](#duration)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#duration}

Filter by the media's episode length

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">chapters</code></span>](#chapters)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#chapters}

Filter by the media's chapter count

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">volumes</code></span>](#volumes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#volumes}

Filter by the media's volume count

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">isAdult</code></span>](#is-adult)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-adult}

Filter by if the media's intended for 18+ adult audiences

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">genre</code></span>](#genre)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#genre}

Filter by the media's genres

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">tag</code></span>](#tag)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#tag}

Filter by the media's tags

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">minimumTagRank</code></span>](#minimum-tag-rank)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#minimum-tag-rank}

Only apply the tags filter argument to tags above this rank. Default: 18

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">tagCategory</code></span>](#tag-category)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#tag-category}

Filter by the media's tags with in a tag category

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">onList</code></span>](#on-list)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#on-list}

Filter by the media on the authenticated user's lists

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">licensedBy</code></span>](#licensed-by)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#licensed-by}

Filter media by sites name with a online streaming or reading license

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">licensedById</code></span>](#licensed-by-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#licensed-by-id}

Filter media by sites id with a online streaming or reading license

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">averageScore</code></span>](#average-score)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#average-score}

Filter by the media's average score

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">popularity</code></span>](#popularity)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#popularity}

Filter by the number of users with this media on their list

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">source</code></span>](#source)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaSource</code></span>](/types/enums/media-source.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#source}

Filter by the source type of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">countryOfOrigin</code></span>](#country-of-origin)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CountryCode</code></span>](/types/scalars/country-code.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#country-of-origin}

Filter by the media's country of origin

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">isLicensed</code></span>](#is-licensed)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#is-licensed}

If the media is officially licensed or a self-published doujin release

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#search)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#search}

Filter by search query

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#id-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id-not}

Filter by the media id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id-in}

Filter by the media id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id-not-in}

Filter by the media id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">idMal\_not</code></span>](#id-mal-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id-mal-not}

Filter by the media's MyAnimeList id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">idMal\_in</code></span>](#id-mal-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id-mal-in}

Filter by the media's MyAnimeList id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">idMal\_not\_in</code></span>](#id-mal-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#id-mal-not-in}

Filter by the media's MyAnimeList id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">startDate\_greater</code></span>](#start-date-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#start-date-greater}

Filter by the start date of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">startDate\_lesser</code></span>](#start-date-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#start-date-lesser}

Filter by the start date of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">startDate\_like</code></span>](#start-date-like)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#start-date-like}

Filter by the start date of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">endDate\_greater</code></span>](#end-date-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#end-date-greater}

Filter by the end date of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">endDate\_lesser</code></span>](#end-date-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#end-date-lesser}

Filter by the end date of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">endDate\_like</code></span>](#end-date-like)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#end-date-like}

Filter by the end date of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">format\_in</code></span>](#format-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaFormat\]</code></span>](/types/enums/media-format.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#format-in}

Filter by the media's format (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">format\_not</code></span>](#format-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaFormat</code></span>](/types/enums/media-format.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#format-not}

Filter by the media's format

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">format\_not\_in</code></span>](#format-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaFormat\]</code></span>](/types/enums/media-format.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#format-not-in}

Filter by the media's format (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">status\_in</code></span>](#status-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaStatus\]</code></span>](/types/enums/media-status.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#status-in}

Filter by the media's current release status (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">status\_not</code></span>](#status-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaStatus</code></span>](/types/enums/media-status.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#status-not}

Filter by the media's current release status

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">status\_not\_in</code></span>](#status-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaStatus\]</code></span>](/types/enums/media-status.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#status-not-in}

Filter by the media's current release status (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">episodes\_greater</code></span>](#episodes-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#episodes-greater}

Filter by amount of episodes the media has

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">episodes\_lesser</code></span>](#episodes-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#episodes-lesser}

Filter by amount of episodes the media has

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">duration\_greater</code></span>](#duration-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#duration-greater}

Filter by the media's episode length

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">duration\_lesser</code></span>](#duration-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#duration-lesser}

Filter by the media's episode length

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">chapters\_greater</code></span>](#chapters-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#chapters-greater}

Filter by the media's chapter count

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">chapters\_lesser</code></span>](#chapters-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#chapters-lesser}

Filter by the media's chapter count

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">volumes\_greater</code></span>](#volumes-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#volumes-greater}

Filter by the media's volume count

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">volumes\_lesser</code></span>](#volumes-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#volumes-lesser}

Filter by the media's volume count

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">genre\_in</code></span>](#genre-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#genre-in}

Filter by the media's genres (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">genre\_not\_in</code></span>](#genre-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#genre-not-in}

Filter by the media's genres (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">tag\_in</code></span>](#tag-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#tag-in}

Filter by the media's tags (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">tag\_not\_in</code></span>](#tag-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#tag-not-in}

Filter by the media's tags (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">tagCategory\_in</code></span>](#tag-category-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#tag-category-in}

Filter by the media's tags with in a tag category (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">tagCategory\_not\_in</code></span>](#tag-category-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#tag-category-not-in}

Filter by the media's tags with in a tag category (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">licensedBy\_in</code></span>](#licensed-by-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#licensed-by-in}

Filter media by sites name with a online streaming or reading license (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">licensedById\_in</code></span>](#licensed-by-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#licensed-by-id-in}

Filter media by sites id with a online streaming or reading license (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">averageScore\_not</code></span>](#average-score-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#average-score-not}

Filter by the media's average score

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">averageScore\_greater</code></span>](#average-score-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#average-score-greater}

Filter by the media's average score

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">averageScore\_lesser</code></span>](#average-score-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#average-score-lesser}

Filter by the media's average score

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">popularity\_not</code></span>](#popularity-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#popularity-not}

Filter by the number of users with this media on their list

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">popularity\_greater</code></span>](#popularity-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#popularity-greater}

Filter by the number of users with this media on their list

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">popularity\_lesser</code></span>](#popularity-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#popularity-lesser}

Filter by the number of users with this media on their list

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">source\_in</code></span>](#source-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaSource\]</code></span>](/types/enums/media-source.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#source-in}

Filter by the source type of the media (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">countryOfOrigin\_in</code></span>](#country-of-origin-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[CountryCode\]</code></span>](/types/scalars/country-code.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#country-of-origin-in}

Filter by the media's country of origin (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">countryOfOrigin\_not\_in</code></span>](#country-of-origin-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[CountryCode\]</code></span>](/types/scalars/country-code.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#country-of-origin-not-in}

Filter by the media's country of origin (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaSort\]</code></span>](/types/enums/media-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#sort}

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) <Chip color="info" label="object" size="small" variant="outlined" />

Anime or Manga
