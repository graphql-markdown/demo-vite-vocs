Page of data. Limited to a max depth of 5000 entries. This is calculated as the page parameter multiplied by the perPage parameter.

```graphql
type Page {
  pageInfo: PageInfo
  users(
    id: Int
    name: String
    isModerator: Boolean
    search: String
    sort: [UserSort]
  ): [User]
  media(
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
  ): [Media]
  characters(
    id: Int
    isBirthday: Boolean
    search: String
    id_not: Int
    id_in: [Int]
    id_not_in: [Int]
    sort: [CharacterSort]
  ): [Character]
  staff(
    id: Int
    isBirthday: Boolean
    search: String
    id_not: Int
    id_in: [Int]
    id_not_in: [Int]
    sort: [StaffSort]
  ): [Staff]
  studios(
    id: Int
    search: String
    id_not: Int
    id_in: [Int]
    id_not_in: [Int]
    sort: [StudioSort]
  ): [Studio]
  mediaList(
    id: Int
    userId: Int
    userName: String
    type: MediaType
    status: MediaListStatus
    mediaId: Int
    isFollowing: Boolean
    notes: String
    startedAt: FuzzyDateInt
    completedAt: FuzzyDateInt
    compareWithAuthList: Boolean
    userId_in: [Int]
    status_in: [MediaListStatus]
    status_not_in: [MediaListStatus]
    status_not: MediaListStatus
    mediaId_in: [Int]
    mediaId_not_in: [Int]
    notes_like: String
    startedAt_greater: FuzzyDateInt
    startedAt_lesser: FuzzyDateInt
    startedAt_like: String
    completedAt_greater: FuzzyDateInt
    completedAt_lesser: FuzzyDateInt
    completedAt_like: String
    sort: [MediaListSort]
  ): [MediaList]
  airingSchedules(
    id: Int
    mediaId: Int
    episode: Int
    airingAt: Int
    notYetAired: Boolean
    id_not: Int
    id_in: [Int]
    id_not_in: [Int]
    mediaId_not: Int
    mediaId_in: [Int]
    mediaId_not_in: [Int]
    episode_not: Int
    episode_in: [Int]
    episode_not_in: [Int]
    episode_greater: Int
    episode_lesser: Int
    airingAt_greater: Int
    airingAt_lesser: Int
    sort: [AiringSort]
  ): [AiringSchedule]
  mediaTrends(
    mediaId: Int
    date: Int
    trending: Int
    averageScore: Int
    popularity: Int
    episode: Int
    releasing: Boolean
    mediaId_not: Int
    mediaId_in: [Int]
    mediaId_not_in: [Int]
    date_greater: Int
    date_lesser: Int
    trending_greater: Int
    trending_lesser: Int
    trending_not: Int
    averageScore_greater: Int
    averageScore_lesser: Int
    averageScore_not: Int
    popularity_greater: Int
    popularity_lesser: Int
    popularity_not: Int
    episode_greater: Int
    episode_lesser: Int
    episode_not: Int
    sort: [MediaTrendSort]
  ): [MediaTrend]
  notifications(
    type: NotificationType
    resetNotificationCount: Boolean
    type_in: [NotificationType]
  ): [NotificationUnion]
  followers(
    userId: Int!
    sort: [UserSort]
  ): [User]
  following(
    userId: Int!
    sort: [UserSort]
  ): [User]
  activities(
    id: Int
    userId: Int
    messengerId: Int
    mediaId: Int
    type: ActivityType
    isFollowing: Boolean
    hasReplies: Boolean
    hasRepliesOrTypeText: Boolean
    createdAt: Int
    id_not: Int
    id_in: [Int]
    id_not_in: [Int]
    userId_not: Int
    userId_in: [Int]
    userId_not_in: [Int]
    messengerId_not: Int
    messengerId_in: [Int]
    messengerId_not_in: [Int]
    mediaId_not: Int
    mediaId_in: [Int]
    mediaId_not_in: [Int]
    type_not: ActivityType
    type_in: [ActivityType]
    type_not_in: [ActivityType]
    createdAt_greater: Int
    createdAt_lesser: Int
    sort: [ActivitySort]
  ): [ActivityUnion]
  activityReplies(
    id: Int
    activityId: Int
  ): [ActivityReply]
  threads(
    id: Int
    userId: Int
    replyUserId: Int
    subscribed: Boolean
    categoryId: Int
    mediaCategoryId: Int
    search: String
    id_in: [Int]
    sort: [ThreadSort]
  ): [Thread]
  threadComments(
    id: Int
    threadId: Int
    userId: Int
    sort: [ThreadCommentSort]
  ): [ThreadComment]
  reviews(
    id: Int
    mediaId: Int
    userId: Int
    mediaType: MediaType
    sort: [ReviewSort]
  ): [Review]
  recommendations(
    id: Int
    mediaId: Int
    mediaRecommendationId: Int
    userId: Int
    rating: Int
    onList: Boolean
    rating_greater: Int
    rating_lesser: Int
    sort: [RecommendationSort]
  ): [Recommendation]
  likes(
    likeableId: Int
    type: LikeableType
  ): [User]
}
```

### Fields

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">pageInfo</code></span>](#page-info)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">PageInfo</code></span>](/types/objects/page-info.mdx) <Chip color="info" label="object" size="small" variant="outlined" /> \{#page-info}

The pagination information

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">users</code></span>](#users)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[User\]</code></span>](/types/objects/user.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#users}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.users</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#page-users-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-users-id}

Filter by the user id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.users</code>.<code className="gqlmd-mdx-entity-name">name</code></span>](#page-users-name)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-users-name}

Filter by the name of the user

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.users</code>.<code className="gqlmd-mdx-entity-name">isModerator</code></span>](#page-users-is-moderator)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-users-is-moderator}

Filter to moderators only if true

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.users</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#page-users-search)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-users-search}

Filter by search query

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.users</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#page-users-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserSort\]</code></span>](/types/enums/user-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-users-sort}

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#media)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Media\]</code></span>](/types/objects/media.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#media}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#page-media-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-id}

Filter by the media id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">idMal</code></span>](#page-media-id-mal)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-id-mal}

Filter by the media's MyAnimeList id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">startDate</code></span>](#page-media-start-date)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-start-date}

Filter by the start date of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">endDate</code></span>](#page-media-end-date)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-end-date}

Filter by the end date of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">season</code></span>](#page-media-season)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaSeason</code></span>](/types/enums/media-season.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-media-season}

Filter by the season the media was released in

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">seasonYear</code></span>](#page-media-season-year)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-season-year}

The year of the season (Winter 2017 would also include December 2016 releases). Requires season argument

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#page-media-type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaType</code></span>](/types/enums/media-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-media-type}

Filter by the media's type

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">format</code></span>](#page-media-format)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaFormat</code></span>](/types/enums/media-format.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-media-format}

Filter by the media's format

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">status</code></span>](#page-media-status)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaStatus</code></span>](/types/enums/media-status.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-media-status}

Filter by the media's current release status

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">episodes</code></span>](#page-media-episodes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-episodes}

Filter by amount of episodes the media has

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">duration</code></span>](#page-media-duration)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-duration}

Filter by the media's episode length

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">chapters</code></span>](#page-media-chapters)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-chapters}

Filter by the media's chapter count

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">volumes</code></span>](#page-media-volumes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-volumes}

Filter by the media's volume count

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">isAdult</code></span>](#page-media-is-adult)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-is-adult}

Filter by if the media's intended for 18+ adult audiences

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">genre</code></span>](#page-media-genre)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-genre}

Filter by the media's genres

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">tag</code></span>](#page-media-tag)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-tag}

Filter by the media's tags

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">minimumTagRank</code></span>](#page-media-minimum-tag-rank)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-minimum-tag-rank}

Only apply the tags filter argument to tags above this rank. Default: 18

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">tagCategory</code></span>](#page-media-tag-category)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-tag-category}

Filter by the media's tags with in a tag category

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">onList</code></span>](#page-media-on-list)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-on-list}

Filter by the media on the authenticated user's lists

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">licensedBy</code></span>](#page-media-licensed-by)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-licensed-by}

Filter media by sites name with a online streaming or reading license

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">licensedById</code></span>](#page-media-licensed-by-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-licensed-by-id}

Filter media by sites id with a online streaming or reading license

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">averageScore</code></span>](#page-media-average-score)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-average-score}

Filter by the media's average score

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">popularity</code></span>](#page-media-popularity)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-popularity}

Filter by the number of users with this media on their list

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">source</code></span>](#page-media-source)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaSource</code></span>](/types/enums/media-source.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-media-source}

Filter by the source type of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">countryOfOrigin</code></span>](#page-media-country-of-origin)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CountryCode</code></span>](/types/scalars/country-code.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-country-of-origin}

Filter by the media's country of origin

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">isLicensed</code></span>](#page-media-is-licensed)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-is-licensed}

If the media is officially licensed or a self-published doujin release

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#page-media-search)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-search}

Filter by search query

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#page-media-id-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-id-not}

Filter by the media id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#page-media-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-id-in}

Filter by the media id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#page-media-id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-id-not-in}

Filter by the media id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">idMal\_not</code></span>](#page-media-id-mal-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-id-mal-not}

Filter by the media's MyAnimeList id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">idMal\_in</code></span>](#page-media-id-mal-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-id-mal-in}

Filter by the media's MyAnimeList id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">idMal\_not\_in</code></span>](#page-media-id-mal-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-id-mal-not-in}

Filter by the media's MyAnimeList id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">startDate\_greater</code></span>](#page-media-start-date-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-start-date-greater}

Filter by the start date of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">startDate\_lesser</code></span>](#page-media-start-date-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-start-date-lesser}

Filter by the start date of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">startDate\_like</code></span>](#page-media-start-date-like)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-start-date-like}

Filter by the start date of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">endDate\_greater</code></span>](#page-media-end-date-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-end-date-greater}

Filter by the end date of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">endDate\_lesser</code></span>](#page-media-end-date-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-end-date-lesser}

Filter by the end date of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">endDate\_like</code></span>](#page-media-end-date-like)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-end-date-like}

Filter by the end date of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">format\_in</code></span>](#page-media-format-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaFormat\]</code></span>](/types/enums/media-format.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-media-format-in}

Filter by the media's format (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">format\_not</code></span>](#page-media-format-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaFormat</code></span>](/types/enums/media-format.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-media-format-not}

Filter by the media's format

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">format\_not\_in</code></span>](#page-media-format-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaFormat\]</code></span>](/types/enums/media-format.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-media-format-not-in}

Filter by the media's format (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">status\_in</code></span>](#page-media-status-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaStatus\]</code></span>](/types/enums/media-status.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-media-status-in}

Filter by the media's current release status (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">status\_not</code></span>](#page-media-status-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaStatus</code></span>](/types/enums/media-status.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-media-status-not}

Filter by the media's current release status

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">status\_not\_in</code></span>](#page-media-status-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaStatus\]</code></span>](/types/enums/media-status.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-media-status-not-in}

Filter by the media's current release status (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">episodes\_greater</code></span>](#page-media-episodes-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-episodes-greater}

Filter by amount of episodes the media has

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">episodes\_lesser</code></span>](#page-media-episodes-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-episodes-lesser}

Filter by amount of episodes the media has

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">duration\_greater</code></span>](#page-media-duration-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-duration-greater}

Filter by the media's episode length

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">duration\_lesser</code></span>](#page-media-duration-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-duration-lesser}

Filter by the media's episode length

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">chapters\_greater</code></span>](#page-media-chapters-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-chapters-greater}

Filter by the media's chapter count

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">chapters\_lesser</code></span>](#page-media-chapters-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-chapters-lesser}

Filter by the media's chapter count

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">volumes\_greater</code></span>](#page-media-volumes-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-volumes-greater}

Filter by the media's volume count

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">volumes\_lesser</code></span>](#page-media-volumes-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-volumes-lesser}

Filter by the media's volume count

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">genre\_in</code></span>](#page-media-genre-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-genre-in}

Filter by the media's genres (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">genre\_not\_in</code></span>](#page-media-genre-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-genre-not-in}

Filter by the media's genres (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">tag\_in</code></span>](#page-media-tag-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-tag-in}

Filter by the media's tags (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">tag\_not\_in</code></span>](#page-media-tag-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-tag-not-in}

Filter by the media's tags (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">tagCategory\_in</code></span>](#page-media-tag-category-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-tag-category-in}

Filter by the media's tags with in a tag category (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">tagCategory\_not\_in</code></span>](#page-media-tag-category-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-tag-category-not-in}

Filter by the media's tags with in a tag category (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">licensedBy\_in</code></span>](#page-media-licensed-by-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-licensed-by-in}

Filter media by sites name with a online streaming or reading license (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">licensedById\_in</code></span>](#page-media-licensed-by-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-licensed-by-id-in}

Filter media by sites id with a online streaming or reading license (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">averageScore\_not</code></span>](#page-media-average-score-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-average-score-not}

Filter by the media's average score

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">averageScore\_greater</code></span>](#page-media-average-score-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-average-score-greater}

Filter by the media's average score

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">averageScore\_lesser</code></span>](#page-media-average-score-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-average-score-lesser}

Filter by the media's average score

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">popularity\_not</code></span>](#page-media-popularity-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-popularity-not}

Filter by the number of users with this media on their list

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">popularity\_greater</code></span>](#page-media-popularity-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-popularity-greater}

Filter by the number of users with this media on their list

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">popularity\_lesser</code></span>](#page-media-popularity-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-popularity-lesser}

Filter by the number of users with this media on their list

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">source\_in</code></span>](#page-media-source-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaSource\]</code></span>](/types/enums/media-source.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-media-source-in}

Filter by the source type of the media (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">countryOfOrigin\_in</code></span>](#page-media-country-of-origin-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[CountryCode\]</code></span>](/types/scalars/country-code.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-country-of-origin-in}

Filter by the media's country of origin (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">countryOfOrigin\_not\_in</code></span>](#page-media-country-of-origin-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[CountryCode\]</code></span>](/types/scalars/country-code.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-country-of-origin-not-in}

Filter by the media's country of origin (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#page-media-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaSort\]</code></span>](/types/enums/media-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-media-sort}

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">characters</code></span>](#characters)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Character\]</code></span>](/types/objects/character.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#characters}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.characters</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#page-characters-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-characters-id}

Filter by character id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.characters</code>.<code className="gqlmd-mdx-entity-name">isBirthday</code></span>](#page-characters-is-birthday)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-characters-is-birthday}

Filter by character by if its their birthday today

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.characters</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#page-characters-search)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-characters-search}

Filter by search query

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.characters</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#page-characters-id-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-characters-id-not}

Filter by character id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.characters</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#page-characters-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-characters-id-in}

Filter by character id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.characters</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#page-characters-id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-characters-id-not-in}

Filter by character id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.characters</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#page-characters-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[CharacterSort\]</code></span>](/types/enums/character-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-characters-sort}

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">staff</code></span>](#staff)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Staff\]</code></span>](/types/objects/staff.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#staff}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.staff</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#page-staff-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-staff-id}

Filter by the staff id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.staff</code>.<code className="gqlmd-mdx-entity-name">isBirthday</code></span>](#page-staff-is-birthday)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-staff-is-birthday}

Filter by staff by if its their birthday today

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.staff</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#page-staff-search)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-staff-search}

Filter by search query

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.staff</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#page-staff-id-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-staff-id-not}

Filter by the staff id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.staff</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#page-staff-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-staff-id-in}

Filter by the staff id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.staff</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#page-staff-id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-staff-id-not-in}

Filter by the staff id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.staff</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#page-staff-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffSort\]</code></span>](/types/enums/staff-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-staff-sort}

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">studios</code></span>](#studios)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Studio\]</code></span>](/types/objects/studio.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#studios}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.studios</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#page-studios-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-studios-id}

Filter by the studio id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.studios</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#page-studios-search)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-studios-search}

Filter by search query

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.studios</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#page-studios-id-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-studios-id-not}

Filter by the studio id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.studios</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#page-studios-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-studios-id-in}

Filter by the studio id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.studios</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#page-studios-id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-studios-id-not-in}

Filter by the studio id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.studios</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#page-studios-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StudioSort\]</code></span>](/types/enums/studio-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-studios-sort}

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">mediaList</code></span>](#media-list)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaList\]</code></span>](/types/objects/media-list.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#media-list}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#page-media-list-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-list-id}

Filter by a list entry's id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#page-media-list-user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-list-user-id}

Filter by a user's id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">userName</code></span>](#page-media-list-user-name)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-list-user-name}

Filter by a user's name

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#page-media-list-type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaType</code></span>](/types/enums/media-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-media-list-type}

Filter by the list entries media type

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">status</code></span>](#page-media-list-status)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListStatus</code></span>](/types/enums/media-list-status.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-media-list-status}

Filter by the watching/reading status

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#page-media-list-media-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-list-media-id}

Filter by the media id of the list entry

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">isFollowing</code></span>](#page-media-list-is-following)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-list-is-following}

Filter list entries to users who are being followed by the authenticated user

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">notes</code></span>](#page-media-list-notes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-list-notes}

Filter by note words and #tags

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">startedAt</code></span>](#page-media-list-started-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-list-started-at}

Filter by the date the user started the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">completedAt</code></span>](#page-media-list-completed-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-list-completed-at}

Filter by the date the user completed the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">compareWithAuthList</code></span>](#page-media-list-compare-with-auth-list)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-list-compare-with-auth-list}

Limit to only entries also on the auth user's list. Requires user id or name arguments.

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">userId\_in</code></span>](#page-media-list-user-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-list-user-id-in}

Filter by a user's id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">status\_in</code></span>](#page-media-list-status-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaListStatus\]</code></span>](/types/enums/media-list-status.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-media-list-status-in}

Filter by the watching/reading status (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">status\_not\_in</code></span>](#page-media-list-status-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaListStatus\]</code></span>](/types/enums/media-list-status.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-media-list-status-not-in}

Filter by the watching/reading status (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">status\_not</code></span>](#page-media-list-status-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListStatus</code></span>](/types/enums/media-list-status.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-media-list-status-not}

Filter by the watching/reading status

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">mediaId\_in</code></span>](#page-media-list-media-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-list-media-id-in}

Filter by the media id of the list entry (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not\_in</code></span>](#page-media-list-media-id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-list-media-id-not-in}

Filter by the media id of the list entry (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">notes\_like</code></span>](#page-media-list-notes-like)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-list-notes-like}

Filter by note words and #tags

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">startedAt\_greater</code></span>](#page-media-list-started-at-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-list-started-at-greater}

Filter by the date the user started the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">startedAt\_lesser</code></span>](#page-media-list-started-at-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-list-started-at-lesser}

Filter by the date the user started the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">startedAt\_like</code></span>](#page-media-list-started-at-like)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-list-started-at-like}

Filter by the date the user started the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">completedAt\_greater</code></span>](#page-media-list-completed-at-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-list-completed-at-greater}

Filter by the date the user completed the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">completedAt\_lesser</code></span>](#page-media-list-completed-at-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-list-completed-at-lesser}

Filter by the date the user completed the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">completedAt\_like</code></span>](#page-media-list-completed-at-like)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-list-completed-at-like}

Filter by the date the user completed the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#page-media-list-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaListSort\]</code></span>](/types/enums/media-list-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-media-list-sort}

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">airingSchedules</code></span>](#airing-schedules)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[AiringSchedule\]</code></span>](/types/objects/airing-schedule.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#airing-schedules}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#page-airing-schedules-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-airing-schedules-id}

Filter by the id of the airing schedule item

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#page-airing-schedules-media-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-airing-schedules-media-id}

Filter by the id of associated media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">episode</code></span>](#page-airing-schedules-episode)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-airing-schedules-episode}

Filter by the airing episode number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">airingAt</code></span>](#page-airing-schedules-airing-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-airing-schedules-airing-at}

Filter by the time of airing

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">notYetAired</code></span>](#page-airing-schedules-not-yet-aired)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-airing-schedules-not-yet-aired}

Filter to episodes that haven't yet aired

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#page-airing-schedules-id-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-airing-schedules-id-not}

Filter by the id of the airing schedule item

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#page-airing-schedules-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-airing-schedules-id-in}

Filter by the id of the airing schedule item (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#page-airing-schedules-id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-airing-schedules-id-not-in}

Filter by the id of the airing schedule item (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not</code></span>](#page-airing-schedules-media-id-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-airing-schedules-media-id-not}

Filter by the id of associated media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">mediaId\_in</code></span>](#page-airing-schedules-media-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-airing-schedules-media-id-in}

Filter by the id of associated media (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not\_in</code></span>](#page-airing-schedules-media-id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-airing-schedules-media-id-not-in}

Filter by the id of associated media (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">episode\_not</code></span>](#page-airing-schedules-episode-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-airing-schedules-episode-not}

Filter by the airing episode number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">episode\_in</code></span>](#page-airing-schedules-episode-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-airing-schedules-episode-in}

Filter by the airing episode number (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">episode\_not\_in</code></span>](#page-airing-schedules-episode-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-airing-schedules-episode-not-in}

Filter by the airing episode number (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">episode\_greater</code></span>](#page-airing-schedules-episode-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-airing-schedules-episode-greater}

Filter by the airing episode number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">episode\_lesser</code></span>](#page-airing-schedules-episode-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-airing-schedules-episode-lesser}

Filter by the airing episode number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">airingAt\_greater</code></span>](#page-airing-schedules-airing-at-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-airing-schedules-airing-at-greater}

Filter by the time of airing

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">airingAt\_lesser</code></span>](#page-airing-schedules-airing-at-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-airing-schedules-airing-at-lesser}

Filter by the time of airing

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#page-airing-schedules-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[AiringSort\]</code></span>](/types/enums/airing-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-airing-schedules-sort}

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">mediaTrends</code></span>](#media-trends)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaTrend\]</code></span>](/types/objects/media-trend.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#media-trends}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#page-media-trends-media-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-media-id}

Filter by the media id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">date</code></span>](#page-media-trends-date)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-date}

Filter by date

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">trending</code></span>](#page-media-trends-trending)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-trending}

Filter by trending amount

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">averageScore</code></span>](#page-media-trends-average-score)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-average-score}

Filter by score

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">popularity</code></span>](#page-media-trends-popularity)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-popularity}

Filter by popularity

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">episode</code></span>](#page-media-trends-episode)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-episode}

Filter by episode number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">releasing</code></span>](#page-media-trends-releasing)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-releasing}

Filter to stats recorded while the media was releasing

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not</code></span>](#page-media-trends-media-id-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-media-id-not}

Filter by the media id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">mediaId\_in</code></span>](#page-media-trends-media-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-media-id-in}

Filter by the media id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not\_in</code></span>](#page-media-trends-media-id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-media-id-not-in}

Filter by the media id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">date\_greater</code></span>](#page-media-trends-date-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-date-greater}

Filter by date

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">date\_lesser</code></span>](#page-media-trends-date-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-date-lesser}

Filter by date

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">trending\_greater</code></span>](#page-media-trends-trending-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-trending-greater}

Filter by trending amount

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">trending\_lesser</code></span>](#page-media-trends-trending-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-trending-lesser}

Filter by trending amount

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">trending\_not</code></span>](#page-media-trends-trending-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-trending-not}

Filter by trending amount

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">averageScore\_greater</code></span>](#page-media-trends-average-score-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-average-score-greater}

Filter by score

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">averageScore\_lesser</code></span>](#page-media-trends-average-score-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-average-score-lesser}

Filter by score

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">averageScore\_not</code></span>](#page-media-trends-average-score-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-average-score-not}

Filter by score

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">popularity\_greater</code></span>](#page-media-trends-popularity-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-popularity-greater}

Filter by popularity

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">popularity\_lesser</code></span>](#page-media-trends-popularity-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-popularity-lesser}

Filter by popularity

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">popularity\_not</code></span>](#page-media-trends-popularity-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-popularity-not}

Filter by popularity

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">episode\_greater</code></span>](#page-media-trends-episode-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-episode-greater}

Filter by episode number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">episode\_lesser</code></span>](#page-media-trends-episode-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-episode-lesser}

Filter by episode number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">episode\_not</code></span>](#page-media-trends-episode-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-media-trends-episode-not}

Filter by episode number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#page-media-trends-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaTrendSort\]</code></span>](/types/enums/media-trend-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-media-trends-sort}

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">notifications</code></span>](#notifications)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[NotificationUnion\]</code></span>](/types/unions/notification-union.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="union" size="small" variant="outlined" /> \{#notifications}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.notifications</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#page-notifications-type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">NotificationType</code></span>](/types/enums/notification-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-notifications-type}

Filter by the type of notifications

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.notifications</code>.<code className="gqlmd-mdx-entity-name">resetNotificationCount</code></span>](#page-notifications-reset-notification-count)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-notifications-reset-notification-count}

Reset the unread notification count to 0 on load

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.notifications</code>.<code className="gqlmd-mdx-entity-name">type\_in</code></span>](#page-notifications-type-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[NotificationType\]</code></span>](/types/enums/notification-type.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-notifications-type-in}

Filter by the type of notifications (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">followers</code></span>](#followers)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[User\]</code></span>](/types/objects/user.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#followers}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.followers</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#page-followers-user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-followers-user-id}

User id of the follower/followed

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.followers</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#page-followers-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserSort\]</code></span>](/types/enums/user-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-followers-sort}

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">following</code></span>](#following)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[User\]</code></span>](/types/objects/user.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#following}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.following</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#page-following-user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) <Chip color="info" label="non-null" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-following-user-id}

User id of the follower/followed

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.following</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#page-following-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserSort\]</code></span>](/types/enums/user-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-following-sort}

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">activities</code></span>](#activities)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ActivityUnion\]</code></span>](/types/unions/activity-union.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="union" size="small" variant="outlined" /> \{#activities}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#page-activities-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-id}

Filter by the activity id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#page-activities-user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-user-id}

Filter by the owner user id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">messengerId</code></span>](#page-activities-messenger-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-messenger-id}

Filter by the id of the user who sent a message

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#page-activities-media-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-media-id}

Filter by the associated media id of the activity

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#page-activities-type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ActivityType</code></span>](/types/enums/activity-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-activities-type}

Filter by the type of activity

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">isFollowing</code></span>](#page-activities-is-following)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-is-following}

Filter activity to users who are being followed by the authenticated user

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">hasReplies</code></span>](#page-activities-has-replies)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-has-replies}

Filter activity to only activity with replies

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">hasRepliesOrTypeText</code></span>](#page-activities-has-replies-or-type-text)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-has-replies-or-type-text}

Filter activity to only activity with replies or is of type text

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#page-activities-created-at)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-created-at}

Filter by the time the activity was created

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#page-activities-id-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-id-not}

Filter by the activity id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#page-activities-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-id-in}

Filter by the activity id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#page-activities-id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-id-not-in}

Filter by the activity id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">userId\_not</code></span>](#page-activities-user-id-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-user-id-not}

Filter by the owner user id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">userId\_in</code></span>](#page-activities-user-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-user-id-in}

Filter by the owner user id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">userId\_not\_in</code></span>](#page-activities-user-id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-user-id-not-in}

Filter by the owner user id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">messengerId\_not</code></span>](#page-activities-messenger-id-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-messenger-id-not}

Filter by the id of the user who sent a message

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">messengerId\_in</code></span>](#page-activities-messenger-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-messenger-id-in}

Filter by the id of the user who sent a message (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">messengerId\_not\_in</code></span>](#page-activities-messenger-id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-messenger-id-not-in}

Filter by the id of the user who sent a message (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not</code></span>](#page-activities-media-id-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-media-id-not}

Filter by the associated media id of the activity

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">mediaId\_in</code></span>](#page-activities-media-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-media-id-in}

Filter by the associated media id of the activity (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not\_in</code></span>](#page-activities-media-id-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-media-id-not-in}

Filter by the associated media id of the activity (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">type\_not</code></span>](#page-activities-type-not)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ActivityType</code></span>](/types/enums/activity-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-activities-type-not}

Filter by the type of activity

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">type\_in</code></span>](#page-activities-type-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ActivityType\]</code></span>](/types/enums/activity-type.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-activities-type-in}

Filter by the type of activity (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">type\_not\_in</code></span>](#page-activities-type-not-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ActivityType\]</code></span>](/types/enums/activity-type.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-activities-type-not-in}

Filter by the type of activity (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">createdAt\_greater</code></span>](#page-activities-created-at-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-created-at-greater}

Filter by the time the activity was created

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">createdAt\_lesser</code></span>](#page-activities-created-at-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activities-created-at-lesser}

Filter by the time the activity was created

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#page-activities-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ActivitySort\]</code></span>](/types/enums/activity-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-activities-sort}

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">activityReplies</code></span>](#activity-replies)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ActivityReply\]</code></span>](/types/objects/activity-reply.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#activity-replies}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activityReplies</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#page-activity-replies-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activity-replies-id}

Filter by the reply id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activityReplies</code>.<code className="gqlmd-mdx-entity-name">activityId</code></span>](#page-activity-replies-activity-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-activity-replies-activity-id}

Filter by the parent id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">threads</code></span>](#threads)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Thread\]</code></span>](/types/objects/thread.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#threads}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threads</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#page-threads-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-threads-id}

Filter by the thread id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threads</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#page-threads-user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-threads-user-id}

Filter by the user id of the thread's creator

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threads</code>.<code className="gqlmd-mdx-entity-name">replyUserId</code></span>](#page-threads-reply-user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-threads-reply-user-id}

Filter by the user id of the last user to comment on the thread

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threads</code>.<code className="gqlmd-mdx-entity-name">subscribed</code></span>](#page-threads-subscribed)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-threads-subscribed}

Filter by if the currently authenticated user's subscribed threads

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threads</code>.<code className="gqlmd-mdx-entity-name">categoryId</code></span>](#page-threads-category-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-threads-category-id}

Filter by thread category id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threads</code>.<code className="gqlmd-mdx-entity-name">mediaCategoryId</code></span>](#page-threads-media-category-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-threads-media-category-id}

Filter by thread media id category

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threads</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#page-threads-search)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-threads-search}

Filter by search query

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threads</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#page-threads-id-in)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-threads-id-in}

Filter by the thread id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threads</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#page-threads-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ThreadSort\]</code></span>](/types/enums/thread-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-threads-sort}

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">threadComments</code></span>](#thread-comments)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ThreadComment\]</code></span>](/types/objects/thread-comment.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#thread-comments}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threadComments</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#page-thread-comments-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-thread-comments-id}

Filter by the comment id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threadComments</code>.<code className="gqlmd-mdx-entity-name">threadId</code></span>](#page-thread-comments-thread-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-thread-comments-thread-id}

Filter by the thread id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threadComments</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#page-thread-comments-user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-thread-comments-user-id}

Filter by the user id of the comment's creator

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threadComments</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#page-thread-comments-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ThreadCommentSort\]</code></span>](/types/enums/thread-comment-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-thread-comments-sort}

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">reviews</code></span>](#reviews)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Review\]</code></span>](/types/objects/review.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#reviews}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.reviews</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#page-reviews-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-reviews-id}

Filter by Review id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.reviews</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#page-reviews-media-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-reviews-media-id}

Filter by media id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.reviews</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#page-reviews-user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-reviews-user-id}

Filter by user id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.reviews</code>.<code className="gqlmd-mdx-entity-name">mediaType</code></span>](#page-reviews-media-type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaType</code></span>](/types/enums/media-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-reviews-media-type}

Filter by media type

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.reviews</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#page-reviews-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ReviewSort\]</code></span>](/types/enums/review-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-reviews-sort}

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">recommendations</code></span>](#recommendations)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Recommendation\]</code></span>](/types/objects/recommendation.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#recommendations}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.recommendations</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#page-recommendations-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-recommendations-id}

Filter by recommendation id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.recommendations</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#page-recommendations-media-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-recommendations-media-id}

Filter by media id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.recommendations</code>.<code className="gqlmd-mdx-entity-name">mediaRecommendationId</code></span>](#page-recommendations-media-recommendation-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-recommendations-media-recommendation-id}

Filter by media recommendation id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.recommendations</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#page-recommendations-user-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-recommendations-user-id}

Filter by user who created the recommendation

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.recommendations</code>.<code className="gqlmd-mdx-entity-name">rating</code></span>](#page-recommendations-rating)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-recommendations-rating}

Filter by total rating of the recommendation

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.recommendations</code>.<code className="gqlmd-mdx-entity-name">onList</code></span>](#page-recommendations-on-list)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-recommendations-on-list}

Filter by the media on the authenticated user's lists

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.recommendations</code>.<code className="gqlmd-mdx-entity-name">rating\_greater</code></span>](#page-recommendations-rating-greater)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-recommendations-rating-greater}

Filter by total rating of the recommendation

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.recommendations</code>.<code className="gqlmd-mdx-entity-name">rating\_lesser</code></span>](#page-recommendations-rating-lesser)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-recommendations-rating-lesser}

Filter by total rating of the recommendation

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.recommendations</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#page-recommendations-sort)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[RecommendationSort\]</code></span>](/types/enums/recommendation-sort.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-recommendations-sort}

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">likes</code></span>](#likes)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[User\]</code></span>](/types/objects/user.mdx) <Chip color="info" label="list" size="small" variant="outlined" /> <Chip color="info" label="object" size="small" variant="outlined" /> \{#likes}

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.likes</code>.<code className="gqlmd-mdx-entity-name">likeableId</code></span>](#page-likes-likeable-id)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) <Chip color="info" label="scalar" size="small" variant="outlined" /> \{#page-likes-likeable-id}

The id of the likeable type

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.likes</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#page-likes-type)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">LikeableType</code></span>](/types/enums/likeable-type.mdx) <Chip color="info" label="enum" size="small" variant="outlined" /> \{#page-likes-type}

The type of model the id applies to

### Returned By

[`Page`](/operations/queries/page.mdx)  <Chip color="info" label="query" size="small" variant="outlined" />
