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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">idMal</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's MyAnimeList id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">startDate</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) :badge[scalar]

Filter by the start date of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">endDate</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) :badge[scalar]

Filter by the end date of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">season</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaSeason</code></span>](/types/enums/media-season.mdx) :badge[enum]

Filter by the season the media was released in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">seasonYear</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The year of the season (Winter 2017 would also include December 2016 releases). Requires season argument

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaType</code></span>](/types/enums/media-type.mdx) :badge[enum]

Filter by the media's type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">format</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaFormat</code></span>](/types/enums/media-format.mdx) :badge[enum]

Filter by the media's format

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">status</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaStatus</code></span>](/types/enums/media-status.mdx) :badge[enum]

Filter by the media's current release status

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">episodes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by amount of episodes the media has

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">duration</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's episode length

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">chapters</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's chapter count

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">volumes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's volume count

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">isAdult</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter by if the media's intended for 18+ adult audiences

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">genre</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by the media's genres

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">tag</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by the media's tags

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">minimumTagRank</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Only apply the tags filter argument to tags above this rank. Default: 18

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">tagCategory</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by the media's tags with in a tag category

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">onList</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter by the media on the authenticated user's lists

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">licensedBy</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter media by sites name with a online streaming or reading license

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">licensedById</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter media by sites id with a online streaming or reading license

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">averageScore</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's average score

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">popularity</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the number of users with this media on their list

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">source</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaSource</code></span>](/types/enums/media-source.mdx) :badge[enum]

Filter by the source type of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">countryOfOrigin</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CountryCode</code></span>](/types/scalars/country-code.mdx) :badge[scalar]

Filter by the media's country of origin

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">isLicensed</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the media is officially licensed or a self-published doujin release

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by search query

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the media id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the media id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">idMal\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's MyAnimeList id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">idMal\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the media's MyAnimeList id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">idMal\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the media's MyAnimeList id (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">startDate\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) :badge[scalar]

Filter by the start date of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">startDate\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) :badge[scalar]

Filter by the start date of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">startDate\_like</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by the start date of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">endDate\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) :badge[scalar]

Filter by the end date of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">endDate\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) :badge[scalar]

Filter by the end date of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">endDate\_like</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by the end date of the media

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">format\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaFormat\]</code></span>](/types/enums/media-format.mdx) :badge[list] :badge[enum]

Filter by the media's format (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">format\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaFormat</code></span>](/types/enums/media-format.mdx) :badge[enum]

Filter by the media's format

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">format\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaFormat\]</code></span>](/types/enums/media-format.mdx) :badge[list] :badge[enum]

Filter by the media's format (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">status\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaStatus\]</code></span>](/types/enums/media-status.mdx) :badge[list] :badge[enum]

Filter by the media's current release status (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">status\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaStatus</code></span>](/types/enums/media-status.mdx) :badge[enum]

Filter by the media's current release status

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">status\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaStatus\]</code></span>](/types/enums/media-status.mdx) :badge[list] :badge[enum]

Filter by the media's current release status (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">episodes\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by amount of episodes the media has

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">episodes\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by amount of episodes the media has

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">duration\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's episode length

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">duration\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's episode length

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">chapters\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's chapter count

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">chapters\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's chapter count

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">volumes\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's volume count

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">volumes\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's volume count

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">genre\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

Filter by the media's genres (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">genre\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

Filter by the media's genres (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">tag\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

Filter by the media's tags (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">tag\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

Filter by the media's tags (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">tagCategory\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

Filter by the media's tags with in a tag category (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">tagCategory\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

Filter by the media's tags with in a tag category (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">licensedBy\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

Filter media by sites name with a online streaming or reading license (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">licensedById\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter media by sites id with a online streaming or reading license (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">averageScore\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's average score

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">averageScore\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's average score

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">averageScore\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's average score

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">popularity\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the number of users with this media on their list

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">popularity\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the number of users with this media on their list

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">popularity\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the number of users with this media on their list

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">source\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaSource\]</code></span>](/types/enums/media-source.mdx) :badge[list] :badge[enum]

Filter by the source type of the media (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">countryOfOrigin\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[CountryCode\]</code></span>](/types/scalars/country-code.mdx) :badge[list] :badge[scalar]

Filter by the media's country of origin (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">countryOfOrigin\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[CountryCode\]</code></span>](/types/scalars/country-code.mdx) :badge[list] :badge[scalar]

Filter by the media's country of origin (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Media</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaSort\]</code></span>](/types/enums/media-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

### Type

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Media</code></span>](/types/objects/media.mdx) :badge[object]

Anime or Manga
