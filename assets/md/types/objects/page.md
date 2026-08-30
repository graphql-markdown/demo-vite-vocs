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

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">pageInfo</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">PageInfo</code></span>](/types/objects/page-info.mdx) :badge[object]

The pagination information

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">users</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[User\]</code></span>](/types/objects/user.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.users</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the user id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.users</code>.<code className="gqlmd-mdx-entity-name">name</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by the name of the user

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.users</code>.<code className="gqlmd-mdx-entity-name">isModerator</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter to moderators only if true

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.users</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by search query

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.users</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserSort\]</code></span>](/types/enums/user-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">media</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Media\]</code></span>](/types/objects/media.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">idMal</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's MyAnimeList id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">startDate</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) :badge[scalar]

Filter by the start date of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">endDate</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) :badge[scalar]

Filter by the end date of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">season</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaSeason</code></span>](/types/enums/media-season.mdx) :badge[enum]

Filter by the season the media was released in

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">seasonYear</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The year of the season (Winter 2017 would also include December 2016 releases). Requires season argument

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaType</code></span>](/types/enums/media-type.mdx) :badge[enum]

Filter by the media's type

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">format</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaFormat</code></span>](/types/enums/media-format.mdx) :badge[enum]

Filter by the media's format

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">status</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaStatus</code></span>](/types/enums/media-status.mdx) :badge[enum]

Filter by the media's current release status

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">episodes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by amount of episodes the media has

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">duration</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's episode length

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">chapters</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's chapter count

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">volumes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's volume count

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">isAdult</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter by if the media's intended for 18+ adult audiences

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">genre</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by the media's genres

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">tag</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by the media's tags

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">minimumTagRank</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Only apply the tags filter argument to tags above this rank. Default: 18

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">tagCategory</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by the media's tags with in a tag category

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">onList</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter by the media on the authenticated user's lists

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">licensedBy</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter media by sites name with a online streaming or reading license

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">licensedById</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter media by sites id with a online streaming or reading license

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">averageScore</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's average score

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">popularity</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the number of users with this media on their list

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">source</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaSource</code></span>](/types/enums/media-source.mdx) :badge[enum]

Filter by the source type of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">countryOfOrigin</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">CountryCode</code></span>](/types/scalars/country-code.mdx) :badge[scalar]

Filter by the media's country of origin

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">isLicensed</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

If the media is officially licensed or a self-published doujin release

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by search query

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the media id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the media id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">idMal\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's MyAnimeList id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">idMal\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the media's MyAnimeList id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">idMal\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the media's MyAnimeList id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">startDate\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) :badge[scalar]

Filter by the start date of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">startDate\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) :badge[scalar]

Filter by the start date of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">startDate\_like</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by the start date of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">endDate\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) :badge[scalar]

Filter by the end date of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">endDate\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) :badge[scalar]

Filter by the end date of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">endDate\_like</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by the end date of the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">format\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaFormat\]</code></span>](/types/enums/media-format.mdx) :badge[list] :badge[enum]

Filter by the media's format (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">format\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaFormat</code></span>](/types/enums/media-format.mdx) :badge[enum]

Filter by the media's format

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">format\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaFormat\]</code></span>](/types/enums/media-format.mdx) :badge[list] :badge[enum]

Filter by the media's format (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">status\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaStatus\]</code></span>](/types/enums/media-status.mdx) :badge[list] :badge[enum]

Filter by the media's current release status (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">status\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaStatus</code></span>](/types/enums/media-status.mdx) :badge[enum]

Filter by the media's current release status

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">status\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaStatus\]</code></span>](/types/enums/media-status.mdx) :badge[list] :badge[enum]

Filter by the media's current release status (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">episodes\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by amount of episodes the media has

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">episodes\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by amount of episodes the media has

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">duration\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's episode length

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">duration\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's episode length

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">chapters\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's chapter count

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">chapters\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's chapter count

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">volumes\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's volume count

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">volumes\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's volume count

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">genre\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

Filter by the media's genres (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">genre\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

Filter by the media's genres (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">tag\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

Filter by the media's tags (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">tag\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

Filter by the media's tags (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">tagCategory\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

Filter by the media's tags with in a tag category (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">tagCategory\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

Filter by the media's tags with in a tag category (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">licensedBy\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[String\]</code></span>](/types/scalars/string.mdx) :badge[list] :badge[scalar]

Filter media by sites name with a online streaming or reading license (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">licensedById\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter media by sites id with a online streaming or reading license (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">averageScore\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's average score

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">averageScore\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's average score

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">averageScore\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media's average score

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">popularity\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the number of users with this media on their list

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">popularity\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the number of users with this media on their list

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">popularity\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the number of users with this media on their list

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">source\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaSource\]</code></span>](/types/enums/media-source.mdx) :badge[list] :badge[enum]

Filter by the source type of the media (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">countryOfOrigin\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[CountryCode\]</code></span>](/types/scalars/country-code.mdx) :badge[list] :badge[scalar]

Filter by the media's country of origin (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">countryOfOrigin\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[CountryCode\]</code></span>](/types/scalars/country-code.mdx) :badge[list] :badge[scalar]

Filter by the media's country of origin (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.media</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaSort\]</code></span>](/types/enums/media-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">characters</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Character\]</code></span>](/types/objects/character.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.characters</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by character id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.characters</code>.<code className="gqlmd-mdx-entity-name">isBirthday</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter by character by if its their birthday today

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.characters</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by search query

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.characters</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by character id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.characters</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by character id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.characters</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by character id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.characters</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[CharacterSort\]</code></span>](/types/enums/character-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">staff</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Staff\]</code></span>](/types/objects/staff.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.staff</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the staff id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.staff</code>.<code className="gqlmd-mdx-entity-name">isBirthday</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter by staff by if its their birthday today

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.staff</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by search query

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.staff</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the staff id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.staff</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the staff id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.staff</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the staff id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.staff</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StaffSort\]</code></span>](/types/enums/staff-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">studios</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Studio\]</code></span>](/types/objects/studio.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.studios</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the studio id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.studios</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by search query

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.studios</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the studio id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.studios</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the studio id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.studios</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the studio id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.studios</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[StudioSort\]</code></span>](/types/enums/studio-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">mediaList</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaList\]</code></span>](/types/objects/media-list.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by a list entry's id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by a user's id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">userName</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by a user's name

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaType</code></span>](/types/enums/media-type.mdx) :badge[enum]

Filter by the list entries media type

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">status</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListStatus</code></span>](/types/enums/media-list-status.mdx) :badge[enum]

Filter by the watching/reading status

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media id of the list entry

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">isFollowing</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter list entries to users who are being followed by the authenticated user

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">notes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by note words and #tags

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">startedAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) :badge[scalar]

Filter by the date the user started the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">completedAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) :badge[scalar]

Filter by the date the user completed the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">compareWithAuthList</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Limit to only entries also on the auth user's list. Requires user id or name arguments.

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">userId\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by a user's id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">status\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaListStatus\]</code></span>](/types/enums/media-list-status.mdx) :badge[list] :badge[enum]

Filter by the watching/reading status (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">status\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaListStatus\]</code></span>](/types/enums/media-list-status.mdx) :badge[list] :badge[enum]

Filter by the watching/reading status (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">status\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaListStatus</code></span>](/types/enums/media-list-status.mdx) :badge[enum]

Filter by the watching/reading status

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">mediaId\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the media id of the list entry (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the media id of the list entry (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">notes\_like</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by note words and #tags

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">startedAt\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) :badge[scalar]

Filter by the date the user started the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">startedAt\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) :badge[scalar]

Filter by the date the user started the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">startedAt\_like</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by the date the user started the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">completedAt\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) :badge[scalar]

Filter by the date the user completed the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">completedAt\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">FuzzyDateInt</code></span>](/types/scalars/fuzzy-date-int.mdx) :badge[scalar]

Filter by the date the user completed the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">completedAt\_like</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by the date the user completed the media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaList</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaListSort\]</code></span>](/types/enums/media-list-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">airingSchedules</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[AiringSchedule\]</code></span>](/types/objects/airing-schedule.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the id of the airing schedule item

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the id of associated media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">episode</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the airing episode number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">airingAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the time of airing

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">notYetAired</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter to episodes that haven't yet aired

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the id of the airing schedule item

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the id of the airing schedule item (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the id of the airing schedule item (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the id of associated media

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">mediaId\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the id of associated media (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the id of associated media (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">episode\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the airing episode number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">episode\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the airing episode number (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">episode\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the airing episode number (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">episode\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the airing episode number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">episode\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the airing episode number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">airingAt\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the time of airing

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">airingAt\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the time of airing

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.airingSchedules</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[AiringSort\]</code></span>](/types/enums/airing-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">mediaTrends</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaTrend\]</code></span>](/types/objects/media-trend.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">date</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by date

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">trending</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by trending amount

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">averageScore</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by score

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">popularity</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by popularity

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">episode</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by episode number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">releasing</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter to stats recorded while the media was releasing

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the media id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">mediaId\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the media id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the media id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">date\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by date

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">date\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by date

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">trending\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by trending amount

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">trending\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by trending amount

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">trending\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by trending amount

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">averageScore\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by score

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">averageScore\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by score

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">averageScore\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by score

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">popularity\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by popularity

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">popularity\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by popularity

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">popularity\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by popularity

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">episode\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by episode number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">episode\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by episode number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">episode\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by episode number

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.mediaTrends</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[MediaTrendSort\]</code></span>](/types/enums/media-trend-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">notifications</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[NotificationUnion\]</code></span>](/types/unions/notification-union.mdx) :badge[list] :badge[union]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.notifications</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">NotificationType</code></span>](/types/enums/notification-type.mdx) :badge[enum]

Filter by the type of notifications

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.notifications</code>.<code className="gqlmd-mdx-entity-name">resetNotificationCount</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Reset the unread notification count to 0 on load

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.notifications</code>.<code className="gqlmd-mdx-entity-name">type\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[NotificationType\]</code></span>](/types/enums/notification-type.mdx) :badge[list] :badge[enum]

Filter by the type of notifications (max 10,000 items)

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">followers</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[User\]</code></span>](/types/objects/user.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.followers</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

User id of the follower/followed

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.followers</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserSort\]</code></span>](/types/enums/user-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">following</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[User\]</code></span>](/types/objects/user.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.following</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int!</code></span>](/types/scalars/int.mdx) :badge[non-null] :badge[scalar]

User id of the follower/followed

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.following</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[UserSort\]</code></span>](/types/enums/user-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">activities</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ActivityUnion\]</code></span>](/types/unions/activity-union.mdx) :badge[list] :badge[union]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the activity id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the owner user id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">messengerId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the id of the user who sent a message

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the associated media id of the activity

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ActivityType</code></span>](/types/enums/activity-type.mdx) :badge[enum]

Filter by the type of activity

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">isFollowing</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter activity to users who are being followed by the authenticated user

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">hasReplies</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter activity to only activity with replies

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">hasRepliesOrTypeText</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter activity to only activity with replies or is of type text

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">createdAt</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the time the activity was created

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">id\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the activity id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the activity id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">id\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the activity id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">userId\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the owner user id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">userId\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the owner user id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">userId\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the owner user id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">messengerId\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the id of the user who sent a message

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">messengerId\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the id of the user who sent a message (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">messengerId\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the id of the user who sent a message (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the associated media id of the activity

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">mediaId\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the associated media id of the activity (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">mediaId\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the associated media id of the activity (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">type\_not</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">ActivityType</code></span>](/types/enums/activity-type.mdx) :badge[enum]

Filter by the type of activity

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">type\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ActivityType\]</code></span>](/types/enums/activity-type.mdx) :badge[list] :badge[enum]

Filter by the type of activity (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">type\_not\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ActivityType\]</code></span>](/types/enums/activity-type.mdx) :badge[list] :badge[enum]

Filter by the type of activity (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">createdAt\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the time the activity was created

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">createdAt\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the time the activity was created

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activities</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ActivitySort\]</code></span>](/types/enums/activity-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">activityReplies</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ActivityReply\]</code></span>](/types/objects/activity-reply.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activityReplies</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the reply id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.activityReplies</code>.<code className="gqlmd-mdx-entity-name">activityId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the parent id

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">threads</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Thread\]</code></span>](/types/objects/thread.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threads</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the thread id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threads</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the user id of the thread's creator

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threads</code>.<code className="gqlmd-mdx-entity-name">replyUserId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the user id of the last user to comment on the thread

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threads</code>.<code className="gqlmd-mdx-entity-name">subscribed</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter by if the currently authenticated user's subscribed threads

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threads</code>.<code className="gqlmd-mdx-entity-name">categoryId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by thread category id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threads</code>.<code className="gqlmd-mdx-entity-name">mediaCategoryId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by thread media id category

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threads</code>.<code className="gqlmd-mdx-entity-name">search</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">String</code></span>](/types/scalars/string.mdx) :badge[scalar]

Filter by search query

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threads</code>.<code className="gqlmd-mdx-entity-name">id\_in</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Int\]</code></span>](/types/scalars/int.mdx) :badge[list] :badge[scalar]

Filter by the thread id (max 10,000 items)

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threads</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ThreadSort\]</code></span>](/types/enums/thread-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">threadComments</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ThreadComment\]</code></span>](/types/objects/thread-comment.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threadComments</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the comment id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threadComments</code>.<code className="gqlmd-mdx-entity-name">threadId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the thread id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threadComments</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by the user id of the comment's creator

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.threadComments</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ThreadCommentSort\]</code></span>](/types/enums/thread-comment-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">reviews</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Review\]</code></span>](/types/objects/review.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.reviews</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by Review id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.reviews</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by media id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.reviews</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by user id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.reviews</code>.<code className="gqlmd-mdx-entity-name">mediaType</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">MediaType</code></span>](/types/enums/media-type.mdx) :badge[enum]

Filter by media type

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.reviews</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[ReviewSort\]</code></span>](/types/enums/review-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">recommendations</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[Recommendation\]</code></span>](/types/objects/recommendation.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.recommendations</code>.<code className="gqlmd-mdx-entity-name">id</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by recommendation id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.recommendations</code>.<code className="gqlmd-mdx-entity-name">mediaId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by media id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.recommendations</code>.<code className="gqlmd-mdx-entity-name">mediaRecommendationId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by media recommendation id

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.recommendations</code>.<code className="gqlmd-mdx-entity-name">userId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by user who created the recommendation

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.recommendations</code>.<code className="gqlmd-mdx-entity-name">rating</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by total rating of the recommendation

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.recommendations</code>.<code className="gqlmd-mdx-entity-name">onList</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Boolean</code></span>](/types/scalars/boolean.mdx) :badge[scalar]

Filter by the media on the authenticated user's lists

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.recommendations</code>.<code className="gqlmd-mdx-entity-name">rating\_greater</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by total rating of the recommendation

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.recommendations</code>.<code className="gqlmd-mdx-entity-name">rating\_lesser</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

Filter by total rating of the recommendation

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.recommendations</code>.<code className="gqlmd-mdx-entity-name">sort</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[RecommendationSort\]</code></span>](/types/enums/recommendation-sort.mdx) :badge[list] :badge[enum]

The order the results will be returned in

#### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page</code>.<code className="gqlmd-mdx-entity-name">likes</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">\[User\]</code></span>](/types/objects/user.mdx) :badge[list] :badge[object]

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.likes</code>.<code className="gqlmd-mdx-entity-name">likeableId</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">Int</code></span>](/types/scalars/int.mdx) :badge[scalar]

The id of the likeable type

##### [<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-parent">Page.likes</code>.<code className="gqlmd-mdx-entity-name">type</code></span>](#)<Bullet />[<span className="gqlmd-mdx-entity"><code className="gqlmd-mdx-entity-name">LikeableType</code></span>](/types/enums/likeable-type.mdx) :badge[enum]

The type of model the id applies to

### Returned By

[`Page`](/operations/queries/page.mdx)  :badge[query]
